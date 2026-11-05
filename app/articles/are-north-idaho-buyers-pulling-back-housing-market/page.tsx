import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/are-north-idaho-buyers-pulling-back-housing-market'
const sources = [
  { label: 'Realtor.com Economic Research, October 2026 Housing Report, published November 4, 2026 (checked November 5, 2026): nationally, homes under contract down 10.5% year over year, the steepest annual decline since October 2023, contract signings down 17%, active listings up 7.4% year over year to 1,183,500, new listings down 7.5% year over year to 357,000, median listing price $415,000 down 2.2% year over year, 20.5% of listings with a price reduction, delistings 4.4% of active listings compared with 4.6% a year earlier; all figures are national, not North Idaho figures', url: 'https://www.realtor.com/research/october-2026-data/' },
  { label: 'Freddie Mac Primary Mortgage Market Survey (checked November 5, 2026): 30-year fixed rate averaged 7.24% for the week ending October 29, 2026, down from 7.32% the prior week and 7.40% two weeks earlier, up from 6.17% a year earlier; 15-year fixed averaged 6.60%; the survey is a national average for conventional conforming purchase loans with 20% down and excellent credit, not a quote for any individual buyer', url: 'https://www.freddiemac.com/pmms' },
  { label: 'Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026, as compiled at CDA Market Trends (checked November 5, 2026): Kootenai County single-family, site-built homes on less than 2 acres, median sale price year to date $569,900, up 4.3% from the same period in 2025, homes sold year to date 1,975, up 4.0%, active residential listings on October 5 were 1,094 compared with 1,123 a year earlier, days from listing to close in September 2026 were 80, down 12.1% from September 2025', url: 'https://cdamarkettrends.com/' },
  { label: 'Coeur d’Alene Press via Hagadone News Network, October 13, 2026 (checked November 5, 2026): reporting the same Coeur d’Alene Regional REALTORS September figures, Kootenai County median around $569,000, up 4.3%, 1,094 current listings, 1,975 homes sold this year, and Bonner County median $543,000 in the same report', url: 'https://hagadonenewsnetwork.com/news/2026/oct/13/area-real-estate-market-is-steady/' },
  { label: 'Real Estate With Shirin, North Idaho Housing Market Update, October 2026 (published October 25, 2026): the site baseline for the five cities from Homes.com, last 12 months, checked October 25, 2026, median sale prices Sandpoint $616,050 down 9%, Hayden $600,000 up 4%, Coeur d’Alene $575,000 down 2%, Post Falls $525,000 up 4%, Rathdrum $520,000 up 11%, with average days on market from 32 days in Hayden to 62 days in Sandpoint', url: 'https://www.realestatewithshirin.com/articles/north-idaho-housing-market-update' },
  { label: 'Real Estate With Shirin, North Idaho city comparison, flagship five-city comparison (Zillow ZHVI typical home values: Coeur d’Alene $604,956, Post Falls $530,937, Hayden $645,199, Rathdrum $578,248, Sandpoint $634,657; a different metric from median sale price, cited only for consistency with the site baseline)', url: 'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint' },
  { label: 'Federal Reserve staff calculations from the National Mortgage Database for the second quarter of 2026, as reported from Governor Michael Barr remarks on September 23, 2026 (checked November 5, 2026): about half of outstanding mortgages carry a rate of 4% or lower and nearly 80% carry a rate below 6%, against a new purchase rate above 7%, the mortgage rate lock-in context for why owners stay put', url: 'https://themoneyoverview.com/39-about-half-of-u-s-mortgages-still-carry-rates-of-4-or-lower-keeping-owners-lo/' },
]
export const metadata: Metadata = {
title: 'Are North Idaho Homebuyers Pulling Back? What the Latest Housing Data Means Locally',
description:
    'Nationally, homes under contract fell 10.5% year over year in October 2026 (Realtor.com, published November 4, 2026). In Kootenai County, the latest local snapshot tells a different story through September: 1,975 homes sold year to date, up 4.0%, at a $569,900 median, up 4.3% (Coeur d’Alene Regional REALTORS). What the national pullback does and does not say about North Idaho in November.',
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: 'Are North Idaho Homebuyers Pulling Back? What the Latest Housing Data Means Locally',
description: 'The national October pullback, checked against the local record: national pending sales down 10.5%, local closed sales up 4.0% year to date through September, local listings down slightly, and a 7.24% mortgage rate. No local October pending figure has been published yet, and this guide does not invent one.',
url: articleUrl,
type: 'article',
publishedTime: '2026-11-05',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'Are North Idaho homebuyers pulling back?',
    a: 'Not in the latest local closed data. Nationally, homes under contract fell 10.5% year over year in October 2026 (Realtor.com October 2026 Housing Report, published November 4, 2026). In Kootenai County, homes sold year to date through September 2026 were 1,975, up 4.0% from the same period in 2025, at a median sale price of $569,900, up 4.3% (Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026). Those are different windows: the national figure is an October pending indicator, the local figure is closed sales through September. No local October pending figure has been published in the snapshot this guide uses, so this guide does not claim October locally moved the same way, or the opposite way.',
  },
  {
    q: 'What did the Realtor.com October 2026 report actually show?',
    a: 'Nationally, for October 2026: homes under contract down 10.5% year over year, contract signings down 17%, active listings up 7.4% year over year to 1,183,500, new listings down 7.5% year over year to 357,000, the national median listing price at $415,000, down 2.2% year over year, and 20.5% of listings with a price reduction (Realtor.com Economic Research, published November 4, 2026, checked November 5, 2026). Every one of those figures is a national figure. None of them is a North Idaho figure, and this guide never presents them as one.',
  },
  {
    q: 'Why are sellers staying put if buyers are pulling back nationally?',
    a: 'Two national facts sit together. New listings fell 7.5% year over year in October 2026, so fewer owners entered the market, while delistings held at 4.4% of active listings, compared with 4.6% a year earlier, so sellers already listed did not broadly withdraw (Realtor.com, October 2026). Behind that pattern is the rate gap: about half of outstanding mortgages carry a rate of 4% or lower and nearly 80% carry a rate below 6% (Federal Reserve staff calculations for the second quarter of 2026, reported September 23, 2026), against a new purchase average of 7.24% for the week ending October 29, 2026 (Freddie Mac). An owner who would trade a rate below 4% for a rate above 7% needs a strong reason to move.',
  },
  {
    q: 'Does rising national inventory mean more choice for North Idaho buyers?',
    a: 'Not on the latest local count. National active listings rose 7.4% year over year in October 2026 (Realtor.com). In Kootenai County, active residential listings on October 5, 2026 were 1,094, compared with 1,123 a year earlier, a small decline, not a rise (Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot). National inventory growth does not automatically create local choice. In North Idaho, choice still depends on the city and price band, and on the five-city baseline this site published October 25, 2026, where supply ranged from 2.3 months in Post Falls to 9.0 months in Sandpoint (Homes.com, last 12 months).',
  },
  {
    q: 'What mortgage rate should a North Idaho buyer plan around in November 2026?',
    a: 'Plan around the rate you can actually lock, not a forecast. The Freddie Mac Primary Mortgage Market Survey averaged 7.24% for a 30-year fixed loan for the week ending October 29, 2026, down from 7.32% the prior week and up from 6.17% a year earlier (checked November 5, 2026). That survey is a national average for conventional conforming purchase loans with 20% down and excellent credit. It is a benchmark, not a quote. Your lender prices your credit, your down payment, and your loan type, and this guide makes no forecast about where rates go next.',
  },
  {
    q: 'What should a North Idaho buyer or seller do with this split picture?',
    a: 'Use each figure for what it measures. If you are buying, the national pending decline is a reason to ask about time on market and price reductions on the specific homes you are watching, not a reason to assume a discount in Kootenai County, where closed prices rose 4.3% year to date through September 2026 and listings were slightly down. If you are selling, price against closed sales in your city, not against national headlines or against asking prices. In both cases, the next local test is the October snapshot from Coeur d’Alene Regional REALTORS when it is published. Until then, the honest local answer is steady through September, with October locally unmeasured in published data.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: 'Are North Idaho Homebuyers Pulling Back? What the Latest Housing Data Means Locally',
  description: 'Nationally, homes under contract fell 10.5% year over year in October 2026. In Kootenai County, closed sales through September 2026 rose 4.0% year to date to 1,975 at a $569,900 median, up 4.3%, with active listings slightly down. The windows differ, no local October pending figure has been published, and this guide keeps national and local figures labeled separately throughout.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-11-05T00:00:00-08:00',
  dateModified: '2026-11-05T00:00:00-08:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'Are North Idaho homebuyers pulling back',
    'North Idaho housing market November 2026',
    'Realtor.com October 2026 pending sales down 10.5 percent',
    'Kootenai County homes sold 1975 median 569900 September 2026',
    'Coeur d’Alene Regional REALTORS September 2026 snapshot',
    'Freddie Mac 7.24 percent October 29 2026',
    'mortgage rate lock-in North Idaho sellers staying put',
  ],
  articleSection: 'Market Updates',
  wordCount: 1900,
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
    { '@type': 'ListItem', position: 3, name: 'Are North Idaho Homebuyers Pulling Back?', item: articleUrl },
  ],
}
const contrastRows = [
  { metric: 'Homes under contract / homes sold', national: 'Under contract down 10.5% YoY in October 2026 (Realtor.com, national pending stock)', local: 'Closed sales 1,975 year to date through September 2026, up 4.0% YoY (Coeur d’Alene Regional REALTORS, Kootenai County)' },
  { metric: 'Active listings', national: 'Up 7.4% YoY to 1,183,500 in October 2026 (Realtor.com)', local: '1,094 on October 5, 2026, compared with 1,123 a year earlier, slightly down (Coeur d’Alene Regional REALTORS)' },
  { metric: 'New listings', national: 'Down 7.5% YoY to 357,000 in October 2026 (Realtor.com)', local: 'No local October new-listing figure published in the September snapshot used here; do not carry the national decline over as a local fact' },
  { metric: 'Price direction', national: 'Median listing price $415,000, down 2.2% YoY in October 2026, asking prices (Realtor.com)', local: 'Median sale price $569,900 year to date, up 4.3% YoY, closed prices (Coeur d’Alene Regional REALTORS); listing and sale medians are different measures' },
  { metric: 'Price reductions', national: '20.5% of listings had a price reduction in October 2026 (Realtor.com, national)', local: 'No comparable local share published in the September snapshot; read reductions home by home, not as a county rate' },
  { metric: 'Mortgage rate context', national: '30-year fixed averaged 7.24% for the week ending October 29, 2026, down from 7.32%, up from 6.17% a year earlier (Freddie Mac PMMS, national average)', local: 'The same national benchmark applies to a North Idaho loan quote only as a benchmark; the actual rate is set by the lender for the individual buyer' },
]
export default function BuyersPullingBackPage() {
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
<span className="text-[#5C5650]">Are North Idaho Buyers Pulling Back?</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Market Updates</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">9 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Are North Idaho Homebuyers Pulling Back? What the Latest Housing Data Means Locally
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            Nationally, yes, in October. Locally, not in the latest published closed data. Homes under contract across the United States fell 10.5% year over year in October 2026 (Realtor.com October 2026 Housing Report, published November 4, 2026). In Kootenai County, homes sold year to date through September 2026 were 1,975, up 4.0% from the same period in 2025, at a median sale price of $569,900, up 4.3% (Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026). The two figures measure different months and different stages of a sale, and this guide keeps them separate. No local October pending figure has been published in the snapshot used here, so the honest answer is steady locally through September, with October locally still to be measured.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · November 5, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">-10.5%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">National Homes Under Contract, YoY</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">October 2026 · Realtor.com, national only</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">1,975</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Kootenai Homes Sold, Year to Date</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Through September 2026 · Up 4.0% · CRR</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$569,900</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Kootenai Median Sale Price, YTD</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Up 4.3% · CRR September snapshot</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">7.24%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">30-Year Fixed Average</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Week ending October 29, 2026 · Freddie Mac</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Short answer first, with the dates attached. The national pullback is real and it is October data: pending activity fell sharply, fewer new listings arrived, and asking prices softened for a twelfth straight month (Realtor.com, published November 4, 2026). The local record in this guide is September data, and it points the other way on the measures it covers: more closed sales than a year earlier, a higher median, and slightly fewer active listings (Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026). A pending sale in October and a closed sale counted through September are not the same event, and a national average is not a Kootenai County count. Read the two side by side below, each labeled by source, geography, and window.
</p>
<p className="mb-10">This guide is built from published data and this site’s own published figures only. It adds no firsthand showing or offer anecdotes, because a pattern worth publishing has to be checkable against a source a reader can open. For the city by city baseline behind this piece, start with{' '}<a href="/articles/north-idaho-housing-market-update" className="text-[#C4842A] hover:underline">the October 2026 North Idaho housing market update</a>{' '}and{' '}<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="text-[#C4842A] hover:underline">the flagship North Idaho city comparison</a>.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Happened Nationally in October 2026
</h2>
<p className="mb-6">
                Realtor.com’s October 2026 Housing Report, published November 4, 2026 and checked November 5, 2026, describes a national pause. The stock of homes under contract fell 10.5% year over year, the steepest annual decline since October 2023, and contract signings fell 17%. Active listings rose 7.4% year over year to 1,183,500, while new listings fell 7.5% year over year to 357,000, the steepest new listing decline of 2026 in that report. The national median listing price was $415,000, down 2.2% year over year. A preliminary 20.5% of listings had a price reduction, and delistings held at 4.4% of active listings, compared with 4.6% a year earlier.
</p>
<p className="mb-10">
                Read that combination carefully. More total listings with fewer new listings means homes are staying listed longer, not that a wave of new sellers arrived. A steady delisting rate with fewer contracts means sellers already in the market are largely staying in it. And a falling median listing price is a fact about asking prices nationally. It says nothing by itself about what a home in Post Falls or Hayden closed for.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What the Latest Local Snapshot Shows Through September
</h2>
<p className="mb-6">
                The authorized local source for closed sales here is the Coeur d’Alene Regional REALTORS September 2026 Market Snapshot, data as of October 5, 2026, checked November 5, 2026. For Kootenai County single-family, site-built homes on less than 2 acres, it reports a median sale price year to date of $569,900, up 4.3% from the same period in 2025, and 1,975 homes sold year to date, up 4.0%. Active residential listings on October 5, 2026 were 1,094, compared with 1,123 a year earlier. Days from listing to close in September 2026 were 80, down 12.1% from September 2025. The Coeur d’Alene Press report of the same snapshot, published October 13, 2026, put the Bonner County median at $543,000 in the same release.
</p>
<p className="mb-10">
                None of that describes a local market where buyers have broadly stepped back through September. Closed volume rose, the closed median rose, and the listing count eased down rather than building up. It also does not prove October locally was strong. The October local snapshot has not been published in the sources checked for this guide, and a monthly pending figure for Kootenai County is not stated here for exactly that reason. When that snapshot appears, it is the correct test of whether the national October pattern arrived here.
</p>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-3 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Measure</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">National, October 2026</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Local, Latest Published</span>
</div>
{contrastRows.map((row) => (
<div key={row.metric} className="grid grid-cols-3 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.metric}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.national}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.local}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Table built November 5, 2026. National column: Realtor.com October 2026 Housing Report and Freddie Mac PMMS, both national. Local column: Coeur d’Alene Regional REALTORS September 2026 Market Snapshot, data as of October 5, 2026, Kootenai County scope as stated in the text. Unlike measures are labeled as unlike and are never averaged or presented as the same measure.</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Rate Behind Both Stories
</h2>
<p className="mb-6">
                Freddie Mac’s Primary Mortgage Market Survey, checked November 5, 2026, averaged 7.24% for a 30-year fixed loan for the week ending October 29, 2026, down from 7.32% the week before and from 7.40% two weeks earlier, and up from 6.17% a year earlier. Realtor.com’s October report put the October average rate at 7.33% and tied the pending decline in part to lost purchasing power at that level. A move from 7.40% to 7.24% over two weeks is direction, not relief at the scale that changes most budgets. The survey average also assumes a conventional conforming purchase loan with 20% down and excellent credit, so it is a benchmark for planning, not a promise about any individual quote.
</p>
<p className="mb-10">
                The other half of the rate story is the loans already in place. Federal Reserve staff calculations for the second quarter of 2026, reported by Governor Michael Barr on September 23, 2026 and checked November 5, 2026, put about half of outstanding mortgages at a rate of 4% or lower and nearly 80% below 6%. That gap between an existing rate below 4% and a new rate above 7% is the lock-in effect the November briefs describe: it gives an owner a financial reason to stay, which holds down new listings at the same time that it holds down the pool of move-up buyers. It is a national distribution, stated here as national context, not as a count of North Idaho loans.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                City by City, the Baseline Has Not Changed in This Guide
</h2>
<p className="mb-6">
                This guide does not publish a new city median, because no new single-source city pull was taken for it. The site baseline remains the October 25, 2026 market update, from Homes.com over the last 12 months: Sandpoint at a $616,050 median sale price, down 9%, with 62 average days on market and 9.0 months of supply; Hayden at $600,000, up 4%, with 32 average days; Coeur d’Alene at $575,000, down 2%, with 46 average days; Post Falls at $525,000, up 4%, with 34 average days and 2.3 months of supply; and Rathdrum at $520,000, up 11%, with 36 average days. Those figures are the context for where negotiating room has historically sat in this data, with Sandpoint the slowest and most supplied of the five and Post Falls the tightest. They are not October pending figures for any city.
</p>
<p className="mb-10">
                That split matters for how a buyer reads the national headline. A national pending decline does not land evenly. In a city with 2.3 months of supply, a well priced home near the median has a different recent history than a premium listing in a city with 9.0 months of supply. Ask about the specific home: its days on market against its city average above, whether its price has moved since listing, and what closed nearby at a comparable size. Those are checkable facts about one property, and they carry more weight than a national percentage applied to a local address.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  What This Means in Practice, November 2026
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Buyers:</span> do not wait for a North Idaho version of the national decline to appear in closed prices before you act, and do not assume it already has. Through September, local closed prices and volume were both up. Your leverage, where it exists, is specific: longer time on market for that home, a price reduction on that listing, and supply in that city and price band.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Sellers:</span> the national data shows buyers pausing and sellers staying, not sellers cutting broadly. Locally, pricing against the $569,900 county closed median and your city’s closed median, rather than against asking prices, is still the discipline the October update set out. No figure in this guide guarantees a price, a timeline, or a negotiation outcome.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">Both:</span> watch for the Coeur d’Alene Regional REALTORS October snapshot. It is the first published local data that can confirm or contradict an October pullback here, and this guide will be read against it, not ahead of it.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published November 5, 2026. National figures are Realtor.com October 2026 figures, published November 4, 2026, and Freddie Mac PMMS figures for the week ending October 29, 2026, both checked November 5, 2026 and labeled national wherever they appear. Local figures are Coeur d’Alene Regional REALTORS figures from the September 2026 Market Snapshot, data as of October 5, 2026, for Kootenai County single-family, site-built homes on less than 2 acres unless a sentence states a wider listing count, plus the site’s own October 25, 2026 five-city Homes.com baseline, labeled by its own source and window. No firsthand anecdotes about showings, offers, or negotiations are included, because no notes from Shirin were on file for this article when it was built, and none have been invented. No guarantee is made about prices, rates, days on market, or negotiation outcomes. This guide is general real estate information, not financial or legal advice. Brokerage, where named, is Berkshire Hathaway HomeServices Jacklin Real Estate.
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
                  A national headline is a starting question, not a local answer. If you are weighing a purchase or a listing in Coeur d’Alene, Post Falls, Hayden, Rathdrum, or Sandpoint this month, let us look at the closed sales and the current listings in your price band together, and separate what is actually happening here from what is happening on average across the country. No pressure, no pitch, just an honest conversation.
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
                Data sources: Realtor.com Economic Research (national, October 2026), Freddie Mac Primary Mortgage Market Survey (national, week ending October 29, 2026), Coeur d’Alene Regional REALTORS September 2026 Market Snapshot (Kootenai County, data as of October 5, 2026), and this site’s published market update and city comparison, as detailed in Sources and Scope above. Market conditions change, so confirm the current local snapshot before you act on any figure here.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">At a Glance</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">National October vs local September, labeled separately</p>
<div className="space-y-3">
{[
                      { range: 'National pending -10.5%', desc: 'Homes under contract, YoY, October 2026, Realtor.com, national only' },
                      { range: 'Local sales 1,975, up 4.0%', desc: 'Kootenai County, year to date through September 2026, CRR' },
                      { range: 'Local median $569,900, up 4.3%', desc: 'Kootenai County single-family, YTD, CRR September snapshot' },
                      { range: 'Local listings 1,094', desc: 'Active on October 5, 2026, vs 1,123 a year earlier, CRR' },
                      { range: 'Rate 7.24%', desc: '30-year fixed, week ending October 29, 2026, Freddie Mac, national average' }
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
                    Talk Through the Local Numbers
</a>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/articles/north-idaho-housing-market-update" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho Housing Market Update</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The October 2026 five-city baseline this guide builds on</p>
</a>
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
<a href="/areas/kootenai-county" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Kootenai County Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">County overview and market context</p>
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
            Wondering What the Headlines Mean on Your Street?
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Bring the national story, and we will check it against the closed sales and current listings in your city and price band. That local check is the whole point.
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
