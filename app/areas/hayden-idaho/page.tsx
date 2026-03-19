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
      name: 'What is Hayden Idaho like to live in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Hayden is a quiet, established residential community just north of Coeur d'Alene. It has a distinctly family-friendly character — larger lots, good schools, lower density, and a pace of life that feels unhurried without being isolated. Residents get easy access to all of Coeur d'Alene's amenities while enjoying more space and privacy at home.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much do homes cost in Hayden Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Hayden is one of Northern Idaho\u2019s higher-priced markets, with a median list price around $599,900 and an average home value of approximately $627,000 as of early 2026. Entry-level resale homes typically start in the $450,000\u2013$500,000 range for a standard 3-bedroom. New construction and larger properties push well above $700,000, and the luxury segment ($750,000+) is active with a strong resale market averaging close to $787,000. Hayden commands a premium over Post Falls due to its residential character, larger lots, and proximity to Hayden Lake.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Hayden Idaho a good place to raise a family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Hayden is consistently cited as one of the best family communities in Northern Idaho. The Lakeland School District serves Hayden and is well-regarded. Neighborhoods are quiet with larger lots, low traffic, and a safe, community-oriented feel. Proximity to Coeur d'Alene Lake and recreational amenities makes it ideal for active families.",
      },
    },
    {
      '@type': 'Question',
      name: 'Who is a good realtor in Hayden Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Shirin Abplanalp is a licensed realtor at eXp Realty serving Hayden and the broader Kootenai County area. She specializes in buyer representation, seller representation, and relocation for families moving to the region. Idaho Real Estate License #1371861.",
      },
    },
  ],
}

const faqs = [
  {
    q: 'What is Hayden Idaho like to live in?',
    a: "Hayden is a quiet, established residential community just north of Coeur d'Alene. It has a distinctly family-friendly character — larger lots, good schools, lower density, and a pace of life that feels unhurried without being isolated. Residents get easy access to all of Coeur d'Alene's amenities while enjoying more space and privacy at home.",
  },
  {
    q: 'How much do homes cost in Hayden Idaho?',
    a: "Hayden is one of Northern Idaho\u2019s higher-priced markets, with a median list price around $599,900 and an average home value of approximately $627,000 as of early 2026. Entry-level resale homes typically start in the $450,000\u2013$500,000 range for a standard 3-bedroom. New construction and larger properties push well above $700,000, and the luxury segment ($750,000+) is active with a strong resale market averaging close to $787,000. Hayden commands a premium over Post Falls due to its residential character, larger lots, and proximity to Hayden Lake.",
  },
  {
    q: 'Is Hayden Idaho a good place to raise a family?',
    a: "Hayden is consistently cited as one of the best family communities in Northern Idaho. The Lakeland School District serves Hayden and is well-regarded. Neighborhoods are quiet with larger lots, low traffic, and a safe, community-oriented feel. Proximity to Coeur d'Alene Lake and recreational amenities makes it ideal for active families.",
  },
  {
    q: 'Who is a good realtor in Hayden Idaho?',
    a: 'Shirin Abplanalp is a licensed realtor at eXp Realty serving Hayden and the broader Kootenai County area. She specializes in buyer representation, seller representation, and relocation for families moving to the region. Idaho Real Estate License #1371861.',
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
          <Image src="/images/IMG_1620.jpeg" alt="Lake Coeur d'Alene seaplane dock" fill priority className="object-cover" />
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
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>HAYDEN ADVISOR</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15, color: '#F5EFE6' }}>
            Talk to a Hayden Advisor
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Buying or selling in Hayden? Let&apos;s start with a conversation about what this community offers and whether it&apos;s the right fit.
          </p>
          <Link href="/contact" className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", backgroundColor: '#C4842A', padding: '14px 32px', letterSpacing: '0.08em' }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
