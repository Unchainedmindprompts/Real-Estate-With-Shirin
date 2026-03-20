import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Buying a Home in Northern Idaho | Shirin Abplanalp · eXp Realty',
  description:
    "Looking to buy a home in Post Falls, Coeur d'Alene, or Northern Idaho? Shirin Abplanalp provides expert buyer representation with deep local market knowledge.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/buyers',
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Buyer Representation — Northern Idaho Real Estate',
  description:
    "Expert buyer representation for home purchases in Post Falls, Coeur d'Alene, Hayden, and Kootenai County Idaho.",
  provider: { '@type': 'RealEstateAgent', name: 'Shirin Abplanalp', url: 'https://www.realestatewithshirin.com' },
  areaServed: [
    { '@type': 'City', name: 'Post Falls' },
    { '@type': 'City', name: "Coeur d'Alene" },
    { '@type': 'City', name: 'Hayden' },
    { '@type': 'AdministrativeArea', name: 'Kootenai County' },
  ],
  serviceType: 'Real Estate Buyer Representation',
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What does a buyer's agent do in Northern Idaho?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A buyer's agent represents your interests throughout the home purchase process — from identifying properties that match your needs and lifestyle, to negotiating offers, managing inspections, and guiding you through closing. In Northern Idaho's competitive market, having an experienced local agent means you get access to deep neighborhood knowledge, honest guidance on pricing, and an advocate who works exclusively for you.",
      },
    },
    {
      '@type': 'Question',
      name: "How much does it cost to use a buyer's agent in Idaho?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In most transactions, the buyer's agent commission is negotiated as part of the sale. Idaho follows standard real estate commission practices. During our first conversation, I'll explain exactly how compensation works so there are no surprises.",
      },
    },
    {
      '@type': 'Question',
      name: "What is the housing market like in Post Falls and Coeur d'Alene?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Northern Idaho's real estate market is active and competitive, particularly in Post Falls and Coeur d'Alene. The region has seen sustained demand from buyers relocating from higher-cost western markets. Inventory varies by price point and neighborhood. The best way to get current market context is to schedule a conversation — I can walk you through what's happening right now in the specific areas and price ranges you're targeting.",
      },
    },
    {
      '@type': 'Question',
      name: 'What neighborhoods in Post Falls are best for families?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post Falls has several excellent family-friendly neighborhoods depending on your priorities. Areas near the Centennial Trail offer easy outdoor access. Neighborhoods near Prairie View and Summit Ridge tend to be popular with families for their proximity to schools and parks. I can give you a detailed breakdown based on your specific lifestyle needs — school preferences, commute, outdoor access, and budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I start the process of buying a home in Northern Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The first step is a conversation. Before looking at a single listing, I want to understand how you want to live — your lifestyle, your priorities, your timeline, and your budget. From there, I'll help you build a clear picture of what's realistic in today's market and which areas and property types align with your goals. Reach out and we'll set up a no-pressure call.",
      },
    },
  ],
}

const faqs = [
  {
    q: "What does a buyer's agent do in Northern Idaho?",
    a: "A buyer's agent represents your interests throughout the home purchase process — from identifying properties that match your needs and lifestyle, to negotiating offers, managing inspections, and guiding you through closing. In Northern Idaho's competitive market, having an experienced local agent means you get access to deep neighborhood knowledge, honest guidance on pricing, and an advocate who works exclusively for you.",
  },
  {
    q: "How much does it cost to use a buyer's agent in Idaho?",
    a: "In most transactions, the buyer's agent commission is negotiated as part of the sale. Idaho follows standard real estate commission practices. During our first conversation, I'll explain exactly how compensation works so there are no surprises.",
  },
  {
    q: "What is the housing market like in Post Falls and Coeur d'Alene?",
    a: "Northern Idaho's real estate market is active and competitive, particularly in Post Falls and Coeur d'Alene. The region has seen sustained demand from buyers relocating from higher-cost western markets. Inventory varies by price point and neighborhood. The best way to get current market context is to schedule a conversation — I can walk you through what's happening right now in the specific areas and price ranges you're targeting.",
  },
  {
    q: 'What neighborhoods in Post Falls are best for families?',
    a: 'Post Falls has several excellent family-friendly neighborhoods depending on your priorities. Areas near the Centennial Trail offer easy outdoor access. Neighborhoods near Prairie View and Summit Ridge tend to be popular with families for their proximity to schools and parks. I can give you a detailed breakdown based on your specific lifestyle needs — school preferences, commute, outdoor access, and budget.',
  },
  {
    q: 'How do I start the process of buying a home in Northern Idaho?',
    a: "The first step is a conversation. Before looking at a single listing, I want to understand how you want to live — your lifestyle, your priorities, your timeline, and your budget. From there, I'll help you build a clear picture of what's realistic in today's market and which areas and property types align with your goals. Reach out and we'll set up a no-pressure call.",
  },
]

export default function BuyersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/northern-idaho-hero.webp"
            alt="Lake Coeur d'Alene seaplane dock"
            fill
            priority
            className="object-cover"
            style={{ filter: 'blur(2px)', transform: 'scale(1.02)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>BUYER REPRESENTATION</p>
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
            Expert Buyer Representation in Northern Idaho
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#F5EFE6', maxWidth: '600px', margin: '0 auto' }}>
            From your first question to closing day — Shirin guides buyers through the Northern Idaho market with local expertise and honest advice.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">THE PROCESS</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'Initial Conversation',
                body: 'Understand your lifestyle, priorities, timeline, and budget before a single listing is pulled.',
              },
              {
                num: '02',
                title: 'Market Education',
                body: 'An honest picture of what&apos;s available in your target areas and price range — no sugarcoating.',
              },
              {
                num: '03',
                title: 'Home Search',
                body: 'Curated properties that match how you want to live, not just specs on a sheet.',
              },
              {
                num: '04',
                title: 'Offer to Close',
                body: 'Negotiation, inspections, and paperwork handled with care from offer to keys.',
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
                <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px' }}
                   dangerouslySetInnerHTML={{ __html: step.body }}
                />
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
              Buyer FAQ
            </h2>
          </div>

          <div
            itemScope
            itemType="https://schema.org/FAQPage"
            className="space-y-6"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                style={{
                  backgroundColor: '#FAFAF8',
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
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
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
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>READY TO BUY</p>
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
            Let&apos;s Talk About Buying
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Whether you have questions about the market or you&apos;re ready to start searching — reach out. No pressure, no pitch.
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
