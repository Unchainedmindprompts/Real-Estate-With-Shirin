'use client'

import { useState } from 'react'
import Link from 'next/link'

const BANDS = {
  entry: {
    range: '$450K – $500K',
    label: 'Entry Level',
    title: 'Entry-level single-family, move-in ready.',
    desc: 'Typically a 3-bedroom home in established pockets. This is the thinnest inventory band in Coeur d’Alene and the one where having financing lined up and moving quickly matters most.',
    pockets: 'Midtown edges, North CdA pockets, select townhomes',
    pace: 'Fastest-moving tier — well-priced homes can go pending in ~12 days',
    note: 'Compare against Post Falls ($521K median) if you want newer construction at this budget.',
  },
  core: {
    range: '$550K – $700K',
    label: 'Market Center',
    title: 'The working center of the Coeur d’Alene market.',
    desc: '3–4 bedrooms with updated finishes and more desirable locations. This is where the widest selection sits in CdA, and where the ~70% under-list closing stat gives prepared buyers real negotiating leverage.',
    pockets: 'Riverstone, Midtown, Hayden-border neighborhoods, Dalton Gardens edge',
    pace: 'Balanced — ~2.6 months supply with room for inspection & credit negotiation',
    note: 'Sweet spot for relocating families prioritizing CdA School District #271.',
  },
  upper: {
    range: '$700K – $900K',
    label: 'Upper & New Build',
    title: 'Larger homes, newer builds & lake-proximate lots.',
    desc: 'Spacious floor plans, premium neighborhoods, and elevated finishes. The new construction median in the Coeur d’Alene urban area currently sits above $770,000.',
    pockets: 'Fort Grounds, Riverstone custom, Dalton Gardens acreage, Coeur d’Alene Place',
    pace: 'Selective — buyers expect turnkey condition or standout location',
    note: 'Strong long-term value retention in walkable and established pockets.',
  },
  luxury: {
    range: '$900K+',
    label: 'Lake & View Tier',
    title: 'Lakefront, deeded access & Blackwell Hill views.',
    desc: 'Waterfront, deeded lake access, and sweeping view properties on Blackwell Hill or Sanders Beach. This tier prices independently of the city median against regional waterfront demand.',
    pockets: 'Sanders Beach, Blackwell Hill, Lake Coeur d’Alene shoreline, Tubbs Hill edge',
    pace: 'Thin inventory — private shoreline listings are rare and specialized',
    note: 'Define true frontage vs. deeded access vs. view early to avoid touring the wrong homes.',
  },
} as const

type BandKey = keyof typeof BANDS

const PEERS = {
  'post-falls': {
    label: 'vs. Post Falls',
    name: 'Post Falls',
    median: '$521,000',
    supply: '1.4 months',
    spokane: '22–28 min on I-90',
    snow: '~40 in / year',
    vibe: 'Newer subdivisions, Spokane River access, fastest I-90 commute',
    verdict: 'Saves ~$80K vs. CdA with newer builds and less snow, but tighter inventory and no walkable downtown lakefront.',
    link: '/areas/post-falls-idaho',
  },
  hayden: {
    label: 'vs. Hayden',
    name: 'Hayden',
    median: '$553,000',
    supply: '2.1 months',
    spokane: '35–42 min',
    snow: '~55 in / year',
    vibe: 'Larger lots, quieter residential streets, Hayden Lake proximity',
    verdict: 'More space and quieter streets 10–15 minutes north of CdA, trading away Sherman Avenue walkability.',
    link: '/areas/hayden-idaho',
  },
  rathdrum: {
    label: 'vs. Rathdrum',
    name: 'Rathdrum',
    median: '$520,000',
    supply: 'Growing new build',
    spokane: '30–38 min',
    snow: '~45 in / year',
    vibe: 'Rathdrum Prairie views, newer communities, Twin Lakes & acreage',
    verdict: 'Strong value and room to spread out on the prairie, with a small-town center rather than resort amenities.',
    link: '/areas/rathdrum-idaho',
  },
  sandpoint: {
    label: 'vs. Sandpoint',
    name: 'Sandpoint',
    median: '$616,000',
    supply: 'Seasonal / unique',
    spokane: '75–85 min',
    snow: '~85–95 in / year',
    vibe: 'Lake Pend Oreille, Schweitzer Mountain ski town, arts community',
    verdict: 'Unmatched mountain-and-lake beauty and skiing, but noticeably heavier winter snowfall and a longer airport drive.',
    link: '/areas/sandpoint-idaho',
  },
} as const

type PeerKey = keyof typeof PEERS

export default function CdaInteractiveClient({ idxUrl }: { idxUrl: string }) {
  const [band, setBand] = useState<BandKey>('entry')
  const [peer, setPeer] = useState<PeerKey>('post-falls')

  const b = BANDS[band]
  const p = PEERS[peer]

  return (
    <>
      {/* Interactive Price Band Explorer */}
      <section style={{ padding: '92px 0', background: 'var(--alabaster)', borderBottom: '1px solid var(--hairline)' }} id="budget">
        <div className="ed-container">
          <div className="ed-section-header">
            <div>
              <p className="ed-eyebrow">What Your Budget Buys</p>
              <h2>
                Coeur d’Alene homes <em>by price band.</em>
              </h2>
            </div>
            <Link className="ed-link-underlined" href="/articles/how-much-do-homes-cost-coeur-dalene-idaho">
              Read the Full 2026 Cost Guide <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="ed-budget-explorer">
            <div className="ed-budget-tabs" role="tablist" aria-label="Select price band">
              {(Object.keys(BANDS) as BandKey[]).map((key) => {
                const item = BANDS[key]
                const active = band === key
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    className={`ed-budget-tab${active ? ' is-active' : ''}`}
                    onClick={() => setBand(key)}
                  >
                    <span style={{ fontFamily: 'var(--serif)', fontSize: '26px', lineHeight: 1.15 }}>{item.range}</span>
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

      {/* Interactive North Idaho Town Comparison */}
      <section style={{ padding: '92px 0', background: 'var(--alabaster-warm)', borderBottom: '1px solid var(--hairline)' }} id="compare">
        <div className="ed-container">
          <div className="ed-section-header">
            <div>
              <p className="ed-eyebrow">Side-by-Side Orientation</p>
              <h2>
                Compare Coeur d’Alene <em>to its neighbors.</em>
              </h2>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }} role="tablist" aria-label="Compare Coeur d'Alene with another city">
              {(Object.keys(PEERS) as PeerKey[]).map((key) => {
                const active = peer === key
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setPeer(key)}
                    style={{
                      padding: '10px 18px',
                      fontSize: '11px',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      border: '1px solid',
                      borderColor: active ? 'var(--pine)' : 'var(--hairline)',
                      background: active ? 'var(--pine)' : 'var(--alabaster)',
                      color: active ? 'var(--alabaster)' : 'var(--pine)',
                    }}
                  >
                    {PEERS[key].label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="ed-compare-stage" aria-live="polite">
            <article className="ed-compare-col is-cda">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px', paddingBottom: '18px', borderBottom: '1px solid var(--hairline)' }}>
                <h3 style={{ fontSize: '32px', lineHeight: 1.1 }}>Coeur d’Alene</h3>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '28px', color: 'var(--bronze)' }}>$601,000</span>
              </div>
              <dl style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="ed-compare-row"><dt style={{ color: 'var(--ink-muted)' }}>Months of Supply</dt><dd style={{ fontWeight: 500 }}>2.6 months</dd></div>
                <div className="ed-compare-row"><dt style={{ color: 'var(--ink-muted)' }}>Spokane Commute</dt><dd style={{ fontWeight: 500 }}>33–40 min on I-90</dd></div>
                <div className="ed-compare-row"><dt style={{ color: 'var(--ink-muted)' }}>Average Snowfall</dt><dd style={{ fontWeight: 500 }}>~55–65 in / year</dd></div>
                <div className="ed-compare-row"><dt style={{ color: 'var(--ink-muted)' }}>Lifestyle</dt><dd style={{ fontWeight: 500, textAlign: 'right' }}>Walkable lake town, Sherman Ave, Tubbs Hill</dd></div>
              </dl>
              <p style={{ marginTop: '22px', fontSize: '14px', lineHeight: 1.72, color: 'var(--ink-muted)' }}>
                <strong style={{ color: 'var(--pine)' }}>Best for:</strong> Buyers who want a true downtown, direct Lake Coeur d’Alene lifestyle, and the widest Kootenai County inventory.
              </p>
            </article>

            <article className="ed-compare-col is-peer">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px', paddingBottom: '18px', borderBottom: '1px solid var(--hairline)' }}>
                <h3 style={{ fontSize: '32px', lineHeight: 1.1 }}>{p.name}</h3>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '28px', color: 'var(--bronze)' }}>{p.median}</span>
              </div>
              <dl style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="ed-compare-row"><dt style={{ color: 'var(--ink-muted)' }}>Months of Supply</dt><dd style={{ fontWeight: 500 }}>{p.supply}</dd></div>
                <div className="ed-compare-row"><dt style={{ color: 'var(--ink-muted)' }}>Spokane Commute</dt><dd style={{ fontWeight: 500 }}>{p.spokane}</dd></div>
                <div className="ed-compare-row"><dt style={{ color: 'var(--ink-muted)' }}>Average Snowfall</dt><dd style={{ fontWeight: 500 }}>{p.snow}</dd></div>
                <div className="ed-compare-row"><dt style={{ color: 'var(--ink-muted)' }}>Lifestyle</dt><dd style={{ fontWeight: 500, textAlign: 'right' }}>{p.vibe}</dd></div>
              </dl>
              <p style={{ marginTop: '22px', fontSize: '14px', lineHeight: 1.72, color: 'var(--ink-muted)' }}>
                <strong style={{ color: 'var(--pine)' }}>The tradeoff:</strong> {p.verdict}
              </p>
              <div style={{ marginTop: '20px' }}>
                <Link className="ed-link-underlined" href={p.link}>
                  Explore the {p.name} Guide <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
