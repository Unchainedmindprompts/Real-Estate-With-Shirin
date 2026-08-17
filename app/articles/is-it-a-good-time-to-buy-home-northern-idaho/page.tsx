import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'

const PAGE_URL = 'https://www.realestatewithshirin.com/articles/is-it-a-good-time-to-buy-home-northern-idaho'

export const metadata: Metadata = {
title: "Is It a Good Time to Buy in North Idaho? (August 2026)",
description: "Mid-year data on Kootenai County prices, inventory, mortgage rates, and seller concessions — plus who should buy now and who should wait, from a licensed North Idaho REALTOR®.",
alternates: {
canonical: PAGE_URL,
  },
openGraph: {
title: "Is It a Good Time to Buy a Home in Northern Idaho? (Honest August 2026 Answer)",
description: "Mid-year data on Kootenai County prices, inventory, mortgage rates, and seller concessions — plus who should buy now and who should wait.",
url: PAGE_URL,
type: 'article',
publishedTime: '2026-03-18',
modifiedTime: '2026-08-06',
authors: ['Shirin Abplanalp'],
  },
}

/**
 * FAQ content is defined ONCE and rendered twice — into FAQPage schema and into
 * the visible accordion below. Google requires the answer text in the markup to
 * match what a visitor can actually read; sourcing both from this array makes
 * that structurally impossible to break.
 */
const faqs = [
  {
    q: "Is the Northern Idaho housing market a buyer's or seller's market in August 2026?",
    a: "Kootenai County is a mild seller's market that firmed up over the spring. Months of supply sits at 3.5 for resale homes and 3.4 for new construction, both well below the six-month threshold the National Association of REALTORS® uses to define balance. Resale inventory is down 14.5% year over year at 817 homes, days on market until sale improved to 63 days, and sellers received 98.7% of list price in June 2026. Buyers still have real leverage on aged listings and on resale homes competing against new construction, but the broadly buyer-friendly conditions of early 2026 have narrowed.",
  },
  {
    q: "Did home prices go down in Coeur d'Alene and Kootenai County in 2026?",
    a: "Briefly, then no. Kootenai County's median single-family price fell 0.2% year over year in March 2026 to $545,000 — the first decline since February 2024 — and then recovered. By May the county median was $555,738, up 2.3% year over year, per Coeur d'Alene Regional REALTORS®. June MLS data showed the resale median at $610,000, up 13.7% year over year. Coeur d'Alene city limits is the one submarket still roughly flat, at $589,679 and up 0.80% year over year for the three months ending June 30, 2026, per Redfin. Fannie Mae forecasts national home prices rising 2.5% in 2026 and 3.2% in 2027.",
  },
  {
    q: "What are mortgage rates in Idaho right now, in August 2026?",
    a: "The 30-year fixed averaged 6.66% the week of July 30, 2026, per Freddie Mac's Primary Mortgage Market Survey — down only slightly from 6.72% a year earlier. Early-August daily lender averages ran about 6.73% for a 30-year conventional, 5.85% for a 15-year, 6.12% for FHA, 6.18% for VA, and 6.86% for a 30-year jumbo, per the Mortgage Research Center. Rates have held in the mid-6% range for the entire first half of 2026. Rates change daily and vary by credit profile, loan size, and lender, so confirm your actual pricing with a lender rather than a survey average.",
  },
  {
    q: "Should I wait for mortgage rates to drop before buying in North Idaho?",
    a: "The current forecast says no. Fannie Mae's July 2026 outlook holds the 30-year fixed at 6.4% through the end of 2026, 6.3% through most of 2027, and 6.2% only in the fourth quarter of 2027, with no Federal Reserve rate cut expected until the second half of 2027. On a $610,000 home with 20% down, buying at 6.66% costs roughly $3,136 a month in principal and interest. Waiting until mid-2027 for 6.30% — after 2.5% appreciation puts that home near $625,250 — costs roughly $3,096. You save about $40 a month and pay about $15,250 more for the house. You can refinance a rate later. You cannot refinance a purchase price.",
  },
  {
    q: "Are sellers in Northern Idaho still paying closing costs and rate buydowns?",
    a: "Yes. Roughly 35% of recent Northern Idaho MLS closings included some form of seller concession — closing cost credits, mortgage rate buydowns, or repair credits. That is down from 37.5% in February 2026 but still better than one in three transactions. Concessions are most available on resale homes competing against new construction and on listings that have been sitting. The gap tells the story: in June 2026, new construction received 100.5% of list price while resale received 98.7%. Builders absorb buyer costs through rate buydowns and upgrades rather than price cuts, which pressures resale sellers to match with credits. Ask for them, particularly on any home past 60 days on market.",
  },
  {
    q: "How much can I negotiate off a home that has been sitting in Northern Idaho?",
    a: "It depends almost entirely on days on market, and the pattern is consistent. In the most recent full Northern Idaho MLS breakdown by days on market, homes selling within 30 days received 99.8% of list price, homes at 61 to 90 days received 96.3%, homes at 91 to 120 days received 94.87%, and homes past 121 days received 92.65%. On a $500,000 list price, that is roughly $18,500 of room at 90 days and more than $36,000 past 120 days. County-wide averages have tightened since that breakdown — resale homes received 98.7% of list in June 2026 — so treat those figures as the shape of the curve rather than a guarantee. Fresh listings frequently sell at or above asking. Aged listings still discount meaningfully.",
  },
  {
    q: "Which North Idaho city moves fastest — Post Falls, Coeur d'Alene, Hayden, or Rathdrum?",
    a: "Post Falls, by a wide margin. For the three months ending May 2026, Post Falls homes averaged 14 days on market at a $524,686 median, up 4.4% year over year, across 211 sales, per Redfin. Hayden averaged 24 days at $520,374. Coeur d'Alene and Rathdrum both averaged 30 days, at $574,656 and $529,683 respectively. Rathdrum posted the strongest appreciation in the county at 8.3%. If you are shopping Post Falls, you need pre-approval and a decision framework before you tour. If you are shopping Coeur d'Alene proper, you have more time and slightly softer pricing relative to trend.",
  },
  {
    q: "What price range is most competitive in Northern Idaho right now?",
    a: "The $400,000 to $500,000 band, which leads the market in both closings and price reductions. In the most recent month with a full Northern Idaho MLS breakdown, that band produced 81 closings — the highest of any price range — while also recording 55 price reductions. The $500,000 to $600,000 band was second on both counts, with 63 closings and 53 price reductions. That combination means the busiest part of the market has both the most competition and the most motivated sellers. Roughly 37% of all closings were all-cash and about 23% were new construction, so financed buyers in this band should expect to compete against cash and against builder incentives.",
  },
  {
    q: "Is there enough inventory in Kootenai County to actually have choices?",
    a: "More than in February, fewer than a year ago. Active listings in Kootenai County climbed from 580 in February 2026 to 917 in June, per Realtor.com data distributed through the St. Louis Fed, and 516 new listings hit the county in June alone. But standing resale inventory is down 14.5% year over year, and statewide Idaho inventory was down 12.4% year over year in May, per Redfin. The market absorbs new listings quickly enough that your practical choice set is wider than the spring but tighter than last summer. At 3.5 months of supply, well-priced homes in desirable areas still move fast.",
  },
  {
    q: "Is it cheaper to rent than buy in Coeur d'Alene right now?",
    a: "On monthly cash flow alone, usually yes — but the gap is narrowing and rental conditions are tightening. Median rent across Kootenai County runs about $2,262 per month per Realtor.com, against roughly $3,136 in principal and interest on a $610,000 home with 20% down. The trend matters more than the snapshot: Coeur d'Alene apartment vacancy fell to 6.8%, below both Spokane and the national average, with the market absorbing 570 units against just 47 delivered and only 225 units under construction, per ACTIV8 Real Estate's Q2 2026 report using CoStar data. Asking rents are rising and the construction pipeline has gone quiet.",
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${PAGE_URL}#article`,
  headline: 'Is It a Good Time to Buy a Home in Northern Idaho? (Honest August 2026 Answer)',
  description:
    'Mid-year data on Kootenai County prices, inventory, mortgage rates, and seller concessions — plus who should buy now and who should wait, from a licensed North Idaho REALTOR®.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-03-18T00:00:00-07:00',
  dateModified: '2026-08-06T00:00:00-07:00',
  mainEntityOfPage: PAGE_URL,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: PAGE_URL,
  keywords: [
    'is it a good time to buy a home in Northern Idaho',
    'should I buy a home in North Idaho 2026',
    'Kootenai County housing market August 2026',
    'North Idaho mortgage rates August 2026',
    'should I wait for mortgage rates to drop Idaho',
    'Northern Idaho seller concessions 2026',
    'is it a good time to buy in Post Falls Idaho',
    "Coeur d'Alene housing market 2026",
    'Kootenai County months of supply',
    'North Idaho real estate forecast 2027',
  ],
  articleSection: 'Market Analysis',
  wordCount: 4530,
  about: [
    {
      '@type': 'Place',
      name: 'North Idaho',
      sameAs: 'https://en.wikipedia.org/wiki/Idaho_Panhandle',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Kootenai County',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
  ],
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    sameAs: 'https://en.wikipedia.org/wiki/Idaho_Panhandle',
    containedInPlace: { '@type': 'State', name: 'Idaho' },
  },
  mentions: [
    {
      '@type': 'City',
      name: 'Post Falls',
      sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: "Coeur d'Alene",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Hayden',
      sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Rathdrum',
      sameAs: 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Kootenai County',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
    { '@type': 'Organization', name: 'Fannie Mae', url: 'https://www.fanniemae.com' },
    { '@type': 'Organization', name: 'Freddie Mac', url: 'https://www.freddiemac.com' },
    { '@type': 'Organization', name: 'Idaho Housing and Finance Association', url: 'https://www.ihfa.org' },
  ],
  citation: [
    { '@type': 'WebPage', name: "Coeur d'Alene MLS June 2026 Kootenai County Local Market Update" },
    { '@type': 'WebPage', name: "Coeur d'Alene Regional REALTORS® Monthly Market Snapshot, March and May 2026" },
    { '@type': 'WebPage', name: 'Northern Idaho MLS Closed Transaction Data, February 2026' },
    { '@type': 'WebPage', name: 'Freddie Mac Primary Mortgage Market Survey, July 30, 2026', url: 'https://www.freddiemac.com/pmms' },
    { '@type': 'WebPage', name: 'Fannie Mae July 2026 Housing Forecast', url: 'https://www.fanniemae.com' },
    { '@type': 'WebPage', name: 'Mortgage Research Center Daily Rate Averages, August 5, 2026' },
    { '@type': 'WebPage', name: 'Redfin Data Center — Kootenai County and Coeur d’Alene Market Data' },
    { '@type': 'WebPage', name: 'Realtor.com Housing Inventory Core Metrics via Federal Reserve Bank of St. Louis' },
    { '@type': 'WebPage', name: "ACTIV8 Real Estate Q2 2026 Coeur d'Alene Multifamily Report (CoStar)" },
    { '@type': 'WebPage', name: 'Idaho Housing and Finance Association Program Bulletin 2026-4', url: 'https://www.ihfa.org' },
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    { '@type': 'ListItem', position: 3, name: 'Is It a Good Time to Buy a Home in Northern Idaho?', item: PAGE_URL },
  ],
}

const heroStats = [
  { value: '63 days', label: 'DOM Until Sale, Resale', note: 'June 2026 · down 8.7% YoY' },
  { value: '3.5 mo', label: 'Months of Supply', note: 'Below the 6-month balance line' },
  { value: '−14.5%', label: 'Resale Inventory YoY', note: '817 homes, June 2026' },
  { value: '6.66%', label: '30-Year Fixed', note: 'Freddie Mac, July 30, 2026' },
]

const juneMetrics = [
  { metric: 'Median sales price', resale: '$610,000 (+13.7%)', newBuild: '$669,243 (+20.5%)' },
  { metric: 'Closed sales', resale: '293 (+11.8%)', newBuild: '83 (+9.2%)' },
  { metric: 'Pending sales', resale: '301 (+14.0%)', newBuild: '92 (+37.3%)' },
  { metric: 'New listings', resale: '478 (+17.4%)', newBuild: '131 (+47.2%)' },
  { metric: 'Days on market until sale', resale: '63 (−8.7%)', newBuild: '131 (−26.0%)' },
  { metric: 'Percent of list received', resale: '98.7%', newBuild: '100.5%' },
  { metric: 'Inventory', resale: '817 (−14.5%)', newBuild: '240 (−16.7%)' },
  { metric: 'Months of supply', resale: '3.5', newBuild: '3.4' },
]

const rateTable = [
  { label: '30-year conventional', value: '6.73%' },
  { label: '15-year conventional', value: '5.85%' },
  { label: '30-year FHA', value: '6.12%' },
  { label: '30-year VA', value: '6.18%' },
  { label: '30-year USDA', value: '6.10%' },
  { label: '30-year jumbo', value: '6.86%' },
]

const rateTrap = [
  { label: 'Home price', now: '$610,000', wait: '~$625,250' },
  { label: 'Loan amount (20% down)', now: '$488,000', wait: '$500,200' },
  { label: 'Monthly P&I', now: '~$3,136', wait: '~$3,096' },
  { label: 'Down payment required', now: '$122,000', wait: '~$125,050' },
  { label: 'Seller concessions', now: 'Yes — roughly 1 in 3', wait: 'First to disappear' },
  { label: 'Competition', now: 'Moderate', wait: 'Higher when rates ease' },
  { label: 'Net monthly savings', now: '—', wait: '~$40' },
  { label: 'Extra paid for the house', now: '—', wait: '~$15,250' },
]

const domLeverageData = [
  { range: '0–30 days', pct: 99.8, leverage: 'Minimal', color: '#9A9590', savings: '~$1,000' },
  { range: '31–60 days', pct: 98.25, leverage: 'Some room', color: '#C4842A', savings: '~$8,750' },
  { range: '61–90 days', pct: 96.3, leverage: 'Meaningful', color: '#C4842A', savings: '~$18,500' },
  { range: '91–120 days', pct: 94.87, leverage: 'Strong', color: '#6B7A8D', savings: '~$25,650' },
  { range: '121+ days', pct: 92.65, leverage: 'Very strong', color: '#6B7A8D', savings: '~$36,750' },
]

const cityTable = [
  { city: 'Coeur d’Alene', price: '$574,656', yoy: '−0.84%', dom: '30', sold: '257' },
  { city: 'Rathdrum', price: '$529,683', yoy: '+8.3%', dom: '30', sold: '101' },
  { city: 'Post Falls', price: '$524,686', yoy: '+4.4%', dom: '14', sold: '211' },
  { city: 'Hayden', price: '$520,374', yoy: '+2.0%', dom: '24', sold: '111' },
]

const scorecard = [
  { situation: 'Relocating with equity from a high-cost market', verdict: 'Buy now', color: '#C4842A' },
  { situation: 'VA loan eligible', verdict: 'Buy now', color: '#C4842A' },
  { situation: 'All-cash buyer', verdict: 'Buy now', color: '#C4842A' },
  { situation: 'Lifestyle-driven move, rate is secondary', verdict: 'Buy now', color: '#C4842A' },
  { situation: 'Targeting an aged listing with negotiating room', verdict: 'Buy now', color: '#C4842A' },
  { situation: 'First-time buyer, IHFA funds confirmed available', verdict: 'Buy now', color: '#C4842A' },
  { situation: 'At the absolute ceiling of your budget', verdict: 'Revisit price point, not timing', color: '#6B7A8D' },
  { situation: 'Haven’t sold your current home', verdict: 'Sell first', color: '#9A9590' },
  { situation: 'Not pre-approved', verdict: 'Get pre-approved first', color: '#9A9590' },
]

const marketPulse = [
  { label: 'Resale closings', value: '293 (+11.8%)' },
  { label: 'New construction closings', value: '83 (+9.2%)' },
  { label: 'Resale median price', value: '$610,000' },
  { label: 'County median (May)', value: '$555,738' },
  { label: 'DOM until sale (resale)', value: '63 days' },
  { label: 'Months of supply', value: '3.5' },
  { label: 'Resale inventory', value: '817 (−14.5%)' },
  { label: 'Active listings, county', value: '917' },
  { label: 'Pct of list (resale)', value: '98.7%' },
  { label: 'Pct of list (new build)', value: '100.5%' },
]

const nidPulse = [
  { label: 'Sales with concessions', value: '~35%' },
  { label: 'All-cash buyers', value: '~37%' },
  { label: 'New construction share', value: '~23%' },
  { label: 'Most active band', value: '$400K–$500K' },
  { label: 'Most price reductions', value: '$400K–$500K' },
  { label: 'Active short sales', value: '1' },
  { label: 'Bank-owned closings YTD', value: '3' },
]

const sidebarRates = [
  { label: '30-yr (Freddie Mac avg)', value: '6.66%' },
  { label: '30-yr conventional (daily)', value: '6.73%' },
  { label: '15-yr fixed', value: '5.85%' },
  { label: 'FHA 30-yr', value: '6.12%' },
  { label: 'VA 30-yr', value: '6.18%' },
  { label: 'USDA 30-yr', value: '6.10%' },
  { label: '30-yr jumbo', value: '6.86%' },
  { label: 'IHFA Bond Program', value: 'Verify availability' },
]

export default function GoodTimeToBuyNorthernIdahoPage() {
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
<a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
<span className="mx-2">·</span>
<span className="text-[#5C5650]">Is It a Good Time to Buy in Northern Idaho?</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Market Analysis</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">14 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">Updated August 2026</span>
</div>
{/* H1 */}
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Is It a Good Time to Buy a Home in Northern Idaho? (Honest August 2026 Answer)
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            Data-backed analysis of buyer conditions, mortgage rates, seller leverage, and who should move now versus wait — refreshed with mid-year numbers from a licensed Northern Idaho REALTOR®.
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
<p className="font-dm-sans text-xs text-[#9A9590] mt-0.5">Published March 18, 2026 · Updated August 6, 2026 with June 2026 MLS data and current rates</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
{/* Key Stats Bar */}
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
{/* Article + Sidebar */}
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
{/* Article Body */}
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Yes — but the honest answer changed since March, and not in the direction most people expected.
</p>
<p className="mb-6">
                If you read the spring version of this article, the argument was that early 2026 had opened one of the more buyer-friendly windows Northern Idaho had seen since 2019. That was true in February. It is less true in August. Prices turned back up in May. Homes are closing faster than they were a year ago. Inventory on the MLS is down double digits. And the mortgage rate relief so many buyers were waiting on has been pushed out past 2027 by the people who forecast it for a living.
</p>
<p className="mb-6">
                Northern Idaho did not get cheaper while you waited. That is the part worth sitting with.
</p>
<p className="mb-6">
                There is still real buyer leverage here — more than 2021 or 2022, and meaningfully more on aged listings than on fresh ones. Sellers are still writing checks toward closing costs. But the window narrowed. What genuinely changed is that &quot;wait for rates&quot; stopped being a strategy and became a cost. Here are the numbers behind that, and who should actually move now.
</p>
<p className="mb-10">Market timing is one question. If you&rsquo;re also still evaluating where in North Idaho to land and what it costs to live here, the{' '}<a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">complete relocation guide</a>{' '}answers both.</p>

{/* H2: What the market looks like */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What the Northern Idaho Market Actually Looks Like Right Now
</h2>
<p className="mb-6">
                The February story was a softening market. The June story is a market that firmed back up.
</p>
<p className="mb-6">
                Kootenai County&rsquo;s median single-family price bottomed in March at $545,000 — down 0.2% from a year earlier, the first year-over-year decline since February 2024 (Coeur d&rsquo;Alene Regional REALTORS® March report). That decline lasted exactly one report. By May the county median had climbed to $555,738, up 2.3% year over year.
</p>
<p className="mb-8">
                June was stronger across nearly every measure. Per the Coeur d&rsquo;Alene MLS June 2026 local market update for Kootenai County:
</p>
{/* June metrics table */}
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-x-auto">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-2">
                  Kootenai County — June 2026
</h3>
<p className="font-dm-sans text-xs text-[#9A9590] mb-5">Year-over-year change in parentheses</p>
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-[#E8DDD0]">
<th className="font-dm-sans text-xs font-semibold text-[#1C1A17] pb-2 pr-4">Metric</th>
<th className="font-dm-sans text-xs font-semibold text-[#1C1A17] pb-2 pr-4">Previously owned</th>
<th className="font-dm-sans text-xs font-semibold text-[#1C1A17] pb-2">New construction</th>
</tr>
</thead>
<tbody>
{juneMetrics.map((row) => (
<tr key={row.metric} className="border-b border-[#E8DDD0] last:border-0">
<td className="font-dm-sans text-sm text-[#5C5650] py-2 pr-4">{row.metric}</td>
<td className="font-dm-sans text-sm font-semibold text-[#1C1A17] py-2 pr-4">{row.resale}</td>
<td className="font-dm-sans text-sm font-semibold text-[#1C1A17] py-2">{row.newBuild}</td>
</tr>
                    ))}
</tbody>
</table>
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">Source: Coeur d&rsquo;Alene MLS June 2026 Kootenai County local market update.</p>
</div>
<p className="mb-6">
                Read that table honestly and it does not describe a buyer&rsquo;s market. It describes a market where more sellers are listing, more buyers are closing, and homes are moving faster than they did last summer.
</p>
<p className="mb-10">
                And there is still no distress in this market. As of the most recent full MLS review, there was a single active short sale across the entire Northern Idaho MLS, with three bank-owned properties closing year to date. In a county closing more than 350 homes a month, that is a rounding error. This is not a market correcting. It is a market that took one soft quarter and then got back to work.
</p>

{/* H2: Inventory */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Inventory Story Nobody Locally Is Explaining Correctly
</h2>
<p className="mb-6">
                Here is where most market commentary gets Northern Idaho wrong right now, because inventory is doing two opposite things at once depending on how you count it.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Counted year over year, inventory is down.</strong> Resale homes on the Coeur d&rsquo;Alene MLS fell to 817 in June, a 14.5% decline from June 2025. Statewide, Idaho had 10,806 homes for sale in May, down 12.4% year over year (Redfin). Fewer homes for sale than last year is not a buyer-friendly condition.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Counted month over month, active listings are climbing hard.</strong> Kootenai County active listings went 580 in February, 631 in March, 731 in April, 834 in May, and 917 in June (Realtor.com Housing Inventory Core Metrics, via the St. Louis Fed). That is a 58% increase in five months.
</p>
<p className="mb-6">
                Both are true. Seasonal listing volume is surging — 516 new listings hit the county in June alone — while the market absorbs them fast enough that year-over-year standing inventory keeps shrinking. New construction new listings were up 47.2% year over year and new construction pendings were up 37.3%, meaning builders are releasing product and buyers are taking it.
</p>
<p className="mb-10">
                What this means for you as a buyer: you have more homes to choose from today than you did in February, and fewer than you did a year ago. At 3.5 months of supply, Kootenai County sits well under the six-month threshold the National Association of REALTORS® uses to define a balanced market. Your choice set is wider than it was in spring. Your leverage is thinner than it was a year ago. Both facts should shape how aggressively you write an offer.
</p>

{/* H2: Rates */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Where Rates Actually Are — and Why the &quot;Wait&quot; Math Broke
</h2>
<p className="mb-6">
                The March version of this article said rates were at seven-month highs and that Fannie Mae expected them to trend toward 5.9% by year end. Both statements are now wrong, and the second one matters a great deal.
</p>
<p className="mb-6">
                Where rates sit today: the 30-year fixed averaged 6.66% the week of July 30, 2026, up from 6.58% the prior week and down only slightly from 6.72% a year earlier (Freddie Mac Primary Mortgage Market Survey). Daily lender averages in early August ran a touch higher, around 6.73% for a 30-year conventional.
</p>
<p className="mb-8">
                Note what that means: the 30-year moved roughly six basis points in twelve months. Rates did not spike and they did not fall. They went sideways, and they have held in the mid-6s for the entire first half of 2026.
</p>
{/* Rates table */}
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-2">
                  Current Rates by Loan Type
</h3>
<p className="font-dm-sans text-xs text-[#9A9590] mb-5">Mortgage Research Center, August 5, 2026</p>
<div className="space-y-2">
{rateTable.map((r) => (
<div key={r.label} className="flex justify-between border-b border-[#E8DDD0] pb-2 last:border-0 last:pb-0">
<span className="font-dm-sans text-sm text-[#5C5650]">{r.label}</span>
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{r.value}</span>
</div>
                    ))}
</div>
</div>
<p className="mb-6">
                If you read the spring article and anchored on a 5.89% VA rate, correct that expectation. VA is running around 6.11% to 6.18% depending on the survey. Still the best conventional-alternative rate on the board, and still worth using — just not at 5.89%.
</p>
<p className="mb-10">
                And here is the forecast change that undoes the waiting argument. Fannie Mae&rsquo;s July 2026 housing forecast holds the 30-year fixed at 6.4% through the end of 2026, easing to 6.3% in the first quarter of 2027 and staying there through the third quarter before dropping to 6.2% in the fourth — an average of 6.3% in both 2026 and 2027. Fannie&rsquo;s economists also expect the federal funds rate to stay anchored at 3.5% to 3.75%, with no Fed cut until the second half of 2027. Back in March, the forecast was a 51 basis point drop within the year. Today the forecast is roughly 35 basis points spread across five quarters. That is a completely different decision.
</p>

{/* H2: Rate trap */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Rate Trap, Recalculated for August 2026
</h2>
<p className="mb-6">
                This is the argument most agents will not make clearly, and the current numbers make it sharper than they did in spring. Take the June resale median of $610,000 with 20% down — a $488,000 loan.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Buy now at 6.66%:</strong> principal and interest of approximately $3,136 per month. <strong className="text-[#1C1A17]">Wait for 6.30%, holding price constant:</strong> approximately $3,021 per month. That is $115 in monthly savings, and it is the number people imagine when they decide to wait.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Wait for 6.30% and let the market move:</strong> Fannie Mae forecasts home prices rising 2.5% in 2026 and 3.2% in 2027. At 2.5%, that $610,000 home is about $625,250 by mid-2027. Twenty percent down on $625,250 is a $500,200 loan. At 6.30%, principal and interest runs approximately $3,096 per month.
</p>
<p className="mb-8">
                Your actual savings for waiting five quarters: about $40 per month. And you paid roughly $15,250 more for the same house — which also means a larger down payment out of pocket and a bigger loan balance for thirty years. That is the trap. The rate improved and you still lost, because price moved faster than rate did. And that is using Fannie Mae&rsquo;s own conservative appreciation forecast, in a county where the June resale median just printed 13.7% above last year.
</p>
{/* Rate trap comparison */}
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Buy Now vs. Wait for 6.30%
</h3>
<div className="space-y-2 mb-5">
<div className="flex justify-between items-center border-b border-[#2C2A27] pb-2">
<span className="font-dm-sans text-xs text-[#9A9590] flex-1"></span>
<span className="font-dm-sans text-xs font-semibold text-[#C4842A] w-32 text-right">Buy now, 6.66%</span>
<span className="font-dm-sans text-xs font-semibold text-[#9A9590] w-32 text-right">Wait, 6.30%</span>
</div>
{rateTrap.map((row) => (
<div key={row.label} className="flex justify-between items-center border-b border-[#2C2A27] pb-2 last:border-0">
<span className="font-dm-sans text-xs text-[#9A9590] flex-1">{row.label}</span>
<span className="font-dm-sans text-xs font-semibold text-[#C4842A] w-32 text-right">{row.now}</span>
<span className="font-dm-sans text-xs font-semibold text-[#6B7A8D] w-32 text-right">{row.wait}</span>
</div>
                    ))}
</div>
<p className="font-dm-sans text-xs text-[#9A9590]">
                  Based on the June 2026 Kootenai County resale median, 20% down, 30-year conventional, and Fannie Mae&rsquo;s 2.5% appreciation forecast. Not a guarantee — verify your own numbers with a lender.
</p>
</div>
<p className="mb-10">
                The refinance option is still real, and it is the better play. Buy at today&rsquo;s price with today&rsquo;s negotiating room on aged listings, then reduce your payment if and when rates improve. You cannot refinance a purchase price. You can refinance a rate.
</p>

{/* H2: Leverage */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Buyer Leverage Actually Looks Like in August
</h2>
<p className="mb-6">
                Days on market remains the most underused number in a real estate negotiation. It tells you how much room you actually have on a specific property, based on closed transactions rather than theory. Two things are true at once right now, and you need both.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">The county-wide spread has compressed.</strong> In June 2026, resale homes received 98.7% of list price and new construction received 100.5%. New construction closing above list is worth registering: builders are giving incentives as rate buydowns and upgrades rather than price cuts, which is why their headline numbers look strong.
</p>
<p className="mb-8">
                But the structure still holds, and the structure is where you make money. The most recent full days-on-market breakdown published for the Northern Idaho MLS covers February 2026 closings, and the pattern in it is the durable insight — not the exact decimals:
</p>
{/* DOM leverage chart */}
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-2">
                  Days on Market vs. Buyer Negotiating Power
</h3>
<p className="font-dm-sans text-xs text-[#9A9590] mb-5">Northern Idaho MLS — February 2026 · Based on $500,000 list price</p>
<div className="space-y-4">
{domLeverageData.map((row) => (
<div key={row.range}>
<div className="flex justify-between items-start mb-1">
<div>
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{row.range} on market</span>
<span className="font-dm-sans text-xs text-[#9A9590] ml-2">— {row.leverage}</span>
</div>
<div className="text-right">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{row.pct}% of list</span>
<p className="font-dm-sans text-xs text-[#C4842A]">Savings: {row.savings}</p>
</div>
</div>
<div className="w-full bg-[#E8DDD0] h-6 rounded-none overflow-hidden">
<div
className="h-6 rounded-none"
style={{
width: `${row.pct}%`,
backgroundColor: row.color,
                          }}
/>
</div>
</div>
                  ))}
</div>
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">
                  Source: Northern Idaho MLS February 2026 closed transaction data. Savings estimated on a $500,000 list price.
</p>
</div>
<p className="mb-6">
                How to use this table correctly in August: treat it as the shape of the curve, not today&rsquo;s exact values. The market firmed since February, so the county-wide average tightened toward 98.7%. Fresh listings now have even less give than this table suggests — homes selling in under 30 days are frequently going at or above asking, and 64 homes closed with multiple offers in a single recent month. Aged listings, however, still discount hard. The gap between day 20 and day 100 is where your leverage lives, and that gap has not closed.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Sellers are still paying.</strong> Roughly 35% of closings included some form of seller concession — closing cost credits, rate buydowns, repair credits. That is down from 37.5% in February but still better than one in three. And with builders giving 100.5% of list while resale gives 98.7%, resale sellers competing against new inventory have a clear reason to write you a check. Ask — particularly on anything past 60 days.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Where the volume is.</strong> The $400,000 to $500,000 band remains the most active price range in the market at 81 closings in the most recent month with a full breakdown, with $500,000 to $600,000 close behind at 63. That same band also saw the most price reductions, at 55 homes, with 53 more in the $500,000 to $600,000 band. If you are shopping the busiest part of this market, you have both the most competition and the most motivated sellers — which is precisely why days on market is the number that should drive your offer.
</p>
<p className="mb-10">
                <strong className="text-[#1C1A17]">Cash is a bigger factor than most buyers realize.</strong> Roughly 37% of closings were all-cash — 100 of 368 sales in the most recent month with a full breakdown, up from 81 the month prior. New construction accounted for about 23% of sales. If you are financing, understand that better than a third of your competition is not.
</p>

{/* H2: Where matters more than when */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Where in Northern Idaho Matters More Than When
</h2>
<p className="mb-8">
                The county median hides more than it reveals, and this is where working with someone local stops being a nicety. Here is how the four core Kootenai County markets performed over the three-month period ending May 2026, per Redfin&rsquo;s calculations from MLS and public records:
</p>
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-x-auto">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Four Kootenai County Markets — Three Months Ending May 2026
</h3>
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-[#E8DDD0]">
<th className="font-dm-sans text-xs font-semibold text-[#1C1A17] pb-2 pr-4">City</th>
<th className="font-dm-sans text-xs font-semibold text-[#1C1A17] pb-2 pr-4">Median</th>
<th className="font-dm-sans text-xs font-semibold text-[#1C1A17] pb-2 pr-4">YoY</th>
<th className="font-dm-sans text-xs font-semibold text-[#1C1A17] pb-2 pr-4">Days</th>
<th className="font-dm-sans text-xs font-semibold text-[#1C1A17] pb-2">Sold</th>
</tr>
</thead>
<tbody>
{cityTable.map((row) => (
<tr key={row.city} className="border-b border-[#E8DDD0] last:border-0">
<td className="font-dm-sans text-sm font-semibold text-[#1C1A17] py-2 pr-4">{row.city}</td>
<td className="font-dm-sans text-sm text-[#5C5650] py-2 pr-4">{row.price}</td>
<td className="font-dm-sans text-sm text-[#5C5650] py-2 pr-4">{row.yoy}</td>
<td className="font-dm-sans text-sm text-[#5C5650] py-2 pr-4">{row.dom}</td>
<td className="font-dm-sans text-sm text-[#5C5650] py-2">{row.sold}</td>
</tr>
                    ))}
</tbody>
</table>
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">Source: Redfin, three months ending May 2026.</p>
</div>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Post Falls is the fastest-moving market in the county</strong> at fourteen days. If you are shopping Post Falls, you are not negotiating from a position of patience. You need pre-approval in hand and a decision framework built before you tour, because the good ones are gone inside two weeks.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Rathdrum is the appreciation story</strong> at +8.3%. It is still the value entry point relative to Coeur d&rsquo;Alene proper, and it is closing that gap faster than anywhere else in the county.
</p>
<p className="mb-10">
                <strong className="text-[#1C1A17]">Coeur d&rsquo;Alene proper is the only submarket flat to slightly down.</strong> More recent readings confirm it is stabilizing rather than falling — Redfin&rsquo;s rolling three months ending June 30 put the Coeur d&rsquo;Alene median at $589,679, up 0.80% year over year, with a median 22 days on market across 289 sales. If you are rate-sensitive and flexible on location, Coeur d&rsquo;Alene city limits currently offer the softest pricing relative to trend. If you need to be in Post Falls, speed matters more than leverage. That is a real strategic difference, and it does not show up in a county median.
</p>

{/* H2: Structural demand */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Why Demand Here Is Structural, Not Cyclical
</h2>
<p className="mb-6">
                None of the above changes the underlying reason people keep landing here. Post Falls is growing at 3.42% annually and Coeur d&rsquo;Alene at roughly 2%, with the city engineer projecting Post Falls at 100,000 residents by 2045. People are not moving to Northern Idaho because money is cheap. They are moving for lifestyle, tax structure, and quality of life. That migration did not stop at 6.41% in March and it is not stopping at 6.66% in August.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Rent is not the escape hatch.</strong> Median rent across Kootenai County runs about $2,262 per month (Realtor.com). Against a $3,136 payment on a median-priced home with 20% down, the gap is real but narrower than most renters assume — and rent buys you no equity and no fixed cost.
</p>
<p className="mb-10">
                And the rental market is tightening, not loosening. Coeur d&rsquo;Alene apartment vacancy fell to 6.8%, below Spokane&rsquo;s roughly 7.5% and the national average near 7.2%, with the market absorbing 570 units against just 47 delivered and only 225 units under construction market-wide (ACTIV8 Real Estate Q2 2026 Coeur d&rsquo;Alene multifamily report, using CoStar data). Asking rents are $1,619 and rising. When the construction pipeline goes quiet in a market still absorbing people, rents go one direction.
</p>

{/* H2: Who should buy */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Who Should Buy Right Now
</h2>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Buyers relocating with equity from a higher-cost market.</strong> This has been the strongest position in Northern Idaho for five years and it still is. If you are bringing California, Seattle, or Portland equity, the rate environment is a footnote for you — and you are competing in the same category as the 37% of buyers currently paying cash.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">VA-eligible buyers.</strong> At roughly 6.18%, VA remains materially better than the 6.73% conventional average, and VA permits seller concessions that offset closing costs. Correct any expectation set by the spring numbers, then use the program.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Anyone whose move is lifestyle-driven rather than rate-driven.</strong> If you have decided you want to live here, the forecast says you are waiting five quarters for 35 basis points while prices rise 2.5% to 3.2% a year. The math does not reward the wait.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Buyers targeting aged inventory.</strong> With 917 active listings in the county and 516 new ones added in June, the pool of homes that have been sitting keeps growing. Those sellers negotiate, and 55 of them cut price in the $400,000 to $500,000 band alone in a single month. Fresh listings in Post Falls do not negotiate. Aged listings do.
</p>
<p className="mb-10">
                <strong className="text-[#1C1A17]">First-time buyers — with one caveat.</strong> The Idaho Housing and Finance Association&rsquo;s tax-exempt mortgage revenue bond program opened locks on March 9, 2026, pairing below-market rates with second-mortgage down payment assistance (IHFA Program Bulletin 2026-4). The funds are a limited pool, first-come, and you must be under contract to lock. Five months in, availability needs to be verified with a lender before you build a plan around it. Kootenai County is not one of the designated targeted counties, so the first-time-buyer requirement applies in full.
</p>

{/* H2: Who should wait */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Who Should Still Wait
</h2>
<p className="mb-6">
                This list is shorter than it was in March, because the forecast changed.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Buyers who have not sold their current home.</strong> Unchanged and still the clearest case. A contingent offer positions you weakly against a seller with other options, and at 3.5 months of supply, sellers have other options. Sell first, then buy.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Buyers who are not pre-approved.</strong> Not a market call. In a county where Post Falls homes go in fourteen days and better than a third of buyers pay cash, shopping without pre-approval wastes your time and everyone else&rsquo;s.
</p>
<p className="mb-8">
                <strong className="text-[#1C1A17]">Buyers genuinely at their absolute ceiling.</strong> If $100 a month is the line between comfortable and stretched, you should not buy at your ceiling in any rate environment. But understand what waiting actually buys you now: roughly $40 a month by mid-2027 once appreciation is priced in, on a house that costs about $15,000 more. Waiting no longer solves an affordability problem. Adjusting price point, location, or down payment structure does. That is a conversation worth having rather than a year worth losing.
</p>
{/* Scorecard */}
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Should You Buy Now or Wait? — August 2026 Scorecard
</h3>
<div className="space-y-3">
{scorecard.map((item) => (
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

{/* FAQ */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Frequently Asked Questions
</h2>
<div className="space-y-4 mb-12">
{faqs.map((faq) => (
<div key={faq.q} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
<h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">{faq.q}</h3>
<p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">{faq.a}</p>
</div>
                ))}
</div>

{/* Closing Author CTA */}
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
<p className="font-dm-sans text-sm text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · Idaho License #1371861</p>
</div>
</div>
<p className="font-dm-sans text-[#9A9590] leading-relaxed mb-6">
                  I made this exact decision myself — relocating from Bend, Oregon to Northern Idaho — and I understand it from both sides of the table. I updated this article in August because the version I published in March was becoming inaccurate, and I would rather correct my own numbers than let you make a six-figure decision on stale data. The spring read was that waiting might pay. The mid-year data says it probably will not. I would rather tell you that than let a headline from five months ago do the talking.
</p>
<p className="font-dm-sans text-[#9A9590] leading-relaxed mb-6">
                  What the data cannot tell you is whether this is right for you. That depends on your budget, your timeline, whether you have equity to deploy, which city actually fits your life, and how much the rate environment matters to your monthly payment. If you want to talk through what the rest of 2026 looks like for your specific situation — not a generic answer, a real one — reach out. That conversation costs nothing and I will tell you what I actually think.
</p>
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
<p className="font-dm-sans text-xs text-[#9A9590] mt-6 leading-relaxed">
                Data sources: Coeur d&rsquo;Alene MLS June 2026 Kootenai County local market update; Coeur d&rsquo;Alene Regional REALTORS® monthly market snapshots (March and May 2026); Northern Idaho MLS closed transaction data as reported in local market analysis (February and March 2026); Freddie Mac Primary Mortgage Market Survey, July 30, 2026; Mortgage Research Center, August 5, 2026; Fannie Mae July 2026 Housing Forecast; Redfin Data Center; Realtor.com Housing Inventory Core Metrics via the Federal Reserve Bank of St. Louis; ACTIV8 Real Estate Q2 2026 Coeur d&rsquo;Alene multifamily report (CoStar); Idaho Housing and Finance Association Program Bulletin 2026-4. Market conditions change monthly — contact Shirin for current data.
</p>
</article>
{/* Sidebar */}
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
{/* Market Pulse Card */}
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Market Pulse</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Kootenai County · June 2026</p>
<div className="space-y-3">
{marketPulse.map((stat) => (
<div key={stat.label} className="flex justify-between border-b border-[#2C2A27] pb-2 last:border-0 last:pb-0">
<span className="font-dm-sans text-xs text-[#9A9590]">{stat.label}</span>
<span className="font-dm-sans text-xs font-semibold text-[#F5EFE6]">{stat.value}</span>
</div>
                    ))}
</div>
</div>
{/* NID MLS Card */}
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Northern Idaho MLS</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Latest full breakdown</p>
<div className="space-y-2">
{nidPulse.map((stat) => (
<div key={stat.label} className="flex justify-between border-b border-[#E8DDD0] pb-2 last:border-0 last:pb-0">
<span className="font-dm-sans text-xs text-[#5C5650]">{stat.label}</span>
<span className="font-dm-sans text-xs font-semibold text-[#1C1A17]">{stat.value}</span>
</div>
                    ))}
</div>
</div>
{/* Current Rates Card */}
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Current Rates</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">August 2026</p>
<div className="space-y-2">
{sidebarRates.map((rate) => (
<div key={rate.label} className="flex justify-between border-b border-[#E8DDD0] pb-2 last:border-0 last:pb-0">
<span className="font-dm-sans text-xs text-[#5C5650]">{rate.label}</span>
<span className="font-dm-sans text-xs font-semibold text-[#1C1A17]">{rate.value}</span>
</div>
                    ))}
</div>
<p className="font-dm-sans text-xs text-[#9A9590] mt-3">Rates change daily — verify with lender</p>
</div>
{/* Agent Card */}
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Local Advisor</p>
<img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp" className="w-16 h-16 rounded-full object-cover mb-3" />
<p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · #1371861</p>
<a href="/contact" className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Is Now Right for Me?
</a>
</div>
{/* Related */}
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Reading</p>
<div className="space-y-4">
<a href="/articles/post-falls-idaho-housing-market-2026" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Post Falls Housing Market 2026</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Full market report with data</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/how-much-do-homes-cost-post-falls-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">How Much Do Homes Cost in Post Falls?</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Price breakdown by budget tier</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/coeur-dalene-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Coeur d&rsquo;Alene Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Prices, neighborhoods, and lakefront</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/buyers" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Buying a Home in Northern Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What to expect from search to close</p>
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
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Ready to Talk It Through</p>
<h2 className="font-cormorant text-4xl md:text-5xl text-[#F5EFE6] mb-6 leading-tight font-semibold">
            Is the Rest of 2026 the Right Window for You?
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            The market data gives you the framework. Your situation is specific. Let&rsquo;s have an honest conversation about what buying in Northern Idaho actually looks like for your timeline, budget, and goals.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a href="/contact" className="bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold py-4 px-8 transition-colors">
              Start the Conversation
</a>
<a href="/articles" className="border border-[#5C5650] hover:border-[#9A9590] text-[#9A9590] hover:text-[#F5EFE6] font-dm-sans font-semibold py-4 px-8 transition-colors">
              More Articles
</a>
</div>
</div>
</section>
</>
  )
}
