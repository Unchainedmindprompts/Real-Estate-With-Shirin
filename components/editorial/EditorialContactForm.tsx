'use client'

import { useEffect, useRef, useState } from 'react'
import { EMAIL, PHONE, PHONE_DISPLAY } from '@/lib/schema-ids'

const TIME_SLOTS = [
  'Morning (9am–12pm PT)',
  'Midday (12pm–3pm PT)',
  'Late Afternoon (3pm–6pm PT)',
  'Weekend',
]

export default function EditorialContactForm() {
  const [ready, setReady] = useState(false)
  useEffect(() => setReady(true), [])
  const [mode, setMode] = useState<'message' | 'call'>('message')
  const [preferredTime, setPreferredTime] = useState(TIME_SLOTS[0])
  const [status, setStatus] = useState<'idle' | 'sending' | 'accepted'>('idle')
  const [error, setError] = useState('')
  const [reference, setReference] = useState('')
  const requestId = useRef<string | null>(null)
  const sending = useRef(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    helpType: '',
    message: '',
    website: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
    setStatus('idle')
    requestId.current = null
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (sending.current || status === 'accepted') return
    setError('')

    if (!formData.name.trim() || !formData.email.trim() || !formData.helpType) {
      setError('Please enter your name, email, and how Shirin can help.')
      return
    }

    sending.current = true
    setStatus('sending')
    try {
      requestId.current ??= crypto.randomUUID()
      const currentRequestId = requestId.current
      const compiledMessage =
        mode === 'call'
          ? `[15-Minute Relocation Call Request — Preferred Time: ${preferredTime}]\n\n${formData.message}`
          : formData.message

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, message: compiledMessage, requestId: currentRequestId }),
        signal: AbortSignal.timeout(15_000),
      })
      const result = await response.json().catch(() => null)
      if (response.status !== 202 || result?.ok !== true || result?.status !== 'accepted' || result?.reference !== currentRequestId) {
        setError(
          typeof result?.error === 'string'
            ? result.error.slice(0, 400)
            : 'We could not confirm your inquiry was accepted. Please try again or use the email or phone link on this page.',
        )
        setStatus('idle')
        return
      }
      setReference(result.reference)
      setStatus('accepted')
    } catch {
      setError('We could not confirm your inquiry was accepted. Please try again or use the email or phone link on this page.')
      setStatus('idle')
    } finally {
      sending.current = false
    }
  }

  return (
    <div style={{ background: 'var(--alabaster-card)', border: '1px solid var(--hairline)', padding: '40px 38px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid var(--hairline)', marginBottom: '32px' }} role="tablist" aria-label="Inquiry mode">
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'message'}
          onClick={() => setMode('message')}
          style={{
            padding: '14px 16px',
            fontSize: '11px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            borderRight: '1px solid var(--hairline)',
            background: mode === 'message' ? 'var(--pine)' : 'var(--alabaster)',
            color: mode === 'message' ? 'var(--alabaster)' : 'var(--ink-muted)',
          }}
        >
          Send a Message
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'call'}
          onClick={() => setMode('call')}
          style={{
            padding: '14px 16px',
            fontSize: '11px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            background: mode === 'call' ? 'var(--pine)' : 'var(--alabaster)',
            color: mode === 'call' ? 'var(--alabaster)' : 'var(--ink-muted)',
          }}
        >
          Request a 15-Min Call
        </button>
      </div>

      <form method="post" action="/api/contact" onSubmit={handleSubmit} className="ed-form-grid" aria-busy={status === 'sending'}>
        <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
          <label htmlFor="ed-contact-website">Leave this field empty</label>
          <input id="ed-contact-website" name="website" type="text" autoComplete="off" tabIndex={-1} value={formData.website} onChange={handleChange} maxLength={200} />
        </div>

        <div className="ed-field">
          <label htmlFor="name">Name *</label>
          <input id="name" name="name" type="text" autoComplete="name" maxLength={100} required value={formData.name} onChange={handleChange} placeholder="Your full name" disabled={!ready || status === 'sending' || status === 'accepted'} />
        </div>

        <div className="ed-field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={254} required value={formData.email} onChange={handleChange} placeholder="you@example.com" disabled={!ready || status === 'sending' || status === 'accepted'} />
        </div>

        <div className="ed-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} value={formData.phone} onChange={handleChange} placeholder="(208) 555-0199" disabled={!ready || status === 'sending' || status === 'accepted'} />
        </div>

        <div className="ed-field">
          <label htmlFor="helpType">How Can I Help? *</label>
          <select id="helpType" name="helpType" required value={formData.helpType} onChange={handleChange} disabled={!ready || status === 'sending' || status === 'accepted'}>
            <option value="">Select one…</option>
            <option value="Buying">Buying</option>
            <option value="Selling">Selling</option>
            <option value="Relocating">Relocating</option>
            <option value="Just Exploring">Just Exploring</option>
          </select>
        </div>

        {mode === 'call' && (
          <div className="ed-field is-full">
            <label>Preferred Time of Day (Pacific Time)</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
              {TIME_SLOTS.map((slot) => {
                const active = preferredTime === slot
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setPreferredTime(slot)}
                    style={{
                      padding: '9px 14px',
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      border: '1px solid',
                      borderColor: active ? 'var(--forest)' : 'var(--hairline)',
                      background: active ? 'var(--forest)' : 'var(--alabaster)',
                      color: active ? 'var(--alabaster)' : 'var(--pine)',
                    }}
                  >
                    {slot}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        <div className="ed-field is-full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={5000}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me a little about your timeline, target towns, or any questions on your mind…"
            disabled={!ready || status === 'sending' || status === 'accepted'}
            style={{ resize: 'vertical' }}
          />
        </div>

        {error && (
          <p role="alert" className="ed-field is-full" style={{ color: '#9B2525', fontSize: '14px' }}>
            {error}
          </p>
        )}

        {status === 'accepted' && (
          <div role="status" className="ed-field is-full" style={{ color: 'var(--forest)', fontSize: '14px', lineHeight: 1.65 }}>
            <p>Your inquiry was accepted for email delivery to Shirin. Thank you for reaching out.</p>
            <p style={{ fontSize: '12px', color: 'var(--ink-muted)' }}>Reference: {reference}</p>
          </div>
        )}

        <div className="ed-field is-full" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginTop: '4px' }}>
          <button type="submit" className="ed-btn-pine" disabled={!ready || status === 'sending' || status === 'accepted'}>
            {status === 'sending'
              ? 'Sending…'
              : status === 'accepted'
                ? 'Inquiry Accepted'
                : mode === 'call'
                  ? 'Request 15-Min Call ↗'
                  : 'Send Inquiry ↗'}
          </button>
          <span style={{ fontSize: '12px', color: 'var(--ink-muted)' }}>
            Or call <a href={`tel:${PHONE}`} style={{ textDecoration: 'underline', color: 'var(--pine)' }}>{PHONE_DISPLAY}</a> ·{' '}
            <a href={`mailto:${EMAIL}`} style={{ textDecoration: 'underline', color: 'var(--pine)' }}>{EMAIL}</a>
          </span>
        </div>
      </form>
    </div>
  )
}
