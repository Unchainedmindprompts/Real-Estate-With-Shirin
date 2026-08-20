import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'

const ARTICLE_SLUGS = fs
  .readdirSync(path.join(process.cwd(), 'app', 'articles'), { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(process.cwd(), 'app', 'articles', d.name, 'page.tsx')))
  .map((d) => d.name)

export const metadata: Metadata = {
  title: 'Northern Idaho Real Estate Articles | Shirin Abplanalp',
  description:
    'Real estate insights, market updates, and Northern Idaho lifestyle guides from Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate.',
  alternates: {
    canonical: `${BASE_URL}/articles`,
  },
}

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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/north-idaho-lake-hero.webp"
            alt="Northern Idaho landscape"
            fill
            priority
            className="object-cover"
            
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-3xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>INSIGHTS &amp; GUIDES</p>
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
            North Idaho Real Estate Insights
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#E8DDD0' }}>
            Market updates, neighborhood guides, and honest advice for buyers, sellers, and anyone considering a move to North Idaho.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
          {/* PILLAR — Relocating to North Idaho — May 2026 */}
          <Link
            href="/relocating-to-north-idaho"
            className="block group rounded-sm transition-colors duration-200"
            style={{ border: '2px solid #C4842A', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                Complete Relocation Guide
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>18 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#1C1A17', backgroundColor: '#C4842A', padding: '2px 10px', borderRadius: '2px' }}>
                Start Here
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              Relocating to North Idaho: The Complete Local Guide for Out-of-State Buyers
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              The hub for everything below &mdash; costs, taxes, the five towns, schools, healthcare, weather, commutes, and the out-of-state buying process, all in one place. The right starting point if you&rsquo;re still building the picture from a distance.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>May 31, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Open the Guide &rarr;</span>
            </div>
          </Link>

          {/* Buyer Guide — Buy Now or Wait — August 2026 */}
          <Link
            href="/articles/buying-north-idaho-buy-now-or-wait"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                Buyer Guide
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>13 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New &mdash; August 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              Buying a Home in North Idaho in 2026: Should You Buy Now, Wait for Rates, or Look Somewhere Else?
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              What $500K actually buys in Coeur d&rsquo;Alene vs Post Falls, whether waiting for lower rates pays, how builder incentives compare to price cuts, and what acreage due diligence really involves.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>August 19, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article &rarr;</span>
            </div>
          </Link>

          {/* Buyer Guide — Buying From Out of State — July 2026 */}
          <Link
            href="/articles/buying-north-idaho-home-from-out-of-state"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                North Idaho Buyer Guides
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>16 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New &mdash; July 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              Buying a Home in North Idaho from Out of State: A Step-by-Step Guide
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              You can buy here before you ever move &mdash; tours, offer, even closing, from another state. The honest step-by-step: financing, remote video tours, wells and septic, private roads and snow, the RE-21 offer, and a mail-away or online-notary closing.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>July 18, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article &rarr;</span>
            </div>
          </Link>

          {/* When to Move — Month-by-Month Buyer Guide — June 2026 */}
          <Link
            href="/articles/when-to-move-coeur-dalene-month-by-month-buyer-guide"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                North Idaho Buyer Guides
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>18 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New &mdash; June 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              When to Move to Coeur d&apos;Alene: A Month-by-Month Honest Guide for Buyers
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              The month you arrive shapes your first year here. An honest local read on what each season feels like, what it does to the market, and how to time your move so North Idaho reveals itself in the right order.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>June 10, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article &rarr;</span>
            </div>
          </Link>


          {/* Geography — Coeur d'Alene–Post Falls Corridor — June 2026 */}
          <Link
            href="/articles/north-idaho-geographic-jackpot-coeur-dalene-post-falls-corridor"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                North Idaho Buyer Guides
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>14 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New &mdash; June 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              The Geographic Jackpot: Why North Idaho&apos;s Coeur d&apos;Alene&ndash;Post Falls Corridor Is So Hard to Beat
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              Four mountain ranges, four major lakes, three rivers, and a major airport &mdash; all in reach of downtown Coeur d&apos;Alene. The geography that keeps pulling relocation buyers here, explained.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>June 10, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article &rarr;</span>
            </div>
          </Link>

          {/* Announcement — Joining BHHS Jacklin Real Estate — June 2026 */}
          <Link
            href="/articles/why-honored-joining-berkshire-hathaway-jacklin-real-estate"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                Announcement
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>12 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New &mdash; June 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              Why I&apos;m Honored to Be Joining Berkshire Hathaway HomeServices Jacklin Real Estate
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              The three layers behind this brokerage move &mdash; the Berkshire Hathaway global network, the Jacklin family&apos;s century-long North Idaho legacy, and what &ldquo;local fold&rdquo; actually means for relocation buyers.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>June 2, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article &rarr;</span>
            </div>
          </Link>

          {/* Relocation Guide — Moving to North Idaho — May 2026 */}
          <Link
            href="/articles/moving-to-north-idaho-cheapest-places-migration-best-small-towns"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                Relocation Guide
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>14 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New — May 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              The Honest Answer About Moving to North Idaho: What&apos;s Cheap, What&apos;s Not, and Why People Keep Coming
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              The real version — backed by Census data, U-Haul migration numbers, and Zillow values — of the four questions buyers ask every week: where&apos;s cheapest, why people are coming, and the best small towns ranked by what you&apos;re optimizing for.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>May 27, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article →</span>
            </div>
          </Link>

          {/* Senior Real Estate — Trutina at North Place — May 2026 */}
          <Link
            href="/articles/trutina-at-north-place-senior-community-post-falls-buyer-guide"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                Senior Real Estate
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>14 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New — May 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              Trutina at North Place: Why This Might Be the Best Senior Location in North Idaho
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              A local REALTOR&apos;s guide to Greenstone&apos;s new 55+ community in Post Falls — the price range, the new hospital being built minutes away, the lowest snow in North Idaho, and why you want your own agent in new construction.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>May 25, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article →</span>
            </div>
          </Link>

          {/* North Idaho Buyer Guides — Bridge Financing — May 2026 */}
          <Link
            href="/articles/buying-north-idaho-home-before-selling-current-bridge-financing-options"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                North Idaho Buyer Guides
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>13 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New — May 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              You Found Your North Idaho Dream Home — But You Still Have a House to Sell
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              Seven real ways to buy here before selling there — the 60-day IRA rollover, 401(k) loans, bridge loans, HELOCs, recasts, sale-leasebacks, and contingent offers. What works, what doesn&apos;t, and what the IRS actually says.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>May 23, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article →</span>
            </div>
          </Link>

          {/* North Idaho Buyer Guides — City Comparison — May 2026 */}
          <Link
            href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                North Idaho Buyer Guides
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>15 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New — May 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              Coeur d&apos;Alene vs Post Falls vs Hayden vs Rathdrum vs Sandpoint: The Honest Comparison
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              Five North Idaho cities, one honest comparison — home prices, schools, commutes, snow, taxes, and the things people only tell you after closing. Includes a side-by-side data table and an honest pick.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>May 23, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article →</span>
            </div>
          </Link>

          {/* North Idaho Buyer Guides — NAR Settlement — May 2026 */}
          <Link
            href="/articles/buying-home-without-agent-nar-settlement-north-idaho"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                North Idaho Buyer Guides
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>16 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New — May 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              Buying a Home Without a Buyer&apos;s Agent in 2026: What North Idaho Buyers Need to Know After the NAR Settlement
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              88% of buyers still use an agent — but unrepresented buyer share is rising post-settlement. What the August 2024 rule changes actually mean, why the open house exemption is fueling most of the behavior, and what solo buyers risk losing in real dollars on a North Idaho transaction.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>May 22, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article →</span>
            </div>
          </Link>

          {/* North Idaho Buyer Guides — Commute Times — May 2026 */}
          <Link
            href="/articles/north-idaho-to-spokane-commute-times"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                North Idaho Buyer Guides
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>12 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New — May 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              Commute Times from North Idaho to Spokane: A Town-by-Town Guide with Real Traffic Data
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              Post Falls is 25–30 minutes off-peak. Coeur d&apos;Alene is 33 minutes, 40 at AM peak. Sandpoint is 90–110. ITD identifies the 5-mile SH-41 to US-95 stretch as the most congested segment in the panhandle — with construction through 2029.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>May 21, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article →</span>
            </div>
          </Link>

          {/* North Idaho Buyer Guides — Snowiest Cities Ranking — May 2026 */}
          <Link
            href="/articles/snowiest-cities-north-idaho-ranking"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                North Idaho Buyer Guides
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>12 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New — May 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              Snowiest Cities in North Idaho: A Data-Backed Ranking
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              Post Falls averages 40 inches a year. Priest Lake averages 120. A town-by-town ranking of 10 North Idaho communities — with real estate implications for buyers in every snow zone.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>May 27, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article →</span>
            </div>
          </Link>

          {/* Senior Real Estate — Healthcare Guide — May 2026 */}
          <Link
            href="/articles/north-idaho-healthcare-kootenai-spokane"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                Senior Real Estate
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>14 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New — May 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              Navigating Healthcare in Kootenai County: Regional Care vs. Spokane Commutes
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              Kootenai Health holds the only ACS-verified Level II Trauma designation in the region. For most retirees, the Spokane drive is reserved for a short list of subspecialties — not day-to-day healthcare reality.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>May 23, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article →</span>
            </div>
          </Link>

          {/* Relocation Guide — North Idaho Schools — May 2026 */}
          <Link
            href="/articles/north-idaho-school-districts-open-enrollment-charters"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{
              border: '1px solid #3A3530',
              backgroundColor: '#2A2722',
              padding: '40px 40px',
            }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C4842A',
                }}
              >
                Relocation Guide
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>
                15 min read
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: '#FAFAF8',
                  backgroundColor: '#C4842A',
                  padding: '2px 8px',
                  borderRadius: '2px',
                }}
              >
                New — May 2026
              </span>
            </div>
            <h2
              className="mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(22px, 3vw, 28px)',
                lineHeight: 1.25,
                color: '#FAFAF8',
              }}
            >
              A Parent&apos;s Guide to North Idaho Education: Open-Enrollment, Charter Paths, and District Boundaries
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              How Coeur d&apos;Alene 271, Post Falls 273, and Lakeland 272 compare, how Idaho&apos;s 2023 open enrollment law actually works, and what charter and private school options exist in Kootenai County.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>
                May 21, 2026
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#C4842A',
                }}
              >
                Read Article →
              </span>
            </div>
          </Link>

          {/* North Idaho Buyer Guides — Micro-Climates — May 2026 */}
          <Link
            href="/articles/north-idaho-microclimates-rathdrum-prairie-sandpoint-snow"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{
              border: '1px solid #3A3530',
              backgroundColor: '#2A2722',
              padding: '40px 40px',
            }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C4842A',
                }}
              >
                North Idaho Buyer Guides
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>
                14 min read
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: '#FAFAF8',
                  backgroundColor: '#C4842A',
                  padding: '2px 8px',
                  borderRadius: '2px',
                }}
              >
                New — May 2026
              </span>
            </div>
            <h2
              className="mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(22px, 3vw, 28px)',
                lineHeight: 1.25,
                color: '#FAFAF8',
              }}
            >
              North Idaho Micro-Climates: Rathdrum Prairie vs. Sandpoint Snowfall Realities
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              40 inches or 90 inches — it depends entirely on which side of the lake you land on. An honest breakdown of what winter actually looks like in Post Falls, Rathdrum, Hayden, and Sandpoint, and what equipment each one actually requires.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>
                May 17, 2026
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#C4842A',
                }}
              >
                Read Article →
              </span>
            </div>
          </Link>

          {/* North Idaho Buyer Guides — Property Taxes — May 2026 */}
          <Link
            href="/articles/north-idaho-property-taxes-county-comparison"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                North Idaho Buyer Guides
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>13 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New — May 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              Property Taxes in North Idaho: Kootenai vs Bonner vs Boundary vs Shoshone vs Benewah (2025 Data)
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              Official 2025 Idaho State Tax Commission rates for all five panhandle counties — plus the $125,000 homeowner&apos;s exemption, the Circuit Breaker program for seniors, and the Disabled Veterans benefit explained.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>May 20, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article →</span>
            </div>
          </Link>

          {/* North Idaho Buyer Guides — Cost of Living — May 2026 */}
          <Link
            href="/articles/north-idaho-cost-of-living-comparison"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722', padding: '40px 40px' }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C4842A' }}>
                North Idaho Buyer Guides
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>14 min read</span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '2px 8px', borderRadius: '2px' }}>
                New — May 2026
              </span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.25, color: '#FAFAF8' }}>
              North Idaho Cost of Living: BEA Data Comparison vs. Seattle, Boise, and California (2024)
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              The Coeur d&apos;Alene MSA sits at 97.5 on the BEA&apos;s Regional Price Parity index — 2.5% below the national average, 15.5 points below Seattle. A category-by-category breakdown using official BEA, USDA, and EIA data.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>May 20, 2026</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#C4842A' }}>Read Article →</span>
            </div>
          </Link>

          {/* North Idaho Buyer Guides — Prairie Infrastructure — May 2026 */}
          <Link
            href="/articles/buying-property-prairie-wells-septic-roads"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{
              border: '1px solid #3A3530',
              backgroundColor: '#2A2722',
              padding: '40px 40px',
            }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C4842A',
                }}
              >
                North Idaho Buyer Guides
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>
                12 min read
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: '#FAFAF8',
                  backgroundColor: '#C4842A',
                  padding: '2px 8px',
                  borderRadius: '2px',
                }}
              >
                New — May 2026
              </span>
            </div>
            <h2
              className="mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(22px, 3vw, 28px)',
                lineHeight: 1.25,
                color: '#FAFAF8',
              }}
            >
              Buying Property on the Prairie: Well Depths, Septic Systems, and County Road Rights-of-Way
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              The infrastructure costs most relocation buyers never see coming — what it actually costs to drill a well, permit a septic system, and figure out who plows the road in February.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>
                May 19, 2026
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#C4842A',
                }}
              >
                Read Article →
              </span>
            </div>
          </Link>

          {/* Buyer Resources — Agent Accountability — May 2026 */}
          <Link
            href="/articles/why-home-buyers-feel-like-theyre-doing-their-realtors-job"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{
              border: '1px solid #3A3530',
              backgroundColor: '#2A2722',
              padding: '40px 40px',
            }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C4842A',
                }}
              >
                Buyer Resources
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>
                8 min read
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: '#FAFAF8',
                  backgroundColor: '#C4842A',
                  padding: '2px 8px',
                  borderRadius: '2px',
                }}
              >
                New — May 2026
              </span>
            </div>
            <h2
              className="mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(22px, 3vw, 28px)',
                lineHeight: 1.25,
                color: '#FAFAF8',
              }}
            >
              Why Do Home Buyers Feel Like They&apos;re Doing Their Realtor&apos;s Job — And What a Great Agent Actually Does
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              Buyers are finding their own listings, chasing their own agents, and wondering why they hired a professional. Here is what a great buyer&apos;s agent actually does — and how to know if you have the wrong one.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>
                May 15, 2026
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#C4842A',
                  letterSpacing: '0.04em',
                }}
              >
                Read Article →
              </span>
            </div>
          </Link>

          {/* Senior Real Estate — SRES® Guide — May 2026 */}
          <Link
            href="/articles/sres-designation-real-estate-after-55-north-idaho"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{
              border: '1px solid #3A3530',
              backgroundColor: '#2A2722',
              padding: '40px 40px',
            }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C4842A',
                }}
              >
                Senior Real Estate
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>
                12 min read
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: '#FAFAF8',
                  backgroundColor: '#C4842A',
                  padding: '2px 8px',
                  borderRadius: '2px',
                }}
              >
                New — May 2026
              </span>
            </div>
            <h2
              className="mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(22px, 3vw, 28px)',
                lineHeight: 1.25,
                color: '#FAFAF8',
              }}
            >
              Why I Chose SRES®: A Specialist&apos;s Guide to Real Estate After 55 in North Idaho
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              What the SRES® designation means, why real estate after 55 is genuinely different, and what families navigating a North Idaho relocation or transition should know.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>
                May 4, 2026
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#C4842A',
                  letterSpacing: '0.04em',
                }}
              >
                Read Article →
              </span>
            </div>
          </Link>

          {/* Relocation Guide — Spokane vs CDA — May 2026 */}
          <Link
            href="/articles/spokane-vs-coeur-dalene-which-is-right-for-you"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{
              border: '1px solid #3A3530',
              backgroundColor: '#2A2722',
              padding: '40px 40px',
            }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C4842A',
                }}
              >
                Relocation Guide
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>
                9 min read
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: '#FAFAF8',
                  backgroundColor: '#C4842A',
                  padding: '2px 8px',
                  borderRadius: '2px',
                }}
              >
                New — May 2026
              </span>
            </div>
            <h2
              className="mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(22px, 3vw, 28px)',
                lineHeight: 1.25,
                color: '#FAFAF8',
              }}
            >
              Spokane vs. Coeur d&apos;Alene: Why So Many Buyers End Up on the Idaho Side
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              Thinking about the Inland Northwest but not sure which side of the border to land on? An honest comparison of home prices, taxes, lifestyle, and the geography most agents won&apos;t explain.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>
                May 3, 2026
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#C4842A',
                  letterSpacing: '0.04em',
                }}
              >
                Read Article →
              </span>
            </div>
          </Link>

          {/* Market Report — Post Falls Housing Market 2026 */}
          <Link
            href="/articles/post-falls-idaho-housing-market-2026"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{
              border: '1px solid #3A3530',
              backgroundColor: '#2A2722',
              padding: '40px 40px',
            }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C4842A',
                }}
              >
                Market Reports
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>
                8 min read
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: '#FAFAF8',
                  backgroundColor: '#C4842A',
                  padding: '2px 8px',
                  borderRadius: '2px',
                }}
              >
                Updated March 2026
              </span>
            </div>
            <h2
              className="mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(22px, 3vw, 28px)',
                lineHeight: 1.25,
                color: '#FAFAF8',
              }}
            >
              Post Falls Idaho Housing Market 2026 — What Buyers and Sellers Need to Know
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              Median home prices, days on market, inventory levels, and what to expect for the rest of the year. Current data as of March 2026.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>
                March 18, 2026
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#C4842A',
                  letterSpacing: '0.04em',
                }}
              >
                Read Article →
              </span>
            </div>
          </Link>

          {/* Buyer Resources — How Much Do Homes Cost */}
          <Link
            href="/articles/how-much-do-homes-cost-post-falls-idaho"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{
              border: '1px solid #3A3530',
              backgroundColor: '#2A2722',
              padding: '40px 40px',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C4842A',
                }}
              >
                Buyer Resources
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>
                9 min read
              </span>
            </div>
            <h2
              className="mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(22px, 3vw, 28px)',
                lineHeight: 1.25,
                color: '#FAFAF8',
              }}
            >
              How Much Do Homes Cost in Post Falls, Idaho? (2026 Buyer&apos;s Guide)
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              A complete price breakdown by budget — from $300K to $650K+ — plus how Post Falls compares to what you&apos;d pay in California, Washington, and Oregon.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>
                March 18, 2026
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#C4842A',
                  letterSpacing: '0.04em',
                }}
              >
                Read Article →
              </span>
            </div>
          </Link>

          {/* Market Analysis — Is It a Good Time to Buy */}
          <Link
            href="/articles/is-it-a-good-time-to-buy-home-northern-idaho"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{
              border: '1px solid #3A3530',
              backgroundColor: '#2A2722',
              padding: '40px 40px',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C4842A',
                }}
              >
                Market Analysis
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>
                10 min read
              </span>
            </div>
            <h2
              className="mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(22px, 3vw, 28px)',
                lineHeight: 1.25,
                color: '#FAFAF8',
              }}
            >
              Is It a Good Time to Buy a Home in Northern Idaho? (Honest 2026 Answer)
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              Data-backed analysis of buyer conditions, mortgage rates, seller leverage, and who should move now versus wait — from a licensed Northern Idaho REALTOR®.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>
                March 18, 2026
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#C4842A',
                  letterSpacing: '0.04em',
                }}
              >
                Read Article →
              </span>
            </div>
          </Link>

          {/* Relocation Guide — Best Places to Live in North Idaho for Californians */}
          {/* April 2026 */}
          <Link
            href="/articles/best-places-to-live-north-idaho-leaving-california"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{
              border: '1px solid #3A3530',
              backgroundColor: '#2A2722',
              padding: '40px 40px',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C4842A',
                }}
              >
                Relocation Guide
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>
                9 min read
              </span>
            </div>
            <h2
              className="mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(22px, 3vw, 28px)',
                lineHeight: 1.25,
                color: '#FAFAF8',
              }}
            >
              Best Places to Live in North Idaho for People Leaving California
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              A 2026 relocation guide for Californians moving to North Idaho. Compare Coeur d&apos;Alene, Post Falls, Hayden, and Sandpoint for cost, lifestyle, taxes, and community.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>
                April 22, 2026
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#C4842A',
                  letterSpacing: '0.04em',
                }}
              >
                Read Article →
              </span>
            </div>
          </Link>

          {/* Buyer Resources — How to Find the Right Realtor */}
          <Link
            href="/articles/how-to-find-realtor-post-falls-idaho"
            className="block group rounded-sm transition-colors duration-200 hover:border-[#C4842A]"
            style={{
              border: '1px solid #3A3530',
              backgroundColor: '#2A2722',
              padding: '40px 40px',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C4842A',
                }}
              >
                Buyer Resources
              </span>
              <span style={{ color: '#9A9590', fontSize: '12px' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>
                8 min read
              </span>
            </div>
            <h2
              className="mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(22px, 3vw, 28px)',
                lineHeight: 1.25,
                color: '#FAFAF8',
              }}
            >
              How to Find the Right Realtor in Post Falls, Idaho — And What to Look for Before You Hire Anyone
            </h2>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', color: '#9A9590', lineHeight: 1.7, marginBottom: '24px' }}>
              What to look for in a Post Falls realtor, the questions worth asking before you hire anyone, and why local knowledge matters more than you think.
            </p>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#9A9590' }}>
                March 18, 2026
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#C4842A',
                  letterSpacing: '0.04em',
                }}
              >
                Read Article →
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
