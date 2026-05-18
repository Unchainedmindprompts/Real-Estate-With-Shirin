import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Northern Idaho Real Estate Articles | Shirin Abplanalp',
  description:
    'Real estate insights, market updates, and Northern Idaho lifestyle guides from Shirin Abplanalp, licensed realtor at eXp Realty.',
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles',
  },
}

export default function ArticlesPage() {
  return (
    <>
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
