import type { Metadata } from 'next'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, PLACE } from '@/lib/schema-ids'
import { IDX_SEARCH_BY_AREA } from '@/lib/idx-search'
import AreaGuideTemplate from '@/components/editorial/AreaGuideTemplate'

const PAGE_URL = `${BASE_URL}/areas/sandpoint-idaho`

export const metadata: Metadata = {
  title: 'Sandpoint Idaho Real Estate | Homes for Sale | Shirin Abplanalp',
  description:
    'Looking for homes in Sandpoint Idaho? Shirin Abplanalp is a licensed Sandpoint real estate agent with Berkshire Hathaway HomeServices Jacklin Real Estate. Expert buyer and seller representation.',
  alternates: { canonical: PAGE_URL },
}

const FAQS = [
  {
    q: 'What is the housing market like in Sandpoint Idaho in 2026?',
    a: 'Sandpoint is North Idaho’s premier mountain-and-lake resort town on Lake Pend Oreille, with a median sale price near $616,000. Inventory is more seasonal than Kootenai County, with distinct submarkets for in-town homes, Schweitzer ski properties, and lakefront.',
  },
  {
    q: 'What are the best neighborhoods in Sandpoint Idaho?',
    a: 'Walkable downtown Sandpoint and South Sandpoint offer classic charm near City Beach, Schweitzer Mountain serves ski-in/ski-out and alpine buyers, and Dover Bay & Ponderay deliver newer planned waterfront and prairie-view living.',
  },
  {
    q: 'How much do homes cost in Sandpoint Idaho?',
    a: 'In-town entry homes start around $450K–$525K, core family homes and Dover Bay run $550K–$850K, and Lake Pend Oreille waterfront or Schweitzer mountain estates frequently trade above $1.2M.',
  },
  {
    q: 'How much snow does Sandpoint get in winter?',
    a: 'Sandpoint averages roughly 85–95 inches of snow in town (and far more up on Schweitzer Mountain). It is true four-season mountain living — plan on AWD/4WD, snow tires, and evaluating driveway grade before buying.',
  },
]

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Real Estate Services — Sandpoint, Idaho',
  serviceType: 'Real estate representation',
  provider: { '@id': BUSINESS_ID },
  areaServed: PLACE.sandpoint,
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Sandpoint Idaho Real Estate | Homes for Sale | Shirin Abplanalp',
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
    { '@type': 'ListItem', position: 3, name: 'Sandpoint, Idaho', item: PAGE_URL },
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

export default function SandpointAreaPage() {
  const idxUrl = IDX_SEARCH_BY_AREA['sandpoint-idaho'] || 'https://shirinabplanalp.jacklinrealestate.com'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      <AreaGuideTemplate
        config={{
          eyebrow: 'Sandpoint, Idaho · Community Field Guide',
          titleLead: 'Sandpoint',
          titleEm: 'Real Estate.',
          heroLead:
            'Median home: ~$616,000. Lake Pend Oreille, Schweitzer Mountain skiing, an independent arts-forward downtown, and true four-season mountain living in Bonner County.',
          heroImage: '/images/skiing-action-4k.webp',
          heroAlt: 'Winter alpine skiing above Sandpoint and Schweitzer Mountain',
          idxUrl,
          idxLabel: 'Search Sandpoint Homes',
          stats: [
            { value: '$616K', label: 'Median Sale Price', sub: 'Bonner County hub' },
            { value: '43 mi', label: 'Lake Pend Oreille', sub: 'Idaho’s largest lake' },
            { value: '20 min', label: 'To Schweitzer', sub: '2,900+ skiable acres' },
            { value: '~90 in', label: 'Annual Snowfall', sub: 'True alpine winters' },
          ],
          marketHeadingLead: 'The Sandpoint market',
          marketHeadingEm: 'right now.',
          marketParagraphs: [
            'Sandpoint sits 45 miles north of Coeur d’Alene on the shores of Lake Pend Oreille, framed by the Selkirk and Cabinet Mountains. Buyers who fall in love with Sandpoint aren’t looking for a suburb — they want a genuine mountain-and-lake town with independent restaurants, live music, and Schweitzer skiing 20 minutes up the hill.',
            'With a median near $616,000, Sandpoint’s market is more seasonal and idiosyncratic than Kootenai County. In-town bungalows, Dover Bay marina homes, Schweitzer ski chalets, and rural Bonner County acreage each behave like separate micro-markets.',
            'Because winter snowfall averages ~85–95 inches in town (and far more on the mountain), sun exposure, roof pitch, driveway grade, and winter road maintenance are essential checks on every showing.',
          ],
          marketLinks: [
            { label: '2026 Sandpoint Cost Guide', href: '/articles/how-much-do-homes-cost-sandpoint-idaho' },
            { label: 'Bonner County Guide', href: '/areas/bonner-county' },
          ],
          advisorRole: 'Sandpoint & Bonner County REALTOR®',
          advisorQuote: 'Sandpoint rewards people who genuinely love all four seasons — big lake summers, powder winters, and a small town with real soul.',
          advisorFacts: [
            { label: 'County', value: 'Bonner County' },
            { label: 'Coeur d’Alene Drive', value: '50–55 min south' },
            { label: 'Spokane Airport (GEG)', value: '75–85 min' },
            { label: 'Ski & Lake', value: 'Schweitzer · Pend Oreille' },
          ],
          hoodHeadingLead: 'Sandpoint',
          hoodHeadingEm: 'neighborhoods.',
          hoodIntro: 'From historic walkable downtown streets to marina living in Dover Bay and alpine views at Schweitzer.',
          neighborhoods: [
            {
              name: 'Downtown & South Sandpoint',
              tag: 'Walkable · City Beach',
              img: '/images/river-and-rye-dining-4k.webp',
              alt: 'Downtown Sandpoint dining and historic streets',
              desc: 'Character-filled homes within walking or biking distance of First Avenue, independent coffee shops, the Panida Theater, and Sandpoint City Beach.',
            },
            {
              name: 'Dover Bay & Waterfront',
              tag: 'Marina · Planned Trails',
              img: '/images/lake-life.jpeg',
              alt: 'Waterfront marina lifestyle near Dover Bay and Lake Pend Oreille',
              desc: 'Three miles west of downtown with a full marina, waterfront bungalows, paved trails, and easy Pend Oreille River boat access.',
            },
            {
              name: 'Schweitzer & Selle Valley',
              tag: 'Ski Access · Mountain Views',
              img: '/images/skiing-action-4k.webp',
              alt: 'Schweitzer Mountain skiing and Selkirk views',
              desc: 'Choose between ski-in/ski-out condos and chalets on Schweitzer Mountain or pastoral 5–20 acre valley parcels looking straight up at the Selkirks.',
            },
          ],
          spotlightEyebrow: 'Mountain Town Realities',
          spotlightHeadingLead: 'What to weigh before buying in',
          spotlightHeadingEm: 'Sandpoint.',
          spotlightIntro: 'Honest local context that separates a dream Sandpoint purchase from a winter headache.',
          spotlightCards: [
            {
              num: '01',
              title: 'Snow & Access Engineering',
              desc: 'Steep north-facing driveways look charming in July and turn icy in January. We evaluate road plowing, sun exposure, and heating systems on every tour.',
            },
            {
              num: '02',
              title: 'Airport & Commute Distance',
              desc: 'Sandpoint sits ~75–85 minutes from Spokane International Airport — ideal for remote workers and retirees, less practical for daily Spokane commuters.',
            },
            {
              num: '03',
              title: 'Lake Pend Oreille Waterfront',
              desc: 'Lake Pend Oreille is deep, cold, and vast — shoreline exposure, winter lake drawdowns, and dock permitting vary dramatically bay by bay.',
            },
          ],
          budgetHeadingLead: 'Sandpoint homes',
          budgetHeadingEm: 'by price band.',
          costGuideHref: '/articles/how-much-do-homes-cost-sandpoint-idaho',
          costGuideLabel: 'Read Full Sandpoint Cost Guide',
          budgetBands: [
            {
              key: 'entry',
              range: '$450K – $550K',
              label: 'In-Town Entry',
              title: 'Classic Sandpoint cottages & Ponderay homes.',
              desc: 'Smaller in-town homes, condos, and nearby Ponderay or Kootenai single-family properties.',
              pockets: 'Central Sandpoint, Ponderay, Kootenai',
              pace: 'Steady — thin under-$500K supply',
              note: 'Priest River ($409K median) is 25 minutes west if you want lower entry pricing.',
            },
            {
              key: 'core',
              range: '$550K – $850K',
              label: 'Core & Dover Bay',
              title: 'Updated family homes, Dover Bay & valley views.',
              desc: 'Walkable South Sandpoint homes, Dover Bay residences, and Selle Valley properties with Selkirk Mountain views.',
              pockets: 'South Sandpoint, Dover Bay, Selle Valley',
              pace: 'Seasonal — peaks spring through fall',
              note: 'Look closely at HOA and short-term rental rules if you plan seasonal use.',
            },
            {
              key: 'luxury',
              range: '$850K – $1.5M+',
              label: 'Lake & Schweitzer',
              title: 'Lake Pend Oreille waterfront & ski chalets.',
              desc: 'Private shoreline on Lake Pend Oreille or Pend Oreille River, plus ski-access homes on Schweitzer Mountain.',
              pockets: 'Schweitzer Mountain, Bottle Bay, Garfield Bay, Dover waterfront',
              pace: 'Specialized luxury market',
              note: 'Waterfront sales in Sandpoint average over $1.2M.',
            },
          ],
          faqHeadingLead: 'Sandpoint questions,',
          faqHeadingEm: 'answered honestly.',
          faqIntro: 'Real answers on snowfall, Schweitzer, Lake Pend Oreille waterfront, and Bonner County living.',
          faqs: FAQS,
          closingEyebrow: 'Shirin — Sandpoint REALTOR®',
          closingHeadingLead: 'Drawn to',
          closingHeadingEm: 'Sandpoint?',
          closingCopy: 'Tell me whether you’re picturing walkable downtown, ski access, or quiet Bonner County acreage — I’ll help you focus on the right pockets.',
        }}
      />
    </>
  )
}
