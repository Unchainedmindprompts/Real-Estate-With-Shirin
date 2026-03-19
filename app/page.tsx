import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeroButtons from '@/components/HeroButtons'

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

const jsonLdAgent = {
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  name: 'Shirin Abplanalp — Real Estate With Shirin',
  url: 'https://www.realestatewithshirin.com',
  telephone: '(208) 660-7468',
  email: 'dreamlifeinidaho@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '510 S Clearwater Loop, Suite 100',
    addressLocality: 'Post Falls',
    addressRegion: 'ID',
    postalCode: '83854',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 47.7182, longitude: -116.9516 },
  areaServed: [
    { '@type': 'City', name: 'Post Falls', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: "Coeur d'Alene", containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: 'Hayden', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'AdministrativeArea', name: 'Kootenai County' },
    { '@type': 'AdministrativeArea', name: 'North Idaho' },
    { '@type': 'AdministrativeArea', name: 'Northern Idaho' },
    { '@type': 'AdministrativeArea', name: 'Inland Northwest' },
  ],
  employee: {
    '@type': 'Person',
    name: 'Shirin Abplanalp',
    jobTitle: 'Licensed REALTOR®',
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      recognizedBy: { '@type': 'Organization', name: 'Idaho Real Estate Commission' },
      identifier: '1371861',
    },
  },
  memberOf: { '@type': 'Organization', name: 'eXp Realty', url: 'https://www.exprealty.com' },
  knowsAbout: [
    'Post Falls real estate',
    "Coeur d'Alene real estate",
    'Northern Idaho relocation',
    'Kootenai County homes',
    'North Idaho buyer representation',
    'North Idaho seller representation',
    'Idaho real estate market',
    'Active family relocation to Northern Idaho',
  ],
  slogan: 'Your Northern Idaho Real Estate Advisor',
}

const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shirin Abplanalp',
  jobTitle: 'Licensed REALTOR®',
  telephone: '(208) 660-7468',
  email: 'dreamlifeinidaho@gmail.com',
  url: 'https://www.realestatewithshirin.com/about',
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
    'Kootenai County homes for sale',
    'North Idaho lifestyle',
  ],
  address: { '@type': 'PostalAddress', addressLocality: 'Post Falls', addressRegion: 'ID', addressCountry: 'US' },
}

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Real Estate With Shirin',
  url: 'https://www.realestatewithshirin.com',
  description:
    'Northern Idaho real estate with Shirin Abplanalp, licensed REALTOR® at eXp Realty serving Post Falls, Coeur d\'Alene, Hayden, and Kootenai County.',
  publisher: { '@type': 'Person', name: 'Shirin Abplanalp' },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAgent) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }} />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center"
        style={{ minHeight: '85vh' }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/northern-idaho-hero.webp"
            alt="Northern Idaho landscape"
            fill
            priority
            className="object-cover"
            style={{ filter: 'blur(2px)', transform: 'scale(1.02)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.1), rgba(28,26,23,0.35))' }}
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8 py-32">
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>
            NORTHERN IDAHO REALTOR · EXP REALTY
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              fontSize: 'clamp(42px, 7vw, 64px)',
              lineHeight: 1.1,
              color: '#FAFAF8',
            }}
          >
            Your Northern Idaho<br />Real Estate Advisor
          </h1>
          <p
            className="mb-10 max-w-2xl mx-auto"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#F5EFE6',
            }}
          >
            Shirin Abplanalp helps buyers, sellers, and relocating families find their perfect home
            in Post Falls, Coeur d&apos;Alene, and across Kootenai County.
          </p>
          <HeroButtons />
        </div>
      </section>

      {/* Who I Help Section */}
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
                body: "I made this move myself. I know what it takes to get here and love it from day one.",
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
                  style={{ height: '4px', backgroundColor: '#C4842A', marginBottom: '24px', marginLeft: '-32px', marginRight: '-32px', marginTop: '-32px', borderRadius: '4px 4px 0 0' }}
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

      {/* Why Northern Idaho Section */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
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

      {/* About Shirin Teaser */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative" style={{ height: '600px', minHeight: '400px' }}>
              <Image
                src="/images/shirin-abplanalp.jpg"
                alt="Shirin Abplanalp, Northern Idaho Realtor"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-4">YOUR AGENT</p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 500,
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  lineHeight: 1.2,
                  color: '#1C1A17',
                }}
              >
                I Made This Move.<br />Now I Help Others Make Theirs.
              </h2>
              <p className="mb-8 text-base" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                Shirin relocated from Bend, Oregon to Northern Idaho — drawn by the lakes, the mountains, and a quality of life that&apos;s genuinely hard to find. She knows the questions you&apos;re asking because she asked them herself. Now, as a licensed REALTOR® at eXp Realty, she helps families make the same move with confidence.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                {['Licensed REALTOR®', 'eXp Realty', 'Idaho License #1371861'].map((cred) => (
                  <div key={cred} className="flex items-center gap-2">
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C4842A', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 500 }}>
                      {cred}
                    </span>
                  </div>
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

      {/* Areas Section */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Post Falls', desc: "Northern Idaho's fastest-growing community", href: '/areas/post-falls-idaho' },
              { name: "Coeur d'Alene", desc: 'Lakefront living and vibrant downtown', href: '/areas/coeur-dalene-idaho' },
              { name: 'Hayden', desc: 'Family-friendly neighborhoods and great schools', href: '/areas/hayden-idaho' },
            ].map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="block group transition-all"
                style={{
                  backgroundColor: '#FAFAF8',
                  border: '1px solid #E8DDD0',
                  borderRadius: '4px',
                  padding: '32px',
                  boxShadow: '0 2px 12px rgba(28,26,23,0.06)',
                  textDecoration: 'none',
                }}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '24px',
                    color: '#1C1A17',
                  }}
                >
                  {area.name}
                </h3>
                <p className="mb-4 text-sm" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                  {area.desc}
                </p>
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#C4842A', fontFamily: "'DM Sans', system-ui, sans-serif", letterSpacing: '0.08em' }}>
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding" style={{ backgroundColor: '#1C1A17' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>READY TO MOVE FORWARD</p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 500,
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1.15,
              color: '#FAFAF8',
            }}
          >
            Ready to Make Your Move?
          </h2>
          <p className="mb-10 text-base" style={{ color: '#C4BDB4', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Whether you&apos;re buying, selling, or relocating — let&apos;s start with a conversation. No pressure, no pitch.
          </p>
          <Link
            href="/contact"
            className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm transition-colors"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              backgroundColor: '#C4842A',
              padding: '14px 32px',
              letterSpacing: '0.08em',
            }}
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
