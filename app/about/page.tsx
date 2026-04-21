import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Shirin Abplanalp | Licensed Northern Idaho Realtor · eXp Realty',
  description:
    "11 years in real estate, 100+ transactions closed, 5× Top Producer. Shirin Abplanalp is a licensed REALTOR® at eXp Realty serving Post Falls, Coeur d'Alene, and Northern Idaho.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/about',
  },
}

const jsonLdProfile = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Shirin Abplanalp',
    jobTitle: 'Licensed REALTOR®',
    description:
      "Licensed Northern Idaho realtor at eXp Realty with 11 years of experience and 100+ transactions closed. Specialising in buyer representation, seller representation, and relocation for families moving to Post Falls, Coeur d'Alene, and Kootenai County.",
    telephone: '(208) 660-7468',
    email: 'dreamlifeinidaho@gmail.com',
    url: 'https://www.realestatewithshirin.com/about',
    image: 'https://www.realestatewithshirin.com/images/realtor-headshot-outdoor.jpeg',
    worksFor: { '@type': 'Organization', name: 'eXp Realty', url: 'https://www.exprealty.com' },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      identifier: '1371861',
      recognizedBy: { '@type': 'Organization', name: 'Idaho Real Estate Commission' },
    },
    knowsAbout: [
      'Post Falls Idaho real estate',
      "Coeur d'Alene Idaho real estate",
      'Northern Idaho relocation',
      'Active family lifestyle North Idaho',
      'Kootenai County homes',
    ],
  },
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.realestatewithshirin.com/about' },
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
            src="/images/hero-home.jpeg"
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
              <div key={item.label} className="text-center">
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
                    color: '#5C5650',
                    marginTop: '8px',
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
              Before Shirin ever set foot in Northern Idaho, she had already built one of the strongest track records in Bend, Oregon real estate. Licensed since 2015, she closed over 100 personal transactions and earned Top Producer recognition at Bend Premier Real Estate for five consecutive years. That production history isn&apos;t a footnote — it&apos;s the foundation every client benefits from.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. The Story ── */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Copy */}
            <div>
              <p className="eyebrow mb-4" style={{ color: '#C4852A' }}>THE STORY</p>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 300,
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  lineHeight: 1.2,
                  color: '#1C1208',
                }}
              >
                From Bend to Northern Idaho — On Purpose
              </h2>

              <div
                className="space-y-5"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '16px',
                  lineHeight: 1.8,
                  color: '#5C5650',
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
                  Northern Idaho was that place. She made the move, put down roots, and hasn&apos;t looked back.
                </p>
                <p>
                  Now she helps families do the same thing — not just find a house, but find the place. The one that fits how they actually want to live, not just what they can afford.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  { label: 'License #', value: '1371861' },
                  { label: 'Brokerage', value: 'eXp Realty' },
                  { label: 'Licensed Since', value: '2015' },
                ].map((item) => (
                  <div key={item.label} style={{ borderLeft: '3px solid #C4852A', paddingLeft: '12px' }}>
                    <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 600 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '14px', color: '#1C1208', fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 500 }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="relative" style={{ height: '600px', minHeight: '400px' }}>
              <Image
                src="/images/shirin-abplanalp.jpg"
                alt="Shirin Abplanalp, Licensed REALTOR® at eXp Realty"
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
                color: '#1C1208',
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
                body: "Shirin does more homework before a showing than most agents do before closing. Her clients walk in knowing the neighborhood, the comps, the contingencies, and the questions to ask.",
              },
              {
                num: '02',
                title: 'Local Knowledge',
                body: "She didn't study Northern Idaho from a data sheet — she chose it. Every recommendation comes from lived experience, not a market report.",
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
                  backgroundColor: '#FAFAF8',
                  border: '1px solid #E8DDD0',
                  borderRadius: '4px',
                  padding: '32px',
                  boxShadow: '0 2px 12px rgba(28,26,23,0.06)',
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
                    color: '#1C1208',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', lineHeight: 1.7 }}>
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
              color: '#1C1208',
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
            Licensed to serve all of Northern Idaho — Kootenai, Bonner, and Shoshone Counties.
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
              { label: 'Brokerage', value: 'eXp Realty\nPost Falls, ID' },
              { label: 'Licensed Since', value: '2015' },
              { label: 'Recognition', value: '5× Top Producer\nBend Premier Real Estate' },
              { label: 'Experience', value: '100+ Personal\nTransactions Closed' },
              { label: 'Serving', value: 'Northern Idaho Buyers,\nSellers & Relocating Families' },
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
              color: '#1C1208',
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
            No pressure, no pitch. Whether you&apos;re buying, selling, or figuring out if Northern Idaho is the right move — reach out.
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
