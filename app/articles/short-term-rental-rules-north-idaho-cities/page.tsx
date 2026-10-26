import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/short-term-rental-rules-north-idaho-cities'
const sources = [
  { label: 'Idaho Legislature: House Bill 583 (2026), amending Idaho Code 67-6539 and 63-1804 (67-6539(5): no county or city shall require a license, fee, permit, certification, or registration to operate a short-term rental; 67-6539(3): the five safety items a city may still require; Section 3: effective July 1, 2026; checked October 26, 2026)', url: 'https://legislature.idaho.gov/wp-content/uploads/sessioninfo/2026/legislation/H0583.pdf' },
  { label: 'Idaho State Tax Commission: Travel and Convention Tax (current rate 2%; to offer short-term lodging you need a travel and convention tax permit, a regular seller\'s permit, and an auditorium district permit if you operate in a district; marketplace-only hosts are covered by the marketplace, direct bookings are not; checked October 26, 2026)', url: 'https://tax.idaho.gov/taxes/taxes-on-sales/travel-and-convention-tax/' },
  { label: 'Idaho State Tax Commission, December 9, 2025: Idaho Short-Term Rental Marketplaces Reminded to Charge Taxes on Booking Fees (sales tax, travel and convention tax, and auditorium district tax if applicable; marketplaces should register, collect, and send in taxes, otherwise lodging providers must get permits and send in the taxes themselves; checked October 26, 2026)', url: 'https://tax.idaho.gov/pressrelease/idaho-short-term-rental-marketplaces-reminded-to-charge-taxes-on-booking-fees/' },
  { label: 'City of Coeur d\'Alene code library, 17.08.1030 Permit Required, Ordinance 3594 (2017) (pre-July 2026 permit text still displayed in the code library: owner applicant, permit expiring March 31, renewal by March 1, 14 days in no more than two stays without a permit; labeled history in this article, not current law where it conflicts with 67-6539; checked October 26, 2026)', url: 'https://codelibrary.amlegal.com/codes/coeurdaleneid/latest/coeurdalene_id/0-0-0-12737' },
  { label: 'City of Hayden Lake code library, 9-9-3 Permit Required (City of Hayden Lake, a separate city from Hayden; pre-July 2026 permit text still displayed; labeled history in this article; checked October 26, 2026)', url: 'https://codelibrary.amlegal.com/codes/haydenlakeid/latest/haydenlake_id/0-0-0-2840' },
  { label: 'City of Sandpoint: Notice of Public Hearing, May 20, 2026 (City Council to consider repealing and replacing Title 3, Chapter 12, Sandpoint City Code, pertaining to short-term rentals, pursuant to Idaho Code 67-6539; written testimony due May 13, 2026; checked October 26, 2026)', url: 'https://mccmeetingspublic.blob.core.usgovcloudapi.net/sndpointid-meet-c21b91569ecf48fba37ef0eb448a7e48/ITEM-Attachment-001-da2942a603644799af7fc2212fd7c82e.pdf' },
  { label: 'Rent Responsibly: Spring 2026 state short-term rental bills (Idaho House Bill 583 signed by Governor Brad Little on March 16, 2026, effective July 1, 2026; secondary source for the signing date only, the bill text above is the authority for the substance; checked October 26, 2026)', url: 'https://www.rentresponsibly.org/spring-2026-state-short-term-rental-bills/' },
]
export const metadata: Metadata = {
title: "Short-Term Rental Rules in North Idaho Cities: What Changed July 1, 2026",
description:
    "Since July 1, 2026, no North Idaho city or county can require a permit, license, fee, or registration to run a short-term rental (Idaho HB 583, Idaho Code 67-6539). What still applies: the five-item safety list, general noise and parking rules, HOA covenants, and 6% plus 2% lodging taxes.",
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: "Short-Term Rental Rules in North Idaho Cities (2026)",
description: "Do you need a permit for an Airbnb in Coeur d'Alene, Post Falls, Hayden, or Sandpoint? Since July 1, 2026, the answer at city hall is no. The state law, the safety list that remains, and the taxes that did not go away, from a local REALTOR.",
url: articleUrl,
type: 'article',
publishedTime: '2026-10-26',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'Do you need a permit to run a short-term rental in North Idaho in 2026?',
    a: 'No city or county permit. Since July 1, 2026, Idaho Code 67-6539(5), as amended by House Bill 583, states that no county or city shall require a license, fee, permit, certification, or registration to operate a short-term rental. That rule applies in Coeur d\'Alene, Post Falls, Hayden, Sandpoint, and everywhere else in Idaho. Tax permits are different: if you take direct bookings, the Idaho State Tax Commission requires a seller\'s permit and a travel and convention tax permit for that income.',
  },
  {
    q: 'Can a North Idaho city ban or cap short-term rentals?',
    a: 'No. Idaho Code 67-6539(1) bars any ordinance with the express or practical effect of prohibiting short-term rentals, and 67-6539(2) lists the restrictions a city may not impose only on short-term rentals, including owner-occupation requirements, limits on rental days, proximity limits, and restricting the number of short-term rentals in a city or county. Sandpoint\'s old limit of 35 non-owner-occupied units in residential zones is an example of a cap that cannot stand under the current statute.',
  },
  {
    q: 'What rules can a city still impose on a short-term rental in Idaho?',
    a: 'Only the five items in Idaho Code 67-6539(3): functioning smoke alarms in all sleeping areas; a functioning fire extinguisher and a functioning carbon monoxide detector on each floor; removable escape ladders in above-ground sleeping areas with a window; maximum occupancy no higher than the International Building Code non-transient residential limits adopted in Idaho; and an accessible emergency information handout listing exit locations, extinguisher locations, any first aid kit, and an owner or manager emergency phone number. Beyond that list, short-term rentals remain subject to the general residential ordinances that apply to everyone, including noise, parking, nuisance, curfew, and traffic rules under 67-6539(6).',
  },
  {
    q: 'Do short-term rental rules differ between Coeur d\'Alene, Post Falls, Hayden, and Sandpoint?',
    a: 'For permits, no longer. Before July 1, 2026 they differed: Coeur d\'Alene had a permit ordinance dating to 2017, and Sandpoint licensed rentals and capped non-owner-occupied units in residential zones at 35 citywide. No dedicated City of Hayden short-term rental permit chapter and no City of Post Falls short-term rental permit chapter were found in the city sources checked October 26, 2026, and the permit ordinance that appears in search for Hayden Lake belongs to the separate City of Hayden Lake. Since July 1, 2026, the state rule in 67-6539 controls in all four cities, whatever older permit text a code library still displays.',
  },
  {
    q: 'What taxes do you pay on a short-term rental in Idaho?',
    a: 'Stays of 30 days or less carry 6% Idaho sales tax and 2% travel and convention tax, for an 8% statewide baseline, plus an auditorium district tax if the property is in a district and any city local option tax the Tax Commission does not administer. Under Idaho Code 63-1804, a short-term rental marketplace must register with the State Tax Commission and collect, report, and pay those taxes on transactions it facilitates. An owner who rents directly, without a marketplace, takes on those same duties personally and must register and remit.',
  },
  {
    q: 'Can an HOA still restrict short-term rentals in North Idaho?',
    a: 'Yes, check your own documents. House Bill 583 limits what cities and counties can require. It does not cancel a private covenant, CC&R, condominium declaration, or lease term you agreed to. A homeowners association rule that bans or limits short-term rentals is a private contract question, not a city permit question, so read your CC&Rs and ask the association before you list, and get legal advice if the documents are unclear. This article is general information, not legal advice.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: "Short-Term Rental Rules in North Idaho Cities: What Changed July 1, 2026",
  description: "Do you need a permit for an Airbnb in Coeur d'Alene, Post Falls, Hayden, or Sandpoint? Since July 1, 2026, the answer at city hall is no. The state law, the safety list that remains, and the taxes that did not go away, from a local REALTOR.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-10-26T00:00:00-07:00',
  dateModified: '2026-10-26T00:00:00-07:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'short-term rental rules North Idaho',
    'Idaho HB 583 short-term rental',
    'Idaho Code 67-6539',
    'Coeur d\'Alene Airbnb permit 2026',
    'Sandpoint short-term rental cap',
    'Post Falls short-term rental rules',
    'Hayden Idaho short-term rental',
    'Idaho short-term rental tax 6% 2%',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 1750,
  about: [
    {
      '@type': 'City',
      name: "Coeur d'Alene",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Sandpoint',
      sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
  ],
  spatialCoverage: {
    '@type': 'AdministrativeArea',
    name: 'North Idaho',
    sameAs: 'https://en.wikipedia.org/wiki/Idaho_Panhandle',
    containedInPlace: { '@type': 'State', name: 'Idaho' },
  },
  mentions: [
    {
      '@type': 'City',
      name: "Coeur d'Alene",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Post Falls',
      sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho',
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
      name: 'Sandpoint',
      sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
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
    { '@type': 'ListItem', position: 3, name: 'Short-Term Rental Rules in North Idaho Cities', item: articleUrl },
  ],
}
const safetyItems = [
  { item: 'Smoke alarms', detail: 'Functioning, in all sleeping areas' },
  { item: 'Fire extinguisher and CO detector', detail: 'Functioning, on each floor' },
  { item: 'Escape ladders', detail: 'Removable, in above-ground sleeping areas with a window' },
  { item: 'Occupancy limit', detail: 'No higher than International Building Code residential limits' },
  { item: 'Emergency handout', detail: 'Exits, extinguishers, first aid kit, owner or manager phone' },
]
export default function ShortTermRentalRulesNorthIdahoPage() {
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
<span className="text-[#5C5650]">Short-Term Rental Rules in North Idaho</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">11 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">October 2026</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Short-Term Rental Rules in North Idaho Cities: What Changed July 1, 2026
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            No city permit, no cap, and no owner-occupation rule: the state law that replaced four city permit conversations, the five safety items that remain, and the taxes and HOA rules that did not go away.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · October 26, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">July 1, 2026</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">HB 583 Took Effect</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Idaho Code 67-6539</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">None</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">City Permit, License, or Fee</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">67-6539(5)</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">5 items</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Safety Rules a City May Require</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">67-6539(3), the complete list</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">6% + 2%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Sales Tax + Travel and Convention Tax</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Stays of 30 days or less</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Since July 1, 2026, no city or county in Idaho can require a license, fee, permit, certification, or registration to operate a short-term rental. That sentence is Idaho Code 67-6539(5), as amended by House Bill 583 in 2026, checked October 26, 2026 in the bill text on the Idaho Legislature site. It applies the same way in Coeur d&apos;Alene, Post Falls, Hayden, and Sandpoint. If you are reading an older guide that walks you through a city permit application, a renewal date, or a cap on the number of rentals, you are reading the rules as they stood before July 1, 2026.
</p>
<p className="mb-10">This article is general information about the current state law, not legal advice for a specific property. For the city by city picture, start with{' '}<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="text-[#C4842A] hover:underline">the flagship North Idaho city comparison</a>{' '}and the area guides linked in the sidebar, then use this guide for what you must, and must not, do before your first guest.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The State Law Is Now the Whole Permit Story
</h2>
<p className="mb-6">
                House Bill 583 was signed on March 16, 2026, and took effect on July 1, 2026 under its emergency clause. Section 1 rewrote Idaho Code 67-6539. Short-term rentals are classified as a non-transient residential land use for zoning and building code purposes, and no city or county may enact or enforce an ordinance with the express or practical effect of prohibiting them.
</p>
<p className="mb-6">
                Section 67-6539(2) then names the restrictions a city may not impose only because a home is a short-term rental. The list includes owner-occupation requirements, professional management mandates, extra insurance, use reporting, extra fire sprinklers, extra parking, inspections, signage or notice rules, limits on rental days, neighbor notices, conditional use permits in residential zones, proximity limits, and caps on the number of short-term rentals. If a rule is on that list, a city cannot bring it back under a different name.
</p>
<p className="mb-10">
                One caution matters when you research this yourself. Online code libraries still display older permit text for some North Idaho cities, and search results still surface it as if it were current. Read any permit chapter against 67-6539 as amended. Where the older text conflicts with the statute, the statute controls, and this article labels every older rule below as history with its date attached.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Five Safety Items a City May Still Require
</h2>
<p className="mb-6">
                Section 67-6539(3) is the complete list of short-term rental specific requirements a city or county may still impose, and it is a short list focused on life safety. Treat it as your pre-listing checklist whether or not your city has adopted an ordinance using it, because it is also simply what a careful host should have in place before guests sleep in the home.
</p>
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  The Complete 67-6539(3) Safety List
</h3>
<div className="space-y-4">
{safetyItems.map((row) => (
<div key={row.item} className="flex justify-between gap-4 border-b border-[#E8DDD0] pb-3 last:border-0 last:pb-0">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{row.item}</span>
<span className="font-dm-sans text-sm text-[#5C5650] text-right">{row.detail}</span>
</div>
                  ))}
</div>
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">Source: Idaho House Bill 583 (2026), Idaho Code 67-6539(3), checked October 26, 2026. This is the only list in the statute of requirements a city or county may impose specifically on a short-term rental.</p>
</div>
<p className="mb-10">
                Beyond that list, 67-6539(6) keeps every short-term rental subject to the ordinances that apply to other residential uses, including noise, parking, nuisance, curfew, and traffic rules. A guest who blocks a driveway or holds a loud party past quiet hours is still a code issue. It is just handled under the same rules that apply to any home on the street, not under a special rental permit.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Each City Used to Require, Labeled as History
</h2>
<p className="mb-6">
                Coeur d&apos;Alene adopted its short-term rental permit ordinance, Ordinance 3594, in 2017. The code library text still displayed on October 26, 2026 requires an owner applicant, makes a permit expire on March 31 with renewal due by March 1, and allows a home to be rented without a permit for no more than 14 days per year in no more than two stays. Those are pre-July 2026 rules. Do not use the March dates as a current renewal calendar, and do not publish any old permit fee as current. Aggregator pages still cite first year and renewal fees for Coeur d&apos;Alene, but no fee can be required under 67-6539(5) today.
</p>
<p className="mb-6">
                Sandpoint licensed both owner-occupied and non-owner-occupied rentals under Title 3, Chapter 12, and capped non-owner-occupied rentals in residential zones at 35 units citywide. A cap on the number of rentals is expressly barred by 67-6539(2). Sandpoint noticed a public hearing for May 20, 2026 to repeal and replace Title 3, Chapter 12 pursuant to Idaho Code 67-6539, with written testimony due May 13, 2026. In the city sources checked October 26, 2026, the published ordinance summary for that repeal and replace still left the ordinance number and enactment dates blank, so this article does not state a new Sandpoint ordinance number. What is certain is the state rule above it: no license and no 35 unit cap can be enforced after July 1, 2026.
</p>
<p className="mb-6">
                Hayden needs a careful distinction. The permit ordinance that search returns under Title 9-9 belongs to the City of Hayden Lake, a separate small city on the lake, not to the City of Hayden. No dedicated City of Hayden short-term rental permit chapter was found in the sources checked October 26, 2026. Do not import Hayden Lake rules into a Hayden purchase, and confirm which city a property actually sits in before you rely on any city document.
</p>
<p className="mb-10">
                For Post Falls, the search of city sources on October 25 and 26, 2026 surfaced accessory dwelling unit pages, not a short-term rental permit chapter, and no Post Falls permit regime is stated in this article. The county layer follows the same principle: House Bill 583 names counties in every prohibition, so a county permit requirement would be preempted the same way. This article states no Kootenai County permit rule, because none was verified from the county itself at build time.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Taxes Did Not Go Away
</h2>
<p className="mb-6">
                Stays of 30 days or less carry 6% Idaho sales tax and 2% travel and convention tax, an 8% statewide baseline, confirmed on the Idaho State Tax Commission travel and convention tax page checked October 26, 2026. An auditorium district tax can add to that if the property sits inside a district, and some cities levy a local option tax that the Tax Commission does not administer, so check with the city where the property sits.
</p>
<p className="mb-6">
                How you book decides who sends the money. Under Idaho Code 63-1804, as amended by House Bill 583, a short-term rental marketplace must register with the State Tax Commission and collect, report, and pay the sales, travel and convention, and applicable local taxes on transactions it facilitates. The Tax Commission makes the same point in plain language: to offer short-term lodging you need a travel and convention tax permit and a regular seller&apos;s permit, and you technically do not need those permits if you only rent through marketplaces that collect and send in the taxes for you.
</p>
<p className="mb-10">
                Direct bookings are the trap. If you rent through your own site, by phone, or by email, 63-1804(5) puts the marketplace duties on you personally. Register through Idaho Business Registration, collect the taxes on those stays, and file even in a month with no sales. A clean permit history at city hall no longer exists to remind you, because there is no city permit at all.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Rules That Still Decide Whether You Can Host: HOAs, Leases, and Insurance
</h2>
<p className="mb-6">
                House Bill 583 limits governments. It does not rewrite a private contract you signed. A homeowners association covenant, a condominium declaration, a deed restriction, or a lease term that bans or limits short-term rentals can still stop a listing, and many North Idaho subdivisions and lake communities have exactly those provisions. Read your CC&amp;Rs before you price a home as a rental, and ask the association in writing if the language is unclear.
</p>
<p className="mb-10">
                Insurance deserves the same check. The state classification of a rental as a residential land use does not change what a standard homeowners policy covers when paying guests stay in the home. Confirm short-term rental coverage with your insurer before the first booking, not after the first claim. Neither of these checks involves city hall, and both can matter more than the state law does.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  A Practical Checklist Before Your First Guest
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">At the property:</span> install the five 67-6539(3) safety items, prepare the emergency handout, and plan for the general noise, parking, and nuisance rules that apply to every home.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">On paper:</span> read your CC&amp;Rs, lease, and insurance policy, and confirm in writing that short-term rental use is allowed under each one.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">For taxes:</span> if any booking will be direct, register with the State Tax Commission first and collect 6% sales tax plus 2% travel and convention tax on stays of 30 days or less.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What This Means If You Are Buying
</h2>
<p className="mb-6">
                For a buyer, the change cuts both ways. The old barrier in Sandpoint, a capped permit pool, and the old paperwork calendar in Coeur d&apos;Alene no longer decide whether a home can earn rental income. More homes can legally be offered, which also means more competition for the same guests, and a purchase priced on optimistic rental income should be tested against that wider supply.
</p>
<p className="mb-8">
                The diligence that matters now is private and financial, not municipal: HOA documents, insurance, tax registration for direct bookings, and whether the numbers still work at the price you are paying. Our Sandpoint, lakefront, and market guides linked in the sidebar give you the price context for that math, city by city.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published October 26, 2026. Legal figures are from the text of Idaho House Bill 583 (2026) itself, checked October 26, 2026: effective July 1, 2026; 67-6539(5) bars any city or county license, fee, permit, certification, or registration; 67-6539(3) lists the five safety items a city may still require; 67-6539(6) preserves generally applicable noise, parking, nuisance, curfew, and traffic ordinances; and 63-1804 places tax collection on marketplaces for facilitated transactions and on owners for direct rentals. Tax rates are 6% Idaho sales tax and 2% travel and convention tax on stays of 30 days or less, per the Idaho State Tax Commission page checked October 26, 2026. City permit rules for Coeur d&apos;Alene (Ordinance 3594, 2017), Hayden Lake (Title 9-9), and Sandpoint (former 35 unit cap, Title 3, Chapter 12) are presented only as pre-July 2026 history, labeled by date, and no current city fee is stated. No enacted Sandpoint replacement ordinance number was found in the city sources checked October 26, 2026, and no City of Hayden, City of Post Falls, or Kootenai County permit rule is stated, because none was verified from that jurisdiction itself at build time. This article is general real estate information, not legal or tax advice. For a specific property, confirm the current documents with the city, your HOA, and a qualified professional, and contact Shirin for the local picture.
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
                  If you are weighing a North Idaho home partly for rental income, the question has changed. It is no longer which city will give you a permit. It is whether the HOA documents, the insurance, the taxes, and the price you pay all line up. I can help you work through that picture for a specific home and neighborhood, with no pressure and no pitch, just an honest conversation.
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
                Data sources: Idaho House Bill 583 (2026) and Idaho Code 67-6539 and 63-1804, and the Idaho State Tax Commission travel and convention tax guidance, as detailed in Sources and Scope above, all checked October 26, 2026. Laws and city documents change, so confirm the current text for your property before you list.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Rules at a Glance</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">North Idaho · Since July 1, 2026 · Idaho Code 67-6539</p>
<div className="space-y-3">
{[
                      { range: 'Coeur d\'Alene', desc: 'No city permit · 2017 permit ordinance is history' },
                      { range: 'Post Falls', desc: 'No city permit · No verified city STR chapter found' },
                      { range: 'Hayden', desc: 'No city permit · Hayden Lake is a separate city' },
                      { range: 'Sandpoint', desc: 'No city permit · Former 35 unit cap cannot stand' },
                      { range: 'Everywhere in Idaho', desc: '5 safety items max · 6% + 2% tax on stays up to 30 days' }
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
                    Thinking of Buying a Rental?
</a>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho City Comparison</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">All five cities, head to head, the flagship comparison</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/sandpoint-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Sandpoint Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for the city where the old cap applied</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/coeur-dalene-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Coeur d&apos;Alene Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for the largest of the five markets</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/buying-lakefront-property-north-idaho-lake-coeur-dalene-hayden-lake-pend-oreille" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Buying Lakefront Property in North Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Frontage, docks, and septic for the homes guests want most</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/north-idaho-housing-market-update" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho Housing Market Update</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Median sale prices for all five cities, October 2026</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/how-much-do-homes-cost-sandpoint-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Sandpoint Home Prices 2026</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What a Sandpoint purchase looks like at each budget</p>
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
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Ready to Explore</p>
<h2 className="font-cormorant text-4xl md:text-5xl text-[#F5EFE6] mb-6 leading-tight font-semibold">
            Thinking About a Home That Can Earn?
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Let&apos;s look at a specific home together: its HOA documents, its neighborhood, and whether the numbers make sense at the price, before you count on rental income.
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
