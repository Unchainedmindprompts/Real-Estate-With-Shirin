import Image from 'next/image'
import Link from 'next/link'
import { heroMetadata, riverfrontCard } from '@/lib/hero-share'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, jsonLdGraph } from '@/lib/schema-ids'

export const metadata = heroMetadata(
  '/areas',
  "Northern Idaho Real Estate Areas | Post Falls, Coeur d'Alene, Hayden",
  "Shirin Abplanalp serves buyers and sellers across Post Falls, Coeur d'Alene, Hayden, and Kootenai County Idaho.",
  riverfrontCard,
)

const AREA_SLUGS = [
  'post-falls-idaho',
  'coeur-dalene-idaho',
  'hayden-idaho',
  'rathdrum-idaho',
  'sandpoint-idaho',
  'kootenai-county',
  'bonner-county',
]

const jsonLdCollection = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${BASE_URL}/areas`,
  url: `${BASE_URL}/areas`,
  name: 'North Idaho Communities',
  description:
    "Shirin Abplanalp serves buyers and sellers across Post Falls, Coeur d'Alene, Hayden, Rathdrum, Sandpoint, and Kootenai + Bonner counties, Idaho.",
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': BUSINESS_ID },
  breadcrumb: { '@id': `${BASE_URL}/areas#breadcrumb` },
  inLanguage: 'en-US',
  hasPart: AREA_SLUGS.map((slug) => ({
    '@id': `${BASE_URL}/areas/${slug}#webpage`,
  })),
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${BASE_URL}/areas#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Areas', item: `${BASE_URL}/areas` },
  ],
}

const FIVE_CITIES = [
  {
    slug: 'coeur-dalene-idaho',
    name: 'Coeur d’Alene',
    tag: 'Median ~$601K · Lakefront & Downtown',
    img: '/images/community-atlas/coeur-dalene-idaho.webp',
    alt: "Coeur d'Alene, Idaho",
    desc: 'Walkable Sherman Avenue, Tubbs Hill, Sanders Beach, and Lake Coeur d’Alene. The widest inventory in Kootenai County with a true downtown lake-town lifestyle.',
  },
  {
    slug: 'post-falls-idaho',
    name: 'Post Falls',
    tag: 'Median ~$521K · Fastest I-90 Commute',
    img: '/images/community-atlas/post-falls-idaho.webp',
    alt: 'Post Falls, Idaho',
    desc: 'Newer subdivisions, Spokane River access, ~40 inches of annual snow, and the quickest border commute to Spokane at roughly $80K below Coeur d’Alene.',
  },
  {
    slug: 'hayden-idaho',
    name: 'Hayden',
    tag: 'Median ~$553K · Larger Lots & Hayden Lake',
    img: '/images/community-atlas/hayden-idaho.webp',
    alt: 'Hayden, Idaho',
    desc: 'Quieter residential streets, larger lots, Hayden Lake proximity, and a strong local school district just 10–15 minutes north of Coeur d’Alene.',
  },
  {
    slug: 'rathdrum-idaho',
    name: 'Rathdrum',
    tag: 'Median ~$520K · Prairie Views & Acreage',
    img: '/images/community-atlas/rathdrum-idaho.webp',
    alt: 'Rathdrum, Idaho',
    desc: 'Room to spread out across the Rathdrum Prairie, newer communities, Twin Lakes access, and acreage options with Lakeland School District #272.',
  },
  {
    slug: 'sandpoint-idaho',
    name: 'Sandpoint',
    tag: 'Median ~$616K · Lake Pend Oreille & Ski Town',
    img: '/images/community-atlas/sandpoint-idaho.webp',
    alt: 'Sandpoint, Idaho',
    desc: 'Arts-forward mountain town on Idaho’s largest lake with Schweitzer Mountain Resort minutes away and four dramatic seasons.',
  },
]

export default function AreasIndexPage() {
  return (
    <div className="ed-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph([jsonLdCollection, jsonLdBreadcrumb])) }}
      />

      <section className="ed-forest-hero" style={{ paddingBottom: '78px' }} aria-labelledby="areas-hub-title">
        <div className="ed-hero-backdrop" aria-hidden="true" />
        <div className="ed-container" style={{ position: 'relative' }}>
          <p className="ed-eyebrow ed-eyebrow-light">North Idaho Communities</p>
          <h1 id="areas-hub-title">
            Five towns, each with its own <em>rhythm.</em>
          </h1>
          <p className="ed-hero-lead">
            Fifteen minutes on Highway 95 or I-90 can change your median home price by $80,000, cut your annual snowfall in half, or trade a walkable downtown for five quiet acres. Explore Shirin’s honest local guides to North Idaho’s five core communities.
          </p>
        </div>
      </section>

      <section style={{ padding: '92px 0', background: 'var(--alabaster-warm)', borderBottom: '1px solid var(--hairline)' }}>
        <div className="ed-container">
          <div className="ed-hood-grid">
            {FIVE_CITIES.map((c) => (
              <Link key={c.slug} href={`/areas/${c.slug}`} className="ed-hood-card">
                <div className="ed-hood-photo">
                  <Image src={c.img} alt={c.alt} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                  <span className="ed-hood-tag">{c.tag}</span>
                </div>
                <div className="ed-hood-body" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3>{c.name}</h3>
                  <p style={{ flex: 1 }}>{c.desc}</p>
                  <span className="ed-card-cta">
                    Explore {c.name} <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Separate County-Wide Overviews Strip */}
          <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid var(--hairline)' }}>
            <p className="ed-eyebrow" style={{ marginBottom: '20px' }}>County-Wide Market Overviews</p>
            <div className="ed-compare-stage">
              <Link href="/areas/kootenai-county" className="ed-hood-card">
                <div className="ed-hood-body">
                  <p className="ed-card-kicker" style={{ marginBottom: '8px' }}>~0.452% Effective Tax · CdA, Post Falls, Hayden &amp; Rathdrum</p>
                  <h3>Kootenai County Guide</h3>
                  <p>County-scale taxes, school districts, healthcare, and how Kootenai County’s four main cities fit together.</p>
                  <span className="ed-card-cta">Read Kootenai County Guide <span aria-hidden="true">→</span></span>
                </div>
              </Link>
              <Link href="/areas/bonner-county" className="ed-hood-card">
                <div className="ed-hood-body">
                  <p className="ed-card-kicker" style={{ marginBottom: '8px' }}>Sandpoint · Ponderay · Priest River · Rural Acreage</p>
                  <h3>Bonner County Guide</h3>
                  <p>Quieter northern living across Sandpoint, Priest River, and Priest Lake — including snow zones, wells, and rural land checks.</p>
                  <span className="ed-card-cta">Read Bonner County Guide <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ed-closing-band" aria-labelledby="areas-closing-title">
        <Image className="ed-closing-photo" src="/images/field-guide/sunset-marina-clear-2048.webp" alt="Sunset over North Idaho water" fill sizes="100vw" />
        <div className="ed-closing-scrim" aria-hidden="true" />
        <div className="ed-container">
          <div className="ed-closing-inner">
            <p className="ed-eyebrow ed-eyebrow-light">Not Sure Which City Fits?</p>
            <h2 id="areas-closing-title">
              Let’s narrow it down <em>together.</em>
            </h2>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.72, color: 'rgba(247,244,238,0.84)' }}>
              Share your budget, commute needs, and how you want to spend your weekends — Shirin will give you an honest read on which two North Idaho cities belong on your shortlist.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
              <Link className="ed-btn-alabaster" href="/contact">
                Start the Conversation <span aria-hidden="true">↗</span>
              </Link>
              <Link className="ed-link-light" href="/buyers">
                Try the Town Fit Finder <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
