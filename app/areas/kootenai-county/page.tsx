import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Kootenai County Idaho Real Estate | Shirin Abplanalp · eXp Realty',
  description:
    "Real estate across Kootenai County Idaho — Post Falls, Coeur d'Alene, Hayden, Rathdrum, and surrounding communities.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/areas/kootenai-county',
  },
}

const jsonLdAgent = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Shirin Abplanalp — Kootenai County Idaho Real Estate',
  url: 'https://www.realestatewithshirin.com/areas/kootenai-county',
  areaServed: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
  telephone: '(208) 660-7468',
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What communities are in Kootenai County Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Kootenai County includes Post Falls, Coeur d'Alene, Hayden, Rathdrum, Dalton Gardens, Spirit Lake, and several unincorporated communities. Each has its own character — from the lakefront energy of Coeur d'Alene to the quiet acreage communities north and east of the city. I work across the entire county and can help you understand the differences.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the real estate market like in Kootenai County in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Kootenai County's real estate market continues to see consistent demand, particularly from buyers relocating from higher-cost western states. The market is active across price points, with the strongest competition at the entry and mid-range levels. Rural and acreage properties vary more widely. For current market data in your specific area of interest, reach out directly.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Kootenai County a good place to live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Kootenai County consistently ranks among the most desirable places to live in the Pacific Northwest and Mountain West. It combines natural beauty — mountains, lakes, rivers, and forests — with a cost of living that's more accessible than coastal markets, a strong community character, and four distinct seasons. The outdoor recreation access is genuinely exceptional.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much do homes cost in Kootenai County Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Home prices in Kootenai County vary significantly by community and property type. Entry-level homes in Post Falls and surrounding areas can start in the $300,000s. Mid-range homes in established neighborhoods run $400,000–$700,000. Lakefront, acreage, and premium properties can run well above that. For a specific market analysis in your target area and price range, reach out for a consultation.",
      },
    },
  ],
}

const faqs = [
  {
    q: 'What communities are in Kootenai County Idaho?',
    a: "Kootenai County includes Post Falls, Coeur d'Alene, Hayden, Rathdrum, Dalton Gardens, Spirit Lake, and several unincorporated communities. Each has its own character — from the lakefront energy of Coeur d'Alene to the quiet acreage communities north and east of the city. I work across the entire county and can help you understand the differences.",
  },
  {
    q: 'What is the real estate market like in Kootenai County in 2026?',
    a: "Kootenai County's real estate market continues to see consistent demand, particularly from buyers relocating from higher-cost western states. The market is active across price points, with the strongest competition at the entry and mid-range levels. Rural and acreage properties vary more widely. For current market data in your specific area of interest, reach out directly.",
  },
  {
    q: 'Is Kootenai County a good place to live?',
    a: "Kootenai County consistently ranks among the most desirable places to live in the Pacific Northwest and Mountain West. It combines natural beauty — mountains, lakes, rivers, and forests — with a cost of living that's more accessible than coastal markets, a strong community character, and four distinct seasons. The outdoor recreation access is genuinely exceptional.",
  },
  {
    q: 'How much do homes cost in Kootenai County Idaho?',
    a: "Home prices in Kootenai County vary significantly by community and property type. Entry-level homes in Post Falls and surrounding areas can start in the $300,000s. Mid-range homes in established neighborhoods run $400,000–$700,000. Lakefront, acreage, and premium properties can run well above that. For a specific market analysis in your target area and price range, reach out for a consultation.",
  },
]

const communities = [
  { name: 'Post Falls', desc: "Idaho's fastest-growing city", href: '/areas/post-falls-idaho' },
  { name: "Coeur d'Alene", desc: 'The county seat and lake destination', href: '/areas/coeur-dalene-idaho' },
  { name: 'Hayden', desc: 'Family-friendly and quiet', href: '/areas/hayden-idaho' },
  { name: 'Rathdrum', desc: 'Rural character, growing community', href: '/areas/kootenai-county' },
]

export default function KootenaiCountyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAgent) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <Image src="/images/bluff-panorama.jpg" alt="Kootenai County Idaho" fill priority className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>KOOTENAI COUNTY, IDAHO</p>
          <h1 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: 1.1, color: '#FAFAF8' }}>
            Kootenai County Idaho Real Estate
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#F5EFE6', maxWidth: '600px', margin: '0 auto' }}>
            The full picture of Northern Idaho living — from Post Falls and Coeur d&apos;Alene to Hayden and beyond.
          </p>
        </div>
      </section>

      {/* County Overview */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">THE COUNTY</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, color: '#1C1A17' }}>
            Northern Idaho&apos;s Heart
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            Kootenai County is the population and economic center of Northern Idaho. It encompasses the urban energy of Coeur d&apos;Alene, the growth corridors of Post Falls, the family neighborhoods of Hayden, and the rural character of communities like Rathdrum and Spirit Lake. Within the county&apos;s boundaries you&apos;ll find mountains, lakes, rivers, and everything in between.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Shirin works across all of Kootenai County and can help you understand the nuances of each community — from lifestyle and schools to commute times and price points. No matter where you want to land in the county, she has the local knowledge to guide you well.
          </p>
        </div>
      </section>

      {/* Communities */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">COMMUNITIES</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.2, color: '#1C1A17' }}>
              Where I Work in Kootenai County
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="block transition-all"
                style={{ backgroundColor: '#FAFAF8', border: '1px solid #E8DDD0', borderRadius: '4px', padding: '32px', boxShadow: '0 2px 12px rgba(28,26,23,0.06)', textDecoration: 'none' }}
              >
                <h3 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '22px', color: '#1C1A17' }}>{c.name}</h3>
                <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '14px', marginBottom: '16px' }}>{c.desc}</p>
                <span style={{ color: '#C4842A', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Learn More →</span>
              </Link>
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
              Kootenai County FAQ
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
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>COUNTY EXPERT</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15, color: '#F5EFE6' }}>
            Find Your Place in Kootenai County
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Not sure which community fits? Let&apos;s talk about your lifestyle, budget, and priorities — I&apos;ll help you narrow it down.
          </p>
          <Link href="/contact" className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", backgroundColor: '#C4842A', padding: '14px 32px', letterSpacing: '0.08em' }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
