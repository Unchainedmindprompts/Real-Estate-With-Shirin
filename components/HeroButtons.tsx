'use client'

import Link from 'next/link'

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="/contact"
        className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm text-center transition-colors"
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          backgroundColor: '#C4842A',
          padding: '14px 32px',
          letterSpacing: '0.08em',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#8B4F2A')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C4842A')}
      >
        Let&apos;s Talk
      </Link>
      <Link
        href="/about"
        className="inline-block text-xs uppercase font-semibold tracking-wider rounded-sm text-center transition-all"
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          color: '#F5EFE6',
          border: '1.5px solid #F5EFE6',
          padding: '14px 32px',
          letterSpacing: '0.08em',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff'
          e.currentTarget.style.color = '#1C1A17'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.color = '#F5EFE6'
        }}
      >
        Meet Shirin
      </Link>
    </div>
  )
}
