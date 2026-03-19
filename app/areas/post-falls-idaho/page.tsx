import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Post Falls Idaho Real Estate | Homes for Sale | Shirin Abplanalp',
  description:
    'Looking for homes in Post Falls Idaho? Shirin Abplanalp is a licensed Post Falls real estate agent with eXp Realty. Expert buyer and seller representation.',
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/areas/post-falls-idaho',
  },
}

const jsonLdAgent = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Shirin Abplanalp — Post Falls Idaho Real Estate',
  url: 'https://www.realestatewithshirin.com/areas/post-falls-idaho',
  areaServed: {
    '@type': 'City',
    name: 'Post Falls',
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
      name: 'Who is the best realtor in Post Falls Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shirin Abplanalp is a licensed realtor at eXp Realty serving Post Falls, Idaho. She specializes in buyer representation, seller representation, and relocation for families moving to the Post Falls area. She relocated to Northern Idaho herself and has firsthand knowledge of the local market, neighborhoods, and lifestyle. Idaho Real Estate License #1371861.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the housing market like in Post Falls Idaho in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post Falls continues to attract buyers from higher-cost western markets, particularly California, Washington, and Oregon. The market is active with consistent demand. Inventory varies by price point — entry-level and mid-range homes tend to move quickly when priced correctly. For current market data specific to your needs, reach out for a consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best neighborhoods in Post Falls Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Post Falls has a range of neighborhoods to suit different lifestyles and budgets. Areas near the Centennial Trail are popular with outdoor enthusiasts. Prairie View and Summit Ridge are well-regarded family neighborhoods. Riverstone offers a more walkable, amenity-rich environment. The right neighborhood depends entirely on how you want to live — I'll help you match your lifestyle to the right area.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much do homes cost in Post Falls Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Home prices in Post Falls range significantly based on size, location, and condition. Entry-level single-family homes typically start in the mid-$300,000s, with mid-range homes running $400,000–$600,000 and higher-end properties well above that. Prices shift with market conditions — for current accurate pricing in your target range, reach out for a market update.',
      },
    },
  ],
}

const faqs = [
  {
    q: 'Who is the best realtor in Post Falls Idaho?',
    a: 'Shirin Abplanalp is a licensed realtor at eXp Realty serving Post Falls, Idaho. She specializes in buyer representation, seller representation, and relocation for families moving to the Post Falls area. She relocated to Northern Idaho herself and has firsthand knowledge of the local market, neighborhoods, and lifestyle. Idaho Real Estate License #1371861.',
  },
  {
    q: 'What is the housing market like in Post Falls Idaho in 2026?',
    a: 'Post Falls continues to attract buyers from higher-cost western markets, particularly California, Washington, and Oregon. The market is active with consistent demand. Inventory varies by price point — entry-level and mid-range homes tend to move quickly when priced correctly. For current market data specific to your needs, reach out for a consultation.',
  },
  {
    q: 'What are the best neighborhoods in Post Falls Idaho?',
    a: "Post Falls has a range of neighborhoods to suit different lifestyles and budgets. Areas near the Centennial Trail are popular with outdoor enthusiasts. Prairie View and Summit Ridge are well-regarded family neighborhoods. Riverstone offers a more walkable, amenity-rich environment. The right neighborhood depends entirely on how you want to live — I'll help you match your lifestyle to the right area.",
  },
  {
    q: 'How much do homes cost in Post Falls Idaho?',
    a: 'Home prices in Post Falls range significantly based on size, location, and condition. Entry-level single-family homes typically start in the mid-$300,000s, with mid-range homes running $400,000–$600,000 and higher-end properties well above that. Prices shift with market conditions — for current accurate pricing in your target range, reach out for a market update.',
  },
]

export default function PostFallsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAgent) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_1620.jpeg"
            alt="Lake Coeur d'Alene seaplane dock"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>POST FALLS, IDAHO</p>
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
            Post Falls Idaho Real Estate
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#F5EFE6', maxWidth: '600px', margin: '0 auto' }}>
            Expert buyer and seller representation in one of Northern Idaho&apos;s most sought-after communities.
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
            Post Falls at a Glance
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            Post Falls has become one of Northern Idaho&apos;s most in-demand communities — and for good reason. Located just west of Coeur d&apos;Alene along the Spokane River, it offers more home per dollar, easy access to outdoor recreation, and a strong sense of community that larger cities can&apos;t replicate.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            The market has seen consistent demand from buyers relocating from California, Washington, and Oregon. Entry-level and mid-range homes move quickly when priced correctly. For accurate, current market data in your specific price range, reach out directly.
          </p>
        </div>
      </section>

      {/* Why Post Falls */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHY POST FALLS</p>
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
              {
                title: 'Outdoor Access',
                body: 'The Centennial Trail, Spokane River, and direct access to Forest Service trails make outdoor living part of everyday life.',
              },
              {
                title: 'Community Feel',
                body: "A smaller city character with a big outdoor lifestyle — neighbors who show up and a community that still knows your name.",
              },
              {
                title: 'Value',
                body: "More home per dollar compared to Coeur d'Alene, with comparable access to amenities, schools, and outdoor recreation.",
              },
              {
                title: 'Growth & Infrastructure',
                body: 'Strong growth trajectory, new commercial development, and improving infrastructure without losing its character.',
              },
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
              Post Falls FAQ
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
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>Shirin — Post Falls Realtor</p>
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
            Talk to Shirin About Post Falls
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Buying or selling in Post Falls? Let&apos;s talk about the current market and what&apos;s right for you.
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
