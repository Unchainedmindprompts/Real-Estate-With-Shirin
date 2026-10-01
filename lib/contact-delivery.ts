import { createHash } from 'node:crypto'
import { EMAIL } from './schema-ids'

const HELP_TYPES = ['Buying', 'Selling', 'Relocating', 'Just Exploring'] as const
const MAX_BODY_BYTES = 24_000
const WINDOW_MS = 10 * 60 * 1000
const MAX_ATTEMPTS = 5
const MAX_BUCKETS = 5_000
const buckets = new Map<string, { count: number; expiresAt: number }>()

const EMAIL_PATTERN = /^[^\s@<>(),;:"\\]+@[^\s@<>(),;:"\\]+\.[^\s@<>(),;:"\\]+$/
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const CONTROL_CHARACTERS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/

type ContactInquiry = {
  name: string
  email: string
  phone: string
  helpType: string
  message: string
  website: string
  requestId: string
}

function reply(status: number, error: string, retryAfter?: number) {
  return Response.json({ ok: false, error }, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      ...(retryAfter ? { 'Retry-After': String(retryAfter) } : {}),
    },
  })
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get('origin')
  if (!origin) return false
  const allowed = new Set(['https://www.realestatewithshirin.com', 'https://realestatewithshirin.com'])
  if (process.env.VERCEL_URL) allowed.add(`https://${process.env.VERCEL_URL}`)
  return allowed.has(origin)
}

async function readBody(request: Request): Promise<unknown> {
  const length = request.headers.get('content-length')
  if (length && (!/^\d+$/.test(length) || Number(length) > MAX_BODY_BYTES)) throw new RangeError('Body too large')
  if (!request.body) throw new SyntaxError('Missing body')
  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let lengthRead = 0
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      lengthRead += value.byteLength
      if (lengthRead > MAX_BODY_BYTES) {
        await reader.cancel()
        throw new RangeError('Body too large')
      }
      chunks.push(value)
    }
  } finally {
    reader.releaseLock()
  }
  const bytes = new Uint8Array(lengthRead)
  let offset = 0
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength }
  return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes))
}

function validateInquiry(input: unknown): ContactInquiry | null {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null
  const data = input as Record<string, unknown>
  const fields = ['name', 'email', 'phone', 'helpType', 'message', 'website', 'requestId']
  if (Object.keys(data).some(key => !fields.includes(key))) return null
  if (fields.some(key => typeof data[key] !== 'string')) return null
  const inquiry = Object.fromEntries(fields.map(key => [key, (data[key] as string).trim()])) as ContactInquiry
  if (Object.values(inquiry).some(value => CONTROL_CHARACTERS.test(value))) return null
  if (!inquiry.name || inquiry.name.length > 100 || /[\r\n]/.test(inquiry.name)) return null
  if (inquiry.email.length > 254 || !EMAIL_PATTERN.test(inquiry.email)) return null
  if (inquiry.phone.length > 40 || /[\r\n]/.test(inquiry.phone)) return null
  if (!(HELP_TYPES as readonly string[]).includes(inquiry.helpType)) return null
  if (inquiry.message.length > 5_000 || inquiry.website || !UUID_PATTERN.test(inquiry.requestId)) return null
  return inquiry
}

// This is a bounded, best-effort per-instance safeguard, not a distributed limit.
// On serverless deployments, use a platform-wide WAF limit as an additional layer.
function rateLimit(request: Request, email: string): number {
  const now = Date.now()
  for (const [key, bucket] of buckets) if (bucket.expiresAt <= now) buckets.delete(key)
  // Vercel overwrites x-vercel-forwarded-for at its edge. Never trust arbitrary
  // client-provided x-forwarded-for for production rate-limit identities.
  const ip = process.env.VERCEL === '1'
    ? request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    : 'local'
  const keys = [`ip:${ip}`, `email:${email.toLowerCase()}`].map(value => createHash('sha256').update(value).digest('hex'))
  for (const key of keys) {
    const bucket = buckets.get(key)
    if (bucket && bucket.count >= MAX_ATTEMPTS) return Math.max(1, Math.ceil((bucket.expiresAt - now) / 1000))
    if (!bucket && buckets.size >= MAX_BUCKETS) return 60
  }
  for (const key of keys) {
    const bucket = buckets.get(key)
    if (bucket) bucket.count++
    else buckets.set(key, { count: 1, expiresAt: now + WINDOW_MS })
  }
  return 0
}

export async function handleContact(request: Request): Promise<Response> {
  if (!isAllowedOrigin(request)) return reply(403, 'Please send your inquiry from the contact page on this website.')
  if (request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !== 'application/json') {
    return reply(415, 'Please use the contact form to send your inquiry.')
  }

  let input: unknown
  try {
    input = await readBody(request)
  } catch (error) {
    return reply(error instanceof RangeError ? 413 : 400, 'Please check your message and try again.')
  }
  const inquiry = validateInquiry(input)
  if (!inquiry) return reply(400, 'Please check your name, email, reason for contacting Shirin, and message.')

  const apiKey = process.env.RESEND_API_KEY
  const sender = process.env.CONTACT_FROM_EMAIL
  if (process.env.CONTACT_FORM_ENABLED !== 'true' || !apiKey || !sender || !EMAIL_PATTERN.test(sender)) {
    return reply(503, 'Online sending is temporarily unavailable. Your message has not been sent. Please use the email or phone link on this page.')
  }

  const retryAfter = rateLimit(request, inquiry.email)
  if (retryAfter) return reply(429, 'Please wait before trying again, or contact Shirin directly by email or phone.', retryAfter)

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `contact/${inquiry.requestId}`,
      },
      body: JSON.stringify({
        from: `Real Estate With Shirin <${sender}>`,
        to: [EMAIL],
        reply_to: inquiry.email,
        subject: `Website inquiry: ${inquiry.helpType}`,
        text: [
          'New inquiry from realestatewithshirin.com',
          '',
          `Name: ${inquiry.name}`,
          `Email: ${inquiry.email}`,
          `Phone: ${inquiry.phone || 'Not provided'}`,
          `How Shirin can help: ${inquiry.helpType}`,
          '',
          inquiry.message || '(No additional message)',
          '',
          `Reference: ${inquiry.requestId}`,
        ].join('\n'),
        tags: [{ name: 'source', value: 'website-contact-form' }],
      }),
      signal: AbortSignal.timeout(10_000),
      cache: 'no-store',
      redirect: 'error',
    })
    const result: unknown = await response.json().catch(() => null)
    if (!response.ok || !result || typeof result !== 'object' || !('id' in result) || typeof result.id !== 'string' || !result.id) {
      // Do not log submitted personal information, provider response bodies or keys.
      console.error('contact_delivery_failed', { status: response.status })
      return reply(502, 'We could not confirm your inquiry was accepted. Please try again or contact Shirin directly. Your entries are still here.')
    }
    return Response.json({ ok: true, status: 'accepted', reference: inquiry.requestId }, {
      status: 202,
      headers: { 'Cache-Control': 'no-store' },
    })
  } catch {
    console.error('contact_delivery_unconfirmed')
    // A network timeout may happen after acceptance. Reuse the same idempotency
    // key when retrying so the provider does not send a duplicate inquiry.
    return reply(502, 'We could not confirm your inquiry was accepted. Please try again or contact Shirin directly. Your entries are still here.')
  }
}
