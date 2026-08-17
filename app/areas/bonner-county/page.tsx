import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, PLACE } from '@/lib/schema-ids'

const PAGE_URL = `${BASE_URL}/areas/bonner-county`

export const metadata: Metadata = {
  title: 'Bonner County, Idaho Real Estate & Rural Market Guide',
  description:
    "Bonner County is Sandpoint, Ponderay, Priest River, Priest Lake, and Schweitzer — quieter, more rural, and a different set of buying considerations than Kootenai County. A local REALTOR's honest guide.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/areas/bonner-county',
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Real Estate Services — Bonner County, Idaho',
  serviceType: 'Real estate representation',
  provider: { '@id': BUSINESS_ID },
  areaServed: PLACE.bonner,
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Bonner County, Idaho Real Estate & Rural Market Guide',
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
    { '@type': 'ListItem', position: 3, name: 'Bonner County, Idaho', item: PAGE_URL },
  ],
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  isPartOf: { '@id': `${PAGE_URL}#webpage` },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What towns and communities are in Bonner County, Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sandpoint is the county seat and largest city. The rest of Bonner County includes Ponderay (adjacent to Sandpoint), Kootenai (the town, not to be confused with the county), Dover, Hope and East Hope on the eastern shore of Lake Pend Oreille, Clark Fork at the far eastern edge, Sagle to the south, and Priest River and Oldtown to the west. The Priest Lake area — Nordman, Coolin, Lamb Creek — sits in the far northwest corner of the county and functions as a distinct market of its own.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Bonner County different from Kootenai County for home buyers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bonner is quieter, more rural, less densely populated, and much more centered on Lake Pend Oreille and the Selkirk Range than Kootenai County to the south. About 46,000 residents versus Kootenai's 175,000-plus. Fewer active listings, longer average days on market, and a much smaller share of new construction. Snowfall runs roughly double — Sandpoint averages 80–90 inches at lake level compared to about 40 inches on the Rathdrum Prairie. Full-service medical routes to Kootenai Health an hour south or Spokane 90 minutes west. Buyers who want the quieter, more remote character of the Idaho Panhandle land here. Buyers who want easier access, more inventory, and shorter drives usually stay in Kootenai County.",
      },
    },
    {
      '@type': 'Question',
      name: 'What does snowfall look like across Bonner County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sandpoint at lake level averages 80 to 90 inches of snow per year — roughly double the Rathdrum Prairie. Schweitzer Mountain Resort 11 miles from downtown averages around 300 inches at summit elevation. Ground cover in Sandpoint is typically continuous from mid-December through early March, often 70 to 90 consecutive days. This is a genuine snowbelt driven by lake-effect off Lake Pend Oreille and orographic lift against the Selkirks — well-documented by the National Weather Service Spokane Forecast Office. For any rural or semi-rural property in Bonner County, snow load, driveway plowing, and winter equipment are real budget lines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need special insurance for a home in Bonner County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Home insurance in Idaho is one of the cheapest in the country on average — around $1,673 per year statewide per MoneyGeek's 2026 analysis, roughly 52% below the national average. But Bankrate's 2026 report identifies Idaho as one of the highest-wildfire-risk states, and Bonner County contains extensive wildland-urban interface zones where premiums have risen faster than the state average. Some carriers now decline new policies in high-risk zones without defensible space documentation. The practical guidance: get an insurance quote before going under contract on any Bonner County property outside the incorporated towns, not after.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Priest Lake part of Bonner County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Priest Lake — a 23,000-acre lake surrounded by old-growth cedar forest and the Selkirk Range — sits in the far northwest corner of Bonner County. It is functionally its own market. Access is limited (the main road in from Priest River, Highway 57, runs about 30 miles), the lake is largely surrounded by Idaho Panhandle National Forest, and the market skews heavily toward waterfront, seasonal, and second homes. Priest Lake is very different from Sandpoint even though it shares a county — buyers considering either should treat them as separate markets and separate lifestyles.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is healthcare access like in Bonner County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bonner General Health in Sandpoint handles emergency and primary services but is a smaller community hospital. Complex or acute care typically routes through Kootenai Health in Coeur d'Alene (about an hour south on US-95) or to Spokane's Providence Sacred Heart and MultiCare (roughly 90 minutes). Life Flight Network operates a helicopter critical care transport service across the region, and an annual household membership (about $80 per year) covers out-of-pocket transport costs — worth considering for anyone living in rural Bonner County. For retirees with active health conditions requiring frequent specialist visits, the additional drive time compared to Kootenai County is a real factor.",
      },
    },
  ],
}

const faqs = jsonLdFaq.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text }))

export default function BonnerCountyPage() {
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
            alt="Bonner County, Idaho — Lake Pend Oreille and Selkirk Mountains"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>BONNER COUNTY, IDAHO</p>
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
            Bonner County Real Estate
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#F5EFE6', maxWidth: '640px', margin: '0 auto' }}>
            Lake Pend Oreille, Schweitzer, Priest Lake, and the Selkirks. Quieter, more rural, and a genuinely different set of buying considerations than Kootenai County to the south.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">THE COUNTY MARKET</p>
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
            What Bonner County Actually Is
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            Bonner County is the second county Shirin serves — north of Kootenai, running from the west shore of Lake Pend Oreille up through Sandpoint and out to Priest Lake and the Washington border. About 46,000 residents in an area larger than several New England states. That density difference is the first thing to understand: this is not Kootenai County with more trees.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            Sandpoint is the county seat and the market&apos;s center of gravity — the average home value sits around $617,000 and the median list price around $773,000. But Sandpoint is only part of Bonner County. Ponderay, Kootenai (the town), Dover, Sagle, Hope, and Clark Fork sit around the lake at lower price points. Priest River and Oldtown to the west run lower still. The Priest Lake area in the far northwest is functionally its own market — waterfront and seasonal properties on a lake most of the country has never heard of.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            For the Sandpoint town-level detail, see <a href="/areas/sandpoint-idaho" style={{ color: '#C4842A' }}>the Sandpoint area guide</a>. What this page covers is what happens when you zoom out — snow patterns, wildfire insurance, medical geography, and the character of the county outside the incorporated towns.
          </p>
        </div>
      </section>

      {/* The county-specific realities */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHAT BONNER COUNTY ASKS OF YOU</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              The Four Realities That Change the Buying Math
            </h2>
            <p className="max-w-2xl mx-auto mt-4" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              These do not exist at this scale in Kootenai County. Any buyer looking north of the lake needs to understand them before offer, not after close.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'The Snowbelt',
                body: 'Sandpoint averages 80–90 inches of snow at lake level — roughly double the Rathdrum Prairie. Schweitzer summit averages around 300 inches. Ground cover is typically continuous from mid-December through early March. For any rural property, snow removal equipment and driveway logistics are budget lines, not afterthoughts.',
              },
              {
                title: 'Wildfire Insurance',
                body: 'Idaho home insurance is one of the cheapest in the country statewide (~$1,673/year average), but Bankrate identifies Idaho as one of the highest wildfire-risk states, and Bonner County contains extensive wildland-urban interface zones. Some carriers decline new policies in high-risk areas without defensible space documentation. Get a quote before contract.',
              },
              {
                title: 'Medical Distance',
                body: 'Bonner General Health handles emergency and primary care but is a smaller community hospital. Complex care routes to Kootenai Health (1 hour south) or Spokane (~90 minutes). For anyone with active health conditions, the drive time is a real factor. Life Flight Network membership becomes meaningfully more valuable the further north you live.',
              },
              {
                title: 'Priest Lake',
                body: 'A 23,000-acre lake in the far northwest corner, surrounded by old-growth cedar and Idaho Panhandle National Forest. Access via Highway 57 out of Priest River. The market skews waterfront, seasonal, and second-home. Priest Lake is a distinct market from Sandpoint even though they share a county line.',
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

      {/* Sub-markets inside the county */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">THE SUB-MARKETS</p>
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
            Where People Actually Land Inside the County
          </h2>
          <div className="mt-6 space-y-6">
            {[
              {
                head: 'Sandpoint and Ponderay',
                body: (
                  <>The core market. Walkable downtown, City Beach, Cedar Street Bridge; Ponderay just north with big-box retail and newer construction. Neighborhood-level detail is in <a href="/areas/sandpoint-idaho" style={{ color: '#C4842A' }}>the Sandpoint area guide</a>.</>
                ),
              },
              {
                head: 'Sagle, Dover, Kootenai (the town)',
                body: <>Small residential communities immediately around Lake Pend Oreille. Sagle to the south has larger parcels and more rural feel; Dover Bay is a planned waterfront community with marina access; Kootenai sits between Ponderay and Hope on the eastern edge of Sandpoint.</>,
              },
              {
                head: 'Hope, East Hope, Clark Fork',
                body: <>The eastern shore of Lake Pend Oreille running out toward Montana. Quieter, more remote, some of the county&apos;s most striking waterfront and mountain-view property. Buyers here are actively choosing distance from town.</>,
              },
              {
                head: 'Priest River and Oldtown',
                body: <>West side of the county along the Priest River corridor toward the Washington border. More affordable, more rural, generally larger parcels. A common landing spot for buyers who want Bonner County acreage without Sandpoint prices.</>,
              },
              {
                head: 'Priest Lake (Nordman, Coolin, Lamb Creek)',
                body: <>Far northwest corner. Effectively its own market — waterfront-driven, seasonal, and heavily oriented toward second homes and cabins. Winter access is real but manageable; carrier availability for wildfire zones warrants extra scrutiny.</>,
              },
            ].map((row) => (
              <div key={row.head} style={{ borderLeft: '2px solid #C4842A', paddingLeft: '20px' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '20px', color: '#1C1A17', marginBottom: '6px' }}>
                  {row.head}
                </p>
                <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', lineHeight: 1.7 }}>
                  {row.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              Bonner County FAQ
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
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>Shirin — Bonner County Realtor</p>
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
            Considering Bonner County?
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            The snow, the insurance, the medical distance, and the Priest Lake question all deserve honest answers before you make an offer. Let&apos;s talk through them.
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
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
