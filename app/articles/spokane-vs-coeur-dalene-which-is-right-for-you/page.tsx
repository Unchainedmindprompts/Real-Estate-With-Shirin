import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, AGENT_NAME, BASE_URL, BRAND_PUBLISHER_STUB, EMAIL, PHONE, PHONE_DISPLAY, placeStub } from '@/lib/schema-ids'

const articleUrl = `${BASE_URL}/articles/spokane-vs-coeur-dalene-which-is-right-for-you`
const title = "Spokane vs. Coeur d'Alene: Which Fits Your Move?"
const description = "Compare Spokane, Coeur d'Alene, and Post Falls through actual homes, total ownership costs, commute routes, and the daily routine you want in the Inland Northwest."
const sources = [
  { label: 'Idaho State Tax Commission: individual income-tax guide', url: 'https://tax.idaho.gov/taxes/income-tax/individual-income/online-guide/' },
  { label: 'Idaho State Tax Commission: 5.3% rate effective January 2025', url: 'https://tax.idaho.gov/pressrelease/whats-new-for-2025-income-tax-returns/' },
  { label: 'Idaho State Tax Commission: sales and use tax', url: 'https://tax.idaho.gov/taxes/sales-use/online-guide/' },
  { label: 'Washington Department of Revenue: food and food ingredients', url: 'https://dor.wa.gov/book/export/html/1169' },
  { label: 'Washington: enacted 2026 income-tax law (ESSB 6346)', url: 'https://lawfilesext.leg.wa.gov/biennium/2025-26/Htm/Bills/Session%20Laws/Senate/6346-S.SL.htm' },
  { label: 'Idaho Transportation Department: Idaho 511 road conditions', url: 'https://511.idaho.gov/' },
  { label: 'Washington State Department of Transportation: travel map', url: 'https://wsdot.com/Travel/Real-time/Map/' },
]

export const metadata: Metadata = {
  title: "Spokane vs Coeur d'Alene: Homes, Costs & Commutes",
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    title,
    description,
    url: articleUrl,
    type: 'article',
    publishedTime: '2026-05-03',
    modifiedTime: '2026-10-01',
    authors: [AGENT_NAME],
    images: [`${BASE_URL}/images/north-idaho-lake-hero.webp`],
  },
}

const faqs = [
  {
    q: "Should I live in Spokane or Coeur d'Alene?",
    a: 'Start with your regular destinations and the home you can comfortably own. Spokane deserves a close look when your job, appointments, and everyday activities are concentrated there. Coeur d’Alene belongs on the list when its lake and downtown access fit your routine. Compare actual addresses in both markets, and consider Post Falls if you want an Idaho home with a westward route toward Spokane.',
  },
  {
    q: "Is Coeur d'Alene more expensive than Spokane?",
    a: 'Compare like-for-like homes before drawing a conclusion from a market median. City, county, and metro figures cover different areas, and waterfront homes or new construction can change the mix. For each candidate, add financing, parcel taxes, insurance, dues, utilities, commuting, and maintenance. The lower-priced home will not always have the lower total cost.',
  },
  {
    q: "Can I live in Idaho and work in Spokane?",
    a: 'Yes, but check the work arrangement, commute, and taxes before choosing a home. Idaho generally taxes its residents on income from all sources, including work performed outside Idaho. Test the route from the exact property to the workplace at your usual work hours, and ask a qualified tax professional about your residency and filing obligations.',
  },
  {
    q: "How long is the commute from Coeur d'Alene or Post Falls to Spokane?",
    a: 'There is no single dependable time for every address. Spokane Valley, downtown Spokane, and airport-area workplaces are different trips. The drive also depends on access to I-90, traffic, roadwork, and weather. Test both directions during your normal schedule and consult Idaho 511 and WSDOT conditions rather than relying on a weekend drive.',
  },
  {
    q: 'What are the tax differences between Idaho and Washington?',
    a: 'Idaho’s individual income-tax rate is 5.3%, effective January 1, 2025. As of October 2026, Washington has no general individual income tax on wages, but an enacted 9.9% tax begins January 1, 2028 on Washington taxable income after applicable deductions, including a $1 million standard deduction for an individual or a combined $1 million for spouses or state-registered domestic partners. Property, sales, and other tax rules also differ. Ask a qualified tax professional to compare your own situation.',
  },
  {
    q: 'Should I include Post Falls in my search?',
    a: 'Include it if an Idaho location between Coeur d’Alene and the Washington border could suit your routine. Compare the specific home’s access to I-90, road and driveway conditions, insurance, dues, and ongoing maintenance. Post Falls is a useful third option to investigate, but the city name alone does not guarantee a shorter commute or lower ownership costs.',
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
  datePublished: '2026-05-03T00:00:00-07:00',
  dateModified: '2026-10-01T00:00:00-07:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': `${BASE_URL}/articles` },
  url: articleUrl,
  keywords: ["Spokane vs Coeur d'Alene", 'Post Falls vs Spokane', 'Idaho home Spokane job', 'Idaho vs Washington taxes', 'North Idaho relocation'],
  articleSection: 'Relocation Guide',
  about: [placeStub('coeurDalene'), placeStub('postFalls'), { '@type': 'City', name: 'Spokane', sameAs: 'https://en.wikipedia.org/wiki/Spokane,_Washington' }],
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
    { '@type': 'ListItem', position: 3, name: "Spokane vs. Coeur d'Alene", item: articleUrl },
  ],
}

const comparisonRows = [
  { place: 'Spokane', reason: 'Your work, appointments, or regular activities are in Spokane, and proximity is a priority.', check: 'Compare individual neighborhoods and actual routes. A Spokane mailing address alone does not tell you the commute or maintenance needs.' },
  { place: "Coeur d'Alene", reason: 'You want regular access to the lake, downtown, or other Coeur d’Alene destinations.', check: 'Check how close the specific home is to the places you will use. Evaluate the price, condition, parking, and seasonal traffic around that address.' },
  { place: 'Post Falls', reason: 'You want to investigate an Idaho home west of Coeur d’Alene while keeping Spokane destinations in the comparison.', check: 'Test freeway access and the full trip to work. Review the property’s dues, utility service, construction status, and ongoing costs.' },
]

export default function SpokaneVsCdaPage() {
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
            <span className="text-[#5C5650]">Spokane vs. Coeur d&apos;Alene</span>
          </nav>
          <div className="flex items-center gap-3 mb-6 flex-wrap font-dm-sans text-xs">
            <span className="font-semibold uppercase tracking-widest text-[#96601A]">Relocation Guide</span>
            <span className="text-[#5C5650]">· Updated October 1, 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">{title}</h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">Start with where you need to be during the week, then compare the homes you could actually buy. The state line matters, but so do the driveway, monthly payment, and trip home from work.</p>
          <div className="flex items-center gap-4">
            <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp, licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate" className="w-10 h-10 rounded-full object-cover" />
            <div><p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p><p className="font-dm-sans text-xs text-[#5C5650]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate</p></div>
          </div>
        </div>
      </section>
      <div className="w-full overflow-hidden"><img src="/images/north-idaho-lake-hero.webp" alt="A home overlooking a lake and wooded mountains at sunset" className="w-full max-h-[520px] object-cover" /></div>
      <section className="bg-[#1C1A17] py-8" aria-label="Relocation comparison priorities">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Actual homes', 'Full ownership cost', 'Workday routes', 'Everyday access'].map((item) => <p key={item} className="text-center font-cormorant text-2xl text-[#C4842A] font-semibold">{item}</p>)}
        </div>
      </section>

      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6 lg:grid lg:grid-cols-3 lg:gap-12">
          <article className="[&_a]:underline [&_a]:underline-offset-4 lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
            <div className="bg-[#F5EFE6] border-l-2 border-[#C4842A] p-6 mb-10">
              <h2 className="font-cormorant text-3xl text-[#1C1A17] font-semibold mb-3">The short answer</h2>
              <p>Give Spokane a close look if most of your working week happens there. Put Coeur d&apos;Alene on the list if its lake, downtown, and nearby destinations are central to the routine you want. Include Post Falls if you want an Idaho option west of Coeur d&apos;Alene. Then test those choices against real properties, full ownership costs, and your actual routes.</p>
            </div>
            <p className="mb-6">There is no universal winner at the state line. A home that works beautifully for someone with an occasional trip to Spokane can be a poor fit for someone making that trip twice a day. A home near downtown Coeur d&apos;Alene and one with the same city in its mailing address can also create very different daily lives.</p>
            <p className="mb-10">Use this comparison to narrow the search. The <Link href="/relocating-to-north-idaho" className="text-[#96601A] hover:underline">complete North Idaho relocation guide</Link> covers the wider move, and the <Link href="/articles/buying-north-idaho-home-from-out-of-state" className="text-[#96601A] hover:underline">out-of-state buying guide</Link> explains how to organize the purchase from a distance.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Three places to compare, with a reason for each</h2>
            <div className="space-y-4 mb-10">{comparisonRows.map((row) => <section key={row.place} className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6"><h3 className="font-cormorant text-2xl text-[#1C1A17] font-semibold mb-3">{row.place}</h3><p className="text-[15px] mb-3"><strong className="text-[#1C1A17]">Start here when:</strong> {row.reason}</p><p className="text-[15px]"><strong className="text-[#1C1A17]">Check before choosing:</strong> {row.check}</p></section>)}</div>
            <p className="mb-10">For a closer look at the Idaho options, explore the <Link href="/areas/coeur-dalene-idaho" className="text-[#96601A] hover:underline">Coeur d&apos;Alene area guide</Link> and the <Link href="/areas/post-falls-idaho" className="text-[#96601A] hover:underline">Post Falls area guide</Link>. Treat each as a starting point for an address-level comparison.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Compare homes you would actually own</h2>
            <p className="mb-6">Choose a few candidates with similar usable space, condition, lot requirements, and essential features. An older Spokane home needing a roof and a new Post Falls home with unfinished landscaping are not equivalent simply because they have the same number of bedrooms.</p>
            <p className="mb-6">Keep market statistics in their proper scope. Spokane city, Spokane County, Coeur d&apos;Alene city, and Kootenai County are different geographies. Median sale prices, asking prices, and modeled values are also different measures. A broad median can orient a search; it cannot tell you whether a particular home is good value.</p>
            <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6">
              <h3 className="font-cormorant text-2xl text-[#1C1A17] font-semibold mb-3">Put these numbers beside every listing</h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px]">
                <li>Purchase price, down payment, financing terms, and full monthly loan payment</li>
                <li>Parcel-specific taxes and a written homeowners-insurance quote</li>
                <li>HOA dues, special assessments, and what those charges cover</li>
                <li>Available utility history, internet service, and winter access costs</li>
                <li>Inspection findings, near-term repairs, and an ongoing maintenance reserve</li>
                <li>Commuting expenses, cash to close, moving costs, and cash left afterward</li>
              </ul>
            </div>
            <p className="mb-10">The <Link href="/articles/north-idaho-cost-of-living-comparison" className="text-[#96601A] hover:underline">North Idaho cost-of-living guide</Link> walks through that budget. Do not assume a lower property-tax rate will offset a higher home price, a different mortgage, or a longer commute.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Keeping a Spokane job? Test the whole trip</h2>
            <p className="mb-6">Interstate 90 connects the corridor, but &ldquo;Spokane&rdquo; is not one destination. A workplace in Spokane Valley, downtown, near a hospital, or near the airport changes the route. The time between your front door and the freeway matters too.</p>
            <ol className="list-decimal pl-6 space-y-4 mb-6">
              <li><strong className="text-[#1C1A17]">Use the exact endpoints.</strong> Drive from the candidate home to the workplace entrance or parking location you will use.</li>
              <li><strong className="text-[#1C1A17]">Test your actual schedule.</strong> Check both the morning and return trip. A weekend showing trip does not answer a weekday commute question.</li>
              <li><strong className="text-[#1C1A17]">Add the stops that make it your day.</strong> Include errands, appointments, or pickup stops rather than timing only the freeway segment.</li>
              <li><strong className="text-[#1C1A17]">Review weather and disruptions.</strong> Check <a href="https://511.idaho.gov/" target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">Idaho 511</a> and the <a href="https://wsdot.com/Travel/Real-time/Map/" target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">WSDOT travel map</a> for roadwork, cameras, incidents, and conditions.</li>
              <li><strong className="text-[#1C1A17]">Decide what you can sustain.</strong> Consider driving frequency, schedule flexibility, vehicle costs, and an alternate plan when travel is disrupted.</li>
            </ol>
            <p className="mb-10">For remote or hybrid work, confirm employer approval for working from Idaho and service availability at the property. A listing that says &ldquo;high-speed internet available&rdquo; is worth checking directly with the provider before it becomes a condition of your move.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Idaho and Washington taxes: current rules and the 2028 change</h2>
            <p className="mb-6"><strong className="text-[#1C1A17]">Idaho:</strong> The individual income-tax rate is <a href="https://tax.idaho.gov/pressrelease/whats-new-for-2025-income-tax-returns/" target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">5.3%, effective January 1, 2025</a>. Idaho generally taxes residents on income from all sources, including <a href="https://tax.idaho.gov/taxes/income-tax/individual-income/online-guide/" target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">income earned outside Idaho</a>. Keeping a Washington workplace does not by itself avoid Idaho income tax.</p>
            <p className="mb-6"><strong className="text-[#1C1A17]">Washington today:</strong> As of October 2026, Washington has no general individual income tax on wages. That does not mean it has no other taxes or that every kind of income is treated alike.</p>
            <p className="mb-6"><strong className="text-[#1C1A17]">Washington beginning in 2028:</strong> The state enacted ESSB 6346 on March 30, 2026. The <a href="https://lawfilesext.leg.wa.gov/biennium/2025-26/Htm/Bills/Session%20Laws/Senate/6346-S.SL.htm" target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">law establishes a 9.9% tax</a> on Washington taxable income after applicable deductions, including a $1 million standard deduction for an individual or a combined $1 million for spouses or state-registered domestic partners. The tax starts January 1, 2028; first tax-year payments are due in 2029. Residency and Washington-source income can affect liability.</p>
            <p className="mb-6"><strong className="text-[#1C1A17]">Everyday purchases and the property:</strong> Idaho&apos;s <a href="https://tax.idaho.gov/taxes/sales-use/online-guide/" target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">general sales-tax rate is 6%</a>, including most groceries. Washington exempts <a href="https://dor.wa.gov/book/export/html/1169" target="_blank" rel="noopener noreferrer" className="text-[#96601A] hover:underline">most grocery-type food</a>, with exceptions. Property taxes depend on the parcel and applicable rules, so compare actual records rather than assuming one state always produces the lower bill.</p>
            <p className="mb-10">Ask a qualified tax professional to review your expected income, residency, and move date. A home purchase should not depend on an assumed tax saving. The <Link href="/articles/moving-from-washington-to-north-idaho" className="text-[#96601A] hover:underline">Washington-to-North Idaho guide</Link> brings those planning questions together.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Picture an ordinary week before choosing a location</h2>
            <p className="mb-6">Make a short list of the places you will visit regularly: work, groceries, healthcare, recreation, and anyone you expect to see often. Put those destinations on the map beside the candidate homes. Then spend time in the immediate area at different times of day.</p>
            <p className="mb-6">If schools are part of the decision, verify the current boundary, enrollment process, and programs directly with the district for the address. If a medical specialist matters, confirm the practice location, appointment availability, and your insurance network. Neither a city label nor a nearby building guarantees access to the service you need.</p>
            <p className="mb-6">Be specific about outdoor access. A home with a lake view does not necessarily include legal waterfront access, a dock, or a boat slip. Check the deed, association documents, and any applicable permits or agreements. If you mainly want an easy walk to a trail or public waterfront, test that route in person.</p>
            <p className="mb-10">Moving from a warmer climate adds another comparison. The <Link href="/articles/moving-from-arizona-to-north-idaho" className="text-[#96601A] hover:underline">Arizona-to-North Idaho guide</Link> covers the questions to ask about winter access, home systems, and seasonal routines.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">A useful way to plan a comparison visit</h2>
            <p className="mb-6">Start with homes that meet the same essential requirements and fit a comfortable budget. Pair each showing with the route you would use afterward: to work, a grocery store, or a regular appointment. Leave time to look at the street, parking, slope, drainage, and access rather than packing every hour with interiors.</p>
            <p className="mb-6">Before leaving, write down three things for each home: what works, what does not, and what still needs verification. Request the missing records and quotes. If the decision rests on an unanswered insurance, access, inspection, or financing question, resolve it within the applicable due-diligence timeline.</p>
            <p className="mb-10">I can help you turn the Idaho side of that comparison into a focused property search. Start with your work destination, must-haves, timing, and the homes you are considering. <a href={`mailto:${EMAIL}`} className="text-[#96601A] hover:underline">Email me what your move needs to accomplish</a>, and we can identify the next useful step.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Sources and scope</h2>
            <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
            <p className="text-sm mb-10">Updated October 1, 2026. Route times, home availability, and property expenses require current, address-specific checks. This guide is general real-estate information, not tax, legal, lending, or insurance advice. Consult the relevant professional about your own circumstances.</p>

            <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-6 font-semibold">Common questions</h2>
            <div className="space-y-6">{faqs.map((faq) => <div key={faq.q} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]"><h3 className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">{faq.q}</h3><p className="text-[15px] leading-relaxed">{faq.a}</p></div>)}</div>
          </article>

          <aside className="lg:col-span-1 mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="bg-[#1C1A17] rounded-sm p-6">
                <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your comparison checklist</p>
                <ul className="font-dm-sans text-sm text-[#C4BDB4] space-y-4"><li>Similar homes, condition, and essential features</li><li>Total monthly ownership cost</li><li>The exact weekday commute</li><li>Insurance and utility verification</li><li>Maintenance and winter access</li><li>The destinations you use most</li></ul>
              </div>
              <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#96601A] mb-4">Your North Idaho guide</p>
                <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp" className="w-16 h-16 rounded-full object-cover mb-3" />
                <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                <p className="font-dm-sans text-xs text-[#5C5650] mb-3">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · #1371861</p>
                <p className="font-dm-sans text-sm text-[#5C5650] leading-relaxed mb-4">Considering Coeur d&apos;Alene or Post Falls? Bring your must-haves and regular destinations. We can use them to narrow the Idaho home search.</p>
                <a href={`tel:${PHONE}`} className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-[#1C1A17] hover:text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">Call Shirin: {PHONE_DISPLAY}</a>
              </div>
              <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#96601A] mb-4">Keep comparing</p>
                <div className="space-y-4 font-dm-sans text-sm">
                  <Link href="/areas/post-falls-idaho" className="block text-[#5C5650] hover:text-[#C4842A]">Living in Post Falls</Link>
                  <Link href="/articles/north-idaho-cost-of-living-comparison" className="block text-[#5C5650] hover:text-[#C4842A]">Build your ownership budget</Link>
                  <Link href="/articles/moving-from-washington-to-north-idaho" className="block text-[#5C5650] hover:text-[#C4842A]">Moving from Washington</Link>
                  <Link href="/articles/moving-from-arizona-to-north-idaho" className="block text-[#5C5650] hover:text-[#C4842A]">Moving from Arizona</Link>
                  <Link href="/articles/buying-north-idaho-home-from-out-of-state" className="block text-[#5C5650] hover:text-[#C4842A]">Buying from out of state</Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#1C1A17] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Inland Northwest relocation</p>
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6 leading-tight font-semibold" style={{ color: '#FAFAF8' }}>Which Idaho homes fit your week?</h2>
          <p className="font-dm-sans text-[#C4BDB4] text-lg mb-10 leading-relaxed">Share your work destination, timing, and priorities. We can build a focused Coeur d&apos;Alene or Post Falls shortlist and identify what you need to verify before buying.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="bg-[#C4842A] hover:bg-[#8B4F2A] text-[#1C1A17] hover:text-white font-dm-sans font-semibold py-4 px-8 transition-colors">Call {PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="border border-[#5C5650] hover:border-[#9A9590] text-[#C4BDB4] hover:text-[#FAFAF8] font-dm-sans font-semibold py-4 px-8 transition-colors">Email Shirin</a>
            <Link href="/areas/post-falls-idaho" className="border border-[#5C5650] hover:border-[#9A9590] text-[#C4BDB4] hover:text-[#FAFAF8] font-dm-sans font-semibold py-4 px-8 transition-colors">Explore Post Falls</Link>
          </div>
        </div>
      </section>
    </>
  )
}
