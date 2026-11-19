import { heroMetadata, lakeHouseCard } from '@/lib/hero-share'
import Link from 'next/link'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, MARKET_AREA_SERVED } from '@/lib/schema-ids'
import BuyersFitClient from '@/components/editorial/BuyersFitClient'
import FaqAccordion from '@/components/editorial/FaqAccordion'

export const metadata = heroMetadata(
  '/buyers',
  'Buying a Home in North Idaho | Shirin Abplanalp, REALTOR®',
  "Buying a home in Post Falls, Coeur d'Alene, or anywhere in North Idaho? A local REALTOR's honest read on neighborhoods, prices, and what actually matters.",
  lakeHouseCard,
)

const BUYER_FAQS = [
  {
    q: "What does a buyer's agent do in Northern Idaho?",
    a: "A buyer's agent represents your interests throughout the home purchase process — from identifying properties that match your needs and lifestyle, to negotiating offers, managing inspections, and guiding you through closing. In Northern Idaho's competitive market, having an experienced local agent means deep neighborhood knowledge, honest guidance on pricing, and an advocate working exclusively for you.",
  },
  {
    q: "How much does it cost to use a buyer's agent in Idaho?",
    a: "In most transactions, the buyer's agent compensation is negotiated as part of the sale. Idaho follows transparent real estate commission practices. During our first conversation, I'll walk you through exactly how compensation works so there are zero surprises.",
  },
  {
    q: "What is the housing market like in Post Falls and Coeur d'Alene?",
    a: "Northern Idaho's real estate market is active and driven by both local growth and buyers relocating from higher-cost western markets. Inventory and negotiating leverage vary significantly by price point and town — Coeur d'Alene currently offers ~2.6 months of supply compared to ~1.4 in Post Falls. Schedule a quick conversation and I'll walk you through your exact target range.",
  },
  {
    q: 'What neighborhoods in Post Falls are best for families?',
    a: "Post Falls has several strong family-friendly pockets depending on your priorities. Areas near the Centennial Trail offer easy outdoor access, while neighborhoods near Prairie View and Summit Ridge are popular for proximity to schools and parks. I'll narrow down the exact pockets based on your commute, school preferences, and budget.",
  },
  {
    q: 'How do I start the process of buying a home in Northern Idaho?',
    a: "The first step is a simple conversation. Before pulling a single listing, I want to understand how you want to live — your lifestyle, priorities, timeline, and budget. From there, we'll map out what's realistic right now and which towns fit best.",
  },
]

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/buyers#service`,
  name: 'Buyer Representation — Northern Idaho Real Estate',
  description:
    "Buyer representation for home purchases in Post Falls, Coeur d'Alene, Hayden, Rathdrum, Sandpoint, and the surrounding North Idaho market.",
  provider: { '@id': BUSINESS_ID },
  areaServed: MARKET_AREA_SERVED,
  serviceType: 'Real Estate Buyer Representation',
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/buyers#webpage`,
  url: `${BASE_URL}/buyers`,
  name: 'Buying a Home in North Idaho | Shirin Abplanalp, REALTOR®',
  description:
    "Buying a home in Post Falls, Coeur d'Alene, or anywhere in North Idaho? A local REALTOR's honest read on neighborhoods, prices, and what actually matters.",
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': BUSINESS_ID },
  mainEntity: { '@id': `${BASE_URL}/buyers#service` },
  breadcrumb: { '@id': `${BASE_URL}/buyers#breadcrumb` },
  inLanguage: 'en-US',
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${BASE_URL}/buyers#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Buy', item: `${BASE_URL}/buyers` },
  ],
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BASE_URL}/buyers/#faq`,
  isPartOf: { '@id': `${BASE_URL}/buyers#webpage` },
  mainEntity: BUYER_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function BuyersPage() {
  return (
    <div className="ed-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Distinct Residential North Idaho Hero */}
      <section className="ed-photo-hero" aria-labelledby="buyers-title">
        <img className="ed-photo-hero-img" src="/images/field-guide/townhome-walk.webp" alt="Sunlit tree-lined residential neighborhood in North Idaho" loading="eager" />
        <div className="ed-photo-hero-scrim" aria-hidden="true" />
        <div className="ed-container" style={{ position: 'relative', maxWidth: '760px', marginLeft: 'max(24px, calc((100% - 1340px) / 2))' }}>
          <p className="ed-eyebrow ed-eyebrow-light">Buyer Representation</p>
          <h1 id="buyers-title">
            Find your place <em>in North Idaho.</em>
          </h1>
          <p className="ed-hero-lead" style={{ maxWidth: '600px' }}>
            From your first question to closing day — Shirin guides local and relocating buyers through the North Idaho market with deep neighborhood expertise and honest advice.
          </p>
          <div className="ed-photo-hero-actions">
            <Link className="ed-btn-alabaster" href="/contact">
              Start the Conversation <span aria-hidden="true">↗</span>
            </Link>
            <a className="ed-link-light" href="#fit-finder">
              Find Your Town Fit <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4-Step Editorial Process on Alabaster */}
      <section style={{ padding: '96px 0', background: 'var(--alabaster)', borderBottom: '1px solid var(--hairline)' }} aria-labelledby="process-title">
        <div className="ed-container">
          <div className="ed-section-header">
            <div>
              <p className="ed-eyebrow">The Process</p>
              <h2 id="process-title">
                What working together <em>looks like.</em>
              </h2>
            </div>
            <a className="ed-link-underlined" href="https://shirinabplanalp.jacklinrealestate.com" target="_blank" rel="noopener noreferrer">
              Search Live MLS Homes <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="ed-process-grid">
            <article className="ed-process-step">
              <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '46px', lineHeight: 1, color: 'var(--bronze)', marginBottom: '22px' }}>01</span>
              <h3 style={{ fontSize: '26px', lineHeight: 1.2, color: 'var(--pine)' }}>Buyers Consultation</h3>
              <p style={{ marginTop: '14px', fontSize: '14px', lineHeight: 1.75, color: 'var(--ink-muted)' }}>
                Understand your lifestyle, priorities, timeline, and budget before a single listing is pulled.
              </p>
            </article>
            <article className="ed-process-step">
              <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '46px', lineHeight: 1, color: 'var(--bronze)', marginBottom: '22px' }}>02</span>
              <h3 style={{ fontSize: '26px', lineHeight: 1.2, color: 'var(--pine)' }}>Market Education</h3>
              <p style={{ marginTop: '14px', fontSize: '14px', lineHeight: 1.75, color: 'var(--ink-muted)' }}>
                An honest picture of what’s available in your target areas and price range — no sugarcoating.
              </p>
            </article>
            <article className="ed-process-step">
              <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '46px', lineHeight: 1, color: 'var(--bronze)', marginBottom: '22px' }}>03</span>
              <h3 style={{ fontSize: '26px', lineHeight: 1.2, color: 'var(--pine)' }}>Curated Home Search</h3>
              <p style={{ marginTop: '14px', fontSize: '14px', lineHeight: 1.75, color: 'var(--ink-muted)' }}>
                Curated properties that match how you actually want to live, not just specs on a sheet.
              </p>
            </article>
            <article className="ed-process-step">
              <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '46px', lineHeight: 1, color: 'var(--bronze)', marginBottom: '22px' }}>04</span>
              <h3 style={{ fontSize: '26px', lineHeight: 1.2, color: 'var(--pine)' }}>Offer to Close</h3>
              <p style={{ marginTop: '14px', fontSize: '14px', lineHeight: 1.75, color: 'var(--ink-muted)' }}>
                Negotiation, inspections, wells/septic checks, and paperwork handled with care from offer to keys.
              </p>
            </article>
          </div>
        </div>
      </section>

      <BuyersFitClient />

      {/* Quiet Hairline Buyer FAQs */}
      <section style={{ padding: '96px 0', background: 'var(--alabaster)' }} id="faq" aria-labelledby="buyers-faq-title">
        <div className="ed-container ed-faq-layout">
          <div>
            <p className="ed-eyebrow">Common Questions</p>
            <h2 id="buyers-faq-title" style={{ fontSize: 'clamp(34px, 3.4vw, 48px)', lineHeight: 1.1, marginTop: '14px', color: 'var(--pine)' }}>
              Buyer questions, <em>answered clearly.</em>
            </h2>
            <p style={{ margin: '18px 0 28px', fontSize: '15px', lineHeight: 1.75, color: 'var(--ink-muted)' }}>
              Straightforward answers on representation, compensation, and how the North Idaho market really works.
            </p>
            <Link className="ed-btn-outline-pine" href="/articles">
              Browse All Buyer Guides <span aria-hidden="true">→</span>
            </Link>
          </div>
          <FaqAccordion items={BUYER_FAQS} />
        </div>
      </section>

      {/* Sunset Closing Band */}
      <section className="ed-closing-band" aria-labelledby="buyers-closing-title">
        <img className="ed-closing-photo" src="/images/field-guide/sunset-marina-clear-2048.webp" alt="Calm sunset reflection over Lake Coeur d'Alene" loading="lazy" />
        <div className="ed-closing-scrim" aria-hidden="true" />
        <div className="ed-container">
          <div className="ed-closing-inner">
            <p className="ed-eyebrow ed-eyebrow-light">Ready to Buy</p>
            <h2 id="buyers-closing-title">
              Let’s talk about <em>buying.</em>
            </h2>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.72, color: 'rgba(247,244,238,0.84)' }}>
              Whether you have early questions about the market or you’re ready to start touring — reach out. No pressure, no pitch, just honest local guidance.
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
