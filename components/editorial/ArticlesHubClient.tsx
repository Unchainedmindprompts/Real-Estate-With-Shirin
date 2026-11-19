'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { ArticleEntry } from '@/lib/articles-index'

const CATEGORIES = ['All', 'Relocation', 'Buyer Guides', 'Market Updates', 'Sellers', 'Senior Living'] as const

export default function ArticlesHubClient({ articles }: { articles: ArticleEntry[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [query, setQuery] = useState('')
  const [visibleLimit, setVisibleLimit] = useState(12)

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: articles.length }
    for (const a of articles) {
      map[a.category] = (map[a.category] || 0) + 1
    }
    return map
  }, [articles])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return articles.filter((item) => {
      if (activeCategory !== 'All' && item.category !== activeCategory) return false
      if (!q) return true
      const hay = `${item.title} ${item.excerpt} ${item.category} ${item.rawCategory}`.toLowerCase()
      return hay.includes(q)
    })
  }, [articles, activeCategory, query])

  const showing = filtered.slice(0, visibleLimit)
  const hasMore = filtered.length > showing.length

  const selectCategory = (cat: string) => {
    setActiveCategory(cat)
    setVisibleLimit(12)
  }

  return (
    <>
      <section className="ed-curated-band" aria-labelledby="curated-title">
        <div className="ed-container">
          <div className="ed-section-header">
            <div>
              <p className="ed-eyebrow">Curated for Relocating Buyers</p>
              <h2 id="curated-title">
                Most-read <em>planning guides.</em>
              </h2>
            </div>
            <button
              type="button"
              className="ed-link-underlined"
              onClick={() => {
                selectCategory('Relocation')
                document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View all Relocation guides <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="ed-triptych-grid">
            <Link className="ed-triptych-card" href="/articles/moving-from-washington-to-north-idaho">
              <div className="ed-triptych-photo">
                <img src="/images/field-guide/sunset-over-the-lake.webp" alt="Golden sunset over Lake Coeur d'Alene" loading="lazy" />
              </div>
              <div className="ed-triptych-body">
                <p className="ed-card-kicker">Relocation · State Comparison</p>
                <h3>Moving from Washington to North Idaho: A Buyer’s Planning Guide</h3>
                <p>Taxes, Spokane commute realities, border-town trade-offs, and what surprises Washington buyers most.</p>
                <span className="ed-card-cta">Read Guide <span aria-hidden="true">→</span></span>
              </div>
            </Link>

            <Link className="ed-triptych-card" href="/articles/moving-from-arizona-to-north-idaho">
              <div className="ed-triptych-photo">
                <img src="/images/field-guide/townhome-walk.webp" alt="Tree-lined residential street in North Idaho" loading="lazy" />
              </div>
              <div className="ed-triptych-body">
                <p className="ed-card-kicker">Relocation · Four Seasons</p>
                <h3>Moving from Arizona to North Idaho: What to Check Before You Buy</h3>
                <p>From winter heating systems and snow exposure to microclimates between Post Falls and Sandpoint.</p>
                <span className="ed-card-cta">Read Guide <span aria-hidden="true">→</span></span>
              </div>
            </Link>

            <Link className="ed-triptych-card" href="/articles/when-to-move-coeur-dalene-month-by-month-buyer-guide">
              <div className="ed-triptych-photo">
                <img src="/images/skiing-action-4k.webp" alt="Winter alpine lifestyle in North Idaho" loading="lazy" />
              </div>
              <div className="ed-triptych-body">
                <p className="ed-card-kicker">Buyer Guide · 18 min read</p>
                <h3>When to Move to Coeur d’Alene: A Month-by-Month Honest Guide</h3>
                <p>How each season shapes inventory, competition, and your first year settling into North Idaho.</p>
                <span className="ed-card-cta">Read Guide <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="ed-library-section" id="library" aria-labelledby="library-title">
        <div className="ed-container">
          <div className="ed-section-header">
            <div>
              <p className="ed-eyebrow">The Complete Archive</p>
              <h2 id="library-title">
                Explore every <em>article &amp; guide.</em>
              </h2>
            </div>
            <p className="ed-library-count" aria-live="polite">
              {filtered.length === 0
                ? 'No matching articles'
                : `Showing ${showing.length} of ${filtered.length} ${filtered.length === 1 ? 'article' : 'articles'}`}
            </p>
          </div>

          <div className="ed-filter-bar">
            <div className="ed-filter-tabs" role="tablist" aria-label="Filter articles by topic">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`ed-filter-tab${activeCategory === cat ? ' is-active' : ''}`}
                  onClick={() => selectCategory(cat)}
                >
                  {cat} <span className="ed-tab-num">{counts[cat] || 0}</span>
                </button>
              ))}
            </div>

            <div className="ed-search-wrap">
              <label className="sr-only" htmlFor="ed-article-search">Search articles</label>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--bronze)" strokeWidth="1.4" style={{ flexShrink: 0, marginRight: '10px' }} aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m16.5 16.5 4 4" />
              </svg>
              <input
                id="ed-article-search"
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setVisibleLimit(12)
                }}
                placeholder="Search cities, taxes, acreage, rates…"
                autoComplete="off"
              />
              {query && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => {
                    setQuery('')
                    setVisibleLimit(12)
                  }}
                  style={{ fontSize: '18px', padding: '0 4px', color: 'var(--ink-muted)' }}
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {showing.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 24px', border: '1px solid var(--hairline)', background: 'var(--alabaster-card)' }}>
              <h3 style={{ fontSize: '30px', fontStyle: 'italic' }}>No articles match that search.</h3>
              <p style={{ margin: '12px auto 24px', color: 'var(--ink-muted)', maxWidth: '440px', fontSize: '15px' }}>
                Try searching for “Coeur d’Alene,” “taxes,” “acreage,” “winter,” or reset your filters.
              </p>
              <button
                type="button"
                className="ed-btn-outline-pine"
                onClick={() => {
                  setActiveCategory('All')
                  setQuery('')
                  setVisibleLimit(12)
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="ed-articles-grid">
              {showing.map((item) => (
                <Link key={item.href} href={item.href} className="ed-article-card">
                  <div className="ed-article-meta">
                    <span className="ed-article-cat">{item.category}</span>
                    <span className="ed-article-time">{item.readTime}</span>
                  </div>
                  {item.badge && <span className="ed-article-badge">{item.badge}</span>}
                  <h3>{item.title}</h3>
                  <p className="ed-article-excerpt">{item.excerpt}</p>
                  <div className="ed-article-footer">
                    <span className="ed-article-date">{item.date || 'North Idaho Field Guide'}</span>
                    <span className="ed-article-read">
                      Read Article <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {hasMore && (
            <div className="ed-library-footer">
              <button
                type="button"
                className="ed-btn-outline-pine"
                onClick={() => setVisibleLimit((v) => v + 12)}
              >
                Load More ({Math.min(12, filtered.length - showing.length)} more)
              </button>
              <button
                type="button"
                className="ed-link-underlined"
                onClick={() => setVisibleLimit(articles.length)}
              >
                Show all matching
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
