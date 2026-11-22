import { heroMetadata, riverfrontCard } from '@/lib/hero-share'
import { BASE_URL, AGENT_ID, BUSINESS_ID, WEBSITE_ID, placeStub, jsonLdGraph } from '@/lib/schema-ids'
import { IDX_SEARCH_BY_AREA } from '@/lib/idx-search'
import AreaGuideTemplate from '@/components/editorial/AreaGuideTemplate'

const PAGE_URL = `${BASE_URL}/areas/bonner-county`

export const metadata = heroMetadata(
  '/areas/bonner-county',
  'Bonner County, Idaho Real Estate & Rural Market Guide',
  "Bonner County is Sandpoint, Ponderay, Priest River, Priest Lake, and Schweitzer — quieter, more rural, and a different set of buying considerations than Kootenai County. A local REALTOR's honest guide.",
  riverfrontCard,
)

const FAQS = [
  {
    q: 'What towns and communities are in Bonner County, Idaho?',
    a: 'Bonner County centers on Sandpoint and Ponderay on Lake Pend Oreille, plus Dover, Kootenai, Sagle, Hope, Clark Fork, Priest River, and Priest Lake.',
  },
  {
    q: 'How is Bonner County different from Kootenai County for home buyers?',
    a: 'Bonner County is noticeably quieter, more wooded, and more rural — with lower raw land prices per acre (~$37K median vs. ~$57K in Kootenai), heavier winter snowfall, and a longer drive to Spokane International Airport.',
  },
  {
    q: 'What does snowfall look like across Bonner County?',
    a: 'Snowfall increases steadily as you head north and climb in elevation: Sandpoint averages ~85–95 inches per year, while Priest Lake and Schweitzer Mountain receive well over 120 inches.',
  },
  {
    q: 'What due diligence is critical when buying rural Bonner County property?',
    a: 'Verify legal year-round road access and snow-plowing agreements, well depth and water quality, septic permit history, power-line distance on raw land, and wildfire insurance availability before removing contingencies.',
  },
]

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Real Estate Services — Bonner County, Idaho',
  serviceType: 'Real estate representation',
  provider: [{ '@id': BUSINESS_ID }, { '@id': AGENT_ID }],
  areaServed: placeStub('bonner'),
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Bonner County, Idaho Real Estate & Rural Market Guide',
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
    { '@type': 'ListItem', position: 3, name: 'Bonner County', item: PAGE_URL },
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

export default function BonnerCountyAreaPage() {
  const idxUrl = IDX_SEARCH_BY_AREA['bonner-county'] || 'https://shirinabplanalp.jacklinrealestate.com'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph([jsonLdWebPage, jsonLdService, jsonLdBreadcrumb, jsonLdFaq])) }}
      />

      <AreaGuideTemplate
        config={{
          eyebrow: 'Bonner County, Idaho · Rural & Lake Guide',
          titleLead: 'Bonner County',
          titleEm: 'Real Estate.',
          heroLead:
            'Sandpoint, Ponderay, Sagle, Priest River, and Priest Lake. Quieter forests, big alpine lakes, more land per dollar, and a distinct rural buying checklist compared to Kootenai County.',
          heroImage: '/images/northern-idaho-hero.webp',
          heroAlt: 'Bonner County, North Idaho',
          idxUrl,
          idxLabel: 'Search Bonner County Homes',
          stats: [
            { value: '$616K', label: 'Sandpoint Median', sub: 'County anchor' },
            { value: '$409K', label: 'Priest River Median', sub: 'Affordable gateway' },
            { value: '$37K', label: 'Median / Acre', sub: 'Raw land (Bonner)' },
            { value: '90–120"', label: 'Annual Snowfall', sub: 'True winter country' },
          ],
          marketHeadingLead: 'Bonner County',
          marketHeadingEm: 'explained honestly.',
          marketParagraphs: [
            'Drive north past Athol and the landscape opens into dense timber, Lake Pend Oreille, and the Selkirk Mountains. Bonner County attracts buyers looking for real privacy, forested acreage, ski access at Schweitzer, or the untamed beauty of Priest Lake.',
            'Prices span a wide spectrum — from Priest River’s approachable ~$409,000 median to Sandpoint’s ~$616,000 median and multi-million-dollar Lake Pend Oreille and Priest Lake waterfront estates.',
            'Buying in Bonner County requires a sharper rural due-diligence checklist than suburban Kootenai County: legal easements, winter road plowing, well flow, septic perc, power runs, and wildfire insurance all need answers before closing.',
          ],
          marketLinks: [
            { label: 'Buying Land in North Idaho Guide', href: '/articles/buying-land-north-idaho-cost-per-acre-perc-power-access' },
            { label: 'Priest River Real Estate Guide', href: '/articles/priest-river-idaho-real-estate-guide' },
          ],
          advisorRole: 'Bonner County REALTOR®',
          advisorQuote: 'Bonner County is pure North Idaho — just make sure you inspect the road, the well, and the winter sun before you fall in love with the view.',
          advisorFacts: [
            { label: 'Anchor Town', value: 'Sandpoint & Ponderay' },
            { label: 'Affordable Pocket', value: 'Priest River (~$409K)' },
            { label: 'Premier Lakes', value: 'Pend Oreille · Priest Lake' },
            { label: 'Winter Access', value: 'AWD + Plow Plan Essential' },
          ],
          hoodHeadingLead: 'Bonner County',
          hoodHeadingEm: 'communities.',
          hoodIntro: 'From Sandpoint’s lively downtown to Sagle’s wooded acreage and Priest River’s river-valley value.',
          neighborhoods: [
            {
              name: 'Sandpoint, Dover & Ponderay',
              tag: 'Town Core · Marina',
              img: '/images/skiing-action-4k.webp',
              alt: 'Sandpoint and Schweitzer mountain area',
              desc: 'The commercial, dining, and cultural heart of Bonner County with Lake Pend Oreille beaches and 20-minute access to Schweitzer Mountain.',
            },
            {
              name: 'Sagle, Hope & Clark Fork',
              tag: 'Forested Acreage · East Shore',
              img: '/images/field-guide/lake-house-editorial-4k.webp',
              alt: 'Wooded residential acreage in Sagle and Bonner County',
              desc: 'South and east of Sandpoint across the Long Bridge — prized for quiet timbered parcels, dramatic lake views, and slower rural rhythms.',
            },
            {
              name: 'Priest River & Priest Lake',
              tag: 'Value Gateway · Crown Jewel',
              img: '/images/lake-life.jpeg',
              alt: 'Priest River and Priest Lake waters in Bonner County',
              desc: 'Priest River delivers strong affordability (~$409K median) along the Pend Oreille River, while Priest Lake to the north is North Idaho’s legendary wilderness lake.',
            },
          ],
          spotlightEyebrow: 'Rural Buying Checklist',
          spotlightHeadingLead: 'Three checks that protect',
          spotlightHeadingEm: 'Bonner County buyers.',
          spotlightIntro: 'Rural mountain properties reward thorough preparation before contingencies expire.',
          spotlightCards: [
            {
              num: '01',
              title: 'Easements & Winter Roads',
              desc: 'Confirm recorded legal access and who actually plows private roads in January — especially on forested parcels off county-maintained highways.',
            },
            {
              num: '02',
              title: 'Wells, Septic & Power',
              desc: 'Pull Idaho well driller logs, verify Panhandle Health septic permits, and price out power-line trenching if you are considering raw acreage.',
            },
            {
              num: '03',
              title: 'Wildfire Insurance Quotes',
              desc: 'Obtain binding homeowners insurance quotes early during inspection — timbered rural lots and distance from hydrants can affect carrier options.',
            },
          ],
          budgetHeadingLead: 'Bonner County homes',
          budgetHeadingEm: 'by price band.',
          costGuideHref: '/articles/buying-land-north-idaho-cost-per-acre-perc-power-access',
          costGuideLabel: 'Read Land & Acreage Cost Guide',
          budgetBands: [
            {
              key: 'entry',
              range: '$375K – $500K',
              label: 'Priest River & Rural Entry',
              title: 'Approachable small-town homes & starter acreage.',
              desc: 'Strongest value in Priest River, Blanchard, and Ponderay/Kootenai pockets.',
              pockets: 'Priest River, Oldtown, Ponderay, Careywood',
              pace: 'Steady',
              note: 'Priest River runs roughly $210K below Sandpoint’s median.',
            },
            {
              key: 'core',
              range: '$500K – $850K',
              label: 'Sandpoint & Wooded Acreage',
              title: 'In-town Sandpoint, Sagle & 5–10 acre retreats.',
              desc: 'The heart of Bonner County — custom timbered homes, shops, and valley mountain views.',
              pockets: 'Sandpoint, Sagle, Dover Bay, Selle Valley',
              pace: 'Seasonal',
              note: 'Check internet options (fiber vs. Starlink) if working remotely.',
            },
            {
              key: 'waterfront',
              range: '$850K – $2M+',
              label: 'Lake Pend Oreille & Priest Lake',
              title: 'Iconic waterfront & Schweitzer ski estates.',
              desc: 'Private shoreline on Lake Pend Oreille, Pend Oreille River, or Priest Lake, plus ski-access mountain homes.',
              pockets: 'Hope, Garfield Bay, Priest Lake, Schweitzer',
              pace: 'Scarce legacy inventory',
              note: 'Many premier waterfront properties transact quietly or seasonally.',
            },
          ],
          faqHeadingLead: 'Bonner County questions,',
          faqHeadingEm: 'answered honestly.',
          faqIntro: 'Real answers on rural land, snowfall, Priest River, and how Bonner compares to Kootenai County.',
          faqs: FAQS,
          closingEyebrow: 'Shirin — Bonner County REALTOR®',
          closingHeadingLead: 'Exploring',
          closingHeadingEm: 'Bonner County?',
          closingCopy: 'Whether you’re looking at Sandpoint, Sagle acreage, or Priest River, I’ll help you sort the right parcels and avoid rural surprises.',
        }}
      />
    </>
  )
}
