import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/closing-costs-idaho-what-buyers-pay'
const sources = [
  { label: 'Consumer Financial Protection Bureau (Ask CFPB): what fees or charges are paid when closing on a mortgage and who pays them', url: 'https://www.consumerfinance.gov/ask-cfpb/what-fees-or-charges-are-paid-when-closing-on-a-mortgage-and-who-pays-them-en-1845/' },
  { label: 'Consumer Financial Protection Bureau: how to decide how much to spend on your down payment (add 2 to 5 percent of the home price for closing costs)', url: 'https://www.consumerfinance.gov/archive/blog/how-decide-how-much-spend-your-down-payment/' },
  { label: 'Consumer Financial Protection Bureau: review documents before closing (three business days to review the Closing Disclosure)', url: 'https://www.consumerfinance.gov/owning-a-home/close/review-documents-before-closing/' },
  { label: 'Bankrate: average closing costs by state, LodeStar Software Solutions data (Idaho average $3,497, 0.70% of the average sale price; updated March 2026)', url: 'https://www.bankrate.com/mortgages/average-closing-costs-by-state/' },
  { label: 'Old Republic Title: Real Estate Laws and Customs state by state guide, Idaho customary splits (owner’s policy seller pays, closing fees divided equally)', url: 'https://media.oldrepublictitle.com/ebook/Real-Estate-Laws-and-Customs/files/basic-html/page16.html' },
  { label: 'North Idaho Title: Professionals Guide to Title and Escrow, who pays what chart for local closings', url: 'https://www.northidahotitle.com/wp-content/uploads/2022/08/Professionals-Guide-to-Title-and-Escrow-Handbook-NIT-2021_PAGES.pdf' },
]
export const metadata: Metadata = {
title: "Closing Costs in Idaho: What Buyers Actually Pay",
description:
    "Budget 2 to 5 percent of the price for closing costs on top of your down payment (CFPB). Idaho's measured fee average is $3,497, or 0.70 percent (Bankrate, LodeStar). Here is what buyers and sellers each pay, city by city in North Idaho.",
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: "Closing Costs in Idaho: What Buyers Actually Pay (2026)",
description: "The CFPB budget rule, Idaho's $3,497 measured fee average, who pays what by Idaho custom, and computed closing cost ranges for Coeur d'Alene, Post Falls, Hayden, Rathdrum, and Sandpoint medians.",
url: articleUrl,
type: 'article',
publishedTime: '2026-10-21',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'How Much Are Closing Costs in Idaho?',
    a: 'Budget 2 to 5 percent of the home price, the budgeting rule the Consumer Financial Protection Bureau gives buyers. Applied to this site’s published median sale prices, that is a computed $10,400 to $26,000 in Rathdrum, $10,423 to $26,057 in Post Falls, $11,500 to $28,750 in Coeur d’Alene, $12,000 to $30,000 in Hayden, and $12,382 to $30,954 in Sandpoint. The measured average is smaller: Bankrate’s analysis of LodeStar data puts average Idaho purchase closing costs at $3,497, or 0.70 percent of the average sale price, counting lender, title, settlement, recording, and tax charges. That tally leaves out prepaid items, the first year of homeowners insurance, tax escrow reserves, and prepaid interest, which accounts for most of the distance between the two numbers. Your lender’s Loan Estimate is the first figure that is actually yours.',
  },
  {
    q: 'Who Pays Closing Costs in Idaho: Sellers or Buyers?',
    a: 'Both, and the contract, not a statute, has the final word. The CFPB’s starting point is that the buyer generally pays the costs of the transaction. Idaho custom then assigns specific lines, as published in Old Republic Title’s state customs guide: the seller pays the owner’s title insurance policy premium, the buyer pays the lender’s title policy premium, closing fees are divided equally, the buyer pays to record the deed and mortgage, and the seller pays to record documents that remove encumbrances. The seller also covers property taxes prorated to the closing date. North Idaho Title’s published who-pays-what chart for local closings shows the same split. Because these are customs, any line can be moved in negotiation.',
  },
  {
    q: 'How Much Are Closing Costs for Buyers in Idaho',
    a: 'For a financed purchase, plan on the CFPB’s 2 to 5 percent of the price, in cash, on top of your down payment. Where you land in the range depends on your loan: a straightforward loan with no discount points and modest prepaid deposits sits at the low end, while a purchase that prepays a full year of homeowners insurance, funds several months of tax escrow reserves, and buys the rate down with points reaches the high end. The fee portion alone is lower: the measured Idaho average for lender, title, settlement, recording, and tax charges is 0.70 percent of the price, $3,497 on the average Idaho sale (Bankrate, LodeStar data). Cash buyers pay no lender charges at all and land near that fee-only level.',
  },
  {
    q: 'Can the seller pay some of my closing costs in Idaho?',
    a: 'Yes. A seller credit toward the buyer’s closing costs is a normal negotiated term in an Idaho purchase agreement, subject to the limits your loan program sets. The CFPB adds the caution that makes the trade honest: a seller who agrees to a credit will usually require a higher price for the home to cover it, so the credit is rarely free. The lender side has a mirror version of the same trade, a lender credit that lowers your cash to close in exchange for a higher interest rate. Price both trades on your Loan Estimate before you pick one.',
  },
  {
    q: 'Do cash buyers pay closing costs in Idaho?',
    a: 'Yes, but a much shorter list. With no loan there are no lender charges, no lender-ordered appraisal, no lender’s title policy, and no prepaid interest or escrow reserves. A cash buyer still pays their half of the closing and escrow fee, which Idaho custom divides equally, the recording fees for the deed, and any inspections they order for themselves. By Idaho custom the seller still pays the owner’s title policy premium. A cash closing on a median priced North Idaho home usually costs closer to the 0.70 percent fee average in this guide than to the top of the 2 to 5 percent range.',
  },
  {
    q: 'When do I find out exactly what my closing costs are?',
    a: 'Twice, in writing. Your lender must send a Loan Estimate within three business days of your application, with estimated closing costs for that specific loan. At least three business days before closing you receive the Closing Disclosure with the final numbers. The CFPB advises using those three days to compare the Closing Disclosure against the Loan Estimate line by line: by law, some fees cannot increase at all, and another group is limited to a 10 percent increase in total. If a number moved more than the rules allow, ask before you sign, not after.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: "Closing Costs in Idaho: What Buyers Actually Pay",
  description: "What buyers and sellers each pay at closing in Idaho: the CFPB 2 to 5 percent budgeting rule, the measured Idaho fee average of $3,497 (0.70 percent, Bankrate analysis of LodeStar data), Idaho's customary split of title and escrow charges, and computed ranges on North Idaho's published median prices.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-10-21T00:00:00-07:00',
  dateModified: '2026-10-21T00:00:00-07:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'closing costs in Idaho',
    'how much are closing costs in Idaho',
    'who pays closing costs in Idaho',
    'buyer closing costs Idaho',
    'closing costs Coeur d’Alene',
    'closing costs Post Falls Idaho',
    'cash to close North Idaho',
    'Idaho title insurance who pays',
    'seller concessions Idaho',
    'average closing costs Idaho',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 1850,
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
    { '@type': 'Organization', name: 'Consumer Financial Protection Bureau', sameAs: 'https://en.wikipedia.org/wiki/Consumer_Financial_Protection_Bureau' },
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
    { '@type': 'ListItem', position: 3, name: 'Closing Costs in Idaho: What Buyers Actually Pay', item: articleUrl },
  ],
}
const budgetBars = [
  { label: 'Sandpoint: $619,080 median', display: '$12,382 to $30,954', width: '100' },
  { label: 'Hayden: $600,000 median', display: '$12,000 to $30,000', width: '97' },
  { label: 'Coeur d’Alene: $575,000 median', display: '$11,500 to $28,750', width: '93' },
  { label: 'Post Falls: $521,138 median', display: '$10,423 to $26,057', width: '84' },
  { label: 'Rathdrum: $520,000 median', display: '$10,400 to $26,000', width: '84' },
]
const closingRows = [
  { city: 'Coeur d’Alene', median: '$575,000 (Jan 2026)', fees: '$4,025', budget: '$11,500 to $28,750' },
  { city: 'Post Falls', median: '$521,138 (Feb 2026)', fees: '$3,648', budget: '$10,423 to $26,057' },
  { city: 'Hayden', median: '$600,000 (last 12 months)', fees: '$4,200', budget: '$12,000 to $30,000' },
  { city: 'Rathdrum', median: '$520,000 (last 12 months)', fees: '$3,640', budget: '$10,400 to $26,000' },
  { city: 'Sandpoint', median: '$619,080 (last 12 months)', fees: '$4,334', budget: '$12,382 to $30,954' },
]
export default function ClosingCostsIdahoPage() {
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
<span className="text-[#5C5650]">Closing Costs in Idaho: What Buyers Actually Pay</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">9 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Closing Costs in Idaho: What Buyers Actually Pay
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            The price gets the attention, but the closing bill decides what you need in the bank. Idaho’s fees are among the lowest in the country. The full cash a financed buyer should budget is a bigger number, and the honest answer holds both.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · October 21, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
{/* Key Stats Bar */}
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">2% to 5%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Buyer Closing Cost Budget</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">CFPB · share of the home price</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$3,497</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Average Idaho Closing Costs</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Bankrate · LodeStar data · incl. taxes</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">0.70%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Idaho Fee Average as Share of Price</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Low end of the state table</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$0</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Idaho Real Estate Transfer Tax</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">No state transfer or mortgage tax</p>
</div>
</div>
</div>
</section>
{/* Article + Sidebar */}
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Short answer: budget 2 to 5 percent of the purchase price for closing costs, in cash, on top of your down payment. That is the budgeting rule the <a href="https://www.consumerfinance.gov/archive/blog/how-decide-how-much-spend-your-down-payment/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Consumer Financial Protection Bureau</a> gives home buyers when they are deciding how much to put down. Applied to the median sale prices published in this site’s city guides, it produces a computed $10,400 to $26,000 in Rathdrum, $10,423 to $26,057 in Post Falls, $11,500 to $28,750 in Coeur d’Alene, $12,000 to $30,000 in Hayden, and $12,382 to $30,954 in Sandpoint. Every one of those is a computed estimate, the published median multiplied by the CFPB range, and the table below shows the arithmetic city by city. There is also a second number you will see quoted for Idaho, an average of $3,497, and it is not a contradiction. It is measuring something narrower, and knowing the difference is what keeps the closing statement from surprising you.
</p>
<p className="mb-10">Closing costs ride on top of the price decision, so if you are still comparing places, start with the{' '}<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="text-[#C4842A] hover:underline">North Idaho city comparison</a>{' '}and the{' '}<a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">complete North Idaho relocation guide</a>. This article picks up where they stop: the money that changes hands at the end, who pays which part of it in Idaho, and how to bring your share down before you are committed.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Two Numbers, and Why Both Are True
</h2>
<p className="mb-6">
                The smaller number is a measurement. Bankrate’s analysis of closing cost data from <a href="https://www.bankrate.com/mortgages/average-closing-costs-by-state/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">LodeStar Software Solutions</a> puts the average Idaho purchase closing costs at $3,497, including recording fees and taxes, which works out to 0.70 percent of the average Idaho sale price. The same study puts the national average at $4,661. Idaho sits at the low end of the state table for two structural reasons: Idaho charges no real estate transfer tax and no mortgage tax, which are major line items in high cost states, and its title and settlement charges are comparatively modest. What that $3,497 counts is the fee layer of the transaction: lender charges, title search and insurance premiums, settlement and escrow charges, recording, and taxes.
</p>
<p className="mb-8">
                What the fee tally leaves out is the prepaid layer, and the prepaid layer is real money at closing. The <a href="https://www.consumerfinance.gov/ask-cfpb/what-fees-or-charges-are-paid-when-closing-on-a-mortgage-and-who-pays-them-en-1845/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">CFPB’s own list of closing charges</a> includes prepaid expenses: the first year of homeowners insurance, paid at closing; property tax and insurance escrow deposits, the reserves your lender holds so those bills get paid on time; and prepaid interest, which covers the days between your closing and your first regular payment. Add the prepaid layer, and any discount points you choose to buy, to the fee tally on a median priced North Idaho home, and the total lands inside the CFPB’s 2 to 5 percent budgeting range. The fees are low in Idaho. The cash to close is still a five figure plan, and it is better made in October than discovered at the signing table.
</p>
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Computed Buyer Budget by City: 2% to 5% of the Published Median Sale Price
</h3>
<div className="space-y-4">
{budgetBars.map((bar) => (
<div key={bar.label}>
<div className="flex justify-between mb-1">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{bar.label}</span>
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{bar.display}</span>
</div>
<div className="w-full bg-[#E8DDD0] h-7 rounded-none overflow-hidden">
<div
className="h-7 rounded-none"
style={{ width: `${bar.width}%`, backgroundColor: '#C4842A' }}
/>
</div>
</div>
                  ))}
</div>
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">Computed estimates. Medians are this site’s published figures: Coeur d’Alene as of January 2026, Post Falls as of February 2026, Hayden, Rathdrum, and Sandpoint over the last 12 months (Homes.com), each as published in its city cost guide. The range applied is the CFPB’s 2 to 5 percent budgeting rule, not an Idaho specific statistic.</p>
</div>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-4 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">City</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Median sale price</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Fees at the 0.70% Idaho average</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Full budget at 2% to 5%</span>
</div>
{closingRows.map((row) => (
<div key={row.city} className="grid grid-cols-4 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.city}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.median}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.fees}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.budget}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Computed estimates: each city’s published median sale price multiplied by LodeStar’s Idaho fee average of 0.70 percent, and by the CFPB’s 2 to 5 percent range. The 0.70 percent column covers fees only, lender, title, settlement, recording, and tax charges, and excludes prepaid deposits, which is why it is so much lower than the full budget column.</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Who Pays What in an Idaho Closing
</h2>
<p className="mb-6">
                Idaho closings run through title companies, and no Idaho statute fixes who pays each charge. The CFPB’s starting point is plain: when you are buying a home, you generally pay the costs of the transaction, unless the contract or state law moves some of them to the seller. What fills in the details locally is custom, and for Idaho the custom is published. <a href="https://media.oldrepublictitle.com/ebook/Real-Estate-Laws-and-Customs/files/basic-html/page16.html" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Old Republic Title’s state by state guide to real estate laws and customs</a> lists the Idaho splits, and <a href="https://www.northidahotitle.com/wp-content/uploads/2022/08/Professionals-Guide-to-Title-and-Escrow-Handbook-NIT-2021_PAGES.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">North Idaho Title’s who-pays-what chart</a> for closings here shows the same division. Customs are defaults, not entitlements: your purchase agreement can move almost any line, and in a negotiated deal, some lines usually move.
</p>
<div className="my-8 grid md:grid-cols-2 gap-4">
<div className="p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">
                    The buyer typically pays
</h3>
<ul className="space-y-2">
{[
'Loan charges: origination, processing, underwriting, credit report',
'The appraisal fee',
'The lender’s title insurance policy (Idaho custom)',
'Prepaid interest, from closing day to the first payment',
'The first year of homeowners insurance, paid at closing',
'Property tax and insurance escrow deposits (reserves)',
'Recording fees for the deed and the mortgage',
'Half of the closing and escrow fee (Idaho custom)',
                    ].map((item) => (
<li key={item} className="flex items-start gap-2">
<span className="text-[#C4842A] font-semibold mt-0.5 flex-shrink-0">✓</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{item}</span>
</li>
                    ))}
</ul>
</div>
<div className="p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">
                    The seller typically pays in Idaho
</h3>
<ul className="space-y-2">
{[
'The owner’s title insurance policy (Idaho custom)',
'Property taxes prorated to the closing date',
'Recording documents that remove encumbrances and clear title',
'Half of the closing and escrow fee (Idaho custom)',
'Agent compensation, in the amounts the listing and purchase agreements set',
'Any seller credit toward the buyer’s costs that the contract promises',
                    ].map((item) => (
<li key={item} className="flex items-start gap-2">
<span className="text-[#C4842A] font-semibold mt-0.5 flex-shrink-0">✓</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{item}</span>
</li>
                    ))}
</ul>
</div>
</div>
<p className="mb-10">
                Two Idaho specifics are worth holding onto. First, the owner’s title policy, the one time premium that protects your ownership, is customarily the seller’s charge here, which is not true in every state; the policy you pay for as a buyer is the smaller lender’s policy, priced on the loan rather than the home. Second, agent compensation is negotiated and written into the agreements, not fixed by custom or by this table. How that negotiation works since the 2024 settlement is covered in our guide to{' '}<a href="/articles/buying-home-without-agent-nar-settlement-north-idaho" className="text-[#C4842A] hover:underline">buying a home without an agent</a>.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Cash to Close: The Number That Actually Matters
</h2>
<p className="mb-6">
                Closing costs are not your down payment, and the two are budgeted out of the same savings, which is exactly why the CFPB’s down payment guidance tells buyers to add the 2 to 5 percent on top before deciding what they can put down. The figure your lender calls cash to close is the sum that has to be in your account on closing day: down payment, plus closing costs, minus the earnest money you already deposited and minus any seller or lender credits in the deal. Run that number early, at the price you actually expect to pay, and the closing statement becomes a confirmation instead of a surprise.
</p>
<p className="mb-6">
                You also get the real figures twice, in writing, before you sign. Your lender must send a Loan Estimate within three business days of your application, with estimated closing costs for that specific loan. At least three business days before closing, the Closing Disclosure arrives with the final numbers. The CFPB advises using those three days to compare the two documents line by line, because the rules limit how far the final figures can drift from the estimate: some fees cannot increase at all, and another group is capped at a 10 percent increase in total. If a charge moved further than that, the time to raise it is before the signing appointment, while it can still be corrected.
</p>
<p className="mb-10">
                Cash buyers skip most of this section by definition. With no loan there are no lender charges, no lender-ordered appraisal, no lender’s title policy, and no prepaid interest or escrow reserves. What remains is the buyer’s half of the escrow fee, recording for the deed, and any inspections the buyer orders. On a median priced North Idaho home, that puts a cash closing near the fee-only column of the table above, which is one reason so many relocation purchases here are made in cash.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How Buyers Bring the Number Down
</h2>
<p className="mb-6">
                Start with the lender, because that is where most of the shoppable money is. The CFPB’s home loan guidance is built around comparing Loan Estimates from more than one lender: origination and processing charges differ, and the same loan can carry meaningfully different fees. Title and settlement services can also be shopped rather than simply accepted; the CFPB’s closing checklist treats choosing those providers as one of your decisions, not the lender’s. Fees set by the county for recording do not move. Almost everything with a company’s name on it can at least be quoted twice.
</p>
<p className="mb-6">
                Seller credits and lender credits are the two negotiated levers, and both are trades rather than gifts. A seller credit moves part of your closing bill to the seller, and the CFPB notes the usual price of that concession: the seller will generally require a higher price for the home to cover it. A lender credit runs the other direction, lowering your cash to close in exchange for a higher interest rate, which you then pay every month for as long as you keep the loan. Neither is automatically wrong. On a home you expect to hold for two years, a lender credit can be the cheaper trade; on a thirty year hold, it usually is not. Run both versions of the Loan Estimate and compare the totals over your real time horizon.
</p>
<p className="mb-10">
                Two smaller levers are worth knowing. Discount points raise your closing costs on purpose, paying interest up front to buy the rate down; they belong in the comparison, not in the surprise column, and they only pay off if you keep the loan past the break even point. And prepaid interest is arithmetic, not a fee: it covers only the days between your closing date and the end of that month, so a closing late in the month opens with a smaller prepaid line than one on the fifth.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published October 21, 2026. City medians are this site’s published figures, from the Coeur d’Alene, Post Falls, Hayden, Rathdrum, and Sandpoint cost guides. The 2 to 5 percent budgeting range, the list of closing charges, and the disclosure timing rules are Consumer Financial Protection Bureau guidance (Ask CFPB page last reviewed September 2024). The Idaho fee average of $3,497 and 0.70 percent is Bankrate’s analysis of LodeStar Software Solutions data, page updated March 2026, checked October 21, 2026; that tally includes recording and taxes and excludes prepaid escrow deposits and discount points. The customary Idaho split is from Old Republic Title’s state customs guide, corroborated by North Idaho Title’s local who-pays-what chart; customs are defaults and the purchase contract controls. Every dollar figure tied to a city median in this guide is a computed estimate, labeled as such. This guide is general real estate information, not lending, tax, or legal advice.
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
                  I made this move myself, from Bend, Oregon to Northern Idaho, and the closing statement is the page nobody walked me through before my own purchase: the price was the price, and then there was another five figures of fees and prepaid items that had to come from somewhere. None of it is mysterious once someone lays it out early, which is what this guide is for. If you are running the numbers on a North Idaho move, I am glad to walk your price range through the same arithmetic with your loan type and your down payment, so your cash to close is a plan instead of a shock. No pressure, no pitch, just an honest conversation.
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
                Data sources: Consumer Financial Protection Bureau guidance on closing costs, down payment budgeting, and Closing Disclosure review; Bankrate’s average closing costs by state (LodeStar Software Solutions data); Old Republic Title’s state customs guide and North Idaho Title’s who-pays-what chart for the customary Idaho split; and this site’s five city cost guides for the median sale prices. Market conditions and lender pricing change, so contact Shirin for the figures that apply to your price range and loan.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Closing Cost Guide</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Median price → buyer budget · 2026</p>
<div className="space-y-3">
{[
                      { range: 'Coeur d’Alene', desc: '$575,000 median (Jan 2026) · budget $11,500 to $28,750' },
                      { range: 'Post Falls', desc: '$521,138 median (Feb 2026) · budget $10,423 to $26,057' },
                      { range: 'Hayden', desc: '$600,000 median (last 12 months) · budget $12,000 to $30,000' },
                      { range: 'Rathdrum', desc: '$520,000 median (last 12 months) · budget $10,400 to $26,000' },
                      { range: 'Sandpoint', desc: '$619,080 median (last 12 months) · budget $12,382 to $30,954' }
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
                    Talk Through Your Numbers
</a>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho City Comparison</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">All five cities, head to head, medians included</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/how-much-do-homes-cost-coeur-dalene-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Coeur d’Alene Home Prices 2026</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What each budget buys in Coeur d’Alene</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/how-much-do-homes-cost-post-falls-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Post Falls Home Prices 2026</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What each budget buys in Post Falls</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/buying-home-without-agent-nar-settlement-north-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Buying Without an Agent: The NAR Settlement</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">How agent compensation works now</p>
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
            Buying in North Idaho? Let’s Run Your Numbers First.
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Tell me the city and the price range you are working with, and I will show you what the closing bill and the cash to close look like before you write an offer, not after.
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
