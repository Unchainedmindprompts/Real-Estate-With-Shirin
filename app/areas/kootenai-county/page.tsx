import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, COUNTY_SAMEAS } from '@/lib/schema-ids'

const PAGE_URL = `${BASE_URL}/areas/kootenai-county`

export const metadata: Metadata = {
  title: 'Kootenai County, Idaho Real Estate & Market Guide',
  description:
    "Kootenai County holds Post Falls, Coeur d'Alene, Hayden, Rathdrum, and Dalton Gardens — the fastest-growing corner of North Idaho. A local REALTOR's county-scale market and tax guide.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/areas/kootenai-county',
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Real Estate Services — Kootenai County, Idaho',
  serviceType: 'Real estate representation',
  provider: { '@id': BUSINESS_ID },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Kootenai County',
    sameAs: COUNTY_SAMEAS.kootenai,
    containedInPlace: { '@type': 'State', name: 'Idaho' },
  },
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Kootenai County, Idaho Real Estate & Market Guide',
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
    { '@type': 'ListItem', position: 3, name: 'Kootenai County, Idaho', item: PAGE_URL },
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
      name: 'What cities are in Kootenai County, Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Kootenai County contains five primary incorporated cities: Coeur d'Alene (the county seat), Post Falls, Hayden, Rathdrum, and Spirit Lake. Dalton Gardens is a small city just north of Coeur d'Alene. The county also includes unincorporated communities such as Athol, Bayview on Lake Pend Oreille, Harrison, and Worley on the south end of Lake Coeur d'Alene. Together they hold the great majority of North Idaho's population and most of the region's active real estate market.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the median home price in Kootenai County in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Kootenai County average home value sits at approximately $579,000 as of May 2026 per Zillow, with the Coeur d'Alene median at roughly $617,000 and Post Falls at $521,000. Individual city medians move independently — Rathdrum around $515,000, Hayden around $553,000. Median rent across the county is about $2,262 per month. Kootenai County home values run roughly 60–70% above the U.S. typical home value of $357,000, but 30–35% below Seattle.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the property tax rate in Kootenai County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Kootenai County's effective property tax rate averages about 0.452% — dramatically below most West Coast jurisdictions. On a $600,000 Coeur d'Alene home the annual property tax runs approximately $2,150 after the Idaho Homeowner's Exemption, which removes up to $125,000 from taxable assessed value on a primary residence. That same $600,000 home in Seattle would pay $5,500–$7,000 in property tax annually. Rates and exemptions are administered by the Kootenai County Assessor.",
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the main hospital in Kootenai County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Kootenai Health at 2003 Kootenai Health Way in Coeur d'Alene is the county's regional medical center — a 330-bed hospital and the only American College of Surgeons-verified Level II Trauma Center in the entire Inland Northwest region of Idaho. It handles heart attacks, strokes, major trauma, cancer treatment, joint replacement, and complex surgery on-site. Northwest Specialty Hospital in Post Falls complements it for elective surgical care and outpatient imaging. Spokane's Providence Sacred Heart and MultiCare Deaconess are 30–45 minutes west for pediatric trauma, transplant, and academic subspecialty care.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Kootenai County growing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — Kootenai County has been one of the fastest-growing counties in the country for over a decade, driven primarily by relocation from California, Washington, and Oregon. Post Falls in particular has grown roughly 25% since the 2020 Census and now sits at approximately 49,000 residents, with the city engineer projecting Post Falls could reach 100,000 by 2045. Coeur d'Alene, Hayden, and Rathdrum have all seen sustained population growth as well. That growth is the primary force behind the tight housing supply and above-national appreciation the county has shown across cycles.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does Kootenai County compare to Bonner County for home buyers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Kootenai County is denser, more urbanized, and much more liquid as a real estate market — five active cities, Kootenai Health as the regional medical hub, direct access to Spokane infrastructure, and monthly closing volumes several times higher than Bonner County's. Bonner County to the north is quieter, more rural, and centered on Sandpoint and Lake Pend Oreille, with meaningfully more snow, higher wildfire-zone premiums in rural properties, and longer drives to full-service medical care. Buyers who want easier access, more inventory, and better commute options tend to land in Kootenai County. Buyers who want a slower pace, lake town character, and are willing to trade access for setting tend to consider Bonner.",
      },
    },
  ],
}

const faqs = jsonLdFaq.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text }))

export default function KootenaiCountyPage() {
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
            alt="Kootenai County, Idaho — Lake Coeur d'Alene area"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>KOOTENAI COUNTY, IDAHO</p>
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
            Kootenai County Real Estate
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#F5EFE6', maxWidth: '640px', margin: '0 auto' }}>
            The five-city population core of North Idaho — Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, and Dalton Gardens — under one county and one tax structure.
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
            Kootenai County at a Glance
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            Kootenai County is the population and economic center of North Idaho. Its five primary incorporated cities — Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, and Dalton Gardens — sit inside a shared property-tax structure, a shared school-district geography, and a shared regional medical infrastructure anchored by Kootenai Health in Coeur d&apos;Alene.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            The county average home value is approximately $579,000 as of May 2026 per Zillow — but that average hides real variation. Post Falls runs around $521,000, Coeur d&apos;Alene around $617,000, Hayden around $553,000, Rathdrum around $515,000. Which city a buyer lands in matters more than the county average suggests.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            What binds the market together is the county-scale tax picture: an effective property-tax rate of roughly 0.452%, plus Idaho&apos;s Homeowner&apos;s Exemption that removes up to $125,000 from the taxable assessed value of a primary residence. Together they put Kootenai County&apos;s property tax burden well below most West Coast alternatives. For the full breakdown, see the <a href="/articles/north-idaho-property-taxes-county-comparison" style={{ color: '#C4842A' }}>North Idaho property-tax comparison</a>.
          </p>
        </div>
      </section>

      {/* Cities inside the county */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">THE CITIES INSIDE</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              Where You Actually Live
            </h2>
            <p className="max-w-2xl mx-auto mt-4" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              Each city inside Kootenai County has its own character, price tier, and buyer profile. The county page is the county map — the city pages are where the actual choice happens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Coeur d'Alene",
                body: 'Lakefront town, walkable downtown, county seat. Median around $617K. The lifestyle premium tier.',
                href: '/areas/coeur-dalene-idaho',
              },
              {
                title: 'Post Falls',
                body: 'Ten miles west along the Spokane River. More home per dollar, more new construction, the fastest-growing city in the county. Median around $521K.',
                href: '/areas/post-falls-idaho',
              },
              {
                title: 'Hayden',
                body: 'Quiet residential character just north of CdA. Larger lots, Lakeland School District, family-focused. Median around $553K.',
                href: '/areas/hayden-idaho',
              },
              {
                title: 'Rathdrum',
                body: 'Small-town character 10 miles north of Post Falls. Twin Lakes Village, Foothills, the county\'s value entry point. Median around $515K.',
                href: '/areas/rathdrum-idaho',
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                style={{
                  backgroundColor: '#2A2722',
                  border: '1px solid #3A3530',
                  borderRadius: '4px',
                  padding: '32px',
                  textDecoration: 'none',
                  display: 'block',
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
                <p style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', marginBottom: '12px' }}>
                  {card.body}
                </p>
                <span style={{ color: '#C4842A', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  City guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why the county-scale view */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHY THE COUNTY VIEW MATTERS</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              The Shared Structure Under Five Different Cities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'One Tax Structure',
                body: "Property-tax rate around 0.452% and the Idaho Homeowner's Exemption ($125,000 off assessed value) apply the same across all five cities. That's a shared advantage a Seattle-Bellevue comparison can't match.",
              },
              {
                title: 'Kootenai Health',
                body: 'The 330-bed regional medical center in Coeur d\'Alene is the only ACS-verified Level II Trauma Center in the Inland Northwest. Everyone in the county lives within 20–30 minutes of it.',
              },
              {
                title: 'Growth Concentration',
                body: 'Post Falls is projected to reach 100,000 residents by 2045. Coeur d\'Alene, Hayden, and Rathdrum are all growing. The county is where the growth story of North Idaho actually happens.',
              },
              {
                title: 'Spokane Access',
                body: 'From anywhere in the county, Spokane International Airport is 25–45 minutes on I-90. Providence Sacred Heart and MultiCare are the same distance for care Kootenai Health does not offer — pediatric trauma, transplant, academic subspecialties.',
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
              Kootenai County FAQ
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
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>Shirin — Kootenai County Realtor</p>
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
            Not Sure Which City Fits?
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Talk to me about how you actually want to live and I&apos;ll help you figure out where inside Kootenai County that lands.
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
