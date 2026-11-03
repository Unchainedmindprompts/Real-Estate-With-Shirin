import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/hoa-north-idaho-subdivisions-fees-rules-what-to-check'
const sources = [
  { label: 'Idaho Legislature, Idaho Code Title 55, Chapter 32, the Homeowner’s Association Act, sections 55-3201 to 55-3213 (chapter index checked November 3, 2026): the Act was created in 2022 and amended since; older secondary sources citing sections 55-115 and 55-116 describe rules that now live in Chapter 32, principally sections 55-3205 and 55-3206', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title55/T55CH32/' },
  { label: 'Idaho Legislature, Idaho Code 55-3205 (checked November 3, 2026): on written request the HOA must provide a statement of the member’s assessment account within five business days, showing all outstanding assessments, charges, and fees including any transfer fee, late fees, and interest, plus the amount of any transfer fee on a sale; the HOA is bound by the amounts in the statement; no fee may be charged for the statement and charging one violates the Idaho Consumer Protection Act; a transfer fee may be charged only if expressly stated in the CC&Rs, only by the HOA, with no portion to a third party; on or before January 1 each year the HOA must disclose the fees that will be charged and fees for the following calendar year may not exceed the disclosed amounts, with no surcharge or additional transfer fees; an updated financial disclosure is due within ten business days of request, and a reconciled annual financial disclosure within sixty days of the close of the fiscal year', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title55/T55CH32/SECT55-3205' },
  { label: 'Idaho Legislature, Idaho Code 55-3204 (checked November 3, 2026): board meetings are open to members with narrow executive session exceptions; an annual membership meeting is required; minutes of all meetings must be kept for at least ten years; board members must declare conflicts of interest at the annual meeting; assessments are determined in accordance with the governing documents or, if they are silent, with the approval of a majority of the members; unincorporated HOA bylaws must provide that no fees or assessments may be increased unless a majority of all members vote in favor; the board may not use rules for common property to expand the restrictive covenants as they apply to a member’s own property; a member who prevails in a legal action over a Chapter 32 violation is entitled to reasonable attorney’s fees', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title55/T55CH32/SECT55-3204' },
  { label: 'Idaho Legislature, Idaho Code 55-3204A (checked November 3, 2026): for HOAs formed after July 1, 2025, within 180 days after 75 percent of lots are conveyed to owners other than the declarant, at least one third of board seats must be offered to owner elected members; once 95 percent of the development is built and occupied, the declarant must begin turning over full control and complete it within twelve months; the declarant retains architectural review authority during declarant control except as the declaration provides otherwise', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title55/T55CH32/SECT55-3204A' },
  { label: 'Idaho Legislature, Idaho Code 55-3206 (checked November 3, 2026): no fine may be imposed unless the authority to fine is clearly set forth in the covenants and restrictions; a majority board vote is required; written notice must reach the member at least thirty days before the vote meeting, by personal service or certified mail; no fine may be imposed while the member is addressing the violation in good faith; no portion of any fine may increase the remuneration of a board member or the board’s agent', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title55/T55CH32/SECT55-3206' },
  { label: 'Idaho Legislature, Idaho Code 55-3207 (checked November 3, 2026): the statutory lien secures assessments for the reasonable costs of maintaining common areas owned and maintained by the HOA; the claim must be filed and recorded in the county, state the amount due after credits, the owner, the HOA, and a property description, be verified by oath, and a copy must be served on the owner by personal delivery or certified mail within five business days after recording', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title55/T55CH32/SECT55-3207' },
  { label: 'Idaho Legislature, Idaho Code 55-3211 (checked November 3, 2026): an HOA may not add, amend, or enforce a covenant that limits or prohibits renting a property, for any length of time, unless the affected owner expressly agreed in writing at the time of the addition or amendment; restrictions that already applied to the property when the owner acquired it remain enforceable', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title55/T55CH32/SECT55-3211' },
  { label: 'Idaho Legislature, Idaho Code 55-3212 (checked November 3, 2026): the same structure applies to accessory dwelling units; no added or amended ban without the owner’s written agreement, though reasonable design and use rules are allowed', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title55/T55CH32/SECT55-3212' },
  { label: 'Real Estate With Shirin, Short-Term Rental Rules in North Idaho Cities: the city and county permit layer under Idaho Code 67-6539, which is separate from private HOA covenants; the 67-6539 limits on local permits did not remove HOA covenant restrictions on renting', url: 'https://www.realestatewithshirin.com/articles/short-term-rental-rules-north-idaho-cities' },
  { label: 'Real Estate With Shirin, New Construction in North Idaho: builders, costs, and process for new subdivisions, where declarant control and the 55-3204A handover deadlines matter most', url: 'https://www.realestatewithshirin.com/articles/new-construction-north-idaho-builders-costs-process' },
  { label: 'Real Estate With Shirin, North Idaho city comparison: the flagship comparison of the five cities, used for consistency on where subdivision buying is concentrated in Kootenai and Bonner Counties', url: 'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint' },
]
export const metadata: Metadata = {
title: 'HOAs in North Idaho Subdivisions: Fees, Rules, and What to Check Before You Buy',
description:
    'Idaho has no standard HOA fee and no statewide resale packet. What buyers get instead is a set of rights under the Homeowner’s Association Act, Idaho Code Title 55, Chapter 32: a free statement of the seller’s assessment account within five business days that binds the HOA, a January 1 fee disclosure that caps that year’s fees, transfer fees only where the CC&Rs expressly allow them, and fines that require 30 days notice and a board vote.',
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: 'HOAs in North Idaho Subdivisions: Fees, Rules, and What to Check Before You Buy',
description: 'In Idaho the subdivision documents, not a state schedule, set the fees and the rules. The checks the Homeowner’s Association Act gives you before closing: the free binding statement of account, the January 1 fee disclosure, and the CC&R clauses to read first.',
url: articleUrl,
type: 'article',
publishedTime: '2026-11-03',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'What Do HOA Fees Usually Cover?',
    a: 'There is no Idaho standard list and no standard amount. The only spending purpose the Homeowner’s Association Act itself names is maintenance of common areas the HOA owns and maintains, under Idaho Code 55-3207. Beyond that, what dues cover is set by each subdivision’s governing documents. The governing documents typically assign the HOA common area landscaping and upkeep, private roads and snow removal, common area insurance, amenities the subdivision offers, and reserve funding for future common area work. Read that list as what the documents usually assign, not as an Idaho rule, and confirm it in the specific subdivision’s CC&Rs, bylaws, and current financial disclosure before you buy. This guide publishes no typical North Idaho fee amount, because no primary source publishes a median or average HOA fee for North Idaho subdivisions.',
  },
  {
    q: 'What are HOAs like in Post Falls and Coeur d’Alene subdivisions?',
    a: 'Most newer subdivisions in Post Falls and Coeur d’Alene have an HOA, and the practical experience varies by subdivision because the governing documents vary. What does not vary is the Idaho floor under all of them: the Homeowner’s Association Act, Idaho Code Title 55, Chapter 32, checked November 3, 2026. Under that Act a buyer can get a free statement of the seller’s assessment account within five business days that binds the HOA, the year’s fees are capped by the January 1 fee disclosure, a transfer fee is allowed only if the CC&Rs expressly authorize it, and fines require thirty days written notice and a majority board vote. Two subdivisions a mile apart can have very different dues, rules, and reserves. The documents for the specific lot are the answer, not the city name.',
  },
  {
    q: 'Can an HOA charge a transfer fee in Idaho?',
    a: 'Only if the authority to charge it is expressly stated in the declaration of covenants, conditions, and restrictions, under Idaho Code 55-3205(2), checked November 3, 2026. Only the HOA itself may charge the fee, and no portion of it may go to a third party, including a board member or the HOA’s manager or agent. The amount of any transfer fee must also appear in the seller’s statement of assessment account under 55-3205(1), and fees for a calendar year may not exceed the amounts in that year’s January 1 fee disclosure, with no surcharge or additional transfer fees added. If the CC&Rs do not expressly authorize a transfer fee, the HOA may not charge one.',
  },
  {
    q: 'How do I find out what a seller owes the HOA before closing?',
    a: 'Ask for the statement of the seller’s assessment account under Idaho Code 55-3205(1), checked November 3, 2026. On written request by the member or the member’s agent, the HOA must provide it within five business days. It must show all outstanding assessments, charges, and fees, including any transfer fee, late fees, and interest, and the amount of any transfer fee on a sale. The HOA is bound by the amounts in the statement, and no fee may be charged for providing it. Charging a fee for the statement is a violation of the Idaho Consumer Protection Act. Idaho has no separate paid resale packet or estoppel certificate process; this free, binding statement is the Idaho mechanism.',
  },
  {
    q: 'Can an Idaho HOA stop me from renting out my home?',
    a: 'It depends on when the restriction was adopted and when you bought. Under Idaho Code 55-3211, checked November 3, 2026, an HOA may not add, amend, or enforce a covenant that limits or prohibits renting a property, for any length of time, unless the affected owner expressly agreed in writing at the time of the addition or amendment. A rental restriction that already applied to the property when you acquired it remains enforceable. The same structure applies to accessory dwelling units under 55-3212. Keep the layers separate: the limits on city and county short term rental permits under Idaho Code 67-6539 are a public layer and did not remove private HOA covenants, which are a separate layer.',
  },
  {
    q: 'What should I check before buying in a North Idaho subdivision with an HOA?',
    a: 'Check seven things, in this order. The recorded CC&Rs, bylaws, and current rules for the specific lot. The seller’s statement of account under Idaho Code 55-3205(1), which is free, due within five business days, and binding on the HOA. The current January 1 fee disclosure under 55-3205(2), because the year’s fees may not exceed it and any transfer fee must be authorized in the CC&Rs. The latest reconciled annual financial disclosure, due within sixty days of the close of the fiscal year, and an updated disclosure on request within ten business days. Recent meeting minutes, which must be kept for at least ten years, for planned special assessments, reserve projects, or rule changes. The rental and accessory dwelling unit clauses exactly as recorded, and whether they applied when the seller acquired the property. And for a new subdivision, whether the HOA was formed after July 1, 2025, and where it sits against the developer handover milestones in 55-3204A.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: 'HOAs in North Idaho Subdivisions: Fees, Rules, and What to Check Before You Buy',
  description: 'Idaho has no standard HOA fee and no statewide resale packet. The Homeowner’s Association Act, Idaho Code Title 55, Chapter 32, gives buyers checkable rights instead: a free statement of the seller’s assessment account within five business days that binds the HOA, a January 1 fee disclosure that caps the year’s fees, transfer fees only where the CC&Rs expressly authorize them, fines that require thirty days notice and a board vote, and developer handover deadlines for HOAs formed after July 1, 2025.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-11-03T00:00:00-08:00',
  dateModified: '2026-11-03T00:00:00-08:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'HOAs North Idaho subdivisions fees rules',
    'What Do HOA Fees Usually Cover',
    'Idaho Homeowner Association Act 55-3205 statement of account',
    'Idaho HOA transfer fee CC&Rs',
    'HOA Post Falls Coeur d’Alene subdivisions',
    'can Idaho HOA stop renting 55-3211',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 2500,
  about: [
    {
      '@type': 'State',
      name: 'Idaho',
      sameAs: 'https://en.wikipedia.org/wiki/Idaho',
    },
  ],
  spatialCoverage: {
    '@type': 'State',
    name: 'Idaho',
  },
  mentions: [
    { '@type': 'City', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Post Falls', sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Hayden', sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Rathdrum', sameAs: 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Sandpoint', sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'AdministrativeArea', name: 'Kootenai County', sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'AdministrativeArea', name: 'Bonner County', sameAs: 'https://en.wikipedia.org/wiki/Bonner_County,_Idaho', containedInPlace: { '@type': 'State', name: 'Idaho' } },
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
    { '@type': 'ListItem', position: 3, name: 'HOAs in North Idaho Subdivisions: Fees, Rules, and What to Check Before You Buy', item: articleUrl },
  ],
}
const rightRows = [
  { right: 'Statement of the seller’s assessment account', detail: 'Free, within five business days of written request, and the HOA is bound by the amounts (55-3205(1))' },
  { right: 'The year’s fees, capped in advance', detail: 'Fees for the calendar year may not exceed the January 1 fee disclosure, with no added surcharges (55-3205(2))' },
  { right: 'Transfer fee only if the CC&Rs say so', detail: 'Void unless expressly authorized in the CC&Rs; only the HOA may charge it (55-3205(2))' },
  { right: 'Updated financial disclosure on request', detail: 'Within ten business days of request; reconciled annual disclosure within sixty days of fiscal year end (55-3205(3) and (4))' },
  { right: 'Fines only with due process', detail: 'Authority in the covenants, thirty days written notice, majority board vote, no fine while curing in good faith (55-3206)' },
]
const checkRows = [
  { step: 'The CC&Rs, bylaws, and current rules', desc: 'The recorded documents for the specific lot. They set the dues, the use rules, and whether a transfer fee or rental restriction exists at all.' },
  { step: 'The statement of account (55-3205(1))', desc: 'Free, due within five business days of the seller’s written request, and binding on the HOA. It shows unpaid assessments, charges, late fees, interest, and any transfer fee.' },
  { step: 'The January 1 fee disclosure (55-3205(2))', desc: 'Ask for the current year’s disclosure, not just the dues amount. The year’s fees may not exceed it, and no surcharge or extra transfer fee may be added.' },
  { step: 'The financial disclosures (55-3205(3) and (4))', desc: 'The latest reconciled annual disclosure, plus an updated disclosure on request within ten business days. Look at reserves and what the money actually funds.' },
  { step: 'Recent meeting minutes (55-3204)', desc: 'Minutes must be kept for at least ten years. Read them for planned special assessments, reserve projects, and rule changes that have not reached the dues yet.' },
  { step: 'The rental and ADU clauses (55-3211, 55-3212)', desc: 'Read the clauses exactly as recorded, and note whether they applied when the seller acquired the property. A later ban cannot be enforced against an owner who never agreed to it in writing.' },
  { step: 'New subdivision handover (55-3204A)', desc: 'If the HOA was formed after July 1, 2025, check where it sits against the 75 percent owner election milestone and the 95 percent full handover milestone.' },
]
export default function HoaNorthIdahoSubdivisionsPage() {
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
<span className="text-[#5C5650]">HOAs in North Idaho</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">12 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            HOAs in North Idaho Subdivisions: Fees, Rules, and What to Check Before You Buy
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            Idaho has no standard HOA fee and no statewide resale packet. What a buyer gets instead is a set of statutory rights under the Homeowner’s Association Act, Idaho Code Title 55, Chapter 32, that make the subdivision’s own documents checkable before closing: a free statement of the seller’s assessment account within five business days that binds the association, a January 1 fee disclosure that caps that year’s fees, and a transfer fee that is void unless the CC&amp;Rs expressly authorize it. In Idaho the documents, not a state schedule, set the fees and the rules, so the check itself is the headline.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · November 3, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">5 business days</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Statement of Account</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Free and binding on the HOA, 55-3205(1), checked November 3, 2026</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">January 1</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Fee Disclosure Caps the Year</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Fees may not exceed the disclosed amounts, 55-3205(2)</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">30 days</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Written Notice Before a Fine Vote</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Plus a majority board vote, 55-3206</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">10 years</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Minutes Must Be Kept</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">All HOA meetings, 55-3204, checked November 3, 2026</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Short answer: do not ask what HOAs charge in North Idaho in general, because Idaho law does not set that number and no primary source publishes one. Ask what this subdivision’s documents say, and use the rights the Homeowner’s Association Act gives you to verify them before closing. The Act, Title 55, Chapter 32, sections 55-3201 to 55-3213, checked November 3, 2026 on the Idaho Legislature site, governs Idaho HOAs. It was created in 2022 and amended since. Older guides that cite sections 55-115 and 55-116 are describing rules that now live in Chapter 32, principally sections 55-3205 and 55-3206, so cite Chapter 32 when you check.
</p>
<p className="mb-10">This guide pairs with{' '}<a href="/articles/new-construction-north-idaho-builders-costs-process" className="text-[#C4842A] hover:underline">the new construction guide</a>{' '}for buyers in brand new subdivisions, and with{' '}<a href="/articles/short-term-rental-rules-north-idaho-cities" className="text-[#C4842A] hover:underline">the short term rental rules guide</a>, because HOA covenants are a private layer that sits on top of the city and county rules that guide covers. Nothing in the state law limiting local rental permits removed HOA covenants. Keep those two layers separate as you read.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What HOA Fees Usually Cover
</h2>
<p className="mb-6">
                The only spending purpose the Act itself names is maintenance of common areas the HOA owns and maintains, under section 55-3207. Everything beyond that is set by the subdivision’s governing documents. In practice, the governing documents typically assign the HOA common area landscaping and upkeep, private roads and snow removal, common area insurance, amenities the subdivision offers, and reserve funding for future common area work.
</p>
<p className="mb-10">
                Read that list as what documents usually assign, never as an Idaho standard, and attach no dollar figure to it. This guide publishes no typical North Idaho HOA fee, no average, and no range, on purpose: no primary source publishes a median or average fee for North Idaho subdivisions, and aggregator ranges mix condos, townhomes, and single family subdivisions into one number that describes none of them. The honest figure for any home is the dues amount in that subdivision’s own current fee disclosure and financial disclosure, which the next sections show you how to get.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Buyer’s Key Document: Free, Fast, and Binding
</h2>
<p className="mb-6">
                Under section 55-3205(1), checked November 3, 2026, on written request by a member or the member’s agent, the HOA must provide a statement of the member’s assessment account within five business days. The statement must show all outstanding assessments, charges, and fees, including any transfer fee, late fees, and interest, and it must state the amount of any transfer fee that may be charged on a sale. The HOA is bound by the amounts in the statement.
</p>
<p className="mb-10">
                No fee may be charged for the statement, and charging one is a violation of the Idaho Consumer Protection Act, Title 48, Chapter 6. That matters because Idaho has no separate paid resale packet or estoppel certificate process of the kind some other states require. Do not let anyone sell you another state’s paperwork model. In Idaho, the seller side statement of account under 55-3205(1) is the mechanism: free, five business days, and binding on the association that issued it.
</p>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-2 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Right the Act gives you</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">What it means at closing</span>
</div>
{rightRows.map((row) => (
<div key={row.right} className="grid grid-cols-2 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.right}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.detail}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Rights checked November 3, 2026 against the Idaho Legislature published text of Idaho Code 55-3205 and 55-3206. The statement of account is requested by the seller as the member, or the seller’s agent, so build the request into the purchase timeline early.</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Transfer Fees and the January 1 Disclosure That Caps the Year
</h2>
<p className="mb-6">
                A transfer fee in Idaho is opt in by the CC&amp;Rs. Under section 55-3205(2), an HOA may not charge a transfer fee unless the authority to do so is expressly stated in the declaration of covenants, conditions, and restrictions. Only the HOA may charge it, and no portion of the fee may go to a third party, including a board member or the HOA’s manager or agent. If the CC&amp;Rs are silent, there is no transfer fee, whatever a closing checklist suggests.
</p>
<p className="mb-6">
                The same subsection gives buyers a second check. On or before January 1 of each year, the HOA must give members a disclosure of the fees that will be charged. Fees imposed for the calendar year following the disclosure may not exceed the disclosed amounts, and no surcharge or additional transfer fees may be added. So the checklist item is to ask for the current year’s disclosure itself, not just the dues amount quoted in a listing.
</p>
<p className="mb-10">
                Financial disclosures carry deadlines too. Under 55-3205(3), an updated financial disclosure must be provided within ten business days of a member’s or agent’s request. Under 55-3205(4), within sixty days of the close of the fiscal year the HOA must give all members an updated, reconciled financial disclosure for that year. HOAs are also subject to the records and reports requirements of the Idaho Nonprofit Corporation Act, Title 30, Chapter 30, Part 11, except as Chapter 32 provides otherwise. Together, the statement of account, the January 1 disclosure, and the reconciled annual disclosure let a buyer verify what the seller owes, what the year will cost, and whether the association’s books support both.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How Assessments Are Set, and Why There Is No Dues Cap
</h2>
<p className="mb-6">
                Under section 55-3204, the board determines and establishes assessments in accordance with the governing documents or, if the documents do not include that language, with the approval of a majority of the members. For unincorporated HOAs, the bylaws must provide that no fees or assessments may be increased unless a majority of all members vote in favor of the increase.
</p>
<p className="mb-10">
                There is no Idaho cap on regular dues amounts themselves. The amount is a governing documents question, which is exactly why a statewide typical fee cannot exist and why the documents for the specific lot matter more than any regional average. When you compare two subdivisions in Post Falls or Coeur d’Alene, compare their disclosures, their reserves, and their increase history in the minutes, not a headline dues number alone.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Fines Require Due Process
</h2>
<p className="mb-6">
                Under section 55-3206, checked November 3, 2026, no fine may be imposed unless the authority to fine is clearly set forth in the covenants and restrictions. A majority vote of the board is required before any fine may be imposed. Written notice must reach the member at least thirty days before the meeting at which the vote is held, by personal service or certified mail.
</p>
<p className="mb-10">
                And no fine may be imposed while the member is addressing the violation in good faith. If the member begins resolving the violation before the vote meeting and continues in good faith until it is fully resolved, the fine may not be imposed. No portion of any fine may be used to increase the remuneration of a board member or the board’s agent. For a buyer, the practical read is simple: find the fine authority in the CC&amp;Rs before closing, because a fine schedule that is not in the covenants is not enforceable under this section.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Liens Are Narrower Than Most Buyers Expect
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">What the lien covers:</span> under section 55-3207, the statutory lien secures assessments for the reasonable costs of maintaining common areas owned and maintained by the HOA. It is not a general lien for every charge an HOA can imagine.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">What the HOA must do:</span> file and record the claim in the county, state the amount due after credits, the owner, the HOA, and a property description, verify it by oath, and serve a copy on the owner by personal delivery or certified mail within five business days after recording. A recorded lien that skipped those steps is worth a title company question before closing.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Governance Floor Every Idaho HOA Sits On
</h2>
<p className="mb-6">
                Section 55-3204 sets a floor that applies whether the subdivision is large or small, incorporated or unincorporated. Board meetings are open to members, with narrow executive session exceptions for matters such as personnel, records not subject to disclosure, legal advice, litigation, and sensitive matters about an individual member’s property or assessments. An annual membership meeting is required. Minutes of all meetings must be kept for at least ten years. Board members must declare conflicts of interest at the annual meeting.
</p>
<p className="mb-10">
                Two more floor rules protect owners directly. The board may not use its power to adopt rules governing common property to expand the restrictive covenants as they apply to a member’s own property, under 55-3204(5). And a member who prevails in a legal action over a Chapter 32 violation is entitled to reasonable attorney’s fees, under 55-3204(8). For a buyer, the ten year minutes rule is the most useful day to day: minutes are where planned special assessments, reserve projects, and rule changes appear before they reach your dues.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Renting and Accessory Dwelling Units: A Separate, Private Layer
</h2>
<p className="mb-6">
                Under section 55-3211, an HOA may not add, amend, or enforce a covenant that limits or prohibits renting a property, for any length of time, unless the affected owner expressly agreed in writing at the time of the addition or amendment. Restrictions that already applied to the property when the owner acquired it remain enforceable. Section 55-3212 applies the same structure to accessory dwelling units: no added or amended ban without the owner’s written agreement, though reasonable design and use rules are allowed.
</p>
<p className="mb-10">
                Keep the layers separate. The October 26 guide on{' '}<a href="/articles/short-term-rental-rules-north-idaho-cities" className="text-[#C4842A] hover:underline">short term rental rules</a>{' '}covered city and county permits under Idaho Code 67-6539. That public layer was limited by state law. HOA covenants are a private layer and were not preempted by it. A home can be perfectly legal to rent under city and county law and still be restricted by covenants that applied when the seller bought it, so read the rental clause in the recorded CC&amp;Rs and date it against the seller’s purchase.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                New Subdivisions: Developer Control Has Deadlines, With a Date Limit
</h2>
<p className="mb-6">
                Section 55-3204A adds handover deadlines, but only for HOAs formed after July 1, 2025. Within 180 days after 75 percent of lots are conveyed to owners other than the declarant, at least one third of board seats must be offered to members elected by owners. Once 95 percent of the development is built and occupied, the declarant must begin handing over full control to the owners and complete the process within twelve months.
</p>
<p className="mb-10">
                The declarant keeps architectural review authority during declarant control unless the declaration says otherwise. Do not apply these deadlines to older subdivisions: a Post Falls or Rathdrum subdivision whose HOA was formed before July 1, 2025 is governed by its own declaration on handover, not by 55-3204A. For a new build, ask for the HOA formation date and the conveyance percentage in writing, and read{' '}<a href="/articles/new-construction-north-idaho-builders-costs-process" className="text-[#C4842A] hover:underline">the new construction guide</a>{' '}alongside the declaration.
</p>
<p className="mb-10">
                One line covers the remaining owner protections: sections 55-3208 to 55-3210 and 55-3213 address solar panels, political signs, flags, and family daycare homes. If one of those topics is decisive for your purchase, read that section’s current text on the Legislature site before you rely on a summary, including this one.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Buyer Checklist the Facts Support
</h2>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-2 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Check, in order</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">What to confirm</span>
</div>
{checkRows.map((row) => (
<div key={row.step} className="grid grid-cols-2 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.step}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.desc}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Checklist built November 3, 2026 from Idaho Code 55-3204, 55-3204A, 55-3205, 55-3211, and 55-3212. Nothing in Chapter 32 as checked November 3, 2026 imposes a reserve study mandate or caps special assessments, so the budget, the reconciled disclosure, and the minutes are the buyer’s evidence on reserves, not a statutory guarantee.</p>
</div>
<p className="mb-10">
                None of these checks requires a lawyer to start. They require asking for named documents early enough that the five and ten business day clocks in 55-3205 fit inside your closing timeline. If a document contradicts the listing, or an HOA will not produce a disclosure the Act requires, that is the moment to slow down and get advice before you remove contingencies.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published November 3, 2026. Every rule in this guide was checked November 3, 2026 against the Idaho Legislature published text of the Homeowner’s Association Act, Idaho Code Title 55, Chapter 32, sections 55-3204, 55-3204A, 55-3205, 55-3206, 55-3207, 55-3211, and 55-3212. Two deliberate omissions are worth naming. This guide publishes no typical, average, or range figure for North Idaho HOA fees, because no primary source publishes one and the Act sets no standard amount. And it states no reserve study requirement and no cap on special assessments, because Chapter 32 as checked November 3, 2026 imposes neither. This guide is general information about buying in an Idaho subdivision with an HOA, not legal advice. A dispute over a fine, a lien, or a covenant belongs with an Idaho attorney, and a closing question belongs with your title company as well.
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
                  An HOA is not a reason to avoid a subdivision, and it is not a detail to skim either. The homes that work out well are the ones where the documents were read before the offer, not discovered after it. If you are looking at a home in a Post Falls, Coeur d’Alene, or other North Idaho subdivision, send me the address early. We will request the statement of account, the January 1 fee disclosure, and the CC&amp;Rs while there is still time in the closing timeline to use what they say. No pressure, no pitch, just an honest conversation.
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
                Data sources: Idaho Code Title 55, Chapter 32, sections 55-3204, 55-3204A, 55-3205, 55-3206, 55-3207, 55-3211, and 55-3212, checked November 3, 2026 on the Idaho Legislature site. Statutes and subdivision governing documents change, so confirm the current documents for the specific lot with the HOA and your title company before you buy.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">HOA Document Check</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Before you close · North Idaho subdivisions</p>
<div className="space-y-3">
{[
                      { range: 'Statement of account', desc: 'Free, five business days, binding on the HOA (55-3205(1))' },
                      { range: 'Fee disclosure', desc: 'January 1 disclosure caps the year’s fees (55-3205(2))' },
                      { range: 'Transfer fee', desc: 'Only if the CC&Rs expressly authorize it (55-3205(2))' },
                      { range: 'Financial disclosure', desc: 'Updated in ten business days on request; reconciled annually (55-3205(3) and (4))' },
                      { range: 'Fine protection', desc: 'Thirty days notice and a board vote; no fine while curing in good faith (55-3206)' }
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
                    Talk Through a Subdivision Purchase
</a>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/articles/short-term-rental-rules-north-idaho-cities" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Short-Term Rental Rules in North Idaho Cities</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The public permit layer, separate from private HOA covenants</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/new-construction-north-idaho-builders-costs-process" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">New Construction in North Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Builders, costs, and process in new subdivisions</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho City Comparison</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">All five cities, head to head, the flagship comparison</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/post-falls-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Post Falls Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for Post Falls buyers</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/coeur-dalene-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Coeur d’Alene Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for Coeur d’Alene buyers</p>
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
            Looking at a Home in a Subdivision With an HOA?
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Send me the address early, and we will request the statement of account, the fee disclosure, and the CC&amp;Rs while the closing timeline still leaves room to act on them.
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
