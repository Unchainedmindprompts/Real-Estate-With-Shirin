import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, CITY_SAMEAS } from '@/lib/schema-ids'

const PAGE_URL = `${BASE_URL}/areas/coeur-dalene-idaho`

export const metadata: Metadata = {
  title: "Coeur d'Alene, Idaho Real Estate & Living Guide",
  description:
    "Thinking about Coeur d'Alene, Idaho? A local REALTOR's guide to neighborhoods, home prices, lifestyle, and what living on the lake is actually like.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/areas/coeur-dalene-idaho',
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: "Real Estate Services — Coeur d'Alene, Idaho",
  serviceType: 'Real estate representation',
  provider: { '@id': BUSINESS_ID },
  areaServed: {
    '@type': 'City',
    name: "Coeur d'Alene",
    sameAs: CITY_SAMEAS.coeurDalene,
    containedInPlace: { '@type': 'State', name: 'Idaho' },
  },
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Coeur d'Alene, Idaho Real Estate & Living Guide",
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': BUSINESS_ID },
  mainEntity: { '@id': `${PAGE_URL}#service` },
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  inLanguage: 'en-US',
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Areas', item: `${BASE_URL}/areas` },
    { '@type': 'ListItem', position: 3, name: "Coeur d'Alene, Idaho", item: PAGE_URL },
  ],
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/areas/coeur-dalene-idaho/#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is the housing market like in Coeur d'Alene Idaho in 2026?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "As of early 2026, the median sale price in Coeur d'Alene is approximately $601,000 — up 4.6% year-over-year — with average homes selling in around 49 days. Hot homes move in as few as 12 days. The market has seen showings per listing increase 46.2% year-over-year, a sign of strengthening demand even as inventory sits at 2.6 months of supply. Nearly 70% of homes are closing under list price, with a sale-to-list ratio of around 97–98%, meaning there is negotiating room for buyers who come in prepared. Demand continues to be driven by out-of-state buyers relocating from California, Washington, and Oregon.",
      },
    },
    {
      '@type': 'Question',
      name: "What are the best neighborhoods in Coeur d'Alene Idaho?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Coeur d'Alene neighborhoods vary considerably by lifestyle and price point. Downtown CDA and Fort Grounds offer walkable access to Sherman Avenue, the lake, and local restaurants — these are some of the most established and stable pockets in the city. Sanders Beach on the eastern shore is a waterfront lifestyle neighborhood with premium pricing to match. Midtown CDA is more affordable and has an eclectic, arts-forward character that attracts younger buyers. Riverstone, along the Spokane River, is a master-planned community popular with young professionals and families. Dalton Gardens to the north offers larger lots and a more rural feel while staying close to CDA amenities. Blackwell Hill, south of downtown, commands some of the best lake and mountain views in the area. The right neighborhood depends on how you want to live day-to-day — that conversation is worth having before you start pulling listings.",
      },
    },
    {
      '@type': 'Question',
      name: "How much do homes cost in Coeur d'Alene Idaho?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "As of early 2026, the median sale price in Coeur d'Alene is approximately $601,000. Entry-level single-family homes in move-in condition typically start around $450,000–$500,000 for a 3-bedroom. The $550,000–$700,000 range gets you 3–4 bedrooms with updated finishes and more desirable locations. Above $700,000 you're looking at larger homes, premium neighborhoods, lake-proximate lots, and luxury finishes — the new construction median in the CDA urban area is currently over $770,000. Price per square foot is around $288, and Coeur d'Alene consistently runs $80,000–$100,000 higher than Post Falls at comparable size and condition.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does Coeur d\'Alene compare to Post Falls for home buyers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Coeur d'Alene carries a higher median price than Post Falls — roughly $601,000 versus $521,000 — but delivers lake access, a walkable downtown, and Sherman Avenue in exchange. Buyers get CDA's lifestyle premium but generally less square footage per dollar. CDA also has 2.6 months of housing supply compared to Post Falls's 1.4 months, which means more listings to choose from and slightly more negotiating leverage. For buyers who want the full CDA experience — the lake, the restaurants, the walkability — it's worth the premium. For buyers who want maximum value and newer construction, Post Falls is 10 minutes west on I-90 and delivers more home for the same budget.",
      },
    },
  ],
}

const faqs = [
  {
    q: "What is the housing market like in Coeur d'Alene Idaho in 2026?",
    a: "As of early 2026, the median sale price in Coeur d'Alene is approximately $601,000 — up 4.6% year-over-year — with average homes selling in around 49 days. Hot homes move in as few as 12 days. The market has seen showings per listing increase 46.2% year-over-year, a sign of strengthening demand even as inventory sits at 2.6 months of supply. Nearly 70% of homes are closing under list price, with a sale-to-list ratio of around 97–98%, meaning there is negotiating room for buyers who come in prepared. Demand continues to be driven by out-of-state buyers relocating from California, Washington, and Oregon.",
  },
  {
    q: "What are the best neighborhoods in Coeur d'Alene Idaho?",
    a: "Coeur d'Alene neighborhoods vary considerably by lifestyle and price point. Downtown CDA and Fort Grounds offer walkable access to Sherman Avenue, the lake, and local restaurants — these are some of the most established and stable pockets in the city. Sanders Beach on the eastern shore is a waterfront lifestyle neighborhood with premium pricing to match. Midtown CDA is more affordable and has an eclectic, arts-forward character that attracts younger buyers. Riverstone, along the Spokane River, is a master-planned community popular with young professionals and families. Dalton Gardens to the north offers larger lots and a more rural feel while staying close to CDA amenities. Blackwell Hill, south of downtown, commands some of the best lake and mountain views in the area. The right neighborhood depends on how you want to live day-to-day — that conversation is worth having before you start pulling listings.",
  },
  {
    q: "How much do homes cost in Coeur d'Alene Idaho?",
    a: "As of early 2026, the median sale price in Coeur d'Alene is approximately $601,000. Entry-level single-family homes in move-in condition typically start around $450,000–$500,000 for a 3-bedroom. The $550,000–$700,000 range gets you 3–4 bedrooms with updated finishes and more desirable locations. Above $700,000 you're looking at larger homes, premium neighborhoods, lake-proximate lots, and luxury finishes — the new construction median in the CDA urban area is currently over $770,000. Price per square foot is around $288, and Coeur d'Alene consistently runs $80,000–$100,000 higher than Post Falls at comparable size and condition.",
  },
  {
    q: "How does Coeur d'Alene compare to Post Falls for home buyers?",
    a: "Coeur d'Alene carries a higher median price than Post Falls — roughly $601,000 versus $521,000 — but delivers lake access, a walkable downtown, and Sherman Avenue in exchange. Buyers get CDA's lifestyle premium but generally less square footage per dollar. CDA also has 2.6 months of housing supply compared to Post Falls's 1.4 months, which means more listings to choose from and slightly more negotiating leverage. For buyers who want the full CDA experience — the lake, the restaurants, the walkability — it's worth the premium. For buyers who want maximum value and newer construction, Post Falls is 10 minutes west on I-90 and delivers more home for the same budget.",
  },
]

export default function CdaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/north-idaho-lake-hero.webp"
            alt="Coeur d'Alene, Idaho — lake seaplane dock"
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
                  backgroundColor: '#2A2722',
                  border: '1px solid #3A3530',
                  borderRadius: '4px',
                  padding: '32px',
                }}
              >
                <h3 className="mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '22px', color: '#C4842A' }}>
                  {card.title}
                </h3>
                <p style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px' }}>
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

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{ backgroundColor: '#2A2722', border: '1px solid #3A3530', borderRadius: '4px', padding: '28px 32px' }}
              >
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '20px', color: '#C4842A', marginBottom: '12px' }}>
                  {faq.q}
                </h3>
                <div>
                  <p style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', lineHeight: 1.7 }}>
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
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>Shirin — Coeur d&apos;Alene Realtor</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15, color: '#F5EFE6' }}>
            Talk to Shirin About Coeur d&apos;Alene
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Buying or selling in Coeur d&apos;Alene? Let&apos;s talk about the current market and what&apos;s right for you.
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
