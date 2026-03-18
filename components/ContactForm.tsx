'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    helpType: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, integrate with a form backend (e.g., Formspree, Resend, etc.)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        style={{
          backgroundColor: '#F5EFE6',
          border: '1px solid #E8DDD0',
          borderRadius: '4px',
          padding: '48px 32px',
          textAlign: 'center',
        }}
      >
        <div style={{ width: '48px', height: '3px', backgroundColor: '#C4842A', margin: '0 auto 24px' }} />
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 500,
            fontSize: '28px',
            color: '#1C1A17',
            marginBottom: '12px',
          }}
        >
          Message Received
        </h3>
        <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
          Thanks for reaching out. Shirin will be in touch shortly.
        </p>
      </div>
    )
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
    outline: 'none',
  }

  const labelStyle = {
    display: 'block',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    color: '#9A9590',
    marginBottom: '8px',
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" style={labelStyle}>Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
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
            required
            value={formData.email}
            onChange={handleChange}
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
          value={formData.phone}
          onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'vertical' }}
          placeholder="Tell me a bit about what you're looking for..."
        />
      </div>

      <button
        type="submit"
        className="w-full text-white text-xs uppercase font-semibold tracking-wider rounded-sm transition-colors"
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          backgroundColor: '#C4842A',
          padding: '16px 32px',
          letterSpacing: '0.08em',
          border: 'none',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#8B4F2A')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C4842A')}
      >
        Send Message
      </button>
    </form>
  )
}
