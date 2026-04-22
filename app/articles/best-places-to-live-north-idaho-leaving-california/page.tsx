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
    </>
  )
}
