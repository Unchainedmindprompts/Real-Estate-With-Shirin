import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/appeal-property-tax-assessment-idaho-kootenai-bonner'
const sources = [
  { label: 'Idaho Legislature, Idaho Code 63-501A (checked November 1, 2026): a taxpayer may appeal an assessment in writing on a form provided by the county board of equalization or assessor, identifying the taxpayer, the property, and the reason; an appeal on the property roll must be filed on or before the end of the county normal business hours on the fourth Monday of June, on the subsequent roll by the fourth Monday of November, and on the missed roll before the board adjourns at its January meeting', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title63/T63CH5/SECT63-501A/' },
  { label: 'Idaho Legislature, Idaho Code 63-308, current text effective January 1, 2024 (checked November 1, 2026): the valuation assessment notice must be delivered or mailed no later than the first Monday in June for the property roll, no later than the third Monday in November for the subsequent roll, and no later than the first Monday in January for the missed roll; the notice must state the market value for assessment purposes and the right to appeal to the county board of equalization', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title63/T63CH3/SECT63-308/' },
  { label: 'Idaho Legislature, Idaho Code 63-501 (checked November 1, 2026): the county commissioners convene as a board of equalization, hear appeals received by the end of business on the fourth Monday of June, and must complete their business and adjourn on the second Monday of July for the property roll', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title63/T63CH5/SECT63-501/' },
  { label: 'Idaho Legislature, Idaho Code 63-511, as amended in 2025 by chapter 202 (checked November 1, 2026): within thirty days after mailing of notice of a board of equalization decision, or pronouncement of a decision at a hearing, an appeal may be taken to the board of tax appeals or, in the same period, to the district court for the county where the property is located; notice of appeal is filed with the county auditor; nothing in the section suspends payment of property taxes pending appeal', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title63/T63CH5/SECT63-511/' },
  { label: 'Idaho Board of Tax Appeals (checked November 1, 2026): to appeal a property tax assessment you must first appeal to your local county board of equalization, with the form filed by the fourth Monday of June under 63-501A; a board decision is then appealable to the Board of Tax Appeals or the district court within thirty days under 63-511; a notice of appeal to the Board of Tax Appeals must be filed with the county auditor, not directly with the Board, and a separate notice is required for each parcel', url: 'https://bta.idaho.gov/' },
  { label: 'Kootenai County Assessor, Understanding Your Assessed Value and appeal instructions (checked November 1, 2026): the assessor must assess all property at market value as of January 1 each year; only sales that closed prior to January 1 of the current year can be considered; the assessor office phone is (208) 446-1500; a formal appeal is made only by submitting a completed appeal form by the fourth Monday of June to the Office of the County Commissioners; emailed appeal forms will not be accepted; documents should be provided a minimum of three business days before the hearing; the board role under Idaho Code 63-502 is limited to assuring market value was found, and appeals should not be based on the amount of the tax bill or ability to pay', url: 'https://www.kcgov.us/DocumentCenter/View/25940/Property-Assessment-Appeal-Instructions-PDF' },
  { label: 'Kootenai County, Appeal Process page (checked November 1, 2026): the only way to file an appeal is to contact the County Commissioners Office at (208) 446-1600 and submit the Commissioners Appeal Form before the fourth Monday of June; contacting the Assessor Office is not an actual step in filing an appeal, does not preserve the right to appeal, and does not start the appeal process; the assessor office can be reached at (208) 446-1500 or kcassr@kcgov.us for correcting inaccurate property information', url: 'https://www.kcgov.us/1064/Appeal-Process' },
  { label: 'Bonner County, Assessment Notices and Appeals (checked November 1, 2026): primary roll notices are sent no later than the first Monday of June; the appeal addresses market value only and is not a forum to protest property taxes; appeal forms are available online or from the Bonner County Commissioner Office, 1500 Hwy 2, Suite 308, Sandpoint, ID 83864; completed forms must be filed with that office on or before the fourth Monday of June at 5:00 p.m., and the office schedules the hearing; the assessor value is presumed correct and the taxpayer must show by clear and convincing evidence that they are entitled to relief; assessor phone 208-265-1440', url: 'https://www.bonnercountyid.gov/AssessmentNoticesandAppeals' },
  { label: 'Bonner County Board of Equalization, Property Assessment Appeal Form, 2025 form (checked November 1, 2026): one form per parcel; each appeal must include the appeal form and a copy of the assessment notice; the form must be received in the Bonner County Commissioner Office, 1500 Highway 2, Suite 308, Sandpoint, ID 83864, phone (208) 265-1438, by 5:00 p.m. on that year fourth Monday of June; appeals will not be accepted by fax; by law the board may only consider current year assessed property values, not taxes', url: 'https://www.bonnercountyid.gov/media/Commissioners/Property Assessment/2025 Appeal Form/2025_BOE Appeal Form.pdf' },
  { label: 'Real Estate With Shirin, North Idaho property taxes county comparison: the site published explanation of how assessed value, the homeowner exemption, and county levies fit together, used for consistency with this guide', url: 'https://www.realestatewithshirin.com/articles/north-idaho-property-taxes-county-comparison' },
  { label: 'Real Estate With Shirin, Idaho homestead exemption guide: the homeowner exemption under 63-602G is separate from an assessment appeal; an appeal challenges market value, not the exemption amount', url: 'https://www.realestatewithshirin.com/articles/idaho-homestead-exemption-two-exemptions-explained' },
]
export const metadata: Metadata = {
title: 'How to Appeal Your Property Tax Assessment in Idaho',
description:
    'In Idaho you appeal the value on your assessment notice, not your tax bill. The notice arrives by the first Monday in June and a written appeal on the county form must be filed with the Board of Equalization by the end of business on the fourth Monday in June, June 28, 2027 for the next cycle. Kootenai and Bonner County steps, evidence, and the 30 day next level.',
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: 'How to Appeal Your Property Tax Assessment in Idaho',
description: 'Appeal the January 1 market value, not the tax bill. File the county Board of Equalization form by the fourth Monday in June, June 28, 2027 next. Talking to the assessor first helps, but it does not file an appeal.',
url: articleUrl,
type: 'article',
publishedTime: '2026-11-01',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'Can I appeal my Idaho property tax assessment if I believe it is too high?',
    a: 'Yes, if you can show the assessed value is not the market value of your property as of January 1 of the tax year. Under Idaho Code 63-501A you appeal the assessment to the county board of equalization, in writing on the county form, by the end of business on the fourth Monday of June. Under Idaho Code 63-502 the board can only decide whether the assessor found market value. You do not appeal the amount of your tax bill, the tax rate, or your ability to pay, and those are not grounds the board can act on.',
  },
  {
    q: 'How can I appeal my property tax assessment in Idaho?',
    a: 'First, talk to your county assessor informally and check the county record for factual errors, because many issues are corrected that way. Second, if the value is still wrong, file the county Board of Equalization appeal form with the County Commissioners office by the end of business on the fourth Monday of June, with comparable sales that closed before January 1 and any record errors documented. In Kootenai County that filing goes to the Commissioners office, phone (208) 446-1600, and emailed forms are not accepted. In Bonner County it goes to the Commissioner Office at 1500 Hwy 2, Suite 308, Sandpoint, by 5:00 p.m. that day, one form per parcel with a copy of your assessment notice, and faxed forms are not accepted. If the board rules against you, you have thirty days from mailing or pronouncement of its decision to appeal further, filed with the county auditor.',
  },
  {
    q: 'What is the deadline to appeal a property tax assessment in Idaho?',
    a: 'For the main property roll, the deadline is the end of the county normal business hours on the fourth Monday of June, under Idaho Code 63-501A. For the next cycle that date is Monday, June 28, 2027. Bonner County states its close as 5:00 p.m. that day. For the subsequent roll the deadline is the fourth Monday of November, and for the missed roll it is before the board of equalization adjourns at its January meeting. The thirty day clock people often hear about belongs only to the next level, appealing the board decision under Idaho Code 63-511. It is not the deadline for the first appeal.',
  },
  {
    q: 'Does talking to the assessor count as filing an appeal?',
    a: 'No. Talking to the assessor is an informal review, and it is worth doing first because errors in square footage, condition, or features can be corrected without a hearing. But Kootenai County states it plainly on its Appeal Process page, checked November 1, 2026: contacting the Assessor Office is not an actual step in filing an appeal, only contacting the Assessor Office does not preserve your right to appeal, and it does not actually start the appeal process. Your appeal exists only when the county form is filed with the Commissioners office by the fourth Monday of June.',
  },
  {
    q: 'What evidence do I need to appeal my property tax assessment in Idaho?',
    a: 'You need market evidence that the assessed value is not market value as of January 1. The strongest evidence is comparable sales that closed before January 1 of the assessment year, because both Kootenai and Bonner County state that sales after that date cannot be considered for the current year value. Factual errors in the county own record also matter, such as wrong square footage, condition, or features. A comparative market analysis or an independent appraisal can help organize that evidence. The assessor value is presumed correct, so the burden of proof is on you as the owner. Bonner County states the standard as clear and convincing evidence that you are entitled to the relief claimed.',
  },
  {
    q: 'Do I still have to pay my taxes while I appeal?',
    a: 'Yes. Idaho Code 63-511, subsection (1), checked November 1, 2026, says nothing in that section shall be construed so as to suspend the payment of property taxes pending an appeal of a board of equalization decision. Filing an appeal at the county level, or taking the board decision to the Idaho Board of Tax Appeals or district court, does not pause your tax due dates. Pay on the normal schedule while the appeal runs.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: 'How to Appeal Your Property Tax Assessment in Idaho',
  description: 'Idaho owners appeal the January 1 market value on their assessment notice, not their tax bill, by filing the county Board of Equalization form by the end of business on the fourth Monday of June, June 28, 2027 for the next cycle, with pre January 1 comparable sales as evidence, and may appeal a board decision within thirty days through the county auditor to the Board of Tax Appeals or district court.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-11-01T00:00:00-07:00',
  dateModified: '2026-11-01T00:00:00-07:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'appeal property tax assessment Idaho',
    'Can I appeal my Idaho property tax assessment if I believe it is too high',
    'How can I appeal my property tax assessment in Idaho',
    'Idaho Code 63-501A',
    'Board of Equalization Kootenai County',
    'Board of Equalization Bonner County',
    'property tax appeal deadline Idaho fourth Monday June',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 2400,
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
    { '@type': 'Organization', name: 'Idaho State Tax Commission', sameAs: 'https://en.wikipedia.org/wiki/Idaho_State_Tax_Commission' },
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
    { '@type': 'ListItem', position: 3, name: 'How to Appeal Your Property Tax Assessment in Idaho', item: articleUrl },
  ],
}
const countyRows = [
  { point: 'Where the formal appeal is filed', kootenai: 'Office of the County Commissioners, Commissioners phone (208) 446-1600', bonner: 'Bonner County Commissioner Office, 1500 Hwy 2, Suite 308, Sandpoint, ID 83864, phone (208) 265-1438' },
  { point: 'Assessor contact for informal review', kootenai: 'Assessor (208) 446-1500, email kcassr@kcgov.us', bonner: 'Assessor 208-265-1440' },
  { point: 'Filing close for the main roll', kootenai: 'End of business on the fourth Monday of June', bonner: '5:00 p.m. on the fourth Monday of June' },
  { point: 'Filing method that does not count', kootenai: 'Emailed appeal forms will not be accepted', bonner: 'Appeals will not be accepted by fax' },
  { point: 'What to include', kootenai: 'Completed county form stating the reason factually, with market documentation; evidence at least three business days before the hearing', bonner: 'One form per parcel, with a copy of the assessment notice attached' },
  { point: 'Burden as the county states it', kootenai: 'Assessor value is presumed correct; burden is on the owner to prove it is incorrect, under 63-502', bonner: 'Assessor value is presumed correct; owner must show by clear and convincing evidence they are entitled to relief' },
]
const timelineRows = [
  { step: 'January 1', desc: 'Valuation date. Property is assessed at market value as of January 1 of the tax year, so only sales that closed before January 1 count for that year.' },
  { step: 'By the first Monday in June', desc: 'Assessment notice. For the next cycle that is Monday, June 7, 2027. The notice states the market value for assessment purposes and the right to appeal, under 63-308.' },
  { step: 'By the fourth Monday in June', desc: 'Appeal deadline. File the written county form with the Commissioners office by the end of business. For the next cycle that is Monday, June 28, 2027, under 63-501A. Bonner County closes at 5:00 p.m.' },
  { step: 'By the second Monday in July', desc: 'Board finishes. The board of equalization must complete its business and adjourn, under 63-501. For the next cycle that is Monday, July 12, 2027.' },
  { step: 'Within 30 days of the board decision', desc: 'Next level, if needed. Appeal to the Idaho Board of Tax Appeals or to district court, filed with the county auditor, under 63-511. Taxes remain due while it runs.' },
]
export default function AppealPropertyTaxAssessmentPage() {
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
<span className="text-[#5C5650]">Property Tax Assessment Appeal</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">12 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            How to Appeal Your Property Tax Assessment in Idaho
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            In Idaho you appeal the value on your assessment notice, not your tax bill, and the window is short. The notice arrives by the first Monday in June, and the written appeal must be filed by the end of business on the fourth Monday in June. For the next cycle that deadline is Monday, June 28, 2027.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · November 1, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">June 28, 2027</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Next Appeal Deadline</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Fourth Monday of June, end of business, 63-501A</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">January 1</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Valuation Date</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Market value as of January 1 of the tax year</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">Value, not taxes</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">What the Board Can Decide</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Board is limited to market value, 63-502</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">30 days</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">To Appeal the Board Decision</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Filed with the county auditor, 63-511</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Short answer: yes, you can appeal, and this is how the clock works. Idaho property is assessed at market value as of January 1 of the tax year. Your assessment notice must be delivered or mailed no later than the first Monday in June, under Idaho Code 63-308, checked November 1, 2026. A written appeal on the county form, filed with the county board of equalization by the end of business on the fourth Monday of June, under Idaho Code 63-501A, is the only filing that preserves your right. For the next cycle, the notice date is Monday, June 7, 2027 and the appeal deadline is Monday, June 28, 2027. The 2026 window, with a deadline of June 22, 2026, is already closed, so this guide is preparation for June 2027. Talking to the assessor first is smart and often fixes errors, but it does not file an appeal.
</p>
<p className="mb-10">This guide sits alongside{' '}<a href="/articles/north-idaho-property-taxes-county-comparison" className="text-[#C4842A] hover:underline">the North Idaho property taxes county comparison</a>{' '}and{' '}<a href="/articles/idaho-homestead-exemption-two-exemptions-explained" className="text-[#C4842A] hover:underline">the homestead exemption guide</a>, because the three questions arrive together every June. The comparison explains how value becomes a tax bill. The exemption guide explains the separate homeowner exemption. This one covers only the appeal: what you challenge, when you file, what evidence counts, and how Kootenai and Bonner County each handle the filing.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Whole Process on One Timeline
</h2>
<p className="mb-6">
                Most missed appeals are missed deadlines, not weak evidence. Read the timeline first, then work backward from June 28, 2027 to gather sales and check the county record while there is still time.
</p>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-2 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">When</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">What happens</span>
</div>
{timelineRows.map((row) => (
<div key={row.step} className="grid grid-cols-2 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.step}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.desc}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Dates checked November 1, 2026 against Idaho Code 63-308, 63-501, 63-501A, and 63-511. The June and July 2027 calendar dates are the Mondays those statutes name for 2027. For other rolls: a subsequent roll appeal is due by the fourth Monday of November, and a missed roll appeal is due before the board adjourns at its January meeting, both under 63-501A. The subsequent roll notice itself is due no later than the third Monday in November under the current text of 63-308.</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                You Appeal Value, Not Taxes
</h2>
<p className="mb-6">
                This distinction decides whether a hearing helps at all. Idaho Code 63-502 confines the board of equalization to assuring that the assessor found market value for assessment purposes. Kootenai County states it in its appeal instructions, checked November 1, 2026: appeals should not be requested based on the amount of your tax bill or because you cannot afford to pay your property taxes, and the appeal hearing is not a forum to protest property taxes. Bonner County states the same rule on its Assessment Notices and Appeals page: the appeal will only address the market value of your property, and an appeal to the board is not a forum to protest property taxes. Its appeal form adds, in capital letters in the original, that the board may only consider current year assessed property values, not taxes.
</p>
<p className="mb-6">
                Your assessment notice is also not a bill. Bonner County makes that point on the same page: the property tax bill is calculated after taxing districts set their budgets in the fall. A higher value does not translate in a simple line to a specific tax increase, because levies are set later. The board cannot change a levy, grant hardship relief in this hearing, or apply a percentage cap on increases, because Idaho has no such cap to cite in this process. The only question before the board is narrow and factual: was this property worth what the assessor says it was worth on January 1?
</p>
<p className="mb-10">
                That framing changes how you prepare. The sentence that belongs in an appeal is: my assessed value is above what the home would have sold for on January 1, and here are the sales that closed before January 1 that show it. The sentence that does not belong is: my taxes went up too much this year. Both may feel true. Only the first one is a ground the board can act on.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Step One: Talk to the Assessor, and Know What That Step Is Not
</h2>
<p className="mb-6">
                Both counties encourage an informal conversation first, and for good reason. The appraiser assigned to your property will review evidence you provide, and factual errors in the county record, such as wrong square footage, condition, or features, can be corrected without a hearing. Kootenai County lists the kinds of market information its appraisers consider: sales of similar properties, a comparative market analysis, independent appraisals done for a sale or refinance, unique characteristics of the property, and deferred maintenance. Bonner County lists a similar set, including a realtor comparative market analysis, independent appraisals, and repair estimates.
</p>
<p className="mb-6">
                Now the warning, and it is the sharpest practical point in this guide. Kootenai County states it expressly on its Appeal Process page, checked November 1, 2026: contacting the Assessor Office is not an actual step in filing an appeal. Only contacting the Assessor Office does not preserve your right to appeal, and it does not actually start the appeal process. The only way to file is to submit the Commissioners Appeal Form to the Commissioners office before the deadline.
</p>
<p className="mb-10">
                So use the informal step inside the same June window, not instead of the formal one. If the assessor conversation is still open as the fourth Monday approaches and no correction has been issued in writing, file the formal appeal anyway to protect the right, and let the informal work continue alongside it.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Step Two: File the County Form, in the Right Office, the Right Way
</h2>
<p className="mb-6">
                Idaho Code 63-501A sets the form of the filing for every county: the appeal must be in writing, on a form provided by the county board of equalization or the assessor, and it must identify the taxpayer, the property, and the reason for the appeal. The board may consider an appeal only if it is timely filed. That last sentence is why method matters as much as intent. A reader who sends the form the wrong way has not filed.
</p>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-3 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Point to compare</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Kootenai County</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Bonner County</span>
</div>
{countyRows.map((row) => (
<div key={row.point} className="grid grid-cols-3 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.point}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.kootenai}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.bonner}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">County mechanics checked November 1, 2026 against Kootenai County appeal instructions and Appeal Process page, and Bonner County Assessment Notices and Appeals page and its 2025 Board of Equalization appeal form. Forms are reissued each year, so use the current year form and confirm the office hours for the filing week.</p>
</div>
<p className="mb-6">
                In Kootenai County, the county commissioners serve as the board of equalization. File the completed form with the Office of the County Commissioners by the fourth Monday of June. The Commissioners office phone is (208) 446-1600 and the Assessor office phone is (208) 446-1500, with email kcassr@kcgov.us for assessor questions. Emailed appeal forms will not be accepted. Any documents you want the board to consider should be provided a minimum of three business days before your hearing date, so the board has time to review them. If you request a hearing, the property owner or the owner&apos;s attorney licensed in Idaho must appear, though you may bring witnesses within your allotted time.
</p>
<p className="mb-10">
                In Bonner County, appeal forms are available online or from the Commissioner Office at 1500 Hwy 2, Suite 308, Sandpoint, ID 83864. The Commissioners office phone on the county appeal form is (208) 265-1438, and the Assessor office phone is 208-265-1440. Completed forms must be filed with the Commissioner Office on or before the fourth Monday of June at 5:00 p.m., and that office schedules your hearing date and time. File one form per parcel, attach a copy of your assessment notice, and do not fax it, because faxed appeals are not accepted.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Step Three: Prove the January 1 Value Is Wrong
</h2>
<p className="mb-6">
                The burden sits with you. Kootenai County, citing Idaho Code 63-502, states that the assessor value estimate is presumed to be correct and the burden of proof is upon you, the property owner, to provide evidence proving the value applied to your property is incorrect. Bonner County states the standard as proof by clear and convincing evidence that you are entitled to the relief claimed, shown through a factual or legal reason the assessed value is not market value.
</p>
<p className="mb-6">
                Build the evidence around the January 1 date, because that date controls what counts. Kootenai County states that for the current assessment year, only sales that closed prior to January 1 of the current year can be considered. Bonner County 2025 appeal form states the same rule in practice: comparable sales must be from the prior year, and current year sales cannot be considered. A strong sale from February of the assessment year, however close to your home, does not prove the January 1 value in this process.
</p>
<p className="mb-10">
                Practical evidence, in the order both counties describe it, is: comparable sales that closed before January 1, with adjustments explained plainly; a comparative market analysis or an independent appraisal that is tied to that same date; and factual errors in the county own record, documented rather than asserted. State the appeal objectively and factually, and address market value only. Also know the full range of outcomes before you file: the board can lower the value, leave it unchanged, or raise it. An appeal is a request for the correct market value, not a one way request for a lower one, so file when the evidence genuinely supports a lower January 1 value.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Four Filing Mistakes That End an Appeal Before It Starts
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Waiting for a 30 day window:</span> there is no 30 or 45 day period from your notice for the first appeal in Idaho. The deadline is the fourth Monday of June. The 30 day period belongs only to appealing the board decision afterward.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Calling instead of filing:</span> a call or meeting with the assessor is informal review only. In Kootenai County it expressly does not preserve the appeal right.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Sending it the wrong way:</span> Kootenai County does not accept emailed appeal forms. Bonner County does not accept faxed ones.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">Using the wrong sales:</span> sales that closed after January 1 of the assessment year cannot be considered for that year value, in either county.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                If the Board Says No: Thirty Days, Filed With the County Auditor
</h2>
<p className="mb-6">
                A county board decision is not the end of the road, but the next step has its own strict filing rule. Under Idaho Code 63-511, checked November 1, 2026 in its current text as amended in 2025, within thirty days after mailing of notice of a board of equalization decision, or pronouncement of a decision announced at a hearing, an appeal may be taken to the Idaho Board of Tax Appeals. In the same thirty day period, the appeal may instead be taken to the district court for the county where the property is located.
</p>
<p className="mb-6">
                The notice of appeal is filed with the county auditor, who transmits it to the Board of Tax Appeals. The Board itself warns, on its site checked November 1, 2026, that a notice of appeal to the Board of Tax Appeals must be filed with the county auditor, not directly with the Board, and that a separate notice of appeal must be filed for each parcel appealed. Filing directly with the Board does not perfect the appeal in the way the rule requires.
</p>
<p className="mb-10">
                And pay while you appeal. Section 63-511, subsection (1), states that nothing in that section shall be construed so as to suspend the payment of property taxes pending the appeal. Your tax due dates stay on the normal schedule through the county hearing and through any Board of Tax Appeals or district court case that follows.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published November 1, 2026. Every deadline, filing rule, and county mechanic in this guide was checked November 1, 2026 against the Idaho Legislature published text of Idaho Code 63-308, 63-501, 63-501A, and 63-511, the Idaho Board of Tax Appeals site, Kootenai County Assessor appeal instructions and Appeal Process page, and Bonner County Assessment Notices and Appeals page and 2025 Board of Equalization appeal form. One wording difference is worth naming: Bonner County summary page describes subsequent roll notices as due by the fourth Monday in November, while the current text of 63-308 and Bonner County own assessor calendar state the third Monday in November for that notice. This guide follows the statute for the notice date, and states the subsequent roll appeal deadline separately as the fourth Monday of November under 63-501A, which is not in dispute. The 2027 calendar dates in this guide, June 7, June 28, and July 12, are the first Monday in June, fourth Monday in June, and second Monday in July for 2027. County forms are reissued each year, so confirm the current form, office address, and closing hour with your county before you file. This guide is general information about Idaho assessment appeals, not legal or tax advice. A live valuation dispute, an exemption dispute, or a Board of Tax Appeals or district court filing belongs with an Idaho attorney or a tax professional.
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
                  The June notices catch almost every homeowner by surprise, because the window to act is about three weeks and most people spend the first week just trying to understand the notice. My practical advice is simple: when your notice arrives, call me early if you want help reading the value against comparable sales that closed before January 1. A comparative market analysis built on the right sales, from the right side of that date, is exactly the kind of evidence both counties say they consider. And file the county form on time whether or not the informal conversation has finished. I am glad to help you prepare. No pressure, no pitch, just an honest conversation.
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
                Data sources: Idaho Code 63-308, 63-501, 63-501A, and 63-511 on the Idaho Legislature site, checked November 1, 2026; Idaho Board of Tax Appeals site and its filing warning that a notice of appeal must be filed with the county auditor; Kootenai County Assessor appeal instructions and Appeal Process page; and Bonner County Assessment Notices and Appeals page and 2025 Board of Equalization appeal form. Statutes, forms, and county procedures change, so confirm current terms with your county assessor, your county commissioners office, or an Idaho attorney before filing.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Appeal Guide</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Kootenai and Bonner Counties · 2027 cycle</p>
<div className="space-y-3">
{[
                      { range: 'Valuation date', desc: 'January 1 of the tax year; only sales closed before January 1 count' },
                      { range: 'Notice by', desc: 'First Monday in June, June 7, 2027 for the next cycle, 63-308' },
                      { range: 'File by', desc: 'End of business, fourth Monday in June, June 28, 2027, 63-501A; Bonner closes 5:00 p.m.' },
                      { range: 'File with', desc: 'County Commissioners office, on the county form, not by email in Kootenai or by fax in Bonner' },
                      { range: 'If the board says no', desc: 'Thirty days to Board of Tax Appeals or district court, filed with the county auditor, 63-511' }
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
                    Talk Through Your Assessment
</a>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/articles/north-idaho-property-taxes-county-comparison" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho Property Taxes, by County</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Rates, the homeowner exemption, and relief programs by county</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/idaho-homestead-exemption-two-exemptions-explained" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Idaho Homestead Exemption, Explained</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Two different exemptions, and which deadline is real</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho City Comparison</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">All five cities, head to head, the flagship comparison</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/kootenai-county" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Kootenai County Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for Kootenai County buyers</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/bonner-county" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Bonner County Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for Bonner County buyers</p>
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
            Got a June Assessment Notice You Want a Second Look At?
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Tell me your county and what the notice says, and I will help you compare the value against sales that closed before January 1, while the filing window is still open.
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
