import { heroMetadata, lakeHouseCard } from '@/lib/hero-share'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
import { ARTICLES_INDEX } from '@/lib/articles-index'
import ArticlesHubClient from '@/components/editorial/ArticlesHubClient'

const ARTICLE_SLUGS = fs
  .readdirSync(path.join(process.cwd(), 'app', 'articles'), { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(process.cwd(), 'app', 'articles', d.name, 'page.tsx')))
  .map((d) => d.name)

export const metadata = heroMetadata(
  '/articles',
  'Northern Idaho Real Estate Articles | Shirin Abplanalp',
  'Real estate insights, market updates, and Northern Idaho lifestyle guides from Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate.',
  lakeHouseCard,
)

const jsonLdCollection = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${BASE_URL}/articles`,
  url: `${BASE_URL}/articles`,
  name: 'Northern Idaho Real Estate Articles',
  description:
    'Real estate insights, market updates, and Northern Idaho lifestyle guides from Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate.',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': BUSINESS_ID },
  publisher: BRAND_PUBLISHER_STUB,
  breadcrumb: { '@id': `${BASE_URL}/articles#breadcrumb` },
  inLanguage: 'en-US',
  hasPart: ARTICLE_SLUGS.map((slug) => ({
    '@id': `${BASE_URL}/articles/${slug}#article`,
  })),
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${BASE_URL}/articles#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: `${BASE_URL}/articles` },
  ],
}

export default function ArticlesPage() {
  return (
    <div className="ed-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      {/* Editorial Forest-Green Hero with Shirin Portrait */}
      <section className="ed-forest-hero" aria-labelledby="articles-page-title">
        <div className="ed-hero-backdrop" aria-hidden="true" />
        <div className="ed-container ed-hero-grid">
          <div className="ed-hero-left">
            <div>
              <p className="ed-eyebrow ed-eyebrow-light">Insights &amp; Field Notes</p>
              <h1 id="articles-page-title">
                North Idaho <em>real estate,</em>
                <br />
                honestly explained.
              </h1>
              <p className="ed-hero-lead">
                No recycled brokerage fluff. Just clear, local perspective on neighborhoods, pricing, relocation timing, and what life actually feels like across Kootenai and Bonner County.
              </p>
            </div>
            <dl className="ed-hero-metrics" aria-label="Library overview">
              <div>
                <dt>Local Guides</dt>
                <dd>{ARTICLES_INDEX.length}</dd>
              </div>
              <div>
                <dt>Counties Covered</dt>
                <dd>2</dd>
              </div>
              <div>
                <dt>Updated For</dt>
                <dd>2026</dd>
              </div>
            </dl>
          </div>

          <aside className="ed-portrait-card" aria-label="About the author">
            <div className="ed-portrait-frame">
              <Image src="/images/shirin-portrait-2026.png" alt="Shirin Abplanalp, North Idaho real estate advisor" fill sizes="(max-width: 960px) 320px, 380px" preload />
            </div>
            <div className="ed-portrait-caption">
              <div>
                <p className="ed-portrait-kicker">Written by</p>
                <p className="ed-portrait-name">Shirin Abplanalp</p>
              </div>
              <span className="ed-portrait-sig" aria-hidden="true">Shirin</span>
            </div>
          </aside>
        </div>
      </section>

      {/* Flagship Start Here 50/50 Split */}
      <section className="ed-featured-split" aria-labelledby="featured-title">
        <div className="ed-featured-media">
          <Image src="/images/field-guide/lake-house-editorial-4k.webp" alt="A sunlit architectural home framed by pines in North Idaho" fill sizes="(max-width: 960px) 100vw, 50vw" />
          <span className="ed-media-caption">Coeur d’Alene &amp; Kootenai County</span>
        </div>
        <div className="ed-featured-copy">
          <p className="ed-eyebrow">Start Here · Essential Reading</p>
          <h2 id="featured-title">
            Buying a Home in North Idaho <em>from Out of State.</em>
          </h2>
          <p className="ed-featured-excerpt">
            You can buy here before you ever move — tours, offer, even closing, from another state. The honest step-by-step: financing, remote video tours, wells and septic, private roads and snow, the RE-21 offer, and a mail-away or online-notary closing.
          </p>
          <div className="ed-featured-meta">
            <span>Relocation &amp; Buyer Guide</span>
            <span aria-hidden="true">·</span>
            <span>16 min read</span>
            <span aria-hidden="true">·</span>
            <span>Updated 2026</span>
          </div>
          <div className="ed-featured-actions">
            <Link className="ed-btn-pine" href="/articles/buying-north-idaho-home-from-out-of-state">
              Read the Guide <span aria-hidden="true">→</span>
            </Link>
            <Link className="ed-link-underlined" href="/relocating-to-north-idaho">
              Complete Relocation Hub <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <ArticlesHubClient articles={ARTICLES_INDEX} />

      {/* Full-Bleed Sunset Closing Band */}
      <section className="ed-closing-band" aria-labelledby="articles-closing-title">
        <Image className="ed-closing-photo" src="/images/field-guide/sunset-marina-clear-2048.webp" alt="Calm sunset reflection over a North Idaho lake marina" fill sizes="100vw" />
        <div className="ed-closing-scrim" aria-hidden="true" />
        <div className="ed-container">
          <div className="ed-closing-inner">
            <p className="ed-eyebrow ed-eyebrow-light">Personal Guidance</p>
            <h2 id="articles-closing-title">
              Have a question you didn’t see <em>here?</em>
            </h2>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.72, color: 'rgba(247,244,238,0.84)' }}>
              Every move has its own timing, numbers, and trade-offs. Reach out directly — no pressure, no automated drip sequences, just an honest local conversation.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
              <Link className="ed-btn-alabaster" href="/contact">
                Let’s talk about your move <span aria-hidden="true">↗</span>
              </Link>
              <span className="ed-signature" aria-hidden="true">Shirin</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
