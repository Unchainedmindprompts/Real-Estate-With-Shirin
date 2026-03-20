import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Shirin Abplanalp | Licensed Northern Idaho Realtor · eXp Realty',
  description:
    "Shirin Abplanalp is a licensed realtor at eXp Realty serving Post Falls, Coeur d'Alene, and Northern Idaho. She relocated here herself — and now helps active families do the same.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/about',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Shirin Abplanalp',
    jobTitle: 'Licensed REALTOR®',
    description:
      "Licensed Northern Idaho realtor at eXp Realty specializing in buyer representation, seller representation, and relocation for active families moving to Post Falls, Coeur d'Alene, and Kootenai County.",
    telephone: '(208) 660-7468',
    email: 'dreamlifeinidaho@gmail.com',
    url: 'https://www.realestatewithshirin.com/about',
    image: 'https://www.realestatewithshirin.com/images/shirin-abplanalp.jpg',
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

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section
        className="relative flex items-center justify-center"
        style={{ minHeight: '60vh' }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/northern-idaho-hero.webp"
            alt="Lake Coeur d'Alene seaplane dock"
            fill
            priority
            className="object-cover"
            style={{ filter: 'blur(2px)', transform: 'scale(1.02)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.3), rgba(28,26,23,0.6))' }}
          />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>YOUR AGENT</p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              fontSize: 'clamp(36px, 6vw, 56px)',
              lineHeight: 1.1,
              color: '#FAFAF8',
              marginBottom: '16px',
            }}
          >
            Meet Shirin Abplanalp
          </h1>
          <p style={{ color: '#F5EFE6', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '16px' }}>
            Licensed REALTOR® · eXp Realty · Northern Idaho
          </p>
        </div>
      </section>

      {/* Full Story */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="relative" style={{ height: '600px', minHeight: '400px' }}>
              <Image
                src="/images/shirin-abplanalp.jpg"
                alt="Shirin Abplanalp, Licensed REALTOR® in Northern Idaho"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="eyebrow mb-4">THE STORY</p>
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
                From Bend, Oregon to Northern Idaho — and Never Looking Back
              </h2>
              <div className="space-y-4" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                <p>
                  Shirin Abplanalp made the move that a lot of people dream about. After years in Bend, Oregon — a place that was once an outdoor paradise before it became too crowded and too expensive — she started looking for something real. A place where you could still afford a home with a yard. Where the lake was actually accessible. Where the trails weren&apos;t overrun by 9 a.m.
                </p>
                <p>
                  Northern Idaho checked every box. The lakes, the mountains, the seasons, the community — and a quality of life that reminded her of what the Pacific Northwest used to be before everyone found out about it. She made the move, put down roots, and hasn&apos;t looked back.
                </p>
                <p>
                  That experience — the research, the hesitation, the questions, the final decision — is exactly what makes her an exceptional realtor for anyone considering the same move. She asked every question you&apos;re asking. She toured the neighborhoods. She tested the commutes. She found her people here.
                </p>
                <p>
                  Now, as a licensed REALTOR® at eXp Realty, Shirin focuses on buyer representation, seller representation, and relocation services for active families moving to Post Falls, Coeur d&apos;Alene, Hayden, and the surrounding area. She doesn&apos;t just hand you a list of listings — she helps you understand where you&apos;ll actually want to live, and why.
                </p>
                <p>
                  If you&apos;re considering Northern Idaho, there&apos;s no substitute for talking to someone who made the move themselves. That&apos;s Shirin.
                </p>
              </div>

              {/* Credentials bar */}
              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  { label: 'License #', value: '1371861' },
                  { label: 'Brokerage', value: 'eXp Realty' },
                  { label: 'Location', value: 'Post Falls, ID' },
                ].map((item) => (
                  <div key={item.label} style={{ borderLeft: '3px solid #C4842A', paddingLeft: '12px' }}>
                    <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 600 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '14px', color: '#1C1A17', fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 500 }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Differentiators */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHY WORK WITH SHIRIN</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              What Sets This Approach Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Local Knowledge',
                body: "Shirin didn't just study Northern Idaho — she chose it. She knows every neighborhood not from a data sheet, but from lived experience. That local knowledge translates into better advice for buyers and smarter positioning for sellers.",
              },
              {
                num: '02',
                title: 'Relocation Expertise',
                body: "Having navigated multiple western relocations herself, Shirin understands the logistical and emotional complexity of a long-distance move. She can guide you through the process in a way that most local agents simply can't.",
              },
              {
                num: '03',
                title: 'Lifestyle Match',
                body: "Before showing you a single listing, Shirin asks how you want to live. The right home isn't just about square footage — it's about access to trails, school quality, commute time, and community feel. She starts there.",
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
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '36px', color: '#C4842A', marginBottom: '12px', lineHeight: 1 }}>
                  {card.num}
                </p>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '22px',
                    color: '#1C1A17',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px' }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* eXp Realty Section */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="eyebrow mb-4">BROKERAGE</p>
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
            Affiliated with eXp Realty
          </h2>
          <p className="mb-8" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Shirin is a licensed REALTOR® with eXp Realty — one of the largest and most innovative real estate brokerages in North America. eXp&apos;s agent-centric model and cutting-edge technology platform means clients get the resources of a major brokerage backed by an agent who is invested in delivering exceptional results.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 600, marginBottom: '4px' }}>Idaho RE License</p>
              <p style={{ fontWeight: 600, color: '#1C1A17', fontFamily: "'DM Sans', system-ui, sans-serif" }}>#1371861</p>
            </div>
            <div style={{ width: '1px', backgroundColor: '#E8DDD0' }} />
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 600, marginBottom: '4px' }}>Brokerage</p>
              <p style={{ fontWeight: 600, color: '#1C1A17', fontFamily: "'DM Sans', system-ui, sans-serif" }}>eXp Realty</p>
            </div>
            <div style={{ width: '1px', backgroundColor: '#E8DDD0' }} />
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 600, marginBottom: '4px' }}>Office</p>
              <p style={{ fontWeight: 600, color: '#1C1A17', fontFamily: "'DM Sans', system-ui, sans-serif" }}>Post Falls, ID</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding" style={{ backgroundColor: '#1C1A17' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>GET IN TOUCH</p>
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
            Let&apos;s Start the Conversation
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Whether you&apos;re buying, selling, or relocating — reach out. No pressure, no pitch. Just an honest conversation.
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
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
