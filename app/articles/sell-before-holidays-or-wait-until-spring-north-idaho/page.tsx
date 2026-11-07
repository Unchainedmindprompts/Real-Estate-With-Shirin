import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/sell-before-holidays-or-wait-until-spring-north-idaho'
const sources = [
  { label: 'National Association of REALTORS, Economists Outlook, December Market Dynamics: Sales, Inventory, and Buyer Trends (checked November 7, 2026): historical national seasonal averages show December is usually the month with the fewest homes for sale, inventory typically drops about 9.4% from November to December, average existing home sales typically rise about 3.9% from November to December and then fall about 27.2% in January, December prices average about 0.5% higher than November which NAR attributes to fewer listings, first time buyers average about 31.8% of sales and all cash buyers about 21.7%, and NAR attributes December motivated buyers to year end tax incentives, January job relocations, and families wanting a child in a new school for the second term', url: 'https://www.nar.realtor/news/economists-outlook/decembers-market-dynamics-sales-inventory-and-buyer-trends' },
  { label: 'Realtor.com Research, The Best Time To List a Home, 2026 edition, the week of April 12 to 18 (checked November 7, 2026): built from 2018 to 2025 seasonal trends excluding 2020, with mortgage rates deliberately excluded from the score, the best national week historically shows prices 1.3% above the average week and 6.6% above the start of the year, about $5,300 above the average week and about $26,000 above the start of the year on the national median, 16.7% more views per listing, market pace about 17% faster or about 9 days, 11.9% fewer sellers than the average week, and 18.9% fewer homes with a price reduction; price reductions tend to peak in the fall, and by the end of June new sellers surge to nearly 1.4 times the start of year level', url: 'https://www.realtor.com/research/best-time-to-sell-2026/' },
  { label: 'Realtor.com Economic Research, October 2026 Housing Report, published November 4, 2026 (checked November 7, 2026): nationally, homes under contract down 10.5% year over year, active listings up 7.4%, new listings down 7.5% year over year, median listing price $415,000 down 2.2%, and 20.5% of listings had a price reduction in October; all figures are national, not North Idaho figures', url: 'https://www.realtor.com/research/october-2026-data/' },
  { label: 'Freddie Mac Primary Mortgage Market Survey, released November 5, 2026 (checked November 7, 2026): 30 year fixed averaged 7.18% as of November 5, 2026, down from 7.24% the week before, a third consecutive weekly decline, compared with 6.22% a year earlier; the survey covers conventional conforming purchase loans with 20% down and excellent credit, a benchmark, not a quote, and rates do not follow a seasonal pattern', url: 'https://www.freddiemac.com/pmms' },
  { label: 'Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026 (checked November 7, 2026; the October snapshot had not been published in the sources checked at build time): Kootenai County homes sold year to date through September 2026 were 1,975, up 4.0%, median sale price $569,900, up 4.3%, active listings 1,094 compared with 1,123 a year earlier', url: 'https://cdamarkettrends.com/' },
  { label: 'Real Estate With Shirin, North Idaho Housing Market Update, October 2026 (published October 25, 2026): five city Homes.com baseline, last 12 months, median sale prices Coeur d’Alene $575,000, Post Falls $525,000, Hayden $600,000, Rathdrum $520,000, Sandpoint $616,050, with average days on market Hayden 32, Post Falls 34, Rathdrum 36, Coeur d’Alene 46, Sandpoint 62; these are annual averages, not seasonal or winter figures', url: 'https://www.realestatewithshirin.com/articles/north-idaho-housing-market-update' },
  { label: 'Real Estate With Shirin, Selling a Home in North Idaho, October 2026: pricing from closed sales, and the gap between a city median list price and its median sale price is the difference between two medians of different sets of homes, not a sale to list ratio', url: 'https://www.realestatewithshirin.com/articles/selling-a-home-north-idaho-what-your-home-is-worth' },
]
export const metadata: Metadata = {
title: 'Sell Before the Holidays or Wait Until Spring? A North Idaho Seller’s Guide',
description:
    'December is usually the month with the fewest listings nationally, yet NAR historical averages show sales tick up about 3.9% from November to December on motivated buyers. Spring historically buys about 16.7% more views and about 9 days faster pace in Realtor.com best week research, not a guaranteed price gain. Locally, Kootenai County closed sales were up 4.0% year to date through September 2026. A decision framework, with no North Idaho seasonal premium invented and no guarantee about spring 2027.',
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: 'Sell Before the Holidays or Wait Until Spring? A North Idaho Seller’s Guide',
description: 'The holiday market is smaller, not dead, and its buyers are deadline driven. What waiting for spring historically buys nationally, what it costs, and how to decide for your own North Idaho home.',
url: articleUrl,
type: 'article',
publishedTime: '2026-11-07',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'Is it better to list my North Idaho home before the holidays or wait until spring?',
    a: 'It depends on your home and your deadline, and no North Idaho seasonal premium or discount has been measured in any source used here, so none is claimed. Nationally, December is usually the month with the fewest listings all year, with inventory typically dropping about 9.4% from November to December, while the buyers still looking are motivated by year end tax timing, January job relocations, and second term school starts (National Association of REALTORS, historical December pattern, checked November 7, 2026). Spring historically buys a better launch window nationally: in Realtor.com best week research, the best week showed 16.7% more views per listing, about 9 days faster pace, and prices 1.3% above the average week. List before the holidays if your home shows well inside and you face the year fewest competing listings. Wait if your home appeal is land, outdoor living, or summer views, and you can carry it comfortably. Neither branch is a guarantee.',
  },
  {
    q: 'Do homes actually sell in North Idaho in December?',
    a: 'Homes sell in December nationally, and the local data on file does not show a market collapsing into winter. On NAR historical national averages, existing home sales typically rise about 3.9% from November to December, driven by tax timing, January relocations, and school term moves, then fall about 27.2% in January, so December and January are not the same month. Locally, Kootenai County closed sales were up 4.0% year to date through September 2026, at a median of $569,900, up 4.3% (Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026). No local December specific figure is published here, because none was verified. What can be said is that a December buyer pool is smaller and, on the national pattern, deadline driven.',
  },
  {
    q: 'What do I actually gain by waiting for spring?',
    a: 'On national historical averages, a better launch window, not a different market. Realtor.com Research, 2026 edition, built from 2018 to 2025 seasonal trends excluding 2020, puts the best national week in mid April: historically 16.7% more views per listing, about 17% or about 9 days faster pace, prices 1.3% above the average week and 6.6% above the start of the year, 11.9% fewer competing sellers than the average week, and 18.9% fewer price reductions. Those are listing week patterns for different homes nationally, not a promised gain on your home. Waiting also brings the year heaviest seller competition, with new sellers surging to nearly 1.4 times the start of year level by the end of June, and no one promises spring brings lower rates: the Freddie Mac benchmark was 7.18% as of November 5, 2026, and rates do not follow a seasonal pattern.',
  },
  {
    q: 'Which homes lose the least by listing in winter?',
    a: 'Homes whose appeal is inside the house. An updated, warm, well lit interior loses the least when yards, gardens, and lake or outdoor presentation are dormant, because what a buyer falls for is still fully visible. Homes whose appeal is land, acreage, outdoor living, or a summer view lose the most presentation in a North Idaho winter and gain the most from waiting until that appeal can be seen. This is a framework for your own home, not a statistic: no seasonal price or days on market split by property type was verified for North Idaho, so none is published here. A home that will sit vacant either way also carries winter holding costs, including heat, snow care, and risk, and those belong in the decision even though no per month dollar total is stated here.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: 'Sell Before the Holidays or Wait Until Spring? A North Idaho Seller’s Guide',
  description: 'December is usually the fewest listings month nationally while NAR historical sales tick up about 3.9% from November to December. Spring best week research shows about 16.7% more views and about 9 days faster pace nationally. Locally Kootenai County closed sales rose 4.0% year to date through September 2026. No North Idaho seasonal premium is claimed and no spring 2027 outcome is guaranteed.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-11-07T00:00:00-08:00',
  dateModified: '2026-11-07T00:00:00-08:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'sell before holidays or wait until spring North Idaho',
    'December home sales fewest listings NAR seasonality',
    'Realtor.com best time to sell mid April views pace',
    'North Idaho winter listing vs spring listing',
    'Kootenai County closed sales September 2026 up 4 percent',
  ],
  articleSection: 'Seller Resources',
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
    { '@type': 'ListItem', position: 3, name: 'Sell Before the Holidays or Wait Until Spring?', item: articleUrl },
  ],
}
const cityRows = [
  { city: 'Hayden', sale: '$600,000', dom: '32 days' },
  { city: 'Post Falls', sale: '$525,000', dom: '34 days' },
  { city: 'Rathdrum', sale: '$520,000', dom: '36 days' },
  { city: "Coeur d'Alene", sale: '$575,000', dom: '46 days' },
  { city: 'Sandpoint', sale: '$616,050', dom: '62 days' },
]
export default function SellHolidaysOrSpringPage() {
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
<span className="text-[#5C5650]">Sell Before the Holidays or Wait?</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Seller Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">9 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Sell Before the Holidays or Wait Until Spring? A North Idaho Seller’s Guide
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            Neither answer wins for every seller, and this guide will not pretend otherwise. The holiday market is smaller, not dead. December is usually the month with the fewest homes for sale all year nationally, with inventory typically dropping about 9.4% from November to December, yet average existing home sales typically rise about 3.9% from November to December on buyers driven by year end tax timing, January job relocations, and second term school starts (National Association of REALTORS, historical December pattern, checked November 7, 2026). Spring historically buys a better launch window, not a jackpot: the best national week in Realtor.com research showed 16.7% more views per listing and about 9 days faster pace. Locally, nothing on file says North Idaho is collapsing into winter: Kootenai County closed sales were up 4.0% year to date through September 2026, at a median of $569,900, up 4.3% (Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026). Work through the decision for your own home below.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · November 7, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">-9.4%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Typical Inventory Drop, Nov to Dec</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Fewest listings month · NAR, national historical</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">+3.9%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Typical Sales Rise, Nov to Dec</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Motivated buyers · NAR, national historical</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">+16.7%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">More Views, Best Spring Week</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Vs average week · Realtor.com, national</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$569,900</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Kootenai Median Sale Price, YTD</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Up 4.3% · Sales up 4.0% · CRR September</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Start with what this guide is not. It is not a pitch to list immediately, and it makes no guarantee about the spring 2027 market. No source on file measures a North Idaho seasonal premium or discount, so no such figure appears here. The national seasonal figures below stay national and labeled every time they are used. The local figures are the latest on file, with their windows stated. If your decision needs a number that is not here, that is because it has not been verified, not because it was left out by accident.
</p>
<p className="mb-10">This guide is built from published data and this site published figures only. It adds no firsthand showing, offer, or seller anecdotes, because no notes from Shirin were on file for this article when it was built, and none have been invented. For the pricing side, see{' '}<a href="/articles/selling-a-home-north-idaho-what-your-home-is-worth" className="text-[#C4842A] hover:underline">Selling a Home in North Idaho: What Your Home Is Worth</a>,{' '}<a href="/articles/north-idaho-housing-market-update" className="text-[#C4842A] hover:underline">the North Idaho housing market update</a>, and{' '}<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="text-[#C4842A] hover:underline">the flagship city comparison</a>.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                December Is Not January
</h2>
<p className="mb-6">
                The most useful correction in the national data is that the holidays are not one dead stretch. On NAR historical averages, checked November 7, 2026, December sales average about 412,286, up about 3.9% from November at about 398,571, while January falls to about 298,286, down about 27.2% from December. December is also usually the month with the fewest homes for sale, about 2,213,810 compared with about 2,431,429 in November, a typical drop of about 9.4%, and January inches up only about 0.6%. NAR attributes the December buyer pool to year end tax incentives, January job relocations, and families wanting a child in a new school for the second term. First time buyers average about 31.8% of existing home sales and their share usually rises slightly in December. All cash buyers average about 21.7% and their share decreases slightly.
</p>
<p className="mb-10">
                Two cautions travel with those figures. Homes take longer to sell in December than in November on the same NAR pattern, in part because the homes that sell in December are often ones listed for a while as new listings decline sharply. And December prices averaging about 0.5% higher than November is, in NAR own attribution, an effect of fewer listings: an average across different homes sold, not evidence that an individual seller gets a bonus in December. The practical reading is narrower: listing before the holidays puts a home in front of December motivated pool and the year thinnest competition. Listing in mid January enters the sharpest sales drop in the pattern. Those are different decisions.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Waiting for Spring Historically Buys
</h2>
<p className="mb-6">
                The spring advantage is real, modest, and measured mostly in attention and pace. Realtor.com Research, 2026 edition, checked November 7, 2026, built its best week from 2018 to 2025 seasonal trends excluding 2020, and deliberately excluded mortgage rates from the score because rates do not follow a seasonal pattern. Its best national week, April 12 to 18 in the 2026 study, historically showed prices 1.3% above the average week and 6.6% above the start of the year, about $5,300 above the average week and about $26,000 above the start of the year on the national median listing price, 16.7% more views per listing, market pace about 17% faster or about 9 days, 11.9% fewer sellers than the average week, and 18.9% fewer homes with a price reduction.
</p>
<p className="mb-10">
                Read that honestly. A listing price pattern across different homes nationally is not appreciation of your one home, and this guide does not convert those percentages into a dollar gain on a North Idaho address. For spring 2027, no best week has been published, so this guide says mid April when it means the historical window, and promises nothing about 2027 prices, rates, or days on market. What waiting also brings is competition: price reductions tend to peak in the fall as sellers left after summer compete for waning attention, and by the end of June new sellers have surged to nearly 1.4 times the start of year level even as prices sit near their seasonal peak. Realtor.com own conclusion is usable in full: a well priced, move in ready home listed outside the best week is still likely to find success. Spring is a better launch window. It is not a different market.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Local Picture Going Into Winter
</h2>
<p className="mb-6">
                Locally, the latest verified source on file is still the September snapshot. Coeur d’Alene Regional REALTORS, September 2026 Market Snapshot, data as of October 5, 2026 and checked again November 7, 2026, shows Kootenai County with 1,975 homes sold year to date through September 2026, up 4.0%, a median sale price of $569,900, up 4.3%, and active listings at 1,094 compared with 1,123 a year earlier. The October local snapshot had not been published in the sources checked at build time on November 7, 2026, so no local October figure is claimed here, and September data is not called November activity.
</p>
<p className="mb-6">
                The current national moment points the same direction on competition. Realtor.com October 2026 Housing Report, published November 4, 2026, puts national new listings down 7.5% year over year, the steepest drop in that report, while homes under contract fell 10.5% and 20.5% of listings took a price reduction in October. Sellers nationally are already holding back, which is the mechanism that makes winter competition thin. The price cut share is also the warning: listing into this moment with a stale or ambitious price is how a home joins the reduced group. The rate side offers no seasonal promise either. Freddie Mac Primary Mortgage Market Survey, released November 5, 2026, averaged 7.18% for a 30 year fixed loan, down from 7.24% the week before, a third consecutive weekly decline, compared with 6.22% a year earlier. That is a national benchmark for conventional conforming purchase loans with 20% down and excellent credit, not a quote, and a seller who waits is also choosing whatever rate environment their buyer faces later, which no seasonal pattern predicts.
</p>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-3 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">City</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Median Sale, Last 12 Months</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Average Days on Market, Annual</span>
</div>
{cityRows.map((row) => (
<div key={row.city} className="grid grid-cols-3 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.city}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.sale}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.dom}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Homes.com, last 12 months, baseline published October 25, 2026 and re-verified October 28, 2026. Average days on market here is an annual average for each city. It frames how long a listing normally takes in that city. It is not a winter figure and must not be read as one.</p>
</div>
<p className="mb-10">
                Use the table for pacing, not for seasonality. If you list before the holidays in Hayden or Post Falls, where the annual average is close to a month, a well priced home is working against a normally fast baseline. In Sandpoint, at 62 average days, patience is already part of that market in any season. Neither baseline tells you what winter adds or subtracts in that city, because no verified seasonal split by city exists on file.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Which Homes Show Well in Winter, and Which Gain Most From Waiting
</h2>
<p className="mb-6">
                This section is reasoning you can apply to your own home. No numbers are attached to any property type, because no verified local showing or seasonal figure by property type exists on file. Homes whose appeal is interior lose the least in winter: an updated kitchen and living space, warmth, and good light inside are all still fully visible when the yard is dormant. If buyers will fall for the inside of the house, winter hides little of what sells it.
</p>
<p className="mb-10">
                Homes whose appeal lives outside gain the most from waiting: land and acreage, outdoor living space, gardens, and a view that reads best in summer all present at their weakest in a North Idaho winter, with snow cover and short days working against the showing. That is common knowledge framing any local seller understands, stated qualitatively here with no snowfall or daylight statistic attached. Between those poles, weigh the carrying side. A home that will be vacant either way carries winter holding costs while it waits, including heat, snow care, maintenance, and the risk that comes with an empty house in cold weather. Waiting is a real option. It is not a free one, and this guide names the categories without inventing a per month dollar total.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  The Decision, Branch by Branch
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">List before the holidays if:</span> your home appeal is interior and already ready, you have a deadline of your own that matches December deadline driven buyers, or you would rather face the year fewest competing listings than spring seller surge. Price it from closed sales, not from hope, because October national price cuts at 20.5% of listings show what an ambitious start costs in this moment.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Wait until spring if:</span> your home appeal is land, outdoor living, or a summer view, you need the deeper spring buyer pool and its historically higher views and faster pace, and you can carry the home comfortably through winter without the holding costs becoming their own pressure to accept a weak offer later.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">Either way:</span> no figure in this guide guarantees a price, a rate, a timeline, or the spring 2027 market. The choice is timing plus preparation plus pricing, decided on your home, your deadline, and your carrying costs.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published November 7, 2026. National seasonal figures are NAR historical December averages and Realtor.com best week research built from 2018 to 2025 trends excluding 2020, both checked November 7, 2026 and labeled national and historical wherever they appear. The April 12 to 18 week is the 2026 study week; for spring 2027 this guide says mid April only, because no 2027 best week has been published. Current national figures are Realtor.com October 2026 figures, published November 4, 2026, and the Freddie Mac benchmark as of November 5, 2026. Local figures are Coeur d’Alene Regional REALTORS figures from the September 2026 Market Snapshot, data as of October 5, 2026, plus the site October 25, 2026 five city Homes.com baseline; the October local snapshot had not been published in the sources checked at build time, and no local October, winter, or seasonal figure is claimed. No North Idaho seasonal premium or discount is published, no spring gain is converted into dollars on any home, and waiting costs are named as categories with no invented total. No firsthand anecdotes about showings, offers, or seller decisions are included, because no notes from Shirin were on file for this article when it was built, and none have been invented. No guarantee is made about prices, rates, days on market, or the spring 2027 market. This guide is general real estate information, not financial or legal advice. Brokerage, where named, is Berkshire Hathaway HomeServices Jacklin Real Estate.
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
                  If you are weighing a holiday listing against a spring launch, bring your home, your deadline, and your carrying costs, and we will work through both branches honestly. Some homes should go now. Some should wait. The right answer is the one that fits your house and your life, not a season on a calendar. No pressure, no pitch, just an honest conversation.
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
                Data sources: National Association of REALTORS (historical December seasonality, national), Realtor.com Research (best week seasonal research and October 2026 national report), Freddie Mac Primary Mortgage Market Survey (national, as of November 5, 2026), Coeur d’Alene Regional REALTORS September 2026 Market Snapshot (Kootenai County, data as of October 5, 2026), and this site published market update and selling guide, as detailed in Sources and Scope above. Confirm the current local snapshot before you act on any figure here.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">At a Glance</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Seller timing guide: what each season actually offers</p>
<div className="space-y-3">
{[
                      { range: 'December: fewest listings', desc: 'Inventory typically -9.4% Nov to Dec, NAR historical, national' },
                      { range: 'December buyers: motivated', desc: 'Tax timing, January relocations, second term school starts' },
                      { range: 'Spring: +16.7% views', desc: 'Best week vs average week, Realtor.com, national historical' },
                      { range: 'Spring: about 9 days faster', desc: 'And the year heaviest seller competition arriving with it' },
                      { range: 'No local seasonal figure', desc: 'No North Idaho winter or spring premium has been measured on file' }
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
                    Talk Through Your Timing
</a>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/articles/selling-a-home-north-idaho-what-your-home-is-worth" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Selling a Home in North Idaho: What Your Home Is Worth</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Pricing from closed sales, city by city</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/sellers" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Selling a Home in Northern Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The seller hub for North Idaho homeowners</p>
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
            Holiday Listing, or Spring Launch?
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Bring your home and your deadline, and we will weigh December motivated buyers and thin competition against spring views, pace, and seller surge, on your numbers.
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
