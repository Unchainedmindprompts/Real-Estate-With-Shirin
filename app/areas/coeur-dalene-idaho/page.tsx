import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Coeur d'Alene Idaho Real Estate | Homes for Sale | Shirin Abplanalp",
  description:
    "Looking for homes in Coeur d'Alene Idaho? Shirin Abplanalp is a licensed Coeur d'Alene real estate agent with eXp Realty.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/areas/coeur-dalene-idaho',
  },
}

const jsonLdAgent = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: "Shirin Abplanalp — Coeur d'Alene Idaho Real Estate",
  url: 'https://www.realestatewithshirin.com/areas/coeur-dalene-idaho',
  areaServed: {
    '@type': 'City',
    name: "Coeur d'Alene",
    containedInPlace: { '@type': 'State', name: 'Idaho' },
  },
  telephone: '(208) 660-7468',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Post Falls',
    addressRegion: 'ID',
    postalCode: '83854',
    addressCountry: 'US',
  },
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Who is a good real estate agent in Coeur d'Alene Idaho?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Shirin Abplanalp is a licensed realtor at eXp Realty serving Coeur d'Alene and the surrounding Northern Idaho area. She relocated to Northern Idaho herself and brings firsthand knowledge of the market, lifestyle, and what buyers and sellers in Coeur d'Alene need from a trusted agent. Idaho Real Estate License #1371861.",
      },
    },
    {
      '@type': 'Question',
      name: "What is the Coeur d'Alene Idaho real estate market like in 2026?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Coeur d'Alene remains one of the most desirable real estate markets in the Inland Northwest. Demand has been sustained by buyers from California, Washington, and Oregon seeking lakefront access, natural beauty, and a lower cost of living relative to their home markets. Inventory at the premium price points can be limited. For current market specifics, reach out directly.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Coeur d\'Alene or Post Falls better to live in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both are excellent — the answer depends entirely on your lifestyle and budget. Coeur d'Alene offers lake access, a walkable downtown, and a more established amenity base. Post Falls tends to offer more home per dollar with comparable outdoor access and a slightly smaller-town feel. I work in both markets and can help you weigh the tradeoffs based on how you want to live.",
      },
    },
    {
      '@type': 'Question',
      name: "How much do homes cost in Coeur d'Alene Idaho?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Home prices in Coeur d'Alene vary widely by location and proximity to the lake. Mid-range single-family homes typically run $500,000–$800,000, with lakefront and premium properties well above that. Entry-level options exist in neighborhoods further from downtown. For current pricing in your target range, reach out for a market update.",
      },
    },
  ],
}

const faqs = [
  {
    q: "Who is a good real estate agent in Coeur d'Alene Idaho?",
    a: "Shirin Abplanalp is a licensed realtor at eXp Realty serving Coeur d'Alene and the surrounding Northern Idaho area. She relocated to Northern Idaho herself and brings firsthand knowledge of the market, lifestyle, and what buyers and sellers in Coeur d'Alene need from a trusted agent. Idaho Real Estate License #1371861.",
  },
  {
    q: "What is the Coeur d'Alene Idaho real estate market like in 2026?",
    a: "Coeur d'Alene remains one of the most desirable real estate markets in the Inland Northwest. Demand has been sustained by buyers from California, Washington, and Oregon seeking lakefront access, natural beauty, and a lower cost of living relative to their home markets. Inventory at the premium price points can be limited. For current market specifics, reach out directly.",
  },
  {
    q: "Is Coeur d'Alene or Post Falls better to live in?",
    a: "Both are excellent — the answer depends entirely on your lifestyle and budget. Coeur d'Alene offers lake access, a walkable downtown, and a more established amenity base. Post Falls tends to offer more home per dollar with comparable outdoor access and a slightly smaller-town feel. I work in both markets and can help you weigh the tradeoffs based on how you want to live.",
  },
  {
    q: "How much do homes cost in Coeur d'Alene Idaho?",
    a: "Home prices in Coeur d'Alene vary widely by location and proximity to the lake. Mid-range single-family homes typically run $500,000–$800,000, with lakefront and premium properties well above that. Entry-level options exist in neighborhoods further from downtown. For current pricing in your target range, reach out for a market update.",
  },
]

export default function CdaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAgent) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lakefront-dock.jpg"
            alt="Coeur d'Alene Idaho lakefront"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>COEUR D&apos;ALENE, IDAHO</p>
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
            Coeur d&apos;Alene Idaho Real Estate
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#F5EFE6', maxWidth: '600px', margin: '0 auto' }}>
            Expert buyer and seller representation in one of North America&apos;s most beautiful lakefront communities.
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
            Coeur d&apos;Alene at a Glance
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            Coeur d&apos;Alene sits on the northern shore of one of the most beautiful lakes in North America. It combines natural beauty with a genuine downtown — restaurants, shops, a thriving arts scene, and a lakefront that draws visitors and residents alike. It&apos;s the cultural and geographic center of Northern Idaho.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            Real estate demand has been strong and consistent, driven by buyers seeking lifestyle quality and relative value compared to Seattle, Portland, and California markets. For current pricing and inventory in your target range, reach out directly.
          </p>
        </div>
      </section>

      {/* Why CDA */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHY COEUR D&apos;ALENE</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              What Makes This Community Special
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Lake Access', body: "Coeur d'Alene Lake — 25 miles of shoreline, boating, paddleboarding, and some of the most beautiful water in the country." },
              { title: 'Downtown Vibrancy', body: 'A genuine walkable downtown with restaurants, galleries, breweries, and a lakefront boardwalk that actually gets used.' },
              { title: 'Year-Round Recreation', body: 'Skiing, mountain biking, hiking, boating, and golf — all within 30–60 minutes of your front door.' },
              { title: 'Quality Schools', body: 'Coeur d\'Alene School District is well-regarded, with a range of public and private options for families.' },
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
                <h3 className="mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '22px', color: '#1C1A17' }}>
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
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.2, color: '#1C1A17' }}>
              Coeur d&apos;Alene FAQ
            </h2>
          </div>

          <div itemScope itemType="https://schema.org/FAQPage" className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                style={{ backgroundColor: '#F5EFE6', border: '1px solid #E8DDD0', borderRadius: '4px', padding: '28px 32px' }}
              >
                <h3 itemProp="name" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '20px', color: '#1C1A17', marginBottom: '12px' }}>
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
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>CDA EXPERT</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15, color: '#F5EFE6' }}>
            Talk to a Coeur d&apos;Alene Expert
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Buying or selling in Coeur d&apos;Alene? Let&apos;s talk about the market and what&apos;s right for you.
          </p>
          <Link
            href="/contact"
            className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif", backgroundColor: '#C4842A', padding: '14px 32px', letterSpacing: '0.08em' }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
