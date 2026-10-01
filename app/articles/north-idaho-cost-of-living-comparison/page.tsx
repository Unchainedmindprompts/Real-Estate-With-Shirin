import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, AGENT_NAME, BASE_URL, BRAND_PUBLISHER_STUB, EMAIL, PHONE, PHONE_DISPLAY, placeStub } from '@/lib/schema-ids'

const articleUrl = `${BASE_URL}/articles/north-idaho-cost-of-living-comparison`
const title = 'North Idaho Cost of Living: Compare the Full Cost of a Home'
const description = 'Compare North Idaho with Spokane and Seattle using a practical homeownership budget: mortgage, parcel taxes, insurance, utilities, commuting, and maintenance.'
const sources = [
  { label: "BEA / FRED: Coeur d'Alene metro regional price parity", url: 'https://fred.stlouisfed.org/series/RPPALL17660' },
  { label: 'BEA / FRED: Spokane-Spokane Valley metro regional price parity', url: 'https://fred.stlouisfed.org/series/RPPALL44060' },
  { label: 'BEA / FRED: Seattle-Tacoma-Bellevue metro regional price parity', url: 'https://fred.stlouisfed.org/series/RPPALL42660' },
  { label: 'BEA: how regional price parities work', url: 'https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area' },
  { label: 'CFPB: understand your Loan Estimate', url: 'https://www.consumerfinance.gov/owning-a-home/loan-estimate/' },
  { label: 'Idaho State Tax Commission: individual income tax', url: 'https://tax.idaho.gov/pressrelease/whats-new-for-2025-income-tax-returns/' },
  { label: 'Idaho State Tax Commission: homeowner exemptions', url: 'https://tax.idaho.gov/search-category/property-tax/homeowners/' },
  { label: 'Idaho State Tax Commission: sales and use tax', url: 'https://tax.idaho.gov/taxes/sales-use/online-guide/' },
  { label: 'Washington Department of Revenue: food and food ingredients', url: 'https://dor.wa.gov/book/export/html/1169' },
  { label: 'Washington: enacted 2026 income-tax law (ESSB 6346)', url: 'https://lawfilesext.leg.wa.gov/biennium/2025-26/Htm/Bills/Session%20Laws/Senate/6346-S.SL.htm' },
]

export const metadata: Metadata = {
  title: 'North Idaho Cost of Living vs Spokane & Seattle',
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    title,
    description,
    url: articleUrl,
    type: 'article',
    publishedTime: '2026-05-20',
    modifiedTime: '2026-10-01',
    authors: [AGENT_NAME],
    images: [`${BASE_URL}/images/north-idaho-lake-hero.webp`],
  },
}

const faqs = [
  {
    q: "Is Coeur d'Alene cheaper than Spokane?",
    a: 'There is no dependable household-wide answer without comparing actual homes and your routine. Match similar properties, then compare financing, parcel taxes, insurance, utilities, maintenance, and commuting. An Idaho resident working in Spokane also needs to account for Idaho income tax. A citywide price or a countywide tax average cannot settle that calculation.',
  },
  {
    q: 'Will moving from Seattle to North Idaho lower my cost of living?',
    a: 'It may, especially if the home you buy costs less than the one you sell, but a lower purchase price does not guarantee a lower monthly payment. Your new mortgage terms, down payment, income taxes, insurance, and property expenses matter. Compare your actual Seattle-area costs with written estimates for the North Idaho home you want.',
  },
  {
    q: 'What should I include in a North Idaho homeownership budget?',
    a: 'Include mortgage principal and interest, any mortgage insurance, parcel-specific property tax, homeowners insurance, HOA or association dues, utilities, internet, transportation, and maintenance reserves. Keep closing costs, moving expenses, immediate repairs, and emergency cash in a separate upfront budget. Avoid counting taxes and insurance twice if they are already included in an escrow payment.',
  },
  {
    q: 'Can I use the seller’s property-tax bill to estimate my costs?',
    a: 'Use it as a starting document, then ask the county assessor about assessed value, exemptions, and changes relevant to your purchase. Confirm whether a new-construction bill includes the completed home. The seller’s exemptions and prior bill may not reflect your circumstances; a countywide average rate is not a parcel-specific quote.',
  },
  {
    q: 'How much should I budget for utilities and insurance?',
    a: 'Request the home’s available twelve-month utility history and an insurance quote for the exact address. Heating system, insulation, square footage, occupancy, water source, wildfire exposure, roof condition, and access can change the result. For a well or septic property, budget for power, inspections, servicing, and eventual repairs even when there is no municipal bill.',
  },
  {
    q: 'Is North Idaho automatically a lower-cost retirement move?',
    a: 'No. Compare the property’s carrying costs, the treatment of your own retirement income, health-plan coverage, access to your providers, and the work involved in maintaining the home. A paid-off home still has taxes, insurance, utilities, and repairs. Ask a tax professional and your health-plan provider to confirm the parts specific to you.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: title,
  description,
  image: { '@type': 'ImageObject', url: `${BASE_URL}/images/north-idaho-lake-hero.webp`, width: 1672, height: 941 },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  isPartOf: { '@id': `${BASE_URL}/articles` },
  datePublished: '2026-05-20T00:00:00-07:00',
  dateModified: '2026-10-01T00:00:00-07:00',
  mainEntityOfPage: articleUrl,
  url: articleUrl,
  articleSection: 'North Idaho Buyer Guides',
  keywords: ['North Idaho cost of living', "Coeur d'Alene cost of living", 'North Idaho vs Spokane cost', 'North Idaho vs Seattle cost', 'North Idaho homeownership budget'],
  about: [placeStub('northIdaho'), placeStub('coeurDalene'), placeStub('postFalls'), placeStub('kootenai')],
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: `${BASE_URL}/articles` },
    { '@type': 'ListItem', position: 3, name: 'North Idaho Cost of Living', item: articleUrl },
  ],
}

const budgetItems = [
  { name: 'Mortgage and financing', evidence: 'A lender estimate using the actual price, down payment, loan term, rate, and any mortgage insurance.', question: 'Is this the full payment, and how long is the quoted rate valid?' },
  { name: 'Property taxes', evidence: 'The parcel record, current tax bill, and assessor guidance on applicable exemptions and assessment changes.', question: 'Does the bill reflect this home as it exists today, including completed construction?' },
  { name: 'Homeowners insurance', evidence: 'A written quote for the address, with coverage, deductibles, exclusions, and any required work.', question: 'Can coverage be bound on the needed date, and is separate coverage needed for a particular risk?' },
  { name: 'HOA and other assessments', evidence: 'Current dues, association documents, budgets, and information on special assessments.', question: 'What do the dues cover, and which expenses or maintenance obligations remain yours?' },
  { name: 'Utilities and internet', evidence: 'Available twelve-month bills, provider confirmation, and an address-level internet service check.', question: 'What changes with winter heating, summer irrigation, occupancy, or your work-from-home needs?' },
  { name: 'Access and transportation', evidence: 'Your actual work and appointment routes, vehicle costs, and any private-road or snow-removal agreement.', question: 'Who maintains the road and driveway, and what does a normal week of driving cost?' },
  { name: 'Maintenance and repairs', evidence: 'Inspection findings, system ages, service records, and contractor estimates where needed.', question: 'Which roof, heating, drainage, well, septic, or exterior expenses are near-term?' },
  { name: 'Cash needed to move', evidence: 'Estimated cash to close, moving and storage quotes, housing overlap, and immediate setup costs.', question: 'What cash remains for repairs and unexpected expenses after closing?' },
]

export default function CostOfLivingArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-[#F5EFE6] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-[#5C5650] mb-6 font-dm-sans" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C4842A] transition-colors">Home</Link><span className="mx-2">·</span>
            <Link href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</Link><span className="mx-2">·</span>
            <span className="text-[#5C5650]">North Idaho Cost of Living</span>
          </nav>
          <div className="flex items-center gap-3 mb-6 flex-wrap font-dm-sans text-xs">
            <span className="font-semibold uppercase tracking-widest text-[#96601A]">North Idaho Buyer Guides</span>
            <span className="text-[#5C5650]">· Updated October 1, 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">{title}</h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            The most useful cost-of-living comparison starts with the home you would actually buy. Mortgage terms, parcel taxes, insurance, and your daily driving can change the answer more than a citywide average.
          </p>
          <div className="flex items-center gap-4">
            <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp, licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate" className="w-10 h-10 rounded-full object-cover" />
            <div><p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p><p className="font-dm-sans text-xs text-[#5C5650]">Licensed REALTOR® · SRES® · Berkshire Hathaway HomeServices Jacklin Real Estate</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#1C1A17] py-8" aria-label="Home budget priorities">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['The actual home', 'Written cost estimates', 'Your weekly routine', 'Cash after closing'].map((item) => <p key={item} className="text-center font-cormorant text-2xl text-[#C4842A] font-semibold">{item}</p>)}
        </div>
      </section>
      <div className="w-full overflow-hidden"><img src="/images/north-idaho-lake-hero.webp" alt="A home overlooking a lake and wooded mountains at sunset" className="w-full max-h-[520px] object-cover" /></div>

      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6 lg:grid lg:grid-cols-3 lg:gap-12">
          <article className="[&_a]:underline [&_a]:underline-offset-4 lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
            <div className="bg-[#F5EFE6] border-l-2 border-[#C4842A] p-6 mb-10">
              <h2 className="font-cormorant text-3xl text-[#1C1A17] font-semibold mb-3">The short answer</h2>
              <p>North Idaho can work well financially when the specific home, financing, and ongoing expenses fit your budget. It is not automatically cheaper than Spokane, and a move from Seattle does not produce the same savings for every buyer. Compare two or three realistic homes using the same budget categories before deciding which market is affordable for you.</p>
            </div>
            <p className="mb-6">A smaller home near your regular destinations and an acreage property outside town can have very different costs, even at the same purchase price. A lake view may come with more land to maintain. A newer home may come with association dues. A lower asking price can leave room for improvements, but only if you have priced the work.</p>
            <p className="mb-10">For the broader move, use the <Link href="/relocating-to-north-idaho" className="text-[#96601A] hover:underline">North Idaho relocation guide</Link>. This guide focuses on the dollars and documents to compare before an offer.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">What a regional cost index can tell you</h2>
            <p className="mb-6">The Bureau of Economic Analysis measures regional price levels against a U.S. average of 100. Its <a href="https://fred.stlouisfed.org/series/RPPALL17660" target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">2024 all-items index for the Coeur d&apos;Alene metro area is 98.293</a>, as published in the current FRED series. That is roughly 1.7% below the national price level for that year.</p>
            <div className="overflow-x-auto border border-[#E8DDD0] rounded-sm mb-6">
              <table className="w-full text-left text-sm">
                <caption className="text-left bg-[#F5EFE6] px-5 py-4 font-semibold text-[#1C1A17]">2024 all-items regional price parity · U.S. = 100</caption>
                <thead><tr className="border-y border-[#E8DDD0]"><th scope="col" className="px-5 py-3">Metro area</th><th scope="col" className="px-5 py-3 text-right">Index</th></tr></thead>
                <tbody>
                  {[
                    { name: "Coeur d'Alene", index: '98.293', url: 'https://fred.stlouisfed.org/series/RPPALL17660' },
                    { name: 'Spokane-Spokane Valley', index: '100.346', url: 'https://fred.stlouisfed.org/series/RPPALL44060' },
                    { name: 'Seattle-Tacoma-Bellevue', index: '111.133', url: 'https://fred.stlouisfed.org/series/RPPALL42660' },
                  ].map((row) => <tr key={row.name} className="border-b border-[#E8DDD0] last:border-0"><th scope="row" className="px-5 py-3 font-normal"><a href={row.url} target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">{row.name}</a></th><td className="px-5 py-3 text-right font-semibold text-[#1C1A17]">{row.index}</td></tr>)}
                </tbody>
              </table>
            </div>
            <p className="mb-6">This is historical metro-level context. It is not a 2026 home-price quote, a household spending plan, or a prediction of what your move will save. The metro figure also does not describe every property in the wider North Idaho region.</p>
            <p className="mb-10">When comparing Spokane or Seattle, use the same data year, geographic scope, and measure. A city&apos;s median listing price, a county&apos;s median closed sale, and a metro&apos;s modeled home value answer different questions. Mixing them creates a precise-looking comparison that is hard to use for a purchase.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Build the same budget for every home</h2>
            <p className="mb-6">Start with your present monthly spending, then add a column for each property you are considering. Mark each number as documented, quoted, or still unknown. The unknowns deserve attention before you make a commitment.</p>
            <div className="space-y-4 mb-8">
              {budgetItems.map((item, index) => (
                <section key={item.name} className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <h3 className="font-cormorant text-2xl text-[#1C1A17] font-semibold mb-2">{index + 1}. {item.name}</h3>
                  <p className="text-[15px] mb-2">{item.evidence}</p>
                  <p className="text-[15px]"><strong className="text-[#1C1A17]">Ask:</strong> {item.question}</p>
                </section>
              ))}
            </div>
            <p className="mb-6">For a monthly comparison, divide annual taxes and insurance by twelve and add recurring dues, utilities, transportation, and a maintenance reserve. If the lender&apos;s payment already includes tax and insurance escrow, do not add those items again. A cash purchase removes the mortgage payment, but the other ownership expenses remain.</p>
            <p className="mb-10">The <a href="https://www.consumerfinance.gov/owning-a-home/loan-estimate/" target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">CFPB&apos;s Loan Estimate explainer</a> helps distinguish the loan payment, estimated taxes and insurance, closing costs, and cash to close. Keep moving expenses and your post-closing reserve alongside that estimate.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Spokane, Seattle, or Arizona: what changes in the comparison?</h2>
            <div className="space-y-6 mb-10">
              <div className="border-l-2 border-[#C4842A] pl-5"><h3 className="font-cormorant text-2xl text-[#1C1A17] font-semibold mb-2">If you are keeping a Spokane job</h3><p>Compare the housing payment with the added cost and time of the actual commute. Downtown Spokane, Spokane Valley, and an airport-area job are different destinations. Add parking, mileage, vehicle maintenance, and winter travel to the comparison. Review the <Link href="/articles/spokane-vs-coeur-dalene-which-is-right-for-you" className="text-[#96601A] hover:underline">Spokane versus Coeur d&apos;Alene guide</Link> and include <Link href="/areas/post-falls-idaho" className="text-[#96601A] hover:underline">Post Falls</Link> in your route testing.</p></div>
              <div className="border-l-2 border-[#C4842A] pl-5"><h3 className="font-cormorant text-2xl text-[#1C1A17] font-semibold mb-2">If you are selling in the Seattle area</h3><p>Work from expected net sale proceeds after selling costs and any loan payoff. Then compare the new payment at the rate available to you. Trading a lower-rate mortgage for a higher-rate loan can change the monthly result even if you buy a less expensive home. Our <Link href="/articles/moving-from-washington-to-north-idaho" className="text-[#96601A] hover:underline">Washington-to-North Idaho guide</Link> covers the cross-state planning questions.</p></div>
              <div className="border-l-2 border-[#C4842A] pl-5"><h3 className="font-cormorant text-2xl text-[#1C1A17] font-semibold mb-2">If you are moving from Arizona</h3><p>Compare a full year of utilities rather than a mild month. Ask about the heating system, driveway snow removal, winter access, and seasonal property care. Keep travel back to Arizona in your budget if that is part of your plan. The <Link href="/articles/moving-from-arizona-to-north-idaho" className="text-[#96601A] hover:underline">Arizona relocation guide</Link> helps you evaluate that change in routine.</p></div>
            </div>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Taxes: compare your situation, not a state slogan</h2>
            <p className="mb-6"><strong className="text-[#1C1A17]">Idaho income tax:</strong> Idaho&apos;s individual income-tax rate is <a href="https://tax.idaho.gov/pressrelease/whats-new-for-2025-income-tax-returns/" target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">5.3%, effective January 1, 2025</a>. That applies to taxable income under Idaho&apos;s rules, not automatically to every dollar of gross pay. Residency, deductions, credits, and income sources affect your bill.</p>
            <p className="mb-6"><strong className="text-[#1C1A17]">Washington now and later:</strong> As of this article&apos;s October 2026 update, Washington does not have a general individual income tax on wages. It has enacted a 9.9% tax beginning January 1, 2028 on Washington taxable income after applicable deductions, including a $1 million standard deduction for an individual or a combined $1 million for spouses or state-registered domestic partners. See the <a href="https://lawfilesext.leg.wa.gov/biennium/2025-26/Htm/Bills/Session%20Laws/Senate/6346-S.SL.htm" target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">enacted law</a>. Moving across the border does not automatically remove every Washington tax obligation.</p>
            <p className="mb-6"><strong className="text-[#1C1A17]">Sales tax and groceries:</strong> Idaho&apos;s <a href="https://tax.idaho.gov/taxes/sales-use/online-guide/" target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">general sales-tax rate is 6%</a>, including most groceries. Washington exempts <a href="https://dor.wa.gov/book/export/html/1169" target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">most grocery-type food</a>, with exceptions such as prepared food, soft drinks, and dietary supplements. A comparison of the headline rates alone misses that difference.</p>
            <p className="mb-6"><strong className="text-[#1C1A17]">Property tax:</strong> Use the actual parcel and confirm eligibility for exemptions. Idaho&apos;s <a href="https://tax.idaho.gov/search-category/property-tax/homeowners/" target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">homeowner&apos;s exemption</a> can exempt 50% of an eligible home&apos;s value and up to one acre, capped at $125,000 of value. Apply through the county assessor; do not assume the seller&apos;s treatment carries over to you.</p>
            <p className="mb-10">Have a qualified tax professional compare your own income and move date before counting on savings. For property records and assessment questions, start with the <Link href="/articles/north-idaho-property-taxes-county-comparison" className="text-[#96601A] hover:underline">North Idaho property-tax guide</Link> and the county assessor.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">The property can change the budget as much as the town</h2>
            <p className="mb-6"><strong className="text-[#1C1A17]">In-town home:</strong> Confirm the utility providers, service charges, heating system, and exterior maintenance. Walk the routes you expect to use; proximity on a map does not always mean a convenient walking route.</p>
            <p className="mb-6"><strong className="text-[#1C1A17]">New construction or an HOA:</strong> Check what is included in the purchase price, whether landscaping or fencing is extra, and when the completed home will be reflected in the assessment. Read the association documents and any restrictions relevant to your intended use.</p>
            <p className="mb-6"><strong className="text-[#1C1A17]">Acreage or a rural home:</strong> A well and septic system replace some municipal services with equipment you maintain. Private roads, tree work, outbuildings, and snow removal belong in the budget. Use the <Link href="/articles/buying-property-prairie-wells-septic-roads" className="text-[#96601A] hover:underline">wells, septic, and roads checklist</Link> before treating lower dues or utility bills as savings.</p>
            <p className="mb-10"><strong className="text-[#1C1A17]">Waterfront or a hillside property:</strong> Check access, drainage, retaining structures, shoreline or dock responsibilities, and insurability for the specific parcel. Obtain specialist advice where the property calls for it. A view is easy to compare in photos; its maintenance obligations take more investigation.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Keep everyday life in the calculation</h2>
            <p className="mb-6">Use your own grocery basket, health-plan costs, childcare quotes if relevant, and regular trips. Confirm provider networks and appointment access directly with the health plan and practice. For remote work, verify service at the exact address and ask your employer about working from Idaho before relying on the move in your budget.</p>
            <p className="mb-10">The most useful next step is a short list of homes with the unknown costs identified. If you are buying from a distance, the <Link href="/articles/buying-north-idaho-home-from-out-of-state" className="text-[#96601A] hover:underline">out-of-state homebuying guide</Link> explains how to organize visits, inspections, and decisions around that list.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Sources and scope</h2>
            <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
            <p className="text-sm mb-10">Updated October 1, 2026. The regional index is labeled by its data year; it is not a current household quote. This guide provides general real-estate information, not tax, legal, lending, or insurance advice. Confirm applicable rules and property-specific figures with the relevant licensed professional or public agency.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-6 font-semibold">Frequently asked questions</h2>
            <div className="space-y-6">{faqs.map((faq) => <div key={faq.q} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]"><h3 className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">{faq.q}</h3><p className="text-[15px] leading-relaxed">{faq.a}</p></div>)}</div>
          </article>

          <aside className="lg:col-span-1 mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="bg-[#1C1A17] rounded-sm p-6">
                <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Before you compare totals</p>
                <ul className="font-dm-sans text-sm text-[#C4BDB4] space-y-4"><li>Use similar homes and the same financing assumptions</li><li>Get parcel records and an address-specific insurance quote</li><li>Include the whole year of utilities and maintenance</li><li>Test the weekly routes you will actually drive</li><li>Keep moving cash separate from monthly costs</li></ul>
              </div>
              <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#96601A] mb-4">Your local agent</p>
                <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp" className="w-16 h-16 rounded-full object-cover mb-3" />
                <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                <p className="font-dm-sans text-xs text-[#5C5650] mb-3">Licensed REALTOR® · SRES® · Berkshire Hathaway HomeServices Jacklin Real Estate · #1371861</p>
                <p className="font-dm-sans text-sm text-[#5C5650] leading-relaxed mb-4">Have a North Idaho home in mind? I can help you gather the property information and identify questions for your lender, insurer, and county assessor.</p>
                <a href={`tel:${PHONE}`} className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-[#1C1A17] hover:text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">Call Shirin: {PHONE_DISPLAY}</a>
              </div>
              <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#96601A] mb-4">Keep planning your move</p>
                <div className="space-y-4 font-dm-sans text-sm">
                  <Link href="/articles/moving-from-washington-to-north-idaho" className="block text-[#5C5650] hover:text-[#C4842A]">Moving from Washington</Link>
                  <Link href="/articles/moving-from-arizona-to-north-idaho" className="block text-[#5C5650] hover:text-[#C4842A]">Moving from Arizona</Link>
                  <Link href="/areas/post-falls-idaho" className="block text-[#5C5650] hover:text-[#C4842A]">Explore Post Falls</Link>
                  <Link href="/articles/buying-north-idaho-home-from-out-of-state" className="block text-[#5C5650] hover:text-[#C4842A]">Buying from out of state</Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#1C1A17] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">North Idaho relocation</p>
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6 leading-tight font-semibold" style={{ color: '#FAFAF8' }}>Bring the comparison down to a real home</h2>
          <p className="font-dm-sans text-[#C4BDB4] text-lg mb-10 leading-relaxed">Share the homes you are considering, your timing, and a comfortable monthly range. We can start with the property facts and the costs that still need a quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="bg-[#C4842A] hover:bg-[#8B4F2A] text-[#1C1A17] hover:text-white font-dm-sans font-semibold py-4 px-8 transition-colors">Call {PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="border border-[#5C5650] hover:border-[#9A9590] text-[#C4BDB4] hover:text-[#FAFAF8] font-dm-sans font-semibold py-4 px-8 transition-colors">Email Shirin</a>
            <Link href="/buyers" className="border border-[#5C5650] hover:border-[#9A9590] text-[#C4BDB4] hover:text-[#FAFAF8] font-dm-sans font-semibold py-4 px-8 transition-colors">See the buying process</Link>
          </div>
        </div>
      </section>
    </>
  )
}
