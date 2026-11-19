'use client'

import { useState } from 'react'
import Link from 'next/link'

export interface BudgetBand {
  key: string
  range: string
  label: string
  title: string
  desc: string
  pockets: string
  pace: string
  note: string
}

export default function BudgetExplorerClient({
  eyebrow = 'What Your Budget Buys',
  headingLead,
  headingEm,
  costGuideHref,
  costGuideLabel,
  bands,
  idxUrl,
}: {
  eyebrow?: string
  headingLead: string
  headingEm: string
  costGuideHref?: string
  costGuideLabel?: string
  bands: BudgetBand[]
  idxUrl: string
}) {
  const [selected, setSelected] = useState(0)
  const b = bands[selected] || bands[0]

  return (
    <section style={{ padding: '92px 0', background: 'var(--alabaster)', borderBottom: '1px solid var(--hairline)' }} id="budget">
      <div className="ed-container">
        <div className="ed-section-header">
          <div>
            <p className="ed-eyebrow">{eyebrow}</p>
            <h2>
              {headingLead} <em>{headingEm}</em>
            </h2>
          </div>
          {costGuideHref && costGuideLabel && (
            <Link className="ed-link-underlined" href={costGuideHref}>
              {costGuideLabel} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>

        <div className="ed-budget-explorer">
          <div
            className="ed-budget-tabs"
            style={{ gridTemplateColumns: `repeat(${Math.min(4, bands.length)}, 1fr)` }}
            role="tablist"
            aria-label="Select price band"
          >
            {bands.map((item, idx) => {
              const active = idx === selected
              return (
                <button
                  key={item.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`ed-budget-tab${active ? ' is-active' : ''}`}
                  onClick={() => setSelected(idx)}
                >
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '25px', lineHeight: 1.15 }}>{item.range}</span>
                  <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: active ? 'var(--bronze-light)' : 'var(--bronze)' }}>
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="ed-budget-panel" aria-live="polite">
            <div>
              <h3 style={{ fontSize: 'clamp(28px, 2.6vw, 38px)', lineHeight: 1.15, color: 'var(--pine)' }}>{b.title}</h3>
              <p style={{ marginTop: '14px', fontSize: '16px', lineHeight: 1.78, color: 'var(--ink-muted)' }}>{b.desc}</p>
              <div style={{ marginTop: '26px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                <a className="ed-btn-pine" href={idxUrl} target="_blank" rel="noopener noreferrer">
                  See Live Listings <span aria-hidden="true">↗</span>
                </a>
                <Link className="ed-link-underlined" href="/contact">
                  Ask Shirin what’s coming soon <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="ed-budget-highlights">
              <div>
                <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--bronze)', display: 'block' }}>Typical Pockets</span>
                <strong style={{ fontSize: '15px', fontWeight: 500, color: 'var(--pine)' }}>{b.pockets}</strong>
              </div>
              <div>
                <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--bronze)', display: 'block' }}>Market Pace</span>
                <strong style={{ fontSize: '15px', fontWeight: 500, color: 'var(--pine)' }}>{b.pace}</strong>
              </div>
              <div>
                <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--bronze)', display: 'block' }}>Local Tip</span>
                <strong style={{ fontSize: '15px', fontWeight: 500, color: 'var(--pine)' }}>{b.note}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
