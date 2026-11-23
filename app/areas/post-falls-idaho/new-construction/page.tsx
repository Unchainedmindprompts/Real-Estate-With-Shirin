import Image from 'next/image'
import Link from 'next/link'
import { heroMetadata, lakeHouseCard } from '@/lib/hero-share'
import { BASE_URL, AGENT_ID, BUSINESS_ID, placeStub, jsonLdGraph } from '@/lib/schema-ids'
import { IDX_NEW_CONSTRUCTION_POST_FALLS } from '@/lib/idx-search'
import FaqAccordion from '@/components/editorial/FaqAccordion'
import PostFallsNewConstructionClient from '@/components/editorial/PostFallsNewConstructionClient'
import { POST_FALLS_COMMUNITIES } from '@/lib/post-falls-new-construction'

const PAGE_PATH = '/areas/post-falls-idaho/new-construction'
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`

export const metadata = heroMetadata(
  PAGE_PATH,
  'New Construction Homes in Post Falls, Idaho (2026 Communities & Builders)',
  'Compare active Post Falls new construction communities, builders, dated 2026 prices, 55+ cottages at Trutina, townhomes, RV-garage builds, and model-home buyer representation rules with Shirin Abplanalp, REALTOR®.',
  lakeHouseCard,
)

const FAQS = [
  {
    q: 'How much do new construction homes cost in Post Falls, Idaho right now?',
    a: 'Checked directly on builder websites and the Coeur d’Alene MLS on November 23, 2026, brand-new attached twin homes at Viking’s Wildflower Meadows start at $375,556 to $376,220, Millworx live-work townhomes start at $405,000 ($420,000+ currently listed), Greenstone’s North Place cottages start at $404,000, Trutina 55+ single-level homes run $415,000 to $527,000, and single-family master-planned homes start at $414,990 at Hayden’s Crown Reserve and $420,950 at Lennar’s Crown Reserve. Mid-to-upper single-family specs in Foxtail, Montrose, and The Parkllyn span roughly $450,000 to $1,002,880, while custom Spokane River waterfront builds exceed $2.5M. Remember that base plan prices exclude lot premiums, design upgrades, and any unincluded yard or window items.',
  },
  {
    q: 'Which builders are actively building in Post Falls in 2026?',
    a: 'Six primary production and neighborhood builders verified active or upcoming in Post Falls on November 23, 2026 are Hayden Homes (Crown Reserve active; North Place and Rosewater Place coming soon), Architerra Homes (Foxtail and The Parkllyn active; The Post townhomes coming soon), Greenstone Homes (North Place, Trutina 55+, and Montrose), Lennar (Crown Reserve), Viking Construction (Montrose, North Place East, and Wildflower Meadows), and Millworx (central Post Falls townhomes), alongside local semi-custom and waterfront builders in pockets such as Millsap Landing and Estates at Waterstone.',
  },
  {
    q: 'Why should I contact my own buyer’s agent before visiting a Post Falls model home?',
    a: 'The sales representative sitting inside a model home works under contract for the builder to protect the builder’s price, terms, and timeline — not yours. Most Post Falls builders enforce a strict first-contact registration rule: if you walk into a model home or register on a builder’s tablet alone on visit one, the builder can refuse to recognize your independent buyer’s agent later. Reaching out before your first tour lets Shirin register you properly so you get independent pricing comps, contract review, and inspection advocacy without paying a separate fee out of pocket when builder cooperative compensation applies.',
  },
  {
    q: 'Are there 55+ or single-level new construction communities in Post Falls?',
    a: 'Yes. Trutina at North Place by Greenstone Homes is a dedicated age-restricted 55+ resort-style neighborhood offering single-level cottages and ranchers from $415,000 to $527,000 (998 to 1,664 sq ft, checked November 23, 2026). Beyond age-restricted neighborhoods, non-age-restricted single-level ranch floor plans are actively built in Foxtail, The Parkllyn, Crown Reserve, North Place, and Montrose. As a certified Seniors Real Estate Specialist (SRES®), Shirin helps downsizers compare zero-step entry details, HOA snow removal coverage, and resale flexibility side by side.',
  },
  {
    q: 'Where can I buy a new construction home with an RV garage or shop in Post Falls?',
    a: 'Standard master-planned HOA subdivisions in Post Falls usually restrict tall RV doors, detached shops, and street trailer parking. Buyers who need indoor RV or boat storage look to select estate lots in The Parkllyn, dedicated RV-garage infill pockets like Millsap Landing (where a 2026 3-bed home with an attached 2-car plus large RV garage on 0.20 acres listed at $659,000 on November 23, 2026), or nearby Rathdrum shop-lot communities such as Thayer Farms North. Always verify garage door clear height and CC&R parking rules in writing before signing.',
  },
  {
    q: 'What is usually NOT included in a Post Falls builder’s advertised base price?',
    a: 'Every builder contract differs, so verify each line item in writing before signing: backyard sod and irrigation (many production homes include front-yard landscaping only), perimeter and side-gate fencing, window blinds or shades, refrigerator, washer and dryer, garage door openers, and lot premiums for corner, greenbelt, or larger parcels. Factoring those post-closing cash items alongside the finished contract price is the only accurate way to compare a new build against an established Post Falls resale home.',
  },
  {
    q: 'Do I still need a home inspection and radon test on brand-new construction in Post Falls?',
    a: 'Unequivocally yes. Municipal building inspectors check minimum code compliance in brief milestone visits — they do not test every outlet, crawl every truss bay for insulation gaps, check roof flashing detail by detail, or test indoor air. Independent pre-drywall and pre-closing inspections routinely catch grading, plumbing, HVAC balancing, or electrical punch-list items while the builder is still on the hook. In addition, Kootenai County sits in EPA Radon Zone 1 (where roughly 2 in 5 tested Idaho homes measure at or above 4.0 pCi/L), so testing radon before your 11-month builder warranty walkthrough or closing is essential.',
  },
]

const PRIMARY_SOURCES = [
  {
    name: 'Hayden Homes — Post Falls Communities & Unwrap Your Savings Event (checked Nov 23, 2026)',
    detail: 'Crown Reserve from $414,990 (1,323–3,195 sq ft, 14 quick move-ins); North Place (1,408–2,968 sq ft, Coming Soon); Rosewater Place off McGuire (1,024–2,250 sq ft, Coming Soon).',
    url: 'https://www.hayden-homes.com/new-homes/idaho/north-idaho/post-falls',
  },
  {
    name: 'Architerra Homes — Post Falls Communities & Promotions (checked Nov 23, 2026)',
    detail: 'Foxtail available homes $468,900–$611,600; The Parkllyn starting mid-$400Ks (available specs $470,500–$1,002,880); The Post Coming Soon (83 townhomes from high $300Ks); Year-End Sales 4.99% FHA / 5.49% Conv via Loan Peak Financial through Dec 31, 2026.',
    url: 'https://myarchiterra.com/',
  },
  {
    name: 'Greenstone Homes — North Place, Trutina 55+ & Montrose (checked Nov 23, 2026)',
    detail: 'Trutina 55+ at North Place $415,000–$527,000 (998–1,664 sq ft); North Place Cottage plans $404,000–$504,000 & Springfield Rancher $517,000; Montrose $497,000–$558,000 (1,586–2,338 sq ft).',
    url: 'https://greenstonehomes.com/community/trutina-at-north-place',
  },
  {
    name: 'Lennar — Crown Reserve, Post Falls (checked Nov 23, 2026)',
    detail: 'Published community range $420,950–$492,950 across 5 cottage-style single-family plans (3–4 beds, 2.5 baths, 1,526–2,196 sq ft).',
    url: 'https://www.lennar.com/new-homes/idaho/inland-northwest/post-falls/crown-reserve',
  },
  {
    name: 'Viking Construction — Montrose, North Place East & Wildflower Meadows (checked Nov 23, 2026)',
    detail: 'Wildflower Meadows Riverview Twin Homes $375,599–$376,220 (1,161 sq ft) & Rock Falls Duplex $818,409; Montrose spec $450,641 (1,416 sq ft); North Place East spec $568,617 (2,681 sq ft).',
    url: 'https://vikinghomes.com/north-idaho-communities/',
  },
  {
    name: 'Millworx — Central Post Falls Residential Listings (checked Nov 23, 2026)',
    detail: '50+ acre live-work redevelopment on the former Idaho Veneer site; homepage starting at $405,000; 4 available residences $420,000–$799,000 (1,364–2,347 sq ft).',
    url: 'https://www.millworx.community/listings/residential',
  },
  {
    name: 'Coeur d’Alene MLS via Shirin Abplanalp BHHS Jacklin kvCORE IDX (checked Nov 23, 2026)',
    detail: '37 Active and Coming Soon Post Falls listings with Year Built 2025+, spanning $375,556 (1485 N Wilhelm Way) to $659,000 RV-garage build (2655 N Neptune St, Millsap Landing) to $2,589,000 custom waterfront (2792 E Ravine Dr, Estates at Waterstone).',
    url: IDX_NEW_CONSTRUCTION_POST_FALLS,
  },
  {
    name: 'Homes.com — Post Falls, ID Local Market Guide (checked Nov 9, 2026)',
    detail: '12-month all-home Post Falls median sale price $539,900 (up 6%), used strictly as market context and never subtracted from a builder base starting price.',
    url: 'https://www.homes.com/local-guide/post-falls-id/',
  },
]

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Post Falls New Construction Buyer Representation',
  serviceType: 'New construction real estate buyer representation',
  description:
    'Independent buyer representation for new construction homes, spec homes, 55+ communities, townhomes, and to-be-built lots in Post Falls, Idaho — including model-home registration, builder contract review, finished-price comparisons, and inspection coordination.',
  provider: [{ '@id': BUSINESS_ID }, { '@id': AGENT_ID }],
  areaServed: placeStub('postFalls'),
}

const jsonLdItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${PAGE_URL}#communities-list`,
  name: 'Active and Upcoming New Construction Communities in Post Falls, Idaho (2026)',
  description:
    'Verified Post Falls, Idaho new construction subdivisions, master-planned neighborhoods, 55+ communities, and townhome districts checked November 23, 2026.',
  numberOfItems: POST_FALLS_COMMUNITIES.length,
  itemListElement: POST_FALLS_COMMUNITIES.map((c, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: `${c.name} (${c.builders})`,
    description: `${c.status}. Published pricing: ${c.priceBand}. Specs: ${c.specs}.`,
    url: `${PAGE_URL}#${c.id}`,
  })),
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'New Construction Homes in Post Falls, Idaho (2026 Communities & Builders)',
  description:
    'Compare active Post Falls new construction communities, builders, dated 2026 prices, 55+ cottages at Trutina, townhomes, RV-garage builds, and model-home buyer representation rules.',
  isPartOf: { '@id': `${BASE_URL}/areas/post-falls-idaho#webpage` },
  about: [{ '@id': BUSINESS_ID }, placeStub('postFalls')],
  mainEntity: { '@id': `${PAGE_URL}#service` },
  hasPart: { '@id': `${PAGE_URL}#communities-list` },
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
    { '@type': 'ListItem', position: 3, name: 'Post Falls, Idaho', item: `${BASE_URL}/areas/post-falls-idaho` },
    { '@type': 'ListItem', position: 4, name: 'New Construction', item: PAGE_URL },
  ],
}

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

export default function PostFallsNewConstructionPage() {
  return (
    <div className="ed-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdGraph([jsonLdWebPage, jsonLdService, jsonLdItemList, jsonLdBreadcrumb, jsonLdFaq]),
          ),
        }}
      />

      {/* Full-Bleed Editorial Hero + 4-Stat Snapshot Bar */}
      <section className="ed-photo-hero is-tall" aria-labelledby="pf-nc-hero-title">
        <Image
          className="ed-photo-hero-img"
          src="/images/community-atlas/post-falls-idaho.webp"
          alt="Post Falls, Idaho prairie neighborhoods, Spokane River corridor, and surrounding mountains"
          fill
          sizes="100vw"
          preload
        />
        <div className="ed-photo-hero-scrim" aria-hidden="true" />
        <div className="ed-container ed-photo-hero-inner">
          <div style={{ maxWidth: '820px' }}>
            <nav className="ed-nc-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">·</span>
              <Link href="/areas">Areas</Link>
              <span aria-hidden="true">·</span>
              <Link href="/areas/post-falls-idaho">Post Falls, Idaho</Link>
              <span aria-hidden="true">·</span>
              <span>New Construction</span>
            </nav>

            <p className="ed-eyebrow ed-eyebrow-light" style={{ marginTop: '18px' }}>
              Post Falls, Idaho · 2026 New Build Field Guide
            </p>
            <h1 id="pf-nc-hero-title">
              New Construction <em>in Post Falls.</em>
            </h1>
            <p className="ed-hero-lead" style={{ maxWidth: '680px', color: 'rgba(247,244,238,0.9)' }}>
              Post Falls is Kootenai County’s primary building corridor — stretching from $375,556 zero-lot-line twin homes and $415,000 Trutina 55+ cottages to master-planned family subdivisions, attached RV-bay builds, and custom Spokane River estates. Every community below is verified as of November 23, 2026.
            </p>
            <div className="ed-photo-hero-actions">
              <a
                className="ed-btn-alabaster"
                href={IDX_NEW_CONSTRUCTION_POST_FALLS}
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse 37 Live Post Falls New Builds <span aria-hidden="true">↗</span>
              </a>
              <a className="ed-link-light" href="#communities">
                Compare All 10 Communities <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <dl className="ed-stat-bar" aria-label="Post Falls new construction snapshot">
            <div className="ed-stat-cell">
              <dt>Lowest Active New Build</dt>
              <dd>$375.6K</dd>
              <span className="ed-stat-sub">Twin homes · Wildflower Meadows</span>
            </div>
            <div className="ed-stat-cell">
              <dt>Single-Family &amp; 55+ Start</dt>
              <dd>$415K+</dd>
              <span className="ed-stat-sub">Crown Reserve &amp; Trutina 55+</span>
            </div>
            <div className="ed-stat-cell">
              <dt>Live 2025+ MLS Listings</dt>
              <dd>37 Homes</dd>
              <span className="ed-stat-sub">Active &amp; Coming Soon · Nov 23, 2026</span>
            </div>
            <div className="ed-stat-cell">
              <dt>Spokane / CdA Drive</dt>
              <dd>25 / 10m</dd>
              <span className="ed-stat-sub">Direct I-90 &amp; Prairie corridors</span>
            </div>
          </dl>
        </div>
      </section>

      {/* Corridor Orientation + Shirin Advisor Card */}
      <section className="ed-market-section" aria-labelledby="pf-corridors-title">
        <div className="ed-container ed-market-grid">
          <div className="ed-market-prose">
            <p className="ed-eyebrow">Understanding the Map</p>
            <h2 id="pf-corridors-title">
              Three building corridors, <em>three different lifestyles.</em>
            </h2>
            <p>
              Online listing portals dump every Post Falls new build into one big pin map, which hides the daily reality on the ground. Nearly all active building in Post Falls concentrates into three distinct zones — each with a different lot feel, HOA structure, and commute rhythm.
            </p>
            <p>
              <strong>1. The Prairie Avenue &amp; Idaho Road Corridor (North Post Falls):</strong> Flat prairie terrain (~40 inches of annual snow), mountain views toward Mt. Spokane and Canfield, and the largest master-planned grid in the county. Home to <strong>North Place</strong>, <strong>North Place East</strong>, <strong>Trutina 55+</strong>, and nearby <strong>Crown Reserve</strong>.
            </p>
            <p>
              <strong>2. The Highway 41 &amp; East Post Falls Corridor:</strong> Positioned for the fastest jump south to I-90, Treaty Rock and Post Falls District #273 schools, and a 10-minute run into Coeur d’Alene. Anchored by Architerra’s <strong>Foxtail</strong> and <strong>The Parkllyn</strong>, established parks and trails in <strong>Montrose</strong>, and the upcoming 83-unit townhome neighborhood at <strong>The Post</strong>.
            </p>
            <p>
              <strong>3. Central Live-Work, West McGuire &amp; RV-Bay Pockets:</strong> Walkable contemporary townhomes at <strong>Millworx</strong> (redeveloping the historic 50+ acre Idaho Veneer site), sub-$400K twin homes at <strong>Wildflower Meadows</strong>, Hayden’s upcoming <strong>Rosewater Place</strong> near the Washington line off McGuire, plus smaller infill and waterfront pockets like <strong>Millsap Landing</strong> (attached RV garages) and <strong>Estates at Waterstone</strong>.
            </p>

            <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '28px' }}>
              <Link className="ed-link-underlined" href="/areas/post-falls-idaho">
                Post Falls City &amp; Living Guide <span aria-hidden="true">→</span>
              </Link>
              <Link className="ed-link-underlined" href="/articles/new-construction-vs-resale-north-idaho-better-value">
                New Construction vs. Resale Math <span aria-hidden="true">→</span>
              </Link>
              <Link className="ed-link-underlined" href="/articles/post-falls-vs-rathdrum-which-is-right-for-you">
                Post Falls vs. Rathdrum <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <aside className="ed-advisor-card" aria-label="Model home representation rule and local advisor note">
            <div className="ed-advisor-top">
              <Image src="/images/shirin-portrait-2026.png" alt="Shirin Abplanalp, Post Falls REALTOR and SRES" width={68} height={68} sizes="68px" />
              <div>
                <p style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze-light)' }}>
                  Read Before Touring Models
                </p>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '24px', color: '#FAF7F1', lineHeight: 1.15, marginTop: '2px' }}>
                  Shirin Abplanalp
                </p>
                <p style={{ fontSize: '12px', color: 'rgba(247,244,238,0.68)', marginTop: '2px' }}>
                  Post Falls REALTOR® &amp; SRES® · Lives in Post Falls
                </p>
              </div>
            </div>
            <blockquote className="ed-advisor-quote">
              “The friendly agent inside a builder’s model home represents the builder, not you — and most Post Falls builders require your own agent to register with you on Visit #1. Text or message me before you walk in so you don’t give up independent representation.”
            </blockquote>
            <dl className="ed-advisor-facts">
              <div>
                <dt>Model-Home Policy</dt>
                <dd>Register agent before Visit #1</dd>
              </div>
              <div>
                <dt>Purchase Contract</dt>
                <dd>Builder form (not standard RE-21)</dd>
              </div>
              <div>
                <dt>55+ Downsizing</dt>
                <dd>Certified SRES® Specialist</dd>
              </div>
              <div>
                <dt>Out-of-State Tours</dt>
                <dd>Live video lot &amp; spec walk-throughs</dd>
              </div>
            </dl>
            <p style={{ fontSize: '11px', color: 'rgba(247,244,238,0.56)', marginTop: '14px', lineHeight: 1.55 }}>
              Shirin lives in Post Falls after relocating from Bend, Oregon, and walks out-of-state and local buyers through lot sun orientation, HOA fine print, and finished-price worksheets before signing.
            </p>
            <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
              <Link className="ed-btn-alabaster" href="/contact">
                Register With Shirin First <span aria-hidden="true">↗</span>
              </Link>
              <span className="ed-portrait-sig" aria-hidden="true">Shirin</span>
            </div>
          </aside>
        </div>
      </section>

      {/* Interactive Community & Builder Explorer */}
      <PostFallsNewConstructionClient idxUrl={IDX_NEW_CONSTRUCTION_POST_FALLS} />

      {/* Deep Forest Green 4-Pillar Buyer Protection Rules */}
      <section className="ed-forest-band" aria-labelledby="pf-rules-title">
        <div className="ed-container">
          <div style={{ maxWidth: '760px', marginBottom: '52px' }}>
            <p className="ed-eyebrow ed-eyebrow-light">How Smart Buyers Protect Their Budget</p>
            <h2
              id="pf-rules-title"
              style={{ fontSize: 'clamp(34px, 3.8vw, 54px)', lineHeight: 1.08, marginTop: '14px', color: '#FAF7F1' }}
            >
              Four checks before signing a{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--bronze-light)' }}>builder contract.</em>
            </h2>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.75, color: 'rgba(247,244,238,0.82)' }}>
              Production builders sell hundreds of homes a year on contracts written by their own legal teams. Having your own advocate costs nothing to ask about upfront and protects the four areas where buyers most often overspend.
            </p>
          </div>

          <div className="ed-nc-pillars">
            <article className="ed-tier-card">
              <span className="ed-tier-num">01</span>
              <h3>Price the Finished Home, Never the Base Banner</h3>
              <p>
                A $415K or $430K banner price is a base elevation on a zero-premium lot. Before comparing against a Post Falls resale home (median $539,900 over 12 months on Homes.com), add lot premiums, design-center finishes, backyard sod and sprinklers, fencing, window coverings, refrigerator, and washer/dryer in writing.
              </p>
            </article>

            <article className="ed-tier-card">
              <span className="ed-tier-num">02</span>
              <h3>Audit Preferred-Lender Rate Buydowns on Total Cost</h3>
              <p>
                Builders in Post Falls frequently advertise 3.99% to 5.49% promotional rates tied to their affiliated mortgage company. Some are 1-year or 2-1 temporary buydowns; others are full 30-year fixed forward commitments. Always compare the full Loan Estimate — APR, origination fees, and price flexibility — against an independent local lender.
              </p>
            </article>

            <article className="ed-tier-card">
              <span className="ed-tier-num">03</span>
              <h3>Run Independent Pre-Drywall, Final &amp; Radon Tests</h3>
              <p>
                City code inspectors verify minimum municipal compliance, not workmanship quality. Schedule an independent third-party inspector before drywall goes up (when framing, wiring, and plumbing are open), again before closing, and test radon — Kootenai County sits in EPA Radon Zone 1.
              </p>
            </article>

            <article className="ed-tier-card">
              <span className="ed-tier-num">04</span>
              <h3>Verify HOA Rules on RV Parking, Shops &amp; Rentals</h3>
              <p>
                While Idaho HB 583 barred cities from adding new short-term rental permit bans starting July 1, 2026, private subdivision CC&amp;Rs still govern rentals, street parking, trailers, and outbuildings. Read the recorded CC&amp;Rs and HOA budget before your contingency window closes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Matrix + Primary Sources & Scope */}
      <section
        style={{ padding: '92px 0', background: 'var(--alabaster)', borderBottom: '1px solid var(--hairline)' }}
        aria-labelledby="pf-matrix-title"
      >
        <div className="ed-container">
          <div className="ed-section-header">
            <div>
              <p className="ed-eyebrow">Side-by-Side Reference · Dated Nov 23, 2026</p>
              <h2 id="pf-matrix-title">
                Post Falls builder matrix <em>at a glance.</em>
              </h2>
            </div>
            <Link className="ed-link-underlined" href="/articles/new-construction-north-idaho-builders-costs-process">
              Read North Idaho Build Process &amp; Cost Breakdown <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="ed-nc-table-wrap">
            <table className="ed-nc-table">
              <thead>
                <tr>
                  <th scope="col">Community</th>
                  <th scope="col">Builder(s)</th>
                  <th scope="col">Published Pricing (Nov 23, 2026)</th>
                  <th scope="col">Sq Ft Range</th>
                  <th scope="col">Best Fit For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Wildflower Meadows</strong></td>
                  <td>Viking Construction</td>
                  <td>$375,556 – $376,220 (Twins) · $818,409 (Duplex)</td>
                  <td>1,161 – 1,626/side</td>
                  <td>Sub-$400K entry ownership &amp; duplex investors</td>
                </tr>
                <tr>
                  <td><strong>Millworx</strong></td>
                  <td>Millworx</td>
                  <td>From $405,000 ($420K – $799K listed)</td>
                  <td>1,364 – 2,347</td>
                  <td>Walkable live-work townhomes &amp; garage + ADU flex</td>
                </tr>
                <tr>
                  <td><strong>North Place &amp; East</strong></td>
                  <td>Greenstone, Viking, Hayden</td>
                  <td>$404,000 – $517,000 (Greenstone) · $568,617 (Viking)</td>
                  <td>998 – 2,968</td>
                  <td>Prairie corridor cottages, ranchers &amp; 2-story plans</td>
                </tr>
                <tr>
                  <td><strong>Crown Reserve</strong></td>
                  <td>Hayden Homes &amp; Lennar</td>
                  <td>From $414,990 (Hayden) · $420,950 – $492,950 (Lennar)</td>
                  <td>1,323 – 3,195</td>
                  <td>Quick move-in inventory &amp; competing builder incentives</td>
                </tr>
                <tr>
                  <td><strong>Trutina at North Place</strong></td>
                  <td>Greenstone Homes</td>
                  <td>$415,000 – $527,000</td>
                  <td>998 – 1,664</td>
                  <td>Age-qualified 55+ single-level resort lifestyle</td>
                </tr>
                <tr>
                  <td><strong>Montrose</strong></td>
                  <td>Greenstone &amp; Viking</td>
                  <td>$450,641 spec (Viking) · $497,000 – $558,000 (Greenstone)</td>
                  <td>1,416 – 2,338</td>
                  <td>Finished parks, mature trails &amp; cohesive streets</td>
                </tr>
                <tr>
                  <td><strong>Foxtail</strong></td>
                  <td>Architerra Homes</td>
                  <td>$468,900 – $611,600 (available homes)</td>
                  <td>1,336 – 3,000+</td>
                  <td>Fast I-90 commute, greenbelts &amp; Treaty Rock Elem</td>
                </tr>
                <tr>
                  <td><strong>The Parkllyn</strong></td>
                  <td>Architerra Homes</td>
                  <td>Mid-$400Ks start ($470.5K – $1,002,880 specs)</td>
                  <td>1,300 – 3,870</td>
                  <td>Hwy 41 convenience from ranches to executive lots</td>
                </tr>
                <tr>
                  <td><strong>Millsap / Waterstone</strong></td>
                  <td>Regional &amp; Custom (MLS)</td>
                  <td>$659,000 (RV bay) – $2,589,000 (Riverfront)</td>
                  <td>1,815 – 4,024+</td>
                  <td>Attached RV garages &amp; custom Spokane River waterfront</td>
                </tr>
                <tr>
                  <td><strong>The Post &amp; Rosewater</strong></td>
                  <td>Architerra &amp; Hayden</td>
                  <td>High $300Ks (The Post) · TBD (Rosewater)</td>
                  <td>1,024 – 2,250</td>
                  <td>Early-phase buyers planning 3–9 months ahead</td>
                </tr>
              </tbody>
            </table>
          </div>

          <details className="ed-nc-sources">
            <summary>Primary Sources, Verification Date &amp; Scope Notes (Checked November 23, 2026)</summary>
            <div className="ed-nc-sources-body">
              <p>
                All community statuses, price bands, square-footage ranges, and promotional summaries on this page were checked directly against the builders’ official websites and Shirin Abplanalp’s Coeur d’Alene MLS IDX feed on <strong>November 23, 2026</strong>. Builder pricing, lot availability, lender rates, and incentives change without notice and are never guaranteed; confirm current terms in writing for the specific homesite before signing. Base starting prices reflect standard plans prior to lot premiums and design options and are never subtracted from city-wide resale medians to imply savings.
              </p>
              <ul>
                {PRIMARY_SOURCES.map((s) => (
                  <li key={s.name}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      <strong>{s.name}</strong>
                    </a>{' '}
                    — {s.detail}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: '14px' }}>
                Related guides on this site:{' '}
                <Link href="/articles/hoa-north-idaho-subdivisions-fees-rules-what-to-check">HOAs in North Idaho Subdivisions</Link> ·{' '}
                <Link href="/articles/radon-north-idaho-testing-costs-mitigation">Radon Testing &amp; Mitigation in Kootenai County</Link> ·{' '}
                <Link href="/articles/earnest-money-idaho-how-much-when-due-refundable">Earnest Money Rules in Idaho</Link> ·{' '}
                <Link href="/articles/how-much-do-homes-cost-post-falls-idaho">What Homes Cost in Post Falls (2026)</Link>.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Quiet Hairline FAQ Accordions */}
      <section style={{ padding: '96px 0', background: 'var(--alabaster-warm)', borderBottom: '1px solid var(--hairline)' }} id="faq" aria-labelledby="pf-nc-faq-title">
        <div className="ed-container ed-faq-layout">
          <div>
            <p className="ed-eyebrow">Post Falls New Build FAQs</p>
            <h2
              id="pf-nc-faq-title"
              style={{ fontSize: 'clamp(34px, 3.4vw, 48px)', lineHeight: 1.1, marginTop: '14px', color: 'var(--pine)' }}
            >
              New construction questions, <em>answered plainly.</em>
            </h2>
            <p style={{ margin: '18px 0 28px', fontSize: '15px', lineHeight: 1.75, color: 'var(--ink-muted)' }}>
              Straight answers on 2026 builder pricing, Visit #1 registration rules, 55+ living at Trutina, RV bays, hidden post-closing costs, and inspections.
            </p>
            <Link className="ed-btn-outline-pine" href="/contact">
              Ask About a Specific Subdivision <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* Full-Bleed Sunset Closing Band */}
      <section className="ed-closing-band" aria-labelledby="pf-nc-closing-title">
        <Image
          className="ed-closing-photo"
          src="/images/field-guide/sunset-marina-clear-2048.webp"
          alt="Calm sunset reflection over North Idaho water near Post Falls"
          fill
          sizes="100vw"
        />
        <div className="ed-closing-scrim" aria-hidden="true" />
        <div className="ed-container">
          <div className="ed-closing-inner">
            <p className="ed-eyebrow ed-eyebrow-light">Touring Post Falls New Construction?</p>
            <h2 id="pf-nc-closing-title">
              Let’s line up the right <em>builders &amp; lots.</em>
            </h2>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.72, color: 'rgba(247,244,238,0.86)' }}>
              Tell me your target monthly payment, timeline, and must-haves — single-level, 55+, 3-car or RV bay, or quickest Spokane commute — and I’ll put together a side-by-side shortlist of current Post Falls spec homes, unreleased phases, and comparable resales before you step into a model home.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
              <Link className="ed-btn-alabaster" href="/contact">
                Request Your Custom Shortlist <span aria-hidden="true">↗</span>
              </Link>
              <a
                className="ed-link-light"
                href={IDX_NEW_CONSTRUCTION_POST_FALLS}
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse 37 Live 2025+ MLS Listings <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
