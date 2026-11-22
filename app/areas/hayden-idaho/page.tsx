import { heroMetadata, riverfrontCard } from '@/lib/hero-share'
import { BASE_URL, AGENT_ID, BUSINESS_ID, WEBSITE_ID, placeStub, jsonLdGraph } from '@/lib/schema-ids'
import { IDX_SEARCH_BY_AREA } from '@/lib/idx-search'
import AreaGuideTemplate from '@/components/editorial/AreaGuideTemplate'

const PAGE_URL = `${BASE_URL}/areas/hayden-idaho`

export const metadata = heroMetadata(
  '/areas/hayden-idaho',
  'Hayden Idaho Real Estate: Prices, Neighborhoods & Market',
  "The median Hayden home runs $553,000, up 13.5% in a year. What each budget actually buys, how Hayden compares to Coeur d'Alene, and a local REALTOR's honest read.",
  riverfrontCard,
)

const FAQS = [
  {
    q: 'What is the housing market like in Hayden Idaho in 2026?',
    a: 'Hayden has been one of Kootenai County’s strongest appreciating submarkets, with a median sale price near $553,000 and tight supply around 2.1 months. Demand stays steady from families and retirees looking for quieter streets and larger lots just north of Coeur d’Alene.',
  },
  {
    q: 'How much do homes cost in Hayden Idaho?',
    a: 'Entry-level single-family homes start in the mid-$400Ks, the core market sits between $500K and $700K, and Hayden Lake waterfront and view properties trade well above $1M — pricing independently of the inland city median.',
  },
  {
    q: 'Is Hayden Idaho a good place to live?',
    a: 'Yes — Hayden offers a quieter, more residential pace than Coeur d’Alene while keeping you 10–15 minutes from downtown CdA and minutes from Hayden Lake, Avondale Golf Club, and English Point trails.',
  },
  {
    q: 'How does Hayden compare to Coeur d’Alene?',
    a: 'Hayden trades Sherman Avenue walkability for larger lots, quieter neighborhoods, and slightly lower median prices (~$553K vs. ~$601K). Many buyers tour both on the same day before deciding which feel they prefer.',
  },
  {
    q: 'How does Hayden Lake waterfront price compared to Lake Coeur d’Alene?',
    a: 'Hayden Lake is its own distinct, private-feeling lake market with limited shoreline inventory and strong multi-generational demand. Waterfront homes frequently start above $1.3M depending on frontage, dock, and water depth.',
  },
]

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Real Estate Services — Hayden, Idaho',
  serviceType: 'Real estate representation',
  provider: [{ '@id': BUSINESS_ID }, { '@id': AGENT_ID }],
  areaServed: placeStub('hayden'),
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Hayden Idaho Real Estate: Prices, Neighborhoods & Market',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': BUSINESS_ID },
  mainEntity: { '@id': `${PAGE_URL}#service` },
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  inLanguage: 'en-US',
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Areas', item: `${BASE_URL}/areas` },
    { '@type': 'ListItem', position: 3, name: 'Hayden, Idaho', item: PAGE_URL },
  ],
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  isPartOf: { '@id': `${PAGE_URL}#webpage` },
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function HaydenAreaPage() {
  const idxUrl = IDX_SEARCH_BY_AREA['hayden-idaho'] || 'https://shirinabplanalp.jacklinrealestate.com'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph([jsonLdWebPage, jsonLdService, jsonLdBreadcrumb, jsonLdFaq])) }}
      />

      <AreaGuideTemplate
        config={{
          eyebrow: 'Hayden, Idaho · Community Field Guide',
          titleLead: 'Hayden',
          titleEm: 'Real Estate.',
          heroLead:
            'Median home: ~$553,000. Larger lots, quieter residential streets, Hayden Lake access, and golf-course neighborhoods — just 10–15 minutes north of downtown Coeur d’Alene.',
          heroImage: '/images/community-atlas/hayden-idaho.webp',
          heroAlt: 'Hayden, Idaho',
          idxUrl,
          idxLabel: 'Search Hayden Homes',
          stats: [
            { value: '$553K', label: 'Median Sale Price', sub: 'Strong YoY growth' },
            { value: '2.1 mo', label: 'Months of Supply', sub: 'Tighter than CdA' },
            { value: '12 min', label: 'To Downtown CdA', sub: 'Easy Hwy 95 access' },
            { value: 'CdA #271', label: 'School District', sub: 'Highly requested' },
          ],
          marketHeadingLead: 'The Hayden market',
          marketHeadingEm: 'right now.',
          marketParagraphs: [
            'Hayden sits immediately north of Coeur d’Alene and has become a top destination for buyers who want quieter streets, larger lots, and proximity to Hayden Lake without paying downtown CdA premiums.',
            'With a median near $553,000 and roughly 2.1 months of supply, Hayden is actually tighter on inventory than Coeur d’Alene (2.6 months). Well-kept single-level homes and golf-course properties around Avondale and Hayden Lake Country Club draw steady competition.',
            'Importantly, Hayden Lake is its own separate waterfront market with distinct pricing, dock rules, and shoreline topography compared to Lake Coeur d’Alene.',
          ],
          marketLinks: [
            { label: '2026 Hayden Cost Guide', href: '/articles/how-much-do-homes-cost-hayden-idaho' },
            { label: 'Coeur d’Alene Guide', href: '/areas/coeur-dalene-idaho' },
          ],
          advisorRole: 'Hayden & Kootenai REALTOR®',
          advisorQuote: 'Hayden is where buyers land when they love Coeur d’Alene’s lifestyle but want more breathing room at home.',
          advisorFacts: [
            { label: 'Effective Property Tax', value: '~0.452% (Kootenai)' },
            { label: 'Downtown CdA', value: '10–15 min south' },
            { label: 'Spokane Airport (GEG)', value: '42–48 min' },
            { label: 'Lake & Trails', value: 'Hayden Lake · English Point' },
          ],
          hoodHeadingLead: 'Hayden',
          hoodHeadingEm: 'neighborhoods.',
          hoodIntro: 'From established golf communities to quiet lake-adjacent pockets and newer prairie subdivisions.',
          neighborhoods: [
            {
              name: 'Avondale & Golf Corridor',
              tag: 'Established · Tree-Lined',
              img: '/images/golf-4k.webp',
              alt: 'Avondale golf course neighborhood in Hayden',
              desc: 'Mature pines, generous lots, and classic North Idaho character surrounding Avondale Golf Club — minutes from Hayden Lake’s Honeysuckle Beach.',
            },
            {
              name: 'Hayden Lake & East Shore',
              tag: 'Waterfront · Views',
              img: '/images/lake-life.jpeg',
              alt: 'Hayden Lake waterfront lifestyle',
              desc: 'Private-feeling shoreline, deep clear water, and wooded hillsides. Prices independently of inland Hayden comps.',
            },
            {
              name: 'Stoddard & North Hayden',
              tag: 'Newer Builds · Space',
              img: '/images/field-guide/lake-house-editorial-4k.webp',
              alt: 'Newer residential homes in North Hayden',
              desc: 'Newer 3–4 bedroom homes, RV bays, and quiet cul-de-sacs with quick access to Highway 95 and Coeur d’Alene schools.',
            },
          ],
          spotlightEyebrow: 'The Hayden Advantage',
          spotlightHeadingLead: 'Why buyers zero in on',
          spotlightHeadingEm: 'Hayden.',
          spotlightIntro: 'Three local realities that separate Hayden from neighboring Kootenai County cities.',
          spotlightCards: [
            {
              num: '01',
              title: 'Space Without Isolation',
              desc: 'Larger lots and quieter residential streets while staying 10–15 minutes from downtown Coeur d’Alene restaurants, Kootenai Health, and major retail.',
            },
            {
              num: '02',
              title: 'Hayden Lake & Golf',
              desc: 'Home to Honeysuckle Beach, English Point Recreation Area, Avondale Golf Club, and Hayden Lake Country Club — all within minutes of each other.',
            },
            {
              num: '03',
              title: 'Tight, Resilient Supply',
              desc: 'With 2.1 months of inventory and strong local school demand, well-maintained Hayden homes hold value remarkably well across market cycles.',
            },
          ],
          budgetHeadingLead: 'Hayden homes',
          budgetHeadingEm: 'by price band.',
          costGuideHref: '/articles/how-much-do-homes-cost-hayden-idaho',
          costGuideLabel: 'Read Full Hayden Cost Guide',
          budgetBands: [
            {
              key: 'entry',
              range: '$450K – $525K',
              label: 'Entry Level',
              title: 'Established 3-bedroom homes in central Hayden.',
              desc: 'Clean single-family homes on practical lots. Thin inventory band that rewards buyers who are ready to tour quickly.',
              pockets: 'Central Hayden, Hayden Meadows',
              pace: 'Fast-moving',
              note: 'Watch closely for updated roofs and HVAC systems on older builds.',
            },
            {
              key: 'core',
              range: '$525K – $700K',
              label: 'Market Center',
              title: 'Updated family homes & golf-proximate streets.',
              desc: 'The heart of Hayden — newer 3–4 bedroom floor plans, 3-car garages, mature trees, and access to CdA School District #271.',
              pockets: 'Avondale, Broadmoore, Stoddard Ranch',
              pace: 'Steady — 2.1 months supply',
              note: 'Single-level ranchers in this band draw both families and retirees.',
            },
            {
              key: 'upper',
              range: '$700K – $1.1M',
              label: 'Custom & Acreage',
              title: 'Shop properties, custom builds & lake views.',
              desc: 'Half-acre to multi-acre parcels, custom finishes, detached shops, and elevated Hayden Lake sightlines.',
              pockets: 'Hayden Lake hillside, Rimrock, North Hayden acreage',
              pace: 'Selective',
              note: 'Check well logs and septic capacity on larger rural-edge parcels.',
            },
            {
              key: 'lake',
              range: '$1.1M+',
              label: 'Hayden Lake Waterfront',
              title: 'Private shoreline & premier lakefront estates.',
              desc: 'Direct Hayden Lake frontage with private docks and deep-water access.',
              pockets: 'Hayden Lake perimeter, Mokins Bay, Sportsman Park edge',
              pace: 'Rare turnover',
              note: 'Sun exposure and winter road grade vary sharply around the lake.',
            },
          ],
          faqHeadingLead: 'Hayden questions,',
          faqHeadingEm: 'answered honestly.',
          faqIntro: 'Straight answers on pricing, Hayden Lake waterfront, and how Hayden compares to Coeur d’Alene.',
          faqs: FAQS,
          closingEyebrow: 'Shirin — Hayden REALTOR®',
          closingHeadingLead: 'Exploring',
          closingHeadingEm: 'Hayden?',
          closingCopy: 'Tell me what kind of lot, home, or lake access you’re hoping for — I’ll give you an honest read on what’s available right now.',
        }}
      />
    </>
  )
}
