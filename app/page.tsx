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
          { '@type': 'City', 'name': 'Post Falls', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': "Coeur d'Alene", 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Hayden', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Rathdrum', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Sandpoint', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Athol', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Bayview', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Harrison', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Wallace', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'City', 'name': 'Kellogg', 'containedInPlace': { '@type': 'State', 'name': 'Idaho' } },
          { '@type': 'AdministrativeArea', 'name': 'Kootenai County' },
          { '@type': 'AdministrativeArea', 'name': 'Bonner County' },
          { '@type': 'AdministrativeArea', 'name': 'Shoshone County' },
          { '@type': 'AdministrativeArea', 'name': 'Northern Idaho' },
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
        'worksFor': { '@type': 'Organization', '@id': 'https://www.exprealty.com/#organization', 'name': 'eXp Realty', 'url': 'https://www.exprealty.com' },
        'hasCredential': [
          { '@type': 'EducationalOccupationalCredential', 'credentialCategory': 'Real Estate License', 'identifier': '1371861', 'recognizedBy': { '@type': 'Organization', 'name': 'Idaho Real Estate Commission' } },
          { '@type': 'EducationalOccupationalCredential', 'credentialCategory': 'Award', 'name': '5× Top Producer', 'recognizedBy': { '@type': 'Organization', 'name': 'Bend Premier Real Estate' } },
        ],
        'knowsAbout': ['Post Falls Idaho real estate', "Coeur d'Alene Idaho real estate", 'Northern Idaho relocation', 'Kootenai County homes for sale', 'Buyer representation', 'Seller representation', 'Relocation', 'North Idaho lifestyle'],
        'address': { '@type': 'PostalAddress', 'addressLocality': 'Post Falls', 'addressRegion': 'ID', 'addressCountry': 'US' },
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

      {/* ── Hero — split screen ── */}
      {/*
        Full cream background. Left: text content. Right: photo as a
        contained rounded card with padding — matching the Chelsey reference.
      */}
      <section
        className="flex flex-col lg:flex-row"
        style={{ minHeight: '100svh', backgroundColor: '#F5F0E6' }}
      >

        {/* Left: text, vertically centered */}
        <div
          className="flex items-center w-full lg:w-[43%] px-8 sm:px-14 lg:px-16 xl:px-20"
          style={{ paddingTop: '96px', paddingBottom: '64px' }}
        >
          <div className="w-full">
            <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>
              POST FALLS · COEUR D&apos;ALENE · NORTH IDAHO
            </p>
            <h1
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(46px, 5.5vw, 74px)',
                lineHeight: 1.1,
                color: '#1C1A17',
              }}
            >
              I Made This Move.<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#C4842A' }}>Now I Help Others Make Theirs.</em>
            </h1>
            <p
              className="mb-2"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '17px',
                lineHeight: 1.7,
                color: '#5C5650',
              }}
            >
              Licensed REALTOR® · eXp Realty · Northern Idaho
            </p>
            <p
              className="mb-10"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '13px',
                letterSpacing: '0.06em',
                color: '#C4852A',
              }}
            >
              11 Years in Real Estate &nbsp;·&nbsp; 100+ Transactions &nbsp;·&nbsp; 5× Top Producer
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block text-center text-white text-xs uppercase font-semibold rounded-sm transition-colors"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  backgroundColor: '#C4842A',
                  padding: '15px 36px',
                  letterSpacing: '0.1em',
                }}
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/about"
                className="inline-block text-center text-xs uppercase font-semibold rounded-sm transition-colors"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  color: '#1C1A17',
                  border: '1.5px solid #1C1A17',
                  padding: '15px 36px',
                  letterSpacing: '0.1em',
                }}
              >
                My Story
              </Link>
            </div>
          </div>
        </div>

        {/* Right: photo card — inset with padding, rounded corners, full image */}
        <div
          className="w-full lg:w-[57%] flex items-center justify-center lg:justify-end"
          style={{ padding: '100px 40px 40px 16px' }}
        >
          <div
            style={{
              maxWidth: '480px',
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            {/* width/height 0 + sizes + w-full h-auto = natural proportions, no crop */}
            <Image
              src="/images/shirin-abplanalp.jpg"
              alt="Shirin Abplanalp, licensed Northern Idaho REALTOR®"
              width={0}
              height={0}
              sizes="(max-width: 1024px) 100vw, 57vw"
              priority
              className="w-full h-auto block"
            />
          </div>
        </div>

      </section>

      {/* ── 1. How I Can Help ── */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">HOW I CAN HELP</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              Whether You&apos;re Buying, Selling, or Relocating
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Buyers',
                body: 'Finding the right home in the right neighborhood. Local market knowledge that goes beyond the listing.',
                href: '/buy',
                linkText: 'Buyer Services',
              },
              {
                title: 'Sellers',
                body: 'Strategic pricing, professional presentation, and a network that moves homes.',
                href: '/sell',
                linkText: 'Seller Services',
              },
              {
                title: 'Relocating Families',
                body: 'I made this move myself. I know what it takes to get here and love it from day one.',
                href: '/about',
                linkText: 'My Story',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative"
                style={{
                  backgroundColor: '#F5EFE6',
                  border: '1px solid #E8DDD0',
                  borderRadius: '4px',
                  padding: '32px',
                  boxShadow: '0 2px 12px rgba(28,26,23,0.06)',
                }}
              >
                <div
                  style={{
                    height: '4px',
                    backgroundColor: '#C4842A',
                    marginBottom: '24px',
                    marginLeft: '-32px',
                    marginRight: '-32px',
                    marginTop: '-32px',
                    borderRadius: '4px 4px 0 0',
                  }}
                />
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: 1.4,
                    color: '#1C1A17',
                  }}
                >
                  {card.title}
                </h3>
                <p className="mb-6 text-base" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="text-sm font-semibold uppercase tracking-wider transition-colors"
                  style={{ color: '#C4842A', fontFamily: "'DM Sans', system-ui, sans-serif", letterSpacing: '0.08em' }}
                >
                  {card.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Agent Intro ── */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Photo */}
            <div
              className="order-2 lg:order-1 relative"
              style={{ height: '600px', minHeight: '400px' }}
            >
              <Image
                src="/images/realtor-headshot-outdoor.jpeg"
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
                  Shirin Abplanalp made the move that a lot of people dream about. After years in Bend, Oregon — a place that was once an outdoor paradise before it became too crowded and too expensive — she started looking for something real. A place where you could still afford a home with a yard. Where the lake was actually accessible. Where the trails weren&apos;t overrun by 9 a.m.
                </p>
                <p>
                  Northern Idaho checked every box. The lakes, the mountains, the seasons, the community — and a quality of life that reminded her of what the Pacific Northwest used to be before everyone found out about it. She made the move, put down roots, and hasn&apos;t looked back.
                </p>
                <p>
                  Now, as a licensed REALTOR® at eXp Realty, Shirin helps families make the same move with confidence. She doesn&apos;t just hand you a list of listings — she helps you understand where you&apos;ll actually want to live, and why.
                </p>
              </div>

              {/* Credential pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['Licensed REALTOR®', 'eXp Realty', 'Idaho License #1371861'].map((cred) => (
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
                href="/about"
                className="inline-block text-xs uppercase font-semibold tracking-wider rounded-sm transition-colors"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  backgroundColor: '#C4842A',
                  color: '#ffffff',
                  padding: '14px 32px',
                  letterSpacing: '0.08em',
                }}
              >
                My Full Story →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. The 60-Minute Rule ── */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="eyebrow mb-4">THE REGION</p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              60 Minutes to Everything
            </h2>
            <p className="max-w-2xl mx-auto mb-12" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
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

          <div className="text-center">
            <Link
              href="/areas"
              className="inline-block text-xs uppercase font-semibold tracking-wider rounded-sm transition-all"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                color: '#C4842A',
                border: '1.5px solid #C4842A',
                padding: '14px 32px',
                letterSpacing: '0.08em',
              }}
            >
              Explore the Region →
            </Link>
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
                  backgroundColor: '#FAFAF8',
                  border: '1px solid #E8DDD0',
                  borderRadius: '4px',
                  padding: '28px 24px',
                  boxShadow: '0 2px 12px rgba(28,26,23,0.06)',
                  textDecoration: 'none',
                }}
              >
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '22px',
                    color: '#1C1A17',
                  }}
                >
                  {area.name}
                </h3>
                <p className="mb-4 text-sm" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
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

      {/* ── 5. Testimonials ── */}
      <section className="section-padding" style={{ backgroundColor: '#1C1A17' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>REVIEWS</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#FAFAF8',
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
                {/* Stars */}
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
