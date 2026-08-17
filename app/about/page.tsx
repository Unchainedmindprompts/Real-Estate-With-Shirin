import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BASE_URL, WEBSITE_ID, AGENT_AUTHOR_STUB } from '@/lib/schema-ids'

export const metadata: Metadata = {
  title: 'About Shirin Abplanalp | North Idaho REALTOR®',
  description:
    "About Shirin Abplanalp, licensed North Idaho REALTOR® at BHHS Jacklin Real Estate. 11 years in real estate, 100+ transactions closed, 5× Top Producer.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
}

const jsonLdProfile = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${BASE_URL}/about#webpage`,
  url: `${BASE_URL}/about`,
  name: 'About Shirin Abplanalp | North Idaho REALTOR®',
  isPartOf: { '@id': WEBSITE_ID },
  mainEntity: AGENT_AUTHOR_STUB,
  breadcrumb: { '@id': `${BASE_URL}/about#breadcrumb` },
  inLanguage: 'en-US',
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${BASE_URL}/about#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE_URL}/about` },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfile) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      {/* ── 1. Hero ── */}
      <section className="relative flex items-end" style={{ minHeight: '55vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/north-idaho-lake-hero.webp"
            alt="Northern Idaho landscape"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: 'center center' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(28,18,8,0.82) 0%, rgba(28,18,8,0.28) 55%, rgba(28,18,8,0.08) 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pb-16 pt-40 w-full">
          <p className="eyebrow mb-4" style={{ color: '#C4852A' }}>ABOUT SHIRIN</p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: 'clamp(30px, 5vw, 56px)',
              lineHeight: 1.15,
              color: '#FAFAF8',
            }}
          >
            11 Years. 100+ Transactions.<br />One Move That Changed Everything.
          </h1>
        </div>
      </section>

      {/* ── 2. The Numbers ── */}
      <section className="section-padding" style={{ backgroundColor: '#F5F0E6' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-12 text-center">THE NUMBERS</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {[
              { stat: '11', label: 'Years in Real Estate' },
              { stat: '100+', label: 'Personal Transactions Closed' },
              { stat: '5×', label: 'Top Producer, Bend Premier Real Estate' },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center"
                style={{
                  backgroundColor: '#2A2722',
                  border: '1px solid #3A3530',
                  borderRadius: '4px',
                  padding: '40px 32px',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 300,
                    fontSize: 'clamp(56px, 8vw, 88px)',
                    lineHeight: 1,
                    color: '#C4852A',
                  }}
                >
                  {item.stat}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: '14px',
                    color: '#9A9590',
                    marginTop: '12px',
                    letterSpacing: '0.03em',
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto pt-10" style={{ borderTop: '1px solid #E8DDD0' }}>
            <p
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '17px',
                lineHeight: 1.8,
                color: '#5C5650',
                textAlign: 'center',
              }}
            >
              Before Shirin ever set foot in North Idaho, she had already built one of the strongest track records in Bend, Oregon real estate. Licensed since 2015, she closed over 100 personal transactions and earned Top Producer recognition at Bend Premier Real Estate for five consecutive years. That production history isn&apos;t a footnote — it&apos;s the foundation every client benefits from.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. The Story ── */}
      <section className="section-padding" style={{ backgroundColor: '#1C1A17' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Copy */}
            <div>
              <p className="eyebrow mb-4" style={{ color: '#C4852A' }}>THE STORY</p>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 600,
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  lineHeight: 1.2,
                  color: '#FAFAF8',
                }}
              >
                From Bend to North Idaho — On Purpose
              </h2>

              <div
                className="space-y-5"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '16px',
                  lineHeight: 1.8,
                  color: '#E8DDD0',
                }}
              >
                <p>
                  Bend used to be the answer. Then it became the problem.
                </p>
                <p>
                  Shirin watched it happen the way most people do — gradually, then all at once. The trails got crowded. The prices got serious. The thing that made it worth staying started feeling like a reason to leave.
                </p>
                <p>
                  She wasn&apos;t looking for somewhere cheaper. She was looking for somewhere that still had what Bend used to have — actual lake access, real mountains, a community that hadn&apos;t been discovered yet by everyone trying to escape the last place that got discovered.
                </p>
                <p>
                  North Idaho was that place. She made the move, put down roots, and hasn&apos;t looked back.
                </p>
                <p>
                  Now she helps families do the same thing. Not just find a house — find the place. The difference is that she is not guessing what North Idaho feels like from a market report. She chose it herself, with the same questions her clients are asking right now. That is not a talking point. It is just true.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  { label: 'License #', value: '1371861' },
                  { label: 'Brokerage', value: 'Berkshire Hathaway HomeServices Jacklin Real Estate' },
                  { label: 'Licensed Since', value: '2015' },
                ].map((item) => (
                  <div key={item.label} style={{ borderLeft: '3px solid #C4852A', paddingLeft: '12px' }}>
                    <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 600 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '14px', color: '#C4842A', fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 500 }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="mt-8"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#FAFAF8',
                }}
              >
                SRES® Certified · 100+ Transactions · 11 Years in Real Estate
              </p>
            </div>

            {/* Photo */}
            <div className="relative h-72 sm:h-96 lg:h-[600px]">
              <Image
                src="/images/shirin-headshot-studio.webp"
                alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate"
                fill
                className="object-cover object-top"
                style={{ borderRadius: '2px' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. What Sets Her Apart ── */}
      <section className="section-padding" style={{ backgroundColor: '#F5F0E6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHY WORK WITH SHIRIN</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#C4842A',
              }}
            >
              What Sets Her Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Preparation',
                body: "Most buyers walk into a showing hoping the agent knows what they don't. Shirin's clients walk in already knowing — the neighborhood, the comps, the contingencies, and the questions worth asking.",
              },
              {
                num: '02',
                title: 'Local Knowledge',
                body: "She didn't study North Idaho from a data sheet — she chose it. Every recommendation comes from lived experience, not a market report.",
              },
              {
                num: '03',
                title: 'Client Outcomes',
                body: "Eleven years and 100+ transactions means she has seen nearly every scenario. That experience translates into fewer surprises and better results for every client she represents.",
              },
            ].map((card) => (
              <div
                key={card.num}
                style={{
                  backgroundColor: '#2A2722',
                  border: '1px solid #3A3530',
                  borderRadius: '4px',
                  padding: '32px',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 400,
                    fontSize: '13px',
                    letterSpacing: '0.12em',
                    color: '#C4852A',
                    marginBottom: '16px',
                  }}
                >
                  {card.num}
                </p>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: 1.3,
                    color: '#C4842A',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', lineHeight: 1.7 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Service Area ── */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="eyebrow mb-6">SERVICE AREA</p>
          <p
            className="mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: 'clamp(20px, 3vw, 28px)',
              lineHeight: 1.6,
              color: '#C4842A',
              letterSpacing: '0.02em',
            }}
          >
            Post Falls · Coeur d&apos;Alene · Hayden · Rathdrum · Sandpoint · Athol · Bayview · Harrison · Wallace · Kellogg
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '14px',
              color: '#7A6652',
              letterSpacing: '0.03em',
            }}
          >
            Licensed to serve all of North Idaho — Kootenai, Bonner, and Shoshone Counties.
          </p>
        </div>
      </section>

      {/* ── 6. Credentials Block ── */}
      <section className="section-padding" style={{ backgroundColor: '#1C1208' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-10 text-center" style={{ color: '#C4852A' }}>CREDENTIALS</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'License', value: 'Licensed REALTOR®\nIdaho License #1371861' },
              { label: 'Brokerage', value: "Berkshire Hathaway HomeServices Jacklin Real Estate\nCoeur d'Alene, ID" },
              { label: 'Licensed Since', value: '2015' },
              { label: 'Recognition', value: '5× Top Producer\nBend Premier Real Estate' },
              { label: 'Experience', value: '100+ Personal\nTransactions Closed' },
              { label: 'Serving', value: 'North Idaho Buyers,\nSellers & Relocating Families' },
            ].map((item) => (
              <div
                key={item.label}
                style={{ borderLeft: '3px solid #C4852A', paddingLeft: '16px', paddingTop: '4px', paddingBottom: '4px' }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: '10px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#7A6652',
                    marginBottom: '6px',
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: '14px',
                    color: '#F5F0E6',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <section className="section-padding" style={{ backgroundColor: '#F5F0E6' }}>
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <p className="eyebrow mb-6">GET IN TOUCH</p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: 'clamp(32px, 5vw, 50px)',
              lineHeight: 1.2,
              color: '#C4842A',
            }}
          >
            Let&apos;s Start the Conversation
          </h2>
          <p
            className="mb-10"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#5C5650',
            }}
          >
            No pressure, no pitch. Whether you&apos;re buying, selling, or figuring out if North Idaho is the right move — reach out.
          </p>
          <Link
            href="/contact"
            className="inline-block text-white text-xs uppercase font-semibold rounded-sm transition-colors"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              backgroundColor: '#C4852A',
              padding: '15px 40px',
              letterSpacing: '0.1em',
            }}
          >
            Get in Touch
          </Link>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+12086607468"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '14px', color: '#7A6652' }}
            >
              (208) 660-7468
            </a>
            <span className="hidden sm:inline" style={{ color: '#C4BDB4' }}>·</span>
            <a
              href="mailto:dreamlifeinidaho@gmail.com"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '14px', color: '#7A6652' }}
            >
              dreamlifeinidaho@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
