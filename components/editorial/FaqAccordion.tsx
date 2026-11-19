'use client'

import { useState } from 'react'

export interface FaqItem {
  q: string
  a: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="ed-faq-list">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div key={item.q} className={`ed-faq-item${isOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              className="ed-faq-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span>{item.q}</span>
              <span className="ed-faq-icon" aria-hidden="true" />
            </button>
            {isOpen && (
              <div style={{ padding: '0 36px 26px 0' }}>
                <p style={{ fontSize: '15px', lineHeight: 1.78, color: 'var(--ink-muted)' }}>{item.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
