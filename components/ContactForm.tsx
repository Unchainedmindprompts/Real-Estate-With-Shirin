'use client'

import { useState } from 'react'
import { EMAIL, PHONE, PHONE_DISPLAY } from '@/lib/schema-ids'

export default function ContactForm() {
  const [draftOpened, setDraftOpened] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    helpType: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
    setDraftOpened(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!formData.name.trim()) {
      setError('Please enter your name before opening an email draft.')
      return
    }

    const body = [
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim() || 'Not provided'}`,
      `How I can help: ${formData.helpType}`,
      '',
      formData.message.trim(),
    ].join('\n')
    const subject = `Website inquiry: ${formData.helpType}`

    // Opening a mailto link cannot confirm that an email was sent or delivered.
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setDraftOpened(true)
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
    <form onSubmit={handleSubmit} className="space-y-6" aria-describedby="contact-email-instructions">
      <div id="contact-email-instructions" style={{ color: '#5C5650', fontSize: '15px', lineHeight: 1.7 }}>
        <p>This form prepares a draft in your email app. You must review it and press Send there. Nothing is sent or saved by this website.</p>
        <p className="mt-2">
          You can also email{' '}
          <a href={`mailto:${EMAIL}`} className="underline break-all" style={{ color: '#8B4F2A' }}>{EMAIL}</a>
          {' '}or call{' '}
          <a href={`tel:${PHONE}`} className="underline whitespace-nowrap" style={{ color: '#8B4F2A' }}>{PHONE_DISPLAY}</a>.
        </p>
      </div>
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
          maxLength={1500}
          value={formData.message}
          onChange={handleChange}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#96601A]"
          style={{ ...inputStyle, resize: 'vertical' }}
          placeholder="Tell me a bit about what you're looking for..."
        />
      </div>

      {error && <p role="alert" style={{ color: '#9B2525' }}>{error}</p>}
      {draftOpened && (
        <p role="status" style={{ color: '#5C5650', lineHeight: 1.7 }}>
          Your email app should open with your draft. This website cannot confirm whether it opened or whether you sent the email. If it did not open, copy your message into an email to {EMAIL}. Your entries are still here.
        </p>
      )}

      <button
        type="submit"
        className="w-full text-white text-xs uppercase font-semibold tracking-wider rounded-sm transition-colors"
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          backgroundColor: '#96601A',
          padding: '16px 32px',
          letterSpacing: '0.08em',
          border: 'none',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#8B4F2A')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#96601A')}
      >
        Open Email Draft
      </button>
    </form>
  )
}
