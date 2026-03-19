import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Rathdrum Idaho Real Estate | Homes for Sale | Shirin Abplanalp',
  description:
    'Looking for homes in Rathdrum Idaho? Shirin Abplanalp is a licensed Rathdrum real estate agent with eXp Realty. Expert buyer and seller representation.',
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/areas/rathdrum-idaho',
  },
}

const jsonLdAgent = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Shirin Abplanalp — Rathdrum Idaho Real Estate',
  url: 'https://www.realestatewithshirin.com/areas/rathdrum-idaho',
  areaServed: {
    '@type': 'City',
    name: 'Rathdrum',
    containedInPlace: { '@type': 'State', name: 'Idaho' },
  },
  telephone: '(208) 660-7468',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rathdrum',
    addressRegion: 'ID',
    postalCode: '83858',
    addressCountry: 'US',
  },
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the housing market like in Rathdrum Idaho in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coming soon.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best neighborhoods in Rathdrum Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coming soon.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do homes cost in Rathdrum Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coming soon.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Rathdrum compare to Post Falls for home buyers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coming soon.',
      },
    },
  ],
}

const faqs = [
  {
    q: 'What is the housing market like in Rathdrum Idaho in 2026?',
    a: 'Coming soon.',
  },
  {
    q: 'What are the best neighborhoods in Rathdrum Idaho?',
    a: 'Coming soon.',
  },
  {
    q: 'How much do homes cost in Rathdrum Idaho?',
    a: 'Coming soon.',
  },
  {
    q: 'How does Rathdrum compare to Post Falls for home buyers?',
    a: 'Coming soon.',
  },
]

export default function RathdrumPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAgent) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_1620.jpeg"
            alt="Rathdrum Idaho"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>RATHDRUM, IDAHO</p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              fontSize: 'clamp(36px, 6vw, 56px)',
              lineHeight: 1.1,
              color: '#FAFAF8',
            }}
          >
            Rathdrum Idaho Real Estate
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#F5EFE6', maxWidth: '600px', margin: '0 auto' }}>
            Buyer and seller representation in one of Northern Idaho&apos;s fastest-growing communities.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">THE MARKET</p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 500,
              fontSize: 'clamp(28px, 4vw, 40px)',
              lineHeight: 1.2,
              color: '#1C1A17',
            }}
          >
            Rathdrum at a Glance
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            Coming soon.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            Coming soon.
          </p>
        </div>
      </section>

      {/* Why Rathdrum */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHY RATHDRUM</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              What Makes This Community Stand Out
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Affordability', body: 'Coming soon.' },
              { title: 'Space & Privacy', body: 'Coming soon.' },
              { title: 'Location', body: 'Coming soon.' },
              { title: 'Growth', body: 'Coming soon.' },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: '#FAFAF8',
                  border: '1px solid #E8DDD0',
                  borderRadius: '4px',
                  padding: '32px',
                  boxShadow: '0 2px 12px rgba(28,26,23,0.06)',
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '22px',
                    color: '#1C1A17',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px' }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">COMMON QUESTIONS</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              Rathdrum FAQ
            </h2>
          </div>

          <div itemScope itemType="https://schema.org/FAQPage" className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                style={{
                  backgroundColor: '#F5EFE6',
                  border: '1px solid #E8DDD0',
                  borderRadius: '4px',
                  padding: '28px 32px',
                }}
              >
                <h3
                  itemProp="name"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '20px',
                    color: '#1C1A17',
                    marginBottom: '12px',
                  }}
                >
                  {faq.q}
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', lineHeight: 1.7 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding" style={{ backgroundColor: '#1C1A17' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>Shirin — Rathdrum Realtor</p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 500,
              fontSize: 'clamp(32px, 5vw, 48px)',
              lineHeight: 1.15,
              color: '#F5EFE6',
            }}
          >
            Talk to Shirin About Rathdrum
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Buying or selling in Rathdrum? Let&apos;s talk about the current market and what&apos;s right for you.
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
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
