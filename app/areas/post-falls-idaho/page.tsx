import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, CITY_SAMEAS } from '@/lib/schema-ids'

const PAGE_URL = `${BASE_URL}/areas/post-falls-idaho`

export const metadata: Metadata = {
  title: 'Post Falls, Idaho Real Estate & Living Guide',
  description:
    "Thinking about Post Falls, Idaho? A local REALTOR's guide to neighborhoods, home prices, lifestyle, and what living in this fast-growing Kootenai city is like.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/areas/post-falls-idaho',
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Real Estate Services — Post Falls, Idaho',
  serviceType: 'Real estate representation',
  provider: { '@id': BUSINESS_ID },
  areaServed: {
    '@type': 'City',
    name: 'Post Falls',
    sameAs: CITY_SAMEAS.postFalls,
    containedInPlace: { '@type': 'State', name: 'Idaho' },
  },
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Post Falls, Idaho Real Estate & Living Guide',
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
    { '@type': 'ListItem', position: 3, name: 'Post Falls, Idaho', item: PAGE_URL },
  ],
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/areas/post-falls-idaho/#faq',
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/areas/post-falls-idaho#webpage' },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the housing market like in Post Falls Idaho in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of early 2026, the median sale price in Post Falls is approximately $521,000 — up 7.5% year-over-year — with homes averaging 59 days on market. The most active price range is $400,000–$499,000. Roughly 37% of sellers are offering concessions such as closing cost help or rate buy-downs, giving prepared buyers real negotiating room. Demand from out-of-state buyers remains consistent, particularly from California, Washington, and Oregon.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best neighborhoods in Post Falls Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post Falls neighborhoods vary by lifestyle and budget. The corridor along the Centennial Trail and Spokane River is popular with outdoor-focused buyers. Stoneridge and Prairie Falls are established family neighborhoods with good school access. The northwest quadrant near Highway 41 has seen significant new construction activity. The right neighborhood depends on commute patterns, school preferences, and how much space you want — that\'s the conversation worth having before you start browsing listings.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do homes cost in Post Falls Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of early 2026, the median sale price in Post Falls is approximately $521,000. Entry-level single-family homes in move-in condition typically start around $380,000–$420,000 for a 3-bedroom. The $450,000–$550,000 range gets you 3–4 bedrooms, 1,500–2,000 square feet, and newer construction options. Above $550,000 you\'re looking at larger homes, bigger lots, and premium finishes. Post Falls consistently delivers more square footage per dollar than Coeur d\'Alene at comparable price points.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Post Falls compare to Coeur d\'Alene for home buyers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post Falls offers a lower median price point than Coeur d\'Alene — roughly $521,000 versus $612,000 — while sitting just 10 minutes west along I-90. Buyers typically get more square footage and newer construction for the same budget. Post Falls also has only 1.4 months of housing supply, making it one of the tightest inventory markets in Northern Idaho. For buyers who want CDA-level lifestyle without CDA-level prices, Post Falls is the logical first look.',
      },
    },
  ],
}

const faqs = [
  {
    q: 'What is the housing market like in Post Falls Idaho in 2026?',
    a: 'As of early 2026, the median sale price in Post Falls is approximately $521,000 — up 7.5% year-over-year — with homes averaging 59 days on market. The most active price range is $400,000–$499,000. Roughly 37% of sellers are offering concessions such as closing cost help or rate buy-downs, giving prepared buyers real negotiating room. Demand from out-of-state buyers remains consistent, particularly from California, Washington, and Oregon.',
  },
  {
    q: 'What are the best neighborhoods in Post Falls Idaho?',
    a: "Post Falls neighborhoods vary by lifestyle and budget. The corridor along the Centennial Trail and Spokane River is popular with outdoor-focused buyers. Stoneridge and Prairie Falls are established family neighborhoods with good school access. The northwest quadrant near Highway 41 has seen significant new construction activity. The right neighborhood depends on commute patterns, school preferences, and how much space you want — that's the conversation worth having before you start browsing listings.",
  },
  {
    q: 'How much do homes cost in Post Falls Idaho?',
    a: "As of early 2026, the median sale price in Post Falls is approximately $521,000. Entry-level single-family homes in move-in condition typically start around $380,000–$420,000 for a 3-bedroom. The $450,000–$550,000 range gets you 3–4 bedrooms, 1,500–2,000 square feet, and newer construction options. Above $550,000 you're looking at larger homes, bigger lots, and premium finishes. Post Falls consistently delivers more square footage per dollar than Coeur d'Alene at comparable price points.",
  },
  {
    q: "How does Post Falls compare to Coeur d'Alene for home buyers?",
    a: "Post Falls offers a lower median price point than Coeur d'Alene — roughly $521,000 versus $612,000 — while sitting just 10 minutes west along I-90. Buyers typically get more square footage and newer construction for the same budget. Post Falls also has only 1.4 months of housing supply, making it one of the tightest inventory markets in Northern Idaho. For buyers who want CDA-level lifestyle without CDA-level prices, Post Falls is the logical first look.",
  },
]

export default function PostFallsPage() {
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
            alt="Post Falls, Idaho — Lake Coeur d'Alene area"
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
            The market has seen consistent demand from buyers relocating from California, Washington, and Oregon. As of early 2026, Post Falls has just 1.4 months of housing supply — one of the tightest inventory conditions in Northern Idaho. Well-priced homes move. Overpriced homes sit. Knowing the difference is where local expertise matters.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            For the budget-by-budget price breakdown, see <a href="/articles/how-much-do-homes-cost-post-falls-idaho" style={{ color: '#C4842A' }}>what homes actually cost in Post Falls</a>. For the broader market read — inventory, days on market, and where prices are heading — see the <a href="/articles/post-falls-idaho-housing-market-2026" style={{ color: '#C4842A' }}>2026 Post Falls housing market trends</a>.
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
              Post Falls FAQ
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
