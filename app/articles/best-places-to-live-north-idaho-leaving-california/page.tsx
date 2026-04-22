import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Places to Live in North Idaho for People Leaving California (2026 Relocation Guide) | Shirin Abplanalp',
  description: "A 2026 relocation guide for Californians moving to North Idaho. Compare Coeur d'Alene, Post Falls, Hayden, and Sandpoint for cost, lifestyle, taxes, and community.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles/best-places-to-live-north-idaho-leaving-california',
  },
  openGraph: {
    title: 'Best Places to Live in North Idaho for People Leaving California (2026 Relocation Guide)',
    description: "A 2026 relocation guide for Californians moving to North Idaho. Compare Coeur d'Alene, Post Falls, Hayden, and Sandpoint for cost, lifestyle, taxes, and community.",
    url: 'https://www.realestatewithshirin.com/articles/best-places-to-live-north-idaho-leaving-california',
    type: 'article',
    publishedTime: '2026-04-22',
    authors: ['Shirin Abplanalp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Places to Live in North Idaho for People Leaving California (2026 Relocation Guide)',
  description: 'A relocation guide for Californians moving to North Idaho in 2026. Compare Coeur d\'Alene, Post Falls, Hayden, and Sandpoint for cost, lifestyle, and community.',
  author: {
    '@type': 'Person',
    '@id': 'https://www.realestatewithshirin.com/#agent',
    name: 'Shirin Abplanalp',
    jobTitle: 'Licensed REALTOR®',
    url: 'https://www.realestatewithshirin.com/about',
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      identifier: '1371861',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Idaho Real Estate Commission',
      },
    },
  },
  publisher: {
    '@id': 'https://www.realestatewithshirin.com/#business',
  },
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatewithshirin.com/articles/best-places-to-live-north-idaho-leaving-california',
  },
  url: 'https://www.realestatewithshirin.com/articles/best-places-to-live-north-idaho-leaving-california',
  keywords: [
    'best places to live in north idaho',
    'leaving california',
    'moving from california to idaho',
    'california to idaho relocation',
    'is idaho a good place to live',
    "coeur d'alene relocation",
    'post falls idaho moving',
    'hayden idaho homes',
    'sandpoint idaho living',
    'north idaho real estate',
  ],
  articleSection: 'Relocation Guide',
  wordCount: 2000,
  about: [
    { '@type': 'Thing', name: 'North Idaho Relocation' },
    { '@type': 'Thing', name: 'California to Idaho Move' },
    { '@type': 'Thing', name: 'Kootenai County Real Estate' },
  ],
  mentions: [
    { '@type': 'City', name: "Coeur d'Alene", containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: 'Post Falls', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: 'Hayden', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: 'Sandpoint', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'AdministrativeArea', name: 'Kootenai County' },
    { '@type': 'AdministrativeArea', name: 'Bonner County' },
  ],
  citation: [
    { '@type': 'WebPage', name: "Coeur d'Alene Regional Realtors 2025 Year-End Market Report", url: 'https://www.cdarealtors.com' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/best-places-to-live-north-idaho-leaving-california/#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best places to live in North Idaho for people leaving California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PLACEHOLDER',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Idaho have state income tax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PLACEHOLDER',
      },
    },
    {
      '@type': 'Question',
      name: 'Is North Idaho cheaper than California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PLACEHOLDER',
      },
    },
    {
      '@type': 'Question',
      name: 'Is North Idaho safer than California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PLACEHOLDER',
      },
    },
    {
      '@type': 'Question',
      name: 'How much money do you need to move from California to Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PLACEHOLDER',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.realestatewithshirin.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Articles',
      item: 'https://www.realestatewithshirin.com/articles',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Best Places to Live in North Idaho for People Leaving California',
      item: 'https://www.realestatewithshirin.com/articles/best-places-to-live-north-idaho-leaving-california',
    },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  '@id': 'https://www.realestatewithshirin.com/#business',
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
  areaServed: [
    { '@type': 'City', name: 'Post Falls', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: "Coeur d'Alene", containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'AdministrativeArea', name: 'Kootenai County' },
    { '@type': 'AdministrativeArea', name: 'Northern Idaho' },
  ],
  founder: { '@id': 'https://www.realestatewithshirin.com/#agent' },
  memberOf: {
    '@type': 'Organization',
    '@id': 'https://www.exprealty.com/#organization',
    name: 'eXp Realty',
    url: 'https://www.exprealty.com',
  },
}

export default function BestPlacesNorthIdahoCaliforniaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* Hero */}
      <section className="bg-[#F5EFE6] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#C4842A] transition-colors">Home</a>
            <span className="mx-2">·</span>
            <a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
            <span className="mx-2">·</span>
            <span className="text-[#5C5650]">Best Places to Live in North Idaho for People Leaving California</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Relocation Guide</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">9 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">April 2026</span>
          </div>
          {/* H1 */}
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Best Places to Live in North Idaho for People Leaving California
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            For Californians relocating to North Idaho in 2026, the four best places to land are Coeur d&apos;Alene, Post Falls, Hayden, and Sandpoint. Each offers a lower cost of living than California, four-season outdoor recreation, and a community-oriented pace of life, but they differ in price, size, and character. This guide walks through what to expect from each town, what Californians actually save when they move here, and what to know before you start your search.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-abplanalp.jpg"
              alt="Shirin Abplanalp, licensed realtor at eXp Realty"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · eXp Realty · April 22, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E8DDD0]" />

      {/* Key Stats Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$549K</p>
              <p className="font-dm-sans text-xs text-[#C4BDB4] mt-1 uppercase tracking-wide">Kootenai County Median</p>
              <p className="font-dm-sans text-xs text-[#9AA3AF] mt-0.5">End of 2025</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">5.8%</p>
              <p className="font-dm-sans text-xs text-[#C4BDB4] mt-1 uppercase tracking-wide">Idaho Income Tax</p>
              <p className="font-dm-sans text-xs text-[#9AA3AF] mt-0.5">vs CA top rate of 13.3%</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">20–30%</p>
              <p className="font-dm-sans text-xs text-[#C4BDB4] mt-1 uppercase tracking-wide">Lower Cost of Living</p>
              <p className="font-dm-sans text-xs text-[#9AA3AF] mt-0.5">Compared to California</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">+9.9%</p>
              <p className="font-dm-sans text-xs text-[#C4BDB4] mt-1 uppercase tracking-wide">Post Falls YoY Growth</p>
              <p className="font-dm-sans text-xs text-[#9AA3AF] mt-0.5">Strongest in region</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
