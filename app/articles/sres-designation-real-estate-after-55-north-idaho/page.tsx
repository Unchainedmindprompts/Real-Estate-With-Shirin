import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Why I Chose SRES®: Real Estate After 55 in North Idaho | Shirin Abplanalp",
  description: "Shirin Abplanalp, SRES®, shares the personal story behind her Seniors Real Estate Specialist® designation and what experienced agents understand about real estate after 55 — taxes, aging in place, family coordination, and finding the right home for this chapter of life.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles/sres-designation-real-estate-after-55-north-idaho',
  },
  openGraph: {
    title: "Why I Chose SRES®: Real Estate After 55 in North Idaho",
    description: "What experienced agents understand about real estate after 55 — taxes, aging in place, family coordination, and finding the right North Idaho home for this chapter of life.",
    url: 'https://www.realestatewithshirin.com/articles/sres-designation-real-estate-after-55-north-idaho',
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/shirin-headshot-professional.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Why I Chose SRES®: A Specialist's Guide to Real Estate After 55 in North Idaho",
  description: "Shirin Abplanalp, SRES®, shares the personal story behind her Seniors Real Estate Specialist® designation and what it means for retirees relocating to North Idaho.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
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
        recognizedBy: { '@type': 'Organization', name: 'Idaho Real Estate Commission' },
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
        },
      },
    ],
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.realestatewithshirin.com/#business',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
      width: 1122,
      height: 1402,
    },
  },
  datePublished: '2026-05-04',
  dateModified: '2026-05-04',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatewithshirin.com/articles/sres-designation-real-estate-after-55-north-idaho',
  },
  url: 'https://www.realestatewithshirin.com/articles/sres-designation-real-estate-after-55-north-idaho',
  keywords: [
    'SRES North Idaho',
    'seniors real estate specialist North Idaho',
    'retirement relocation North Idaho',
    "real estate after 55 Coeur d'Alene",
    'aging in place North Idaho',
    'active adult communities North Idaho',
    'retiree relocation Idaho',
    'Post Falls retirement',
    "Coeur d'Alene retirement",
    'Idaho senior relocation',
  ],
  articleSection: 'Senior Real Estate',
  wordCount: 2800,
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    geo: {
      '@type': 'GeoShape',
      box: '47.5 -117.0 48.5 -116.0',
    },
  },
  contentLocation: [
    { '@type': 'City', name: "Coeur d'Alene", addressRegion: 'ID', addressCountry: 'US' },
    { '@type': 'City', name: 'Post Falls', addressRegion: 'ID', addressCountry: 'US' },
    { '@type': 'City', name: 'Hayden', addressRegion: 'ID', addressCountry: 'US' },
    { '@type': 'City', name: 'Sandpoint', addressRegion: 'ID', addressCountry: 'US' },
  ],
  about: [
    { '@type': 'Thing', name: 'Seniors Real Estate Specialist (SRES®)' },
    { '@type': 'Thing', name: 'Retirement Relocation' },
    { '@type': 'Thing', name: 'Aging in Place' },
    { '@type': 'Thing', name: 'Active Adult Communities' },
    { '@type': 'City', name: "Coeur d'Alene", containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: 'Post Falls', containedInPlace: { '@type': 'State', name: 'Idaho' } },
  ],
  mentions: [
    { '@type': 'City', name: "Coeur d'Alene", addressRegion: 'ID', url: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho' },
    { '@type': 'City', name: 'Post Falls', addressRegion: 'ID', url: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho' },
    { '@type': 'City', name: 'Hayden', addressRegion: 'ID', url: 'https://en.wikipedia.org/wiki/Hayden,_Idaho' },
    { '@type': 'City', name: 'Sandpoint', addressRegion: 'ID', url: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho' },
    { '@type': 'AdministrativeArea', name: 'Kootenai County', addressRegion: 'ID', url: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho' },
    { '@type': 'Place', name: "Lake Coeur d'Alene", url: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene_Lake' },
    { '@type': 'GovernmentOrganization', name: 'State of Idaho', url: 'https://www.idaho.gov' },
    { '@type': 'GovernmentOrganization', name: 'State of Washington', url: 'https://www.wa.gov' },
    { '@type': 'Hospital', name: 'Kootenai Health', url: 'https://www.kootenaihealth.org' },
    { '@type': 'Hospital', name: 'Providence Sacred Heart Medical Center', url: 'https://www.providence.org/locations/wa/sacred-heart-medical-center' },
    { '@type': 'Organization', name: 'MultiCare Health System', url: 'https://www.multicare.org' },
    { '@type': 'Organization', name: 'National Association of REALTORS®', url: 'https://www.nar.realtor' },
    { '@type': 'Organization', name: 'Center for REALTOR® Development', url: 'https://crd.realtor' },
    { '@type': 'Organization', name: 'Seniors Real Estate Specialist Council', alternateName: 'SRES Council', url: 'https://sres.realtor' },
  ],
  citation: [
    {
      '@type': 'Legislation',
      name: 'Washington SB 6346 (Income Tax)',
      legislationDate: '2026-03',
    },
    {
      '@type': 'CreativeWork',
      name: 'SRES® Designation Curriculum',
      publisher: {
        '@type': 'Organization',
        name: 'Center for REALTOR® Development',
        url: 'https://crd.realtor',
      },
    },
    {
      '@type': 'GovernmentService',
      name: 'Idaho State Income Tax',
      provider: {
        '@type': 'GovernmentOrganization',
        name: 'Idaho State Tax Commission',
        url: 'https://tax.idaho.gov',
      },
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/sres-designation-real-estate-after-55-north-idaho/#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is North Idaho becoming a retiree relocation destination?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The combination of Idaho's flat 5.3% income tax (with no tax on groceries), lower property taxes than most western states, the lake-area lifestyle, real seasons without the Pacific coast's gray climate, and accessible regional medical infrastructure makes the area particularly suited to retirees from California, Washington, Oregon, Texas, and Arizona. Washington's new 9.9% income tax on household income over $1 million, effective January 2028, is accelerating inquiries from Western Washington retirees specifically.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the SRES® designation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Seniors Real Estate Specialist® designation is presented by the Center for REALTOR® Development under the National Association of REALTORS®. It's specialized training for real estate professionals working with clients over 50, covering housing options for seniors, life-stage transitions, aging-in-place considerations, retirement financial structures, and senior-specific approaches. It's a voluntary credential — most agents don't pursue it.",
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy a single-level home for retirement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not necessarily, but you should consider whether the home you're buying can adapt to aging in place. Single-level layouts are easier. Two-story homes with a primary bedroom on the main floor can work. Multi-story homes without main-floor primary bedrooms become difficult to age in. The cost of moving again at 80 is high, so the home you buy at 60 should anticipate what you'll need at 80.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are active adult communities worth considering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For some retirees, absolutely. Built-in social structure, low maintenance, amenities, and community can be exactly what someone needs. For others, age-restricted communities feel constrained. The honest answer depends on what kind of social life you want in this stage. Worth visiting a few before deciding it's not for you.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does Idaho residency affect taxes for relocating retirees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Idaho has a flat 5.3% state income tax compared to California's progressive structure that can exceed 13%, Oregon's up to 9.9%, and Washington's new $1M+ income tax effective January 2028. The order of operations matters significantly — establishing Idaho residency before selling a long-held home in a high-tax state can save substantial tax on the gain. Coordinate with a CPA who understands both states.",
      },
    },
    {
      '@type': 'Question',
      name: "Should adult children be involved in their parents' real estate decisions?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on the parent. Some welcome family involvement and want their children deeply engaged in the process. Others value their independence and prefer to handle the decisions themselves. A good agent respects what the parent actually wants rather than defaulting to either extreme. Adult children acting from a distance to 'manage' a parent who hasn't asked for that help can create real harm.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'SRES® Guide: Real Estate After 55',
      item: 'https://www.realestatewithshirin.com/articles/sres-designation-real-estate-after-55-north-idaho',
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

const taxData = [
  { state: 'California', rate: 13.3, note: 'Top marginal rate', highlight: false },
  { state: 'Oregon', rate: 9.9, note: 'Top marginal rate', highlight: false },
  { state: 'Washington (2028+)', rate: 9.9, note: '$1M+ household income only', highlight: false },
  { state: 'Idaho', rate: 5.3, note: 'Flat rate — all income levels', highlight: true },
  { state: 'Arizona', rate: 2.5, note: 'Flat rate', highlight: false },
  { state: 'Texas / Nevada', rate: 0, note: 'No state income tax', highlight: false },
]

const agentChecklist = [
  { q: 'Do they hold the SRES® designation?', a: 'Not a guarantee of quality, but it indicates specialized training and care about this client demographic.' },
  { q: 'Have they worked with retirees relocating to this market specifically?', a: "North Idaho's retiree dynamics — tax considerations, lake lifestyle, medical infrastructure, active adult options — require real familiarity." },
  { q: 'Are they comfortable working with adult family members?', a: 'Family coordination is part of this work. An agent who only wants to talk to one decision-maker may not be equipped.' },
  { q: 'Do they ask about healthcare needs, mobility, and 5-to-10-year plans?', a: 'These should shape which properties you look at from the beginning, not be afterthoughts.' },
  { q: 'Are they willing to slow down?', a: "Senior transactions often need more time. An agent pushing for quick closings without acknowledging complexity isn't right for this work." },
  { q: 'Will they tell you the truth about whether you should move at all?', a: 'Sometimes the answer is no. An agent willing to lose a transaction for honest counsel is the kind worth working with.' },
]

const promises = [
  { label: "I'll listen first.", detail: "Before we look at properties, I want to understand what you're actually trying to accomplish in this chapter of your life. The real estate transaction is downstream of that." },
  { label: "I'll respect your autonomy.", detail: "Whether the conversation is about a home you've lived in for 40 years or one you're considering buying, the decision is yours. My job is to give you the information and perspective you need to decide well, not to push you toward an outcome." },
  { label: "I'll involve your family if you want them involved.", detail: "Some clients want adult children deeply engaged. Others want their independence respected and the children kept at arm's length. Both are legitimate. I'll follow your lead." },
  { label: "I'll be honest about trade-offs.", detail: "Every property has them. Every market has them. Every timing decision has them. You'll get my real opinion, not the version that closes faster." },
  { label: "I'll handle the technical complexity.", detail: "Tax timing, residency considerations, capital gains coordination — these are layers I'll keep track of so you don't have to. I'll loop in your CPA, your estate planner, and your financial advisor when appropriate." },
  { label: "I'll remember why this work matters.", detail: "My mother lived alone into her mid-90s with less support than she should have had. I can't go back and change that. But I can do this work for other families with the care and attention I wish someone had brought to ours." },
]

const agingInPlaceQuestions = [
  { q: 'Can the home be modified for accessibility without major reconstruction?', a: 'Single-level layouts adapt better. Wide hallways adapt better. Bathrooms with space for grab bars and walk-in showers adapt better than tight original-1970s bathrooms.' },
  { q: 'Is the property physically manageable?', a: 'Five acres of wooded land is a different commitment at 80 than at 60. Will snow removal be feasible in 15 years? Are the access roads passable in winter for emergency vehicles?' },
  { q: 'Is the social infrastructure there?', a: "Loneliness is one of the most under-discussed factors in senior wellbeing. A gorgeous but isolated property may not serve someone well as their support network shifts. Proximity to community — places of worship, community centers, friends, family — matters more than retirement marketing typically acknowledges." },
  { q: 'Is there a path forward if the home stops working?', a: "Not every retiree wants to age in place forever. The original home should be sellable when that transition happens. Highly customized homes in unusual locations can be hard to sell when the time comes." },
]

const faqs = [
  {
    q: 'Why is North Idaho becoming a retiree relocation destination?',
    a: "The combination of Idaho's flat 5.3% income tax (with no tax on groceries), lower property taxes than most western states, the lake-area lifestyle, real seasons without the Pacific coast's gray climate, and accessible regional medical infrastructure makes the area particularly suited to retirees from California, Washington, Oregon, Texas, and Arizona. Washington's new 9.9% income tax on household income over $1 million, effective January 2028, is accelerating inquiries from Western Washington retirees specifically.",
  },
  {
    q: 'What is the SRES® designation?',
    a: "The Seniors Real Estate Specialist® designation is presented by the Center for REALTOR® Development under the National Association of REALTORS®. It's specialized training for real estate professionals working with clients over 50, covering housing options for seniors, life-stage transitions, aging-in-place considerations, retirement financial structures, and senior-specific approaches. It's a voluntary credential — most agents don't pursue it.",
  },
  {
    q: 'Should I buy a single-level home for retirement?',
    a: "Not necessarily, but you should consider whether the home you're buying can adapt to aging in place. Single-level layouts are easier. Two-story homes with a primary bedroom on the main floor can work. Multi-story homes without main-floor primary bedrooms become difficult to age in. The cost of moving again at 80 is high, so the home you buy at 60 should anticipate what you'll need at 80.",
  },
  {
    q: 'Are active adult communities worth considering?',
    a: "For some retirees, absolutely. Built-in social structure, low maintenance, amenities, and community can be exactly what someone needs. For others, age-restricted communities feel constrained. The honest answer depends on what kind of social life you want in this stage. Worth visiting a few before deciding it's not for you.",
  },
  {
    q: 'How does Idaho residency affect taxes for relocating retirees?',
    a: "Idaho has a flat 5.3% state income tax compared to California's progressive structure that can exceed 13%, Oregon's up to 9.9%, and Washington's new $1M+ income tax effective January 2028. The order of operations matters significantly — establishing Idaho residency before selling a long-held home in a high-tax state can save substantial tax on the gain. Coordinate with a CPA who understands both states.",
  },
  {
    q: "Should adult children be involved in their parents' real estate decisions?",
    a: "It depends on the parent. Some welcome family involvement and want their children deeply engaged in the process. Others value their independence and prefer to handle the decisions themselves. A good agent respects what the parent actually wants rather than defaulting to either extreme. Adult children acting from a distance to 'manage' a parent who hasn't asked for that help can create real harm.",
  },
]

export default function SresArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* Hero */}
      <section className="bg-[#F5EFE6] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#C4842A] transition-colors">Home</a>
            <span className="mx-2">·</span>
            <a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
            <span className="mx-2">·</span>
            <span className="text-[#5C5650]">SRES® Guide: Real Estate After 55</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Senior Real Estate</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">12 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">May 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Why I Chose SRES®: A Specialist&apos;s Guide to Real Estate After 55 in North Idaho
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            What the SRES® designation means, why real estate after 55 is genuinely different, and what families navigating a North Idaho relocation or transition should know.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-abplanalp.jpg"
              alt="Shirin Abplanalp, SRES® and licensed REALTOR® at eXp Realty"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">SRES® · Licensed REALTOR® · eXp Realty · May 4, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">SRES®</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Designation Held</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Seniors Real Estate Specialist</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">5.3%</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Idaho Income Tax</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Flat rate, all income levels</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">30 min</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">To Major Medical</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">CDA to Spokane hospitals</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">2028</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">WA Income Tax</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">9.9% on $1M+ begins</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article */}
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <p className="mb-6">
                My decision to earn the SRES® designation is deeply personal.
              </p>
              <p className="mb-6">
                My mother was strong-willed, proud, and incredibly independent. She lived on her own well into her mid-90s. That independence was admirable, but it also meant she was navigating daily life with far less support than she truly needed. I was living out of state at the time. My sister checked in regularly. Looking back, I know more could have been done to create a safer, more supportive living environment for her.
              </p>
              <p className="mb-6">
                That experience stayed with me. It shaped how I see my role today — not just as a real estate professional, but as someone who can help families navigate these decisions with care, clarity, and compassion.
              </p>
              <p className="mb-10">
                I believe our later years should be lived with dignity, comfort, and peace of mind. Whether that means aging in place with the right support, transitioning to an active adult community, or finding a home in a quieter, more manageable setting — the goal is the same: a safe, secure, and welcoming environment. No one should feel alone or unsupported in this stage of life. No family should feel uncertain about what to do next.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The North Idaho Retiree Reality
              </h2>
              <p className="mb-6">
                Coeur d&apos;Alene, Post Falls, Hayden, and Sandpoint have become some of the most active retiree relocation destinations in the western United States. The reasons aren&apos;t complicated. Idaho has a flat 5.3% state income tax. No tax on groceries. Lower property taxes in dollar terms than most western states. Real seasons without the gray oppression of the Pacific coast. A lake culture that defines the region&apos;s identity.
              </p>
              <p className="mb-6">
                As of March 2026, Washington signed a 9.9% income tax on household income over $1 million, effective January 2028 — which is already accelerating relocation inquiries from Western Washington retirees with significant assets. I&apos;ve watched the influx firsthand. Buyers from California, Washington, Oregon, and increasingly from Texas and Arizona, all approaching or already in retirement, looking for a different chapter of life.
              </p>
              <p className="mb-8">
                What I&apos;ve also watched is how often the real estate process fails these buyers. Not because agents are bad people — most are well-intentioned. But because a relocation transaction for someone over 55 is genuinely different, and most agents don&apos;t know what they don&apos;t know.
              </p>

              {/* Tax Comparison Chart */}
              <div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
                <h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-6">
                  State Income Tax — Common Retirement Origin States vs. Idaho
                </h3>
                <div className="space-y-5">
                  {taxData.map((row) => (
                    <div key={row.state}>
                      <div className="flex justify-between mb-1.5">
                        <span className={`font-dm-sans text-sm ${row.highlight ? 'font-semibold text-[#C4842A]' : 'text-[#1C1A17]'}`}>
                          {row.state}
                        </span>
                        <span className={`font-dm-sans text-sm font-semibold ${row.highlight ? 'text-[#C4842A]' : 'text-[#1C1A17]'}`}>
                          {row.rate === 0 ? 'None' : `${row.rate}%`}
                        </span>
                      </div>
                      <div className="h-2 bg-[#E8DDD0] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${row.highlight ? 'bg-[#C4842A]' : 'bg-[#9A9590]'}`}
                          style={{ width: row.rate === 0 ? '1.5%' : `${(row.rate / 13.3) * 100}%` }}
                        />
                      </div>
                      <p className="font-dm-sans text-xs text-[#9A9590] mt-1">{row.note}</p>
                    </div>
                  ))}
                </div>
                <p className="font-dm-sans text-xs text-[#9A9590] mt-6 pt-4 border-t border-[#E8DDD0]">
                  Sources: State revenue departments. Washington rate applies to household income over $1M beginning January 2028 (SB 6346). Idaho rate is a flat tax applied to all taxable income.
                </p>
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Most Agents Miss
              </h2>
              <p className="mb-6">
                When you&apos;re working with a buyer in their 30s or 40s, the questions are mostly about the house itself. Square footage. School ratings. Commute time. Yard. Garage. The transaction is straightforward.
              </p>
              <p className="mb-8">
                When you&apos;re working with a buyer or seller over 55, those questions are still relevant — but they&apos;re sitting on top of a much larger set of considerations that often go unspoken. A good agent for this stage of life needs to understand all of them.
              </p>

              <div className="space-y-8 mb-10">
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-2">The Home Itself Looks Different</p>
                  <p>A two-story home with a finished basement is fine for a 40-year-old. For someone planning the next 20 to 30 years, single-level living becomes increasingly important. Bedroom and laundry on the main floor. Wide doorways. A primary bathroom that can accommodate aging in place. Curbless showers. A garage that allows entry without stairs. None of this is urgent at 60. All of it is essential by 80. The home you buy at 60 should anticipate the home you&apos;ll need at 80, because the cost of moving again is high — financially and emotionally.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-2">Location Relative to Medical Care</p>
                  <p>After 55, the geography of medical access becomes part of the decision. North Idaho is reasonably well-served by Kootenai Health in Coeur d&apos;Alene and the Spokane medical centers 30 minutes away — Providence Sacred Heart and MultiCare are both full regional trauma centers. But the specific location within North Idaho matters. A property 45 minutes north of CDA in beautiful rural terrain is a very different reality from a Post Falls property 25 minutes from a major hospital. Both can be the right answer. The question has to be asked.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-2">The Financial Structure Is More Complex</p>
                  <p>Buyers over 55 are often working with multiple income streams: pension distributions, 401(k) and IRA withdrawals, Social Security timing, capital gains from the sale of a long-held home, and sometimes 1031 exchanges from investment properties. The order in which these moves happen affects taxes significantly. Selling your California home before establishing Idaho residency means California taxes the gain. Establishing Idaho residency first means Idaho&apos;s lower rate applies. I&apos;m not your tax advisor — but I&apos;ve learned to ask the questions that prompt buyers to talk to one before they make decisions they&apos;ll regret.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-2">The Family Coordination Is Real</p>
                  <p>A 35-year-old buyer makes the decision with a spouse. A 65-year-old buyer often makes the decision with a spouse and adult children — sometimes in the same state, often not, sometimes in agreement, often not. A good agent for this stage of life knows how to work with the whole family system, not just the named buyer. That means including adult children in conversations when appropriate, understanding the dynamics, and being honest when family pressure is pushing toward a decision that may not be right for the actual buyer.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-2">The Selling Side Has Its Own Complexity</p>
                  <p>For local North Idaho seniors selling a long-held family home, the considerations multiply. Decades of accumulated possessions. Emotional attachment to a home where major life events happened. Estate planning intersections. Capital gains exclusions ($250,000 single, $500,000 married filing jointly) that need to be timed correctly. This is where SRES® training matters most. The technical real estate transaction is straightforward. The human transaction underneath it isn&apos;t.</p>
                </div>
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Aging in Place Actually Means
              </h2>
              <p className="mb-6">
                The phrase &quot;aging in place&quot; gets used a lot. For many North Idaho relocators, it means buying a home now that will support aging in place later. That&apos;s a different planning exercise than buying a starter home or a forever home in the conventional sense.
              </p>
              <p className="mb-6">Practically, it means evaluating properties against questions most younger buyers don&apos;t think to ask:</p>
              <ul className="mb-8 space-y-4">
                {agingInPlaceQuestions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C4842A] font-semibold mt-1 flex-shrink-0">→</span>
                    <span>
                      <span className="font-semibold text-[#1C1A17]">{item.q}</span>{' '}
                      {item.a}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mb-10">
                These aren&apos;t depressing questions. They&apos;re honest ones. Asking them before purchase is far better than wishing you had asked them later.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Active Adult Community Option
              </h2>
              <p className="mb-6">
                Some retirees relocating to North Idaho aren&apos;t looking for traditional single-family homes. They want active adult communities — typically age-restricted developments designed for residents 55+ with amenities, social programming, and built-in community.
              </p>
              <p className="mb-6">
                North Idaho has a growing number of these options, primarily concentrated around Coeur d&apos;Alene and Post Falls. They range from modest patio-home developments to communities with golf, pickleball, fitness centers, and clubhouse social calendars.
              </p>
              <p className="mb-10">
                Whether an active adult community is the right answer depends on what you&apos;re looking for. Some retirees thrive in them — the built-in social structure, the lack of yard maintenance, the easy access to amenities. Others find them too constrained. Many people initially resistant to the idea end up loving them once they experience the community. Many who think they want one find the reality doesn&apos;t match expectations. This is one of the conversations I have with clients early in the process. There&apos;s no right answer, only the right answer for you.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                When the Family Initiates the Conversation
              </h2>
              <p className="mb-6">
                Sometimes adult children call me about their parents. This is delicate work. The parent may not have asked for help. They may be resistant to changes the children see as obvious. They may be navigating early cognitive changes that complicate the conversation. They may be perfectly capable but living in a home that&apos;s no longer right for them, without recognizing that themselves.
              </p>
              <p className="mb-6">
                Working with these family situations requires patience and a clear understanding of who the actual client is. Even when children are coordinating logistics or financing, the parent is the buyer or seller. Their preferences, dignity, and decision-making authority have to be respected throughout. I&apos;ve learned to facilitate these conversations rather than steamroll them, and to know when to slow down.
              </p>
              <p className="mb-10">
                If you&apos;re an older adult who&apos;s been pushed toward a move you&apos;re not sure about — I&apos;ll tell you honestly. There are situations where staying in the current home with the right support is genuinely the better answer than relocating. A good SRES® agent should be willing to say that, even though it means losing a transaction.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What to Look For in an Agent
              </h2>
              <p className="mb-6">
                Most agents are general practitioners. For seniors relocating or downsizing, the standard process often fails — not dramatically, but in small ways that add up. Here are questions worth asking:
              </p>
              <div className="my-8 bg-[#1C1A17] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#2C2A27]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Agent Evaluation Checklist — Real Estate After 55</p>
                </div>
                <div className="divide-y divide-[#2C2A27]">
                  {agentChecklist.map((item, i) => (
                    <div key={i} className="px-6 py-4">
                      <p className="font-dm-sans text-sm font-semibold text-[#FAFAF8] mb-1">{item.q}</p>
                      <p className="font-dm-sans text-xs text-[#9A9590] leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What I Promise My Clients
              </h2>
              <p className="mb-6">
                Before we look at properties, before we strategize about pricing, before we talk about timing — I want to understand what you&apos;re actually trying to accomplish in this chapter of your life. The real estate transaction is downstream of that.
              </p>
              <ul className="mb-10 space-y-4">
                {promises.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C4842A] font-semibold mt-1 flex-shrink-0">✓</span>
                    <span>
                      <span className="font-semibold text-[#1C1A17]">{item.label}</span>{' '}
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mb-10">
                If you&apos;re considering relocating to North Idaho, downsizing here, or helping a parent navigate either of those decisions, I&apos;d be glad to talk. Even if we don&apos;t end up working together, I&apos;ll do my best to give you something useful.
              </p>

              {/* FAQ */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-6 font-semibold">
                Common Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
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

                {/* SRES® Quick Facts */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">SRES® at a Glance</p>
                  <div className="space-y-4">
                    {[
                      { label: 'Full Name', value: 'Seniors Real Estate Specialist®' },
                      { label: 'Issued By', value: 'National Association of REALTORS®' },
                      { label: 'Client Focus', value: 'Buyers and sellers 50+' },
                      { label: 'Idaho Income Tax', value: '5.3% flat rate' },
                      { label: 'Capital Gains Exclusion', value: '$250K single / $500K married' },
                      { label: 'WA Tax (2028)', value: '9.9% on $1M+ household income' },
                      { label: 'CDA to Spokane Medical', value: '~30 minutes' },
                    ].map((item) => (
                      <div key={item.label} className="border-t border-[#2C2A27] pt-3 first:border-0 first:pt-0">
                        <p className="font-dm-sans text-xs text-[#6B7A8D] uppercase tracking-wide mb-1">{item.label}</p>
                        <p className="font-dm-sans text-xs text-[#C4842A] font-semibold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* About Shirin */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your SRES® Specialist</p>
                  <img src="/images/shirin-abplanalp.jpg" alt="Shirin Abplanalp, SRES® and licensed REALTOR® at eXp Realty" className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-3">SRES® · Licensed REALTOR® · eXp Realty · #1371861</p>
                  <p className="font-dm-sans text-xs text-[#5C5650] leading-relaxed mb-4">
                    Shirin earned the SRES® designation after personal experience navigating aging, independence, and family decisions. She works with retirees and their families relocating to North Idaho every day.
                  </p>
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
                      <a href="/articles/spokane-vs-coeur-dalene-which-is-right-for-you" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Spokane vs. Coeur d&apos;Alene: Why Buyers End Up on the Idaho Side</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">An honest comparison of both markets</p>
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
          <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Real Estate After 55 in North Idaho</p>
          <h2 className="font-cormorant text-4xl md:text-5xl !text-[#FAFAF8] mb-6 leading-tight font-semibold">
            Let&apos;s Talk About Your Next Chapter
          </h2>
          <p className="font-dm-sans text-[#C4BDB4] text-lg mb-10 leading-relaxed">
            Whether you&apos;re relocating to North Idaho, helping a parent make a transition, or just beginning to think through your options — I&apos;d be glad to have an honest conversation about what makes sense for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold py-4 px-8 transition-colors">
              Get in Touch
            </a>
            <a href="/areas/post-falls-idaho" className="border border-[#5C5650] hover:border-[#9A9590] text-[#C4BDB4] hover:text-[#FAFAF8] font-dm-sans font-semibold py-4 px-8 transition-colors">
              Explore Post Falls
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
