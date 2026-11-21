import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, PLACE } from '@/lib/schema-ids'
import { IDX_SEARCH_BY_AREA } from '@/lib/idx-search'
import CdaInteractiveClient from '@/components/editorial/CdaInteractiveClient'
import FaqAccordion from '@/components/editorial/FaqAccordion'

const PAGE_URL = `${BASE_URL}/areas/coeur-dalene-idaho`

export const metadata: Metadata = {
  title: "Coeur d'Alene Real Estate: Prices, Neighborhoods & Lakefront",
  description:
    "The median Coeur d'Alene home runs $601,000. What each budget buys, every neighborhood from Fort Grounds to Blackwell Hill, and how lakefront really prices.",
  alternates: {
    canonical: PAGE_URL,
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: "Real Estate Services — Coeur d'Alene, Idaho",
  serviceType: 'Real estate representation',
  provider: { '@id': BUSINESS_ID },
  areaServed: PLACE.coeurDalene,
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Coeur d'Alene Real Estate: Prices, Neighborhoods & Lakefront",
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
    { '@type': 'ListItem', position: 3, name: "Coeur d'Alene, Idaho", item: PAGE_URL },
  ],
}

const NEIGHBORHOODS = [
  {
    n: 'Downtown CdA & Fort Grounds',
    tag: 'Walkable · Historic',
    img: '/images/river-and-rye-dining-4k.webp',
    alt: "Downtown Coeur d'Alene dining and walkable charm",
    d: 'Walkable access to Sherman Avenue, the lake, and the restaurant core. Among the most established and price-stable pockets in the city — you pay for the walkability and it holds.',
  },
  {
    n: 'Sanders Beach',
    tag: 'East Shore · Waterfront',
    img: '/images/lake-life.jpeg',
    alt: "Lake Coeur d'Alene waterfront lifestyle near Sanders Beach",
    d: 'Waterfront lifestyle on the eastern shore, with premium pricing to match. This is lake-adjacent living in its most literal form and it prices against waterfront demand, not city comps.',
  },
  {
    n: 'Midtown CdA',
    tag: 'Arts-Forward · Value',
    img: '/images/rivaura-cda-tasting-room-4k.webp',
    alt: 'Local tasting rooms and neighborhood character in Midtown CdA',
    d: 'More affordable, eclectic, and arts-forward. Attracts younger buyers and anyone who wants proximity to downtown and local restaurants without the downtown price premium.',
  },
  {
    n: 'Riverstone',
    tag: 'Spokane River · Newer',
    img: '/images/field-guide/townhome-walk.webp',
    alt: 'Walkable newer residences in Riverstone along the Spokane River',
    d: 'Master-planned along the Spokane River. Popular with young professionals and families who want newer construction, walkable amenities, trails, and less exterior maintenance.',
  },
  {
    n: 'Dalton Gardens',
    tag: 'Larger Lots · Quiet',
    img: '/images/golf-4k.webp',
    alt: 'Open green space and larger residential lots near Dalton Gardens',
    d: "Just north of town, with larger lots and a more rural feel while staying minutes from CdA amenities. A common landing spot for buyers who want space without leaving the city's orbit.",
  },
  {
    n: 'Blackwell Hill',
    tag: 'Panoramic Views · South',
    img: '/images/field-guide/lake-house-editorial-4k.webp',
    alt: 'Elevated lake and mountain views from Blackwell Hill',
    d: 'South of downtown, commanding some of the best lake and mountain views in the area. The view premium is real here, and it shows up clearly in the comps.',
  },
]

const FAQS = [
  {
    q: 'How does lakefront actually price in Coeur d’Alene?',
    a: 'Lakefront prices in its own market and does not track the city median in any useful way. Separate three tiers early: true Lake Coeur d’Alene frontage with private shoreline (the scarcest and most expensive); deeded or shared lake access without private frontage (carries a meaningful premium over inland homes at a fraction of true frontage); and view property like Blackwell Hill, where you pay for the sightline rather than water access.',
  },
  {
    q: 'Is Coeur d’Alene a good place to live?',
    a: 'For buyers who want a walkable lake town with a real downtown, it is genuinely hard to beat in the Inland Northwest. Sherman Avenue, the waterfront, dining, and Tubbs Hill are all reachable on foot from the right neighborhoods, and Spokane International Airport is 35–45 minutes west. The honest tradeoffs: you pay roughly $80,000–$100,000 more than Post Falls for comparable size, summer brings tourist traffic downtown, and buyers wanting acreage or maximum square footage per dollar often prefer Hayden, Rathdrum, or Post Falls.',
  },
  {
    q: 'How does Coeur d’Alene compare to Post Falls for home buyers?',
    a: 'Coeur d’Alene carries a higher median price than Post Falls — roughly $601,000 versus $521,000 — in exchange for lake proximity, a walkable downtown, and Sherman Avenue. CdA also has 2.6 months of housing supply compared to Post Falls’s 1.4 months, which means slightly more choice and negotiating leverage. For newer construction and value per square foot, Post Falls sits just 10 minutes west on I-90.',
  },
  {
    q: 'How does Coeur d’Alene compare to Hayden?',
    a: 'Hayden’s median runs about $553,000 against CdA’s $601,000, and the trade is space for walkability. Hayden delivers larger lots, quieter streets, and a strong school district; CdA delivers a downtown you can walk to and direct lake proximity. Because they sit 10–15 minutes apart, many buyers tour both before deciding which lifestyle tradeoff fits best.',
  },
  {
    q: 'How far is Coeur d’Alene from Spokane?',
    a: 'Coeur d’Alene sits roughly 33 miles east of Spokane on I-90 — about 33 minutes off-peak and closer to 40 during the morning commute. Spokane International Airport (GEG) is generally 35–45 minutes door to door depending on where in CdA you start.',
  },
  {
    q: 'Is Coeur d’Alene safe?',
    a: 'Coeur d’Alene and the surrounding Kootenai County communities consistently show lower crime rates than Spokane across the border. Safety still varies street by street the way it does anywhere, so if it’s a top priority, mention it early — it’s a reasonable filter to build a search around.',
  },
  {
    q: 'What are property taxes like in Coeur d’Alene?',
    a: 'Kootenai County’s effective property tax rate averages about 0.452% — dramatically below most West Coast metros. On a $601,000 CdA home that works out to roughly $2,150 per year after Idaho’s Homeowner’s Exemption, which removes up to $125,000 from the taxable assessed value of a primary residence. Remember to file with the Kootenai County Assessor after closing, as the exemption does not transfer automatically.',
  },
]

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  isPartOf: { '@id': `${PAGE_URL}#webpage` },
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function CoeurDaleneAreaPage() {
  const idxUrl = IDX_SEARCH_BY_AREA['coeur-dalene-idaho'] || 'https://shirinabplanalp.jacklinrealestate.com'

  return (
    <div className="ed-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Full-Bleed Lake Coeur d'Alene Hero */}
      <section className="ed-photo-hero is-tall" aria-labelledby="cda-title">
        <Image className="ed-photo-hero-img" src="/images/community-atlas/coeur-dalene-idaho.webp" alt="Coeur d'Alene, Idaho" fill sizes="100vw" preload />
        <div className="ed-photo-hero-scrim" aria-hidden="true" />
        <div className="ed-container ed-photo-hero-inner">
          <div style={{ maxWidth: '760px' }}>
            <p className="ed-eyebrow ed-eyebrow-light">Coeur d’Alene, Idaho · Community Field Guide</p>
            <h1 id="cda-title">
              Coeur d’Alene <em>Real Estate.</em>
            </h1>
            <p className="ed-hero-lead" style={{ maxWidth: '640px', color: 'rgba(247,244,238,0.88)' }}>
              Median home: $601,000. What each budget buys, every neighborhood from Fort Grounds to Blackwell Hill, and the thing most buyers misunderstand about how lakefront actually prices.
            </p>
            <div className="ed-photo-hero-actions">
              <a className="ed-btn-alabaster" href={idxUrl} target="_blank" rel="noopener noreferrer">
                Search CdA Homes <span aria-hidden="true">↗</span>
              </a>
              <a className="ed-link-light" href="#neighborhoods">
                Explore Neighborhoods <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <dl className="ed-stat-bar" aria-label="Coeur d'Alene market snapshot">
            <div className="ed-stat-cell">
              <dt>Median Sale Price</dt>
              <dd>$601K</dd>
              <span className="ed-stat-sub">↑ 4.6% YoY</span>
            </div>
            <div className="ed-stat-cell">
              <dt>Price Per Sq Ft</dt>
              <dd>$288</dd>
              <span className="ed-stat-sub">Early 2026</span>
            </div>
            <div className="ed-stat-cell">
              <dt>Months of Supply</dt>
              <dd>2.6 mo</dd>
              <span className="ed-stat-sub">Showings ↑ 46.2%</span>
            </div>
            <div className="ed-stat-cell">
              <dt>Sell Under List</dt>
              <dd>~70%</dd>
              <span className="ed-stat-sub">97–98% sale-to-list</span>
            </div>
          </dl>
        </div>
      </section>

      {/* Market Right Now + Local Advisor Card */}
      <section className="ed-market-section" aria-labelledby="market-title">
        <div className="ed-container ed-market-grid">
          <div className="ed-market-prose">
            <p className="ed-eyebrow">The Market</p>
            <h2 id="market-title">
              The Coeur d’Alene market <em>right now.</em>
            </h2>
            <p>
              The median sale price in Coeur d’Alene is approximately <strong>$601,000</strong>, up 4.6% year-over-year, with price per square foot around <strong>$288</strong>. Homes average about 49 days on market, though correctly priced ones move in as few as 12.
            </p>
            <p>
              Two numbers tell buyers most of what they need. Showings per listing are up <strong>46.2% year-over-year</strong> — demand is strengthening. But nearly <strong>70% of homes are closing under list price</strong>, at a sale-to-list ratio of 97–98%. Together those say a market with real buyer interest that still leaves negotiating room for anyone who comes in prepared.
            </p>
            <p>
              At <strong>2.6 months of supply</strong>, CdA also has more inventory than Post Falls (1.4) or Hayden (2.1), which is the closest thing to buyer leverage in this county. Demand is driven heavily by out-of-state buyers from California, Washington, and Oregon.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '28px' }}>
              <Link className="ed-link-underlined" href="/areas/kootenai-county">
                Kootenai County Guide <span aria-hidden="true">→</span>
              </Link>
              <Link className="ed-link-underlined" href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint">
                5-City Comparison <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <aside className="ed-advisor-card" aria-label="Local facts and advisor note">
            <div className="ed-advisor-top">
              <Image src="/images/shirin-portrait-2026.png" alt="Shirin Abplanalp" width={68} height={68} sizes="68px" />
              <div>
                <p style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze-light)' }}>Local Perspective</p>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '24px', color: '#FAF7F1', lineHeight: 1.15, marginTop: '2px' }}>Shirin Abplanalp</p>
                <p style={{ fontSize: '12px', color: 'rgba(247,244,238,0.68)', marginTop: '2px' }}>Coeur d’Alene REALTOR®</p>
              </div>
            </div>
            <blockquote className="ed-advisor-quote">
              “Tell me your budget and whether the lake is a must-have — that one answer changes the entire search.”
            </blockquote>
            <dl className="ed-advisor-facts">
              <div><dt>Effective Property Tax</dt><dd>~0.452% (~$2,150/yr*)</dd></div>
              <div><dt>Spokane Drive</dt><dd>33–40 min on I-90</dd></div>
              <div><dt>Spokane Airport (GEG)</dt><dd>35–45 min door-to-door</dd></div>
              <div><dt>School District</dt><dd>Coeur d’Alene #271</dd></div>
            </dl>
            <p style={{ fontSize: '11px', color: 'rgba(247,244,238,0.52)', marginTop: '14px', lineHeight: 1.5 }}>
              *Estimated on $601K primary residence after Idaho’s $125,000 Homeowner’s Exemption.
            </p>
            <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
              <Link className="ed-btn-alabaster" href="/contact">
                Ask Shirin About CdA <span aria-hidden="true">↗</span>
              </Link>
              <span className="ed-portrait-sig" aria-hidden="true">Shirin</span>
            </div>
          </aside>
        </div>
      </section>

      {/* 6-Neighborhood Visual Lookbook */}
      <section style={{ padding: '92px 0', background: 'var(--alabaster-warm)', borderBottom: '1px solid var(--hairline)' }} id="neighborhoods" aria-labelledby="hoods-title">
        <div className="ed-container">
          <div className="ed-section-header">
            <div>
              <p className="ed-eyebrow">Where to Look</p>
              <h2 id="hoods-title">
                Coeur d’Alene <em>neighborhoods.</em>
              </h2>
            </div>
            <p style={{ maxWidth: '440px', fontSize: '15px', lineHeight: 1.7, color: 'var(--ink-muted)' }}>
              CdA is small enough to drive end to end in fifteen minutes — and varied enough that the neighborhood matters more than the square footage.
            </p>
          </div>

          <div className="ed-hood-grid">
            {NEIGHBORHOODS.map((h) => (
              <article key={h.n} className="ed-hood-card">
                <div className="ed-hood-body">
                  <p className="ed-card-kicker" style={{ marginBottom: '10px' }}>{h.tag}</p>
                  <h3>{h.n}</h3>
                  <p>{h.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Forest Band: How Lakefront Actually Prices */}
      <section className="ed-forest-band" aria-labelledby="lakefront-title">
        <div className="ed-container">
          <div style={{ maxWidth: '720px', marginBottom: '52px' }}>
            <p className="ed-eyebrow ed-eyebrow-light">The Part Buyers Misunderstand</p>
            <h2 id="lakefront-title" style={{ fontSize: 'clamp(34px, 3.8vw, 54px)', lineHeight: 1.08, marginTop: '14px', color: '#FAF7F1' }}>
              How lakefront <em style={{ fontStyle: 'italic', color: 'var(--bronze-light)' }}>actually prices.</em>
            </h2>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.75, color: 'rgba(247,244,238,0.8)' }}>
              “Lakefront” is the single most overloaded word in this market, and it costs buyers real time. Lake property does not track the city median — it prices against waterfront demand. Separate these three tiers before you start touring:
            </p>
          </div>

          <div className="ed-tier-grid">
            <article className="ed-tier-card">
              <span className="ed-tier-num">01</span>
              <h3>True Lake Coeur d’Alene Frontage</h3>
              <p>Private shoreline on the lake itself. The scarcest and most expensive category, and the one where active inventory can often be counted on your hands at any given moment.</p>
            </article>
            <article className="ed-tier-card">
              <span className="ed-tier-num">02</span>
              <h3>Deeded or Shared Lake Access</h3>
              <p>No private shoreline, but a legal right to the water — a community dock, shared beach, or easement. Carries a meaningful premium over inland homes at a fraction of true frontage. Always verify exact access rights.</p>
            </article>
            <article className="ed-tier-card">
              <span className="ed-tier-num">03</span>
              <h3>View Property</h3>
              <p>You are paying for the sightline, not the water — Blackwell Hill is the classic example. A $900,000 view home and a $900,000 frontage home are entirely different assets with different resale behavior.</p>
            </article>
          </div>
        </div>
      </section>

      <CdaInteractiveClient idxUrl={idxUrl} />

      {/* Quiet Hairline FAQ Accordions */}
      <section style={{ padding: '96px 0', background: 'var(--alabaster)' }} id="faq" aria-labelledby="cda-faq-title">
        <div className="ed-container ed-faq-layout">
          <div>
            <p className="ed-eyebrow">Common Questions</p>
            <h2 id="cda-faq-title" style={{ fontSize: 'clamp(34px, 3.4vw, 48px)', lineHeight: 1.1, marginTop: '14px', color: 'var(--pine)' }}>
              Coeur d’Alene questions, <em>answered honestly.</em>
            </h2>
            <p style={{ margin: '18px 0 28px', fontSize: '15px', lineHeight: 1.75, color: 'var(--ink-muted)' }}>
              Straight answers to the questions relocating buyers ask Shirin most before scheduling their first tour.
            </p>
            <Link className="ed-btn-outline-pine" href="/contact">
              Ask a Specific Question <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* Sunset Closing Band */}
      <section className="ed-closing-band" aria-labelledby="cda-closing-title">
        <Image className="ed-closing-photo" src="/images/field-guide/sunset-marina-clear-2048.webp" alt="Calm sunset reflection over Lake Coeur d'Alene marina" fill sizes="100vw" />
        <div className="ed-closing-scrim" aria-hidden="true" />
        <div className="ed-container">
          <div className="ed-closing-inner">
            <p className="ed-eyebrow ed-eyebrow-light">Shirin — Coeur d’Alene REALTOR®</p>
            <h2 id="cda-closing-title">
              Looking at <em>Coeur d’Alene?</em>
            </h2>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.72, color: 'rgba(247,244,238,0.84)' }}>
              Tell me your budget and whether the lake is a must-have — I’ll give you an honest read on what it buys right now and whether CdA or a neighboring town serves you better.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
              <Link className="ed-btn-alabaster" href="/contact">
                Start the Conversation <span aria-hidden="true">↗</span>
              </Link>
              <a className="ed-link-light" href={idxUrl} target="_blank" rel="noopener noreferrer">
                Browse Live MLS Listings <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
