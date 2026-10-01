import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import { test } from 'node:test'
import vm from 'node:vm'
import ts from 'typescript'

const require = createRequire(import.meta.url)
const project = resolve(import.meta.dirname, '..')
const compile = path => ts.transpileModule(readFileSync(resolve(project, path), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
}).outputText
const identity = { exports: {} }
vm.runInNewContext(compile('lib/schema-ids.ts'), identity)
const good = () => ({
  name: 'TEST ONLY Visitor', email: 'qa@example.com', phone: '', helpType: 'Relocating',
  message: 'TEST ONLY. Not a customer inquiry.', website: '', requestId: '12345678-1234-4123-8123-123456789abc',
})
function handler(options = {}) {
  const calls = [], logs = []
  const scope = {
    exports: {}, Response, Request, TextDecoder, Uint8Array, AbortSignal,
    process: { env: { NODE_ENV: 'production', CONTACT_FORM_ENABLED: 'true', RESEND_API_KEY: 'test-only-not-a-real-key', CONTACT_FROM_EMAIL: 'website@contact.example.com', ...options.env } },
    require: name => name === './schema-ids' ? identity.exports : require(name),
    console: { error: (...args) => logs.push(args) },
    fetch: async (...args) => {
      calls.push(args)
      return options.fetch ? options.fetch(...args) : Response.json({ id: 'provider-test-id' })
    },
  }
  vm.runInNewContext(compile('lib/contact-delivery.ts'), scope)
  return { run: scope.exports.handleContact, calls, logs }
}
function request(data = good(), headers = {}) {
  return new Request('https://www.realestatewithshirin.com/api/contact', {
    method: 'POST', headers: { origin: 'https://www.realestatewithshirin.com', 'content-type': 'application/json', ...headers },
    body: typeof data === 'string' ? data : JSON.stringify(data),
  })
}

test('accepts only after provider acceptance, sends a fixed recipient and plain text, with idempotency', async () => {
  const h = handler(), data = good()
  data.name = 'TEST & <example>'
  const response = await h.run(request(data))
  assert.equal(response.status, 202)
  assert.deepEqual(await response.json(), { ok: true, status: 'accepted', reference: data.requestId })
  assert.equal(response.headers.get('cache-control'), 'no-store')
  assert.equal(h.calls.length, 1)
  const [url, init] = h.calls[0], body = JSON.parse(init.body)
  assert.equal(url, 'https://api.resend.com/emails')
  assert.deepEqual(body.to, [identity.exports.EMAIL])
  assert.equal(body.reply_to, data.email)
  assert.equal(body.subject, 'Website inquiry: Relocating')
  assert.equal(init.headers['Idempotency-Key'], `contact/${data.requestId}`)
  assert.equal(init.redirect, 'error')
  assert(body.text.includes(data.name))
  assert.equal(body.html, undefined)
  assert.equal(body.bcc, undefined)
  assert.equal(h.logs.length, 0)
})

test('rejects untrusted or missing origin before contacting provider', async () => {
  for (const origin of ['', 'https://attacker.example', 'https://www.realestatewithshirin.com.attacker.example']) {
    const h = handler(), response = await h.run(request(good(), { origin }))
    assert.equal(response.status, 403); assert.equal(h.calls.length, 0)
  }
})

test('accepts exactly configured preview origin and rejects arbitrary previews', async () => {
  const h = handler({ env: { VERCEL_URL: 'approved-preview.vercel.app' } })
  assert.equal((await h.run(request(good(), { origin: 'https://approved-preview.vercel.app' }))).status, 202)
  assert.equal((await h.run(request(good(), { origin: 'https://other-preview.vercel.app' }))).status, 403)
})

test('rejects wrong content type, malformed JSON, oversized and streamed bodies', async () => {
  for (const [data, headers, expected] of [
    [good(), { 'content-type': 'text/plain' }, 415],
    ['not json', {}, 400],
    [good(), { 'content-length': '30000' }, 413],
    ['x'.repeat(24001), {}, 413],
  ]) {
    const h = handler(); assert.equal((await h.run(request(data, headers))).status, expected); assert.equal(h.calls.length, 0)
  }
})

test('validates every field, rejects injection, unknown fields and honeypot', async () => {
  const variants = [
    null, [], { ...good(), name: '   ' }, { ...good(), name: 'x'.repeat(101) },
    { ...good(), name: 'Injected\nHeader' }, { ...good(), email: 'bad email' },
    { ...good(), email: 'a@example.com\r\nBcc: other@example.com' },
    { ...good(), phone: 'x'.repeat(41) }, { ...good(), helpType: 'Unknown' },
    { ...good(), message: 'x'.repeat(5001) }, { ...good(), message: 42 },
    { ...good(), message: 'Nul\u0000character' }, { ...good(), website: 'spam.example' },
    { ...good(), requestId: 'nope' }, { ...good(), to: 'attacker@example.com' },
  ]
  for (const data of variants) {
    const h = handler(); assert.equal((await h.run(request(data))).status, 400); assert.equal(h.calls.length, 0)
  }
})

test('5000-character Unicode messages fit body limit', async () => {
  const h = handler()
  assert.equal((await h.run(request({ ...good(), message: '界'.repeat(5000) }))).status, 202)
})

test('missing configuration fails honestly without sending', async () => {
  for (const env of [{ CONTACT_FORM_ENABLED: '' }, { RESEND_API_KEY: '' }, { CONTACT_FROM_EMAIL: '' }]) {
    const h = handler({ env }), response = await h.run(request())
    assert.equal(response.status, 503); assert.equal(h.calls.length, 0)
    assert.match((await response.json()).error, /has not been sent/)
  }
})

test('provider errors, invalid responses and timeouts cannot produce success or log inquiry data', async () => {
  const providers = [
    () => Response.json({ message: 'PRIVATE provider error' }, { status: 429 }),
    () => Response.json({ ok: true }),
    () => new Response('not-json'),
    () => { throw new Error('PRIVATE key or data in unexpected error') },
  ]
  for (const fetch of providers) {
    const h = handler({ fetch }), response = await h.run(request())
    assert.equal(response.status, 502); assert.equal((await response.json()).ok, false)
    const log = JSON.stringify(h.logs)
    for (const value of ['PRIVATE', good().email, good().name, good().message, 'test-only-not-a-real-key']) assert(!log.includes(value))
  }
})

test('best-effort rate limiting rejects sixth request with Retry-After', async () => {
  const h = handler()
  for (let i = 0; i < 5; i++) assert.equal((await h.run(request())).status, 202)
  const response = await h.run(request())
  assert.equal(response.status, 429); assert(Number(response.headers.get('retry-after')) > 0); assert.equal(h.calls.length, 5)
})

function client(fetch) {
  let slots = [], cursor = 0
  const react = {
    useEffect(callback) { callback() },
    useState(initial) { const i = cursor++; if (!(i in slots)) slots[i] = initial; return [slots[i], value => { slots[i] = value }] },
    useRef(initial) { const i = cursor++; if (!(i in slots)) slots[i] = { current: initial }; return slots[i] },
  }
  const scope = { exports: {}, AbortSignal, crypto: require('node:crypto').webcrypto, fetch,
    require: name => name === 'react' ? react : name === '@/lib/schema-ids' ? identity.exports : require(name) }
  vm.runInNewContext(compile('components/ContactForm.tsx'), scope)
  const render = () => { cursor = 0; return scope.exports.default() }
  const nodes = node => !node || typeof node !== 'object' ? [] : [node, ...[node.props?.children].flat(Infinity).flatMap(nodes)]
  let root = render()
  const field = name => nodes(root).find(node => node.props?.name === name)
  const change = (name, value) => { field(name).props.onChange({ target: { name, value } }); root = render() }
  for (const [name, value] of Object.entries(good())) if (name !== 'requestId') change(name, value)
  return { change, field, nodes: () => nodes(root), submit: () => root.props.onSubmit({ preventDefault() {} }), render: () => { root = render() } }
}

test('client blocks rapid duplicate submissions and waits for accepted response', async () => {
  let release, calls = 0
  const c = client(async (_url, init) => { calls++; const data = JSON.parse(init.body); return new Promise(resolve => { release = () => resolve(Response.json({ ok: true, status: 'accepted', reference: data.requestId }, { status: 202 })) }) })
  const first = c.submit(); c.render(); await c.submit(); assert.equal(calls, 1)
  assert(!c.nodes().some(node => node.props?.role === 'status'))
  assert(c.nodes().some(node => node.type === 'fieldset' && node.props.disabled))
  release(); await first; c.render()
  assert(c.nodes().some(node => node.props?.role === 'status'))
  assert.equal(c.field('message').props.value, good().message)
  await c.submit(); assert.equal(calls, 1)
})

test('client errors preserve fields and retry key; editing creates a new key', async () => {
  const ids = []
  const c = client(async (_url, init) => { ids.push(JSON.parse(init.body).requestId); throw new Error('offline') })
  await c.submit(); c.render()
  assert(c.nodes().some(node => node.props?.role === 'alert'))
  assert.equal(c.field('message').props.value, good().message)
  await c.submit(); c.render(); assert.equal(ids[0], ids[1])
  c.change('message', 'TEST ONLY edited inquiry'); await c.submit(); c.render(); assert.notEqual(ids[1], ids[2])
  assert(!c.nodes().some(node => node.props?.role === 'status'))
})

test('client rejects misleading 200 response and mismatched references', async () => {
  for (const status of [200, 202]) {
    const c = client(async () => Response.json({ ok: true, status: 'accepted', reference: 'wrong' }, { status }))
    await c.submit(); c.render()
    assert(c.nodes().some(node => node.props?.role === 'alert'))
    assert(!c.nodes().some(node => node.props?.role === 'status'))
  }
})
