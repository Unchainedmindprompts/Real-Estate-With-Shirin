import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, PLACE } from '@/lib/schema-ids'

const PAGE_URL = `${BASE_URL}/areas/sandpoint-idaho`

export const metadata: Metadata = {
  title: 'Sandpoint Idaho Real Estate | Homes for Sale | Shirin Abplanalp',
  description:
    'Looking for homes in Sandpoint Idaho? Shirin Abplanalp is a licensed Sandpoint real estate agent with Berkshire Hathaway HomeServices Jacklin Real Estate. Expert buyer and seller representation.',
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/areas/sandpoint-idaho',
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Real Estate Services — Sandpoint, Idaho',
  serviceType: 'Real estate representation',
  provider: { '@id': BUSINESS_ID },
  areaServed: PLACE.sandpoint,
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Sandpoint, Idaho Real Estate & Living Guide',
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
    { '@type': 'ListItem', position: 3, name: 'Sandpoint, Idaho', item: PAGE_URL },
  ],
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/areas/sandpoint-idaho/#faq',
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/areas/sandpoint-idaho#webpage' },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the housing market like in Sandpoint Idaho in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "As of early 2026, the average home value in Sandpoint is approximately $617,000 — up about 1.8% year-over-year — with homes averaging around 62–85 days on market depending on price tier and location. Sandpoint is a lower-volume market by design: roughly 15–25 homes close per month, and monthly medians can swing significantly based on the mix of sales. The median list price is currently around $773,000, reflecting a meaningful gap between what sellers are asking and what is transacting — homes are averaging about 89–96% of asking price at close. Price per square foot runs around $499 in the active resale segment, among the highest in Northern Idaho. Inventory sits at around 148–155 homes for sale, with new listings running 23–25 per month. This is a market that moves slower and prices higher than Kootenai County — it rewards patient, well-prepared buyers.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best neighborhoods in Sandpoint Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sandpoint neighborhoods each carry a distinct character. Downtown Sandpoint and the area around City Beach offer walkable access to restaurants, the waterfront, and the Cedar Street Bridge — this is where you get the full Sandpoint small-town resort feel. South Sandpoint is one of the most desirable residential pockets — quiet streets, mature trees, close to the lake and schools. Ravenwood and Syringa Heights sit just west of downtown with easy access and a laid-back neighborhood character. Dover Bay, across the river, is a planned waterfront community with marina access and a more resort-oriented lifestyle. Ponderosa Park on the north side is newer development that attracts young families. Sand Creek is a tight-knit community near the fairgrounds with good-sized yards and a strong neighborhood feel. For buyers who want acreage and seclusion without losing proximity to town, Forest Knolls and the Sagle area to the south are worth a look.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much do homes cost in Sandpoint Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "As of early 2026, the average home value in Sandpoint is approximately $617,000, with a median list price around $773,000 and an average sale price in the active market running closer to $764,000. Entry-level homes — smaller in-town properties or condos — can start in the $420,000–$500,000 range, but that end of the market is limited in supply. The $550,000–$750,000 range covers most standard single-family resale. Above $750,000 you're in the premium tier — larger lots, lake proximity, mountain views, or custom builds. Lakefront and waterfront-access properties operate in their own category, often well above $1 million. Sandpoint consistently carries higher price-per-square-foot values than the Kootenai County markets, reflecting its resort character and the premium buyers place on the Lake Pend Oreille lifestyle.",
      },
    },
    {
      '@type': 'Question',
      name: "How does Sandpoint compare to Coeur d'Alene for home buyers?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sandpoint and Coeur d'Alene are both Northern Idaho lake towns, but they serve different buyers. CDA has a larger, more liquid market — more listings, more monthly closings, more new construction, and a more established suburban infrastructure. Sandpoint is smaller, quieter, and carries a stronger small-town resort identity built around Lake Pend Oreille, Schweitzer Mountain Resort, and a genuine arts and outdoor culture. On price, Sandpoint's average sale price (~$617,000–$764,000 active market) runs comparable to or above CDA's median of ~$601,000, but with significantly fewer options at any given time and longer days on market. The tradeoff is real: CDA gives you more inventory, faster transactions, and better access to Spokane. Sandpoint gives you a more remote, lifestyle-first environment — 45 minutes north of CDA on Highway 95 — that draws buyers who are specifically choosing to slow down.",
      },
    },
  ],
}

const faqs = [
  {
    q: 'What is the housing market like in Sandpoint Idaho in 2026?',
    a: "As of early 2026, the average home value in Sandpoint is approximately $617,000 — up about 1.8% year-over-year — with homes averaging around 62–85 days on market depending on price tier and location. Sandpoint is a lower-volume market by design: roughly 15–25 homes close per month, and monthly medians can swing significantly based on the mix of sales. The median list price is currently around $773,000, reflecting a meaningful gap between what sellers are asking and what is transacting — homes are averaging about 89–96% of asking price at close. Price per square foot runs around $499 in the active resale segment, among the highest in Northern Idaho. Inventory sits at around 148–155 homes for sale, with new listings running 23–25 per month. This is a market that moves slower and prices higher than Kootenai County — it rewards patient, well-prepared buyers.",
  },
  {
    q: 'What are the best neighborhoods in Sandpoint Idaho?',
    a: "Sandpoint neighborhoods each carry a distinct character. Downtown Sandpoint and the area around City Beach offer walkable access to restaurants, the waterfront, and the Cedar Street Bridge — this is where you get the full Sandpoint small-town resort feel. South Sandpoint is one of the most desirable residential pockets — quiet streets, mature trees, close to the lake and schools. Ravenwood and Syringa Heights sit just west of downtown with easy access and a laid-back neighborhood character. Dover Bay, across the river, is a planned waterfront community with marina access and a more resort-oriented lifestyle. Ponderosa Park on the north side is newer development that attracts young families. Sand Creek is a tight-knit community near the fairgrounds with good-sized yards and a strong neighborhood feel. For buyers who want acreage and seclusion without losing proximity to town, Forest Knolls and the Sagle area to the south are worth a look.",
  },
  {
    q: 'How much do homes cost in Sandpoint Idaho?',
    a: "As of early 2026, the average home value in Sandpoint is approximately $617,000, with a median list price around $773,000 and an average sale price in the active market running closer to $764,000. Entry-level homes — smaller in-town properties or condos — can start in the $420,000–$500,000 range, but that end of the market is limited in supply. The $550,000–$750,000 range covers most standard single-family resale. Above $750,000 you're in the premium tier — larger lots, lake proximity, mountain views, or custom builds. Lakefront and waterfront-access properties operate in their own category, often well above $1 million. Sandpoint consistently carries higher price-per-square-foot values than the Kootenai County markets, reflecting its resort character and the premium buyers place on the Lake Pend Oreille lifestyle.",
  },
  {
    q: "How does Sandpoint compare to Coeur d'Alene for home buyers?",
    a: "Sandpoint and Coeur d'Alene are both Northern Idaho lake towns, but they serve different buyers. CDA has a larger, more liquid market — more listings, more monthly closings, more new construction, and a more established suburban infrastructure. Sandpoint is smaller, quieter, and carries a stronger small-town resort identity built around Lake Pend Oreille, Schweitzer Mountain Resort, and a genuine arts and outdoor culture. On price, Sandpoint's average sale price (~$617,000–$764,000 active market) runs comparable to or above CDA's median of ~$601,000, but with significantly fewer options at any given time and longer days on market. The tradeoff is real: CDA gives you more inventory, faster transactions, and better access to Spokane. Sandpoint gives you a more remote, lifestyle-first environment — 45 minutes north of CDA on Highway 95 — that draws buyers who are specifically choosing to slow down.",
  },
]

export default function SandpointPage() {
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
            alt="Sandpoint Idaho"
            fill
            priority
            className="object-cover"
            
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>SANDPOINT, IDAHO</p>
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
            Sandpoint Idaho Real Estate
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#F5EFE6', maxWidth: '600px', margin: '0 auto' }}>
            Buyer and seller representation on the shores of Lake Pend Oreille.
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
            Sandpoint at a Glance
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            As of early 2026, the average home value in Sandpoint is approximately $617,000 — up about 1.8% year-over-year — with homes averaging around 62–85 days on market depending on price tier and location. Sandpoint is a lower-volume market by design: roughly 15–25 homes close per month, and monthly medians can swing significantly based on the mix of sales. The median list price is currently around $773,000, reflecting a meaningful gap between what sellers are asking and what is transacting — homes are averaging about 89–96% of asking price at close.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            Price per square foot runs around $499 in the active resale segment, among the highest in Northern Idaho. Inventory sits at around 148–155 homes for sale, with new listings running 23–25 per month. This is a market that moves slower and prices higher than Kootenai County — it rewards patient, well-prepared buyers.
          </p>
        </div>
      </section>

      {/* Why Sandpoint */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHY SANDPOINT</p>
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
              { title: 'Lake Pend Oreille', body: 'One of the deepest lakes in North America and the defining feature of Sandpoint\'s identity. Proximity to the water shapes both lifestyle and value here — from lakeside neighborhoods in South Sandpoint to Dover Bay\'s planned marina community across the river.' },
              { title: 'Downtown Sandpoint', body: 'Downtown and City Beach offer walkable access to restaurants, the waterfront, and the Cedar Street Bridge. South Sandpoint adds quiet streets and mature trees close to the lake and schools. This is the full small-town resort feel — genuine, not manufactured.' },
              { title: 'Outdoor Recreation', body: 'Schweitzer Mountain Resort sits 11 miles from downtown with over 2,900 acres of skiable terrain. Summer brings sailing, paddling, and fishing on Lake Pend Oreille, plus hiking and biking in the Selkirk Mountains. The outdoor access here is year-round and world-class.' },
              { title: 'Arts & Community', body: 'Sandpoint hosts a nationally recognized music festival, an active local arts scene, and a downtown built around independent businesses. It draws buyers who are choosing a slower, more intentional lifestyle — and the community reflects that.' },
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
              Sandpoint FAQ
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
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>Shirin — Sandpoint Realtor</p>
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
            Talk to Shirin About Sandpoint
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Buying or selling in Sandpoint? Let&apos;s talk about the current market and what&apos;s right for you.
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
