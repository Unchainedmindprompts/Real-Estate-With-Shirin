'use client'

import { useEffect, useRef, useState } from 'react'
import { EMAIL, PHONE, PHONE_DISPLAY } from '@/lib/schema-ids'

export default function ContactForm() {
  const [ready, setReady] = useState(false)
  useEffect(() => setReady(true), [])
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

    if (!formData.name.trim()) {
      setError('Please enter your name.')
      return
    }

    sending.current = true
    setStatus('sending')
    // Keep the same key after a timeout or retry; change it only if the inquiry changes.
    try {
      requestId.current ??= crypto.randomUUID()
      const currentRequestId = requestId.current
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, requestId: currentRequestId }),
        signal: AbortSignal.timeout(15_000),
      })
      const result = await response.json().catch(() => null)
      if (response.status !== 202 || result?.ok !== true || result?.status !== 'accepted' || result?.reference !== currentRequestId) {
        setError(typeof result?.error === 'string'
          ? result.error.slice(0, 400)
          : 'We could not confirm your inquiry was accepted. Please try again or use the email or phone link on this page. Your entries are still here.')
        setStatus('idle')
        return
      }
      setReference(result.reference)
      setStatus('accepted')
    } catch {
      setError('We could not confirm your inquiry was accepted. Please try again or use the email or phone link on this page. Your entries are still here.')
      setStatus('idle')
    } finally {
      sending.current = false
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #E8DDD0',
    borderRadius: '2px',
    backgroundColor: '#FAFAF8',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: '15px',
    color: '#1C1A17',
  }

  const labelStyle = {
    display: 'block',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    color: '#5C5650',
    marginBottom: '8px',
  }

  return (
    <form method="post" action="/api/contact" onSubmit={handleSubmit} className="space-y-6" aria-describedby="contact-email-instructions" aria-busy={status === 'sending'}>
      <div id="contact-email-instructions" style={{ color: '#5C5650', fontSize: '15px', lineHeight: 1.7 }}>
        <p>Send your inquiry to Shirin by email. Please don&apos;t include financial account details or other sensitive information.</p>
        <p className="mt-2">
          You can also email{' '}
          <a href={`mailto:${EMAIL}`} className="underline break-all" style={{ color: '#8B4F2A' }}>{EMAIL}</a>
          {' '}or call{' '}
          <a href={`tel:${PHONE}`} className="underline whitespace-nowrap" style={{ color: '#8B4F2A' }}>{PHONE_DISPLAY}</a>.
        </p>
      </div>
      <noscript><p>Please use the email or phone link above to contact Shirin. This form needs JavaScript to send an inquiry.</p></noscript>
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="website" type="text" autoComplete="off" tabIndex={-1}
          value={formData.website} onChange={handleChange} maxLength={200} />
      </div>
      <fieldset disabled={!ready || status === 'sending' || status === 'accepted'} className="space-y-6" style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
      <legend className="sr-only">Your contact details and inquiry</legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" style={labelStyle}>Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            value={formData.name}
            onChange={handleChange}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#96601A]"
            style={inputStyle}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            value={formData.email}
            onChange={handleChange}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#96601A]"
            style={inputStyle}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" style={labelStyle}>Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={40}
          value={formData.phone}
          onChange={handleChange}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#96601A]"
            style={inputStyle}
          placeholder="(208) 555-0000"
        />
      </div>

      <div>
        <label htmlFor="helpType" style={labelStyle}>How Can I Help? *</label>
        <select
          id="helpType"
          name="helpType"
          required
          value={formData.helpType}
          onChange={handleChange}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#96601A]"
          style={{ ...inputStyle, cursor: 'pointer' }}
        >
          <option value="">Select one...</option>
          <option value="Buying">Buying</option>
          <option value="Selling">Selling</option>
          <option value="Relocating">Relocating</option>
          <option value="Just Exploring">Just Exploring</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={5000}
          value={formData.message}
          onChange={handleChange}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#96601A]"
          style={{ ...inputStyle, resize: 'vertical' }}
          placeholder="Tell me a bit about what you're looking for..."
        />
      </div>

      </fieldset>

      {error && <p role="alert" style={{ color: '#9B2525' }}>{error}</p>}
      {status === 'accepted' && (
        <div role="status" style={{ color: '#5C5650', lineHeight: 1.7 }}>
          <p>Your inquiry was accepted for email delivery to Shirin. Thank you for reaching out.</p>
          <p className="text-sm mt-2 break-all">Reference: {reference}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={!ready || status === 'sending' || status === 'accepted'}
        className="w-full text-white text-xs uppercase font-semibold tracking-wider rounded-sm transition-colors disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#96601A]"
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          backgroundColor: '#96601A',
          padding: '16px 32px',
          letterSpacing: '0.08em',
          border: 'none',
          cursor: status === 'idle' ? 'pointer' : 'default',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#8B4F2A')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#96601A')}
      >
        {status === 'sending' ? 'Sending…' : status === 'accepted' ? 'Inquiry Accepted' : 'Send Inquiry'}
      </button>
    </form>
  )
}
