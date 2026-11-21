import { heroMetadata, lakeHouseCard } from '@/lib/hero-share'
import Image from 'next/image'
import Link from 'next/link'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, MARKET_AREA_SERVED } from '@/lib/schema-ids'
import SellersStrategyClient from '@/components/editorial/SellersStrategyClient'
import FaqAccordion from '@/components/editorial/FaqAccordion'

export const metadata = heroMetadata(
  '/sellers',
  'Selling Your North Idaho Home | Shirin Abplanalp, REALTOR®',
  "Selling a home in Post Falls, Coeur d'Alene, or anywhere in North Idaho? Strategic pricing, professional presentation, and an honest read on the market.",
  lakeHouseCard,
)

const SELLER_FAQS = [
  {
    q: 'How do I sell my home fast in Post Falls or Coeur d’Alene?',
    a: 'Selling smoothly comes down to three things: accurate pricing, strong presentation, and maximum market exposure. Overpriced homes sit. Homes priced correctly for current closed comps, professionally photographed, and marketed to the right local and relocating buyer pool move quickly.',
  },
  {
    q: 'What is my home worth in Northern Idaho?',
    a: 'Home values vary significantly by location, condition, lot size, and current inventory. The most accurate picture comes from a comparative market analysis built from recent closed sales in your specific neighborhood — an honest range, not an inflated number designed to win your listing.',
  },
  {
    q: 'How long does it take to sell a home in Coeur d’Alene or Post Falls?',
    a: 'Days on market varies by price point and neighborhood. Well-priced homes in desirable Post Falls and Coeur d’Alene neighborhoods can go under contract in as few as 12 days, while higher price tiers or homes needing updates typically take longer. I’ll give you realistic expectations based on current data.',
  },
  {
    q: 'What should I do to prepare my home for sale?',
    a: 'The basics matter most: clean, declutter, address obvious deferred maintenance, and make sure the exterior creates a strong first impression. I’ll walk through your home before we list and give you a prioritized list of what’s worth doing — and what isn’t.',
  },
  {
    q: 'How do I choose the right realtor to sell my home?',
    a: 'Look for genuine local market knowledge, honest communication, and a clear pricing and marketing plan in your price range. I encourage every homeowner to interview a few agents and ask how they price, market, and negotiate — I’m always happy to be one of those conversations.',
  },
]

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/sellers#service`,
  name: 'Seller Representation — Northern Idaho Real Estate',
  description:
    "Seller representation for home sales in Post Falls, Coeur d'Alene, Hayden, Rathdrum, Sandpoint, and the surrounding North Idaho market.",
  provider: { '@id': BUSINESS_ID },
  areaServed: MARKET_AREA_SERVED,
  serviceType: 'Real Estate Seller Representation',
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/sellers#webpage`,
  url: `${BASE_URL}/sellers`,
  name: 'Selling Your North Idaho Home | Shirin Abplanalp, REALTOR®',
  description:
    "Selling a home in Post Falls, Coeur d'Alene, or anywhere in North Idaho? Strategic pricing, professional presentation, and an honest read on the market.",
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': BUSINESS_ID },
  mainEntity: { '@id': `${BASE_URL}/sellers#service` },
  breadcrumb: { '@id': `${BASE_URL}/sellers#breadcrumb` },
  inLanguage: 'en-US',
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${BASE_URL}/sellers#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Sell', item: `${BASE_URL}/sellers` },
  ],
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BASE_URL}/sellers/#faq`,
  isPartOf: { '@id': `${BASE_URL}/sellers#webpage` },
  mainEntity: SELLER_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function SellersPage() {
  return (
    <div className="ed-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Dedicated Dusk Lakehouse Hero */}
      <section className="ed-photo-hero" aria-labelledby="sellers-title">
        <Image className="ed-photo-hero-img" src="/images/field-guide/lake-house-editorial-4k.webp" alt="Editorial twilight architecture of a North Idaho home" fill sizes="100vw" preload />
        <div className="ed-photo-hero-scrim" aria-hidden="true" />
        <div className="ed-container" style={{ position: 'relative', maxWidth: '760px', marginLeft: 'max(24px, calc((100% - 1340px) / 2))' }}>
          <p className="ed-eyebrow ed-eyebrow-light">Seller Representation</p>
          <h1 id="sellers-title">
            Before the sign <em>goes up.</em>
          </h1>
          <p className="ed-hero-lead" style={{ maxWidth: '600px' }}>
            Strategic pricing, honest advice, and elevated presentation — built to attract serious local and out-of-state buyers from listing day to closing day.
          </p>
          <div className="ed-photo-hero-actions">
            <a className="ed-btn-alabaster" href="#valuation">
              Request a Local Valuation <span aria-hidden="true">↓</span>
            </a>
            <a className="ed-link-light" href="#strategy">
              Explore the Strategy <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4-Step Editorial Seller Process */}
      <section style={{ padding: '96px 0', background: 'var(--alabaster)', borderBottom: '1px solid var(--hairline)' }} aria-labelledby="seller-process-title">
        <div className="ed-container">
          <div className="ed-section-header">
            <div>
              <p className="ed-eyebrow">What I Provide</p>
              <h2 id="seller-process-title">
                The seller <em>experience.</em>
              </h2>
            </div>
            <Link className="ed-link-underlined" href="/articles/selling-a-home-north-idaho-what-your-home-is-worth">
              Read: What Your Home Is Worth in 2026 <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="ed-process-grid">
            <article className="ed-process-step">
              <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '46px', lineHeight: 1, color: 'var(--bronze)', marginBottom: '22px' }}>01</span>
              <h3 style={{ fontSize: '26px', lineHeight: 1.2, color: 'var(--pine)' }}>Honest Market Analysis</h3>
              <p style={{ marginTop: '14px', fontSize: '14px', lineHeight: 1.75, color: 'var(--ink-muted)' }}>
                Accurate pricing based on real comparable sales — not an inflated number designed to win your listing.
              </p>
            </article>
            <article className="ed-process-step">
              <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '46px', lineHeight: 1, color: 'var(--bronze)', marginBottom: '22px' }}>02</span>
              <h3 style={{ fontSize: '26px', lineHeight: 1.2, color: 'var(--pine)' }}>Strategic Pricing</h3>
              <p style={{ marginTop: '14px', fontSize: '14px', lineHeight: 1.75, color: 'var(--ink-muted)' }}>
                The number that attracts serious buyers, creates urgency in week one, and maximizes your net return.
              </p>
            </article>
            <article className="ed-process-step">
              <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '46px', lineHeight: 1, color: 'var(--bronze)', marginBottom: '22px' }}>03</span>
              <h3 style={{ fontSize: '26px', lineHeight: 1.2, color: 'var(--pine)' }}>Professional Marketing</h3>
              <p style={{ marginTop: '14px', fontSize: '14px', lineHeight: 1.75, color: 'var(--ink-muted)' }}>
                Editorial photography, thoughtful presentation, and targeted exposure to the right buyer pool.
              </p>
            </article>
            <article className="ed-process-step">
              <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '46px', lineHeight: 1, color: 'var(--bronze)', marginBottom: '22px' }}>04</span>
              <h3 style={{ fontSize: '26px', lineHeight: 1.2, color: 'var(--pine)' }}>Negotiation &amp; Close</h3>
              <p style={{ marginTop: '14px', fontSize: '14px', lineHeight: 1.75, color: 'var(--ink-muted)' }}>
                Calm, focused advocacy for your interests from the first offer to the moment keys change hands.
              </p>
            </article>
          </div>
        </div>
      </section>

      <SellersStrategyClient />

      {/* Quiet Hairline Seller FAQs */}
      <section style={{ padding: '96px 0', background: 'var(--alabaster)' }} id="faq" aria-labelledby="seller-faq-title">
        <div className="ed-container ed-faq-layout">
          <div>
            <p className="ed-eyebrow">Common Questions</p>
            <h2 id="seller-faq-title" style={{ fontSize: 'clamp(34px, 3.4vw, 48px)', lineHeight: 1.1, marginTop: '14px', color: 'var(--pine)' }}>
              Seller questions, <em>answered honestly.</em>
            </h2>
            <p style={{ margin: '18px 0 28px', fontSize: '15px', lineHeight: 1.75, color: 'var(--ink-muted)' }}>
              Real talk on timing, preparation, and what actually sells homes well in Kootenai and Bonner County.
            </p>
            <Link className="ed-btn-outline-pine" href="/contact">
              Schedule a Walkthrough <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <FaqAccordion items={SELLER_FAQS} />
        </div>
      </section>

      {/* Sunset Closing Band */}
      <section className="ed-closing-band" aria-labelledby="sellers-closing-title">
        <Image className="ed-closing-photo" src="/images/field-guide/sunset-marina-clear-2048.webp" alt="Calm sunset reflection over Lake Coeur d'Alene" fill sizes="100vw" />
        <div className="ed-closing-scrim" aria-hidden="true" />
        <div className="ed-container">
          <div className="ed-closing-inner">
            <p className="ed-eyebrow ed-eyebrow-light">Ready to Sell</p>
            <h2 id="sellers-closing-title">
              Let’s start with an <em>honest conversation.</em>
            </h2>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.72, color: 'rgba(247,244,238,0.84)' }}>
              No pressure and no inflated promises — just a clear read on your home’s value and what it takes to sell well in today’s North Idaho market.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
              <Link className="ed-btn-alabaster" href="/contact">
                Start the Conversation <span aria-hidden="true">↗</span>
              </Link>
              <span className="ed-signature" aria-hidden="true">Shirin</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
