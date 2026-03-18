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

      {/* Coming Soon */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div
            style={{
              border: '1px solid #E8DDD0',
              borderRadius: '4px',
              padding: '64px 48px',
              backgroundColor: '#F5EFE6',
            }}
          >
            <div style={{ width: '48px', height: '3px', backgroundColor: '#C4842A', margin: '0 auto 32px' }} />
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: '32px',
                color: '#1C1A17',
              }}
            >
              Articles Coming Soon
            </h2>
            <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
              In the meantime, reach out directly — Shirin is happy to answer your questions about the market, specific neighborhoods, or what it&apos;s actually like to live here.
            </p>
            <Link
              href="/contact"
              className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                backgroundColor: '#C4842A',
                padding: '14px 32px',
                letterSpacing: '0.08em',
              }}
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
