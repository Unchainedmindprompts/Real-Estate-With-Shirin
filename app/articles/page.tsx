import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Northern Idaho Real Estate Articles | Shirin Abplanalp',
  description:
    'Real estate insights, market updates, and Northern Idaho lifestyle guides from Shirin Abplanalp, licensed realtor at eXp Realty.',
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles',
  },
}

export default function ArticlesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="flex items-center justify-center"
        style={{ minHeight: '40vh', backgroundColor: '#F5EFE6', paddingTop: '80px' }}
      >
        <div className="text-center px-6 lg:px-8 py-16 max-w-3xl mx-auto">
          <p className="eyebrow mb-4">INSIGHTS &amp; GUIDES</p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              fontSize: 'clamp(36px, 6vw, 56px)',
              lineHeight: 1.1,
              color: '#1C1A17',
            }}
          >
            Northern Idaho Real Estate Insights
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#5C5650' }}>
            Market updates, neighborhood guides, and honest advice for buyers, sellers, and anyone considering a move to Northern Idaho.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
          {/* Market Report — Post Falls Housing Market 2026 */}
          <Link
            href="/articles/post-falls-idaho-housing-market-2026"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{
              border: '1px solid #E8DDD0',
              backgroundColor: '#F5EFE6',
              padding: '40px 40px',
            }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C4842A',
                }}
              >
                Market Reports
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>
                8 min read
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: '#FAFAF8',
                  backgroundColor: '#C4842A',
                  padding: '2px 8px',
                  borderRadius: '2px',
                }}
              >
                Updated March 2026
              </span>
            </div>
            <h2
              className="mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(22px, 3vw, 28px)',
                lineHeight: 1.25,
                color: '#1C1A17',
              }}
            >
              Post Falls Idaho Housing Market 2026 — What Buyers and Sellers Need to Know
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#5C5650', lineHeight: 1.7, marginBottom: '24px' }}>
              Median home prices, days on market, inventory levels, and what to expect for the rest of the year. Current data as of March 2026.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>
                March 18, 2026
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#C4842A',
                  letterSpacing: '0.04em',
                }}
              >
                Read Article →
              </span>
            </div>
          </Link>

          {/* Buyer Resources — How to Find the Right Realtor */}
          <Link
            href="/articles/how-to-find-realtor-post-falls-idaho"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{
              border: '1px solid #E8DDD0',
              backgroundColor: '#F5EFE6',
              padding: '40px 40px',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C4842A',
                }}
              >
                Buyer Resources
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>
                8 min read
              </span>
            </div>
            <h2
              className="mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(22px, 3vw, 28px)',
                lineHeight: 1.25,
                color: '#1C1A17',
              }}
            >
              How to Find the Right Realtor in Post Falls, Idaho — And What to Look for Before You Hire Anyone
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#5C5650', lineHeight: 1.7, marginBottom: '24px' }}>
              What to look for in a Post Falls realtor, the questions worth asking before you hire anyone, and why local knowledge matters more than you think.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>
                March 18, 2026
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#C4842A',
                  letterSpacing: '0.04em',
                }}
              >
                Read Article →
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
