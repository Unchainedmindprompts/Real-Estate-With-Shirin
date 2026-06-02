import type { Metadata } from 'next'

const SLUG = 'why-honored-joining-berkshire-hathaway-jacklin-real-estate'
const BASE_URL = 'https://www.realestatewithshirin.com'
const PAGE_URL = `${BASE_URL}/articles/${SLUG}`

export const metadata: Metadata = {
  title: "Why I'm Honored to Be Joining Berkshire Hathaway HomeServices Jacklin Real Estate",
  description:
    "Shirin Abplanalp announces her move to Berkshire Hathaway HomeServices Jacklin Real Estate in Coeur d'Alene effective June 1, 2026 — and what the global brand, multi-generational Jacklin family legacy, and Wade & Nicole Jacklin's leadership mean for North Idaho clients.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Why I'm Honored to Be Joining Berkshire Hathaway HomeServices Jacklin Real Estate",
    description:
      "An announcement from Shirin Abplanalp on the three layers that made this brokerage move — the Berkshire Hathaway global network, the Jacklin family's century-long North Idaho legacy, and the leadership of Wade and Nicole Jacklin.",
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-06-02',
    authors: ['Shirin Abplanalp'],
    images: [`${BASE_URL}/images/shirin-bhhs-jacklin-announcement.png`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${PAGE_URL}#article`,
  headline: "Why I'm Honored to Be Joining Berkshire Hathaway HomeServices Jacklin Real Estate",
  alternativeHeadline:
    "An Announcement from Shirin Abplanalp on Joining Berkshire Hathaway HomeServices Jacklin Real Estate — and What the Three-Layered Brand, Family Legacy, and Brokerage Leadership Mean for North Idaho Clients",
  description:
    "Shirin Abplanalp announces her move to Berkshire Hathaway HomeServices Jacklin Real Estate in Coeur d'Alene, Idaho, effective June 1, 2026. The article explains the three-layered value of the brokerage: the global Berkshire Hathaway HomeServices brand, the multi-generational Jacklin family legacy in North Idaho (including the Jacklin Seed Company and the Jacklin Arts & Cultural Center), and the more-than-three-decades brokerage leadership of principals Wade and Nicole Jacklin. Explores why being inside the local 'fold' matters for relocation buyers in high-amenity secondary markets like North Idaho.",
  image: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/images/shirin-bhhs-jacklin-announcement.png`,
    width: 1536,
    height: 1024,
  },
  author: {
    '@type': 'Person',
    '@id': `${BASE_URL}/#agent`,
    name: 'Shirin Abplanalp',
  },
  publisher: {
    '@type': 'Organization',
    '@id': `${BASE_URL}/#business`,
    name: 'Shirin Abplanalp — Real Estate With Shirin',
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/shirin-logo.png`,
      width: 1254,
      height: 1254,
    },
  },
  datePublished: '2026-06-02T00:00:00-07:00',
  dateModified: '2026-06-02T00:00:00-07:00',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  url: PAGE_URL,
  articleSection: 'North Idaho Buyer Guides',
  keywords: [
    'Shirin Abplanalp Berkshire Hathaway',
    'Berkshire Hathaway HomeServices Jacklin Real Estate',
    "Jacklin Real Estate Coeur d'Alene",
    'Wade Nicole Jacklin',
    'Jacklin family North Idaho history',
    'Jacklin Arts Cultural Center Post Falls',
    'North Idaho relocation REALTOR',
    "Coeur d'Alene real estate agent",
    "BHHS Coeur d'Alene",
    'Shirin Abplanalp REALTOR',
  ],
  wordCount: 2650,
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'CollectionPage',
    '@id': `${BASE_URL}/articles`,
    name: 'Northern Idaho Real Estate Articles',
    url: `${BASE_URL}/articles`,
  },
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    geo: { '@type': 'GeoShape', box: '47.4090 -117.0357 48.9990 -116.0500' },
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Kootenai County',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
  },
  about: [
    { '@type': 'Thing', name: 'Real Estate Brokerage Affiliation' },
    { '@type': 'Thing', name: 'North Idaho Relocation' },
    {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Jacklin Real Estate',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1927 W. Riverstone Drive',
        addressLocality: "Coeur d'Alene",
        addressRegion: 'ID',
        postalCode: '83814',
        addressCountry: 'US',
      },
    },
  ],
  mentions: [
    {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices',
      url: 'https://www.berkshirehathawayhs.com',
      sameAs: 'https://en.wikipedia.org/wiki/Berkshire_Hathaway_HomeServices',
    },
    {
      '@type': 'Organization',
      name: 'Berkshire Hathaway Inc.',
      url: 'https://www.berkshirehathaway.com',
      sameAs: 'https://en.wikipedia.org/wiki/Berkshire_Hathaway',
    },
    {
      '@type': 'Place',
      name: 'Jacklin Arts & Cultural Center',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Post Falls',
        addressRegion: 'ID',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'GovernmentOrganization',
      name: 'Idaho Real Estate Commission',
      url: 'https://irec.idaho.gov',
    },
    {
      '@type': 'Organization',
      name: 'National Association of REALTORS®',
      sameAs: 'https://en.wikipedia.org/wiki/National_Association_of_Realtors',
    },
  ],
  citation: [
    {
      '@type': 'WebPage',
      name: 'Berkshire Hathaway HomeServices Welcomes Berkshire Hathaway HomeServices Jacklin Real Estate to Franchise Network',
      url: 'https://www.businesswire.com/news/home/20210914005129/en/Berkshire-Hathaway-HomeServices-Welcomes-Berkshire-Hathaway-HomeServices-Jacklin-Real-Estate-to-Franchise-Network',
      publisher: { '@type': 'Organization', name: 'Business Wire', url: 'https://www.businesswire.com' },
    },
    {
      '@type': 'WebPage',
      name: 'Visit Post Falls — Jacklin Arts & Cultural Center',
      url: 'https://visitpostfalls.org/places/idaho/post-falls/attractions-tier-2/jacklin-arts-culture-center/',
      publisher: { '@type': 'Organization', name: 'Visit Post Falls', url: 'https://visitpostfalls.org' },
    },
    {
      '@type': 'WebPage',
      name: 'Jacklin Northwest rebrands, enters residential development',
      url: 'https://www.spokanejournal.com/articles/17841-jacklin-northwest-rebrands-enters-residential-development',
      publisher: { '@type': 'Organization', name: 'Spokane Journal of Business', url: 'https://www.spokanejournal.com' },
    },
    {
      '@type': 'WebPage',
      name: 'Preliminary Guide to the Jacklin Seed Company Records',
      url: 'https://archiveswest.orbiscascade.org/ark:/80444/xv686797',
      publisher: { '@type': 'Organization', name: 'Archives West / Orbis Cascade Alliance', url: 'https://archiveswest.orbiscascade.org' },
    },
    {
      '@type': 'WebPage',
      name: 'Berkshire Hathaway HomeServices Jacklin Real Estate — Member Listing',
      url: 'https://business.nibca.com/list/member/berkshire-hathaway-homeservices-jacklin-real-estate-604',
      publisher: { '@type': 'Organization', name: 'North Idaho Building Contractors Association', url: 'https://business.nibca.com' },
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: "Where is Shirin Abplanalp's new brokerage located?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Berkshire Hathaway HomeServices Jacklin Real Estate is located at 1927 W. Riverstone Drive, Coeur d'Alene, ID 83814 — in the Riverstone development off Seltice Way. The office is open Monday–Friday, 9 a.m. to 5 p.m.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is Berkshire Hathaway HomeServices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Berkshire Hathaway HomeServices is a global residential real estate brokerage franchise network with more than 50,000 real estate professionals and approximately 1,500 offices across the U.S., Canada, Mexico, Europe, the Middle East, and India. It is one of the few organizations entrusted to use the Berkshire Hathaway name, owned by Warren Buffett's Berkshire Hathaway Inc. The network represented more than $138 billion in annual real estate sales volume in 2020.",
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns Berkshire Hathaway HomeServices Jacklin Real Estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The brokerage is owned and operated by Wade and Nicole Jacklin, who brought the Berkshire Hathaway HomeServices brand to Coeur d'Alene in September 2021. They bring more than three decades of combined North Idaho brokerage leadership and serve as the principals managing the firm, rather than competing against their own agents for deals.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Jacklin family known for in North Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Jacklin family has been a foundational presence in North Idaho for generations. The family established Jacklin Seed Company, which became one of the largest grass seed producers in the world. Susan Jacklin led the 1998 effort to save the historic 1890s Post Falls church from demolition, raising over $1 million in donations to restore it as the Jacklin Arts & Cultural Center — now on the National Register of Historic Places. In January 2026, Jacklin Northwest rebranded and entered residential development, continuing the family's multi-generational investment in the region's growth.",
      },
    },
    {
      '@type': 'Question',
      name: "Does this change Shirin's licensure or service area?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Shirin remains a licensed Idaho REALTOR® (License #SP-1371861) and continues to hold the SRES (Seniors Real Estate Specialist) designation. She continues to serve Coeur d’Alene, Post Falls, Hayden, Rathdrum, Sandpoint, and the surrounding North Idaho communities. The only change is her brokerage affiliation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What benefits does the Berkshire Hathaway HomeServices network bring to clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For relocation buyers in particular, the network provides access to BHHS’s active global referral and relocation network — meaning buyers being referred from BHHS offices in other states (or internationally) reach Shirin through an established pipeline. The network also includes the Luxury Collection marketing program for premier listings, the FOREVER Cloud technology suite for marketing and lead generation, and Prestige Magazine for high-end listing showcases. For most clients, the practical benefit is faster, smoother transactions backed by global brand resources combined with deep local market expertise.',
      },
    },
    {
      '@type': 'Question',
      name: "Why does 'local fold' matter for a North Idaho buyer?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'High-amenity secondary markets like North Idaho operate on long-established local relationships. Long-standing local brokerages have institutional knowledge — which contractors do quality work, which inspectors are thorough, which mortgage professionals can structure unconventional loans, which neighborhoods have specific characteristics that don’t show up in MLS listings. Buyers represented by agents inside that "fold" gain access to vetted referrals and insider knowledge that out-of-state agents (or virtual brokerages without local infrastructure) cannot replicate. The Jacklin family’s multi-generational position in North Idaho places Berkshire Hathaway HomeServices Jacklin Real Estate squarely inside that fold.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Shirin still work with the same client list and prior transactions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All prior client relationships, in-process transactions, and the body of published work at realestatewithshirin.com continue uninterrupted. Shirin’s phone, email, and direct client communications remain the same.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: `${BASE_URL}/articles` },
    {
      '@type': 'ListItem',
      position: 3,
      name: "Why I'm Honored to Be Joining Berkshire Hathaway HomeServices Jacklin Real Estate",
      item: PAGE_URL,
    },
  ],
}

const stats = [
  { value: '+50K', label: 'BHHS Professionals', sub: 'Global network' },
  { value: '1,500', label: 'Offices Worldwide', sub: 'Across 8+ countries' },
  { value: '100+', label: 'Years Jacklin Legacy', sub: 'In North Idaho' },
  { value: '30+', label: 'Years Brokerage Leadership', sub: 'Wade & Nicole Jacklin' },
]

const faqs = faqSchema.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text }))

const linkClass = 'text-[#C4842A] hover:underline'

export default function JoiningBHHSJacklinPage() {
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
            <span className="text-[#5C5650]">Joining BHHS Jacklin Real Estate</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Announcement</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">12 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">June 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Why I&rsquo;m Honored to Be Joining Berkshire Hathaway HomeServices Jacklin Real Estate
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            As of June 1, 2026, I&rsquo;ve joined Berkshire Hathaway HomeServices Jacklin Real Estate in Coeur d&rsquo;Alene. Here&rsquo;s the why &mdash; and what it means for the clients I serve.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR&reg; · SRES&reg; · Berkshire Hathaway HomeServices Jacklin Real Estate · June 2, 2026</p>
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

      {/* Hero Image (placeholder — upload to /public/images/shirin-bhhs-jacklin-announcement.png) */}
      <img
        src="/images/shirin-bhhs-jacklin-announcement.png"
        alt="Shirin Abplanalp joining Berkshire Hathaway HomeServices Jacklin Real Estate"
        className="w-full h-auto block"
      />

      {/* Article Body */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <p className="mb-6 text-xl text-[#1C1A17] font-semibold">I want to share some news.</p>
              <p className="mb-6">
                As of June 1, 2026, I&rsquo;ve joined Berkshire Hathaway HomeServices Jacklin Real Estate in Coeur d&rsquo;Alene.
              </p>
              <p className="mb-6">
                I don&rsquo;t write announcement posts often. I don&rsquo;t think most people care about an agent&rsquo;s affiliation in the abstract. But this one matters &mdash; not because it changes me, but because it changes what I can deliver to my clients. And if you&rsquo;re considering working with me, or you&rsquo;ve been following the work I&rsquo;ve published here over the past several months, I owe you the why.
              </p>
              <p className="mb-10">
                So let me tell you what this move means, what these names actually stand for, and why I feel genuinely privileged to put their names alongside mine.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">The three layers that make this rare</h2>
              <p className="mb-10">Most real estate brokerages are one thing. This one is three things stacked.</p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">Layer 1: The Berkshire Hathaway HomeServices brand</h3>
              <p className="mb-6">
                The Berkshire Hathaway name is one of the most carefully protected brands in the world. Warren Buffett famously said,{' '}
                <em>&ldquo;Our favorite holding period is forever&rdquo;</em> &mdash; and that philosophy isn&rsquo;t a marketing line. It&rsquo;s the operating principle of every business that&rsquo;s allowed to use his name.
              </p>
              <p className="mb-6">
                Berkshire Hathaway HomeServices is one of the few organizations entrusted to use the Berkshire Hathaway name in residential real estate &mdash; a global network with more than 50,000 real estate professionals across roughly 1,500 offices in the U.S., Canada, Mexico, Europe, the Middle East, and India ({' '}
                <a href="https://www.businesswire.com/news/home/20210914005129/en/Berkshire-Hathaway-HomeServices-Welcomes-Berkshire-Hathaway-HomeServices-Jacklin-Real-Estate-to-Franchise-Network" target="_blank" rel="noopener noreferrer" className={linkClass}>Business Wire</a>
                ).
              </p>
              <p className="mb-4">For my clients, that translates into things that actually matter:</p>
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong className="text-[#1C1A17]">An active global relocation and referral network.</strong>{' '}When someone in San Diego, Bellevue, or Boston decides they want to look at North Idaho, the Berkshire Hathaway HomeServices network is one of the most likely places they&rsquo;ll be referred from. That referral now lands on my desk.</li>
                <li><strong className="text-[#1C1A17]">The Luxury Collection program</strong>{' '}for premier listings &mdash; the highest-tier marketing platform in the network, with international syndication and Prestige Magazine placement.</li>
                <li><strong className="text-[#1C1A17]">The FOREVER Cloud technology suite</strong>{' '}&mdash; lead generation, marketing automation, professional video and content production support, all backed by Berkshire&rsquo;s resources.</li>
                <li><strong className="text-[#1C1A17]">A definitive mark of trust.</strong>{' '}When a buyer flying in from another state sees the Berkshire Hathaway HomeServices name on the sign, they instantly understand the standard. That trust shortens every conversation.</li>
              </ul>
              <p className="mb-10">That&rsquo;s the global layer. But that&rsquo;s not why I chose this brokerage. It&rsquo;s just the floor.</p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">Layer 2: The Jacklin family legacy in North Idaho</h3>
              <p className="mb-6">This is the layer that made the decision for me.</p>
              <p className="mb-6">
                The Jacklin family didn&rsquo;t show up in North Idaho yesterday. They&rsquo;ve been building this community for generations &mdash; not just selling homes in it, but literally building the economic, cultural, and civic foundation of the place I now call home.
              </p>
              <p className="mb-6">A few of the proof points most newcomers to North Idaho don&rsquo;t know:</p>

              <p className="mb-6">
                <strong className="text-[#1C1A17]">Jacklin Seed Company.</strong>{' '}The family&rsquo;s seed business grew into one of the largest grass seed producers in the world, based right here in the Spokane Valley/Post Falls region. The Jacklin family was a foundational agricultural force in this region long before &ldquo;relocation&rdquo; was a word people used about North Idaho. The historical records are archived at the{' '}
                <a href="https://archiveswest.orbiscascade.org/ark:/80444/xv686797" target="_blank" rel="noopener noreferrer" className={linkClass}>Washington State Archives</a>. This is a family whose name appears in the industrial history of the region, not just its real estate.
              </p>

              <p className="mb-6">
                <strong className="text-[#1C1A17]">The Jacklin Arts &amp; Cultural Center, Post Falls.</strong>{' '}This one stops me every time I think about it. In 1998, Susan Jacklin saw that one of Post Falls&rsquo; oldest historic churches &mdash; built in 1890 &mdash; was scheduled for demolition. The plan was to tear it down and turn the lot into a parking lot.
              </p>
              <p className="mb-6">
                Susan personally rallied the community to save it. She formed Community Building Partners Inc., purchased the church, and led a 10-year restoration funded by more than $1 million in donations. In 2005, the restored building reopened as the{' '}
                <a href="https://visitpostfalls.org/places/idaho/post-falls/attractions-tier-2/jacklin-arts-culture-center/" target="_blank" rel="noopener noreferrer" className={linkClass}>Jacklin Arts &amp; Cultural Center</a>{' '}&mdash; listed on the National Register of Historic Places, now home to community arts programming for Post Falls and the surrounding region.
              </p>
              <p className="mb-6">That building stands today because a member of the Jacklin family refused to let a piece of this community&rsquo;s history be turned into a parking lot.</p>
              <p className="mb-6">That tells you who these people are.</p>

              <p className="mb-10">
                <strong className="text-[#1C1A17]">Jacklin Northwest&rsquo;s expansion into residential development.</strong>{' '}In January 2026, the family business{' '}
                <a href="https://www.spokanejournal.com/articles/17841-jacklin-northwest-rebrands-enters-residential-development" target="_blank" rel="noopener noreferrer" className={linkClass}>rebranded and entered residential development</a>{' '}&mdash; continuing the multi-generational pattern of investing in the long-term growth of this region rather than extracting from it.
              </p>

              <p className="mb-10">
                When buyers ask me about &ldquo;local connections&rdquo; in North Idaho &mdash; <em>who do you actually know</em> &mdash; the answer is now: I&rsquo;m part of the brokerage owned by the family whose name is on the arts center, on archived agricultural records, and on residential development projects shaping the next decade of this region. You can&rsquo;t fake that. You can&rsquo;t manufacture it. It takes a hundred years.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">Layer 3: Wade and Nicole Jacklin, principals</h3>
              <p className="mb-6">
                The brokerage itself is owned and operated by Wade and Nicole Jacklin, who together bring more than three decades of North Idaho brokerage leadership to the firm. They were the ones who brought the Berkshire Hathaway HomeServices brand to Coeur d&rsquo;Alene in September 2021 &mdash; they personally vetted whether the brand standards met their family standards, not the other way around.
              </p>
              <p className="mb-6">
                Wade and Nicole run the brokerage. They don&rsquo;t compete against their agents for deals. That structural difference matters &mdash; it means the principals&rsquo; full attention is on building the firm, mentoring agents, and supporting transactions, rather than chasing their own commissions. The infrastructure, the systems, the brokerage support, the institutional knowledge &mdash; all of it is in service of the agents and, by extension, the clients.
              </p>
              <p className="mb-10">For me, that&rsquo;s the kind of foundation I want under my work.</p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">What this means for my clients (especially relocation buyers)</h2>
              <p className="mb-10">
                I&rsquo;ve published a lot over the past year about North Idaho &mdash; city comparisons, property taxes, cost of living, healthcare, bridge financing, senior buying considerations, the honest answer on relocation, and more. The data work and the local research have been the foundation of how I serve clients. This move adds something I couldn&rsquo;t deliver on my own. Here&rsquo;s what I mean.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">The &ldquo;local fold&rdquo; matters more than most outside buyers realize</h3>
              <p className="mb-6">
                Every high-amenity secondary market &mdash; Bend, Bozeman, Park City, Sun Valley, Sandpoint, Coeur d&rsquo;Alene &mdash; has a layer of long-established local players who have been in that community for generations. They have the relationships. They have the influence. They have the institutional memory. They know the contractors who do clean work and the ones to avoid. They know the inspectors who don&rsquo;t miss things. They know the mortgage professionals who can structure a loan for a buyer with a complicated situation that a national lender would automatically decline. They know which lots actually drain well and which ones flood in the spring, even when the disclosure doesn&rsquo;t say so.
              </p>
              <p className="mb-6">
                You can either be inside that fold, or you can be working from outside it. And if you&rsquo;re a relocation buyer from another state, your agent&rsquo;s position in that fold matters as much as their license.
              </p>
              <p className="mb-10">
                Being part of Berkshire Hathaway HomeServices Jacklin Real Estate puts me inside that fold in a way that&rsquo;s not replicable. The Jacklin family didn&rsquo;t acquire those connections &mdash; they built them, over generations, through actually contributing to this community. My clients now have access to that network as a direct result.
              </p>
              <p className="mb-10">
                That&rsquo;s the thing I couldn&rsquo;t have built on my own, no matter how many articles I wrote or how many transactions I closed. It takes lineage. The Jacklins have it. Now my clients benefit from it.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">What this looks like in practice</h3>
              <p className="mb-4">Some examples of what &ldquo;inside the fold&rdquo; actually delivers:</p>
              <ul className="list-disc pl-6 mb-10 space-y-3">
                <li><strong className="text-[#1C1A17]">Contractor and trade referrals.</strong>{' '}A specific roofer who&rsquo;s been doing North Idaho roofs for 25 years. A handyman who actually shows up. A foundation specialist who knows what unstable soils look like in this region.</li>
                <li><strong className="text-[#1C1A17]">Local mortgage relationships.</strong>{' '}Lenders who understand North Idaho-specific scenarios &mdash; well/septic properties, rural land deals, buyers transitioning from out-of-state income to local self-employment, retirees structuring purchases through retirement accounts (the{' '}
                  <a href="/articles/buying-north-idaho-home-before-selling-current-bridge-financing-options" className={linkClass}>bridge financing piece I wrote</a>{' '}explains the financing strategies; the people who execute them well are who I now have access to).</li>
                <li><strong className="text-[#1C1A17]">Inspectors who specialize.</strong>{' '}Home inspectors who actually understand North Idaho construction quirks &mdash; older homes with knob-and-tube wiring, well water systems, septic in winter, log home moisture issues.</li>
                <li><strong className="text-[#1C1A17]">Insider intel.</strong>{' '}Which neighborhoods are quietly desirable. Which streets get the worst winter wind. Which HOAs have functional boards and which are dysfunctional. Where the new development is actually going and where the rumors are wrong.</li>
                <li><strong className="text-[#1C1A17]">Listings you won&rsquo;t see online.</strong>{' '}Berkshire Hathaway HomeServices&rsquo; network surfaces relocation referrals and quiet listings that don&rsquo;t always hit the public market in the same way. For relocation buyers competing in a tight market, that&rsquo;s an edge.</li>
              </ul>
              <p className="mb-10">None of that is in a brochure. All of it is real.</p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">The honest part</h2>
              <p className="mb-6">
                I want to be clear about something. Joining a brokerage with the Berkshire Hathaway and Jacklin names doesn&rsquo;t make me a different agent. I&rsquo;m still going to tell you the truth about the market. I&rsquo;m still going to write the articles I&rsquo;ve been writing &mdash; including the ones where I tell you that{' '}
                <a href="/articles/moving-to-north-idaho-cheapest-places-migration-best-small-towns" className={linkClass}>North Idaho isn&rsquo;t the cheapest place to live in the state</a>, or that bridge loans are expensive, or that contingent offers won&rsquo;t work in Hayden right now.
              </p>
              <p className="mb-10">
                What changes is the platform behind the work. The Berkshire Hathaway HomeServices network amplifies my reach for relocation referrals and luxury listings. The Jacklin family lineage gives my clients access to the local fold that took 100 years to build. Wade and Nicole Jacklin&rsquo;s leadership and infrastructure mean my time and attention are focused on my clients, not on building basic brokerage support from scratch. That&rsquo;s the upgrade. The work and the voice are still mine.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">What hasn&rsquo;t changed</h2>
              <ul className="list-disc pl-6 mb-10 space-y-2">
                <li>I&rsquo;m still Shirin Abplanalp, Idaho REALTOR&reg;, License #SP-1371861</li>
                <li>I still hold the SRES (Seniors Real Estate Specialist) designation</li>
                <li>I still serve Coeur d&rsquo;Alene, Post Falls, Hayden, Rathdrum, Sandpoint, and the surrounding North Idaho communities</li>
                <li>I still believe the best real estate decisions come from honest data and genuine local knowledge, not from sales pitches</li>
                <li>All of my published articles, research, and the realestatewithshirin.com site continue exactly as before</li>
              </ul>
              <p className="mb-10">
                If you&rsquo;re already working with me, nothing changes for you logistically &mdash; I&rsquo;m still the same agent, the same phone number, the same email, the same commitment to your transaction. Just with a substantially stronger platform behind us.
              </p>

              {/* Disclaimers */}
              <div className="mb-10 p-5 rounded-sm bg-[#F0EBE3] border border-[#E0D5C8]">
                <p className="font-semibold text-[#1C1A17] mb-2">Important disclaimers</p>
                <p className="text-[15px] mb-3">
                  <strong className="text-[#1C1A17]">I&rsquo;m a licensed Idaho REALTOR&reg;, not a tax advisor, attorney, or financial planner.</strong>{' '}
                  This article reflects my personal perspective on my brokerage affiliation and does not constitute professional advice on tax, legal, or financial matters. For those decisions, please consult appropriate licensed professionals.
                </p>
                <p className="text-[15px] mb-3">
                  <strong className="text-[#1C1A17]">Idaho real estate transactions are governed by Idaho law and the{' '}
                    <a href="https://irec.idaho.gov" target="_blank" rel="noopener noreferrer" className={linkClass}>Idaho Real Estate Commission</a>{' '}(IREC).</strong>{' '}
                  As a licensed Idaho REALTOR&reg; (License #SP-1371861) with Berkshire Hathaway HomeServices Jacklin Real Estate, I represent buyers and sellers within the scope of my licensure.
                </p>
                <p className="text-[15px]">
                  <strong className="text-[#1C1A17]">Brokerage affiliation as of June 1, 2026.</strong>{' '}
                  All references to my brokerage relationship in this article reflect my current affiliation. Berkshire Hathaway HomeServices Jacklin Real Estate is independently owned and operated under franchise from Berkshire Hathaway HomeServices.
                </p>
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
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">Let&rsquo;s talk.</h2>
              <p className="mb-6">
                Whether you&rsquo;re a current client, a prospective relocation buyer, or someone who&rsquo;s been quietly following my articles for a while, I&rsquo;d love to talk. The work I do hasn&rsquo;t changed. The platform behind it just got substantially stronger.
              </p>
              <p className="mb-10">
                <a href="/contact" className={linkClass}>Schedule a call with Shirin &rarr;</a>
              </p>
              <p className="mb-6 text-[#1C1A17] font-semibold italic">
                I feel honored to be joining a firm with this kind of community legacy. And I feel privileged to bring that legacy to my clients.
              </p>
              <p className="mb-2 text-[15px] text-[#9A9590]">
                Shirin Abplanalp is a licensed Idaho REALTOR&reg; (IREC License #SP-1371861) and SRES (Seniors Real Estate Specialist) with Berkshire Hathaway HomeServices Jacklin Real Estate, serving Coeur d&rsquo;Alene, Post Falls, Hayden, Rathdrum, and Sandpoint. Brokerage office: 1927 W. Riverstone Drive, Coeur d&rsquo;Alene, ID 83814.
              </p>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="lg:sticky lg:top-8 space-y-6">

                {/* CTA */}
                <div className="bg-[#C4842A] rounded-sm p-6">
                  <p className="font-cormorant text-2xl text-white font-semibold mb-2">Same agent. Stronger platform.</p>
                  <p className="font-dm-sans text-sm text-white/90 mb-4 leading-relaxed">Same phone. Same email. Same honest data-first approach to North Idaho real estate &mdash; now with the Berkshire Hathaway HomeServices and Jacklin family infrastructure behind every transaction.</p>
                  <a href="/contact" className="block text-center bg-[#1C1A17] hover:bg-[#2C2A27] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Schedule a call &rarr;
                  </a>
                </div>

                {/* In this article */}
                <div className="bg-[#F5EFE6] rounded-sm p-6 border border-[#E8DDD0]">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">In this announcement</p>
                  <ul className="font-dm-sans text-sm text-[#5C5650] space-y-2">
                    <li>The three layers that make this rare</li>
                    <li>The Berkshire Hathaway HomeServices brand</li>
                    <li>The Jacklin family legacy in North Idaho</li>
                    <li>Wade and Nicole Jacklin&rsquo;s leadership</li>
                    <li>The &ldquo;local fold&rdquo; for relocation buyers</li>
                    <li>What hasn&rsquo;t changed</li>
                    <li>Frequently asked questions</li>
                  </ul>
                </div>

                {/* Browse more */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-cormorant text-xl text-[#C4842A] font-semibold mb-3">More from Shirin</p>
                  <p className="font-dm-sans text-sm text-white/80 mb-4 leading-relaxed">The full library of North Idaho buyer guides, market analysis, and relocation research.</p>
                  <a href="/articles" className="inline-block font-dm-sans text-sm text-[#C4842A] hover:underline">Browse all articles &rarr;</a>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}
