import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Selling Your Home in Northern Idaho | Shirin Abplanalp · eXp Realty',
  description:
    "Selling your home in Post Falls, Coeur d'Alene, or Northern Idaho? Shirin Abplanalp delivers strategic pricing, professional presentation, and results.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/sellers',
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Seller Representation — Northern Idaho Real Estate',
  description:
    "Expert seller representation for home sales in Post Falls, Coeur d'Alene, Hayden, and Kootenai County Idaho.",
  provider: { '@type': 'RealEstateAgent', '@id': 'https://www.realestatewithshirin.com/#business', name: 'Shirin Abplanalp', url: 'https://www.realestatewithshirin.com' },
  areaServed: [
    { '@type': 'City', name: 'Post Falls' },
    { '@type': 'City', name: "Coeur d'Alene" },
    { '@type': 'City', name: 'Hayden' },
    { '@type': 'AdministrativeArea', name: 'Kootenai County' },
  ],
  serviceType: 'Real Estate Seller Representation',
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/sellers/#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I sell my home fast in Post Falls Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Selling quickly in Post Falls comes down to three things: accurate pricing, strong presentation, and maximum market exposure. Overpriced homes sit. Homes that are priced correctly for current market conditions, professionally photographed, and marketed to the right buyer pool move fast. I'll give you an honest comparative market analysis and a clear strategy before we list.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is my home worth in Northern Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Home values in Northern Idaho vary significantly by location, condition, lot size, and current inventory levels. The best way to get an accurate picture is a comparative market analysis — I'll look at recent sales of comparable homes in your specific neighborhood and give you an honest range, not an inflated number designed to win your listing.",
      },
    },
    {
      '@type': 'Question',
      name: "How long does it take to sell a home in Coeur d'Alene or Post Falls?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Days on market varies by price point and neighborhood. Well-priced homes in desirable Post Falls and Coeur d'Alene neighborhoods can move quickly — sometimes within days. Homes at higher price points or with deferred maintenance typically take longer. I'll give you realistic expectations based on current market data, not wishful thinking.",
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do to prepare my home for sale in Northern Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The basics matter most: clean, declutter, address obvious deferred maintenance, and make sure the exterior makes a strong first impression. I'll walk through your home before we list and give you a prioritized list of what's worth doing and what isn't. Not every improvement adds value — I'll help you focus your time and money on what actually moves the needle for buyers in this market.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find a realtor to sell my home in Post Falls Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Look for someone with genuine local market knowledge, honest communication, and a track record of results in your specific price range and area. I'd encourage you to interview a few agents — ask them how they price homes, how they market listings, and what their average days on market looks like. I'm happy to be one of those conversations.",
      },
    },
  ],
}

const faqs = [
  {
    q: 'How do I sell my home fast in Post Falls Idaho?',
    a: "Selling quickly in Post Falls comes down to three things: accurate pricing, strong presentation, and maximum market exposure. Overpriced homes sit. Homes that are priced correctly for current market conditions, professionally photographed, and marketed to the right buyer pool move fast. I'll give you an honest comparative market analysis and a clear strategy before we list.",
  },
  {
    q: 'What is my home worth in Northern Idaho?',
    a: "Home values in Northern Idaho vary significantly by location, condition, lot size, and current inventory levels. The best way to get an accurate picture is a comparative market analysis — I'll look at recent sales of comparable homes in your specific neighborhood and give you an honest range, not an inflated number designed to win your listing.",
  },
  {
    q: "How long does it take to sell a home in Coeur d'Alene or Post Falls?",
    a: "Days on market varies by price point and neighborhood. Well-priced homes in desirable Post Falls and Coeur d'Alene neighborhoods can move quickly — sometimes within days. Homes at higher price points or with deferred maintenance typically take longer. I'll give you realistic expectations based on current market data, not wishful thinking.",
  },
  {
    q: 'What should I do to prepare my home for sale in Northern Idaho?',
    a: "The basics matter most: clean, declutter, address obvious deferred maintenance, and make sure the exterior makes a strong first impression. I'll walk through your home before we list and give you a prioritized list of what's worth doing and what isn't. Not every improvement adds value — I'll help you focus your time and money on what actually moves the needle for buyers in this market.",
  },
  {
    q: 'How do I find a realtor to sell my home in Post Falls Idaho?',
    a: "Look for someone with genuine local market knowledge, honest communication, and a track record of results in your specific price range and area. I'd encourage you to interview a few agents — ask them how they price homes, how they market listings, and what their average days on market looks like. I'm happy to be one of those conversations.",
  },
]

export default function SellersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/north-idaho-lake-hero.webp"
            alt="Lake Coeur d'Alene seaplane dock"
            fill
            priority
            className="object-cover"
            
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>SELLER REPRESENTATION</p>
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
            Sell Your North Idaho Home With Confidence
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#F5EFE6', maxWidth: '600px', margin: '0 auto' }}>
            Strategic pricing, honest advice, and professional execution — from listing day to closing day.
          </p>
        </div>
      </section>

      {/* What I Provide */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHAT I PROVIDE</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              The Seller Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'Honest Market Analysis',
                body: 'Accurate pricing based on real comparable sales — not a number designed to win your listing.',
              },
              {
                num: '02',
                title: 'Strategic Pricing',
                body: 'The number that attracts serious buyers, creates urgency, and maximizes your net return.',
              },
              {
                num: '03',
                title: 'Professional Marketing',
                body: 'Photography, presentation, and targeted exposure to the right buyer pool in the right channels.',
              },
              {
                num: '04',
                title: 'Negotiation & Close',
                body: 'Advocating for your interests from the first offer to the moment keys change hands.',
              },
            ].map((step) => (
              <div key={step.num}>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '48px',
                    color: '#C4842A',
                    lineHeight: 1,
                    marginBottom: '16px',
                  }}
                >
                  {step.num}
                </p>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '22px',
                    color: '#1C1A17',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px' }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
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
              Seller FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#FAFAF8',
                  border: '1px solid #E8DDD0',
                  borderRadius: '4px',
                  padding: '28px 32px',
                }}
              >
                <h3
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
                <div>
                  <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', lineHeight: 1.7 }}>
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
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>READY TO SELL</p>
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
            Get Your Home&apos;s Value
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Let&apos;s start with an honest conversation about your home&apos;s value and what it takes to sell well in today&apos;s market.
          </p>
          <Link
            href="/contact"
            className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm transition-colors"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              backgroundColor: '#C4842A',
              padding: '14px 32px',
              letterSpacing: '0.08em',
            }}
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
