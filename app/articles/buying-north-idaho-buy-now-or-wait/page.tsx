import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB, BASE_URL, placeStub } from '@/lib/schema-ids'

const SLUG = 'buying-north-idaho-buy-now-or-wait'
const PAGE_URL = `${BASE_URL}/articles/${SLUG}`
const HERO_IMAGE = `${BASE_URL}/images/${SLUG}.png`
const HERO_WIDTH = 1672
const HERO_HEIGHT = 941
const linkClass = 'text-[#C4842A] hover:underline'

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  )
}

export const metadata: Metadata = {
  title: 'Buying in North Idaho: Buy Now or Wait for Rates?',
  description:
    'A practical August 2026 guide to buying a home in North Idaho: mortgage rates, affordability, seller negotiation, new construction, builder incentives, acreage, and where your budget goes furthest.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Buying a Home in North Idaho in 2026: Should You Buy Now, Wait for Rates, or Look Somewhere Else?',
    description:
      'A practical August 2026 guide to buying a home in North Idaho: mortgage rates, affordability, seller negotiation, new construction, builder incentives, acreage, and where your budget goes furthest.',
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-08-19',
    authors: ['Shirin Abplanalp'],
    images: [{ url: HERO_IMAGE, width: HERO_WIDTH, height: HERO_HEIGHT }],
  },
}

/**
 * FAQ content is defined ONCE and rendered twice — into FAQPage schema and into
 * the visible list below. Google requires the answer text in the markup to match
 * what a visitor can actually read; aNode adds the specified source hrefs without
 * changing the words.
 */
const faqs: { q: string; a: string; aNode?: ReactNode }[] = [
  {
    q: 'Should I buy a North Idaho home now or wait for mortgage rates to fall?',
    a: 'If today’s payment is comfortable, you expect to stay in the home for several years, and you have found the right property, waiting strictly for a lower mortgage rate is not automatically the better financial decision. Lower rates can reduce payments, but they can also bring more buyers into the market. Freddie Mac reported the average 30-year fixed rate at 6.67% as of August 13, 2026 through its Primary Mortgage Market Survey.',
    aNode: (
      <>
        If today&rsquo;s payment is comfortable, you expect to stay in the home for several years, and you have found the right property, waiting strictly for a lower mortgage rate is not automatically the better financial decision. Lower rates can reduce payments, but they can also bring more buyers into the market. Freddie Mac reported the average 30-year fixed rate at 6.67% as of August 13, 2026 through its{' '}
        <Ext href="https://www.freddiemac.com/pmms">Primary Mortgage Market Survey</Ext>.
      </>
    ),
  },
  {
    q: 'What is the median home price in Kootenai County?',
    a: 'For site-built homes on less than two acres, the median sale price was $565,000 year to date through July 2026, according to Coeur d’Alene Regional REALTORS®. Acreage, waterfront, and other property categories can produce significantly different numbers.',
    aNode: (
      <>
        For site-built homes on less than two acres, the median sale price was $565,000 year to date through July 2026, according to{' '}
        <Ext href="https://www.cdarealtors.com/wp-content/uploads/sites/918/2026/08/K1Jul2026.png">Coeur d&rsquo;Alene Regional REALTORS®</Ext>. Acreage, waterfront, and other property categories can produce significantly different numbers.
      </>
    ),
  },
  {
    q: 'Can you still buy a house for less than $500,000 in Coeur d’Alene?',
    a: 'Yes, although buyers will generally compromise on size, age, location, or property type. As of August 19, 2026, Greenstone Homes showed several new cottage plans at Coeur d’Alene Place priced below $500,000.',
    aNode: (
      <>
        Yes, although buyers will generally compromise on size, age, location, or property type. As of August 19, 2026,{' '}
        <Ext href="https://greenstonehomes.com/community/coeur-dalene-place">Greenstone Homes</Ext> showed several new cottage plans at Coeur d&rsquo;Alene Place priced below $500,000.
      </>
    ),
  },
  {
    q: 'Is Post Falls less expensive than Coeur d’Alene?',
    a: 'Generally yes. Recent resale data and comparable new-construction examples show buyers can often get more for their money in Post Falls. However, the better choice also depends on commute, neighborhood, lot size, schools, and lifestyle — not simply the median price.',
  },
  {
    q: 'Are sellers negotiating in North Idaho right now?',
    a: 'Yes, particularly on properties that have accumulated market time or were initially priced too aggressively. Roughly 36% of active Kootenai County listings had experienced a price reduction in July 2026, based on Realtor.com data hosted by FRED. Negotiations can also involve closing costs, repairs, and mortgage-rate buydowns rather than just purchase price.',
    aNode: (
      <>
        Yes, particularly on properties that have accumulated market time or were initially priced too aggressively. Roughly 36% of active Kootenai County listings had experienced a price reduction in July 2026, based on{' '}
        <Ext href="https://fred.stlouisfed.org/data/PRIREDCOU16055.txt">Realtor.com data hosted by FRED</Ext>. Negotiations can also involve closing costs, repairs, and mortgage-rate buydowns rather than just purchase price.
      </>
    ),
  },
  {
    q: 'What should I check before buying North Idaho acreage?',
    a: 'Start with septic feasibility, well and water availability, zoning, road access, utilities, and any road-maintenance agreements. Panhandle Health District and the Idaho Department of Water Resources should be part of due diligence before assuming a parcel can support what you want to build.',
  },
  {
    q: 'Are builder incentives worth taking?',
    a: 'Sometimes very much so. The key is how the incentive is structured. Compare a price reduction, closing-cost credit, and mortgage-rate buydown using the actual loan numbers being offered. If the incentive requires the builder’s preferred lender, compare that loan against an independent lender before deciding.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${PAGE_URL}#article`,
  headline:
    'Buying a Home in North Idaho in 2026: Should You Buy Now, Wait for Rates, or Look Somewhere Else?',
  description:
    'A practical August 2026 guide to buying a home in North Idaho: mortgage rates, affordability, seller negotiation, new construction, builder incentives, acreage, and where your budget goes furthest.',
  image: {
    '@type': 'ImageObject',
    url: HERO_IMAGE,
    width: HERO_WIDTH,
    height: HERO_HEIGHT,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-08-19T00:00:00-07:00',
  dateModified: '2026-08-19T00:00:00-07:00',
  mainEntityOfPage: PAGE_URL,
  isPartOf: { '@id': `${BASE_URL}/articles` },
  url: PAGE_URL,
  keywords: [
    'buying a home in North Idaho 2026',
    'should I buy now or wait for mortgage rates',
    'Coeur d’Alene vs Post Falls home prices',
    'homes under $500,000 Coeur d’Alene',
    'North Idaho builder incentives rate buydown',
    'how much house can I afford North Idaho',
    'buying acreage North Idaho septic well',
    'Kootenai County median home price 2026',
    'are North Idaho sellers negotiating',
    'new construction vs resale North Idaho',
  ],
  articleSection: 'Buyer Guide',
  wordCount: 3306,
  about: [
    placeStub('northIdaho'),
    placeStub('kootenai'),
    { '@type': 'Thing', name: 'North Idaho real estate' },
    { '@type': 'Thing', name: 'Home buying' },
    { '@type': 'Thing', name: 'Mortgage rates' },
    { '@type': 'Thing', name: 'Housing affordability' },
    { '@type': 'Thing', name: 'New construction' },
    { '@type': 'Thing', name: 'Acreage and rural property' },
  ],
  spatialCoverage: placeStub('northIdaho'),
  mentions: [
    placeStub('postFalls'),
    placeStub('coeurDalene'),
    placeStub('kootenai'),
    placeStub('bonner'),
  ],
  citation: [
    { '@type': 'WebPage', name: 'Coeur d’Alene Regional REALTORS® Kootenai County Market Statistics, July 2026', url: 'https://www.cdarealtors.com/wp-content/uploads/sites/918/2026/08/K1Jul2026.png' },
    { '@type': 'WebPage', name: 'Coeur d’Alene Regional REALTORS® Kootenai County Activity Report, July 2026', url: 'https://www.cdarealtors.com/wp-content/uploads/sites/918/2026/08/K2Jul2026.png' },
    { '@type': 'WebPage', name: 'Coeur d’Alene Regional REALTORS® Bonner County Market Statistics, July 2026', url: 'https://www.cdarealtors.com/wp-content/uploads/sites/918/2026/08/BonJul2026.png' },
    { '@type': 'WebPage', name: 'Freddie Mac Primary Mortgage Market Survey', url: 'https://www.freddiemac.com/pmms' },
    { '@type': 'WebPage', name: 'Realtor.com Active Listing Count — Kootenai County via FRED', url: 'https://fred.stlouisfed.org/data/ACTLISCOU16055.txt' },
    { '@type': 'WebPage', name: 'Realtor.com Price-Reduced Listings — Kootenai County via FRED', url: 'https://fred.stlouisfed.org/data/PRIREDCOU16055.txt' },
    { '@type': 'WebPage', name: 'National Association of Home Builders — Affordability Pressures Keep Builder Confidence Low, August 2026', url: 'https://www.nahb.org/news-and-economics/press-releases/2026/08/affordability-pressures-keep-builder-confidence-low' },
    { '@type': 'WebPage', name: 'Idaho State Tax Commission — Homeowner’s Exemption', url: 'https://tax.idaho.gov/taxes/property/homeowners/exemption/' },
    { '@type': 'WebPage', name: 'Panhandle Health District — Septic Permits and Records', url: 'https://panhandlehealthdistrict.org/licensing-and-permitting/septic-permits-and-records/' },
    { '@type': 'WebPage', name: 'Idaho Department of Water Resources — Well Construction', url: 'https://idwr.idaho.gov/wells/well-construction/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  isPartOf: { '@id': `${PAGE_URL}#article` },
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: `${BASE_URL}/articles` },
    { '@type': 'ListItem', position: 3, name: 'Buying a Home in North Idaho in 2026', item: PAGE_URL },
  ],
}

const heroStats = [
  { value: '$565,000', label: 'Kootenai Median', note: 'Site-built, <2 acres · YTD July 2026' },
  { value: '1,124', label: 'Active Listings', note: 'Kootenai County · August 5, 2026' },
  { value: '36%', label: 'Listings Price-Cut', note: 'Active inventory · July 2026' },
  { value: '6.67%', label: '30-Year Fixed', note: 'Freddie Mac · August 13, 2026' },
]

const rateTable = [
  { rate: '6.67%', payment: '$3,216' },
  { rate: '6.25%', payment: '$3,079' },
  { rate: '6.00%', payment: '$2,998' },
  { rate: '5.50%', payment: '$2,839' },
]

const budgetTable = [
  { budget: '$2,500', price: '~$430,000' },
  { budget: '$3,000', price: '~$519,000' },
  { budget: '$3,500', price: '~$609,000' },
  { budget: '$4,000', price: '~$698,000' },
]

const cityCompare = [
  { metric: 'Median closed sale, 3 mo ending June 2026', cda: '$589,679', pf: '$524,714' },
  { metric: 'Same Greenstone Springfield plan, 1,586 sq ft', cda: '~$537,000 start', pf: '~$517,000' },
  { metric: 'Entry new-construction cottage', cda: 'From ~$444,000', pf: 'Varies by community' },
]

const negotiables = [
  'closing-cost assistance',
  'repairs',
  'rate-buydown contributions',
  'appliances or other inclusions',
  'possession timing',
  'inspection items',
]

const builderIncentives = [
  'closing-cost credits',
  'mortgage-rate buydowns',
  'design-center credits',
  'appliance packages',
  'upgraded finishes',
]

const buyWaitFramework = [
  { situation: 'Payment is comfortable without a future refinance', verdict: 'Buy now', color: '#C4842A' },
  { situation: 'You found a property you genuinely like', verdict: 'Buy now', color: '#C4842A' },
  { situation: 'You expect to stay several years', verdict: 'Buy now', color: '#C4842A' },
  { situation: 'Targeting a listing with accumulated market time', verdict: 'Buy now', color: '#C4842A' },
  { situation: 'Payment only works if rates fall', verdict: 'Wait', color: '#9A9590' },
  { situation: 'Nothing left after the down payment', verdict: 'Wait', color: '#9A9590' },
  { situation: 'You do not know where you want to live yet', verdict: 'Wait', color: '#9A9590' },
  { situation: 'Buying out of fear prices will run away', verdict: 'Wait', color: '#9A9590' },
]

const marketPulse = [
  { label: 'Kootenai median', value: '$565,000' },
  { label: 'Year over year', value: '+3.8%' },
  { label: 'Active listings', value: '1,124' },
  { label: 'Listings price-cut', value: '~36%' },
  { label: 'Bonner median (site-built)', value: '$522,450' },
  { label: '30-yr fixed', value: '6.67%' },
  { label: 'Builders using incentives', value: '63%' },
]

const dueDiligenceLinks = [
  { label: 'Septic permitting', value: 'Panhandle Health District' },
  { label: 'Wells and water rights', value: 'Idaho Dept. of Water Resources' },
  { label: 'Property tax info', value: 'Idaho State Tax Commission' },
  { label: 'Rate benchmark', value: 'Freddie Mac PMMS' },
]

export default function BuyNowOrWaitNorthIdahoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section className="bg-[#F5EFE6] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C4842A] transition-colors">Home</Link>
            <span className="mx-2">·</span>
            <Link href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</Link>
            <span className="mx-2">·</span>
            <span className="text-[#5C5650]">Buy Now or Wait?</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Guide</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">13 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">August 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Buying a Home in North Idaho in 2026: Should You Buy Now, Wait for Rates, or Look Somewhere Else?
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            A practical August 2026 guide to buying a home in North Idaho: mortgage rates, affordability, seller negotiation, new construction, builder incentives, acreage, and where your budget goes furthest.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · Idaho License #1371861</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-0.5">Published August 19, 2026</p>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-[#E8DDD0]" />
      <img
        src={`/images/${SLUG}.png`}
        alt="A couple reviewing paperwork with their REALTOR at a kitchen island in a North Idaho home overlooking the lake"
        className="w-full h-auto block"
      />
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">{stat.value}</p>
                <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">{stat.label}</p>
                <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
              <p className="mb-6">
                If you are thinking about buying a home in North Idaho right now, there is a good chance you are asking some version of the same question:
              </p>
              <p className="mb-6">Should I buy now, or should I wait?</p>
              <p className="mb-2">Wait for mortgage rates to come down.</p>
              <p className="mb-2">Wait for prices to soften.</p>
              <p className="mb-2">Wait for sellers to get more negotiable.</p>
              <p className="mb-6">Wait for more homes to hit the market.</p>
              <p className="mb-6">
                All of that sounds reasonable. The problem is that those things do not move independently.
              </p>
              <p className="mb-6">
                If mortgage rates fall enough to make your payment noticeably better, you probably will not be the only buyer who notices. More buyers can mean more competition. More competition can mean less negotiating room. And the home that feels expensive today does not automatically become cheaper just because the interest rate does.
              </p>
              <p className="mb-6">That is what makes the North Idaho market in 2026 interesting.</p>
              <p className="mb-6">
                It is not the frenzy buyers faced a few years ago, but it is not a bargain basement either. There are more choices, more price reductions, more builder incentives, and more opportunities to negotiate — but those opportunities are not evenly distributed across every town, price range, or property type.
              </p>
              <p className="mb-6">
                For a deeper look at the timing question alone, I also wrote{' '}
                <Link href="/articles/is-it-a-good-time-to-buy-home-northern-idaho" className={linkClass}>Is It a Good Time to Buy a Home in Northern Idaho?</Link>
                . This guide goes broader: rates, affordability, new construction, resale, seller leverage, acreage, and where your money actually goes furthest.
              </p>
              <p className="mb-10">
                So rather than trying to predict exactly what the market will do next, let&rsquo;s look at the questions North Idaho buyers are actually asking in August 2026 — and what the numbers mean when you are the person writing the check.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                First: North Idaho Is Not One Housing Market
              </h2>
              <p className="mb-6">
                One of the easiest mistakes to make is talking about &ldquo;the North Idaho market&rdquo; as though every buyer is shopping in the same pool.
              </p>
              <p className="mb-6">They are not.</p>
              <p className="mb-6">
                A buyer looking for a $475,000 home in{' '}
                <Link href="/areas/post-falls-idaho" className={linkClass}>Post Falls</Link>
                {' '}is participating in a very different market from someone shopping for five acres outside Sandpoint or a waterfront home on Lake Pend Oreille.
              </p>
              <p className="mb-6">
                For site-built homes on less than two acres, the Kootenai County median sale price was $565,000 year to date through July 2026, up 3.8%, according to{' '}
                <Ext href="https://www.cdarealtors.com/wp-content/uploads/sites/918/2026/08/K1Jul2026.png">Coeur d&rsquo;Alene Regional REALTORS®</Ext>.
              </p>
              <p className="mb-6">
                The same regional data showed 1,124 active residential listings as of August 5, 2026, while year-to-date sales were up 6.9%.{' '}
                <Ext href="https://www.cdarealtors.com/wp-content/uploads/sites/918/2026/08/K2Jul2026.png">The Kootenai County activity report</Ext>
                {' '}gives buyers something they did not have much of during the hottest years of the market:
              </p>
              <p className="mb-6">Choices.</p>
              <p className="mb-6">And choices create leverage.</p>
              <p className="mb-6">
                Realtor.com listing data hosted by FRED showed 348 price-reduced listings out of 961 active Kootenai County listings in July 2026 — roughly 36%. You can see{' '}
                <Ext href="https://fred.stlouisfed.org/data/ACTLISCOU16055.txt">the underlying active-listing data</Ext>
                {' '}and{' '}
                <Ext href="https://fred.stlouisfed.org/data/PRIREDCOU16055.txt">price-reduction data</Ext>
                {' '}directly.
              </p>
              <p className="mb-6">That does not mean every seller is waiting to accept a huge discount.</p>
              <p className="mb-6">It means overpriced homes are sitting long enough that sellers are having to respond.</p>
              <p className="mb-6">
                A home that came on the market yesterday, shows beautifully, and is priced correctly may still give you very little negotiating room.
              </p>
              <p className="mb-6">A home that has been sitting for 60 days after two price reductions?</p>
              <p className="mb-10">That is a completely different conversation.</p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                Bonner County is another market altogether
              </h3>
              <p className="mb-6">Bonner County is a perfect example of why one median can mislead a buyer.</p>
              <p className="mb-6">
                Coeur d&rsquo;Alene Regional REALTORS® reported a year-to-date median of $522,450 for site-built homes on less than two acres through July 2026.{' '}
                <Ext href="https://www.cdarealtors.com/wp-content/uploads/sites/918/2026/08/BonJul2026.png">That report is here</Ext>.
              </p>
              <p className="mb-6">
                But <Ext href="https://www.redfin.com/county/676/ID/Bonner-County/housing-market">Redfin&rsquo;s Bonner County housing data</Ext> has reported much higher medians when broader property types are included.
              </p>
              <p className="mb-6">Those numbers are not necessarily contradictory. They are counting different houses.</p>
              <p className="mb-6">
                Acreage, waterfront, and luxury homes around Sandpoint can move the median dramatically depending on the dataset. If you are shopping for a conventional home in town, a countywide number stuffed with waterfront acreage may tell you very little about the homes you are actually considering.
              </p>
              <p className="mb-10">
                That is why I would rather look at your town, your price band, and your property type than hand you one North Idaho median and pretend it answers the question.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Should You Wait for Mortgage Rates to Drop?
              </h2>
              <p className="mb-6">This is probably the question buyers ask most often.</p>
              <p className="mb-6">And here is the part that gets overlooked:</p>
              <p className="mb-6">Waiting for lower rates is a bet on two things, not one.</p>
              <p className="mb-6">You are betting that rates fall.</p>
              <p className="mb-6">But you are also betting that home prices and buyer competition do not move against you when they do.</p>
              <p className="mb-8">
                For the week ending August 13, 2026,{' '}
                <Ext href="https://www.freddiemac.com/pmms">Freddie Mac&rsquo;s Primary Mortgage Market Survey</Ext>
                {' '}put the average 30-year fixed mortgage rate at 6.67%.
              </p>
              <p className="mb-6">Let&rsquo;s turn that into real money.</p>
              <p className="mb-4">On a $500,000 mortgage:</p>
              <div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
                <h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Interest rate / Approx. monthly principal &amp; interest
                </h3>
                <div className="space-y-2">
                  {rateTable.map((r) => (
                    <div key={r.rate} className="flex justify-between items-center border-b border-[#E8DDD0] pb-2 last:border-0 last:pb-0">
                      <span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{r.rate}</span>
                      <span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{r.payment}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mb-6">A drop from 6.67% to 6.00% saves roughly $218 per month.</p>
              <p className="mb-6">That matters.</p>
              <p className="mb-6">But now look at the other side of the equation.</p>
              <p className="mb-6">
                A 4% increase on a $565,000 home is $22,600. If lower rates bring more sidelined buyers back into the market, some of your payment savings can be eaten up by a higher purchase price — and you may find yourself competing for the same house instead of negotiating with one seller.
              </p>
              <p className="mb-6">I am not predicting that is what will happen.</p>
              <p className="mb-6">Nobody knows exactly where rates or home prices will be six months from now.</p>
              <p className="mb-6">That is the point.</p>
              <p className="mb-6">
                I would never recommend buying a house today because &ldquo;you can always refinance later.&rdquo; Today&rsquo;s payment needs to work today.
              </p>
              <p className="mb-6">
                But I also would not automatically postpone a purchase you can comfortably afford because you are hoping someone correctly predicts the mortgage market.
              </p>
              <p className="mb-6">The better question is:</p>
              <p className="mb-10">Does the home and payment make sense for you at today&rsquo;s numbers?</p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How Much House Can You Actually Afford in North Idaho?
              </h2>
              <p className="mb-6">This is a much better question than: &ldquo;How much will the bank lend me?&rdquo;</p>
              <p className="mb-6">Those are not the same thing.</p>
              <p className="mb-8">
                Your mortgage is only part of the cost of owning a home. There are property taxes, homeowners insurance, possible HOA dues, utilities, maintenance, and — depending on the property — wells, septic systems, private roads, snow removal, and other costs that do not show up in the listing price.
              </p>
              <p className="mb-6">
                Using the August 13 Freddie Mac rate of 6.67%, a 30-year loan, 20% down, an assumed $1,800 annual hazard-insurance premium, and Kootenai County tax assumptions based on{' '}
                <Ext href="https://tax.idaho.gov/wp-content/uploads/reports/EPB00129/EPB00129_12-04-2025.pdf">Idaho State Tax Commission data</Ext>, a rough planning range looks like this:
              </p>
              <div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
                <h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-2">
                  Approx. monthly housing budget* / Approx. home price with 20% down
                </h3>
                <div className="space-y-2">
                  {budgetTable.map((b) => (
                    <div key={b.budget} className="flex justify-between items-center border-b border-[#E8DDD0] pb-2 last:border-0 last:pb-0">
                      <span className="font-dm-sans text-sm text-[#5C5650]">{b.budget}</span>
                      <span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{b.price}</span>
                    </div>
                  ))}
                </div>
                <p className="font-dm-sans text-xs text-[#9A9590] mt-4">
                  *Principal, interest, estimated taxes and insurance. Not HOA dues, utilities, repairs, or maintenance. These are planning calculations, not loan quotes.
                </p>
              </div>
              <p className="mb-6">
                <Ext href="https://tax.idaho.gov/taxes/property/homeowners/exemption/">Idaho&rsquo;s homeowner&rsquo;s exemption</Ext>
                {' '}can also affect the tax picture, and urban versus rural tax rates differ.
              </p>
              <p className="mb-6">
                If you want the deeper county-by-county version, see my{' '}
                <Link href="/articles/north-idaho-property-taxes-county-comparison" className={linkClass}>North Idaho property tax comparison</Link>.
              </p>
              <p className="mb-6">But the most important question is not what a spreadsheet says you can technically buy.</p>
              <p className="mb-6">It is: What payment still leaves enough room to live your life?</p>
              <p className="mb-10">
                If buying the house means every repair, vacation, medical bill, or car problem becomes a financial emergency, the house is probably too expensive — even if a lender approves it.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Can You Still Buy a Home for Under $500,000 in North Idaho?
              </h2>
              <p className="mb-6">Yes.</p>
              <p className="mb-6">But the compromises have changed.</p>
              <p className="mb-6">Under $500,000 does not automatically mean leaving Coeur d&rsquo;Alene.</p>
              <p className="mb-6">
                As of August 19, 2026,{' '}
                <Ext href="https://greenstonehomes.com/community/coeur-dalene-place">Greenstone Homes at Coeur d&rsquo;Alene Place</Ext>
                {' '}was advertising several new cottage plans below $500,000, beginning around $444,000.
              </p>
              <p className="mb-6">The tradeoff is size.</p>
              <p className="mb-6">
                At that price, you are generally not getting a large rancher, a three-car garage, and a huge yard in central Coeur d&rsquo;Alene.
              </p>
              <p className="mb-6">
                Move toward Post Falls, Rathdrum, or surrounding communities and the equation changes again. If Post Falls is on your list, I break down the price bands in much more detail in{' '}
                <Link href="/articles/how-much-do-homes-cost-post-falls-idaho" className={linkClass}>How Much Do Homes Cost in Post Falls, Idaho?</Link>
              </p>
              <p className="mb-6">This is where buyers need to stop thinking only in terms of price and start thinking about what they are willing to trade.</p>
              <p className="mb-2">More square footage or shorter commute?</p>
              <p className="mb-2">New construction or mature neighborhood?</p>
              <p className="mb-2">Smaller yard or more maintenance?</p>
              <p className="mb-6">Coeur d&rsquo;Alene address or more house in Post Falls?</p>
              <p className="mb-6">There is no universally correct answer.</p>
              <p className="mb-10">There is usually a better answer for you.</p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Coeur d&rsquo;Alene vs. Post Falls: Where Does Your Money Go Further?
              </h2>
              <p className="mb-6">Generally?</p>
              <p className="mb-6">Post Falls.</p>
              <p className="mb-6">But the difference is not always as dramatic as people expect.</p>
              <p className="mb-6">A useful apples-to-apples example comes from the same builder.</p>
              <p className="mb-6">
                As of August 19, 2026, Greenstone&rsquo;s 1,586-square-foot Springfield plan was listed around $517,000 at{' '}
                <Ext href="https://greenstonehomes.com/community/north-place">North Place in Post Falls</Ext>
                {' '}and started around $537,000 at{' '}
                <Ext href="https://greenstonehomes.com/community/coeur-dalene-place">Coeur d&rsquo;Alene Place</Ext>.
              </p>
              <p className="mb-6">Same builder. Same floor plan.</p>
              <p className="mb-6">About a $20,000 difference at the low end.</p>
              <p className="mb-8">
                The resale market shows a larger gap.{' '}
                <Ext href="https://www.redfin.com/city/4370/ID/Coeur-d-Alene/housing-market">Redfin&rsquo;s Coeur d&rsquo;Alene market data</Ext>
                {' '}reported a median closed sale price around $589,679 for the three months ending June 2026, while{' '}
                <Ext href="https://www.redfin.com/city/16610/ID/Post-Falls/housing-market">Redfin&rsquo;s Post Falls data</Ext>
                {' '}reported roughly $524,714 over the same period.
              </p>
              <div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-x-auto">
                <h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Coeur d&rsquo;Alene vs. Post Falls
                </h3>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#E8DDD0]">
                      <th className="font-dm-sans text-xs font-semibold text-[#1C1A17] pb-2 pr-4">Measure</th>
                      <th className="font-dm-sans text-xs font-semibold text-[#1C1A17] pb-2 pr-4">Coeur d&rsquo;Alene</th>
                      <th className="font-dm-sans text-xs font-semibold text-[#1C1A17] pb-2">Post Falls</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cityCompare.map((row) => (
                      <tr key={row.metric} className="border-b border-[#E8DDD0] last:border-0">
                        <td className="font-dm-sans text-sm text-[#5C5650] py-2 pr-4">{row.metric}</td>
                        <td className="font-dm-sans text-sm font-semibold text-[#1C1A17] py-2 pr-4">{row.cda}</td>
                        <td className="font-dm-sans text-sm font-semibold text-[#1C1A17] py-2">{row.pf}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mb-6">But price is not the whole decision.</p>
              <p className="mb-6">Buyers often start by asking: &ldquo;Which city is cheaper?&rdquo;</p>
              <p className="mb-6">Eventually, the real question becomes: &ldquo;Where will I be happier living?&rdquo;</p>
              <p className="mb-6">
                Commute matters. Neighborhood matters. Lot size matters. Schools may matter. Access to restaurants, recreation, shopping, health care, and I-90 may matter.
              </p>
              <p className="mb-6">
                Sometimes spending more in{' '}
                <Link href="/areas/coeur-dalene-idaho" className={linkClass}>Coeur d&rsquo;Alene</Link>
                {' '}makes perfect sense.
              </p>
              <p className="mb-6">Sometimes a buyer sees what the same budget buys in Post Falls and the decision becomes easy.</p>
              <p className="mb-10">
                If you are comparing the communities more broadly than price alone, see my full{' '}
                <Link href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className={linkClass}>
                  Coeur d&rsquo;Alene vs. Post Falls vs. Hayden vs. Rathdrum vs. Sandpoint comparison
                </Link>
                .
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Are North Idaho Sellers Actually Negotiating?
              </h2>
              <p className="mb-6">More than they were a few years ago.</p>
              <p className="mb-6">But probably not in the way people imagine.</p>
              <p className="mb-6">The interesting statistic is not necessarily how far below list price a home eventually sells.</p>
              <p className="mb-6">It is how many sellers are reducing the price before the buyer ever makes an offer.</p>
              <p className="mb-6">
                As noted earlier, about 36% of active Kootenai County listings had experienced a price reduction in July 2026, based on Realtor.com listing data hosted by FRED.
              </p>
              <p className="mb-6">That tells us something useful: The market is correcting unrealistic expectations.</p>
              <p className="mb-6">If a seller lists correctly, you may not get a giant discount.</p>
              <p className="mb-6">If they started too high and the home has been sitting, your leverage improves.</p>
              <p className="mb-4">And price is not the only thing that can be negotiated. Depending on the property and seller, buyers may be able to negotiate:</p>
              <ul className="mb-6 space-y-2">
                {negotiables.map((n) => (
                  <li key={n} className="flex items-start gap-3">
                    <span className="text-[#C4842A] mt-1.5 flex-shrink-0">▸</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-10">
                Sometimes getting $10,000 toward closing costs or a mortgage-rate buydown can be more valuable to a buyer than another $10,000 off the purchase price.
              </p>
              <p className="mb-10">Which brings us to builders.</p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                New Construction vs. Resale: Which Is the Better Deal?
              </h2>
              <p className="mb-6">There is a reason buyers should look at both right now.</p>
              <p className="mb-6">Builders do not always want to reduce the advertised price of a home. They may prefer to give you value somewhere else.</p>
              <p className="mb-6">
                In August 2026, 63% of builders nationally were using sales incentives, according to the{' '}
                <Ext href="https://www.nahb.org/news-and-economics/press-releases/2026/08/affordability-pressures-keep-builder-confidence-low">National Association of Home Builders</Ext>.
              </p>
              <p className="mb-4">Those incentives can include:</p>
              <ul className="mb-6 space-y-2">
                {builderIncentives.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="text-[#C4842A] mt-1.5 flex-shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-6">Sometimes those incentives are worth considerably more to the buyer than a simple price reduction.</p>
              <p className="mb-6">But you have to compare the whole deal.</p>
              <p className="mb-6">
                A builder may advertise an attractive rate that is available only through its preferred lender. That does not automatically make it a bad deal. It means we should compare: Rate. APR. Points. Fees. Cash to close. Loan terms. Not the number printed in the advertisement.
              </p>
              <p className="mb-6">And do not forget what a beautiful new home may not include. Landscaping. Fencing. Window coverings. Some appliances. Certain upgrades.</p>
              <p className="mb-10">
                A $525,000 resale home that is completely finished can sometimes be less expensive than a $505,000 new home that still needs another $30,000 before it feels finished.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Are Builder Rate Buydowns Actually Worth It?
              </h2>
              <p className="mb-6">They can be. But the biggest incentive is not automatically the best incentive.</p>
              <p className="mb-6">Suppose a builder gives you $20,000.</p>
              <p className="mb-6">
                On a hypothetical $565,000 purchase with 20% down, applying the full $20,000 as a price reduction might lower principal and interest by roughly $100 per month.
              </p>
              <p className="mb-6">
                Using that same money toward a permanent mortgage-rate buydown could reduce the monthly payment substantially more, depending on actual lender pricing.
              </p>
              <p className="mb-6">But there is a catch.</p>
              <p className="mb-6">
                If you pay heavily to reduce your rate and then refinance or sell the house a few years later, you may not receive the full value of what you spent.
              </p>
              <p className="mb-6">A price reduction, by comparison, permanently lowers what you paid for the property.</p>
              <p className="mb-10">
                So when a builder advertises an incentive, do not just ask: &ldquo;How big is the incentive?&rdquo; Ask: &ldquo;Which use of this incentive produces the best outcome for my situation?&rdquo;
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Buying Acreage in North Idaho? This Is Where Things Get Serious
              </h2>
              <p className="mb-6">
                Acreage is one of those North Idaho dreams that can look incredibly simple online. Five acres. Beautiful trees. Mountain view. Room for a shop. Then you start asking about the well, septic, road, utilities, zoning, and water rights. The property can become complicated very quickly.
              </p>
              <p className="mb-6">
                I go much deeper into these issues in{' '}
                <Link href="/articles/buying-property-prairie-wells-septic-roads" className={linkClass}>Buying Property on the Prairie: Wells, Septic, and Road Rights-of-Way</Link>.
              </p>
              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                Septic can determine whether the property works at all
              </h3>
              <p className="mb-6">
                <Ext href="https://panhandlehealthdistrict.org/licensing-and-permitting/septic-permits-and-records/">Panhandle Health District</Ext>
                {' '}handles septic permitting throughout the five northern Idaho counties.
              </p>
              <p className="mb-6">
                Its June 2026 guidelines list a $1,250 new subsurface sewage permit and a $550 speculative site evaluation. The full technical requirements are in the{' '}
                <Ext href="https://panhandlehealthdistrict.org/wp-content/uploads/2026/07/2026-Septic-Application-Guidelines-3.pdf">2026 Septic Application Guidelines</Ext>.
              </p>
              <p className="mb-6">
                For someone considering vacant land, that $550 site evaluation can be some of the most valuable due-diligence money spent. Because beautiful land does not automatically mean buildable land.
              </p>
              <p className="mb-6">
                On the Rathdrum Aquifer, new septic systems generally require a minimum five-acre parcel, subject to specific exceptions for older parcels and approved sewage-management areas.
              </p>
              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">Then there is water</h3>
              <p className="mb-6">
                Before a well is drilled, Idaho requires a drilling permit, and the work must be done by an IDWR-licensed driller.{' '}
                <Ext href="https://idwr.idaho.gov/wells/well-construction/">Idaho Department of Water Resources explains the well-construction process here</Ext>.
              </p>
              <p className="mb-6">Idaho also changed portions of its domestic-water law in 2026.</p>
              <p className="mb-6">
                Senate Bill 1222 became effective February 17, 2026, and IDWR issued updated guidance on June 5.{' '}
                <Ext href="https://idwr.idaho.gov/wp-content/uploads/2026/06/App-Process-80-Adj-No-62-Domestic-Use.pdf">The IDWR domestic-use guidance</Ext>
                {' '}explains how the domestic exemption, irrigation limits, shared wells, and newer subdivisions can interact.
              </p>
              <p className="mb-6">
                One especially important issue involves newer subdivisions of five or more lots in restricted groundwater areas. In some situations, the domestic exemption can be limited to in-home use, meaning outdoor irrigation may require a recorded water right.
              </p>
              <p className="mb-6">
                That matters locally because portions of Kootenai and Bonner counties fall inside the{' '}
                <Ext href="https://idwr.idaho.gov/water-resource-protection-safety/groundwater-management-overview/groundwater-managment-areas/">Rathdrum Prairie Groundwater Management Area</Ext>.
              </p>
              <p className="mb-10">
                This is why acreage transactions are different. Sometimes the most important question is not: &ldquo;Can I afford this property?&rdquo; It is: &ldquo;Can I actually do what I am imagining with this property?&rdquo;
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                So&hellip; Should You Buy a North Idaho Home Now or Wait?
              </h2>
              <p className="mb-6">Here is the framework I would use.</p>
              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                Buy now if the home and payment already make sense
              </h3>
              <p className="mb-6">
                If you can comfortably afford the payment without depending on a future refinance, you have found a property you genuinely like, and you expect to stay for several years, today&rsquo;s market may give you opportunities that were much harder to find during the frenzy.
              </p>
              <p className="mb-6">
                You have more choices. More sellers are reducing prices. Some properties have meaningful negotiating room. Builders are offering incentives. Those are real advantages.
              </p>
              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                Wait if buying requires everything to go perfectly
              </h3>
              <p className="mb-6">
                If the payment only works if rates fall&hellip; If the down payment empties your reserves&hellip; If you do not know where you want to live&hellip; If you are buying because you are afraid prices will suddenly run away again&hellip; Waiting can be the better decision.
              </p>
              <p className="mb-8">
                Use the time intentionally. Improve your credit. Increase your down payment. Learn the neighborhoods. Talk with a lender. Figure out what your real monthly comfort zone is.
              </p>
              <div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
                <h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Buy Now or Wait — Quick Framework
                </h3>
                <div className="space-y-3">
                  {buyWaitFramework.map((item) => (
                    <div key={item.situation} className="flex items-center justify-between gap-4 border-b border-[#E8DDD0] pb-3 last:border-0 last:pb-0">
                      <span className="font-dm-sans text-sm text-[#5C5650] flex-1">{item.situation}</span>
                      <span
                        className="font-dm-sans text-xs font-semibold px-3 py-1 rounded-sm flex-shrink-0"
                        style={{ backgroundColor: item.color + '20', color: item.color }}
                      >
                        {item.verdict}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                What I would not do is wait because someone claims they know exactly what happens next
              </h3>
              <p className="mb-6">
                None of us do. Mortgage rates could fall. Prices could soften. Inventory could increase. Or lower rates could bring more buyers back and make the homes you want more competitive.
              </p>
              <p className="mb-10">
                The goal is not to perfectly time the North Idaho housing market. The goal is to buy the right property, at a payment you can comfortably live with, on terms that make sense for your situation. That is a decision you can actually control.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                One Last Thing
              </h2>
              <p className="mb-6">
                North Idaho can look simple from the outside. Coeur d&rsquo;Alene versus Post Falls. New versus resale. House versus acreage. Buy now versus wait. But once you start looking at actual properties, the differences become much more specific.
              </p>
              <p className="mb-6">
                A home that has been sitting for 70 days is not the same negotiation as one listed yesterday. A builder offering $20,000 is not necessarily offering the same value as a seller dropping the price $20,000. A five-acre parcel is not automatically buildable simply because it has five acres. And a median home price does not tell you what your $500,000 will buy in the neighborhood where you actually want to live.
              </p>
              <p className="mb-6">
                That is the part of real estate I enjoy most: getting past the headline numbers and figuring out what they mean for a real person making a real decision.
              </p>
              <p className="mb-6">
                If you are still deciding whether North Idaho itself is the right move, start with my{' '}
                <Link href="/relocating-to-north-idaho" className={linkClass}>Complete North Idaho Relocation Guide</Link>.
              </p>
              <p className="mb-6">
                And if you are ready to start{' '}
                <Link href="/buyers" className={linkClass}>buying a home in North Idaho</Link>, tell me what you are looking for, the towns you are considering, your price range, and what matters most to you.
              </p>
              <p className="mb-10">
                I can help you look at what is actually available — and whether buying now makes sense for you.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 mb-12">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                    <h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">{faq.q}</h3>
                    <p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">{faq.aNode ?? faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#1C1A17] rounded-sm p-8 mt-4">
                <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">From Shirin</p>
                <div className="flex items-start gap-5 mb-6">
                  <img
                    src="/images/shirin-headshot-studio.webp"
                    alt="Shirin Abplanalp"
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="font-cormorant text-2xl text-[#F5EFE6] font-semibold mb-1">Shirin Abplanalp</p>
                    <p className="font-dm-sans text-sm text-[#9A9590]">REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-6 transition-colors"
                  >
                    Start a Conversation
                  </a>
                  <div className="flex flex-col gap-1 justify-center">
                    <a href="tel:+12086607468" className="font-dm-sans text-sm text-[#9A9590] hover:text-[#C4842A] transition-colors">(208) 660-7468</a>
                    <a href="mailto:dreamlifeinidaho@gmail.com" className="font-dm-sans text-sm text-[#9A9590] hover:text-[#C4842A] transition-colors">dreamlifeinidaho@gmail.com</a>
                  </div>
                </div>
              </div>
            </article>
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="sticky top-28 space-y-6">
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Market Pulse</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-4">North Idaho · August 2026</p>
                  <div className="space-y-3">
                    {marketPulse.map((stat) => (
                      <div key={stat.label} className="flex justify-between border-b border-[#2C2A27] pb-2 last:border-0 last:pb-0">
                        <span className="font-dm-sans text-xs text-[#9A9590]">{stat.label}</span>
                        <span className="font-dm-sans text-xs font-semibold text-[#F5EFE6]">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Where to Verify</p>
                  <div className="space-y-2">
                    {dueDiligenceLinks.map((d) => (
                      <div key={d.label} className="border-b border-[#E8DDD0] pb-2 last:border-0 last:pb-0">
                        <p className="font-dm-sans text-xs text-[#9A9590]">{d.label}</p>
                        <p className="font-dm-sans text-xs font-semibold text-[#1C1A17]">{d.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Local Advisor</p>
                  <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp" className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-4">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · #1371861</p>
                  <a href="/contact" className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Run My Numbers
                  </a>
                </div>
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Reading</p>
                  <div className="space-y-4">
                    <Link href="/articles/is-it-a-good-time-to-buy-home-northern-idaho" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Is It a Good Time to Buy in North Idaho?</p>
                      <p className="font-dm-sans text-xs text-[#9A9590] mt-1">The mid-year market-timing verdict</p>
                    </Link>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <Link href="/articles/how-much-do-homes-cost-post-falls-idaho" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">How Much Do Homes Cost in Post Falls?</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Price breakdown by budget tier</p>
                      </Link>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <Link href="/articles/buying-property-prairie-wells-septic-roads" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Wells, Septic and Road Rights-of-Way</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Buying land on the prairie</p>
                      </Link>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <Link href="/buyers" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Buying a Home in Northern Idaho</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">What to expect from search to close</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <div className="border-t border-[#E8DDD0]" />
      <section className="bg-[#1C1A17] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Ready to Talk It Through</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-[#F5EFE6] mb-6 leading-tight font-semibold">
            Let&rsquo;s Look at Your Actual Numbers
          </h2>
          <p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Tell me your price range, the communities you&rsquo;re considering and what matters most. I&rsquo;ll show you what&rsquo;s actually available — and whether buying now makes sense for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold py-4 px-8 transition-colors">
              Start the Conversation
            </a>
            <Link href="/articles" className="border border-[#5C5650] hover:border-[#9A9590] text-[#9A9590] hover:text-[#F5EFE6] font-dm-sans font-semibold py-4 px-8 transition-colors">
              More Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
