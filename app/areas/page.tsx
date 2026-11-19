import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID } from '@/lib/schema-ids'

export const metadata: Metadata = {
  title: "Northern Idaho Real Estate Areas | Post Falls, Coeur d'Alene, Hayden",
  description:
    "Shirin Abplanalp serves buyers and sellers across Post Falls, Coeur d'Alene, Hayden, and Kootenai County Idaho.",
  alternates: {
    canonical: `${BASE_URL}/areas`,
  },
}

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

const COMMUNITIES = [
  {
    slug: 'coeur-dalene-idaho',
    name: 'Coeur d’Alene',
    tag: 'Median ~$601K · Lakefront & Downtown',
    img: '/images/field-guide/sunset-over-the-lake.webp',
    alt: "Lake Coeur d'Alene at golden hour",
    desc: 'Walkable Sherman Avenue, Tubbs Hill, Sanders Beach, and Lake Coeur d’Alene. The widest inventory in Kootenai County with a true downtown lake-town lifestyle.',
  },
  {
    slug: 'post-falls-idaho',
    name: 'Post Falls',
    tag: 'Median ~$521K · Fastest I-90 Commute',
    img: '/images/field-guide/townhome-walk.webp',
    alt: 'Residential street in Post Falls, Idaho',
    desc: 'Newer subdivisions, Spokane River access, ~40 inches of annual snow, and the quickest border commute to Spokane at roughly $80K below Coeur d’Alene.',
  },
  {
    slug: 'hayden-idaho',
    name: 'Hayden',
    tag: 'Median ~$553K · Larger Lots & Hayden Lake',
    img: '/images/golf-4k.webp',
    alt: 'Open green space and residential living in Hayden, Idaho',
    desc: 'Quieter residential streets, larger lots, Hayden Lake proximity, and a strong local school district just 10–15 minutes north of Coeur d’Alene.',
  },
  {
    slug: 'rathdrum-idaho',
    name: 'Rathdrum',
    tag: 'Median ~$520K · Prairie Views & Acreage',
    img: '/images/field-guide/lake-house-editorial-4k.webp',
    alt: 'North Idaho home framed by pines near Rathdrum',
    desc: 'Room to spread out across the Rathdrum Prairie, newer communities, Twin Lakes access, and acreage options with Lakeland School District #272.',
  },
  {
    slug: 'sandpoint-idaho',
    name: 'Sandpoint',
    tag: 'Median ~$616K · Lake Pend Oreille & Ski Town',
    img: '/images/skiing-action-4k.webp',
    alt: 'Alpine skiing near Sandpoint and Schweitzer Mountain',
    desc: 'Arts-forward mountain town on Idaho’s largest lake with Schweitzer Mountain Resort minutes away and four dramatic seasons.',
  },
  {
    slug: 'kootenai-county',
    name: 'Kootenai County',
    tag: '~0.452% Effective Tax · County Overview',
    img: '/images/lake-life.jpeg',
    alt: 'Summer on the water in Kootenai County, Idaho',
    desc: 'The full county-scale view across CdA, Post Falls, Hayden, and Rathdrum — taxes, school districts, commutes, and how the submarkets fit together.',
  },
  {
    slug: 'bonner-county',
    name: 'Bonner County',
    tag: 'Sandpoint · Priest River · Rural Acreage',
    img: '/images/field-guide/sunset-marina-clear-2048.webp',
    alt: 'Evening water views in Bonner County, Idaho',
    desc: 'Quieter, more rural North Idaho living across Sandpoint, Ponderay, Priest River, and Priest Lake — including snow zones, wells, and acreage due diligence.',
  },
]

export default function AreasIndexPage() {
  return (
    <div className="ed-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <section className="ed-forest-hero" style={{ paddingBottom: '78px' }} aria-labelledby="areas-hub-title">
        <div className="ed-hero-backdrop" aria-hidden="true" />
        <div className="ed-container" style={{ position: 'relative' }}>
          <p className="ed-eyebrow ed-eyebrow-light">North Idaho Communities</p>
          <h1 id="areas-hub-title">
            Every town has its own <em>rhythm.</em>
          </h1>
          <p className="ed-hero-lead">
            Fifteen minutes on Highway 95 or I-90 can change your median home price by $80,000, cut your annual snowfall in half, or trade a walkable downtown for five quiet acres. Explore Shirin’s honest local field guides across Kootenai and Bonner County.
          </p>
        </div>
      </section>

      <section style={{ padding: '92px 0', background: 'var(--alabaster-warm)', borderBottom: '1px solid var(--hairline)' }}>
        <div className="ed-container">
          <div className="ed-hood-grid">
            {COMMUNITIES.map((c) => (
              <Link key={c.slug} href={`/areas/${c.slug}`} className="ed-hood-card">
                <div className="ed-hood-photo">
                  <img src={c.img} alt={c.alt} loading="lazy" />
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
        </div>
      </section>

      <section className="ed-closing-band" aria-labelledby="areas-closing-title">
        <img className="ed-closing-photo" src="/images/field-guide/sunset-marina-clear-2048.webp" alt="Sunset over North Idaho water" loading="lazy" />
        <div className="ed-closing-scrim" aria-hidden="true" />
        <div className="ed-container">
          <div className="ed-closing-inner">
            <p className="ed-eyebrow ed-eyebrow-light">Not Sure Which Town Fits?</p>
            <h2 id="areas-closing-title">
              Let’s narrow it down <em>together.</em>
            </h2>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.72, color: 'rgba(247,244,238,0.84)' }}>
              Share your budget, commute needs, and how you want to spend your weekends — Shirin will give you an honest read on which two North Idaho towns belong on your shortlist.
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
