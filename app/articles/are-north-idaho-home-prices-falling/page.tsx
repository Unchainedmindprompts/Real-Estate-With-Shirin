import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/are-north-idaho-home-prices-falling'
const sources = [
  { label: 'Realtor.com Economic Research, October 2026 Housing Report, published November 4, 2026 (checked November 8, 2026): nationally, median list price $415,000, down 2.2% year over year, active listings up 7.4%, new listings down 7.5%, homes under contract down 10.5%, and 20.5% of listings had a price reduction in October, the highest October share since 2022; all figures are national asking prices and listing activity, not North Idaho figures and not sold prices', url: 'https://www.realtor.com/research/october-2026-data/' },
  { label: 'National Association of REALTORS, Existing-Home Sales, September 2026, released October 13, 2026 (re-confirmed at nar.realtor November 8, 2026): median existing home price for all housing types $417,500, up 1.3% from $412,300 in September 2025, the 39th consecutive month of year over year gains and the highest September median recorded, single family median $422,700, up 1.2%, sales at a 3.99 million seasonally adjusted annual rate, up 1.5% from August and down 2.2% year over year, unsold inventory 1.60 million at 4.8 months of supply, West region median $613,600, down 0.3% year over year with Western sales down 5.2%, a regional figure, not a North Idaho figure; the October report is scheduled for November 12, 2026, after this build, so September is the latest NAR month available', url: 'https://www.nar.realtor/newsroom/existing-home-sales-increased-1-5-in-september-according-to-nar-report' },
  { label: 'S&P Dow Jones Indices, S&P Cotality Case-Shiller Indices, August 2026, released October 27, 2026 (re-confirmed at the primary release November 8, 2026): National Index up 2.1% year over year, up from 1.9% in July, 10-City Composite up 3.6%, 20-City Composite up 2.7%, month over month the national index fell about 0.2% unadjusted and rose about 0.3% seasonally adjusted, Chicago up 6.7% year over year and Seattle, a metro figure, not a North Idaho figure, down 2.0%, and S&P commentary states consumer price inflation ran 3.4% year over year against the 2.1% nominal gain, so U.S. home values declined in real terms for the 15th consecutive month; Case-Shiller compares repeat sales of the same single family homes over a three month rolling window, so its August reading reflects closings from June to August', url: 'https://www.prnewswire.com/news-releases/sp-cotality-case-shiller-index-reports-annual-gain-in-august-2026-302920916.html' },
  { label: 'Federal Housing Finance Agency, FHFA House Price Index, August 2026, released October 27, 2026 (re-confirmed at fhfa.gov November 8, 2026): U.S. house prices up 0.3% in August and up 2.4% from August 2025 to August 2026, a repeat sales index built from homes financed with conforming mortgages backed by Fannie Mae and Freddie Mac', url: 'https://www.fhfa.gov/news/news-release/fhfa-house-price-index-up-0.3-percent-in-august-up-2.4-percent-from-last-year' },
  { label: 'Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026, as compiled at CDA Market Trends (checked November 8, 2026; the October snapshot had not been published there at build time): Kootenai County single family, site built homes on less than 2 acres, median sale price year to date $569,900, up 4.3% versus the same period in 2025, homes sold year to date 1,975, up 4.0%, active residential listings 1,094 compared with 1,123 a year earlier, days from listing to close for September only 80; the same page, citing Zillow Research public data as of September 2026, puts the Zillow Home Value Index typical home value for Kootenai County at $606,179, up 3.1% versus September 2025, a modeled typical value, not a median of homes that sold', url: 'https://cdamarkettrends.com/' },
  { label: 'Windermere Real Estate, 2026 Third Quarter Regional Real Estate Report, October 26, 2026, Spokane and Coeur d’Alene section (checked November 8, 2026): closed sales for the quarter up 4% year over year for the combined two county area, the combined average sale price rose to $638,000 in September with Kootenai County average up about 27% versus September 2025, a jump Windermere itself attributes to a handful of high end sales and calls unlikely to reflect an underlying trend, while Kootenai median sold prices rose a much smaller 6% on the quarterly comparison it reports; a brokerage analysis of MLS data, not the Coeur d’Alene Regional REALTORS snapshot, and its quarterly window is not blended with the year to date snapshot figures', url: 'https://www.windermere.com/blog/2026-third-quarter-regional-real-estate-report' },
  { label: 'Freddie Mac Primary Mortgage Market Survey, released November 5, 2026 (checked November 8, 2026): 30 year fixed averaged 7.18%, a third consecutive weekly decline, compared with 6.22% a year earlier; the survey covers conventional conforming purchase loans with 20% down and excellent credit, a benchmark, not a quote, and not a price statistic', url: 'https://www.freddiemac.com/pmms' },
  { label: 'Real Estate With Shirin, North Idaho Housing Market Update, October 2026 (published October 25, 2026): five city Homes.com baseline, last 12 months, median sale prices Coeur d’Alene $575,000, Post Falls $525,000, Hayden $600,000, Rathdrum $520,000, Sandpoint $616,050, with average days on market Hayden 32, Post Falls 34, Rathdrum 36, Coeur d’Alene 46, Sandpoint 62', url: 'https://www.realestatewithshirin.com/articles/north-idaho-housing-market-update' },
]
export const metadata: Metadata = {
title: 'Are North Idaho Home Prices Falling? Why National Headlines Don’t Tell the Whole Story',
description:
    'National asking prices fell 2.2% in October 2026 (Realtor.com), while national sold prices rose 1.3% in September (NAR) and repeat sales indexes rose 2.1% to 2.4% in August, below 3.4% inflation. Locally, the Kootenai County median sold price was $569,900 year to date through September, up 4.3%. Four different measures, kept separate, with no local decline claimed.',
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: 'Are North Idaho Home Prices Falling? Why National Headlines Don’t Tell the Whole Story',
description: 'List prices down nationally, sold prices up nationally, prices down after inflation, and Kootenai County sold prices up 4.3% year to date. Why those four statements can all be true at once, and why unlike measures must never be compared as if they were the same.',
url: articleUrl,
type: 'article',
publishedTime: '2026-11-08',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'Are home prices falling in North Idaho?',
    a: 'Not in the latest local sold price source on file. In Kootenai County, the median single family sale price year to date through September 2026 was $569,900, up 4.3% versus the same period in 2025, with 1,975 homes sold, up 4.0% (Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026, checked November 8, 2026; the October snapshot had not been published at build time). The falling figure in the headlines is a different measure in a different place: nationally, the median list price was $415,000 in October 2026, down 2.2% year over year (Realtor.com). Asking prices nationally and sold prices in Kootenai County are not the same measure, and no local source on file shows a Kootenai County sold price decline. That is not a promise local prices will keep rising.',
  },
  {
    q: 'Why do headlines say prices are dropping if the median is up?',
    a: 'Because three documented stories are being folded into one headline. First, national asking prices fell: median list $415,000, down 2.2% year over year in October 2026, with 20.5% of listings taking a price reduction (Realtor.com). Second, national sold prices rose slowly: median existing home price $417,500 in September 2026, up 1.3% year over year, the 39th consecutive month of gains (National Association of REALTORS, released October 13, 2026). Third, after inflation, national prices fell in real terms: the Case-Shiller National Index rose 2.1% year over year in August 2026 while consumer prices rose 3.4%, which S&P Dow Jones Indices calls the 15th consecutive month of real terms decline (released October 27, 2026). Each story is true about its own measure. A headline that does not name its measure is hiding which one it means.',
  },
  {
    q: 'My home’s Zillow estimate went down. Did my home lose value?',
    a: 'Not necessarily, and an estimate movement alone does not prove it. The Zillow Home Value Index is a modeled estimate of a typical home’s value, not a median of homes that sold. For Kootenai County as a whole it stood at $606,179 as of September 2026, up 3.1% versus September 2025 (Zillow Research public data, as compiled at CDA Market Trends, checked November 8, 2026), at the same time the county median of homes that actually sold was $569,900 year to date. Those two figures measure different things and must never be compared as if they were the same measure or used to compute a gain or a drop. An individual home’s modeled estimate can move when the model, its inputs, or the mix around it changes. What your home would actually sell for is tested by recent closed sales of comparable homes nearby, not by an estimate moving on a screen.',
  },
  {
    q: 'What should I actually watch to know where North Idaho prices are going?',
    a: 'Watch the local sold data, dated, from one source at a time: the Coeur d’Alene Regional REALTORS monthly snapshot for Kootenai County, which publishes the median sale price and homes sold year to date (through September 2026: $569,900, up 4.3%, and 1,975 sold, up 4.0%, data as of October 5, 2026). Read the year to date window, not a single month, because a thin month’s median or average can move with the mix of homes that happened to close: Windermere’s third quarter report attributes a sharp September jump in Kootenai County’s average sale price to a handful of high end sales and calls it unlikely to reflect an underlying trend, while the median rose much less on its comparison. Then check closed sales of homes comparable to yours. National list prices, national indexes, and a modeled typical value are context. None of them is a North Idaho sold price.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: 'Are North Idaho Home Prices Falling? Why National Headlines Don’t Tell the Whole Story',
  description: 'National list prices down 2.2% in October 2026, national sold median up 1.3% in September, Case-Shiller up 2.1% and FHFA up 2.4% in August against 3.4% inflation, and Kootenai County median sold price $569,900 year to date through September, up 4.3%. Four measures kept separate throughout, with no unlike metrics compared as the same measure and no local decline claimed.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-11-08T00:00:00-08:00',
  dateModified: '2026-11-08T00:00:00-08:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'are North Idaho home prices falling',
    'national list price down 2.2 percent October 2026 Realtor.com',
    'NAR median sold price 417500 September 2026 up 1.3 percent',
    'Case-Shiller 2.1 percent August 2026 real terms inflation 3.4 percent',
    'Kootenai County median sale price 569900 up 4.3 percent September 2026',
    'list price vs sold price vs typical value difference',
  ],
  articleSection: 'Market Updates',
  wordCount: 1950,
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
    { '@type': 'ListItem', position: 3, name: 'Are North Idaho Home Prices Falling?', item: articleUrl },
  ],
}
const measureRows = [
  { measure: 'Median list price, national', figure: '$415,000, down 2.2% year over year, October 2026', source: 'Realtor.com, asking prices of homes listed for sale' },
  { measure: 'Median sold price, national', figure: '$417,500, up 1.3% year over year, September 2026', source: 'NAR, middle price of existing homes that closed' },
  { measure: 'Repeat sales index, national', figure: 'Up 2.1% year over year, August 2026 (FHFA: up 2.4%)', source: 'Case-Shiller and FHFA, same homes sold twice, not medians' },
  { measure: 'Typical value, Kootenai County', figure: '$606,179 as of September 2026, up 3.1% year over year', source: 'Zillow ZHVI, a modeled estimate, not a sale price' },
  { measure: 'Median sold price, Kootenai County', figure: '$569,900 year to date through September 2026, up 4.3%', source: 'Coeur d’Alene Regional REALTORS, closed single family sales' },
]
export default function PricesFallingPage() {
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
<span className="text-[#5C5650]">Are North Idaho Prices Falling?</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Market Updates</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">10 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Are North Idaho Home Prices Falling? Why National Headlines Don’t Tell the Whole Story
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            It depends entirely on which price you mean, and this guide will not pick one side. National asking prices are falling: the median list price was $415,000 in October 2026, down 2.2% year over year (Realtor.com, published November 4, 2026). National sold prices are still rising slowly: the median existing home price was $417,500 in September 2026, up 1.3% year over year (National Association of REALTORS, released October 13, 2026). After inflation, national prices are falling in real terms, because a 2.1% nominal gain trails 3.4% inflation (S&P Dow Jones Indices, August 2026, released October 27, 2026). And locally, the latest sold price source on file shows Kootenai County up, not down: a median of $569,900 year to date through September 2026, up 4.3% (Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026). Four measures, four different answers. The work below is keeping them separate.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · November 8, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">-2.2%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">National Median List Price, YoY</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">$415,000 · October 2026 · Realtor.com, asking</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">+1.3%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">National Median Sold Price, YoY</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">$417,500 · September 2026 · NAR, closed</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">+2.1%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Case-Shiller National, YoY</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">August 2026 · vs 3.4% inflation · S&P</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$569,900</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Kootenai Median Sold Price, YTD</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Up 4.3% · Through September · CRR</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Start with the rule this whole guide follows, because it is the rule the headlines break. List price, sold median, repeat sales index, and modeled typical value are four different instruments. No sentence here subtracts one from another, ranks them, or calls the difference between them a gain or a loss. Every figure carries its measure, its geography, and its date window, every time. A draft that said flatly that prices are falling, or flatly that they are not, would be wrong both ways.
</p>
<p className="mb-10">This guide is built from published data and this site published figures only. It adds no firsthand anecdotes about specific listings, price cuts, or seller decisions, because no notes from Shirin were on file for this article when it was built, and none have been invented. For the local baseline behind this piece, see{' '}<a href="/articles/north-idaho-housing-market-update" className="text-[#C4842A] hover:underline">the North Idaho housing market update</a>,{' '}<a href="/articles/are-north-idaho-buyers-pulling-back-housing-market" className="text-[#C4842A] hover:underline">Are North Idaho Homebuyers Pulling Back?</a>, and{' '}<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="text-[#C4842A] hover:underline">the flagship city comparison</a>.</p>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-3 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Measure</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Latest Figure, Dated</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">What It Actually Measures</span>
</div>
{measureRows.map((row) => (
<div key={row.measure} className="grid grid-cols-3 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.measure}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.figure}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.source}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Table built November 8, 2026 from the sources in Sources and Scope below. These rows are different instruments measuring different things in different places over different windows. Read each row on its own terms. Do not subtract one row from another or treat the gap between rows as a gain, a loss, or a discount.</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Falling Number Is an Asking Price
</h2>
<p className="mb-6">
                The softest national number, and the one most headlines quote, is the asking price. Realtor.com October 2026 Housing Report, published November 4, 2026 and checked November 8, 2026, puts the national median list price at $415,000, down 2.2% year over year, with active listings up 7.4%, new listings down 7.5%, homes under contract down 10.5%, and 20.5% of listings taking a price reduction in October, the highest October share since 2022.
</p>
<p className="mb-10">
                An asking price is what a seller hopes to get, set before the market answers. It can fall because sellers start lower, because the mix of homes listed shifts, or because reductions accumulate on homes that sat. All of that is real information about seller expectations nationally. None of it is a record of what homes closed for, in the nation or in North Idaho, and this guide never presents it as one.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sold Prices Nationally Are Still Rising, Slowly
</h2>
<p className="mb-6">
                The closed record tells the opposite story, at a slow pace. National Association of REALTORS, Existing-Home Sales for September 2026, released October 13, 2026 and re-confirmed at nar.realtor on November 8, 2026: the median existing home price for all housing types was $417,500, up 1.3% from $412,300 in September 2025, the 39th consecutive month of year over year price gains and the highest September median NAR has recorded. The single family median was $422,700, up 1.2%. Sales ran at a 3.99 million seasonally adjusted annual rate, up 1.5% from August and down 2.2% year over year, with unsold inventory at 1.60 million, or 4.8 months of supply. The NAR October report is scheduled for November 12, 2026, after this build, so September is the latest NAR month available and is dated as such here.
</p>
<p className="mb-10">
                The repeat sales indexes agree on direction. S&P Cotality Case-Shiller, August 2026, released October 27, 2026: the National Index rose 2.1% year over year, up from 1.9% in July, with the 10-City Composite up 3.6% and the 20-City Composite up 2.7%. The FHFA House Price Index, released the same day, rose 0.3% in August and 2.4% year over year. Two honest caveats belong with them. The West was the only NAR region with a year over year median decline, at $613,600, down 0.3%, with Western sales down 5.2%: a regional figure covering the whole West, never a North Idaho figure. And inside Case-Shiller, Chicago rose 6.7% year over year while Seattle, a metro figure, fell 2.0%: nearly nine points apart in the same national release, which is the clearest documented proof that the national market does not move as one.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                In Real Terms, Prices Are Falling. Here Is the Math
</h2>
<p className="mb-6">
                There is an honest kernel inside the falling headlines, and it comes from S&P’s own commentary on the August release, checked November 8, 2026. Consumer price inflation ran 3.4% year over year against the Case-Shiller nominal gain of 2.1%. On those two numbers, S&P Dow Jones Indices states that U.S. home values declined in real terms for the 15th consecutive month in August 2026, even as nominal prices rose.
</p>
<p className="mb-10">
                Hold that point to its exact scope. It is a national statement about purchasing power: a home that gained 2.1% on paper gained less than the general price level, so in inflation adjusted terms it went backwards. It is not a dollar loss on any home, it is not a North Idaho figure, and this guide does not convert it into one. It also needs its method note: Case-Shiller compares repeat sales of the same single family homes over a three month rolling window, so its August reading reflects closings, and contracts signed weeks earlier, from June to August. It is a rearview measure, not a November pulse, and it is not a median.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Locally, the Latest Sold Prices Are Up, Not Down
</h2>
<p className="mb-6">
                Locally, the latest sold price source on file is still the September snapshot. Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026 and checked again November 8, 2026 at CDA Market Trends: for Kootenai County single family, site built homes on less than 2 acres, the median sale price year to date through September 2026 was $569,900, up 4.3% versus the same period in 2025, homes sold year to date were 1,975, up 4.0%, active residential listings were 1,094 compared with 1,123 a year earlier, and days from listing to close for September only were 80.
</p>
<p className="mb-10">
                Two limits travel with that paragraph. The October local snapshot had not been published in the sources checked at build time on November 8, 2026, so no local October figure is claimed here, and September year to date data is never called November prices. And an up 4.3% year to date median is a record of what closed, not a promise: no figure in this guide guarantees that local prices will keep rising, just as no source on file supports saying they have started to fall.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Why a Price Statistic Can Jump When No Home Changed Value
</h2>
<p className="mb-6">
                North Idaho has a documented local example of the mix problem, from a brokerage analysis of MLS data. Windermere Real Estate, 2026 Third Quarter Regional Real Estate Report, October 26, 2026, Spokane and Coeur d’Alene section, checked November 8, 2026: the combined two county average sale price rose to $638,000 in September, with Kootenai County average up about 27% versus September 2025, and Windermere itself attributes that jump to a handful of high end sales and calls it unlikely to reflect an underlying trend. On the quarterly comparison Windermere reports, Kootenai median sold prices rose a much smaller 6%.
</p>
<p className="mb-10">
                That is the composition trap in one paragraph. An average is pulled by every large sale in a thin month. Even a median, which resists outliers better, still describes the middle of the homes that happened to close in that window, not the value path of your home. Windermere quarterly median is a different window and a different source from the snapshot year to date median above, so the two are not blended here. The lesson travels, though: when a single month number moves sharply, ask what closed that month before you conclude that values moved.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                A Zillow Number Is a Third Kind of Thing Entirely
</h2>
<p className="mb-6">
                The number many homeowners actually watch is neither a list price nor a sold price. The Zillow Home Value Index, as compiled at CDA Market Trends from Zillow Research public data as of September 2026 and checked November 8, 2026, puts the typical home value for Kootenai County at $606,179, up 3.1% versus September 2025. ZHVI is a modeled estimate of the typical home value. It is built to describe a market smoothly over time, not to record transactions.
</p>
<p className="mb-10">
                So if your own home estimate moved down in a month when the county typical value and the county sold median both rose, you have not found a contradiction, and you have not necessarily lost value. A model re-estimates. A sale is an event. The two figures in this section, $606,179 and $569,900, sit side by side in this guide for one purpose only: to show why they differ. They must never be compared as if they measured the same thing, and no gain or drop may be computed between them. The affordability pressure behind all of this is real, though: the Freddie Mac benchmark averaged 7.18% for a 30 year fixed loan as of November 5, 2026, a third consecutive weekly decline, compared with 6.22% a year earlier. That is context for why slow nominal growth can still feel tight. It is a national benchmark for conventional conforming purchase loans with 20% down and excellent credit, not a quote, and not a price statistic.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  What to Watch, and What to Ignore
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Watch:</span> the Coeur d’Alene Regional REALTORS monthly snapshot, read on its year to date window, and the closed sales of homes comparable to yours in your city. Those are sold prices, local, and dated. The five city baseline on this site, last published October 25, 2026 from Homes.com over the last 12 months, runs from Rathdrum at $520,000 to Sandpoint at $616,050, and it is the right scale for a city level conversation.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Use as context only:</span> national list prices for seller expectations, the repeat sales indexes for national direction after inflation, and a modeled typical value for how a market estimate is trending. Each is labeled with its measure and geography above, and each stays in that lane.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">Ignore:</span> any headline, post, or pitch that says prices are falling or rising without naming its measure, its geography, and its month. Without those three labels, the sentence cannot be checked, and an uncheckable sentence should not move a decision about a home.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published November 8, 2026. All primary figures were re-verified at build time on November 8, 2026: NAR September 2026 at nar.realtor, Case-Shiller and FHFA August 2026 at their primary releases, and the local snapshot at CDA Market Trends, where the October Coeur d’Alene Regional REALTORS snapshot had not yet been published, so September figures are used with their year to date window stated. National list figures are Realtor.com October 2026 figures, published November 4, 2026, labeled asking prices and national wherever they appear. The real terms point is published only with both of its numbers, nominal Case-Shiller up 2.1% and consumer inflation up 3.4%, and attributed to S&P release commentary. The NAR West region figure and the Case-Shiller Seattle metro figure are labeled with their actual geography every time and are never presented as North Idaho evidence. No local sold price decline is stated, because none exists in any source on file, and no local price direction is promised in either direction. No firsthand anecdotes about specific listings, price cuts, or seller decisions are included, because no notes from Shirin were on file for this article when it was built, and none have been invented. No guarantee is made about prices, rates, or days on market. This guide is general real estate information, not financial or legal advice. Brokerage, where named, is Berkshire Hathaway HomeServices Jacklin Real Estate.
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
                  If a headline has you wondering what your own home, or a home you want to buy, is actually doing, bring the headline and we will check it together against the closed sales in your city and price band. The local sold record is slower and quieter than the national story, and it is the one that prices a North Idaho home. No pressure, no pitch, just an honest conversation.
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
                Data sources: Realtor.com Economic Research (national list prices, October 2026), National Association of REALTORS (national sold prices, September 2026), S&P Dow Jones Indices and FHFA (national repeat sales indexes, August 2026), Coeur d’Alene Regional REALTORS September 2026 Market Snapshot (Kootenai County, data as of October 5, 2026), Zillow Research public data via CDA Market Trends (typical value, September 2026), Windermere Real Estate (third quarter regional report, October 26, 2026), and Freddie Mac Primary Mortgage Market Survey (national, as of November 5, 2026), as detailed in Sources and Scope above. Confirm the current local snapshot before you act on any figure here.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">At a Glance</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Four measures, labeled, never blended</p>
<div className="space-y-3">
{[
                      { range: 'List, national: $415,000, -2.2%', desc: 'Asking prices, October 2026, Realtor.com, national only' },
                      { range: 'Sold, national: $417,500, +1.3%', desc: 'Closed median, September 2026, NAR, 39th straight gain' },
                      { range: 'Index, national: +2.1%', desc: 'Case-Shiller August, vs 3.4% inflation, down in real terms' },
                      { range: 'Sold, Kootenai: $569,900, +4.3%', desc: 'Median year to date through September 2026, CRR' },
                      { range: 'Typical, Kootenai: $606,179', desc: 'ZHVI modeled value, September 2026, not a sale price' }
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
                    Check a Headline Against Local Sales
</a>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/articles/are-north-idaho-buyers-pulling-back-housing-market" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Are North Idaho Homebuyers Pulling Back?</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">National pending activity checked against local closings</p>
</a>
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
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/selling-a-home-north-idaho-what-your-home-is-worth" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Selling a Home in North Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What your home is worth and how pricing works here</p>
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
            Falling, Rising, or Just Mislabeled?
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Bring the headline that has you concerned, and we will name its measure, check its geography and date, and set it against the closed sales that actually price a North Idaho home.
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
