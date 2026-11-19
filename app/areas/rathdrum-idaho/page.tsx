import type { Metadata } from 'next'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, PLACE } from '@/lib/schema-ids'
import { IDX_SEARCH_BY_AREA } from '@/lib/idx-search'
import AreaGuideTemplate from '@/components/editorial/AreaGuideTemplate'

const PAGE_URL = `${BASE_URL}/areas/rathdrum-idaho`

export const metadata: Metadata = {
  title: 'Rathdrum Idaho Real Estate | Homes for Sale | Shirin Abplanalp',
  description:
    'Looking for homes in Rathdrum Idaho? Shirin Abplanalp is a licensed Rathdrum real estate agent with Berkshire Hathaway HomeServices Jacklin Real Estate. Expert buyer and seller representation.',
  alternates: { canonical: PAGE_URL },
}

const FAQS = [
  {
    q: 'What is the housing market like in Rathdrum Idaho in 2026?',
    a: 'Rathdrum has seen strong steady demand from buyers wanting newer construction, prairie views, and more land for their dollar, with a median sale price near $520,000.',
  },
  {
    q: 'What are the best neighborhoods in Rathdrum Idaho?',
    a: 'Popular pockets include newer communities like Thayer Farms and Radiant Lake, established family streets near Lakeland schools, and acreage or lake-adjacent homes stretching north toward Twin Lakes.',
  },
  {
    q: 'How much do homes cost in Rathdrum Idaho?',
    a: 'New construction and resale entry homes start in the mid-$400Ks, core 3–4 bedroom homes run $500K–$650K, and 5-acre prairie or Twin Lakes properties trade from $700K up to $1M+.',
  },
  {
    q: 'What should I check when buying acreage on the Rathdrum Prairie?',
    a: 'Always verify well depth and flow rate, septic permit and drainfield placement, winter snow-plowing responsibility on private roads, and whether CCRs allow detached shops or animals.',
  },
]

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Real Estate Services — Rathdrum, Idaho',
  serviceType: 'Real estate representation',
  provider: { '@id': BUSINESS_ID },
  areaServed: PLACE.rathdrum,
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Rathdrum Idaho Real Estate | Homes for Sale | Shirin Abplanalp',
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
    { '@type': 'ListItem', position: 3, name: 'Rathdrum, Idaho', item: PAGE_URL },
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

export default function RathdrumAreaPage() {
  const idxUrl = IDX_SEARCH_BY_AREA['rathdrum-idaho'] || 'https://shirinabplanalp.jacklinrealestate.com'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      <AreaGuideTemplate
        config={{
          eyebrow: 'Rathdrum, Idaho · Community Field Guide',
          titleLead: 'Rathdrum',
          titleEm: 'Real Estate.',
          heroLead:
            'Median home: ~$520,000. Open Rathdrum Prairie views, newer construction communities, Twin Lakes proximity, and genuine elbow room in Kootenai County.',
          heroImage: '/images/community-atlas/rathdrum-idaho.webp',
          heroAlt: 'Rathdrum, Idaho',
          idxUrl,
          idxLabel: 'Search Rathdrum Homes',
          stats: [
            { value: '$520K', label: 'Median Sale Price', sub: 'Strong prairie value' },
            { value: 'Lakeland', label: 'School District #272', sub: 'Community-focused' },
            { value: '32 min', label: 'Spokane Commute', sub: 'Hwy 53 & I-90' },
            { value: '~45 in', label: 'Annual Snowfall', sub: 'Prairie microclimate' },
          ],
          marketHeadingLead: 'The Rathdrum market',
          marketHeadingEm: 'right now.',
          marketParagraphs: [
            'Rathdrum sits at the base of Rathdrum Mountain on the northern edge of the Rathdrum Prairie — offering small-town quiet, big mountain views, and some of Kootenai County’s best new-construction and acreage value.',
            'With a median near $520,000 (virtually tied with Post Falls), buyers choose Rathdrum when they want newer floor plans, larger yards, shop-friendly parcels, or quick access to Twin Lakes and Spirit Lake.',
            'Whether you’re looking inside a modern neighborhood or evaluating 5 acres on the prairie, knowing well depths, aquifer septic standards, and winter road access up front makes all the difference.',
          ],
          marketLinks: [
            { label: '2026 Rathdrum Cost Guide', href: '/articles/how-much-do-homes-cost-rathdrum-idaho' },
            { label: 'Prairie Wells, Septic & Roads Guide', href: '/articles/buying-property-prairie-wells-septic-roads' },
          ],
          advisorRole: 'Rathdrum & Kootenai REALTOR®',
          advisorQuote: 'Rathdrum gives you wide-open prairie skies, newer builds, and real room to spread out without leaving Kootenai County.',
          advisorFacts: [
            { label: 'Effective Property Tax', value: '~0.452% (Kootenai)' },
            { label: 'Coeur d’Alene Drive', value: '18–22 min' },
            { label: 'Post Falls Drive', value: '12–15 min' },
            { label: 'Nearby Lakes', value: 'Twin Lakes · Hauser Lake' },
          ],
          hoodHeadingLead: 'Rathdrum',
          hoodHeadingEm: 'pockets & surroundings.',
          hoodIntro: 'From master-planned new-build communities to Twin Lakes and open prairie acreage.',
          neighborhoods: [
            {
              name: 'Thayer Farms & Radiant Lake',
              tag: 'Newer Builds · Parks',
              img: '/images/field-guide/townhome-walk.webp',
              alt: 'Newer residential street in Rathdrum, Idaho',
              desc: 'Modern single-family communities with mountain backdrops, neighborhood parks, and clean builder warranties.',
            },
            {
              name: 'Twin Lakes & Foothills',
              tag: 'Lake Access · Wooded',
              img: '/images/lake-life.jpeg',
              alt: 'Twin Lakes water lifestyle near Rathdrum',
              desc: 'Just north of town — forested lots, Twin Lakes Village Golf Club, and a quieter four-season lake community.',
            },
            {
              name: 'Rathdrum Prairie Acreage',
              tag: '1–5+ Acres · Shops',
              img: '/images/golf-4k.webp',
              alt: 'Open prairie views near Rathdrum, Idaho',
              desc: 'Level pasture and mountain-view parcels prized by buyers needing detached shops, RV storage, or room for horses.',
            },
          ],
          spotlightEyebrow: 'Local Due Diligence',
          spotlightHeadingLead: 'What matters most when buying in',
          spotlightHeadingEm: 'Rathdrum.',
          spotlightIntro: 'Rathdrum combines subdivision living with rural prairie parcels — each has its own checklist.',
          spotlightCards: [
            {
              num: '01',
              title: 'Aquifer & Septic Rules',
              desc: 'The Rathdrum Prairie sits over the Spokane Valley–Rathdrum Prairie Aquifer. On acreage without city sewer, verify septic permitting and lot-size minimums early.',
            },
            {
              num: '02',
              title: 'New Build vs. Resale',
              desc: 'Compare finished price to finished price — including landscaping, fencing, blinds, and builder rate buydowns — before choosing new construction over resale.',
            },
            {
              num: '03',
              title: 'Commute & Growth',
              desc: 'Highway 41 and Highway 53 connect Rathdrum cleanly to Post Falls, Coeur d’Alene, and Spokane Valley while preserving a calmer small-town pace.',
            },
          ],
          budgetHeadingLead: 'Rathdrum homes',
          budgetHeadingEm: 'by price band.',
          costGuideHref: '/articles/how-much-do-homes-cost-rathdrum-idaho',
          costGuideLabel: 'Read Full Rathdrum Cost Guide',
          budgetBands: [
            {
              key: 'entry',
              range: '$430K – $500K',
              label: 'Entry & New Plans',
              title: 'New construction starters & clean resales.',
              desc: '3-bedroom single-family homes and newer community plans with practical layouts.',
              pockets: 'Central Rathdrum, Thayer Farms North',
              pace: 'Steady demand',
              note: 'Ask about builder closing-cost incentives on quick-move-in homes.',
            },
            {
              key: 'core',
              range: '$500K – $650K',
              label: 'Market Center',
              title: 'Spacious 3–4 bedroom homes with 3-car garages.',
              desc: 'The core of Rathdrum — newer builds, fenced lots, and mountain views.',
              pockets: 'Radiant Lake, Timberline, Twin Lakes Village',
              pace: 'Balanced',
              note: 'Strong value compared to similar square footage in Coeur d’Alene.',
            },
            {
              key: 'acreage',
              range: '$650K – $950K+',
              label: 'Acreage & Twin Lakes',
              title: 'Shop properties, 2–5 acre parcels & lake homes.',
              desc: 'Custom homes on acreage, detached shops, or lake-proximate residences near Twin Lakes.',
              pockets: 'Rathdrum Prairie, Twin Lakes, Spirit Lake corridor',
              pace: 'Specialized',
              note: 'Always pull well logs and road maintenance agreements during inspection.',
            },
          ],
          faqHeadingLead: 'Rathdrum questions,',
          faqHeadingEm: 'answered honestly.',
          faqIntro: 'Practical answers on prairie acreage, new construction, and daily life in Rathdrum.',
          faqs: FAQS,
          closingEyebrow: 'Shirin — Rathdrum REALTOR®',
          closingHeadingLead: 'Looking at',
          closingHeadingEm: 'Rathdrum?',
          closingCopy: 'Whether you want a newer neighborhood home or five acres with a shop, I’ll help you sort the right pockets quickly.',
        }}
      />
    </>
  )
}
