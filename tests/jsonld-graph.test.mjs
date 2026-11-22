import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { test } from 'node:test'
import ts from 'typescript'

const project = resolve(import.meta.dirname, '..')
const compile = (relPath) =>
  ts.transpileModule(readFileSync(resolve(project, relPath), 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.ReactJSX,
    },
  }).outputText

const schema = {}
new Function('exports', compile('lib/schema-ids.ts'))(schema)

function walkFiles(dir, suffix, acc = []) {
  if (!existsSync(dir)) return acc
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) walkFiles(p, suffix, acc)
    else if (entry.name.endsWith(suffix)) acc.push(p)
  }
  return acc
}

test('subpage stubs emit pure bare {"@id"} pointers with zero extra keys', () => {
  assert.deepEqual(schema.AGENT_AUTHOR_STUB, { '@id': schema.AGENT_ID })
  assert.deepEqual(schema.BRAND_PUBLISHER_STUB, { '@id': schema.BUSINESS_ID })
  assert.deepEqual(schema.BROKERAGE_STUB, { '@id': schema.JACKLIN_ID })
  assert.deepEqual(schema.placeStub('postFalls'), { '@id': schema.PLACE_ID.postFalls })
})

test('jsonLdGraph emits #website, #business, #agent, #jacklin-real-estate once with zero duplicate @ids', () => {
  const graphDoc = schema.jsonLdGraph([
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${schema.BASE_URL}/articles/test#article`,
      headline: 'Test Guide',
      author: { '@type': 'Person', '@id': schema.AGENT_ID, name: 'Shirin Abplanalp' },
      publisher: schema.BRAND_PUBLISHER_STUB,
      about: [
        { '@type': 'City', name: 'Post Falls' },
        { '@type': 'City', name: 'Post Falls' },
      ],
    },
  ])

  assert.equal(graphDoc['@context'], 'https://schema.org')
  assert(Array.isArray(graphDoc['@graph']))

  const ids = graphDoc['@graph'].map((n) => n['@id']).filter(Boolean)
  assert.equal(ids.length, new Set(ids).size, 'expected zero duplicate @id definitions in @graph')
  assert(ids.includes(schema.WEBSITE_ID))
  assert(ids.includes(schema.BUSINESS_ID))
  assert(ids.includes(schema.AGENT_ID))
  assert(ids.includes(schema.JACKLIN_ID))
  assert(ids.includes(schema.PLACE_ID.postFalls))
  assert(ids.includes(schema.PLACE_ID.kootenai))
  assert(ids.includes(schema.PLACE_ID.idaho))

  const article = graphDoc['@graph'].find((n) => n['@id'] === `${schema.BASE_URL}/articles/test#article`)
  assert.deepEqual(article.author, { '@id': schema.AGENT_ID })
  assert.deepEqual(article.publisher, { '@id': schema.BUSINESS_ID })
  assert.deepEqual(article.about, [{ '@id': schema.PLACE_ID.postFalls }])
})

test('homepage omits hidden FAQPage and Footer visibly displays Brokerage Office: (208) 758-7474', () => {
  const homeSrc = readFileSync(resolve(project, 'app/page.tsx'), 'utf8')
  assert(!homeSrc.includes('FAQPage'), 'app/page.tsx must not emit a hidden FAQPage node')

  assert.equal(schema.BROKERAGE_PHONE_DISPLAY, '(208) 758-7474')
  const footerSrc = readFileSync(resolve(project, 'components/Footer.tsx'), 'utf8')
  assert(footerSrc.includes('Brokerage Office:'), 'components/Footer.tsx must render Brokerage Office label')
  assert(footerSrc.includes('BROKERAGE_PHONE_DISPLAY'), 'components/Footer.tsx must render BROKERAGE_PHONE_DISPLAY')
  assert(footerSrc.includes('(208) 660-7468'), 'components/Footer.tsx must keep Shirin direct phone prominent')

  const layoutSrc = readFileSync(resolve(project, 'app/layout.tsx'), 'utf8')
  assert(!layoutSrc.includes('application/ld+json'), 'app/layout.tsx must not emit split global JSON-LD script tags')
})

test('every route source file emits at most one application/ld+json script tag', () => {
  const routeFiles = [
    ...walkFiles(resolve(project, 'app'), 'page.tsx'),
    resolve(project, 'components/RelocationGuide.tsx'),
  ]
  for (const file of routeFiles) {
    const src = readFileSync(file, 'utf8')
    const count = (src.match(/type=["']application\/ld\+json["']/g) || []).length
    assert(count <= 1, `${file} emitted ${count} application/ld+json script tags (expected <= 1)`)
  }
})

test('built HTML routes pass single-script @graph, zero-duplicate-@id, and DOM/OG parity audits', { skip: !existsSync(resolve(project, '.next/server/app')) }, () => {
  execFileSync(process.execPath, ['scripts/audit-schema-ids.mjs'], { cwd: project, stdio: 'pipe' })
  execFileSync(process.execPath, ['scripts/audit-graph-invariants.mjs'], { cwd: project, stdio: 'pipe' })
})
