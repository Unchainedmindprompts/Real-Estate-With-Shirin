import type { Metadata } from 'next'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, PLACE } from '@/lib/schema-ids'
import { IDX_SEARCH_BY_AREA } from '@/lib/idx-search'
import AreaGuideTemplate from '@/components/editorial/AreaGuideTemplate'

const PAGE_URL = `${BASE_URL}/areas/kootenai-county`

export const metadata: Metadata = {
  title: 'Kootenai County, Idaho Real Estate & Market Guide',
  description:
    "Kootenai County holds Post Falls, Coeur d'Alene, Hayden, Rathdrum, and Dalton Gardens — the fastest-growing corner of North Idaho. A local REALTOR's county-scale market and tax guide.",
  alternates: { canonical: PAGE_URL },
}

const FAQS = [
  {
    q: 'What cities are in Kootenai County, Idaho?',
    a: 'Kootenai County includes Coeur d’Alene, Post Falls, Hayden, Rathdrum, Dalton Gardens, Spirit Lake, Athol, Harrison, Hauser, and Bayview — covering the heart of North Idaho’s lake and prairie communities.',
  },
  {
    q: 'What is the median home price in Kootenai County in 2026?',
    a: 'County-wide closed sales sit near a $569,900 median, ranging from ~$520K in Post Falls and Rathdrum to ~$553K in Hayden and ~$601K in Coeur d’Alene (with lakefront pricing in its own tier).',
  },
  {
    q: 'What is the property tax rate in Kootenai County?',
    a: 'Kootenai County’s effective property tax rate averages roughly 0.452%, well below most western states. Primary-residence buyers can also file for Idaho’s Homeowner’s Exemption (up to $125,000 off assessed value) after closing.',
  },
  {
    q: 'How is healthcare in Kootenai County?',
    a: 'Kootenai Health in Coeur d’Alene is the region’s primary medical center and holds an ACS-verified Level II Trauma designation — meaning most day-to-day and urgent care happens locally, with Spokane’s major hospitals 35 minutes west for select subspecialties.',
  },
]

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Real Estate Services — Kootenai County, Idaho',
  serviceType: 'Real estate representation',
  provider: { '@id': BUSINESS_ID },
  areaServed: PLACE.kootenai,
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Kootenai County, Idaho Real Estate & Market Guide',
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
    { '@type': 'ListItem', position: 3, name: 'Kootenai County', item: PAGE_URL },
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

export default function KootenaiCountyAreaPage() {
  const idxUrl = IDX_SEARCH_BY_AREA['kootenai-county'] || 'https://shirinabplanalp.jacklinrealestate.com'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      <AreaGuideTemplate
        config={{
          eyebrow: 'Kootenai County, Idaho · County Overview',
          titleLead: 'Kootenai County',
          titleEm: 'Real Estate.',
          heroLead:
            'Home to Coeur d’Alene, Post Falls, Hayden, Rathdrum, and Dalton Gardens. Understand county-wide pricing, property taxes, school districts, and how each city fits together.',
          heroImage: '/images/north-idaho-lake-hero.webp',
          heroAlt: 'Kootenai County, North Idaho',
          idxUrl,
          idxLabel: 'Search Kootenai County Homes',
          stats: [
            { value: '$570K', label: 'County Median', sub: '↑ 4.3% YTD' },
            { value: '0.452%', label: 'Effective Tax Rate', sub: '+ $125K exemption' },
            { value: '35 min', label: 'To Spokane (GEG)', sub: 'I-90 corridor' },
            { value: '3', label: 'School Districts', sub: 'CdA · Post Falls · Lakeland' },
          ],
          marketHeadingLead: 'Kootenai County',
          marketHeadingEm: 'at a glance.',
          marketParagraphs: [
            'Kootenai County is the economic and lifestyle hub of North Idaho — pairing Lake Coeur d’Alene, Hayden Lake, and the Spokane River with I-90 access to Spokane International Airport and regional healthcare at Kootenai Health.',
            'Rather than one uniform market, Kootenai County works as four distinct submarkets within 20 minutes of each other: walkable lakefront Coeur d’Alene, value-driven Post Falls, spacious residential Hayden, and prairie-and-acreage Rathdrum.',
            'Understanding county property taxes (~0.452% effective rate), open-enrollment school boundaries, and prairie aquifer rules helps relocating buyers choose the right town before touring.',
          ],
          marketLinks: [
            { label: '5-City Honest Comparison', href: '/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint' },
            { label: 'North Idaho Property Tax Guide', href: '/articles/north-idaho-property-taxes-county-comparison' },
          ],
          advisorRole: 'Kootenai County REALTOR®',
          advisorQuote: 'Most buyers arrive thinking they know which city they want — and half of them end up choosing a neighbor 10 minutes away once we tour.',
          advisorFacts: [
            { label: 'Primary Medical', value: 'Kootenai Health (Level II)' },
            { label: 'Key Cities', value: 'CdA · Post Falls · Hayden · Rathdrum' },
            { label: 'Homeowner Exemption', value: 'Up to $125,000 off value' },
            { label: 'Major Lakes', value: 'CdA · Hayden · Twin · Spirit' },
          ],
          hoodHeadingLead: 'Kootenai County',
          hoodHeadingEm: 'submarkets.',
          hoodIntro: 'Compare the county’s core cities and small towns side by side.',
          neighborhoods: [
            {
              name: 'Coeur d’Alene & Hayden',
              tag: '$553K – $601K · Lakes & Core',
              img: '/images/field-guide/sunset-over-the-lake.webp',
              alt: "Lake Coeur d'Alene and Hayden corridor",
              desc: 'Downtown walkability, Sherman Avenue, Lake Coeur d’Alene, and Hayden’s larger lots and golf communities — all within CdA School District #271.',
            },
            {
              name: 'Post Falls & State Line',
              tag: '~$521K · I-90 Commute',
              img: '/images/field-guide/townhome-walk.webp',
              alt: 'Post Falls residential neighborhoods',
              desc: 'Newer construction, light winter snowfall (~40 in), Spokane River trails, and the fastest daily drive into Spokane.',
            },
            {
              name: 'Rathdrum, Athol & Bayview',
              tag: 'Prairie · Acreage · Pend Oreille',
              img: '/images/golf-4k.webp',
              alt: 'Open prairie and northern Kootenai County',
              desc: 'Expanding north across the Rathdrum Prairie toward Twin Lakes, Farragut State Park, and the southern tip of Lake Pend Oreille.',
            },
          ],
          spotlightEyebrow: 'County-Level Essentials',
          spotlightHeadingLead: 'Three fundamentals every',
          spotlightHeadingEm: 'Kootenai buyer checks.',
          spotlightIntro: 'Taxes, schools, and infrastructure shape total ownership cost far more than list price alone.',
          spotlightCards: [
            {
              num: '01',
              title: 'Low Property Taxes',
              desc: 'Kootenai County’s ~0.452% effective rate paired with Idaho’s $125,000 Homeowner’s Exemption keeps annual holding costs dramatically lower than coastal metros.',
            },
            {
              num: '02',
              title: 'Open Enrollment Schools',
              desc: 'Three strong districts — Coeur d’Alene #271, Post Falls #273, and Lakeland #272 — plus Idaho’s open-enrollment and charter options give families flexibility.',
            },
            {
              num: '03',
              title: 'Regional Healthcare & Airport',
              desc: 'Full trauma and specialty care at Kootenai Health plus 35–45 minute access to Spokane International Airport (GEG) keep everyday logistics effortless.',
            },
          ],
          budgetHeadingLead: 'Kootenai County homes',
          budgetHeadingEm: 'by price band.',
          costGuideHref: '/articles/north-idaho-cost-of-living-comparison',
          costGuideLabel: 'Read Full Cost of Living Guide',
          budgetBands: [
            {
              key: 'entry',
              range: '$400K – $525K',
              label: 'Entry & Value',
              title: 'Best selection in Post Falls & Rathdrum.',
              desc: 'Move-in-ready 3-bedroom resales and entry new construction communities.',
              pockets: 'Post Falls, Rathdrum, Spirit Lake, Midtown CdA edges',
              pace: 'Fastest-moving band county-wide',
              note: 'Compare builder incentives carefully against resale inventory.',
            },
            {
              key: 'core',
              range: '$525K – $725K',
              label: 'County Core',
              title: 'Wide choice across all four major cities.',
              desc: 'Updated 3–4 bedroom homes, 3-car garages, and desirable school-zone neighborhoods.',
              pockets: 'Coeur d’Alene, Hayden, Post Falls, Rathdrum',
              pace: 'Balanced with room to negotiate',
              note: 'Tour at least two cities in this band to feel the lifestyle difference.',
            },
            {
              key: 'luxury',
              range: '$725K – $1.5M+',
              label: 'Acreage & Waterfront',
              title: 'Dalton Gardens acreage, views & lakefront.',
              desc: 'Custom shop properties, Blackwell Hill views, and Lake Coeur d’Alene or Hayden Lake frontage.',
              pockets: 'Sanders Beach, Blackwell Hill, Hayden Lake, Dalton Gardens',
              pace: 'Specialized',
              note: 'Waterfront and acreage both require dedicated local due diligence.',
            },
          ],
          faqHeadingLead: 'Kootenai County questions,',
          faqHeadingEm: 'answered clearly.',
          faqIntro: 'County-wide facts on cities, taxes, healthcare, and choosing the right submarket.',
          faqs: FAQS,
          closingEyebrow: 'Shirin — Kootenai County REALTOR®',
          closingHeadingLead: 'Narrowing down',
          closingHeadingEm: 'Kootenai County?',
          closingCopy: 'Tell me what matters most — lake access, commute, schools, or acreage — and we’ll map out the exact pockets worth touring.',
        }}
      />
    </>
  )
}
