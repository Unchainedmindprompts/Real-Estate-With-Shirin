import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trutina at North Place: The Best Senior Location in North Idaho? | Shirin Abplanalp',
  description:
    "A local REALTOR's guide to Trutina at North Place, Greenstone Homes' new 55+ active adult community in Post Falls — the 2026 price range, the new Prairie Medical Campus nearby, the lowest-snow microclimate in North Idaho, and why you need your own buyer's agent in new construction.",
  alternates: {
    canonical:
      'https://www.realestatewithshirin.com/articles/trutina-at-north-place-senior-community-post-falls-buyer-guide',
  },
  openGraph: {
    title: 'Trutina at North Place: Why This Might Be the Best Senior Location in North Idaho',
    description:
      "Greenstone Homes' 55+ community in Post Falls — the new hospital 5-7 minutes away, the lowest snow in North Idaho, 30 minutes to the airport, and why you want your own agent in new construction.",
    url: 'https://www.realestatewithshirin.com/articles/trutina-at-north-place-senior-community-post-falls-buyer-guide',
    type: 'article',
    publishedTime: '2026-05-25',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/trutina-at-north-place-post-falls.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/trutina-at-north-place-senior-community-post-falls-buyer-guide#article',
  headline: 'Trutina at North Place: Why This Might Be the Best Senior Location in North Idaho',
  alternativeHeadline:
    "A Local REALTOR's Complete Guide to Greenstone Homes' 55+ Community in Post Falls — Including the Adjacent Prairie Medical Campus, Construction Quality, and Why You Need Buyer Representation in New Construction",
  description:
    "An in-depth local REALTOR's guide to Trutina at North Place, Greenstone Homes' new 55+ active adult community in Post Falls, Idaho. Covers the realistic 2026 price range ($500K-$650K), the location advantages including proximity to the new Kootenai Health Prairie Medical Campus, lowest-snow microclimate in North Idaho, 30-minute Spokane International Airport access, community design philosophy, and the critical importance of independent buyer representation in new-construction purchases.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/trutina-at-north-place-post-falls.png',
    width: 1672,
    height: 941,
  },
  author: { '@id': 'https://www.realestatewithshirin.com/#agent' },
  publisher: { '@id': 'https://www.realestatewithshirin.com/#business' },
  datePublished: '2026-05-25T00:00:00-07:00',
  dateModified: '2026-07-07T00:00:00-07:00',
  mainEntityOfPage: 'https://www.realestatewithshirin.com/articles/trutina-at-north-place-senior-community-post-falls-buyer-guide',
  url: 'https://www.realestatewithshirin.com/articles/trutina-at-north-place-senior-community-post-falls-buyer-guide',
  articleSection: 'North Idaho Buyer Guides',
  keywords: [
    'Trutina at North Place',
    '55+ community Post Falls',
    'active adult community North Idaho',
    'Greenstone Homes Post Falls',
    "senior community Coeur d'Alene area",
    'Prairie Medical Campus Post Falls',
    'Kootenai Health Post Falls hospital',
    'senior real estate North Idaho',
    'SRES Post Falls Idaho',
    'new construction buyer agent',
    'North Place Post Falls',
  ],
  wordCount: 3100,
  spatialCoverage: {
    '@type': 'Place',
    name: 'Post Falls, Idaho',
    geo: { '@type': 'GeoShape', box: '47.6500 -116.9800 47.7600 -116.8800' },
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
  },
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  about: [
    {
      '@type': 'Place',
      name: 'Trutina at North Place',
      address: { '@type': 'PostalAddress', streetAddress: '1078 E Blair Ave', addressLocality: 'Post Falls', addressRegion: 'ID', postalCode: '83854', addressCountry: 'US' },
    },
    { '@type': 'Thing', name: 'Senior Real Estate' },
    { '@type': 'Thing', name: '55+ Active Adult Community' },
  ],
  mentions: [
    { '@type': 'Organization', name: 'Greenstone Homes', url: 'https://greenstonehomes.com' },
    { '@type': 'Organization', name: 'Kootenai Health', url: 'https://www.kh.org' },
    { '@type': 'Organization', name: 'MultiCare Health System', url: 'https://www.multicare.org' },
    { '@type': 'GovernmentOrganization', name: 'Idaho Real Estate Commission', url: 'https://irec.idaho.gov' },
    { '@type': 'Organization', name: 'National Association of REALTORS®', sameAs: 'https://en.wikipedia.org/wiki/National_Association_of_Realtors' },
  ],
  citation: [
    { '@type': 'WebPage', name: 'Greenstone Homes — Trutina 55+ at North Place', url: 'https://greenstonehomes.com/community/trutina-at-north-place', publisher: { '@type': 'Organization', name: 'Greenstone Homes', url: 'https://greenstonehomes.com' } },
    { '@type': 'WebPage', name: 'Spokane Journal of Business — Greenstone begins work on Trutina at North Place', url: 'https://www.spokanejournal.com/articles/17545-greenstone-begins-work-on-trutina-at-north-place', publisher: { '@type': 'Organization', name: 'Spokane Journal of Business', url: 'https://www.spokanejournal.com' } },
    { '@type': 'WebPage', name: 'Kootenai Health and MultiCare Announce 30-Acre Prairie Medical Campus in Post Falls', url: 'https://www.kh.org/kootenai-health-and-multicare-announce-30-acre-prairie-medical-campus-in-post-falls/', publisher: { '@type': 'Organization', name: 'Kootenai Health', url: 'https://www.kh.org' } },
    { '@type': 'WebPage', name: "Coeur d'Alene Press — Coming soon: Prairie Medical Campus", url: 'https://cdapress.com/news/2025/mar/13/introducing-prairie-medical-campus/', publisher: { '@type': 'Organization', name: "Coeur d'Alene Press", url: 'https://cdapress.com' } },
    { '@type': 'WebPage', name: 'KHQ — Kootenai Health and MultiCare to build Post Falls micro-hospital', url: 'https://www.khq.com/news/kootenai-health-and-multicare-to-build-post-falls-micro-hospital/article_21587a56-ffa6-11ef-a1ca-5f0059b0824d.html', publisher: { '@type': 'Organization', name: 'KHQ-TV', url: 'https://www.khq.com' } },
    { '@type': 'WebPage', name: 'CDC — Older Adult Falls Data', url: 'https://www.cdc.gov/falls/data-research/index.html', publisher: { '@type': 'GovernmentOrganization', name: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov' } },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/trutina-at-north-place-senior-community-post-falls-buyer-guide#faq',
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles/trutina-at-north-place-senior-community-post-falls-buyer-guide#article' },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Trutina at North Place?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trutina at North Place is a 55+ active adult community being developed by Greenstone Homes in Post Falls, Idaho. When fully built out over an estimated 20 years, the community will include 300-350 residential units — about 250 single-family homes, plus cottages, townhomes, and elevator-served rental apartments. The development is part of the larger 400-acre North Place master-planned community near Prairie Falls Golf Club.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the price range at Trutina at North Place in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The realistic 2026 price range for desirable single-family homes at Trutina is $500,000 to $650,000. Smaller cottage homes and townhomes are lower; rental apartments are also available. Pricing changes regularly based on phase, lot selection, floor plan, and upgrade packages — always verify with Greenstone for current pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Trutina really age-restricted to 55+?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Trutina at North Place is a 55+ active adult community. Specific occupancy rules (whether one resident must be 55+ or both, exceptions for spouses or surviving spouses under 55, and rules about adult children or grandchildren visiting or staying long-term) should be confirmed directly with Greenstone, as community documents control these specifics.',
      },
    },
    {
      '@type': 'Question',
      name: 'How close is the new Kootenai Health hospital to Trutina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Approximately 5 to 7 minutes from Trutina. The Kootenai Health and MultiCare Prairie Medical Campus is being built at the southeast corner of Highway 41 and Prairie Avenue in Post Falls. Phase 1 includes a 25,000-square-foot micro-hospital with a 12-room emergency department, imaging, overnight stays, and an ambulatory surgery center. Groundbreaking was March 25, 2026, with completion anticipated late 2027 to early 2028. The campus has long-term plans to potentially expand into a full-service hospital.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Spokane International Airport (GEG) from Trutina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Approximately 30 minutes west on I-90, with no major traffic chokepoints between Post Falls and the airport. Trutina is roughly 5 minutes from the I-90 on-ramp, making airport access unusually straightforward for an active adult community.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I have my own REALTOR® at Trutina, or do I have to use the Greenstone agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You can absolutely have your own REALTOR® represent you in a Trutina purchase, and you should. The onsite Greenstone agent represents Greenstone (the seller/builder); a buyer's agent represents you. The critical timing detail: engage your REALTOR® before your first visit to the model home or registering with the onsite agent. Most builders, including Greenstone, will honor buyer representation when it's established from the first contact.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the snow situation at Trutina?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post Falls receives the least snow of any major city in North Idaho — significantly less than Hayden, Rathdrum, or Sandpoint. For seniors, lower snowfall translates directly to lower fall risk and lower cardiac risk from shoveling, both of which are documented medical concerns for adults 65+. Trutina’s Cottage Collection homes also include partial snow removal as part of the community services.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens with Trutina if I want to stay in the community but downsize later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is one of the community’s structural advantages. With single-family homes, cottages, townhomes, and elevator-served apartments all available in the same community (some for ownership, some for rental), residents can theoretically transition from a larger home to a smaller cottage or an apartment as their needs change — without leaving the community or losing their social network. Specifics around transferring between products would need to be worked out with Greenstone, but the option exists structurally in a way most 55+ communities don’t offer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Greenstone Homes a reputable builder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Greenstone has been building in the Spokane/Coeur d'Alene region for decades and has an established track record. Their existing Trutina community at Liberty Lake, Washington is a real, occupied, mature community — you can drive it and see what their finished communities look like. During Shirin's client's purchase process at Trutina, two other home builders were also identified as buying homes in this community for themselves, which is a strong signal about construction quality from people who would know.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/trutina-at-north-place-senior-community-post-falls-buyer-guide#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Trutina at North Place: The Best Senior Location in North Idaho',
      item: 'https://www.realestatewithshirin.com/articles/trutina-at-north-place-senior-community-post-falls-buyer-guide',
    },
  ],
}

const stats = [
  { value: '55+', label: 'Active adult community', sub: 'Greenstone Homes' },
  { value: '5–7 min', label: 'To the new hospital', sub: 'Prairie Medical Campus' },
  { value: '$500–650K', label: 'Single-family range', sub: '2026, desirable plans' },
  { value: '30 min', label: 'To Spokane airport', sub: 'Straight shot on I-90' },
]

const faqs = faqSchema.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text }))

const linkClass = 'text-[#C4842A] hover:underline'

export default function TrutinaArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#F5EFE6] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#C4842A] transition-colors">Home</a>
            <span className="mx-2">·</span>
            <a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
            <span className="mx-2">·</span>
            <span className="text-[#5C5650]">Trutina at North Place</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">North Idaho Buyer Guides</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">14 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">May 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Trutina at North Place: Why This Might Be the Best Senior Location in North Idaho
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            Not the prettiest, not the most prestigious — but for the specific things that matter as you age, this Post Falls 55+ community may be the best location in the region.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · SRES® · Berkshire Hathaway HomeServices Jacklin Real Estate · May 25, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">{s.value}</p>
                <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">{s.label}</p>
                <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image (placeholder — upload to /public/images/trutina-at-north-place-post-falls.png) */}
      <img
        src="/images/trutina-at-north-place-post-falls.png"
        alt="Trutina at North Place — a 55+ active adult community in Post Falls, Idaho"
        className="w-full h-auto block"
      />

      {/* Article Body */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article */}
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <p className="mb-6">I have clients building at Trutina right now.</p>
              <p className="mb-6">
                They&apos;re not closed yet — new construction takes its time — but watching them go through this process has taught me something I didn&apos;t fully appreciate when I first walked the property: Trutina at North Place might be the single best location in North Idaho for a senior buyer. Not the prettiest. Not the most prestigious. The <em>best</em>, for the specific things that matter as you age.
              </p>
              <p className="mb-10">
                I&apos;ll explain why. But first, let me tell you what Trutina actually is, because most of what&apos;s online about it reads like a brochure, and that&apos;s not what you need.
              </p>

              <p className="mb-10">Buyers making the move to North Idaho later in life often have questions that go beyond a single community. The complete relocation guide covers everything from cost of living to healthcare access:{' '}<a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">Relocating to North Idaho: The Complete Local Guide for Out-of-State Buyers</a>.</p>
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">What Trutina at North Place actually is</h2>
              <p className="mb-6">
                Trutina at North Place is a <strong className="text-[#1C1A17]">55+ active adult community</strong> being built by{' '}
                <a href="https://greenstonehomes.com/community/trutina-at-north-place" target="_blank" rel="noopener noreferrer" className={linkClass}>Greenstone Homes</a>{' '}
                in Post Falls, Idaho — sitting inside a larger 400-acre master-planned community called North Place, near Prairie Falls Golf Club. The basics:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong className="text-[#1C1A17]">300 to 350 residential units</strong> when fully built, including about 250 single-family homes ({' '}
                  <a href="https://www.spokanejournal.com/articles/17545-greenstone-begins-work-on-trutina-at-north-place" target="_blank" rel="noopener noreferrer" className={linkClass}>Spokane Journal of Business</a>)</li>
                <li><strong className="text-[#1C1A17]">$140 million development</strong> with a 20-year build timeline at about 25–40 homes per year</li>
                <li><strong className="text-[#1C1A17]">Realistic 2026 price range for desirable single-family homes: $500,000 to $650,000</strong> (lower-end cottages run smaller and less; this is what buyers are actually purchasing today)</li>
                <li>A mix of product types — single-family homes, cottage homes (1,000–1,300 sq ft), townhomes, and elevator-served apartments — available to <strong className="text-[#1C1A17]">own or rent</strong>, depending on the product</li>
                <li>Model home: Magnolia, at 1078 E Blair Ave., Post Falls, ID 83854, with an onsite Greenstone community agent</li>
              </ul>
              <p className="mb-10">
                The name &ldquo;Trutina&rdquo; means balance. Greenstone has already built one in Liberty Lake, Washington (it&apos;s been operating for years — go drive it, it&apos;s a real, lived-in community), with another planned at Mead Works. Post Falls is the newest. That&apos;s the surface. Now here&apos;s what the brochure won&apos;t tell you.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">The location thesis</h2>
              <p className="mb-10">
                I&apos;ve sold homes across North Idaho and walked clients through nearly every neighborhood that markets to seniors. When I look at Trutina, I see something the marketing materials don&apos;t fully capture — because Greenstone has to sell the <em>homes</em>, but the real story is the <em>location</em>. Here&apos;s what makes it genuinely different.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">1. A brand-new hospital is being built 5–7 minutes away</h3>
              <p className="mb-6">
                This is the big one, and nobody else is talking about it. <strong className="text-[#1C1A17]">Kootenai Health and MultiCare Health System are building a 30-acre medical campus</strong> — the &ldquo;Prairie Medical Campus&rdquo; — at the southeast corner of Highway 41 and Prairie Avenue in Post Falls ({' '}
                <a href="https://www.kh.org/kootenai-health-and-multicare-announce-30-acre-prairie-medical-campus-in-post-falls/" target="_blank" rel="noopener noreferrer" className={linkClass}>Kootenai Health</a>). Trutina is <strong className="text-[#1C1A17]">5 to 7 minutes</strong> from that intersection.
              </p>
              <p className="mb-4">Phase 1, currently under construction, includes ({' '}
                <a href="https://cdapress.com/news/2025/mar/13/introducing-prairie-medical-campus/" target="_blank" rel="noopener noreferrer" className={linkClass}>Coeur d&apos;Alene Press</a>):
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>A <strong className="text-[#1C1A17]">25,000-sq-ft micro-hospital</strong> with a 12-room emergency department, overnight patient rooms, and imaging</li>
                <li>A <strong className="text-[#1C1A17]">65,000-sq-ft medical office building</strong> with an ambulatory surgery center, clinic offices, and lab services</li>
                <li>Groundbreaking March 25, 2026; completion anticipated late 2027 to early 2028</li>
              </ul>
              <p className="mb-6">
                And the long-term vision? Kootenai Health&apos;s CEO told{' '}
                <a href="https://www.khq.com/news/kootenai-health-and-multicare-to-build-post-falls-micro-hospital/article_21587a56-ffa6-11ef-a1ca-5f0059b0824d.html" target="_blank" rel="noopener noreferrer" className={linkClass}>KHQ</a>{' '}
                the campus could grow into a full-service hospital similar to the main Coeur d&apos;Alene campus within a few decades. For a senior making a 20–30 year housing decision, that trajectory matters: year one your nearest ER is 15 minutes east at the main campus; within a couple years a new ER opens 5–7 minutes away; over the following decades it expands toward a full-service hospital essentially in your backyard.
              </p>
              <p className="mb-10">
                I&apos;ve never seen a senior community in this region with this kind of healthcare trajectory. You can read more in my{' '}
                <a href="/articles/north-idaho-healthcare-kootenai-spokane" className={linkClass}>Kootenai Health and Spokane medical centers guide</a> — the short version is that Post Falls is becoming the next major regional medical hub, and Trutina is sitting right in the middle of it.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">2. The lowest snow in North Idaho</h3>
              <p className="mb-6">
                Post Falls gets the <strong className="text-[#1C1A17]">least snow of any major city in North Idaho</strong> — significantly less than Sandpoint, Rathdrum, or even Hayden. I covered the specifics in my{' '}
                <a href="/articles/snowiest-cities-north-idaho-ranking" className={linkClass}>snowiest cities ranking</a>{' '}
                and my{' '}
                <a href="/articles/north-idaho-microclimates-rathdrum-prairie-sandpoint-snow" className={linkClass}>microclimates article</a>, so I won&apos;t repeat the data here.
              </p>
              <p className="mb-6">
                But here&apos;s why it matters specifically for seniors: <strong className="text-[#1C1A17]">falls are the leading cause of injury hospitalization in adults 65+</strong>, per the{' '}
                <a href="https://www.cdc.gov/falls/data-research/index.html" target="_blank" rel="noopener noreferrer" className={linkClass}>CDC</a>. Icy driveways and packed-down walkways are part of that statistic. And heavy snow shoveling is well-documented as a trigger for cardiac events in older adults. Less snow isn&apos;t a lifestyle preference at 70 — it&apos;s a safety factor.
              </p>
              <p className="mb-10">
                Add to that: Trutina&apos;s Cottage Collection homes come with <strong className="text-[#1C1A17]">partial snow removal</strong>{' '}included. Less snow falling, plus less shoveling you&apos;re personally responsible for.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">3. Five minutes to I-90 = 30 minutes to a major airport</h3>
              <p className="mb-6">
                Trutina sits about 5 minutes from I-90, and Spokane International Airport (GEG) is roughly 30 minutes west — a clean, straight shot, no chokepoints. In real life that means your kids and grandkids can fly in for weekends, not just holidays; you can fly out for a long weekend without it being a production; specialists not available locally are 30 minutes from a gate; and when you&apos;re 80 and not driving much, an Uber to GEG is one straightforward ride.
              </p>
              <p className="mb-10">
                The &ldquo;kids visit more often when the airport is easy&rdquo; effect is real and underrated. Senior isolation is one of the biggest health factors after 70, and living 30 minutes from a major airport meaningfully changes how often your family shows up.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">4. Minutes to downtown Post Falls</h3>
              <p className="mb-10">
                Trutina is genuinely close to downtown Post Falls — grocery, pharmacy, doctor, restaurants, hardware store, all within a short drive and increasingly accessible by foot or bike on the growing trail system. This matters more every year past 70: the day someone stops driving is the day proximity to errands becomes the difference between independence and dependence. A rural senior community 25 minutes from a grocery store sounds idyllic — until you&apos;re 82, can&apos;t drive safely, and can&apos;t get to the pharmacy without asking someone. Trutina is intentionally not isolated.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">5. The two-builders-are-buying-in tell</h3>
              <p className="mb-10">
                During my client&apos;s purchase process at Trutina, I learned that <strong className="text-[#1C1A17]">two other home builders have also chosen to build homes in this community for themselves.</strong>{' '}Builders know construction — what holds up at year 10 and what falls apart at year 5. When working builders vote with their own money by purchasing in a competitor&apos;s development to live in personally, that&apos;s one of the strongest endorsements of construction quality you can get. It&apos;s not a perfect proxy, but it lines up with what I&apos;ve observed walking the homes myself: Greenstone&apos;s build quality is legitimately good.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">The design philosophy (this is what makes it different)</h2>
              <p className="mb-6">
                Most 55+ communities in America are gated, isolated bubbles. Some people love that; a lot of active seniors find it strangely lonely. Trutina is intentionally not that. Greenstone&apos;s CEO put it directly to the Spokane Journal: <em>&ldquo;It&apos;s not like you&apos;re trying to create this isolated neighborhood.&rdquo;</em> The design embeds the 55+ community within the larger 400-acre North Place master plan, with shared trails, parks, and pedestrian connections that put senior residents in regular contact with families and younger neighbors. Specifically:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li><strong className="text-[#1C1A17]">Front porches</strong> — the architecture invites people to sit out and see neighbors walk by</li>
                <li>A <strong className="text-[#1C1A17]">pedestrian trail system</strong> for easy exercise and casual encounters</li>
                <li><strong className="text-[#1C1A17]">Smaller backyards</strong> and strategically placed garages — less yard maintenance, more front-porch time</li>
                <li>A planned <strong className="text-[#1C1A17]">central clubhouse</strong> (breaking ground in 2026) with hobby rooms, library, fitness center, pool, pickleball, and community gardens</li>
                <li>Parks already in place (Haystack Park, Penrose Park) and an existing paved trail network</li>
              </ul>
              <p className="mb-10">
                This is the kind of design you don&apos;t realize matters until you&apos;re 78, your spouse passes, and you&apos;re suddenly very alone in a gated complex where everyone keeps their blinds drawn. Trutina is built around the opposite: casual, regular human connection that protects mental health and longevity. Anyone can build pretty houses. Building a community design that genuinely fights senior isolation is rarer than you&apos;d think.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Home and ownership options</h2>
              <p className="mb-6">
                Most 55+ communities make you pick one product. Trutina lets you choose, and lets you decide whether to own or rent:
              </p>
              <div className="my-6 space-y-4 mb-8">
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Blue Sky Collection (single-family homes)</p>
                  <p>Front-entry garage homes, quality construction, minimal maintenance — the larger product in the community. Own or rent. In the realistic 2026 band of $500K–$650K for the desirable plans.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Cottage Collection (cottages and townhomes)</p>
                  <p>1,000–1,300 sq ft, single-level / main-floor living, with <strong className="text-[#1C1A17]">lawn care and partial snow removal included</strong> and <strong className="text-[#1C1A17]">zero-step entry options</strong> (huge for aging in place). Own or rent, lower entry price point.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Elevator-served apartment homes</p>
                  <p>Modern multifamily with elevator access — <strong className="text-[#1C1A17]">rental only</strong> — for seniors who want to live in the community without the equity commitment.</p>
                </div>
              </div>
              <p className="mb-10">
                In practice: a couple in their early 60s could buy a Blue Sky home now and, in 15 years, transition to a Cottage or an apartment <em>without leaving the community</em> — keeping their friends, routine, and familiar streets while their housing matches their life stage. That&apos;s a rare and valuable thing in active adult real estate.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">The honest 20-year build-out reality</h2>
              <p className="mb-6">
                Here&apos;s the part the sales team won&apos;t lead with. <strong className="text-[#1C1A17]">Trutina is in Phase 1 of a 20-year project</strong>, building at 25–40 homes per year. That means if you buy in 2026 you&apos;re an early adopter: the clubhouse breaks ground in 2026 and won&apos;t be done for a while, construction will be ongoing in your neighborhood for years, some amenities in the renderings don&apos;t physically exist yet, and the Prairie Medical Campus across the way is also under construction (opens late 2027/early 2028).
              </p>
              <p className="mb-10">
                For some buyers that&apos;s a deal-breaker. For others it&apos;s an advantage: earlier buyers often get better lot selection, builder upgrade pricing is more flexible in early phases, and long-term appreciation tends to favor early-phase buyers in well-built master-planned communities. You should know which kind of buyer you are <em>before</em> you put down earnest money.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Why you want your own REALTOR® — even in new construction</h2>
              <p className="mb-6">
                The onsite Greenstone agent is professional and knowledgeable; I have nothing bad to say about them. But they work for <em>Greenstone</em> — they represent the seller (the builder). Their job is to sell you a Greenstone home, not to advocate for your specific interests against the builder when those interests don&apos;t align. Here&apos;s what an outside buyer&apos;s agent does that the onsite agent structurally can&apos;t:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Reviews the builder contract independently and flags clauses worth negotiating — earnest money, change-order pricing, completion timelines, warranty language, delay remedies</li>
                <li>Negotiates upgrades and incentives based on the broader market and Trutina&apos;s sales velocity</li>
                <li>Provides comparable analysis at appraisal time so you&apos;re not paying above market</li>
                <li>Tracks construction progress and quality with an independent eye through inspections</li>
                <li>Advises on resale-value implications of lot, floor plan, and upgrade choices</li>
                <li>Negotiates the &ldquo;what-ifs&rdquo; — rate changes between contract and close, build delays, HOA disputes</li>
              </ul>
              <p className="mb-10">
                Idaho law allows buyer representation in new construction, and most reputable builders (including Greenstone) accommodate buyer&apos;s agents without issue — <strong className="text-[#1C1A17]">as long as your agent is engaged from the first contact</strong>. If you walk in and register with the onsite agent before involving a REALTOR®, you may lose the right to bring in independent representation later. The Greenstone agent isn&apos;t the bad guy — they&apos;re doing their job. Your job is to make sure someone is in your corner specifically.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">The senior real estate piece (why I have my SRES®)</h2>
              <p className="mb-6">
                I earned the{' '}
                <a href="/articles/sres-designation-real-estate-after-55-north-idaho" className={linkClass}>SRES® (Seniors Real Estate Specialist) designation</a>{' '}
                specifically because moves like this deserve a specialist. Senior buyers — and the adult children helping them — face issues that don&apos;t come up in a typical transaction:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Coordinating a sale-and-purchase across two markets, often where a paid-off home funds a cash purchase</li>
                <li>Managing the emotional and logistical weight of downsizing</li>
                <li>Building in aging-in-place features now to avoid expensive retrofits later</li>
                <li>Coordinating with adult children who are often involved from another state</li>
                <li>Connecting clients with specialists in senior estate planning, elder law, and senior placement when needed</li>
              </ul>
              <p className="mb-10">
                If you&apos;re considering Trutina — or any senior move in North Idaho — and you&apos;d like to talk through the full picture, that&apos;s literally my specialty.
              </p>

              {/* Disclaimers */}
              <div className="mb-10 p-5 rounded-sm bg-[#F0EBE3] border border-[#E0D5C8]">
                <p className="font-semibold text-[#1C1A17] mb-2">Important disclaimers</p>
                <p className="text-[15px] mb-3"><strong className="text-[#1C1A17]">I&apos;m a REALTOR®, not a CPA, attorney, or financial advisor.</strong> This article is educational information about a specific community and the senior real estate market in North Idaho — not personalized tax, legal, or financial advice. Always consult the appropriate professionals for those specifics.</p>
                <p className="text-[15px] mb-3"><strong className="text-[#1C1A17]">Market conditions and community pricing change.</strong> All pricing, build timelines, and availability are based on publicly available information and my direct market knowledge as of May 2026. Always verify current details directly with Greenstone Homes or through a licensed REALTOR® before making decisions.</p>
                <p className="text-[15px]"><strong className="text-[#1C1A17]">Idaho real estate transactions are governed by Idaho law and the{' '}
                  <a href="https://irec.idaho.gov" target="_blank" rel="noopener noreferrer" className={linkClass}>Idaho Real Estate Commission</a>.</strong> As a licensed Idaho REALTOR®, I represent buyers within the scope of my licensure. For new construction, the timing of when you engage buyer representation matters — talk to me <em>before</em> visiting the model home if you want me to represent you.</p>
              </div>

              {/* FAQ */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-6 font-semibold">Frequently asked questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                    <h3 className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">{faq.q}</h3>
                    <p className="font-dm-sans text-[15px] text-[#5C5650] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* Closing */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">Thinking about Trutina? Let&apos;s talk.</h2>
              <p className="mb-6">
                If you&apos;re considering Trutina at North Place — or any senior move in North Idaho — and you&apos;d like a representative who has actually been through the buyer process here, I&apos;d love to help. <strong className="text-[#1C1A17]">Important:</strong> if you haven&apos;t yet visited the Trutina model home or registered with the onsite agent, call me <em>first</em>. Once you&apos;ve registered with the builder&apos;s onsite agent without representation, your ability to bring in a buyer&apos;s agent later can be limited. The right time to engage me is before your first visit. You&apos;re not just buying a house — you&apos;re choosing where to live the next chapter of your life. Let&apos;s get this right.
              </p>
              <p className="mb-2 text-[15px] text-[#9A9590]">
                Shirin Abplanalp is a licensed Idaho REALTOR® and SRES® (Seniors Real Estate Specialist) at Berkshire Hathaway HomeServices Jacklin Real Estate, serving Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, and Sandpoint.
              </p>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="lg:sticky lg:top-8 space-y-6">

                {/* CTA */}
                <div className="bg-[#C4842A] rounded-sm p-6">
                  <p className="font-cormorant text-2xl text-white font-semibold mb-2">Considering Trutina?</p>
                  <p className="font-dm-sans text-sm text-white/90 mb-4 leading-relaxed">Call me <em>before</em> you visit the model home — that&apos;s when buyer representation has to be set up in new construction.</p>
                  <a href="/contact" className="block text-center bg-[#1C1A17] hover:bg-[#2C2A27] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Schedule a call →
                  </a>
                </div>

                {/* Quick facts */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Trutina at a Glance</p>
                  <div className="space-y-3">
                    {[
                      { label: 'Builder', value: 'Greenstone Homes' },
                      { label: 'Type', value: '55+ active adult' },
                      { label: 'Units at build-out', value: '300–350' },
                      { label: 'Single-family (2026)', value: '$500K–$650K' },
                      { label: 'New hospital', value: '5–7 min away' },
                      { label: 'Spokane airport', value: '~30 min' },
                    ].map((item) => (
                      <div key={item.label} className="border-t border-[#2C2A27] pt-3 first:border-0 first:pt-0">
                        <p className="font-dm-sans text-xs text-[#9A9590] uppercase tracking-wide mb-0.5">{item.label}</p>
                        <p className="font-dm-sans text-sm text-[#FAFAF8] font-semibold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Reading</p>
                  <div className="space-y-4">
                    <a href="/articles/sres-designation-real-estate-after-55-north-idaho" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Why I Chose SRES®: Real Estate After 55</p>
                    </a>
                    <a href="/articles/north-idaho-healthcare-kootenai-spokane" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Healthcare in Kootenai County vs. Spokane</p>
                    </a>
                    <a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">CdA vs Post Falls vs Hayden vs Rathdrum vs Sandpoint</p>
                    </a>
                  </div>
                </div>

                {/* About Shirin */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Local Agent</p>
                  <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate" className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-3">Licensed REALTOR® · SRES® · Berkshire Hathaway HomeServices Jacklin Real Estate</p>
                  <p className="font-dm-sans text-xs text-[#5C5650] leading-relaxed">
                    A Seniors Real Estate Specialist® who has walked the Trutina buyer process firsthand, serving buyers across North Idaho.
                  </p>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}
