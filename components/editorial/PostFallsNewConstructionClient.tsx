'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { POST_FALLS_COMMUNITIES, type CommunityCategory } from '@/lib/post-falls-new-construction'

const FILTER_TABS: { key: CommunityCategory; label: string }[] = [
  { key: 'all', label: 'All Communities' },
  { key: 'single-family', label: 'Single-Family Master Plans' },
  { key: '55-single-level', label: '55+ & Single-Level' },
  { key: 'townhomes-twins', label: 'Townhomes & Sub-$400K Twins' },
  { key: 'rv-custom', label: 'RV Bays & Custom Riverfront' },
]

export default function PostFallsNewConstructionClient({ idxUrl }: { idxUrl: string }) {
  const [activeFilter, setActiveFilter] = useState<CommunityCategory>('all')

  const visibleCommunities =
    activeFilter === 'all'
      ? POST_FALLS_COMMUNITIES
      : POST_FALLS_COMMUNITIES.filter((c) => c.categories.includes(activeFilter))

  const countFor = (key: CommunityCategory) =>
    key === 'all'
      ? POST_FALLS_COMMUNITIES.length
      : POST_FALLS_COMMUNITIES.filter((c) => c.categories.includes(key)).length

  return (
    <section
      id="communities"
      style={{ padding: '92px 0', background: 'var(--alabaster-warm)', borderBottom: '1px solid var(--hairline)' }}
      aria-labelledby="pf-communities-title"
    >
      <div className="ed-container">
        <div className="ed-section-header">
          <div>
            <p className="ed-eyebrow">Verified Community Lineup · Checked Nov 23, 2026</p>
            <h2 id="pf-communities-title">
              Where Post Falls is <em>building right now.</em>
            </h2>
          </div>
          <p style={{ maxWidth: '480px', fontSize: '15px', lineHeight: 1.72, color: 'var(--ink-muted)' }}>
            Every price band, cross-street location, square-footage range, and builder link below was verified directly on the builders’ official sites and the Coeur d’Alene MLS on November 23, 2026. Filter by how you want to live.
          </p>
        </div>

        <div className="ed-filter-bar" role="region" aria-label="Filter Post Falls new construction communities">
          <div className="ed-filter-tabs" role="tablist" aria-label="Community types">
            {FILTER_TABS.map((tab) => {
              const isSelected = activeFilter === tab.key
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`ed-filter-tab${isSelected ? ' is-active' : ''}`}
                  onClick={() => setActiveFilter(tab.key)}
                >
                  <span>{tab.label}</span>
                  <span className="ed-tab-num">({countFor(tab.key)})</span>
                </button>
              )
            })}
          </div>
          <a className="ed-link-underlined" href={idxUrl} target="_blank" rel="noopener noreferrer">
            View All 37 Live 2025+ MLS Builds <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="ed-nc-grid">
          {visibleCommunities.map((c, idx) => {
            const globalIndex = POST_FALLS_COMMUNITIES.findIndex((item) => item.id === c.id)
            const folioNum = String((globalIndex >= 0 ? globalIndex : idx) + 1).padStart(2, '0')
            const isComingSoon = c.statusBadge === 'Coming Soon'

            return (
              <article key={c.id} id={c.id} className="ed-hood-card ed-nc-card">
                {c.image && c.imageAlt ? (
                  <div className="ed-hood-photo">
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 50vw"
                    />
                    <span className="ed-hood-tag">{c.corridorTag}</span>
                  </div>
                ) : (
                  <div className="ed-nc-arch-strip">
                    <div className="ed-nc-arch-top">
                      <span className="ed-nc-arch-left">
                        <strong className="ed-nc-folio">{folioNum}</strong>
                        <span className="ed-nc-corridor">{c.corridorTag}</span>
                      </span>
                      <span className={`ed-nc-status-pill${isComingSoon ? ' is-soon' : ''}`}>
                        {c.statusBadge}
                      </span>
                    </div>
                    <p className="ed-nc-anchor">{c.locationAnchor}</p>
                  </div>
                )}

                <div className="ed-hood-body ed-nc-body">
                  <div className="ed-nc-header">
                    <p className="ed-card-kicker">{c.builders}</p>
                    <h3>{c.name}</h3>
                    {c.image && <p className="ed-nc-anchor-inline">{c.locationAnchor}</p>}
                  </div>

                  <dl className="ed-nc-specs">
                    <div>
                      <dt>Published Pricing</dt>
                      <dd>{c.priceBand}</dd>
                    </div>
                    <div>
                      <dt>Footprint &amp; Beds</dt>
                      <dd>{c.specs}</dd>
                    </div>
                    <div>
                      <dt>Product Style</dt>
                      <dd>{c.homeTypes}</dd>
                    </div>
                  </dl>

                  <p className="ed-nc-summary">{c.summary}</p>

                  <div className="ed-nc-incentive">
                    <strong>Incentive &amp; Status Check:</strong> {c.incentiveNote}
                  </div>

                  <div className="ed-nc-actions">
                    <Link href="/contact" className="ed-card-cta">
                      Request Floor Plans &amp; Lot Sheet <span aria-hidden="true">→</span>
                    </Link>
                    {c.builderLinks.length > 0 && (
                      <div className="ed-nc-ext-links">
                        {c.builderLinks.map((b) => (
                          <a
                            key={b.url}
                            href={b.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ed-nc-ext-link"
                          >
                            {b.label} <span aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
