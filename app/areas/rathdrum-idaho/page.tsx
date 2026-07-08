import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, CITY_SAMEAS } from '@/lib/schema-ids'

const PAGE_URL = `${BASE_URL}/areas/rathdrum-idaho`

export const metadata: Metadata = {
  title: 'Rathdrum Idaho Real Estate | Homes for Sale | Shirin Abplanalp',
  description:
    'Looking for homes in Rathdrum Idaho? Shirin Abplanalp is a licensed Rathdrum real estate agent with Berkshire Hathaway HomeServices Jacklin Real Estate. Expert buyer and seller representation.',
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/areas/rathdrum-idaho',
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Real Estate Services — Rathdrum, Idaho',
  serviceType: 'Real estate representation',
  provider: { '@id': BUSINESS_ID },
  areaServed: {
    '@type': 'City',
    name: 'Rathdrum',
    sameAs: CITY_SAMEAS.rathdrum,
    containedInPlace: { '@type': 'State', name: 'Idaho' },
  },
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Rathdrum, Idaho Real Estate & Living Guide',
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
    { '@type': 'ListItem', position: 3, name: 'Rathdrum, Idaho', item: PAGE_URL },
  ],
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/areas/rathdrum-idaho/#faq',
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/areas/rathdrum-idaho#webpage' },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the housing market like in Rathdrum Idaho in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "As of early 2026, the median sale price in Rathdrum is approximately $515,000 — up 4.3% year-over-year — with homes averaging around 42 days on market. Hot homes go pending in as few as 10 days. Pending sales surged 82.9% year-over-year in February, the largest buyer demand increase of any city in Northern Idaho, making it one of the most closely watched markets in the region right now. Price per square foot is $316–$327, holding steady as one of the higher per-foot values in the area. Inventory is contracting, and months of supply data puts Rathdrum in undersupplied territory heading into the spring buying season. Demand is being driven by buyers priced out of Coeur d'Alene and Hayden who still want the Northern Idaho lifestyle at a more approachable entry point.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best neighborhoods in Rathdrum Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Rathdrum has a range of distinct neighborhoods suited to different buyers. Twin Lakes Village is a standout — a waterfront golf community built around two lakes with a private clubhouse, dock access, and a mix of condos and single-family homes. The Foothills area offers newer construction and elevated views. Brookshire is a centrally located, family-oriented neighborhood with more affordable price points and active new development. Downtown Rathdrum has a historic small-town character that's growing — local shops, community events, and the kind of walkable main street feel that's increasingly rare. Orchard Prairie runs slightly higher in value with larger parcels and a rural-residential feel. The right neighborhood depends on whether you want a community with amenities, room to spread out, or an entry-level foothold in the market.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much do homes cost in Rathdrum Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of early 2026, the median sale price in Rathdrum is approximately $515,000, with an average home value around $565,000. Entry-level homes in move-in condition typically start in the $420,000–$470,000 range for a standard 3-bedroom. The $490,000–$600,000 range covers most resale inventory — 3–4 bedrooms, established neighborhoods, good lot sizes. Above $600,000 you\'re looking at newer construction, lakefront access, or premium finishes in communities like Twin Lakes Village. Rathdrum\'s price per square foot runs $316–$327, which is competitive with the rest of Northern Idaho given the space and small-town character you\'re getting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Rathdrum compare to Post Falls for home buyers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Rathdrum and Post Falls are two of the most affordable entry points in Northern Idaho, and they're only about 15 minutes apart. Post Falls has a lower median sale price — around $521,000 — and significantly more new construction activity, more apartment and rental inventory, and a more suburban feel with commercial corridors along Prairie and Highway 41. Rathdrum's median is similar at around $515,000, but the character is decidedly more small-town: tighter community feel, less density, higher median household income (~$86,000 vs. ~$73,000 in Post Falls), and a buyer pool that's increasingly active — pending sales in Rathdrum jumped 82.9% year-over-year in February. For buyers choosing between the two, it often comes down to one question: do you want the bigger suburban infrastructure of Post Falls, or the quieter, more rooted feel of Rathdrum?",
      },
    },
  ],
}

const faqs = [
  {
    q: 'What is the housing market like in Rathdrum Idaho in 2026?',
    a: "As of early 2026, the median sale price in Rathdrum is approximately $515,000 — up 4.3% year-over-year — with homes averaging around 42 days on market. Hot homes go pending in as few as 10 days. Pending sales surged 82.9% year-over-year in February, the largest buyer demand increase of any city in Northern Idaho, making it one of the most closely watched markets in the region right now. Price per square foot is $316–$327, holding steady as one of the higher per-foot values in the area. Inventory is contracting, and months of supply data puts Rathdrum in undersupplied territory heading into the spring buying season. Demand is being driven by buyers priced out of Coeur d\u2019Alene and Hayden who still want the Northern Idaho lifestyle at a more approachable entry point.",
  },
  {
    q: 'What are the best neighborhoods in Rathdrum Idaho?',
    a: "Rathdrum has a range of distinct neighborhoods suited to different buyers. Twin Lakes Village is a standout — a waterfront golf community built around two lakes with a private clubhouse, dock access, and a mix of condos and single-family homes. The Foothills area offers newer construction and elevated views. Brookshire is a centrally located, family-oriented neighborhood with more affordable price points and active new development. Downtown Rathdrum has a historic small-town character that\u2019s growing — local shops, community events, and the kind of walkable main street feel that\u2019s increasingly rare. Orchard Prairie runs slightly higher in value with larger parcels and a rural-residential feel. The right neighborhood depends on whether you want a community with amenities, room to spread out, or an entry-level foothold in the market.",
  },
  {
    q: 'How much do homes cost in Rathdrum Idaho?',
    a: "As of early 2026, the median sale price in Rathdrum is approximately $515,000, with an average home value around $565,000. Entry-level homes in move-in condition typically start in the $420,000\u2013$470,000 range for a standard 3-bedroom. The $490,000\u2013$600,000 range covers most resale inventory — 3\u20134 bedrooms, established neighborhoods, good lot sizes. Above $600,000 you\u2019re looking at newer construction, lakefront access, or premium finishes in communities like Twin Lakes Village. Rathdrum\u2019s price per square foot runs $316\u2013$327, which is competitive with the rest of Northern Idaho given the space and small-town character you\u2019re getting.",
  },
  {
    q: 'How does Rathdrum compare to Post Falls for home buyers?',
    a: "Rathdrum and Post Falls are two of the most affordable entry points in Northern Idaho, and they\u2019re only about 15 minutes apart. Post Falls has a lower median sale price — around $521,000 — and significantly more new construction activity, more apartment and rental inventory, and a more suburban feel with commercial corridors along Prairie and Highway 41. Rathdrum\u2019s median is similar at around $515,000, but the character is decidedly more small-town: tighter community feel, less density, higher median household income (~$86,000 vs. ~$73,000 in Post Falls), and a buyer pool that\u2019s increasingly active — pending sales in Rathdrum jumped 82.9% year-over-year in February. For buyers choosing between the two, it often comes down to one question: do you want the bigger suburban infrastructure of Post Falls, or the quieter, more rooted feel of Rathdrum?",
  },
]

export default function RathdrumPage() {
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
            Rathdrum sits just 10 miles north of Post Falls and roughly 20 miles from Coeur d&apos;Alene — close enough to access everything Northern Idaho offers, far enough to feel like you&apos;ve actually gotten away. It&apos;s a small town in the best sense: a genuine downtown, tight community roots, and more space per dollar than anywhere else in the corridor.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            As of early 2026, the median sale price is approximately $515,000 — up 4.3% year-over-year — with homes averaging 42 days on market. Pending sales surged 82.9% year-over-year in February, the largest demand increase of any city in Northern Idaho. Inventory is contracting heading into spring, and buyer demand is being driven heavily by people priced out of Coeur d&apos;Alene and Hayden who still want the Northern Idaho lifestyle at a more approachable entry point.
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
              { title: 'Affordability', body: 'With a median sale price around $515,000, Rathdrum offers one of the lowest entry points in Northern Idaho. Buyers get more home — and more land — for the same budget compared to Coeur d\'Alene or Hayden.' },
              { title: 'Space & Privacy', body: 'Rathdrum lots tend to run larger than what you\'ll find closer to the lake. Bigger yards, more elbow room between neighbors, and a quieter residential feel that\'s harder to come by as the corridor fills in.' },
              { title: 'Location', body: 'Ten miles north of Post Falls, 20 miles from Coeur d\'Alene, and under an hour to Spokane. Close enough to commute, far enough to decompress. Highway 41 and US-53 make the connection easy.' },
              { title: 'Growth', body: 'Pending sales in Rathdrum jumped 82.9% year-over-year in February 2026 — the highest demand increase in Northern Idaho. Buyers are finding it now, before prices fully catch up to the rest of the corridor.' },
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
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '22px',
                    color: '#C4842A',
                  }}
                >
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

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#2A2722',
                  border: '1px solid #3A3530',
                  borderRadius: '4px',
                  padding: '28px 32px',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '20px',
                    color: '#C4842A',
                    marginBottom: '12px',
                  }}
                >
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
