import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Spokane vs. Coeur d'Alene: Why So Many Buyers End Up on the Idaho Side | Shirin Abplanalp",
  description: "Thinking about the Inland Northwest but not sure which side of the border to land on? An honest comparison of Spokane and Coeur d'Alene — home prices, taxes, lifestyle, and the geography most agents won't explain.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles/spokane-vs-coeur-dalene-which-is-right-for-you',
  },
  openGraph: {
    title: "Spokane vs. Coeur d'Alene: Why So Many Buyers End Up on the Idaho Side",
    description: "An honest comparison of Spokane and Coeur d'Alene — home prices, taxes, lifestyle, and the geography most agents won't explain.",
    url: 'https://www.realestatewithshirin.com/articles/spokane-vs-coeur-dalene-which-is-right-for-you',
    type: 'article',
    publishedTime: '2026-05-03',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/north-idaho-lake-hero.webp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/spokane-vs-coeur-dalene-which-is-right-for-you#article',
  headline: "Spokane vs. Coeur d'Alene: Why So Many Buyers End Up on the Idaho Side",
  description: "An honest comparison of Spokane and Coeur d'Alene for buyers considering the Inland Northwest — home prices, taxes, lifestyle, and geography.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/north-idaho-lake-hero.webp',
    width: 1672,
    height: 941,
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
  datePublished: '2026-05-03T00:00:00-07:00',
  dateModified: '2026-05-03T00:00:00-07:00',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatewithshirin.com/articles/spokane-vs-coeur-dalene-which-is-right-for-you',
  },
  isPartOf: {
    '@type': 'CollectionPage',
    '@id': 'https://www.realestatewithshirin.com/articles',
    name: 'Articles',
    url: 'https://www.realestatewithshirin.com/articles',
  },
  url: 'https://www.realestatewithshirin.com/articles/spokane-vs-coeur-dalene-which-is-right-for-you',
  keywords: [
    'Spokane vs Coeur d\'Alene',
    'should I live in Spokane or Coeur d\'Alene',
    'moving to Coeur d\'Alene from Spokane',
    'Post Falls Idaho vs Spokane Washington',
    'Inland Northwest relocation 2026',
    'Idaho vs Washington state taxes',
    'Coeur d\'Alene home prices vs Spokane',
    'Northern Idaho relocation guide',
    'Post Falls Idaho real estate',
  ],
  articleSection: 'Relocation Guide',
  wordCount: 1800,
  about: [
    {
      '@type': 'City',
      name: "Coeur d'Alene",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Spokane',
      sameAs: 'https://en.wikipedia.org/wiki/Spokane,_Washington',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Spokane County', containedInPlace: { '@type': 'State', name: 'Washington' } },
    },
    {
      '@type': 'City',
      name: 'Post Falls',
      sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
  ],
  spatialCoverage: {
    '@type': 'Place',
    name: "Spokane-Coeur d'Alene Metro Area",
    geo: {
      '@type': 'GeoShape',
      box: '47.4 -117.6 47.8 -116.6',
    },
  },
  contentLocation: [
    { '@type': 'City', name: "Coeur d'Alene", addressRegion: 'ID', addressCountry: 'US' },
    { '@type': 'City', name: 'Post Falls', addressRegion: 'ID', addressCountry: 'US' },
    { '@type': 'City', name: 'Spokane', addressRegion: 'WA', addressCountry: 'US' },
  ],
  mentions: [
    { '@type': 'City', name: 'Spokane', sameAs: 'https://en.wikipedia.org/wiki/Spokane,_Washington', containedInPlace: { '@type': 'AdministrativeArea', name: 'Spokane County', containedInPlace: { '@type': 'State', name: 'Washington' } } },
    { '@type': 'City', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Post Falls', sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Hayden', sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Sandpoint', sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Bend', sameAs: 'https://en.wikipedia.org/wiki/Bend,_Oregon', containedInPlace: { '@type': 'State', name: 'Oregon' } },
    { '@type': 'AdministrativeArea', name: 'Kootenai County', sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'AdministrativeArea', name: 'Spokane County', sameAs: 'https://en.wikipedia.org/wiki/Spokane_County,_Washington', containedInPlace: { '@type': 'State', name: 'Washington' } },
    { '@type': 'LakeBodyOfWater', name: "Lake Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene_Lake' },
    { '@type': 'LakeBodyOfWater', name: 'Hayden Lake', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'LakeBodyOfWater', name: 'Lake Pend Oreille', sameAs: 'https://en.wikipedia.org/wiki/Lake_Pend_Oreille' },
    { '@type': 'LakeBodyOfWater', name: 'Priest Lake', sameAs: 'https://en.wikipedia.org/wiki/Priest_Lake' },
    { '@type': 'RiverBodyOfWater', name: 'Spokane River', sameAs: 'https://en.wikipedia.org/wiki/Spokane_River' },
    { '@type': 'RiverBodyOfWater', name: 'St. Joe River', sameAs: 'https://en.wikipedia.org/wiki/St._Joe_River' },
    { '@type': 'GovernmentOrganization', name: 'State of Idaho', url: 'https://www.idaho.gov' },
    { '@type': 'GovernmentOrganization', name: 'State of Washington', url: 'https://www.wa.gov' },
    { '@type': 'Airport', name: 'Spokane International Airport', iataCode: 'GEG', url: 'https://www.spokaneairports.net' },
    { '@type': 'Hospital', name: 'Providence Sacred Heart Medical Center', url: 'https://www.providence.org/locations/wa/sacred-heart-medical-center' },
    { '@type': 'Organization', name: 'MultiCare Health System', url: 'https://www.multicare.org' },
    { '@type': 'Legislation', name: 'Washington SB 6346', legislationDate: '2026-03', jurisdiction: { '@type': 'State', name: 'Washington' } },
  ],
  citation: [
    {
      '@type': 'CreativeWork',
      name: 'Spokane Association of Realtors 2025 Year-End Data',
      publisher: { '@type': 'Organization', name: 'Spokane Association of Realtors' },
    },
    {
      '@type': 'CreativeWork',
      name: "Coeur d'Alene Regional Realtors 2025 Year-End Data",
      publisher: { '@type': 'Organization', name: "Coeur d'Alene Regional Realtors" },
    },
    {
      '@type': 'Legislation',
      name: 'Washington SB 6346 (Income Tax)',
      legislationDate: '2026-03',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/spokane-vs-coeur-dalene-which-is-right-for-you#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Is Coeur d'Alene more expensive than Spokane?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The Spokane County median home price is approximately $406,000 versus $575,000 in Kootenai County. The gap is real, but what you get for that premium is often a newer home, a larger lot, and proximity to Lake Coeur d'Alene and the Northern Rockies — a lifestyle upgrade that many buyers from higher-cost markets consider well worth it. Post Falls specifically offers strong value within Kootenai County, with quality new construction available in the $475,000–$600,000 range.",
      },
    },
    {
      '@type': 'Question',
      name: "How far is Spokane from Coeur d'Alene?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Spokane and Coeur d'Alene are 33 miles apart on Interstate 90 — typically a 35-minute drive. Post Falls is about 8 miles west of Coeur d'Alene, making it roughly 25 miles and 30 minutes from downtown Spokane. The proximity means Idaho-side residents have easy access to Spokane International Airport, regional hospitals, and major retail while living somewhere that looks and feels nothing like a mid-size city.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are the tax differences between Idaho and Washington?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Idaho has a flat 5.3% state income tax and a 6% sales tax with no sales tax on groceries. Washington has historically had no state income tax, but in March 2026 Governor Bob Ferguson signed SB 6346 establishing a 9.9% tax on household income over $1 million, effective January 2028. Washington's sales tax in the Spokane area runs 8.9%. Idaho's property taxes are also consistently lower than Washington's in dollar terms, making Idaho residency increasingly attractive for high-income earners and business owners.",
      },
    },
    {
      '@type': 'Question',
      name: "Why are so many buyers choosing Coeur d'Alene over Spokane?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most buyers who cross-shop both markets choose the Idaho side for the same combination of reasons: the lake and mountain setting, the smaller-town feel and lower crime rates, the tax structure, and the ability to access Spokane's services without living there. Coeur d'Alene is 33 miles from Spokane International Airport and regional medical centers, so buyers keep the urban resources while living somewhere genuinely different. For remote workers, retirees, and buyers relocating from high-cost western metros, the trade-off is often an easy decision.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Post Falls a good place to live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Post Falls is one of the fastest-growing cities in Idaho for good reason. It sits 8 miles west of Coeur d'Alene on the Spokane River, offering lake and river access, family-friendly neighborhoods, lower home prices than CDA proper, and 30-minute access to Spokane. The city has grown 24.79% since the 2020 census and continues to see significant new residential development. It is consistently rated lower in crime than Spokane and offers a quality-of-life combination — outdoor access, strong schools, newer housing stock — that is difficult to match at its price point.",
      },
    },
  ],
}

const priceDatasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Inland Northwest Median Home Price Comparison — 2025',
  description: 'Year-end 2025 median sale prices: Spokane County (WA) $406,000 · Post Falls (ID) $521,000 · Kootenai County (ID) $575,000 · Seattle metro (WA) $850,000.',
  creator: { '@id': 'https://www.realestatewithshirin.com/#agent' },
  publisher: { '@id': 'https://www.realestatewithshirin.com/#business' },
  url: 'https://www.realestatewithshirin.com/articles/spokane-vs-coeur-dalene-which-is-right-for-you',
  temporalCoverage: '2025',
  variableMeasured: 'Median residential sale price (USD)',
  measurementTechnique: 'MLS reported sales data',
  spatialCoverage: [
    { '@type': 'AdministrativeArea', name: 'Spokane County', containedInPlace: { '@type': 'State', name: 'Washington' } },
    { '@type': 'City', name: 'Post Falls', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: 'Seattle', containedInPlace: { '@type': 'State', name: 'Washington' } },
  ],
  citation: [
    { '@type': 'WebPage', name: 'Spokane Association of Realtors Market Data', url: 'https://www.spokanerealtors.com' },
    { '@type': 'WebPage', name: "Coeur d'Alene Regional Realtors 2025 Year-End Market Report", url: 'https://www.cdarealtors.com' },
  ],
}

const postFallsPlaceSchema = {
  '@context': 'https://schema.org',
  '@type': 'City',
  '@id': 'https://www.realestatewithshirin.com/articles/spokane-vs-coeur-dalene-which-is-right-for-you/#post-falls',
  name: 'Post Falls',
  description: "Fast-growing family-friendly city in Kootenai County, Idaho, 8 miles west of Coeur d'Alene on the Spokane River. Population approximately 49,000, growing 3.42% annually. Known for newer residential development, lake and river access, and 30-minute proximity to Spokane International Airport.",
  containedInPlace: {
    '@type': 'AdministrativeArea',
    name: 'Kootenai County',
    containedInPlace: { '@type': 'State', name: 'Idaho', containedInPlace: { '@type': 'Country', name: 'United States' } },
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.7193,
    longitude: -116.9671,
  },
  hasMap: 'https://maps.google.com/?q=Post+Falls,+Idaho',
  realEstateAgent: { '@id': 'https://www.realestatewithshirin.com/#agent' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/spokane-vs-coeur-dalene-which-is-right-for-you#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    { '@type': 'ListItem', position: 3, name: "Spokane vs. Coeur d'Alene", item: 'https://www.realestatewithshirin.com/articles/spokane-vs-coeur-dalene-which-is-right-for-you' },
  ],
}

const priceData = [
  { label: 'Spokane County', median: 406000, pct: 56, highlight: false },
  { label: 'Post Falls', median: 521000, pct: 72, highlight: false },
  { label: 'Kootenai County', median: 575000, pct: 80, highlight: true },
  { label: 'Seattle Metro', median: 850000, pct: 100, highlight: false },
]

export default function SpokaneVsCdaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(priceDatasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postFallsPlaceSchema) }} />

      {/* Hero */}
      <section className="bg-[#F5EFE6] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#C4842A] transition-colors">Home</a>
            <span className="mx-2">·</span>
            <a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
            <span className="mx-2">·</span>
            <span className="text-[#5C5650]">Spokane vs. Coeur d&apos;Alene</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Relocation Guide</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">9 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">May 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Spokane vs. Coeur d&apos;Alene: Why So Many Buyers End Up on the Idaho Side
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            Thinking about the Inland Northwest but not sure which side of the border to land on? Here&apos;s an honest comparison of Spokane and Coeur d&apos;Alene — home prices, taxes, lifestyle, and the geography most agents won&apos;t explain.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, licensed realtor at eXp Realty"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · eXp Realty · May 3, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full overflow-hidden" style={{ maxHeight: '520px' }}>
        <img
          src="/images/north-idaho-lake-hero.webp"
          alt="Split view comparing Spokane, Washington with North Idaho's lake country along Interstate 90"
          className="w-full object-cover object-center"
          style={{ maxHeight: '520px' }}
        />
      </div>

      {/* Stats Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">33 mi</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Spokane to CDA</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">~35 min on I-90</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$406K</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Spokane Median</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Spokane County 2025</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$575K</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Kootenai Median</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Kootenai County 2025</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">6%</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Idaho Sales Tax</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">vs 8.9% in Spokane</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article + Sidebar */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article Body */}
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <p className="mb-6">
                Most people who end up buying in Post Falls or Coeur d&apos;Alene started out looking at Spokane.
              </p>
              <p className="mb-6">
                That&apos;s not a criticism of Spokane. It&apos;s a real city with real affordability, a solid job market, and genuine amenities. But somewhere in the process — usually after a weekend visit or a few deep conversations with a local — the Idaho side starts to make more sense. And once it clicks, it really clicks.
              </p>
              <p className="mb-10">
                I made this comparison myself when my husband and I relocated from Bend, Oregon. We looked at both sides. We talked to people who&apos;d landed in each. And we planted our roots in Post Falls. This is the comparison I wish I&apos;d had when we were deciding.
              </p>

              {/* Section: Geography */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Basic Geography
              </h2>
              <p className="mb-6">
                Spokane and Coeur d&apos;Alene are 33 miles apart on Interstate 90. Most days, that&apos;s a 35-minute drive. They share the same regional airport, the same mountains, and a lot of the same big-box retail. On the surface, they feel like the same metro area.
              </p>
              <p className="mb-6">
                But they&apos;re not. They&apos;re in different states with different tax structures, different housing markets, and — most importantly — very different relationships with the landscape around them.
              </p>
              <p className="mb-10">
                Spokane is a city of about 230,000 people in the rolling eastern Washington high desert. Coeur d&apos;Alene is a lake town of about 57,000 nestled at the edge of the Northern Rocky Mountains. Post Falls, just eight miles west of Coeur d&apos;Alene, is where most of the new residential growth is happening — and where you&apos;ll find the best combination of value, access, and lifestyle.
              </p>

              {/* Section: Home Prices + Chart */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Home Prices: What the Numbers Actually Say
              </h2>
              <p className="mb-6">
                Let&apos;s get this out of the way first because it&apos;s the first question everyone asks.
              </p>

              {/* Price Comparison Chart */}
              <div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
                <h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-6">
                  Median Home Price Comparison — 2025
                </h3>
                <div className="space-y-4">
                  {priceData.map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between mb-1.5">
                        <span className={`font-dm-sans text-sm ${row.highlight ? 'font-semibold text-[#C4842A]' : 'text-[#1C1A17]'}`}>
                          {row.label}
                        </span>
                        <span className={`font-dm-sans text-sm font-semibold ${row.highlight ? 'text-[#C4842A]' : 'text-[#1C1A17]'}`}>
                          ${row.median.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-2 bg-[#E8DDD0] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${row.highlight ? 'bg-[#C4842A]' : 'bg-[#9A9590]'}`}
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="font-dm-sans text-xs text-[#9A9590] mt-5">Sources: Spokane Association of Realtors, Coeur d&apos;Alene Regional Realtors 2025 year-end data.</p>
              </div>

              <p className="mb-6">
                Yes, Spokane is more affordable on paper. The gap is real, and you should know it going in. But here&apos;s what the headline median doesn&apos;t tell you: what you get in Coeur d&apos;Alene and Post Falls at $575,000 is often a newer home on a larger lot, with mountain or lake views, in a neighborhood that feels nothing like a mid-size American city. What you get in Spokane at $406,000 is frequently an older home on a small urban lot with Spokane traffic and Spokane crime stats as neighbors.
              </p>
              <p className="mb-10">
                In Post Falls specifically, $475,000–$600,000 still gets you quality newer construction in a family-friendly neighborhood — five minutes from the Spokane River, with Coeur d&apos;Alene Lake twenty minutes in one direction and Spokane International Airport thirty minutes in the other. That&apos;s a hard value proposition to argue with.
              </p>

              {/* Section: Taxes */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Taxes: The Idaho Advantage Is Real
              </h2>
              <p className="mb-6">
                This is where the comparison shifts decisively for a lot of buyers — especially anyone coming from Washington or California.
              </p>

              {/* Tax Comparison Table */}
              <div className="my-8 bg-[#1C1A17] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#2C2A27]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Tax Comparison — Idaho vs. Washington (2026)</p>
                </div>
                <div className="divide-y divide-[#2C2A27]">
                  {[
                    { label: 'Sales Tax', idaho: '6.0%', wa: '8.9% (Spokane)', note: 'No Idaho sales tax on groceries' },
                    { label: 'State Income Tax', idaho: '5.3% flat', wa: '$0 (for now)', note: 'WA 9.9% on $1M+ income begins Jan 2028' },
                    { label: 'Property Tax Rate', idaho: 'Lower in $ terms', wa: 'Higher in $ terms', note: "ID Homeowner's Exemption removes up to $125K from taxable value — saves $1,000–$1,500+/yr. WA has no equivalent." },
                    { label: 'Vehicle Registration', idaho: 'Lower', wa: 'Higher', note: 'Based on vehicle value in WA' },
                  ].map((row) => (
                    <div key={row.label} className="px-6 py-4 grid grid-cols-3 gap-4 items-start">
                      <div>
                        <p className="font-dm-sans text-xs font-semibold text-[#9A9590] uppercase tracking-wide">{row.label}</p>
                        {row.note && <p className="font-dm-sans text-xs text-[#6B7A8D] mt-1 leading-snug">{row.note}</p>}
                      </div>
                      <div className="text-center">
                        <p className="font-dm-sans text-sm font-semibold text-[#C4842A]">{row.idaho}</p>
                        <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Idaho</p>
                      </div>
                      <div className="text-center">
                        <p className="font-dm-sans text-sm font-semibold text-[#9A9590]">{row.wa}</p>
                        <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Washington</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mb-6">
                <strong className="text-[#1C1A17]">On property taxes specifically:</strong> Idaho&apos;s rates are consistently lower than Washington&apos;s, which matters a lot when you&apos;re carrying a $500,000+ mortgage. Idaho also gives every primary homeowner a Homeowner&apos;s Exemption that removes up to $125,000 from your home&apos;s taxable assessed value — typically saving $1,000–$1,500+ per year in property taxes. Washington has no equivalent program, and local jurisdictions there can and do raise levies without the structural cap Idaho provides.
              </p>

              <p className="mb-6">
                Washington has historically had no income tax — but that just changed. In March 2026, Governor Bob Ferguson signed SB 6346 into law: a 9.9% income tax on household income over $1 million, effective January 1, 2028. It&apos;s already driving calls to North Idaho agents. A local broker in Coeur d&apos;Alene publicly noted receiving five calls in a single week from Western Washington buyers looking to establish Idaho residency ahead of the new law.
              </p>
              <p className="mb-10">
                If you&apos;re a high-income earner, a business owner, or anyone with significant investment income, the math on Idaho residency is worth running with your CPA before you decide which side of the state line to buy on.
              </p>

              {/* Section: Spokane as a Feature */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Spokane Factor — And Why It&apos;s a Feature, Not a Bug
              </h2>
              <p className="mb-6">
                Here&apos;s something that surprises a lot of buyers: living in Post Falls or Coeur d&apos;Alene doesn&apos;t mean giving up Spokane. You keep most of the benefits of a mid-size city while living somewhere that looks nothing like one.
              </p>
              <p className="mb-4">From Post Falls or CDA, you&apos;re 30–35 minutes from:</p>
              <ul className="mb-10 space-y-3">
                {[
                  { label: 'Spokane International Airport', detail: 'Direct flights to Seattle, Portland, Denver, Phoenix, Salt Lake City, Las Vegas, and San Francisco' },
                  { label: 'Major medical centers', detail: 'Providence Sacred Heart and MultiCare are both full regional trauma centers' },
                  { label: 'Big-box retail and services', detail: 'Costco, Home Depot, major hospital systems, specialty clinics' },
                  { label: 'Cultural amenities', detail: 'Gonzaga basketball, Spokane Chiefs hockey, the INB Performing Arts Center, a growing restaurant scene' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="text-[#C4842A] font-semibold mt-1 flex-shrink-0">→</span>
                    <span><span className="font-semibold text-[#1C1A17]">{item.label}</span> — {item.detail}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-10">
                You get all of that without living in it. Idaho-side residents treat Spokane the way Bend residents treat Portland — as a resource you access when you need it, not a place you have to tolerate every day.
              </p>

              {/* Section: What CDA Has */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Coeur d&apos;Alene Has That Spokane Simply Doesn&apos;t
              </h2>
              <p className="mb-6">
                Spokane is a city with access to outdoor recreation. Coeur d&apos;Alene and Post Falls sit inside it.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  {
                    heading: 'The Lakes',
                    body: "Lake Coeur d'Alene is 25 miles long, crystal clear, and the anchor of the region's identity. Hayden Lake sits 15 minutes north. Within 90 minutes you can reach Lake Pend Oreille — Idaho's largest at 43 miles long and over 1,100 feet deep — and Priest Lake, surrounded by old-growth cedar forest. Spokane has the Spokane River. It's fine. It's not this.",
                  },
                  {
                    heading: 'The Mountains',
                    body: "The Coeur d'Alene corridor is bracketed by multiple ranges: the Coeur d'Alene Mountains to the east, the Selkirks to the north, and the Bitterroots toward Montana. They're not weekend destinations — they're the backdrop of daily life. Ski areas, Forest Service roads, trails, and serious backcountry all within an hour.",
                  },
                  {
                    heading: 'The Rivers',
                    body: 'The Spokane River flows directly through Post Falls and offers urban paddling, fishing, and riverside trails. The St. Joe River — often called the highest navigable river in the world — is a fly-fishing destination for anglers from across the country.',
                  },
                  {
                    heading: 'The Climate',
                    body: 'This part of Idaho sits in a partial rain shadow east of the Cascades, meaning green summers and real seasons without the gray oppression of the western slopes. More annual sunny days than Portland, Seattle, or San Francisco.',
                  },
                ].map((item) => (
                  <div key={item.heading} className="border-l-2 border-[#C4842A] pl-5">
                    <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-2">{item.heading}</p>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>

              {/* Section: Lifestyle */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Lifestyle Difference: Small Town vs. Mid-Size City
              </h2>
              <p className="mb-6">
                If you want urban density, a walkable grid, a large food and nightlife scene, and the energy of a real city — Spokane is genuinely better for that. It has more of everything cities have: more restaurants, more concerts, more commercial options.
              </p>
              <p className="mb-6">
                If you want a slower pace, a smaller footprint, a strong sense of community, and the feeling that you moved somewhere rather than to a different city — the Idaho side wins. Coeur d&apos;Alene&apos;s downtown is walkable, vibrant, and oriented around the lake. Post Falls is a family-friendly town with significant new development that hasn&apos;t lost its character. Hayden sits quietly between them with good schools and a suburban feel that works well for families.
              </p>
              <p className="mb-10">
                Safety is a meaningful factor too. Coeur d&apos;Alene and Post Falls consistently show lower crime rates than Spokane — something that comes up in nearly every conversation I have with buyers who are weighing the two.
              </p>

              {/* Section: Who Should Buy Where */}
              <div className="my-10 grid md:grid-cols-2 gap-6">
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <h3 className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-4">Who Should Buy in Spokane</h3>
                  <ul className="space-y-2">
                    {[
                      'Budget is firmly under $400K',
                      'You work in Spokane and commute math matters',
                      'You want the scale of a larger urban environment',
                      'Investment property where entry price is decisive',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 font-dm-sans text-sm text-[#5C5650]">
                        <span className="text-[#9A9590] mt-0.5 flex-shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <h3 className="font-cormorant text-xl !text-[#FAFAF8] font-semibold mb-4">Who Should Buy in CDA / Post Falls</h3>
                  <ul className="space-y-2">
                    {[
                      'Lifestyle and environment matter as much as price',
                      'Relocating from a high-cost state',
                      'Remote worker or business owner with flexibility',
                      'High earner where Idaho tax structure is relevant',
                      'Raising a family in a smaller, safer community',
                      'Lake, mountains, and serious outdoor recreation year-round',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 font-dm-sans text-sm text-[#C4BDB4]">
                        <span className="text-[#C4842A] mt-0.5 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section: Honest Answer */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Honest Answer
              </h2>
              <p className="mb-6">
                Most people genuinely cross-shopping Spokane and Coeur d&apos;Alene aren&apos;t choosing between two equally good options. They&apos;re figuring out whether the premium the Idaho side commands is worth it to them personally.
              </p>
              <p className="mb-10">
                For a lot of buyers — especially those coming from the Bay Area, Seattle, LA, or Portland — the answer is yes. The lifestyle upgrade is significant, the tax picture is favorable, and the geography is genuinely exceptional. They came to look at the map and they stayed for what the map delivers in person. If you&apos;re still in the comparison phase, the best thing I can do is show you both sides and let you feel the difference.
              </p>

              {/* FAQ */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-6 font-semibold">
                Common Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Is Coeur d'Alene more expensive than Spokane?",
                    a: "Yes. The Spokane County median home price is approximately $406,000 versus $575,000 in Kootenai County. The gap is real, but Post Falls specifically offers strong value within Kootenai County — quality new construction in the $475,000–$600,000 range — with proximity to the lake, the mountains, and Spokane's infrastructure.",
                  },
                  {
                    q: 'What are the tax differences between Idaho and Washington?',
                    a: "Idaho has a flat 5.3% state income tax and a 6% sales tax with no tax on groceries. Washington has historically had no state income tax, but in March 2026 Governor Ferguson signed a 9.9% tax on household income over $1 million, effective January 2028. Washington's Spokane area sales tax runs 8.9%. Idaho's property taxes are also lower in dollar terms due to lower home values.",
                  },
                  {
                    q: "How far is Spokane from Coeur d'Alene?",
                    a: "33 miles on I-90 — typically 35 minutes. Post Falls is about 8 miles west of CDA, or 25–30 minutes from downtown Spokane. Idaho-side residents have easy access to Spokane International Airport and regional services without having to live there.",
                  },
                  {
                    q: "Why are buyers choosing Coeur d'Alene over Spokane?",
                    a: "The combination of the lake, the mountains, lower crime rates, a smaller-town feel, and the Idaho tax structure. Remote workers, retirees, and buyers from high-cost western metros consistently say the lifestyle upgrade is worth the price premium — especially when Spokane's services remain accessible 30 minutes away.",
                  },
                  {
                    q: 'Is Post Falls a good place to live?',
                    a: "Post Falls has grown 24.79% since the 2020 census for good reason. It sits 8 miles from Coeur d'Alene on the Spokane River, offers family-friendly neighborhoods with newer housing stock, lower prices than CDA proper, and 30-minute access to Spokane. It consistently shows lower crime rates than Spokane and strong school options.",
                  },
                ].map((faq, i) => (
                  <div
                    key={i}
                    className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]"
                  >
                    <h3 className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">{faq.q}</h3>
                    <div>
                      <p className="font-dm-sans text-[15px] text-[#5C5650] leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="lg:sticky lg:top-8 space-y-6">

                {/* Quick Comparison */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Quick Comparison</p>
                  <div className="space-y-4">
                    {[
                      { label: 'Distance apart', cda: '33 mi / 35 min', spo: '—' },
                      { label: 'Median home price', cda: '$575K', spo: '$406K' },
                      { label: 'Post Falls median', cda: '$521K', spo: '—' },
                      { label: 'Sales tax', cda: '6%', spo: '8.9%' },
                      { label: 'Income tax', cda: '5.3% flat', spo: '$0 (now)' },
                      { label: 'Lake access', cda: 'Yes — 25 mi long', spo: 'River only' },
                    ].map((row) => (
                      <div key={row.label} className="border-t border-[#2C2A27] pt-3 first:border-0 first:pt-0">
                        <p className="font-dm-sans text-xs text-[#6B7A8D] uppercase tracking-wide mb-1">{row.label}</p>
                        <div className="flex justify-between">
                          <span className="font-dm-sans text-xs text-[#C4842A] font-semibold">CDA / Post Falls: {row.cda}</span>
                        </div>
                        {row.spo !== '—' && (
                          <p className="font-dm-sans text-xs text-[#9A9590]">Spokane: {row.spo}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agent Card */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Local Guide</p>
                  <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp" className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-3">Licensed REALTOR® · eXp Realty · #1371861</p>
                  <p className="font-dm-sans text-xs text-[#5C5650] leading-relaxed mb-4">Shirin and her husband made this exact comparison before relocating from Bend, Oregon — and chose Post Falls. She helps buyers navigate both sides of the border every day.</p>
                  <a href="/about" className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    About Shirin
                  </a>
                </div>

                {/* Related Articles */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Articles</p>
                  <div className="space-y-4">
                    <a href="/articles/best-places-to-live-north-idaho-leaving-california" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Best Places to Live in North Idaho for People Leaving California</p>
                      <p className="font-dm-sans text-xs text-[#9A9590] mt-1">CDA, Post Falls, Hayden, Sandpoint compared</p>
                    </a>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/post-falls-idaho-housing-market-2026" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Post Falls Housing Market 2026</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Prices, inventory, and what to expect</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/how-much-do-homes-cost-post-falls-idaho" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">How Much Do Homes Cost in Post Falls?</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Price breakdown by budget, 2026</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/is-it-a-good-time-to-buy-home-northern-idaho" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Is It a Good Time to Buy in Northern Idaho?</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Honest 2026 answer</p>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      <div className="border-t border-[#E8DDD0]" />

      {/* Bottom CTA */}
      <section className="bg-[#1C1A17] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Inland Northwest Relocation</p>
          <h2 className="font-cormorant text-4xl md:text-5xl !text-[#FAFAF8] mb-6 leading-tight font-semibold">
            Ready to See Both Sides?
          </h2>
          <p className="font-dm-sans text-[#C4BDB4] text-lg mb-10 leading-relaxed">
            The geography makes the case better than any article can. If you&apos;re still comparing, the best next step is a conversation — and if you want to see both sides in person, I can help you understand what each one actually delivers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold py-4 px-8 transition-colors">
              Get in Touch
            </a>
            <a href="/articles/post-falls-idaho-housing-market-2026" className="border border-[#5C5650] hover:border-[#9A9590] text-[#C4BDB4] hover:text-[#FAFAF8] font-dm-sans font-semibold py-4 px-8 transition-colors">
              View Post Falls Market
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
