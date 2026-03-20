import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Hayden Idaho Real Estate | Homes for Sale | Shirin Abplanalp',
  description:
    'Looking for homes in Hayden Idaho? Shirin Abplanalp is a licensed realtor with eXp Realty serving Hayden and Kootenai County.',
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/areas/hayden-idaho',
  },
}

const jsonLdAgent = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Shirin Abplanalp — Hayden Idaho Real Estate',
  url: 'https://www.realestatewithshirin.com/areas/hayden-idaho',
  areaServed: { '@type': 'City', name: 'Hayden', containedInPlace: { '@type': 'State', name: 'Idaho' } },
  telephone: '(208) 660-7468',
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the housing market like in Hayden Idaho in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of early 2026, the median sale price in Hayden is approximately $553,000 — with a price per square foot of $311, up 13.5% year-over-year, one of the strongest appreciation rates in Northern Idaho. Homes are averaging around 49–57 days on market, with hot homes going pending in as few as 7 days. Hayden has 2.1 months of housing supply and inventory has contracted 26.6% year-over-year. Showings per listing are up 70.8% — the highest increase of any city in the region — signaling that buyer activity is accelerating into the spring season. The resale market is active, with previously owned homes averaging close to $787,000 in average sale price. New construction deliveries were light in February due to completion timing, not a demand problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Hayden Idaho a good place to raise a family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Hayden is consistently regarded as one of the most family-oriented communities in Northern Idaho. The Lakeland School District serves the area and is well-regarded regionally. Neighborhoods are quiet with larger lots, low traffic density, and a community feel that is genuinely different from more commercial corridors. Proximity to Hayden Lake, Coeur d'Alene Lake, and the surrounding recreation makes it a natural fit for active families. The pace of life is unhurried without being isolated — Coeur d'Alene's amenities are minutes away, but the neighborhood itself stays residential.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much do homes cost in Hayden Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "As of early 2026, the median list price in Hayden is approximately $599,900, with an average home value around $617,000–$627,000. Entry-level resale homes in move-in condition typically start in the $450,000–$500,000 range for a standard 3-bedroom. The $550,000–$700,000 range gets you 3–4 bedrooms, larger lots, and established neighborhoods. New construction and premium properties push well above $700,000, and the resale market for upper-tier homes is averaging close to $787,000. Hayden's price per square foot is $311 — up 13.5% year-over-year — reflecting both genuine appreciation and strong sustained demand.",
      },
    },
    {
      '@type': 'Question',
      name: "How does Hayden compare to Coeur d'Alene for home buyers?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Hayden and Coeur d'Alene are adjacent markets that serve different buyer priorities. Hayden's median runs slightly lower than CDA's $601,000 — and delivers larger lots, a quieter residential character, and a strong school district in exchange for less walkability and lake-direct access. CDA has 2.6 months of supply versus Hayden's 2.1 months, so both markets are undersupplied but Hayden is tighter on a relative basis. Buyers who prioritize space, privacy, and school quality tend to land in Hayden. Buyers who want walkable access to Sherman Avenue, the waterfront, and CDA's downtown energy tend to pay the CDA premium. Both are about 10–15 minutes apart and share the same regional lifestyle.",
      },
    },
  ],
}

const faqs = [
  {
    q: 'What is the housing market like in Hayden Idaho in 2026?',
    a: 'As of early 2026, the median sale price in Hayden is approximately $553,000 — with a price per square foot of $311, up 13.5% year-over-year, one of the strongest appreciation rates in Northern Idaho. Homes are averaging around 49–57 days on market, with hot homes going pending in as few as 7 days. Hayden has 2.1 months of housing supply and inventory has contracted 26.6% year-over-year. Showings per listing are up 70.8% — the highest increase of any city in the region — signaling that buyer activity is accelerating into the spring season. The resale market is active, with previously owned homes averaging close to $787,000 in average sale price. New construction deliveries were light in February due to completion timing, not a demand problem.',
  },
  {
    q: 'Is Hayden Idaho a good place to raise a family?',
    a: "Hayden is consistently regarded as one of the most family-oriented communities in Northern Idaho. The Lakeland School District serves the area and is well-regarded regionally. Neighborhoods are quiet with larger lots, low traffic density, and a community feel that is genuinely different from more commercial corridors. Proximity to Hayden Lake, Coeur d'Alene Lake, and the surrounding recreation makes it a natural fit for active families. The pace of life is unhurried without being isolated — Coeur d'Alene's amenities are minutes away, but the neighborhood itself stays residential.",
  },
  {
    q: 'How much do homes cost in Hayden Idaho?',
    a: "As of early 2026, the median list price in Hayden is approximately $599,900, with an average home value around $617,000–$627,000. Entry-level resale homes in move-in condition typically start in the $450,000–$500,000 range for a standard 3-bedroom. The $550,000–$700,000 range gets you 3–4 bedrooms, larger lots, and established neighborhoods. New construction and premium properties push well above $700,000, and the resale market for upper-tier homes is averaging close to $787,000. Hayden's price per square foot is $311 — up 13.5% year-over-year — reflecting both genuine appreciation and strong sustained demand.",
  },
  {
    q: "How does Hayden compare to Coeur d'Alene for home buyers?",
    a: "Hayden and Coeur d'Alene are adjacent markets that serve different buyer priorities. Hayden's median runs slightly lower than CDA's $601,000 — and delivers larger lots, a quieter residential character, and a strong school district in exchange for less walkability and lake-direct access. CDA has 2.6 months of supply versus Hayden's 2.1 months, so both markets are undersupplied but Hayden is tighter on a relative basis. Buyers who prioritize space, privacy, and school quality tend to land in Hayden. Buyers who want walkable access to Sherman Avenue, the waterfront, and CDA's downtown energy tend to pay the CDA premium. Both are about 10–15 minutes apart and share the same regional lifestyle.",
  },
]

export default function HaydenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAgent) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <Image src="/images/northern-idaho-hero.webp" alt="Lake Coeur d'Alene seaplane dock" fill priority className="object-cover" style={{ filter: 'blur(2px)', transform: 'scale(1.02)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>HAYDEN, IDAHO</p>
          <h1 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: 1.1, color: '#FAFAF8' }}>
            Hayden Idaho Real Estate
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#F5EFE6', maxWidth: '600px', margin: '0 auto' }}>
            Family-friendly neighborhoods, excellent schools, and a quiet residential character just minutes from everything Northern Idaho offers.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">THE MARKET</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, color: '#1C1A17' }}>
            Hayden at a Glance
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            Hayden sits just north of Coeur d&apos;Alene and offers a distinctly residential character that appeals to families and those seeking a quieter pace without sacrificing access. Larger lots, established neighborhoods, and strong schools make it a consistent favorite for buyers with children.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            The market reflects the broader Northern Idaho demand trends — steady buyer interest and competitive pricing for well-maintained, correctly priced homes. For current inventory and pricing, reach out directly.
          </p>
        </div>
      </section>

      {/* Why Hayden */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHY HAYDEN</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.2, color: '#1C1A17' }}>
              What Makes Hayden Stand Out
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Family-Friendly', body: 'Quiet streets, larger lots, and a residential pace that families consistently choose.' },
              { title: 'Lakeland Schools', body: 'The Lakeland School District is well-regarded and serves Hayden families with strong academic programs.' },
              { title: 'Space & Privacy', body: "More lot size per dollar compared to central Coeur d'Alene, with the same access to recreation and amenities." },
              { title: 'Strategic Location', body: "Minutes from Coeur d'Alene Lake, downtown CdA, and major employment centers without the density." },
            ].map((card) => (
              <div key={card.title} style={{ backgroundColor: '#FAFAF8', border: '1px solid #E8DDD0', borderRadius: '4px', padding: '32px', boxShadow: '0 2px 12px rgba(28,26,23,0.06)' }}>
                <h3 className="mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '22px', color: '#1C1A17' }}>{card.title}</h3>
                <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px' }}>{card.body}</p>
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
              Hayden FAQ
            </h2>
          </div>
          <div itemScope itemType="https://schema.org/FAQPage" className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question" style={{ backgroundColor: '#F5EFE6', border: '1px solid #E8DDD0', borderRadius: '4px', padding: '28px 32px' }}>
                <h3 itemProp="name" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '20px', color: '#1C1A17', marginBottom: '12px' }}>{faq.q}</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding" style={{ backgroundColor: '#1C1A17' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>Shirin — Hayden Realtor</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15, color: '#F5EFE6' }}>
            Talk to Shirin About Hayden
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Buying or selling in Hayden? Let&apos;s talk about the current market and what&apos;s right for you.
          </p>
          <Link href="/contact" className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", backgroundColor: '#C4842A', padding: '14px 32px', letterSpacing: '0.08em' }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
