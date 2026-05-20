import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Northern Idaho Real Estate Agent | Shirin Abplanalp · eXp Realty',
  description:
    "Shirin Abplanalp is a licensed Northern Idaho realtor with eXp Realty specializing in Post Falls, Coeur d'Alene, and Kootenai County. Helping buyers, sellers, and relocating families find their perfect home.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com',
  },
  openGraph: {
    title: 'Northern Idaho Real Estate Agent | Shirin Abplanalp · eXp Realty',
    description:
      "Licensed Northern Idaho realtor specializing in Post Falls, Coeur d'Alene, and Kootenai County. Buyers, sellers, and relocation specialists.",
    url: 'https://www.realestatewithshirin.com',
    type: 'website',
  },
}


const testimonials = [
  {
    name: 'Koval Dan',
    location: 'Buyer — Mountain View, Bend OR · Zillow',
    quote:
      "Shirin was able to help me locate the perfect house. As a first time buyer I really didn't know much about the whole process but Shirin was there to help with any concerns. She is very pro active in searching for a home for her clients. She seems to enjoy what she does. Well done, Shirin.",
    stars: 5,
  },
  {
    name: 'Verified Buyer',
    location: 'Bend, OR · Zillow',
    quote:
      "Shirin went above and beyond for us and blew us away. Her responsiveness is lightning fast and she took the time to call several counties to look into state zoning and property laws — we had no idea a realtor even did that. What we appreciated most was how genuine Shirin was. It was so apparent she cared about what was best for us. We can't recommend Shirin enough.",
    stars: 5,
  },
  {
    name: 'Jacque Martini Roberts',
    location: 'Facebook Recommendation',
    quote:
      "Shirin is an amazing real estate broker. She always goes above and beyond and she definitely knows her stuff. On a scale from 1–10, Shirin is a 10!",
    stars: 5,
  },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': ['RealEstateAgent', 'LocalBusiness'],
        '@id': 'https://www.realestatewithshirin.com/#business',
        'name': 'Shirin Abplanalp — Real Estate With Shirin',
        'description': "Shirin Abplanalp is a licensed REALTOR® at eXp Realty with 11 years of experience and 100+ transactions closed. Serving buyers, sellers, and relocating families across Northern Idaho including Post Falls, Coeur d'Alene, Hayden, Rathdrum, and Sandpoint.",
        'url': 'https://www.realestatewithshirin.com',
        'telephone': '(208) 660-7468',
        'email': 'dreamlifeinidaho@gmail.com',
        'image': 'https://www.realestatewithshirin.com/images/shirin-abplanalp.jpg',
        'address': { '@type': 'PostalAddress', 'streetAddress': '510 S Clearwater Loop, Suite 100', 'addressLocality': 'Post Falls', 'addressRegion': 'ID', 'postalCode': '83854', 'addressCountry': 'US' },
        'geo': { '@type': 'GeoCoordinates', 'latitude': 47.7182, 'longitude': -116.9516 },
        'founder': { '@id': 'https://www.realestatewithshirin.com/#agent' },
        'memberOf': { '@type': 'Organization', '@id': 'https://www.exprealty.com/#organization', 'name': 'eXp Realty', 'url': 'https://www.exprealty.com' },
        'areaServed': [
          { '@type': 'City', 'name': 'Post Falls', 'sameAs': 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': "Coeur d'Alene", 'sameAs': 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Hayden', 'sameAs': 'https://en.wikipedia.org/wiki/Hayden,_Idaho', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Rathdrum', 'sameAs': 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Sandpoint', 'sameAs': 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Athol', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Bayview', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Harrison', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Wallace', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Kellogg', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'AdministrativeArea', 'name': 'Kootenai County' },
          { '@type': 'AdministrativeArea', 'name': 'Bonner County' },
          { '@type': 'AdministrativeArea', 'name': 'Shoshone County' },
          { '@type': 'AdministrativeArea', 'name': 'North Idaho', 'alternateName': 'Northern Idaho', 'sameAs': 'https://en.wikipedia.org/wiki/Idaho_Panhandle' },
          { '@type': 'AdministrativeArea', 'name': 'Inland Northwest' },
        ],
        'knowsAbout': ['Post Falls real estate', "Coeur d'Alene real estate", 'Northern Idaho relocation', 'Kootenai County homes', 'Buyer representation', 'Seller representation', 'Relocation', 'Idaho real estate market', 'Active family relocation to Northern Idaho'],
        'slogan': 'Your Northern Idaho Real Estate Advisor',
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': 'https://www.realestatewithshirin.com/#agent',
        'name': 'Shirin Abplanalp',
        'jobTitle': 'Licensed REALTOR®',
        'telephone': '(208) 660-7468',
        'email': 'dreamlifeinidaho@gmail.com',
        'url': 'https://www.realestatewithshirin.com/about',
        'image': 'https://www.realestatewithshirin.com/images/shirin-abplanalp.jpg',
        'worksFor': { '@type': 'Organization', '@id': 'https://www.exprealty.com/#organization', 'name': 'eXp Realty', 'url': 'https://www.exprealty.com', 'sameAs': 'https://en.wikipedia.org/wiki/EXp_World_Holdings' },
        'memberOf': [
          { '@type': 'Organization', 'name': 'National Association of REALTORS®', 'url': 'https://www.nar.realtor', 'sameAs': 'https://en.wikipedia.org/wiki/National_Association_of_Realtors' },
          { '@type': 'Organization', 'name': "Coeur d'Alene Association of REALTORS®", 'url': 'https://cdarealtors.com' },
        ],
        'hasCredential': [
          { '@type': 'EducationalOccupationalCredential', 'credentialCategory': 'Real Estate License', 'identifier': '1371861', 'recognizedBy': { '@type': 'GovernmentOrganization', 'name': 'Idaho Real Estate Commission', 'url': 'https://irec.idaho.gov' } },
          { '@type': 'EducationalOccupationalCredential', 'credentialCategory': 'Professional Designation', 'name': 'Seniors Real Estate Specialist®', 'abbreviation': 'SRES®', 'recognizedBy': { '@type': 'Organization', 'name': 'National Association of REALTORS®', 'url': 'https://www.nar.realtor', 'sameAs': 'https://en.wikipedia.org/wiki/National_Association_of_Realtors' } },
          { '@type': 'EducationalOccupationalCredential', 'credentialCategory': 'Award', 'name': '5× Top Producer', 'recognizedBy': { '@type': 'Organization', 'name': 'Bend Premier Real Estate' } },
        ],
        'knowsAbout': ['Post Falls Idaho real estate', "Coeur d'Alene Idaho real estate", 'Northern Idaho relocation', 'Kootenai County homes for sale', 'Buyer representation', 'Seller representation', 'Relocation', 'North Idaho lifestyle', 'Out-of-state relocation real estate', 'Seniors Real Estate Specialist services', 'First-time home buyers Idaho', 'Kootenai County neighborhoods'],
        'address': { '@type': 'PostalAddress', 'addressLocality': 'Post Falls', 'addressRegion': 'ID', 'addressCountry': 'US' },
        'sameAs': [
          'https://www.zillow.com/profile/dreamlifeinidaho',
          'https://www.realtor.com/realestateagents/6852257644eab0a63cfd80af',
          'https://www.homes.com/real-estate-agents/shirin-abplanalp/j7j2jr7/',
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://www.realestatewithshirin.com/#website',
        'name': 'Real Estate With Shirin',
        'url': 'https://www.realestatewithshirin.com',
        'description': "Northern Idaho real estate with Shirin Abplanalp, licensed REALTOR® at eXp Realty serving Post Falls, Coeur d'Alene, Hayden, and Kootenai County.",
        'publisher': { '@id': 'https://www.realestatewithshirin.com/#agent' },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': 'https://www.realestatewithshirin.com/#faq',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Who is the best realtor in Post Falls Idaho?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Shirin Abplanalp is a licensed REALTOR® at eXp Realty serving Post Falls, Coeur d'Alene, and Northern Idaho. With 11 years of experience, 100+ closed transactions, and firsthand relocation experience from Bend, Oregon to Post Falls, Shirin specializes in helping buyers, sellers, and relocating families navigate the North Idaho real estate market." } },
          { '@type': 'Question', 'name': 'What areas does Shirin Abplanalp serve in Northern Idaho?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Shirin Abplanalp serves buyers and sellers across Northern Idaho including Post Falls, Coeur d'Alene, Hayden, Rathdrum, Sandpoint, Athol, Bayview, Harrison, Wallace, and Kellogg, as well as Kootenai County, Bonner County, and Shoshone County." } },
          { '@type': 'Question', 'name': 'Is Shirin Abplanalp a licensed realtor?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Shirin Abplanalp holds Idaho Real Estate License #1371861 and is affiliated with eXp Realty. She is a 5× Top Producer with 11 years of real estate experience and 100+ closed transactions.' } },
          { '@type': 'Question', 'name': 'Does Shirin Abplanalp help with relocation to North Idaho?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Shirin Abplanalp relocated to Post Falls, Idaho herself after years in Bend, Oregon, and specializes in helping families make the same move. She has firsthand knowledge of what it takes to relocate to Northern Idaho and helps clients understand neighborhoods, lifestyle, and market conditions before making their move.' } },
          { '@type': 'Question', 'name': 'What is the real estate market like in Post Falls Idaho?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Post Falls is one of Northern Idaho's fastest-growing communities, offering affordable home prices compared to larger Pacific Northwest markets, strong community feel, and access to lakes, mountains, and outdoor recreation within 60 minutes. Shirin Abplanalp provides current market analysis for buyers and sellers in Post Falls and surrounding Kootenai County communities." } },
        ],
      })}} />

      {/* ── Hero — full-bleed image ── */}
      <section className="relative overflow-hidden w-full" style={{ height: '100svh' }}>
        <Image
          src="/images/hero-consultation.webp"
          alt="North Idaho real estate consultation"
          fill
          className="object-cover object-[57%_center] lg:object-center"
          priority
          sizes="100vw"
        />

        {/* Mobile gradient — full-width bottom fade */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 40%, transparent 68%)',
          }}
        />

        {/* Desktop gradient — bottom-left diagonal only */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background: 'linear-gradient(to top right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 30%, transparent 55%)',
          }}
        />

        {/* Text content */}
        <div
          className="absolute left-4 right-4 md:right-auto md:left-16"
          style={{
            bottom: 'clamp(28px, 5vh, 64px)',
            maxWidth: '560px',
            zIndex: 10,
          }}
        >
          {/* Line 1 — eyebrow */}
          <p
            className="mb-3"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C4842A',
            }}
          >
            POST FALLS · COEUR D&apos;ALENE · NORTH IDAHO
          </p>

          {/* Lines 2 + 3 — headline */}
          <h1
            className="mb-0"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(30px, 5vw, 66px)',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            <span style={{ color: '#FFFFFF', display: 'block' }}>I Made This Move.</span>
            <em style={{ color: '#C4842A', fontStyle: 'italic', display: 'block' }}>Now I Help Others Make Theirs.</em>
          </h1>

          {/* Line 4 — credential line */}
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '13px',
              fontWeight: 400,
              color: '#FFFFFF',
              marginTop: '14px',
              marginBottom: '2px',
            }}
          >
            Licensed REALTOR® · eXp Realty · North Idaho
          </p>

          {/* Line 5 — trust signals */}
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '12px',
              fontWeight: 400,
              color: '#C4842A',
              letterSpacing: '0.04em',
            }}
          >
            11 Years · 100+ Transactions · 5× Top Producer
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-3 mt-5">
            <Link
              href="/contact"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                backgroundColor: '#C4842A',
                color: '#FFFFFF',
                padding: '12px 24px',
                borderRadius: '4px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/about"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                padding: '12px 24px',
                borderRadius: '4px',
                border: '1.5px solid rgba(255,255,255,0.75)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              My Story
            </Link>
          </div>
        </div>
      </section>

      {/* ── 1. How I Can Help ── */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">REVIEWS</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              What Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  backgroundColor: '#2A2722',
                  border: '1px solid #3A3530',
                  borderRadius: '4px',
                  padding: '32px',
                }}
              >
                <div className="flex gap-1 mb-5" aria-label={`${t.stars} out of 5 stars`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#C4842A" aria-hidden="true">
                      <path d="M8 1l1.85 3.75L14 5.35l-3 2.92.71 4.13L8 10.3l-3.71 2.1.71-4.13-3-2.92 4.15-.6z" />
                    </svg>
                  ))}
                </div>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '19px',
                    lineHeight: 1.55,
                    color: '#F5EFE6',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 600, fontSize: '14px', color: '#FAFAF8' }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590', marginTop: '2px' }}>
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. How I Can Help ── */}
      <section className="section-padding" style={{ backgroundColor: '#1C1A17' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>HOW I CAN HELP</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#FAFAF8',
              }}
            >
              Whether You&apos;re Buying, Selling, or Relocating
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Buyers',
                body: 'Finding the right home in the right neighborhood. Local market knowledge that goes beyond the listing.',
                href: '/buyers',
                linkText: 'Buyer Services',
              },
              {
                title: 'Sellers',
                body: 'Strategic pricing, professional presentation, and a network that moves homes.',
                href: '/sellers',
                linkText: 'Seller Services',
              },
              {
                title: 'Relocating Families',
                body: 'I made this move myself. I know what it takes to get here and love it from day one.',
                href: '/about',
                linkText: 'My Story',
              },
              {
                title: 'Seniors & 55+',
                body: 'As an SRES® specialist, Shirin understands the unique financial and lifestyle decisions that come with buying or selling later in life.',
                href: '/articles/sres-designation-real-estate-after-55-north-idaho',
                linkText: 'Learn About SRES®',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: '#2A2722',
                  border: '1px solid #3A3530',
                  borderRadius: '4px',
                  padding: '32px',
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: 1.4,
                    color: '#FAFAF8',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="mb-6"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '16px', lineHeight: 1.6, color: '#9A9590' }}
                >
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: '#C4842A', fontFamily: "'DM Sans', system-ui, sans-serif", letterSpacing: '0.08em' }}
                >
                  {card.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Agent Intro ── */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Photo */}
            <div
              className="order-2 lg:order-1 relative h-72 sm:h-96 lg:h-[600px]"
            >
              <Image
                src="/images/shirin-headshot-studio.webp"
                alt="Shirin Abplanalp, Licensed REALTOR® in Northern Idaho"
                fill
                className="object-cover object-top"
                style={{ borderRadius: '2px' }}
              />
              {/* Warm-toned inset frame */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 0 4px rgba(196,132,42,0.18)',
                  borderRadius: '2px',
                }}
              />
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>YOUR AGENT</p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 500,
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  lineHeight: 1.2,
                  color: '#1C1A17',
                }}
              >
                Shirin Abplanalp
              </h2>

              <div className="space-y-4 mb-8" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '16px', lineHeight: 1.7 }}>
                <p>
                  If you are thinking about making the move to North Idaho, you probably have more questions than answers right now. Which town. Which neighborhood. What it actually costs. What daily life looks like. Whether it is the right call.
                </p>
                <p>
                  Shirin made this exact move from Bend, Oregon — a place that was once everything North Idaho is now. She knows what you are weighing because she weighed it herself. She chose Post Falls, put down roots, and has not looked back.
                </p>
                <p>
                  Now as a licensed REALTOR® and SRES® specialist at eXp Realty, she helps buyers find the right home in the right place — and helps families navigate the transitions that do not come with a simple checklist. She will tell you the truth about a neighborhood, a price, or a property even when it is not what you want to hear. That is the only way she knows how to work.
                </p>
              </div>

              {/* Credential pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['Licensed REALTOR®', 'eXp Realty', 'Idaho License #1371861', 'SRES®'].map((cred) => (
                  <span
                    key={cred}
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#5C5650',
                      border: '1px solid #D4C4B0',
                      borderRadius: '2px',
                      padding: '5px 12px',
                      letterSpacing: '0.03em',
                      backgroundColor: '#FAFAF8',
                    }}
                  >
                    {cred}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-block text-xs uppercase font-semibold tracking-wider rounded-sm transition-colors"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  backgroundColor: '#C4842A',
                  color: '#ffffff',
                  padding: '14px 32px',
                  letterSpacing: '0.08em',
                }}
              >
                Let&apos;s Talk →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. The 60-Minute Rule ── */}
      <section className="section-padding" style={{ backgroundColor: '#1C1A17' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>THE REGION</p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#FAFAF8',
              }}
            >
              60 Minutes to Everything
            </h2>
            <p className="max-w-2xl mx-auto mb-12" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              We call it the 60-Minute Rule. From Post Falls or Coeur d&apos;Alene, you are sixty minutes from world-class skiing, pristine alpine lakes, championship mountain biking, and a genuine community that still remembers your name. The Inland Northwest packs more into an hour than most regions deliver in a day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { image: '/images/community.jpeg', title: 'Community', desc: "A real town feel — local restaurants, breweries, and neighbors who show up" },
              { image: '/images/lake-life.jpeg', title: 'Lake Life', desc: "Coeur d'Alene Lake — one of the most beautiful lakes in North America" },
              { image: '/images/skiing-action.jpeg', title: 'Skiing', desc: 'Schweitzer Mountain and Silver Mountain, both within an hour' },
              { image: '/images/golf.jpeg', title: 'Golf', desc: 'Championship courses with stunning mountain and lake views' },
            ].map((tile) => (
              <div key={tile.title} className="relative overflow-hidden rounded-none group" style={{ height: '300px' }}>
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(28,26,23,0.5), rgba(28,26,23,0.0))' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 600,
                      fontSize: '22px',
                      color: '#FAFAF8',
                      marginBottom: '4px',
                    }}
                  >
                    {tile.title}
                  </h3>
                  <p style={{ color: '#F5EFE6', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '14px' }}>
                    {tile.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. Service Areas ── */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">SERVICE AREAS</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              Where I Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: 'Post Falls', desc: "Northern Idaho's fastest-growing community", href: '/areas/post-falls-idaho' },
              { name: "Coeur d'Alene", desc: 'Lakefront living and vibrant downtown', href: '/areas/coeur-dalene-idaho' },
              { name: 'Hayden', desc: 'Family-friendly neighborhoods and great schools', href: '/areas/hayden-idaho' },
              { name: 'Rathdrum', desc: 'Small-town charm with room to grow', href: '/areas/rathdrum-idaho' },
              { name: 'Sandpoint', desc: 'Scenic mountain town on Lake Pend Oreille', href: '/areas/sandpoint-idaho' },
            ].map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="block group transition-all"
                style={{
                  backgroundColor: '#2A2722',
                  border: '1px solid #3A3530',
                  borderRadius: '4px',
                  padding: '28px 24px',
                  textDecoration: 'none',
                }}
              >
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '22px',
                    color: '#FAFAF8',
                  }}
                >
                  {area.name}
                </h3>
                <p className="mb-4 text-sm" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                  {area.desc}
                </p>
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: '#C4842A', fontFamily: "'DM Sans', system-ui, sans-serif", letterSpacing: '0.08em' }}
                >
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>READY TO MOVE FORWARD</p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 500,
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1.15,
              color: '#1C1A17',
            }}
          >
            Ready to Make Your Move?
          </h2>
          <p className="mb-10 text-base" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Whether you&apos;re buying, selling, or relocating — let&apos;s start with a conversation. No pressure, no pitch.
          </p>
          <Link
            href="/contact"
            className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm transition-colors"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              backgroundColor: '#C4842A',
              padding: '14px 36px',
              letterSpacing: '0.1em',
            }}
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
