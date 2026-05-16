import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Northern Idaho Real Estate Areas | Post Falls, Coeur d'Alene, Hayden",
  description:
    "Shirin Abplanalp serves buyers and sellers across Post Falls, Coeur d'Alene, Hayden, and Kootenai County Idaho.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/areas',
  },
}

const areas = [
  {
    name: 'Post Falls',
    desc: "Northern Idaho's fastest-growing community, with outstanding outdoor access and great value.",
    href: '/areas/post-falls-idaho',
    image: '/images/mountain-biking.jpg',
  },
  {
    name: "Coeur d'Alene",
    desc: 'Lakefront living, a vibrant downtown, and one of the most beautiful lakes in North America.',
    href: '/areas/coeur-dalene-idaho',
    image: '/images/lakefront-dock.jpg',
  },
  {
    name: 'Hayden',
    desc: 'Family-friendly neighborhoods, excellent schools, and a quiet residential character.',
    href: '/areas/hayden-idaho',
    image: '/images/skiing.jpg',
  },
]

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-home.jpeg"
            alt="Lake Coeur d'Alene seaplane dock"
            fill
            priority
            className="object-cover"
            
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>WHERE I WORK</p>
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
            North Idaho Communities
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#F5EFE6', maxWidth: '600px', margin: '0 auto' }}>
            Deep local knowledge across North Idaho&apos;s most sought-after communities.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="block group relative overflow-hidden"
                style={{ height: '360px', textDecoration: 'none' }}
              >
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(28,26,23,0.8), rgba(28,26,23,0.15))' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 600,
                      fontSize: '32px',
                      color: '#FAFAF8',
                      marginBottom: '8px',
                    }}
                  >
                    {area.name}
                  </h2>
                  <p style={{ color: '#F5EFE6', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', marginBottom: '12px' }}>
                    {area.desc}
                  </p>
                  <span style={{ color: '#C4842A', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding" style={{ backgroundColor: '#1C1A17' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>GET LOCAL ADVICE</p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 500,
              fontSize: 'clamp(32px, 5vw, 48px)',
              lineHeight: 1.15,
              color: '#F5EFE6',
            }}
          >
            Not Sure Which Area Is Right for You?
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Let&apos;s talk about how you want to live — I&apos;ll help you figure out where that fits best in Northern Idaho.
          </p>
          <Link
            href="/contact"
            className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm"
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
