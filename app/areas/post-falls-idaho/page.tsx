import { heroMetadata, riverfrontCard } from '@/lib/hero-share'
import { BASE_URL, AGENT_ID, BUSINESS_ID, WEBSITE_ID, placeStub, jsonLdGraph } from '@/lib/schema-ids'
import { IDX_SEARCH_BY_AREA } from '@/lib/idx-search'
import AreaGuideTemplate from '@/components/editorial/AreaGuideTemplate'

const PAGE_URL = `${BASE_URL}/areas/post-falls-idaho`

export const metadata = heroMetadata(
  '/areas/post-falls-idaho',
  'Post Falls, Idaho Real Estate & Living Guide',
  'Compare Post Falls homes, Spokane commute tradeoffs, new construction, and ownership costs. A practical relocation and buying guide from Shirin Abplanalp.',
  riverfrontCard,
)

const FAQS = [
  {
    q: 'Where should I start when looking at Post Falls homes for sale?',
    a: 'Start by separating your budget, commute direction, and whether you want newer construction or an established neighborhood near the Spokane River. Post Falls stretches from the Washington state line east toward Coeur d’Alene, and each pocket feels noticeably different.',
  },
  {
    q: 'Is Post Falls a practical place to live if I work in Spokane?',
    a: 'Yes — Post Falls is the closest Idaho city to Spokane on I-90, roughly 22–28 minutes to downtown Spokane off-peak and 30–35 minutes to Spokane International Airport (GEG). Many cross-border commuters choose Post Falls specifically for that drive.',
  },
  {
    q: 'Is Post Falls always cheaper than Coeur d’Alene?',
    a: 'At the median, Post Falls runs roughly $80,000 below Coeur d’Alene (~$521K vs. ~$601K) and delivers more square footage per dollar and newer builds. However, riverfront and custom acreage pockets in Post Falls can easily exceed standard CdA prices.',
  },
  {
    q: 'What is winter snowfall like in Post Falls?',
    a: 'Post Falls sits in one of North Idaho’s lighter snow zones, averaging roughly 40 inches per year — noticeably less than Sandpoint or higher-elevation pockets. Most residential streets are flat and straightforward to navigate in winter.',
  },
  {
    q: 'How competitive is the Post Falls housing market?',
    a: 'Post Falls runs tighter on inventory than Coeur d’Alene at roughly 1.4 months of supply. Well-priced move-in-ready homes under $550K move quickly, so having financing lined up before touring matters.',
  },
]

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Real Estate Services — Post Falls, Idaho',
  serviceType: 'Real estate representation',
  provider: [{ '@id': BUSINESS_ID }, { '@id': AGENT_ID }],
  areaServed: placeStub('postFalls'),
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Post Falls, Idaho Real Estate & Living Guide',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': BUSINESS_ID },
  mainEntity: { '@id': `${PAGE_URL}#service` },
  hasPart: { '@id': `${PAGE_URL}/new-construction#webpage` },
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
    { '@type': 'ListItem', position: 3, name: 'Post Falls, Idaho', item: PAGE_URL },
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

export default function PostFallsAreaPage() {
  const idxUrl = IDX_SEARCH_BY_AREA['post-falls-idaho'] || 'https://shirinabplanalp.jacklinrealestate.com'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph([jsonLdWebPage, jsonLdService, jsonLdBreadcrumb, jsonLdFaq])) }}
      />

      <AreaGuideTemplate
        config={{
          eyebrow: 'Post Falls, Idaho · Community Field Guide',
          titleLead: 'Post Falls',
          titleEm: 'Real Estate.',
          heroLead:
            'Median home: ~$521,000. Newer construction, Spokane River access, ~40 inches of snow, and the fastest I-90 commute to Spokane — at roughly $80K below Coeur d’Alene.',
          heroImage: '/images/community-atlas/post-falls-idaho.webp',
          heroAlt: 'Post Falls, Idaho',
          idxUrl,
          idxLabel: 'Search Post Falls Homes',
          stats: [
            { value: '$521K', label: 'Median Sale Price', sub: '~$80K below CdA' },
            { value: '1.4 mo', label: 'Months of Supply', sub: 'Tightest in county' },
            { value: '25 min', label: 'Spokane Commute', sub: 'Direct I-90 access' },
            { value: '~40 in', label: 'Annual Snowfall', sub: 'Lightest snow zone' },
          ],
          marketHeadingLead: 'The Post Falls market',
          marketHeadingEm: 'right now.',
          marketParagraphs: [
            'Post Falls is Kootenai County’s fastest-moving value market, with a median sale price near $521,000 and roughly 1.4 months of supply. For buyers relocating from Washington, California, or Oregon who want newer floor plans and clean I-90 access, Post Falls often delivers the strongest square-footage-per-dollar equation in the region.',
            'Because inventory stays tight here — especially under $550,000 — preparation matters. New construction communities offer builder incentives and rate buydowns that can meaningfully change your monthly payment compared to resale.',
            'Sitting just 10 minutes west of Coeur d’Alene and 25 minutes east of Spokane, Post Falls lets you enjoy Lake Coeur d’Alene and the Spokane River every weekend without paying the downtown CdA premium.',
          ],
          marketLinks: [
            { label: 'Post Falls New Construction & Builders Guide', href: '/areas/post-falls-idaho/new-construction' },
            { label: 'Post Falls vs. Rathdrum Guide', href: '/articles/post-falls-vs-rathdrum-which-is-right-for-you' },
            { label: '2026 Post Falls Cost Guide', href: '/articles/how-much-do-homes-cost-post-falls-idaho' },
          ],
          advisorRole: 'Post Falls & Kootenai REALTOR®',
          advisorQuote: 'If you want newer construction, easy winter driving, and a 25-minute Spokane commute, Post Falls belongs at the top of your tour.',
          advisorFacts: [
            { label: 'Effective Property Tax', value: '~0.452% (Kootenai)' },
            { label: 'Spokane Drive', value: '22–28 min on I-90' },
            { label: 'Coeur d’Alene Drive', value: '10 min east' },
            { label: 'School District', value: 'Post Falls #273' },
          ],
          hoodHeadingLead: 'Post Falls',
          hoodHeadingEm: 'neighborhoods.',
          hoodIntro: 'From Spokane River corridors to newer prairie master-planned communities, here is how Post Falls breaks down.',
          neighborhoods: [
            {
              name: 'Centennial Trail & Riverfront',
              tag: 'Spokane River · Trails',
              img: '/images/lake-life.jpeg',
              alt: 'Spokane River and waterfront living near Post Falls',
              desc: 'Direct access to the paved Centennial Trail, Q’emiln Park, and river viewpoints. Popular with active buyers who want outdoor access out the front door.',
            },
            {
              name: 'Prairie View & North Prairie',
              tag: 'Family-Friendly · Newer',
              img: '/images/field-guide/townhome-walk.webp',
              alt: 'Newer family neighborhood in North Post Falls',
              desc: 'Clean streets, newer 3–4 bedroom floor plans, parks, and quick access to Post Falls schools. One of the most requested pockets for relocating families.',
            },
            {
              name: 'Summit Ridge & Fieldstone',
              tag: 'Elevated · Modern Builds',
              img: '/images/field-guide/lake-house-editorial-4k.webp',
              alt: 'Modern North Idaho home in Post Falls',
              desc: 'Well-kept newer subdivisions with three-car garages, RV bays, and strong resale liquidity across the $500K–$700K range.',
            },
          ],
          spotlightEyebrow: 'What Buyers Weigh Most',
          spotlightHeadingLead: 'Three reasons buyers choose',
          spotlightHeadingEm: 'Post Falls.',
          spotlightIntro: 'Understanding how Post Falls trades off against Coeur d’Alene and Rathdrum keeps your search focused from day one.',
          spotlightCards: [
            {
              num: '01',
              title: 'New Construction Value',
              desc: 'New build communities in Post Falls start in the low $400Ks and frequently offer closing cost credits or interest-rate buydowns that beat resale monthly payments.',
            },
            {
              num: '02',
              title: 'Cross-Border Commute',
              desc: 'Minutes from the Washington state line on I-90 — making Post Falls the natural anchor for households working in Spokane Valley, downtown Spokane, or flying out of GEG.',
            },
            {
              num: '03',
              title: 'Lighter Prairie Winters',
              desc: 'Averaging ~40 inches of snow on flat prairie terrain, Post Falls offers four full seasons without the heavy snow-removal demands of Sandpoint or mountain elevations.',
            },
          ],
          budgetHeadingLead: 'Post Falls homes',
          budgetHeadingEm: 'by price band.',
          costGuideHref: '/articles/how-much-do-homes-cost-post-falls-idaho',
          costGuideLabel: 'Read Full Post Falls Cost Guide',
          budgetBands: [
            {
              key: 'entry',
              range: '$380K – $460K',
              label: 'Entry & Townhomes',
              title: 'Move-in-ready starters & newer townhomes.',
              desc: 'Clean 3-bedroom homes, select new-build townhomes, and established single-level options. Fast-moving tier with strong first-time buyer demand.',
              pockets: 'Central Post Falls, Crown Reserve, newer townhome pockets',
              pace: 'Very fast — pre-approval essential',
              note: 'Compare builder rate incentives against resale pricing.',
            },
            {
              key: 'core',
              range: '$460K – $600K',
              label: 'Market Center',
              title: 'The sweet spot for modern 3–4 bedroom homes.',
              desc: 'Updated single-family homes with 3-car garages, fenced yards, and proximity to schools and parks — the core of the Post Falls market.',
              pockets: 'Prairie View, Fieldstone, Montrose, Tullamore',
              pace: 'Active — 1.4 months supply keeps inventory lean',
              note: 'Typically $80K–$100K less than comparable homes in CdA.',
            },
            {
              key: 'upper',
              range: '$600K – $850K',
              label: 'Custom & Shop Space',
              title: 'Larger lots, RV garages & upgraded finishes.',
              desc: 'Custom and semi-custom homes with shop buildings, oversized lots, or proximity to the Spokane River and golf corridors.',
              pockets: 'Highlands Golf, Riverbend, North Post Falls custom pockets',
              pace: 'Balanced — room for thoughtful negotiation',
              note: 'Check HOA rules carefully if an RV shop or boat storage is a must-have.',
            },
            {
              key: 'river',
              range: '$850K+',
              label: 'Spokane Riverfront',
              title: 'Private river frontage & estate properties.',
              desc: 'Scarce Spokane River waterfront with private docks and direct boat access to Lake Coeur d’Alene.',
              pockets: 'Spokane River corridor, Post Falls waterfront',
              pace: 'Specialized — limited annual turnover',
              note: 'Verify dock permits, shoreline setbacks, and floodplain details early.',
            },
          ],
          faqHeadingLead: 'Post Falls questions,',
          faqHeadingEm: 'answered honestly.',
          faqIntro: 'Direct answers on commutes, snow, pricing, and how Post Falls compares to Coeur d’Alene.',
          faqs: FAQS,
          closingEyebrow: 'Shirin — Post Falls REALTOR®',
          closingHeadingLead: 'Considering',
          closingHeadingEm: 'Post Falls?',
          closingCopy: 'Tell me your budget and commute needs — I’ll send you the neighborhoods and new-build communities that actually match.',
        }}
      />
    </>
  )
}
