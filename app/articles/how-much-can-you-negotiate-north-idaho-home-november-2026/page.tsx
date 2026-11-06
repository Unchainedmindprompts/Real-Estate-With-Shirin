import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/how-much-can-you-negotiate-north-idaho-home-november-2026'
const sources = [
  { label: 'Fannie Mae Selling Guide B3-4.1-02, Interested Party Contributions, dated May 7, 2025 (checked November 6, 2026): on a conventional loan, maximum financing concessions for a principal residence or second home are 3% when loan to value is above 90%, 6% at 75.01% to 90%, and 9% at 75% or less, and 2% for an investment property at all ratios, calculated on the lower of the sales price or appraised value; contributions cannot fund the down payment, reserves, or minimum borrower contribution, cannot exceed the borrower actual closing costs, and a seller funded rate buydown counts toward the same maximum', url: 'https://selling-guide.fanniemae.com/sel/b3-4.1-02/interested-party-contributions-ipcs' },
  { label: 'Realtor.com Economic Research, October 2026 Housing Report, published November 4, 2026 (checked November 6, 2026): nationally, homes under contract down 10.5% year over year, active listings up 7.4%, new listings down 7.5%, median listing price $415,000 down 2.2%, 20.5% of listings had a price reduction in October, about 43% of current active listings have had a reduction at some point, delistings 4.4% of active listings compared with 4.6% a year earlier; all figures are national, not North Idaho figures', url: 'https://www.realtor.com/research/october-2026-data/' },
  { label: 'Freddie Mac Primary Mortgage Market Survey, released November 5, 2026 (checked November 6, 2026): 30-year fixed averaged 7.18% as of November 5, 2026, down from 7.24% the week before, a third consecutive weekly decline, compared with 6.22% a year earlier; 15-year fixed averaged 6.57%; the survey covers conventional conforming purchase loans with 20% down and excellent credit, a benchmark, not a quote', url: 'https://www.freddiemac.com/pmms' },
  { label: 'Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026 (checked November 6, 2026; the October snapshot had not been published in the sources checked at build time): Kootenai County homes sold year to date through September 2026 were 1,975, up 4.0%, median sale price $569,900, up 4.3%, active listings 1,094 compared with 1,123 a year earlier', url: 'https://cdamarkettrends.com/' },
  { label: 'Real Estate With Shirin, North Idaho Housing Market Update, October 2026 (published October 25, 2026): five city Homes.com baseline, last 12 months, median sale prices Coeur d’Alene $575,000, Post Falls $525,000, Hayden $600,000, Rathdrum $520,000, Sandpoint $616,050, with average days on market Hayden 32, Post Falls 34, Rathdrum 36, Coeur d’Alene 46, Sandpoint 62; Homes.com does not publish a sale to list ratio for these cities and none is derived here', url: 'https://www.realestatewithshirin.com/articles/north-idaho-housing-market-update' },
  { label: 'Real Estate With Shirin, Selling a Home in North Idaho, October 2026: the gap between a city median list price and its median sale price is the difference between two medians of different sets of homes, not a sale to list ratio and not a negotiation discount', url: 'https://www.realestatewithshirin.com/articles/selling-a-home-north-idaho-what-your-home-is-worth' },
  { label: 'Real Estate With Shirin, Earnest Money in Idaho, October 2026: contract terms, delivery clocks, and forfeiture are set in the Idaho RE-21 purchase agreement the parties sign; cross linked for contract term questions rather than restated here', url: 'https://www.realestatewithshirin.com/articles/earnest-money-idaho-how-much-when-due-refundable' },
]
export const metadata: Metadata = {
title: 'How Much Can You Negotiate on a North Idaho Home in November 2026?',
description:
    'There is no standard November discount in North Idaho. The room that exists is specific: days on market against the city average, a listing that has already cut its price, and seller credits capped by loan rules at 3%, 6%, or 9% on a conventional loan (Fannie Mae B3-4.1-02). Local closed sales were up 4.0% year to date through September 2026, so across the board low offers are not what the local data supports.',
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: 'How Much Can You Negotiate on a North Idaho Home in November 2026?',
description: 'No promised discount. The negotiable ground in November 2026, with the hard loan limits: seller credits and buydowns share one capped pot on a conventional loan, national price cuts reached 20.5% of listings in October, and a 7.18% rate benchmark frames the buydown choice.',
url: articleUrl,
type: 'article',
publishedTime: '2026-11-06',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'How much can you actually negotiate off a North Idaho home right now?',
    a: 'There is no standard amount, and this guide does not invent one. Nationally, 20.5% of active listings took a price reduction in October 2026, the highest October share since 2022 (Realtor.com October 2026 Housing Report, published November 4, 2026). Locally, Kootenai County closed sales were up 4.0% year to date through September 2026, at a median of $569,900, up 4.3% (Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026). A market with rising local closings is not a market where across the board low offers work. The room, where it exists, is specific to the home: how long it has sat against its city average days on market, whether it has already cut its price once, and what terms, credits, or a buydown can do inside the loan rules.',
  },
  {
    q: 'Is there a limit to how much a seller can pay toward my closing costs?',
    a: 'Yes, on a conventional loan. Fannie Mae Selling Guide B3-4.1-02 caps financing concessions for a principal residence or second home at 3% when loan to value is above 90%, 6% at 75.01% to 90%, and 9% at 75% or less, and at 2% for an investment property, calculated on the lower of the sales price or the appraised value. The credit cannot exceed your actual closing costs, and it cannot be used for your down payment, reserves, or minimum borrower contribution. On a $569,900 purchase, the Kootenai County median, those caps are $17,097 at the 3% tier and $34,194 at the 6% tier, before the closing costs ceiling. FHA, VA, and USDA loans set their own limits, so your lender confirms the ceiling for your program before the offer is written.',
  },
  {
    q: 'Is a seller-paid rate buydown better than a price cut?',
    a: 'They do different things, and on a conventional loan they spend the same pot. A seller funded buydown counts toward the same Fannie Mae interested party contribution maximum as a closing cost credit, so it is credit toward costs or toward a buydown, not both on top of each other. A temporary 2-1 buydown sets your payment as if the rate were 2 points below the note rate in year one and 1 point below in year two, then the full note rate applies from year three, and you are qualified at the full note rate. A price cut lowers the price, and the payment, for the whole loan. With the Freddie Mac benchmark at 7.18% as of November 5, 2026, the right choice depends on how long you expect to keep the loan and the home, and neither outcome is promised here.',
  },
  {
    q: 'When does a low offer lose the house instead of starting a negotiation?',
    a: 'When the offer ignores what the specific home and its city are doing. Local closed sales were up 4.0% year to date through September 2026 (Coeur d’Alene Regional REALTORS), and the site five city baseline puts average days on market at 32 days in Hayden and 34 days in Post Falls, compared with 62 days in Sandpoint (Homes.com, last 12 months, baseline October 25, 2026). A fresh listing in a city where homes move in about a month is a different negotiation from a listing that has sat well past its city average or has already reduced its price. In the first case, a deep discount offer is likely to be set aside for a cleaner one. In the second, the days on market and the price history are the evidence for a lower offer, stated in the offer itself.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: 'How Much Can You Negotiate on a North Idaho Home in November 2026?',
  description: 'No standard November discount exists. Nationally 20.5% of listings cut price in October 2026 while Kootenai County closed sales rose 4.0% year to date through September. On a conventional loan, seller credits and buydowns share one Fannie Mae capped pot at 3%, 6%, or 9% by loan to value, and days on market against the city average is the cleanest local signal of room.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-11-06T00:00:00-08:00',
  dateModified: '2026-11-06T00:00:00-08:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'How much can you negotiate North Idaho home November 2026',
    'seller concessions conventional loan limits 3 6 9 percent Fannie Mae',
    'seller paid rate buydown vs price cut',
    'North Idaho days on market negotiation',
    'Realtor.com October 2026 price reductions 20.5 percent',
    'Freddie Mac 7.18 percent November 5 2026',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 1850,
  about: [
    {
      '@type': 'City',
      name: "Coeur d'Alene",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Kootenai County',
      sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
  ],
  spatialCoverage: {
    '@type': 'AdministrativeArea',
    name: 'North Idaho',
    sameAs: 'https://en.wikipedia.org/wiki/Idaho_Panhandle',
    containedInPlace: { '@type': 'State', name: 'Idaho' },
  },
  mentions: [
    { '@type': 'City', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Post Falls', sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Hayden', sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Rathdrum', sameAs: 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Sandpoint', sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
  ],
  citation: sources.map((source) => ({ '@type': 'WebPage', name: source.label, url: source.url })),
}
const faqSchema = {
'@context': 'https://schema.org',
'@type': 'FAQPage',
'@id': `${articleUrl}#faq`,
isPartOf: { '@id': `${articleUrl}#article` },
mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
}
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${articleUrl}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    { '@type': 'ListItem', position: 3, name: 'How Much Can You Negotiate in November 2026?', item: articleUrl },
  ],
}
const cityRows = [
  { city: 'Hayden', sale: '$600,000', dom: '32 days' },
  { city: 'Post Falls', sale: '$525,000', dom: '34 days' },
  { city: 'Rathdrum', sale: '$520,000', dom: '36 days' },
  { city: "Coeur d'Alene", sale: '$575,000', dom: '46 days' },
  { city: 'Sandpoint', sale: '$616,050', dom: '62 days' },
]
const capRows = [
  { tier: 'Above 90% loan to value', cap: '3%', example: '$17,097' },
  { tier: '75.01% to 90% loan to value', cap: '6%', example: '$34,194' },
  { tier: '75% or less loan to value', cap: '9%', example: '$51,291' },
  { tier: 'Investment property, any ratio', cap: '2%', example: '$11,398' },
]
export default function NegotiateNovemberPage() {
return (
<>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
<section className="bg-[#F5EFE6] pt-36 pb-16">
<div className="max-w-5xl mx-auto px-6">
<nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
<Link href="/" className="hover:text-[#C4842A] transition-colors">Home</Link>
<span className="mx-2">·</span>
<a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
<span className="mx-2">·</span>
<span className="text-[#5C5650]">How Much Can You Negotiate?</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">9 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            How Much Can You Negotiate on a North Idaho Home in November 2026?
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            There is no standard November discount, and any guide that names one is inventing it. What the verified data supports is narrower and more useful. Nationally, 20.5% of active listings took a price reduction in October 2026, the highest October share since 2022 (Realtor.com October 2026 Housing Report, published November 4, 2026). Locally, Kootenai County closed sales were up 4.0% year to date through September 2026, at a median of $569,900, up 4.3% (Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026). In that combination, across the board low offers are not the play. The negotiable ground is specific: a home that has sat past its city average days on market, a listing that has already cut once, and seller help with costs or a rate buydown, which on a conventional loan is capped by rule, not by optimism.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · November 6, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">20.5%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Listings With a Price Cut</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">October 2026 · Realtor.com, national only</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">3% / 6% / 9%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Conventional Seller Credit Caps</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">By loan to value · Fannie Mae B3-4.1-02</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$569,900</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Kootenai Median Sale Price, YTD</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Up 4.3% · Sales up 4.0% · CRR September</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">7.18%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">30-Year Fixed Average</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">As of November 5, 2026 · Freddie Mac</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Start with the two facts that frame every November negotiation here. The first is national and October dated: homes under contract fell 10.5% year over year, new listings fell 7.5%, delistings stayed flat at 4.4% of active listings compared with 4.6% a year earlier, and about 43% of current active listings have had a price reduction at some point (Realtor.com, published November 4, 2026, checked November 6, 2026). Sellers nationally are pausing and trimming, not panicking. The second fact is local and September dated: closed sales and the closed median both rose year to date in Kootenai County (Coeur d’Alene Regional REALTORS). The October local snapshot had not been published in the sources checked for this guide at build time on November 6, 2026, so no local October figure is claimed here.
</p>
<p className="mb-10">This guide is built from published data and this site published figures only. It adds no firsthand offer or negotiation anecdotes, and it promises no discount, credit, or outcome. For the city baseline behind it, see{' '}<a href="/articles/north-idaho-housing-market-update" className="text-[#C4842A] hover:underline">the North Idaho housing market update</a>,{' '}<a href="/articles/are-north-idaho-buyers-pulling-back-housing-market" className="text-[#C4842A] hover:underline">the buyers pulling back analysis</a>, and{' '}<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="text-[#C4842A] hover:underline">the flagship city comparison</a>.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Cleanest Local Signal Is Days on Market
</h2>
<p className="mb-6">
                A negotiation needs evidence about one home, and time is the most checkable evidence there is. The site five city baseline, from Homes.com over the last 12 months and published October 25, 2026, puts average days on market at 32 days in Hayden, 34 in Post Falls, 36 in Rathdrum, 46 in Coeur d’Alene, and 62 in Sandpoint. A listing still active well past its own city average has a different recent history from a listing in its first two weeks, and that difference is where a lower offer gets its footing. Quote the home days on market against its city average in the conversation. That is an argument. A national percentage applied to a local address is not.
</p>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-3 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">City</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Median Sale, Last 12 Months</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Average Days on Market</span>
</div>
{cityRows.map((row) => (
<div key={row.city} className="grid grid-cols-3 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.city}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.sale}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.dom}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Homes.com, last 12 months, baseline published October 25, 2026 and re-verified October 28, 2026. Average days on market is labeled as an average throughout this guide and is never mixed with median days to pending.</p>
</div>
<p className="mb-10">
                One warning belongs here, because a negotiation article is exactly where this error wants to happen. The gap between a city median list price and its median sale price is not a discount. This site selling guide established that the two medians describe different sets of homes, and Homes.com does not publish a sale to list ratio for these five cities, so none is derived or published here. Do not take a list median, subtract a sale median, and call the result what sellers accept. It does not measure that.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Seller Credits Have a Hard Ceiling, Set by the Loan
</h2>
<p className="mb-6">
                The hardest numbers in a negotiation are not opinions. They are loan rules. Under Fannie Mae Selling Guide B3-4.1-02, checked November 6, 2026, a seller contribution toward a buyer costs on a conventional loan is an interested party contribution, and the maximum depends on loan to value. The percentage is calculated on the lower of the sales price or the appraised value, not on the loan amount. Typical fees a seller pays under local custom are not subject to these caps. Anything above the cap is treated as a sales concession and deducted from the price for loan purposes, and the credit in any case cannot exceed the buyer actual closing costs.
</p>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-3 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Loan to Value Tier</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Maximum Credit</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">On $569,900, the County Median</span>
</div>
{capRows.map((row) => (
<div key={row.tier} className="grid grid-cols-3 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.tier}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.cap}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.example}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Fannie Mae B3-4.1-02, principal residence or second home tiers, checked November 6, 2026. Dollar figures are arithmetic on the $569,900 Kootenai County median sale price (Coeur d’Alene Regional REALTORS, year to date through September 2026), labeled as an example, not a quote. Credits also cannot exceed the buyer actual closing costs.</p>
</div>
<p className="mb-10">
                Two limits matter as much as the percentages. First, a seller credit cannot be used for the down payment, for financial reserves, or for the minimum borrower contribution, so a bigger credit does not substitute for cash to close. Second, these are conventional loan rules. FHA, VA, and USDA loans set their own contribution limits, and this guide does not print a percentage for those programs from a secondary explainer. Have your lender confirm the ceiling for your exact program, in writing, before the credit goes into an offer. A buyer who asks for more than the program allows has not negotiated harder. They have written an offer the lender will trim at underwriting.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                A Buydown and a Price Cut Are Not the Same Ask
</h2>
<p className="mb-6">
                A seller funded rate buydown spends the same capped pot as a closing cost credit. B3-4.1-02 counts the cost of an interested party funded buydown toward the same maximum, so the choice is credit toward costs or toward a buydown, inside one ceiling. The mechanics of the common temporary version are simple: a 2-1 buydown sets the payment as if the rate were 2 points below the note rate in year one and 1 point below in year two, the difference is funded up front into an escrow account, and from year three the full note rate applies for the remaining term. The note rate itself does not change, and the borrower is qualified at the full note rate, so a buydown eases early payments without qualifying anyone for a larger loan. No dollar cost for a buydown is published here, because none was verified as a general figure.
</p>
<p className="mb-10">
                The rate context for that choice moved this week. Freddie Mac Primary Mortgage Market Survey, released November 5, 2026 and checked November 6, 2026, averaged 7.18% for a 30-year fixed loan, down from 7.24% the week before, a third consecutive weekly decline, compared with 6.22% a year earlier. That survey is a national benchmark for conventional conforming purchase loans with 20% down and excellent credit, not a quote. A price cut, by contrast, lowers the amount borrowed for the life of the loan. Which serves a buyer better depends on how long they keep the loan, and that answer is arithmetic on their own figures with their lender, not a rule this guide can state.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Inspection and Terms Are Contract Questions, Not Market Statistics
</h2>
<p className="mb-6">
                Price and credits are only part of a negotiation. Inspection requests, closing timelines, and earnest money structure are terms of the Idaho RE-21 purchase agreement the parties sign, and there is no verified standard inspection period or standard concession amount to publish here. What has been verified and published on this site is the earnest money framework: how much is negotiated rather than set by law, when it is due, and when it is refundable. Read{' '}<a href="/articles/earnest-money-idaho-how-much-when-due-refundable" className="text-[#C4842A] hover:underline">Earnest Money in Idaho</a>{' '}before treating any term as routine, and put every agreed term in the signed agreement, not in a side conversation.
</p>
<p className="mb-10">
                The practical order of operations follows from all of the above. First, check the home against its city: days on market, any price reduction in its history, and closed sales nearby at a comparable size. Second, check the ask against the loan: the credit ceiling for your program and tier, and whether a buydown or a price change serves you better on your own numbers. Third, write the offer so its evidence travels with it. An offer that shows its reasoning is harder to dismiss than one that only shows a lower number.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  When an Aggressive Offer Works, and When It Loses
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">It can work:</span> on a listing that has sat well past its city average days on market, has already reduced its price, or sits in the slowest of the five city baselines, Sandpoint at 62 average days, where the time evidence is on the buyer side. The offer should still name its evidence and stay inside the loan rules for any credit it requests.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">It usually loses:</span> on a fresh listing in Hayden or Post Falls, where the baseline average is close to a month, in a county where closed sales rose 4.0% year to date through September 2026. There, a seller with a recent listing and other interest has little reason to accept a deep discount, and a cleaner offer at a supported price is the competing bid.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">Either way:</span> no figure in this guide guarantees a price, a credit, a rate, or a negotiation outcome. Negotiation is decided home by home, on that home evidence and that buyer loan.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published November 6, 2026. National figures are Realtor.com October 2026 figures, published November 4, 2026, and Freddie Mac PMMS figures as of November 5, 2026, both checked November 6, 2026 and labeled national wherever they appear. Loan limits are Fannie Mae conventional loan rules from Selling Guide B3-4.1-02, checked November 6, 2026; government loan programs set their own limits. Local figures are Coeur d’Alene Regional REALTORS figures from the September 2026 Market Snapshot, data as of October 5, 2026, plus the site October 25, 2026 five city Homes.com baseline; the October local snapshot had not been published in the sources checked at build time, and no local October figure is claimed. No sale to list ratio is published, and no median list to sale gap is presented as a discount. No firsthand anecdotes about showings, offers, or negotiations are included, because no notes from Shirin were on file for this article when it was built, and none have been invented. No guarantee is made about prices, rates, days on market, or negotiation outcomes. This guide is general real estate information, not financial or legal advice. Brokerage, where named, is Berkshire Hathaway HomeServices Jacklin Real Estate.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Frequently Asked Questions
</h2>
<div className="space-y-4 mb-12">
{faqs.map((faq) => (
<div key={faq.q} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
<h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">
                    {faq.q}
</h3>
<p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">
                      {faq.a}
</p>
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
<p className="font-dm-sans text-sm text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · Idaho License #1371861</p>
</div>
</div>
<p className="font-dm-sans text-[#9A9590] leading-relaxed mb-6">
                  A good negotiation starts with evidence about one home and the actual limits of your loan, not with a percentage pulled from a headline. If you are preparing an offer in Coeur d’Alene, Post Falls, Hayden, Rathdrum, or Sandpoint, let us look at that home time on market, its price history, and your lender credit ceiling together before you write a number. No pressure, no pitch, just an honest conversation.
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
                Data sources: Fannie Mae Selling Guide B3-4.1-02 (conventional loan contribution limits), Realtor.com Economic Research (national, October 2026), Freddie Mac Primary Mortgage Market Survey (national, as of November 5, 2026), Coeur d’Alene Regional REALTORS September 2026 Market Snapshot (Kootenai County, data as of October 5, 2026), and this site published market update, as detailed in Sources and Scope above. Confirm your lender ceiling and the current local snapshot before you act on any figure here.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">At a Glance</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Price guide: the limits that frame a November offer</p>
<div className="space-y-3">
{[
                      { range: 'No standard discount', desc: 'Room is home specific: days on market, price history, and terms' },
                      { range: 'Credit caps 3% / 6% / 9%', desc: 'Conventional loan, by loan to value, Fannie Mae B3-4.1-02' },
                      { range: '$17,097 at the 3% tier', desc: 'Worked example on the $569,900 county median, not a quote' },
                      { range: 'Buydown shares the cap', desc: 'A seller funded buydown counts toward the same maximum' },
                      { range: 'Rate 7.18%', desc: '30-year fixed, as of November 5, 2026, Freddie Mac, national benchmark' }
                    ].map((item) => (
<div key={item.range} className="border-b border-[#2C2A27] pb-3 last:border-0 last:pb-0">
<p className="font-dm-sans text-sm font-semibold text-[#C4842A]">{item.range}</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-0.5">{item.desc}</p>
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
                    Talk Through an Offer
</a>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/articles/earnest-money-idaho-how-much-when-due-refundable" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Earnest Money in Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">How much, when it is due, and when you get it back</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/are-north-idaho-buyers-pulling-back-housing-market" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Are North Idaho Homebuyers Pulling Back?</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The national October pullback, checked against local data</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/north-idaho-housing-market-update" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho Housing Market Update</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The five city baseline this guide builds on</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho City Comparison</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">All five cities, head to head, the flagship comparison</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/coeur-dalene-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Coeur d’Alene Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for the largest of the five markets</p>
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
<section className="bg-[#1C1A17] py-20">
<div className="max-w-3xl mx-auto px-6 text-center">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Ready to Talk</p>
<h2 className="font-cormorant text-4xl md:text-5xl text-[#F5EFE6] mb-6 leading-tight font-semibold">
            Writing an Offer This Month?
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Bring the home you are watching, and we will check its days on market, its price history, and your credit ceiling together. That is where a sound offer starts.
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
