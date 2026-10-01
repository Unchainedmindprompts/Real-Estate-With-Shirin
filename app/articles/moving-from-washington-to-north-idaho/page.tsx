import type { Metadata } from 'next'
import Link from 'next/link'
import RelocationGuide from '@/components/RelocationGuide'
import { AGENT_NAME, BASE_URL } from '@/lib/schema-ids'

const guide = {
  slug: 'moving-from-washington-to-north-idaho',
  title: 'Moving from Washington to North Idaho: A Home Buyer’s Planning Guide',
  description: 'Keeping a Spokane job or moving from western Washington? Compare work routes, taxes, home-sale timing, and the property details that matter before buying in North Idaho.',
  datePublished: '2026-10-01T00:00:00-07:00',
  dateModified: '2026-10-01T00:00:00-07:00',
  image: '/images/north-idaho-lake-hero.webp',
  imageAlt: 'Illustrative lake-view home and wooded landscape used in the North Idaho relocation guide',
}

export const metadata: Metadata = {
  title: 'Moving from Washington to North Idaho: Buyer Guide',
  description: guide.description,
  alternates: { canonical: `${BASE_URL}/articles/${guide.slug}` },
  openGraph: {
    title: guide.title, description: guide.description, type: 'article',
    url: `${BASE_URL}/articles/${guide.slug}`, publishedTime: guide.datePublished,
    modifiedTime: guide.dateModified, authors: [AGENT_NAME], images: [`${BASE_URL}${guide.image}`],
  },
}

const sources = [
  { name: 'Idaho State Tax Commission: individual income tax, residency, and filing basics', url: 'https://tax.idaho.gov/taxes/income-tax/individual-income/online-guide/' },
  { name: 'Washington Legislature: enacted SB 6346, millionaires tax', url: 'https://lawfilesext.leg.wa.gov/biennium/2025-26/Htm/Bills/Session%20Laws/Senate/6346-S.SL.htm' },
  { name: 'Idaho State Tax Commission: homeowner property-tax guidance', url: 'https://tax.idaho.gov/search-category/property-tax/homeowners/' },
  { name: 'Idaho Transportation Department: 511 road conditions', url: 'https://511.idaho.gov/' },
  { name: 'WSDOT: real-time travel map', url: 'https://wsdot.com/Travel/Real-time/Map/' },
  { name: 'Idaho Department of Insurance: home and renters insurance', url: 'https://doi.idaho.gov/consumers/home-renters-insurance/' },
]

const faqs = [
  { q: 'Should I start my search in Post Falls if I work in Spokane?', a: 'Post Falls is worth testing early because it is west of Coeur d’Alene along I-90. Compare actual addresses against your work destination and hours. Spokane Valley, downtown Spokane, and the airport are different trips, and a route that works off-peak may not suit your daily schedule.' },
  { q: 'Will moving from Washington to Idaho automatically lower my taxes?', a: 'No. Idaho taxes residents on income from all sources, subject to applicable rules and credits. Washington’s enacted millionaires tax starts in 2028, and its Washington-source income provisions can affect nonresidents. Your income, residency, work location, deductions, property, and move timing matter. Ask a qualified tax professional to model your situation before treating the move as a tax-saving decision.' },
  { q: 'Can I keep my Washington employer and work remotely from Idaho?', a: 'Confirm that arrangement with your employer before committing to a home. Ask about approved work locations, payroll, benefits, required office days, and any effect on compensation. Separately verify internet availability and installation timing at the exact Idaho address.' },
  { q: 'Should I sell my Washington home before buying in North Idaho?', a: 'That depends on whether you need the sale proceeds to qualify or close and how much overlap you can comfortably carry. Ask your lender to compare buying after the sale with any approved contingent or overlapping purchase plan. Build in temporary housing or storage options if the two closings do not line up.' },
]

export default function WashingtonRelocationPage() {
  return (
    <RelocationGuide {...guide} faqs={faqs} sources={sources}>
      <div className="bg-[#F5EFE6] border-l-4 border-[#C4842A] p-6 mb-8">
        <p className="!mb-0"><strong>Start with the workday, then the house.</strong> A move across the Spokane–Post Falls state line is a different decision from a move out of Seattle or another western Washington city. Set your work arrangement, total ownership budget, and home-sale plan first. Then use those answers to choose which North Idaho locations to tour.</p>
      </div>
      <h2>Two Washington moves, two different shortlists</h2>
      <h3>If you are keeping a Spokane-area job</h3>
      <p>Begin with the <Link href="/areas/post-falls-idaho">Post Falls area guide</Link> and a small set of homes that fit your price range and property needs. For each one, test the trip to your actual workplace, including the local streets, freeway interchange, parking, and walk into work. Repeat it in the other direction at your usual finish time.</p>
      <p>Do the same for a comparable home in <Link href="/areas/coeur-dalene-idaho">Coeur d&apos;Alene</Link> if its location or amenities appeal to you. Decide how much extra travel you would willingly exchange for those features. Use <a href="https://511.idaho.gov/">Idaho 511</a> and <a href="https://wsdot.com/Travel/Real-time/Map/">WSDOT&apos;s travel map</a> for current incidents, weather, and construction. A single quoted commute time is too blunt a tool for this decision.</p>
      <h3>If you are moving from western Washington</h3>
      <p>Establish whether you will have a local job, an approved remote arrangement, or regular travel back to Washington. Airport trips, office attendance, and access to your usual services may narrow the search differently from a daily Spokane commute. Price those trips into the budget instead of treating them as occasional extras.</p>
      <p>Write down what you use in a normal week: groceries, appointments, exercise, dining, outdoor access, and any school or care arrangements you need to verify. Visit those destinations from candidate homes. The region-wide <Link href="/relocating-to-north-idaho">North Idaho relocation guide</Link> can help you choose the towns to compare.</p>

      <h2>Compare your after-move budget, including income tax</h2>
      <p>A lower asking price does not establish a lower cost of living. Compare the financed payment, mortgage insurance if applicable, parcel taxes, insurance, HOA charges, utilities, maintenance, and travel. Use the same down-payment and loan assumptions for each home. Our <Link href="/articles/north-idaho-cost-of-living-comparison">ownership-cost guide</Link> explains the documents to request.</p>
      <p><strong>Idaho income tax belongs in a Washington buyer&apos;s budget.</strong> The <a href="https://tax.idaho.gov/taxes/income-tax/individual-income/online-guide/">Idaho State Tax Commission</a> lists a 5.3% rate for 2025 Idaho taxable income and explains that residents are generally taxed on income from all sources, including outside Idaho. Working for a Washington employer does not by itself remove that obligation. Residency, part-year filing, and available credits require an individual review.</p>
      <p><strong>Washington&apos;s 2026 tax change is enacted, with a future start.</strong> SB 6346 was approved March 30, 2026. The law imposes a 9.9% tax beginning January 1, 2028 on Washington taxable income after applicable deductions. It includes a $1 million standard deduction for an individual, or a combined $1 million for spouses or state-registered domestic partners. Nonresident and part-year rules can adjust the deduction and address Washington-source income. It is not a current blanket wage tax, and moving your home to Idaho does not by itself settle every Washington tax question. Read the <a href="https://lawfilesext.leg.wa.gov/biennium/2025-26/Htm/Bills/Session%20Laws/Senate/6346-S.SL.htm">enacted law</a> with your tax adviser rather than relying on a headline-rate comparison.</p>
      <p>For property taxes, request the actual parcel bill and assessment history, then ask the county assessor about your intended ownership and occupancy. Idaho&apos;s homeowner exemption is an eligibility-based application, not a discount to assume from the seller&apos;s current bill. Start with the <a href="https://tax.idaho.gov/search-category/property-tax/homeowners/">state&apos;s homeowner guidance</a>.</p>

      <h2>Choose the property details you want to live with</h2>
      <ul>
        <li><strong>New construction:</strong> confirm the completed price, landscaping and fencing, HOA documents, nearby future phases, inspection options, and realistic possession terms. Compare incentives against the full loan cost.</li>
        <li><strong>Established resale:</strong> review roof and heating-system age, drainage, prior repairs, storage, and the work you would want to do immediately. Keep that work in your cash budget.</li>
        <li><strong>Acreage or a home outside municipal services:</strong> investigate water, septic, legal access, road maintenance, winter plowing, and internet before assuming the property will function like an in-town home. The <Link href="/articles/buying-property-prairie-wells-septic-roads">well, septic, and road guide</Link> helps organize those questions.</li>
      </ul>
      <p>Request an address-specific insurance quote while you still have time to evaluate it under your contract. The <a href="https://doi.idaho.gov/consumers/home-renters-insurance/">Idaho Department of Insurance</a> explains coverage and homeowner-policy issues. Coverage terms and deductibles matter alongside the premium.</p>

      <h2>Coordinate the Washington sale and Idaho purchase</h2>
      <ol>
        <li><strong>Get lender clarity.</strong> Establish whether you must close the sale first, whether an offer needs a home-sale contingency, and your maximum comfortable overlap.</li>
        <li><strong>Plan the gap.</strong> Price temporary housing, storage, an extra move, and travel. Leave room for a closing date to change.</li>
        <li><strong>Tour with a purpose.</strong> Share your work destination and property requirements in advance. Reserve time for ordinary routes as well as houses.</li>
        <li><strong>Use the contract deadlines.</strong> Arrange inspections, document review, insurance, and financing work in time to make informed decisions. Ask the lender and title team which closing steps can be handled remotely.</li>
      </ol>
      <p>The <Link href="/articles/buying-north-idaho-home-from-out-of-state">out-of-state buying guide</Link> covers the transaction sequence. If you are still choosing which side of the border to live on, read <Link href="/articles/spokane-vs-coeur-dalene-which-is-right-for-you">Spokane versus Coeur d&apos;Alene</Link> before narrowing to individual listings.</p>
    </RelocationGuide>
  )
}
