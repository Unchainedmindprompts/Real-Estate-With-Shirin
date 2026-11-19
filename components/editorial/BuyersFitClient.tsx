'use client'

import { useState } from 'react'
import Link from 'next/link'

const RECS = {
  lake: {
    towns: 'Coeur d’Alene & Hayden',
    copy: 'Focus on Fort Grounds, Riverstone, or Hayden Lake proximity. Defining true frontage vs. deeded access vs. view early will save months of touring the wrong homes.',
    median: '$553K – $601K+ (waterfront higher)',
    guideHref: '/areas/coeur-dalene-idaho',
    guideLabel: 'Explore the Coeur d’Alene Guide',
  },
  walkable: {
    towns: 'Downtown CdA & Sandpoint',
    copy: 'Sherman Avenue and Midtown CdA offer the strongest walkability in Kootenai County, while Sandpoint delivers a beloved arts-and-ski town center if you welcome real winter snow.',
    median: '$580K – $620K',
    guideHref: '/areas/coeur-dalene-idaho',
    guideLabel: 'Explore the Coeur d’Alene Guide',
  },
  family: {
    towns: 'Post Falls & Hayden',
    copy: 'Post Falls gives you newer construction and the fastest I-90 commute to Spokane (~25 min), while Hayden pairs quieter streets with larger lots and strong Kootenai schools.',
    median: '$521K – $553K',
    guideHref: '/articles',
    guideLabel: 'Read the 5-City Comparison',
  },
  acreage: {
    towns: 'Rathdrum & Dalton Gardens',
    copy: 'Rathdrum Prairie and Dalton Gardens deliver room to breathe without losing Kootenai County convenience. Plan ahead for well depth, septic, and winter road maintenance checks.',
    median: '$520K – $750K+',
    guideHref: '/articles',
    guideLabel: 'Read the Prairie & Land Guides',
  },
} as const

const BUDGET_NOTES = {
  'under-550': 'Strongest selection in Post Falls, Rathdrum, and select Midtown CdA pockets.',
  '550-750': 'The working center of North Idaho — wide choice across CdA, Hayden, and Post Falls.',
  '750-plus': 'Opens up newer custom builds, Dalton Gardens acreage, lake-access, and view homes.',
} as const

const TIMELINE_NOTES = {
  now: 'Let’s line up financing and remote video tours right away so you can move decisively.',
  '3-6': 'Ideal window to narrow down two target towns and watch closed-sale comps before touring.',
  '6-plus': 'Start with Shirin’s seasonal & tax field notes so you time your arrival in the right month.',
} as const

export default function BuyersFitClient() {
  const [lifestyle, setLifestyle] = useState<keyof typeof RECS>('lake')
  const [budget, setBudget] = useState<keyof typeof BUDGET_NOTES>('550-750')
  const [timeline, setTimeline] = useState<keyof typeof TIMELINE_NOTES>('3-6')

  const rec = RECS[lifestyle]

  return (
    <section className="ed-forest-band" id="fit-finder" aria-labelledby="fit-title">
      <div className="ed-container ed-fit-layout">
        <div>
          <p className="ed-eyebrow ed-eyebrow-light">Interactive Orientation</p>
          <h2 id="fit-title" style={{ fontSize: 'clamp(34px, 3.6vw, 52px)', lineHeight: 1.08, marginTop: '14px', color: '#FAF7F1' }}>
            Find your <em style={{ fontStyle: 'italic', color: 'var(--bronze-light)' }}>North Idaho fit.</em>
          </h2>
          <p style={{ marginTop: '16px', fontSize: '15px', lineHeight: 1.72, color: 'rgba(247,244,238,0.8)', maxWidth: '520px' }}>
            Not sure whether Coeur d’Alene, Post Falls, Hayden, Rathdrum, or Sandpoint matches how you want to live? Pick three preferences for an instant local starting point.
          </p>

          <div style={{ marginTop: '34px', display: 'flex', flexDirection: 'column', gap: '26px' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze-light)', marginBottom: '12px' }}>
                1. What matters most day to day?
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {([
                  ['lake', 'Lake Lifestyle'],
                  ['walkable', 'Walkable Downtown'],
                  ['family', 'Family & Commute'],
                  ['acreage', 'Space & Acreage'],
                ] as const).map(([val, label]) => (
                  <button
                    key={val}
                    type="button"
                    className={`ed-fit-chip${lifestyle === val ? ' is-active' : ''}`}
                    onClick={() => setLifestyle(val)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span style={{ display: 'block', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze-light)', marginBottom: '12px' }}>
                2. Target budget range
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {([
                  ['under-550', 'Under $550K'],
                  ['550-750', '$550K – $750K'],
                  ['750-plus', '$750K+'],
                ] as const).map(([val, label]) => (
                  <button
                    key={val}
                    type="button"
                    className={`ed-fit-chip${budget === val ? ' is-active' : ''}`}
                    onClick={() => setBudget(val)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span style={{ display: 'block', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze-light)', marginBottom: '12px' }}>
                3. Move timeline
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {([
                  ['now', 'Next 60 Days'],
                  ['3-6', '3 – 6 Months'],
                  ['6-plus', '6+ Months'],
                ] as const).map(([val, label]) => (
                  <button
                    key={val}
                    type="button"
                    className={`ed-fit-chip${timeline === val ? ' is-active' : ''}`}
                    onClick={() => setTimeline(val)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="ed-fit-result" aria-live="polite">
          <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze)' }}>
            Your Suggested Starting Point
          </p>
          <h3 style={{ fontSize: 'clamp(30px, 2.8vw, 40px)', lineHeight: 1.12, marginTop: '10px', color: 'var(--pine)' }}>
            {rec.towns}
          </h3>
          <p style={{ marginTop: '16px', fontSize: '15px', lineHeight: 1.75, color: 'var(--ink-muted)' }}>{rec.copy}</p>
          <dl style={{ marginTop: '22px', padding: '18px 0', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '14px' }}>
              <dt style={{ color: 'var(--ink-muted)' }}>Typical Market Band</dt>
              <dd style={{ fontWeight: 500, textAlign: 'right' }}>{rec.median}</dd>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '14px' }}>
              <dt style={{ color: 'var(--ink-muted)' }}>Budget Read</dt>
              <dd style={{ fontWeight: 500, textAlign: 'right' }}>{BUDGET_NOTES[budget]}</dd>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '14px' }}>
              <dt style={{ color: 'var(--ink-muted)' }}>Next Step</dt>
              <dd style={{ fontWeight: 500, textAlign: 'right' }}>{TIMELINE_NOTES[timeline]}</dd>
            </div>
          </dl>
          <div style={{ marginTop: '26px', display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'wrap' }}>
            <Link className="ed-btn-pine" href="/contact">
              Discuss This Plan with Shirin <span aria-hidden="true">↗</span>
            </Link>
            <Link className="ed-link-underlined" href={rec.guideHref}>
              {rec.guideLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </aside>
      </div>
    </section>
  )
}
