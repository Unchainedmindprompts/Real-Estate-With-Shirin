import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commute Times from North Idaho to Spokane: Town-by-Town Guide | Shirin Abplanalp',
  description:
    "Town-by-town North Idaho to Spokane commute times with ITD traffic data — Post Falls, Coeur d'Alene, Hayden, Rathdrum, Sandpoint — plus the I-90 SH-41 to US-95 congestion zone explained for buyers.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times',
  },
  openGraph: {
    title: 'Commute Times from North Idaho to Spokane: Town-by-Town Guide',
    description:
      "Town-by-town commute times with ITD traffic data, real off-peak and peak-hour drive times, and the I-90 SH-41 to US-95 congestion zone explained for buyers.",
    url: 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times',
    type: 'article',
    publishedTime: '2026-05-21',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/north-idaho-spokane-commute.webp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times#article',
  headline: 'Commute Times from North Idaho to Spokane: A Town-by-Town Guide with Real Traffic Data',
  description:
    "Town-by-town North Idaho to Spokane commute times with ITD traffic data, real off-peak and peak-hour drive times, and the I-90 SH-41 to US-95 congestion zone explained for buyers.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/north-idaho-spokane-commute.webp',
    width: 1200,
    height: 630,
  },
  author: {
    '@type': 'Person',
    '@id': 'https://www.realestatewithshirin.com/#agent',
    name: 'Shirin Abplanalp',
    jobTitle: 'Licensed REALTOR®',
    url: 'https://www.realestatewithshirin.com/about',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Real Estate License',
        identifier: '1371861',
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'Idaho Real Estate Commission',
          url: 'https://irec.idaho.gov',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Designation',
        name: 'Seniors Real Estate Specialist®',
        abbreviation: 'SRES®',
        recognizedBy: {
          '@type': 'Organization',
          name: 'National Association of REALTORS®',
          url: 'https://www.nar.realtor',
          sameAs: 'https://en.wikipedia.org/wiki/National_Association_of_Realtors',
        },
      },
    ],
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.realestatewithshirin.com/#business',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.realestatewithshirin.com/images/shirin-logo.png',
      width: 1254,
      height: 1254,
    },
  },
  isPartOf: {
    '@type': 'CollectionPage',
    '@id': 'https://www.realestatewithshirin.com/articles',
    name: 'Northern Idaho Real Estate Articles',
    url: 'https://www.realestatewithshirin.com/articles',
  },
  datePublished: '2026-05-21T00:00:00-07:00',
  dateModified: '2026-05-21T00:00:00-07:00',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times',
  },
  url: 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times',
  keywords: [
    'North Idaho to Spokane commute',
    'Post Falls to Spokane drive time',
    "Coeur d'Alene to Spokane commute",
    'Hayden Idaho commute',
    'Rathdrum to Spokane commute',
    'Sandpoint to Spokane drive',
    'I-90 traffic North Idaho',
    'Idaho Transportation Department traffic data',
    'Idaho 511 road conditions',
    'SH-53 Pleasant View Interchange',
    'Kootenai County commute',
  ],
  articleSection: 'North Idaho Buyer Guides',
  wordCount: 3000,
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    geo: { '@type': 'GeoShape', box: '45.5 -117.5 49.0 -114.5' },
  },
  about: [
    {
      '@type': 'City',
      name: 'Post Falls',
      sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County' },
    },
    {
      '@type': 'City',
      name: "Coeur d'Alene",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County' },
    },
    {
      '@type': 'City',
      name: 'Hayden',
      sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County' },
    },
    {
      '@type': 'City',
      name: 'Rathdrum',
      sameAs: 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County' },
    },
    {
      '@type': 'City',
      name: 'Sandpoint',
      sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County' },
    },
    {
      '@type': 'City',
      name: 'Spokane',
      sameAs: 'https://en.wikipedia.org/wiki/Spokane,_Washington',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Spokane County' },
    },
    {
      '@type': 'Place',
      name: 'Interstate 90',
      sameAs: 'https://en.wikipedia.org/wiki/Interstate_90',
    },
    {
      '@type': 'Place',
      name: 'U.S. Route 95 in Idaho',
      sameAs: 'https://en.wikipedia.org/wiki/U.S._Route_95_in_Idaho',
    },
    {
      '@type': 'Place',
      name: 'Idaho State Highway 53',
      sameAs: 'https://en.wikipedia.org/wiki/Idaho_State_Highway_53',
    },
  ],
  mentions: [
    {
      '@type': 'GovernmentOrganization',
      name: 'Idaho Transportation Department',
      url: 'https://itd.idaho.gov',
      sameAs: 'https://en.wikipedia.org/wiki/Idaho_Transportation_Department',
    },
    {
      '@type': 'GovernmentOrganization',
      name: 'Washington State Department of Transportation',
      url: 'https://wsdot.wa.gov',
      sameAs: 'https://en.wikipedia.org/wiki/Washington_State_Department_of_Transportation',
    },
    {
      '@type': 'Organization',
      name: 'Spokane Transit Authority',
      url: 'https://www.spokanetransit.com',
      sameAs: 'https://en.wikipedia.org/wiki/Spokane_Transit_Authority',
    },
    {
      '@type': 'Organization',
      name: 'Citylink Transit',
      url: 'https://www.cdaid.org/citylink',
    },
  ],
  citation: [
    { '@type': 'WebPage', name: 'Idaho Transportation Department Traffic Data', url: 'https://itd.idaho.gov/traffic-data/' },
    { '@type': 'WebPage', name: 'Idaho 511 Live Road Conditions', url: 'https://511.idaho.gov' },
    { '@type': 'WebPage', name: 'Spokane Transit Authority I-90/Valley Corridor Study', url: 'https://www.spokanetransit.com/wp-content/uploads/2022/09/I-90_Valley_CDP_FINAL_20220928.pdf' },
    { '@type': 'WebPage', name: 'ITD SH-53 Pleasant View Interchange Project', url: 'https://itd.idaho.gov/project/sh-53-pleasant-view-interchange/' },
    { '@type': 'WebPage', name: "Idaho 511 Coeur d'Alene Region Traffic", url: 'https://511.idaho.gov/region/Coeur%20D%27Alene' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long is the commute from Post Falls to Spokane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post Falls to downtown Spokane is approximately 20 miles via I-90 west, with a typical drive time of 25 to 30 minutes off-peak and 35 to 45 minutes during AM peak (6:30 to 8:30 AM). Spokane Valley destinations from Post Falls run 15 to 20 minutes off-peak. Post Falls is the closest North Idaho town to the Spokane metro and the most popular commuter address in Kootenai County. Real-time conditions are published at Idaho 511.',
      },
    },
    {
      '@type': 'Question',
      name: "How long does it take to drive from Coeur d'Alene to Spokane?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Coeur d'Alene to downtown Spokane is 32.3 miles via I-90 west, with a typical drive time of 33 minutes in normal traffic. AM peak commuters report consistent 40-minute drives leaving between 6:30 and 7:30 AM. PM return commutes range from 45 minutes to more than an hour depending on traffic, accidents, and weather. The Coeur d'Alene to Spokane Valley commute is meaningfully shorter at 22 miles and approximately 26 minutes per current routing data.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the worst traffic spot for North Idaho commuters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Idaho Transportation Department identifies the five-mile stretch of I-90 from the SH-41 interchange (Post Falls) to the US-95 interchange (Coeur d\'Alene) as the most heavily traveled and most congested segment in the panhandle. Active ITD construction projects in this corridor run through 2029, which means peak-hour delays should be assumed rather than hoped against. The SH-53 Pleasant View Interchange project is one of several efforts intended to relieve pressure on this segment over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you commute daily from Sandpoint to Spokane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is possible but rarely practical for a five-day-per-week schedule. Sandpoint to Spokane is 80 miles via US-95 south to I-90 west, with normal-traffic drive times of 90 to 110 minutes each way. Winter conditions can stretch this to two hours or more. Most Sandpoint residents who work in Spokane do so on a hybrid schedule (two to three days per week in office) or remotely. Bonners Ferry, at 110 miles, is not a viable daily commute for almost anyone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I check real-time North Idaho road conditions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Idaho 511 at 511.idaho.gov is the official Idaho Transportation Department portal for real-time road conditions, including chain restrictions, incidents, closures, and current traffic. The Coeur d\'Alene region traffic page is the right bookmark for North Idaho commuters. Washington State conditions are at the WSDOT site. Both portals update continuously and are accessible by phone (dial 511 from inside Idaho or Washington).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the commute from Rathdrum to Spokane realistic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with route awareness. Rathdrum is 32 miles from Spokane and has two viable routes: SH-41 south to I-90 west (faster in good conditions but routes through the worst congestion segment), or SH-53 west to US-2 south (bypasses I-90 entirely and is the preferred route for many Rathdrum commuters during peak hours). Typical drive times run 40 to 50 minutes in normal traffic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does winter significantly affect North Idaho commutes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — particularly for routes that include US-95 or I-90 east of Coeur d\'Alene. Post Falls and Coeur d\'Alene commutes typically add 10 to 25 minutes during winter months in normal conditions, more during active snow events. Sandpoint commutes can stretch to two hours or longer during winter storms. The Idaho Transportation Department plows I-90 quickly and consistently, but accident risk from out-of-state drivers underestimating conditions is the larger delay factor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the commute get worse over time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, modestly. The Spokane Transit Authority I-90/Valley Corridor study projects 10 to 20% traffic growth across the corridor by 2040, producing moderate-to-high congestion at the Division Street, Pines Road, and Harvard Road interchanges as well as additional pressure on the SH-41 to US-95 segment. ITD\'s ongoing capacity projects — including the SH-53 Pleasant View Interchange — are intended to absorb part of that growth, but buyers planning a 10-to-20-year commute should assume that today\'s typical times will lengthen by 10 to 15 percent over the planning horizon.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times#breadcrumb',
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
      name: 'Commute Times from North Idaho to Spokane',
      item: 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times',
    },
  ],
}

const commuteData = [
  { town: 'Post Falls', miles: 20, offPeak: 27, peak: 40, offLabel: '25–30 min', peakLabel: '35–45 min' },
  { town: "Coeur d'Alene", miles: 32, offPeak: 33, peak: 52, offLabel: '33 min', peakLabel: '45–60 min' },
  { town: 'Hayden', miles: 38, offPeak: 40, peak: 50, offLabel: '35–45 min', peakLabel: '45–55 min' },
  { town: 'Rathdrum', miles: 32, offPeak: 45, peak: 45, offLabel: '40–50 min', peakLabel: '40–50 min' },
  { town: 'Sandpoint', miles: 80, offPeak: 100, peak: 100, offLabel: '90–110 min', peakLabel: '90–110 min' },
]

const MAX_MINUTES = 120

const fullCommuteTable = [
  { town: 'Post Falls', miles: '20', offPeak: '25–30 min', amPeak: '35–45 min', pmPeak: '35–45 min', notes: 'Closest town; multiple interchange options' },
  { town: "Coeur d'Alene", miles: '32', offPeak: '33 min', amPeak: '40 min', pmPeak: '45–60 min', notes: 'Reference commute; worst PM return' },
  { town: 'Hayden', miles: '37', offPeak: '35–45 min', amPeak: '45–55 min', pmPeak: '45–55 min', notes: 'US-95 segment through congestion zone' },
  { town: 'Rathdrum', miles: '32', offPeak: '40–50 min', amPeak: '40–50 min', pmPeak: '40–50 min', notes: 'SH-53 alternate bypasses I-90' },
  { town: 'Bayview', miles: '~55', offPeak: '50–65 min', amPeak: '60–75 min', pmPeak: '60–75 min', notes: 'ID-54 to US-95 to I-90' },
  { town: 'St. Maries', miles: '65', offPeak: '80–95 min', amPeak: '80–95 min', pmPeak: '80–95 min', notes: 'Rural two-lane; partial-week only' },
  { town: 'Kellogg / Wallace', miles: '55–70', offPeak: '65–75 min', amPeak: '65–75 min', pmPeak: '65–75 min', notes: 'Reverse commute; lighter westbound flow' },
  { town: 'Sandpoint', miles: '80', offPeak: '90–110 min', amPeak: '90–110 min', pmPeak: '90–110 min', notes: 'Hybrid-week only; winter 2+ hrs' },
  { town: 'Bonners Ferry', miles: '110', offPeak: '130–160 min', amPeak: '130–160 min', pmPeak: '130–160 min', notes: 'Not a viable daily commute' },
]

const faqs = [
  {
    q: 'How long is the commute from Post Falls to Spokane?',
    a: 'Post Falls to downtown Spokane is approximately 20 miles via I-90 west, with a typical drive time of 25 to 30 minutes off-peak and 35 to 45 minutes during AM peak (6:30 to 8:30 AM). Spokane Valley destinations from Post Falls run 15 to 20 minutes off-peak. Post Falls is the closest North Idaho town to the Spokane metro and the most popular commuter address in Kootenai County.',
  },
  {
    q: "How long does it take to drive from Coeur d'Alene to Spokane?",
    a: "Coeur d'Alene to downtown Spokane is 32.3 miles via I-90 west, with a typical drive time of 33 minutes in normal traffic. AM peak commuters report consistent 40-minute drives leaving between 6:30 and 7:30 AM. PM return commutes range from 45 minutes to more than an hour depending on traffic, accidents, and weather. The Coeur d'Alene to Spokane Valley commute is shorter at 22 miles and approximately 26 minutes.",
  },
  {
    q: 'What is the worst traffic spot for North Idaho commuters?',
    a: 'The Idaho Transportation Department identifies the five-mile stretch of I-90 from the SH-41 interchange (Post Falls) to the US-95 interchange (Coeur d\'Alene) as the most heavily traveled and most congested segment in the panhandle. Active ITD construction runs through 2029. The SH-53 Pleasant View Interchange project is intended to relieve pressure on this segment over time.',
  },
  {
    q: 'Can you commute daily from Sandpoint to Spokane?',
    a: 'It is possible but rarely practical five days a week. Sandpoint to Spokane is 80 miles, with normal-traffic drive times of 90 to 110 minutes each way. Winter conditions can stretch this to two hours or more. Most Sandpoint residents who work in Spokane do so on a hybrid schedule (two to three days per week) or remotely.',
  },
  {
    q: 'Where can I check real-time North Idaho road conditions?',
    a: 'Idaho 511 at 511.idaho.gov is the official ITD portal for real-time road conditions, including chain restrictions, incidents, closures, and current traffic. The Coeur d\'Alene region traffic page is the right bookmark for North Idaho commuters. Washington State conditions are at wsdot.wa.gov. Both portals update continuously and are accessible by phone (dial 511).',
  },
  {
    q: 'Is the commute from Rathdrum to Spokane realistic?',
    a: 'Yes, with route awareness. Rathdrum has two viable routes: SH-41 south to I-90 west (faster in good conditions but through the worst congestion segment), or SH-53 west to US-2 south (bypasses I-90 entirely — preferred during peak hours). Typical drive times run 40 to 50 minutes in normal traffic.',
  },
  {
    q: 'Does winter significantly affect North Idaho commutes?',
    a: 'Yes — particularly for routes including US-95 or I-90 east of Coeur d\'Alene. Post Falls and Coeur d\'Alene commutes typically add 10 to 25 minutes during winter months in normal conditions, more during active snow events. Sandpoint commutes can stretch to two hours or longer during winter storms. I-90 is plowed quickly and consistently; the larger delay risk is accidents from out-of-state drivers.',
  },
  {
    q: 'Will the commute get worse over time?',
    a: 'Yes, modestly. The STA I-90/Valley Corridor study projects 10 to 20% traffic growth by 2040, producing moderate-to-high congestion at the Division Street, Pines Road, and Harvard Road interchanges. ITD projects including the SH-53 Pleasant View Interchange are intended to absorb part of that growth, but buyers planning a 10-to-20-year commute should assume today\'s typical times lengthen by 10 to 15 percent.',
  },
]

export default function CommuteTimesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh', backgroundColor: '#F5EFE6' }}>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="mb-4" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4842A' }}>
            North Idaho Buyer Guides
          </p>
          <h1 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1, color: '#1C1A17' }}>
            Commute Times from North Idaho to Spokane
          </h1>
          <p className="mb-8" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(18px, 2.5vw, 24px)', fontStyle: 'italic', color: '#5C5650', lineHeight: 1.4 }}>
            A Town-by-Town Guide with Real ITD Traffic Data
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#5C5650' }}>By Shirin Abplanalp, REALTOR®</span>
            <span style={{ color: '#C4842A' }}>·</span>
            <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#5C5650' }}>May 21, 2026</span>
            <span style={{ color: '#C4842A' }}>·</span>
            <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#5C5650' }}>12 min read</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full">
        <img
          src="/images/north-idaho-spokane-commute.webp"
          alt="North Idaho to Spokane commute map — I-90 corridor with town-by-town drive times"
          className="w-full h-auto block"
        />
      </div>

      {/* Article Body */}
      <section style={{ backgroundColor: '#FAFAF8', paddingTop: '64px', paddingBottom: '80px' }}>
        <div className="max-w-5xl mx-auto px-6" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '64px', alignItems: 'start' }}>

          {/* Main Column */}
          <article style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '16px', lineHeight: 1.8, color: '#3A3530' }}>

            {/* Byline */}
            <div className="flex items-center gap-4 mb-10 pb-8" style={{ borderBottom: '1px solid #E8DDD0' }}>
              <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp" style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '14px', fontWeight: 600, color: '#1C1A17' }}>Shirin Abplanalp</p>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>Licensed REALTOR® · SRES® · eXp Realty, North Idaho</p>
              </div>
            </div>

            {/* Lead */}
            <p className="mb-6" style={{ fontSize: '17px', lineHeight: 1.85, color: '#1C1A17' }}>
              If you are evaluating a North Idaho move with a Spokane-side job, the commute math from the{' '}
              <a href="https://itd.idaho.gov/traffic-data/" target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A' }}>Idaho Transportation Department</a>,{' '}
              <a href="https://511.idaho.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A' }}>Idaho 511</a>, and the{' '}
              <a href="https://www.spokanetransit.com/wp-content/uploads/2022/09/I-90_Valley_CDP_FINAL_20220928.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A' }}>Spokane Transit Authority I-90/Valley Corridor study</a>{' '}
              looks like this: <strong style={{ color: '#1C1A17' }}>Post Falls to downtown Spokane is roughly 20 miles and 25–30 minutes off-peak, 35–45 minutes at AM peak</strong>; <strong style={{ color: '#1C1A17' }}>Coeur d&apos;Alene is 32 miles and 33 minutes off-peak, 40 minutes AM peak, 45–60 minutes PM peak</strong>; <strong style={{ color: '#1C1A17' }}>Hayden adds 5–10 minutes</strong> to those numbers; <strong style={{ color: '#1C1A17' }}>Rathdrum is 32 miles via SH-53 to US-95 to I-90 at 40–50 minutes</strong>; and <strong style={{ color: '#1C1A17' }}>Sandpoint is 80 miles and 90–110 minutes</strong> — a commute that only makes sense for partial-week schedules.
            </p>
            <p className="mb-10">
              The most important number to know if you are choosing a North Idaho address for a Spokane job: ITD has identified the{' '}
              <strong style={{ color: '#1C1A17' }}>5-mile stretch of I-90 from SH-41 (Post Falls) to US-95 (Coeur d&apos;Alene)</strong> as the most heavily traveled and most congested segment in the panhandle, with active construction running through <strong style={{ color: '#1C1A17' }}>2029</strong>.
            </p>

            {/* Commute Chart */}
            <div className="mb-12 rounded-sm overflow-hidden" style={{ border: '1px solid #E8DDD0', backgroundColor: '#fff' }}>
              <div className="px-6 pt-6 pb-4" style={{ borderBottom: '1px solid #E8DDD0' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '20px', fontWeight: 600, color: '#1C1A17', marginBottom: '4px' }}>
                  Commute to Downtown Spokane — Typical Drive Times
                </p>
                <p style={{ fontSize: '12px', color: '#9A9590' }}>Off-peak (gray) vs. AM/PM peak (gold) · minutes one-way · ITD / STA corridor data</p>
              </div>
              <div className="px-6 py-5 space-y-5">
                {commuteData.map((row) => {
                  const offPct = Math.min(100, Math.round((row.offPeak / MAX_MINUTES) * 100))
                  const peakPct = Math.min(100, Math.round((row.peak / MAX_MINUTES) * 100))
                  return (
                    <div key={row.town}>
                      <div className="flex items-center justify-between mb-1">
                        <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#1C1A17', minWidth: '140px' }}>{row.town}</span>
                        <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', color: '#9A9590' }}>{row.miles} mi</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span style={{ fontSize: '10px', color: '#9A9590', width: '52px', flexShrink: 0 }}>Off-peak</span>
                          <div style={{ flex: 1, backgroundColor: '#F0EBE3', borderRadius: '2px', height: '12px' }}>
                            <div style={{ width: `${offPct}%`, backgroundColor: '#8B7D6B', height: '12px', borderRadius: '2px', transition: 'width 0.3s' }} />
                          </div>
                          <span style={{ fontSize: '11px', fontWeight: 600, color: '#5C5650', width: '64px', textAlign: 'right', flexShrink: 0 }}>{row.offLabel}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span style={{ fontSize: '10px', color: '#9A9590', width: '52px', flexShrink: 0 }}>Peak</span>
                          <div style={{ flex: 1, backgroundColor: '#F0EBE3', borderRadius: '2px', height: '12px' }}>
                            <div style={{ width: `${peakPct}%`, backgroundColor: '#C4842A', height: '12px', borderRadius: '2px', transition: 'width 0.3s' }} />
                          </div>
                          <span style={{ fontSize: '11px', fontWeight: 600, color: '#C4842A', width: '64px', textAlign: 'right', flexShrink: 0 }}>{row.peakLabel}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <p style={{ fontSize: '11px', color: '#9A9590', paddingTop: '8px', borderTop: '1px solid #F0EBE3' }}>
                  Scale: 0–120 min. Sandpoint bar capped at chart width (actual 90–110 min). All times to downtown Spokane (Sprague/Browne area). Subtract 5–10 min for Spokane Valley/Liberty Lake.
                </p>
              </div>
            </div>

            {/* How geography works */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 600, color: '#1C1A17', marginTop: '48px', marginBottom: '20px' }}>
              How North Idaho&apos;s commute geography actually works
            </h2>
            <p className="mb-6">
              Three corridors carry essentially all of the workforce between North Idaho and the Spokane metro:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: '1', label: 'I-90 east-west.', body: 'The interstate is the only continuous freeway connecting North Idaho to Spokane. It runs from Coeur d\'Alene through Post Falls, crosses the state line at Stateline, and continues through Liberty Lake, Spokane Valley, and into downtown Spokane. This is the route 90%+ of commuters use.' },
                { num: '2', label: 'US-95 north-south.', body: 'The primary north-south highway connecting Sandpoint and Bonners Ferry down through Hayden, Coeur d\'Alene, and onto I-90. It is also the only route from the Hayden/Rathdrum area for drivers who prefer to avoid the busiest I-90 segment.' },
                { num: '3', label: 'SH-53 cross-corridor.', body: 'Idaho State Highway 53 runs east-west across the Rathdrum Prairie, connecting Rathdrum and the Hayden area to Newport, Washington. It is the alternate route that Rathdrum commuters increasingly use to bypass the SH-41–US-95 congestion zone.' },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 p-5 rounded-sm" style={{ backgroundColor: '#F5EFE6' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '24px', fontWeight: 700, color: '#C4842A', lineHeight: 1, flexShrink: 0, paddingTop: '2px' }}>{item.num}</span>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: '#1C1A17' }}>{item.label}</strong>{' '}{item.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mb-10">
              Understanding how your specific address connects to those three corridors — and especially which interchange you enter I-90 at — is what determines whether your commute is 25 minutes or 50 minutes.
            </p>

            {/* I-90 traffic volumes */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 600, color: '#1C1A17', marginTop: '48px', marginBottom: '20px' }}>
              I-90 traffic volumes — the data ITD tracks
            </h2>
            <p className="mb-6">
              The{' '}
              <a href="https://www.spokanetransit.com/wp-content/uploads/2022/09/I-90_Valley_CDP_FINAL_20220928.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A' }}>
                Spokane Transit Authority I-90/Valley High Performance Transit Corridor study
              </a>{' '}
              provides the most useful summary of current and projected traffic on the corridor:
            </p>
            <div className="mb-6 rounded-sm overflow-hidden" style={{ border: '1px solid #E8DDD0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '14px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#1C1A17' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left', color: '#FAFAF8', fontWeight: 600, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Location</th>
                    <th style={{ padding: '12px 16px', textAlign: 'right', color: '#FAFAF8', fontWeight: 600, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>PM Peak Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { loc: 'Near downtown Spokane', vol: '~8,700 vehicles/hour' },
                    { loc: 'West of Spokane Valley', vol: '~10,100 vehicles/hour' },
                    { loc: 'Near the state line', vol: '~4,600 vehicles/hour' },
                    { loc: '2040 projected growth', vol: '10–20% across corridor' },
                  ].map((row, i) => (
                    <tr key={row.loc} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAF8' }}>
                      <td style={{ padding: '11px 16px', color: '#3A3530', borderBottom: '1px solid #F0EBE3' }}>{row.loc}</td>
                      <td style={{ padding: '11px 16px', textAlign: 'right', fontWeight: 600, color: '#1C1A17', borderBottom: '1px solid #F0EBE3' }}>{row.vol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mb-10">
              In practical terms: the closer your destination is to downtown Spokane, the more PM peak traffic you sit in. A Post Falls-to-Liberty Lake commute is meaningfully easier than a Post Falls-to-downtown commute, even though the distance difference is only a few miles.
            </p>

            {/* Full commute table */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 600, color: '#1C1A17', marginTop: '48px', marginBottom: '12px' }}>
              Town-by-town commute breakdown
            </h2>
            <p className="mb-6" style={{ fontSize: '14px', color: '#9A9590' }}>
              All times to downtown Spokane (Sprague/Browne area). Subtract 5–10 min for Spokane Valley or Liberty Lake destinations.
            </p>
            <div className="mb-4 rounded-sm overflow-hidden" style={{ border: '1px solid #E8DDD0', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', minWidth: '560px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#1C1A17' }}>
                    {['Town', 'Miles', 'Off-Peak', 'AM Peak', 'PM Peak', 'Notes'].map((h) => (
                      <th key={h} style={{ padding: '11px 12px', textAlign: 'left', color: '#FAFAF8', fontWeight: 600, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fullCommuteTable.map((row, i) => (
                    <tr key={row.town} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAF8' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 600, color: '#1C1A17', borderBottom: '1px solid #F0EBE3', whiteSpace: 'nowrap' }}>{row.town}</td>
                      <td style={{ padding: '10px 12px', color: '#5C5650', borderBottom: '1px solid #F0EBE3', whiteSpace: 'nowrap' }}>{row.miles}</td>
                      <td style={{ padding: '10px 12px', color: '#5C5650', borderBottom: '1px solid #F0EBE3', whiteSpace: 'nowrap' }}>{row.offPeak}</td>
                      <td style={{ padding: '10px 12px', color: '#C4842A', fontWeight: 600, borderBottom: '1px solid #F0EBE3', whiteSpace: 'nowrap' }}>{row.amPeak}</td>
                      <td style={{ padding: '10px 12px', color: '#C4842A', fontWeight: 600, borderBottom: '1px solid #F0EBE3', whiteSpace: 'nowrap' }}>{row.pmPeak}</td>
                      <td style={{ padding: '10px 12px', color: '#9A9590', borderBottom: '1px solid #F0EBE3', fontSize: '12px' }}>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mb-10" style={{ fontSize: '12px', color: '#9A9590' }}>
              Sources: ITD Traffic Data Program, STA I-90 Corridor Study, Idaho 511 routing data. Times are typical ranges — weather, incidents, and construction add variability.
            </p>

            {/* Post Falls */}
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '22px', fontWeight: 600, color: '#1C1A17', marginTop: '40px', marginBottom: '12px' }}>
              Post Falls — 20 miles, 25–30 min off-peak / 35–45 min AM peak
            </h3>
            <p className="mb-8">
              Post Falls is the closest North Idaho town to Spokane and the most popular commuter address. The drive is straight west on I-90, with the most reliable departure window being before 7:00 AM or after 9:00 AM for return trips. Post Falls also has the most interchange options — Pleasant View, Spokane Street, and SH-41 — which lets commuters tune their route to current conditions via{' '}
              <a href="https://511.idaho.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A' }}>Idaho 511</a>.
            </p>

            {/* CdA */}
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '22px', fontWeight: 600, color: '#1C1A17', marginTop: '40px', marginBottom: '12px' }}>
              Coeur d&apos;Alene — 32 miles, 33 min off-peak / 40 min AM peak / 45–60 min PM peak
            </h3>
            <p className="mb-8">
              The reference commute. Coeur d&apos;Alene is exactly 32.3 miles from Spokane and runs <strong style={{ color: '#1C1A17' }}>33 minutes in normal traffic</strong>. AM commuters report consistent 40-minute drives leaving between 6:30 and 7:30 AM, and PM return commutes ranging from <strong style={{ color: '#1C1A17' }}>45 minutes to more than an hour</strong> depending on traffic, accidents, and weather. Long-term commuters consistently report 40-minute AM drives and PM return times that depend almost entirely on what is happening in the SH-41 to US-95 segment ITD has flagged as the worst congestion zone.
            </p>

            {/* Hayden */}
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '22px', fontWeight: 600, color: '#1C1A17', marginTop: '40px', marginBottom: '12px' }}>
              Hayden — 35–40 miles, 35–45 min off-peak / 45–55 min AM peak
            </h3>
            <p className="mb-8">
              Hayden adds distance and a US-95 segment to the front end of the commute. The most common route is US-95 south to I-90 west, which puts Hayden commuters through the SH-41–US-95 congestion zone twice daily. Hayden residents who can shift to a slightly later departure — after 8:00 AM — often save 10–15 minutes by missing the morning peak.
            </p>

            {/* Rathdrum */}
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '22px', fontWeight: 600, color: '#1C1A17', marginTop: '40px', marginBottom: '12px' }}>
              Rathdrum — 32 miles, 40–50 min normal traffic
            </h3>
            <p className="mb-8">
              Rathdrum connects to Spokane via two viable routes: (a) <strong style={{ color: '#1C1A17' }}>SH-41 south to I-90 west</strong> — fast in good conditions but through the worst congestion stretch — or (b) <strong style={{ color: '#1C1A17' }}>SH-53 west to US-2 south</strong>, which bypasses I-90 entirely. The SH-53 alternate is the reason Rathdrum punches above its weight as a commuter town. Note: the{' '}
              <a href="https://itd.idaho.gov/project/sh-53-pleasant-view-interchange/" target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A' }}>SH-53 Pleasant View Interchange project</a>{' '}
              is active through 2026–2027 and can add 10+ minutes during construction windows.
            </p>

            {/* Sandpoint */}
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '22px', fontWeight: 600, color: '#1C1A17', marginTop: '40px', marginBottom: '12px' }}>
              Sandpoint — 80 miles, 90–110 min
            </h3>
            <p className="mb-8">
              Sandpoint to Spokane is US-95 south to I-90 west, and at 80 miles each way it is a <strong style={{ color: '#1C1A17' }}>partial-week or hybrid-work commute</strong> rather than a daily one. Most Sandpoint residents who work in Spokane drive in two to three days per week. The route is meaningfully affected by winter weather — see the companion{' '}
              <a href="/articles/north-idaho-microclimates-rathdrum-prairie-sandpoint-snow" style={{ color: '#C4842A' }}>microclimates article</a>{' '}
              and{' '}
              <a href="/articles/snowiest-cities-north-idaho-ranking" style={{ color: '#C4842A' }}>snowfall ranking</a>.
              Plan on 110+ minutes for any winter morning with active snow on US-95 north of Hayden.
            </p>

            {/* Bonners Ferry / Bayview / St. Maries / Kellogg */}
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '22px', fontWeight: 600, color: '#1C1A17', marginTop: '40px', marginBottom: '12px' }}>
              Bonners Ferry, Bayview, St. Maries, Kellogg/Wallace
            </h3>
            <p className="mb-10">
              <strong style={{ color: '#1C1A17' }}>Bonners Ferry</strong> (110 miles, 130–160 min) is not a viable daily commute for almost anyone — remote or one-day-per-week only. <strong style={{ color: '#1C1A17' }}>Bayview</strong> (~55 miles via ID-54 and US-95) runs 50–65 minutes in normal traffic and works for hybrid schedules. <strong style={{ color: '#1C1A17' }}>St. Maries</strong> (65 miles, 80–95 min) is rural two-lane through most of Benewah and southern Kootenai counties — steady but not fast. <strong style={{ color: '#1C1A17' }}>Kellogg and Wallace</strong> (55–70 miles, 65–75 min) are reverse-direction commutes on a lighter westbound flow — often the most consistent of the longer-distance options.
            </p>

            {/* SH-41 to US-95 */}
            <div className="mb-10 p-6 rounded-sm" style={{ backgroundColor: '#1C1A17', border: '2px solid #C4842A' }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 600, color: '#FAFAF8', marginBottom: '16px' }}>
                The single biggest commute risk: the SH-41 to US-95 stretch on I-90
              </h2>
              <p style={{ color: '#C8B99A', lineHeight: 1.8, marginBottom: '16px' }}>
                ITD identifies the <strong style={{ color: '#FAFAF8' }}>five-mile stretch of I-90 between SH-41 (Post Falls) and US-95 (Coeur d&apos;Alene)</strong> as the most heavily traveled and most congested segment in the entire panhandle, with active construction running through <strong style={{ color: '#C4842A' }}>2029</strong>. This single stretch accounts for the majority of unpredictable delays that Post Falls, Hayden, Rathdrum, and Coeur d&apos;Alene commuters experience.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Post Falls west of SH-41', note: 'Keeps you west of the worst congestion zone for Spokane-bound trips.' },
                  { label: "Coeur d'Alene", note: 'East of the zone for the morning drive — but still inside it on the return trip.' },
                  { label: 'Hayden or Rathdrum', note: 'Through it twice daily unless you use the SH-53 alternate, which avoids I-90 entirely.' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <span style={{ color: '#C4842A', flexShrink: 0, paddingTop: '2px' }}>→</span>
                    <p style={{ color: '#C8B99A', margin: 0 }}>
                      <strong style={{ color: '#FAFAF8' }}>Buying in {item.label}:</strong>{' '}{item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Winter */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 600, color: '#1C1A17', marginTop: '48px', marginBottom: '20px' }}>
              Winter and weather — what changes
            </h2>
            <p className="mb-6">
              North Idaho winters add <strong style={{ color: '#1C1A17' }}>10–25 minutes</strong> to most commutes between November and March in normal conditions, and considerably more during active snow events:
            </p>
            <div className="space-y-3 mb-8">
              {[
                { town: 'Post Falls and Coeur d\'Alene', snow: '40–45 in. avg', note: 'I-90 slows modestly. Plowing is fast; main risk is accidents from out-of-state drivers.' },
                { town: 'Hayden and Rathdrum', snow: '40–45 in. avg', note: 'Similar to CdA, plus US-95 segments that can drift in wind.' },
                { town: 'Sandpoint', snow: '70+ in.', note: 'Winter commutes can stretch to 2+ hours during active snow events on US-95.' },
                { town: 'Lookout Pass / Silver Valley reverse commute', snow: '369–400 in.', note: 'Highest snowfall in the panhandle. Assume winter slowdowns even when town conditions look clear.' },
              ].map((row) => (
                <div key={row.town} className="flex gap-4 p-4 rounded-sm" style={{ backgroundColor: '#F5EFE6', borderLeft: '3px solid #C4842A' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, color: '#1C1A17', marginBottom: '2px', fontSize: '14px' }}>{row.town}</p>
                    <p style={{ fontSize: '12px', color: '#C4842A', marginBottom: '4px' }}>{row.snow}</p>
                    <p style={{ fontSize: '13px', color: '#5C5650', margin: 0 }}>{row.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mb-10">
              <a href="https://511.idaho.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A' }}>Idaho 511</a>{' '}
              publishes real-time road conditions including chain restrictions, closures, and incidents. The{' '}
              <a href="https://511.idaho.gov/region/Coeur%20D%27Alene" target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A' }}>Coeur d&apos;Alene region traffic page</a>{' '}
              is the right bookmark for any North Idaho commuter.
            </p>

            {/* Transit alternatives */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 600, color: '#1C1A17', marginTop: '48px', marginBottom: '20px' }}>
              Alternatives to driving — transit, carpool, and remote work
            </h2>
            <p className="mb-6">
              Public transit is limited but growing. The STA I-90/Valley Corridor study outlines a planned two-year pilot service to and from Post Falls and Coeur d&apos;Alene, subject to a cross-state partnership. Currently, <strong style={{ color: '#1C1A17' }}>Citylink</strong> operates fixed-route service inside Kootenai County (Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum) but does not cross into Washington. The{' '}
              <a href="https://www.spokanetransit.com/routes-schedules/" target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A' }}>Spokane Transit Authority</a>{' '}
              operates an express bus from Liberty Lake to downtown Spokane that some North Idaho commuters drive to and park at — effectively a park-and-ride that eliminates the downtown drive from their day.
            </p>
            <p className="mb-10">
              Carpool and vanpool arrangements through employers are common. Hybrid and fully remote work has materially changed the calculus — a Sandpoint-to-Spokane commute that would be impossible five days a week is entirely workable two days a week.
            </p>

            {/* Pre-closing checklist */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 600, color: '#1C1A17', marginTop: '48px', marginBottom: '20px' }}>
              What buyers need to verify before closing
            </h2>
            <p className="mb-6">If you are choosing an address based on a specific commute target, do these five things before going under contract:</p>
            <div className="space-y-3 mb-10">
              {[
                { n: 1, step: 'Drive the commute at your actual departure time, both directions, on a regular weekday — Tuesday through Thursday for the most representative data.' },
                { n: 2, step: 'Drive it in winter conditions if you can, or talk to neighbors who do. Commute behavior is a separate question from driveway and snow load (covered in the infrastructure article).' },
                { n: 3, step: 'Check the current ITD project list for any construction zones on your route. The SH-53 Pleasant View Interchange is one of several active projects that can add 10+ minutes to specific routes.' },
                { n: 4, step: 'Check Idaho 511 real-time conditions for at least one full week before deciding. Patterns become visible in seven days that no aggregator can show you.' },
                { n: 5, step: 'Talk to current residents in the neighborhood you are considering. Real commute behavior — which interchange they use, whether they take SH-53, what time they leave — is the most accurate signal available.' },
              ].map((item) => (
                <div key={item.n} className="flex gap-4 p-4 rounded-sm" style={{ backgroundColor: '#F5EFE6' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '22px', fontWeight: 700, color: '#C4842A', lineHeight: 1, flexShrink: 0, paddingTop: '2px', minWidth: '24px' }}>{item.n}</span>
                  <p style={{ margin: 0, fontSize: '14px', color: '#3A3530' }}>{item.step}</p>
                </div>
              ))}
            </div>

            {/* Sources */}
            <div className="mb-10 p-5 rounded-sm" style={{ backgroundColor: '#F5EFE6', border: '1px solid #E8DDD0' }}>
              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9A9590', marginBottom: '12px' }}>Primary Sources</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="space-y-2">
                {[
                  { label: 'Idaho Transportation Department Traffic Data Program', url: 'https://itd.idaho.gov/traffic-data/' },
                  { label: 'Idaho 511 — Real-time road conditions', url: 'https://511.idaho.gov' },
                  { label: 'Spokane Transit Authority I-90/Valley Corridor Study', url: 'https://www.spokanetransit.com/wp-content/uploads/2022/09/I-90_Valley_CDP_FINAL_20220928.pdf' },
                  { label: 'ITD SH-53 Pleasant View Interchange Project', url: 'https://itd.idaho.gov/project/sh-53-pleasant-view-interchange/' },
                  { label: 'Washington State Department of Transportation', url: 'https://wsdot.wa.gov' },
                ].map((src) => (
                  <li key={src.url}>
                    <a href={src.url} target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A', fontSize: '13px' }}>{src.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="mb-10 p-5 rounded-sm" style={{ backgroundColor: '#F0EBE3', border: '1px solid #E0D5C8' }}>
              <p style={{ fontSize: '12px', color: '#7A7470', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: '#5C5650' }}>Disclaimer:</strong> This article is for informational and planning purposes only and does not predict your specific commute experience. Traffic conditions change daily based on construction, weather, incidents, and seasonal patterns. The times provided are typical ranges, not guarantees. Active construction projects — most notably the I-90 SH-41 to US-95 work through 2029 and the SH-53 Pleasant View Interchange project — will continue to change commute patterns through their completion. Before making a relocation or purchase decision based on commute time, drive the route yourself at your actual departure times, monitor Idaho 511 for at least one week, and review the current ITD construction schedule. I am a licensed REALTOR®, not a transportation planner.
              </p>
            </div>

            {/* Shirin's note */}
            <div className="p-6 rounded-sm" style={{ border: '1px solid #C4842A', backgroundColor: '#FAFAF8' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '18px', fontWeight: 600, color: '#1C1A17', marginBottom: '12px' }}>A note from Shirin</p>
              <p style={{ fontSize: '15px', color: '#5C5650', lineHeight: 1.8, marginBottom: '16px' }}>
                The commute question is rarely about averages — it is about your specific departure time, destination, and tolerance for variability. I have helped Spokane-side commuters land in every corner of Kootenai County, and the right answer almost always comes from driving the route at your actual times, not from a map estimate.
              </p>
              <p style={{ fontSize: '15px', color: '#5C5650', lineHeight: 1.8, marginBottom: '20px' }}>
                If you want help thinking through which North Idaho address minimizes your daily drive given your specific job location and schedule, I am happy to walk through the options with you.
              </p>
              <a
                href="/contact"
                style={{ display: 'inline-block', backgroundColor: '#C4842A', color: '#FAFAF8', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 24px', borderRadius: '2px', textDecoration: 'none' }}
              >
                Talk through your commute →
              </a>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6" style={{ position: 'sticky', top: '32px' }}>

            {/* Quick reference */}
            <div className="rounded-sm overflow-hidden" style={{ border: '1px solid #E8DDD0' }}>
              <div className="px-5 py-4" style={{ backgroundColor: '#1C1A17' }}>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4842A', margin: 0 }}>Quick Reference</p>
                <p style={{ fontSize: '12px', color: '#9A9590', marginTop: '2px', marginBottom: 0 }}>Downtown Spokane · AM Peak</p>
              </div>
              <div className="divide-y" style={{ backgroundColor: '#FAFAF8' }}>
                {[
                  { town: 'Post Falls', time: '35–45 min', miles: '20 mi' },
                  { town: "Coeur d'Alene", time: '40 min', miles: '32 mi' },
                  { town: 'Hayden', time: '45–55 min', miles: '37 mi' },
                  { town: 'Rathdrum', time: '40–50 min', miles: '32 mi' },
                  { town: 'Sandpoint', time: '90–110 min', miles: '80 mi' },
                ].map((row) => (
                  <div key={row.town} className="flex items-center justify-between px-5 py-3" style={{ borderBottom: '1px solid #F0EBE3' }}>
                    <div>
                      <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: '#1C1A17', margin: 0 }}>{row.town}</p>
                      <p style={{ fontSize: '11px', color: '#9A9590', margin: 0 }}>{row.miles}</p>
                    </div>
                    <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 700, color: '#C4842A' }}>{row.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Idaho 511 CTA */}
            <div className="p-5 rounded-sm" style={{ backgroundColor: '#1C1A17' }}>
              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4842A', marginBottom: '8px' }}>Real-Time Conditions</p>
              <p style={{ fontSize: '13px', color: '#C8B99A', lineHeight: 1.6, marginBottom: '12px' }}>Check current traffic, chain restrictions, and incidents on your North Idaho commute route.</p>
              <a href="https://511.idaho.gov" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', backgroundColor: '#C4842A', color: '#FAFAF8', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '10px 16px', borderRadius: '2px', textDecoration: 'none' }}>
                Open Idaho 511 →
              </a>
            </div>

            {/* Key facts */}
            <div className="p-5 rounded-sm" style={{ border: '1px solid #E8DDD0', backgroundColor: '#FAFAF8' }}>
              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4842A', marginBottom: '14px' }}>Key Facts</p>
              <div className="space-y-3">
                {[
                  { label: 'Worst congestion zone', value: 'SH-41 to US-95 on I-90' },
                  { label: 'Construction through', value: '2029' },
                  { label: 'SH-53 interchange project', value: '2026–2027' },
                  { label: '2040 traffic growth', value: '10–20% projected' },
                  { label: 'PM peak near Spokane', value: '~10,100 vehicles/hr' },
                ].map((item) => (
                  <div key={item.label} style={{ borderBottom: '1px solid #F0EBE3', paddingBottom: '10px' }}>
                    <p style={{ fontSize: '11px', color: '#9A9590', margin: '0 0 2px 0' }}>{item.label}</p>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: '#1C1A17', margin: 0 }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related articles */}
            <div className="p-5 rounded-sm" style={{ border: '1px solid #E8DDD0', backgroundColor: '#FAFAF8' }}>
              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4842A', marginBottom: '14px' }}>Related Articles</p>
              <div className="space-y-3">
                {[
                  { href: '/articles/north-idaho-microclimates-rathdrum-prairie-sandpoint-snow', label: 'North Idaho Micro-Climates by Town' },
                  { href: '/articles/snowiest-cities-north-idaho-ranking', label: 'Snowiest Cities in North Idaho' },
                  { href: '/articles/north-idaho-cost-of-living-comparison', label: 'North Idaho Cost of Living (BEA Data)' },
                  { href: '/articles/north-idaho-property-taxes-county-comparison', label: 'Property Taxes by County' },
                  { href: '/articles/buying-property-prairie-wells-septic-roads', label: 'Wells, Septic & County Roads' },
                ].map((link) => (
                  <a key={link.href} href={link.href} style={{ display: 'block', fontSize: '13px', color: '#C4842A', textDecoration: 'none', paddingBottom: '10px', borderBottom: '1px solid #F0EBE3' }}>
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#1C1A17', paddingTop: '64px', paddingBottom: '80px' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4842A', marginBottom: '12px', textAlign: 'center' }}>FAQ</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(28px, 4vw, 40px)', color: '#FAFAF8', textAlign: 'center', marginBottom: '48px', lineHeight: 1.15 }}>
            Common questions about North Idaho commutes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group" style={{ borderBottom: '1px solid #3A3530', paddingBottom: '4px' }}>
                <summary style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', fontWeight: 600, color: '#FAFAF8', cursor: 'pointer', padding: '16px 0', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <span>{faq.q}</span>
                  <span style={{ color: '#C4842A', flexShrink: 0, fontSize: '20px' }}>+</span>
                </summary>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '14px', color: '#C8B99A', lineHeight: 1.8, padding: '0 0 16px 0', margin: 0 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
