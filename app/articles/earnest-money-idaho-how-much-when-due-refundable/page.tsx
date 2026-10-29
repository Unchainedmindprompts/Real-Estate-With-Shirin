import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/earnest-money-idaho-how-much-when-due-refundable'
const sources = [
  { label: 'Idaho Code 54-2051, Idaho Legislature: every offer to purchase must state (b) the actual form and amount of the consideration received as earnest money, and (e) a provision for division of earnest money retained as forfeited payment if the transaction does not close (checked October 29, 2026)', url: 'https://legislature.idaho.gov/statutesrules/idstat/title54/t54ch20/sect54-2051/' },
  { label: 'Idaho Code 54-2045, Idaho Legislature: a broker who receives earnest money deposits it into the broker real estate trust account on or before the banking day immediately following the day of receipt, unless the parties direct otherwise in signed writing (checked October 29, 2026)', url: 'https://legislature.idaho.gov/statutesrules/idstat/title54/t54ch20/sect54-2045/' },
  { label: 'Idaho Code 54-2041, via FindLaw: money is not entrusted to the broker when the parties instruct in writing to transfer it to a third party such as a title, escrow, or trust company, and the broker then keeps a record of the transfer (checked October 29, 2026)', url: 'https://codes.findlaw.com/id/title-54-professions-vocations-and-businesses/id-st-sect-54-2041/' },
  { label: 'Idaho REALTORS, Legal Hotline Top Questions for the Year 2022: quotes the RE-21 default section, confirms that if the seller elects the earnest money as liquidated damages it is the seller’s sole and exclusive remedy, and transaction costs are paid first', url: 'https://idahorealtors.com/wp-content/uploads/2024/04/2022-Top-Questions.pdf' },
  { label: 'Consumer Financial Protection Bureau: Mortgage closing scams, how to protect yourself and your closing funds (never follow wiring instructions in an email; verify the account name and number with trusted representatives in person or by the phone number you previously agreed to; contact your bank immediately and file with the FBI Internet Crime Complaint Center if it happens)', url: 'https://www.consumerfinance.gov/archive/blog/mortgage-closing-scams-how-protect-yourself-and-your-closing-funds/' },
  { label: 'Consumer Financial Protection Bureau: Submit documents and answer requests from the lender (lenders are generally required to verify the source of income and down payment funds, and large deposits may need documentation of the source)', url: 'https://www.consumerfinance.gov/owning-a-home/close/submit-documents-and-answer-requests-from-the-lender/' },
  { label: 'Real Estate With Shirin: North Idaho housing market update and selling guide baseline, Homes.com median sale prices over the last 12 months checked October 28, 2026 (Coeur d\'Alene $575,000; Post Falls $525,000; Hayden $600,000; Rathdrum $520,000; Sandpoint $616,050), used only for the computed earnest money examples in this article', url: 'https://www.realestatewithshirin.com/articles/selling-a-home-north-idaho-what-your-home-is-worth' },
]
export const metadata: Metadata = {
title: "Earnest Money in Idaho: How Much, When It Is Due, and When You Get It Back",
description:
    "No Idaho law sets the earnest money amount. It is negotiated in the RE-21 purchase agreement, typically 1 to 3 percent of the price in practice. When it is due, who holds it, and when it comes back, in North Idaho terms.",
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: "Earnest Money in Idaho: How Much, When It Is Due, and When You Get It Back",
description: "The amount is negotiated, not set by statute: 1 to 3 percent in practice, three business days to deliver if the RE-21 blank is left empty, who holds the deposit in Idaho, and the contract rules that decide refunds.",
url: articleUrl,
type: 'article',
publishedTime: '2026-10-29',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'What is earnest money in a home purchase?',
    a: 'Earnest money is the deposit a buyer puts down when an offer is accepted, to show the seller the buyer is serious. In Idaho it is part of the purchase price, not an extra fee on top of it. The standard Idaho purchase agreement, the RE-21, builds the price out of its parts, and the earnest money is the first part. At closing the deposit is credited inside that price structure, toward the down payment and closing costs in practice. Idaho Code 54-2051(4) requires every offer to purchase to state the actual form and amount of the consideration received as earnest money, and a provision for how earnest money retained as a forfeited payment would be divided if the transaction does not close.',
  },
  {
    q: 'How much earnest money do buyers put down?',
    a: 'No Idaho law sets the amount, a minimum, or a cap. The amount is a negotiated contract term written into the purchase agreement. The widely published typical range in practice is 1 to 3 percent of the purchase price, and that is practice, not law. Applied to this site’s published median sale prices (Homes.com, last 12 months, checked October 28, 2026), that is a computed $5,200 to $15,600 in Rathdrum on a $520,000 median, $5,250 to $15,750 in Post Falls on $525,000, $5,750 to $17,250 in Coeur d\'Alene on $575,000, $6,000 to $18,000 in Hayden on $600,000, and $6,161 to $18,482 in Sandpoint on $616,050. A competitive situation can push a buyer to offer more, and a seller can ask for more, but neither changes the rule: the signed agreement states the number.',
  },
  {
    q: 'Who holds my earnest money in Idaho?',
    a: 'The contract names the holder, and Idaho law provides two routes. Under Idaho Code 54-2045, a broker who receives earnest money deposits it into the broker real estate trust account on or before the banking day immediately following the day of receipt, unless the parties direct otherwise in signed writing. Under Idaho Code 54-2041, the parties can instead instruct in writing to transfer the money to a third party such as a title, escrow, or trust company; the money is then not entrusted to the broker, and the broker keeps a record of the transfer. The seller does not hold the deposit personally. Read your own agreement for which holder your transaction names.',
  },
  {
    q: 'When can I get my earnest money back if the deal ends?',
    a: 'It depends on how the deal ends, and your signed agreement controls. If you exit inside a live contingency, in writing, before its deadline, the deposit is protected under that contingency language. If you exit outside a contingency, the RE-21 default section applies: if the buyer defaults, the seller chooses either to accept the earnest money as liquidated damages, which is then the seller’s sole and exclusive remedy, after transaction costs are paid first and the balance is divided one half to the seller and one half to the seller’s broker, capped at the broker’s agreed commission, or to pursue any other lawful remedy, in which case the balance is held pending resolution. If the seller defaults after approving the sale, the buyer’s earnest money is returned and the seller pays the transaction costs listed in the form. No Idaho statute creates a general refund right or a standard contingency period, so the deadlines filled into your contract matter.',
  },
  {
    q: 'Does my lender need proof of the earnest money deposit?',
    a: 'In practice, yes, keep the proof. The Consumer Financial Protection Bureau notes that lenders are generally required to verify the source of a borrower’s income and down payment funds, and that a buyer who has made large deposits should be prepared to document the source of the money. Because the earnest money is credited toward the funds you need at closing, keep the cancelled check or the wire confirmation, the bank statement showing the money leaving your account, and the receipt from the holder. That paper trail lets the lender document the deposit without a last-minute scramble. Ask your own lender early what form of proof it wants, because requirements vary by loan.',
  },
  {
    q: 'How can I avoid wire fraud when sending earnest money?',
    a: 'Follow the Consumer Financial Protection Bureau mortgage closing scam guidance. Scammers send spoofed emails posing as a real estate agent, settlement agent, or other trusted person, with false instructions for wiring closing funds. Never follow instructions contained in an email. Before wiring, verify the closing instructions, including the account name and number, with your trusted representatives either in person or by using the phone number you previously agreed to, not a number in the email. Do not email financial information. If you think you have wired money to a scammer, contact your bank or wire transfer company immediately and ask for a wire recall, and file a complaint with the FBI Internet Crime Complaint Center at ic3.gov.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: "Earnest Money in Idaho: How Much, When It Is Due, and When You Get It Back",
  description: "No Idaho law sets the earnest money amount. It is negotiated in the RE-21, typically 1 to 3 percent in practice, delivered within three business days if the form blank is left empty, held by the broker trust account or a third party the contract names, and refunded or retained under the contract contingency and default language.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-10-29T00:00:00-07:00',
  dateModified: '2026-10-29T00:00:00-07:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'earnest money Idaho',
    'how much earnest money Idaho',
    'earnest money refundable Idaho',
    'who holds earnest money Idaho',
    'RE-21 earnest money',
    'earnest money North Idaho',
    'earnest money Coeur d\'Alene',
    'earnest money Post Falls Idaho',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 1950,
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
    { '@type': 'ListItem', position: 3, name: 'Earnest Money in Idaho: How Much, When It Is Due, and When You Get It Back', item: articleUrl },
  ],
}
const earnestBars = [
  { label: 'Sandpoint: $616,050 median', display: '$6,161 to $18,482', width: '100' },
  { label: 'Hayden: $600,000 median', display: '$6,000 to $18,000', width: '97' },
  { label: 'Coeur d\'Alene: $575,000 median', display: '$5,750 to $17,250', width: '93' },
  { label: 'Post Falls: $525,000 median', display: '$5,250 to $15,750', width: '85' },
  { label: 'Rathdrum: $520,000 median', display: '$5,200 to $15,600', width: '84' },
]
const earnestRows = [
  { city: 'Coeur d\'Alene', median: '$575,000', low: '$5,750', high: '$17,250' },
  { city: 'Post Falls', median: '$525,000', low: '$5,250', high: '$15,750' },
  { city: 'Hayden', median: '$600,000', low: '$6,000', high: '$18,000' },
  { city: 'Rathdrum', median: '$520,000', low: '$5,200', high: '$15,600' },
  { city: 'Sandpoint', median: '$616,050', low: '$6,161', high: '$18,482' },
]
export default function EarnestMoneyIdahoPage() {
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
<span className="text-[#5C5650]">Earnest Money in Idaho</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">10 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Earnest Money in Idaho: How Much, When It Is Due, and When You Get It Back
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            No Idaho law sets the amount. It is negotiated in your purchase agreement, typically 1 to 3 percent of the price in practice, and the contract you sign decides when it is due, who holds it, and when it comes back.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · October 29, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">No set amount</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Idaho Law Sets No Percentage</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Idaho Code 54-2051 · amount must be written, not set</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">1% to 3%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Typical Range in Practice</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Practice, not law · negotiated per contract</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">3 business days</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">RE-21 Delivery Default</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">If the delivery blank is left empty</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">Next banking day</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Broker Trust Deposit Rule</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Idaho Code 54-2045 · after the broker receives it</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Short answer: there is no Idaho law that sets the earnest money amount. It is a negotiated contract term, written into the purchase agreement itself. <a href="https://legislature.idaho.gov/statutesrules/idstat/title54/t54ch20/sect54-2051/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Idaho Code 54-2051(4)</a> requires every offer to purchase to state the actual form and amount of the consideration received as earnest money, and a provision for division of earnest money retained as a forfeited payment if the transaction does not close. The statute requires the amount to be written. It does not set it. In practice, buyers typically put down 1 to 3 percent of the purchase price, and that range is practice, not law. On the median sale prices published on this site, that is a computed $5,250 to $15,750 in Post Falls and $5,750 to $17,250 in Coeur d&apos;Alene. The rest of this guide explains when the money is due, who holds it, and the contract language that decides whether it comes back.
</p>
<p className="mb-10">Earnest money is one part of the cash you need to buy, alongside your down payment and closing costs. If you are still budgeting the full purchase, start with{' '}<a href="/articles/closing-costs-idaho-what-buyers-pay" className="text-[#C4842A] hover:underline">closing costs in Idaho</a>{' '}and{' '}<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="text-[#C4842A] hover:underline">the flagship North Idaho city comparison</a>. This article picks up at the offer: the deposit itself, in Idaho terms.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How Much: 1 to 3 Percent in Practice, Negotiated in Every Contract
</h2>
<p className="mb-6">
                Because no statute sets the amount, the negotiation does. A buyer can offer a smaller deposit to keep cash free, or a larger one to make an offer stand out. A seller can ask for more as a sign of commitment. What matters is that the final number, and its form, are stated in the signed agreement, as 54-2051 requires. Treat any guide that tells you Idaho requires a fixed percentage with caution. No such requirement was found in the Idaho Code sections checked for this article on October 29, 2026.
</p>
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Computed Earnest Money by City: 1% to 3% of the Published Median Sale Price
</h3>
<div className="space-y-4">
{earnestBars.map((bar) => (
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
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">Computed examples. Medians are Homes.com median sale prices over the last 12 months, checked October 28, 2026, as published in this site selling and market update guides. The range applied is the widely published typical practice range of 1 to 3 percent, not an Idaho legal requirement.</p>
</div>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-4 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">City</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Median sale price</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">At 1%</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">At 3%</span>
</div>
{earnestRows.map((row) => (
<div key={row.city} className="grid grid-cols-4 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.city}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.median}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.low}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.high}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Computed examples only: each city published median sale price multiplied by 1 percent and by 3 percent. Your deposit is the amount in your signed agreement, which can be below, inside, or above this practice range.</p>
</div>
<p className="mb-10">
                Earnest money is part of the price, not an extra fee. The RE-21 financial terms build the total purchase price out of its parts, and the earnest money is the first part. At closing it is credited inside that price structure, toward the down payment and closing costs in practice. You do not pay it twice. You do need it in cash, early, before the rest of your funds are due at closing, which is why the timing in the next section matters for budgeting.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                When It Is Due, and Who Holds It: Two Different Clocks
</h2>
<p className="mb-6">
                The easiest error in this subject is mixing up two separate clocks. The first clock is yours: when you, the buyer, must deliver the deposit. Under the RE-21 form, earnest money is either acknowledged as received with the offer, or the buyer will deliver it within a stated number of business days of acceptance, three if the blank is left blank. Phrase that the way the form phrases it: the standard Idaho purchase agreement gives three business days if the parties leave the blank empty. It is a form default, not a universal deadline for every contract version, and your signed agreement can state a different number.
</p>
<p className="mb-6">
                The second clock binds the broker, after receipt. Under <a href="https://legislature.idaho.gov/statutesrules/idstat/title54/t54ch20/sect54-2045/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Idaho Code 54-2045</a>, a broker who receives earnest money deposits it into the broker real estate trust account on or before the banking day immediately following the day of receipt, unless the parties direct otherwise in signed writing. That next banking day rule is about the broker deposit, not about your delivery deadline.
</p>
<p className="mb-10">
                Who holds the money is also written into the contract. The broker trust account is one route, under 54-2045. The other route is a third party: under Idaho Code 54-2041, when the parties instruct in writing to transfer the money to a third party such as a title, escrow, or trust company, the money is not entrusted to the broker, the broker is not responsible for the trust deposit, and the broker must keep a record of the transfer. That is the route by which a closing or title agency holds the deposit in many North Idaho transactions. The contract names the holder. The seller does not hold the deposit personally, and no one holder type is legally required for every deal.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                When You Get It Back: Contingencies First, Default Rules Second
</h2>
<p className="mb-6">
                Outside a default, refunds are contract-governed. Whether a buyer who exits under an inspection, financing, or title contingency gets the deposit back depends on the contingency language and the deadlines written into that buyer’s own agreement and addenda. No Idaho statute creates a general refund right or a standard contingency period. The mechanism is this: exit inside a live contingency, in writing, before its deadline, and the deposit is protected under that language. Exit outside a contingency, and the default rules below apply. The deadlines are filled in per contract, so read the dates in your agreement, not a general guide, before you assume a right to exit.
</p>
<p className="mb-6">
                If the buyer defaults, the RE-21 default section gives the seller a choice. The seller can accept the earnest money as liquidated damages, or pursue any other lawful remedy. If the seller elects the earnest money, the holder first pays transaction costs incurred, such as title, escrow, appraisal, credit report, inspection, and attorney’s fees, then pays the balance one half to the seller and one half to the seller’s broker, capped at the broker’s agreed commission. Electing the earnest money makes it the seller’s sole and exclusive remedy, and the form says it is not a penalty or forfeiture. That is why the flat claim that earnest money is simply forfeited to the seller is wrong under this form. If the seller instead elects other remedies, costs may be paid and the balance is held pending resolution. The holder does not simply hand it over.
</p>
<p className="mb-10">
                If the seller defaults after approving the sale, the direction reverses: the buyer’s earnest money is returned, and the seller pays the transaction costs listed in the form. The Idaho REALTORS Legal Hotline compilation for 2022, which quotes the same default section, confirms the liquidated damages point: taking the earnest money as liquidated damages bars other remedies. Which section number the default clause carries depends on the form edition, so this guide refers to the RE-21 default section without a number.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Proof for Your Lender, and Protecting the Wire
</h2>
<p className="mb-6">
                Keep the paper trail from the day you pay. The <a href="https://www.consumerfinance.gov/owning-a-home/close/submit-documents-and-answer-requests-from-the-lender/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Consumer Financial Protection Bureau</a> notes that lenders are generally required to verify the source of income and down payment funds, and that large deposits may need documentation. Keep the cancelled check or wire confirmation, the statement showing the money leaving your account, and the holder receipt. That set lets your lender document the earnest money as part of your funds to close, without a scramble near closing.
</p>
<p className="mb-10">
                If you send the deposit, or any closing funds, by wire, follow the CFPB mortgage closing scam guidance exactly. Scammers monitor real transactions, then send spoofed emails posing as an agent or settlement professional with false wiring instructions. Never follow instructions contained in an email. Verify the account name and number with trusted representatives in person, or by the phone number you previously agreed to, never a number supplied in the suspicious email. Do not email financial information. If it happens to you, contact your bank immediately and ask for a wire recall, and file with the FBI Internet Crime Complaint Center. The <a href="https://www.consumerfinance.gov/archive/blog/mortgage-closing-scams-how-protect-yourself-and-your-closing-funds/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">CFPB closing scam page</a> lays out those steps in full.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  What to Check in Your Own Agreement
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Amount and form:</span> the exact dollar amount and how it is paid should be stated, as Idaho Code 54-2051 requires.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Delivery date and holder:</span> the number of business days to deliver, and whether the broker trust account or a named title or escrow company holds it.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">Contingency deadlines and the forfeiture division:</span> the dates that protect the deposit, and the provision 54-2051 requires for how retained earnest money would be divided if the transaction does not close.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published October 29, 2026. The legal rules in this guide are from Idaho Code 54-2051, 54-2045, and 54-2041, checked October 29, 2026 on the Idaho Legislature site and via FindLaw for 54-2041, and from the RE-21 Purchase and Sale Agreement form text and the Idaho REALTORS Legal Hotline Top Questions compilation for 2022, as detailed in the sources above. The delivery figure of three business days is the RE-21 fill-in default if the blank is left empty, not a statutory deadline. The 1 to 3 percent range is widely published practice, labeled as practice throughout, not law. Every dollar figure tied to a city median is a computed example with both inputs named: the Homes.com median sale prices over the last 12 months checked October 28, 2026, and the 1 to 3 percent practice range. No standard inspection or financing contingency period is stated, because none was verified as a default rule. This guide is general real estate information about Idaho practice, not legal advice. Your own signed agreement controls your deposit, and a reader with a disputed deposit should consult an Idaho real estate attorney.
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
                  The earnest money questions I hear most are really one question: what happens to my money if this does not work out? The honest answer is in the agreement you sign, in the amount, the delivery date, the holder, and the contingency deadlines. I walk buyers through those four lines before an offer goes in, so the deposit is a considered decision, not a surprise. If you are preparing an offer in North Idaho, I am glad to go through your numbers and your timeline the same way. No pressure, no pitch, just an honest conversation.
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
                Data sources: Idaho Code 54-2051, 54-2045, and 54-2041; the RE-21 form text and Idaho REALTORS Legal Hotline compilation; Consumer Financial Protection Bureau guidance on lender documentation and mortgage closing scams; and Homes.com median sale prices as published on this site, checked October 28, 2026, for the computed examples. Contract forms and law change, so confirm the terms in your own signed agreement.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Earnest Money Guide</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Median price to typical deposit · 2026</p>
<div className="space-y-3">
{[
                      { range: 'Coeur d\'Alene', desc: '$575,000 median · $5,750 to $17,250 at 1% to 3%' },
                      { range: 'Post Falls', desc: '$525,000 median · $5,250 to $15,750 at 1% to 3%' },
                      { range: 'Hayden', desc: '$600,000 median · $6,000 to $18,000 at 1% to 3%' },
                      { range: 'Rathdrum', desc: '$520,000 median · $5,200 to $15,600 at 1% to 3%' },
                      { range: 'Sandpoint', desc: '$616,050 median · $6,161 to $18,482 at 1% to 3%' }
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
                    Talk Through Your Offer
</a>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/articles/closing-costs-idaho-what-buyers-pay" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Closing Costs in Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What buyers actually pay, and who pays what</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/first-time-home-buyer-north-idaho-idaho-housing-down-payment" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">First-Time Home Buyer in North Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Idaho Housing programs and down payment help</p>
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
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Coeur d&apos;Alene Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for Coeur d&apos;Alene buyers</p>
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
            Writing an Offer in North Idaho? Read the Deposit Lines First.
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Tell me the city and price range you are working with, and I will walk through the amount, delivery date, holder, and contingency deadlines in your agreement before you sign.
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
