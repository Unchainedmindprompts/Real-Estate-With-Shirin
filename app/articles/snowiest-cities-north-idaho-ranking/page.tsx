import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Snowiest Cities in North Idaho: A Data-Backed Ranking | Shirin Abplanalp',
  description:
    'A data-backed ranking of the 10 snowiest towns in North Idaho, from Post Falls (40") to Priest Lake (120"), with buyer implications for each snow zone. Sources: NOAA NCEI, NWS Spokane, NRCS SNOTEL.',
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles/snowiest-cities-north-idaho-ranking',
  },
  openGraph: {
    title: 'Snowiest Cities in North Idaho: A Data-Backed Ranking',
    description:
      'Post Falls gets 40 inches. Priest Lake gets 120. A town-by-town snowfall ranking with real estate implications for buyers.',
    url: 'https://www.realestatewithshirin.com/articles/snowiest-cities-north-idaho-ranking',
    type: 'article',
    publishedTime: '2026-05-27',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/north-idaho-snowfall-ranking.webp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/snowiest-cities-north-idaho-ranking#article',
  headline: 'Snowiest Cities in North Idaho: A Data-Backed Ranking',
  description:
    'A data-backed ranking of the 10 snowiest towns in North Idaho, from Post Falls (40") to Priest Lake (120"), with buyer implications for each snow zone. Sources: NOAA NCEI, NWS Spokane, NRCS SNOTEL.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/north-idaho-snowfall-ranking.webp',
    width: 1672,
    height: 941,
  },
  author: {
    '@type': 'Person',
    '@id': 'https://www.realestatewithshirin.com/#agent',
    name: 'Shirin Abplanalp',
    jobTitle: 'Licensed REALTOR®',
    url: 'https://www.realestatewithshirin.com/about',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Real Estate License',
        identifier: '1371861',
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'Idaho Real Estate Commission',
          url: 'https://irec.idaho.gov',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Designation',
        name: 'Seniors Real Estate Specialist®',
        abbreviation: 'SRES®',
        recognizedBy: {
          '@type': 'Organization',
          name: 'National Association of REALTORS®',
          url: 'https://www.nar.realtor',
          sameAs: 'https://en.wikipedia.org/wiki/National_Association_of_Realtors',
        },
      },
    ],
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.realestatewithshirin.com/#business',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.realestatewithshirin.com/images/shirin-logo.png',
      width: 1254,
      height: 1254,
    },
  },
  isPartOf: {
    '@type': 'CollectionPage',
    '@id': 'https://www.realestatewithshirin.com/articles',
    name: 'Northern Idaho Real Estate Articles',
    url: 'https://www.realestatewithshirin.com/articles',
  },
  datePublished: '2026-05-27T00:00:00-07:00',
  dateModified: '2026-05-27T00:00:00-07:00',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatewithshirin.com/articles/snowiest-cities-north-idaho-ranking',
  },
  url: 'https://www.realestatewithshirin.com/articles/snowiest-cities-north-idaho-ranking',
  keywords: [
    'snowiest cities North Idaho',
    'North Idaho snowfall ranking',
    'Post Falls snowfall',
    'Sandpoint snow',
    'Priest Lake snow',
    'Wallace Idaho snowfall',
    'Bonner County snow belt',
    'Shoshone County snow',
    'North Idaho winter',
    'North Idaho relocation',
    'NOAA snowfall data Idaho',
    'Kootenai County winter',
  ],
  articleSection: 'North Idaho Buyer Guides',
  wordCount: 3400,
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    geo: { '@type': 'GeoShape', box: '45.5 -117.5 49.0 -114.5' },
  },
  about: [
    { '@type': 'City', name: 'Post Falls', sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Rathdrum', sameAs: 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: "Coeur d'Alene", sameAs: "https://en.wikipedia.org/wiki/Coeur_d'Alene,_Idaho", containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Hayden', sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'St. Maries', sameAs: 'https://en.wikipedia.org/wiki/St._Maries,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Benewah County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Kellogg', sameAs: 'https://en.wikipedia.org/wiki/Kellogg,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Shoshone County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Bonners Ferry', sameAs: 'https://en.wikipedia.org/wiki/Bonners_Ferry,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Boundary County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Sandpoint', sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Priest River', sameAs: 'https://en.wikipedia.org/wiki/Priest_River,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Wallace', sameAs: 'https://en.wikipedia.org/wiki/Wallace,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Shoshone County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'Place', name: 'Priest Lake', containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
  ],
  mentions: [
    {
      '@type': 'GovernmentOrganization',
      name: 'NOAA National Centers for Environmental Information',
      url: 'https://www.ncei.noaa.gov/',
      sameAs: 'https://en.wikipedia.org/wiki/National_Centers_for_Environmental_Information',
    },
    {
      '@type': 'GovernmentOrganization',
      name: 'National Weather Service Spokane Forecast Office',
      url: 'https://www.weather.gov/otx/',
      parentOrganization: {
        '@type': 'GovernmentOrganization',
        name: 'National Oceanic and Atmospheric Administration',
        url: 'https://www.noaa.gov/',
        sameAs: 'https://en.wikipedia.org/wiki/National_Oceanic_and_Atmospheric_Administration',
      },
    },
    {
      '@type': 'GovernmentOrganization',
      name: 'USDA Natural Resources Conservation Service',
      url: 'https://www.nrcs.usda.gov/',
      sameAs: 'https://en.wikipedia.org/wiki/Natural_Resources_Conservation_Service',
    },
    { '@type': 'Place', name: 'Schweitzer Mountain Resort', url: 'https://www.schweitzer.com/' },
    { '@type': 'Place', name: 'Silver Mountain Resort', url: 'https://www.silvermt.com/' },
    { '@type': 'Place', name: 'Lookout Pass Ski Area', url: 'https://www.skilookout.com/' },
  ],
  citation: [
    { '@type': 'WebPage', name: 'NOAA NCEI U.S. Climate Normals 1991–2020', url: 'https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals' },
    { '@type': 'WebPage', name: 'National Weather Service Spokane — Regional Climate', url: 'https://www.weather.gov/otx/' },
    { '@type': 'WebPage', name: 'NRCS SNOTEL Data Network — Idaho', url: 'https://www.nrcs.usda.gov/wps/portal/wcc/home/snowClimateMonitoring/snotel/' },
    { '@type': 'WebPage', name: 'Schweitzer Mountain Resort Stats and Info', url: 'https://www.schweitzer.com/discover-schweitzer/stats-and-info' },
    { '@type': 'WebPage', name: 'Silver Mountain Resort — About', url: 'https://www.silvermt.com/about/' },
    { '@type': 'WebPage', name: 'BestPlaces Post Falls Climate Data', url: 'https://www.bestplaces.net/climate/city/idaho/post_falls' },
    { '@type': 'WebPage', name: 'BestPlaces Sandpoint Climate Data', url: 'https://www.bestplaces.net/climate/city/idaho/sandpoint' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/snowiest-cities-north-idaho-ranking#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which North Idaho city gets the most snow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Among incorporated towns, Priest River averages 72–81 inches per year and Wallace averages 73–82 inches — both among the snowiest in the region. The Priest Lake area, an unincorporated community in Bonner County, is the clear overall leader at roughly 120 inches annually. On the mountain side, Schweitzer Mountain near Sandpoint and Lookout Pass near Wallace each average around 300+ inches at summit elevation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Priest Lake an incorporated city?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Priest Lake is an unincorporated community and a lake in Bonner County, not an incorporated city. When people reference snowfall at Priest Lake, they mean NOAA station data or NRCS SNOTEL readings from the surrounding area — which average around 120 inches annually, roughly triple the Rathdrum Prairie. The nearby communities of Coolin and Nordman sit in this same snow zone.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Wallace sometimes show more snow than Sandpoint even though Sandpoint is farther north?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Wallace sits at roughly 2,750 feet in a deep Silver Valley canyon — significantly higher than Sandpoint's 2,100 feet at lake level. Elevation is a bigger driver of snowfall than latitude in this part of Idaho. Sandpoint's town-level figures (70+ inches) understate the area because the nearby mountains are much snowier. Similarly, Wallace's canyon location catches orographic lift from systems tracking up the St. Joe River drainage, producing heavier totals than lower-elevation neighbors just a few miles away.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the snowiest mountain resort in North Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schweitzer Mountain Resort near Sandpoint and Lookout Pass Ski Area on the Idaho–Montana border near Wallace are both among the snowiest in the Pacific Northwest, each averaging 300+ inches annually. Schweitzer averages roughly 300 inches at summit elevation; Lookout Pass averages around 350 inches. Silver Mountain near Kellogg runs lighter — roughly 150–200 inches at resort elevation — though its compact Silver Valley canyon can produce heavy localized events.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does North Idaho snowfall affect home insurance rates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not as an explicit line-item the way flood zones do — Idaho insurers don't publish snow-zone rating adjustments. But snow load matters indirectly: most lenders and insurers expect homes in Bonner and Shoshone counties to meet IRC R301 snow load design requirements (typically 40–70 psf). Homes without adequate roof pitch, inadequate structural framing, or rooflines prone to snow retention can create issues with underwriting. It's one of the structural factors worth reviewing before you make an offer in a high-snow zone.",
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I look up historical snowfall for a specific North Idaho address?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three reliable sources: (1) NOAA NCEI Climate Data Online at ncei.noaa.gov — pull 1991–2020 climate normals from the nearest station; (2) NWS Spokane at weather.gov/otx covers the entire Idaho Panhandle with historical data by location; (3) NRCS SNOTEL network provides snowpack data for mountain and rural areas not well served by NOAA surface stations. For a buyer, cross-reference all three and note which station is geographically closest to the specific property.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the real difference for a home buyer between the Rathdrum Prairie and the Bonner County snow belt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "On a standard subdivision lot: the Rathdrum Prairie (Post Falls, Rathdrum, Hayden, CdA) needs a snowblower. Bonner County (Sandpoint, Priest River) likely needs a tractor with a blade or blower if you're on rural acreage. The other key difference is ground cover duration: the prairie averages 30–60 days of continuous snow cover per winter in broken stretches. Sandpoint averages 70–90 continuous days. That means more per-event snow management, more equipment wear, and more consideration for roof loads and private road access on rural properties.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/snowiest-cities-north-idaho-ranking#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Snowiest Cities in North Idaho: A Data-Backed Ranking',
      item: 'https://www.realestatewithshirin.com/articles/snowiest-cities-north-idaho-ranking',
    },
  ],
}

const snowfallRanking = [
  { rank: 1, town: 'Post Falls', county: 'Kootenai', inches: 40, label: '~40"', pct: 33, zone: 1 },
  { rank: 2, town: 'Rathdrum', county: 'Kootenai', inches: 41, label: '~41"', pct: 34, zone: 1 },
  { rank: 3, town: "Coeur d'Alene / Hayden", county: 'Kootenai', inches: 43, label: '40–45"', pct: 36, zone: 1 },
  { rank: 4, town: 'St. Maries', county: 'Benewah', inches: 58, label: '~58"', pct: 48, zone: 2 },
  { rank: 5, town: 'Kellogg', county: 'Shoshone', inches: 61, label: '~61"', pct: 51, zone: 2 },
  { rank: 6, town: 'Bonners Ferry', county: 'Boundary', inches: 63, label: '63" normal', pct: 53, zone: 2 },
  { rank: 7, town: 'Sandpoint', county: 'Bonner', inches: 70, label: '70.3"', pct: 58, zone: 3 },
  { rank: 8, town: 'Priest River', county: 'Bonner', inches: 77, label: '72–81"', pct: 64, zone: 3 },
  { rank: 9, town: 'Wallace', county: 'Shoshone', inches: 78, label: '73–82"', pct: 65, zone: 3 },
  { rank: 10, town: 'Priest Lake area', county: 'Bonner', inches: 120, label: '~120"', pct: 100, zone: 3 },
]

const mountainResorts = [
  { name: 'Schweitzer Mountain', location: 'Sandpoint area', county: 'Bonner', avg: '~300"', note: 'Summit avg, 11 mi from Sandpoint' },
  { name: 'Lookout Pass Ski Area', location: 'Near Wallace', county: 'Shoshone/Mineral', avg: '~350"', note: 'Idaho–Montana border summit' },
  { name: 'Silver Mountain Resort', location: 'Kellogg', county: 'Shoshone', avg: '150–200"', note: 'Resort elevation, Silver Valley' },
]

const buyerZones = [
  {
    zone: 'Zone 1',
    label: 'Rathdrum Prairie Floor',
    towns: 'Post Falls · Rathdrum · Coeur d\'Alene · Hayden',
    snowRange: '40–45" avg',
    groundCover: '30–60 days (broken stretches)',
    vehicle: 'FWD + winter tires OK on plowed routes',
    driveway: 'Single-stage snowblower or shovel',
    rural: 'Compact tractor useful for acreage ≥ ¼ mile driveway',
    roof: 'Standard framing adequate',
  },
  {
    zone: 'Zone 2',
    label: 'The Middle Belt',
    towns: 'St. Maries · Kellogg · Bonners Ferry',
    snowRange: '58–63" avg',
    groundCover: '50–80 days',
    vehicle: 'AWD or 4WD recommended',
    driveway: 'Two-stage snowblower or tractor',
    rural: 'Tractor with blade/blower for rural properties',
    roof: 'Verify snow load rating on older structures',
  },
  {
    zone: 'Zone 3',
    label: 'Heavy Snow Zone',
    towns: 'Sandpoint · Priest River · Wallace · Priest Lake area',
    snowRange: '70–120" avg',
    groundCover: '70–90+ continuous days',
    vehicle: 'AWD/4WD with dedicated winter tires — non-negotiable',
    driveway: 'Tractor with front blade or blower (rural); two-stage blower (in-town)',
    rural: 'Plan for roof loads, private road access, propane/well access in deep snow',
    roof: 'Snow load design requirements essential — verify before offer',
  },
]

const faqs = [
  {
    q: 'Which North Idaho city gets the most snow?',
    a: 'Among incorporated towns, Priest River averages 72–81 inches per year and Wallace averages 73–82 inches — both among the snowiest in the region. The Priest Lake area, an unincorporated community in Bonner County, is the clear overall leader at roughly 120 inches annually. On the mountain side, Schweitzer Mountain near Sandpoint and Lookout Pass near Wallace each average around 300+ inches at summit elevation.',
  },
  {
    q: 'Is Priest Lake an incorporated city?',
    a: "No. Priest Lake is an unincorporated community and a lake in Bonner County, not an incorporated city. When people reference snowfall at Priest Lake, they mean NOAA station data or NRCS SNOTEL readings from the surrounding area — which average around 120 inches annually, roughly triple the Rathdrum Prairie.",
  },
  {
    q: 'Why does Wallace sometimes show more snow than Sandpoint even though Sandpoint is farther north?',
    a: "Wallace sits at roughly 2,750 feet in a deep Silver Valley canyon — significantly higher than Sandpoint's 2,100 feet at lake level. Elevation is a bigger driver of snowfall than latitude in this part of Idaho. Wallace's canyon location also catches orographic lift from systems tracking up the St. Joe River drainage, producing heavier totals than lower-elevation neighbors just a few miles away.",
  },
  {
    q: 'What is the snowiest mountain resort in North Idaho?',
    a: 'Schweitzer Mountain Resort near Sandpoint and Lookout Pass Ski Area on the Idaho–Montana border near Wallace are both among the snowiest in the Pacific Northwest, each averaging 300+ inches annually. Silver Mountain near Kellogg runs lighter — roughly 150–200 inches at resort elevation.',
  },
  {
    q: 'Does North Idaho snowfall affect home insurance rates?',
    a: "Not as an explicit line-item the way flood zones do. But snow load matters indirectly: homes in Bonner and Shoshone counties are generally expected to meet IRC R301 snow load design requirements (typically 40–70 psf). Homes without adequate roof pitch or structural framing can create underwriting issues. It's a structural factor worth reviewing before making an offer in any high-snow zone.",
  },
  {
    q: 'Where can I look up historical snowfall for a specific North Idaho address?',
    a: 'Three reliable sources: (1) NOAA NCEI Climate Data Online — pull 1991–2020 climate normals from the nearest station; (2) NWS Spokane at weather.gov/otx covers the entire Panhandle; (3) NRCS SNOTEL network provides snowpack data for mountain and rural areas. Cross-reference all three and note which station is geographically closest to the property.',
  },
  {
    q: 'What is the real practical difference for a home buyer between the Rathdrum Prairie and the Bonner County snow belt?',
    a: "On a standard subdivision lot: the Rathdrum Prairie needs a snowblower. Bonner County rural acreage likely needs a tractor with a blade. The other key difference is ground cover duration: the prairie averages 30–60 days of continuous snow cover in broken stretches. Sandpoint averages 70–90 continuous days — more equipment wear, more per-event management, and more consideration for roof loads and private road access.",
  },
]

function getBarColor(zone: number): string {
  if (zone === 1) return '#5C5650'
  if (zone === 2) return '#8B6A3A'
  return '#C4842A'
}

export default function SnowestCitiesArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#F5EFE6] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#C4842A] transition-colors">Home</a>
            <span className="mx-2">·</span>
            <a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
            <span className="mx-2">·</span>
            <span className="text-[#5C5650]">Snowiest Cities in North Idaho</span>
          </nav>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">North Idaho Buyer Guides</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">12 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">May 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Snowiest Cities in North Idaho: A Data-Backed Ranking
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            North Idaho gets lumped together as one winter. It isn&apos;t. Post Falls averages 40 inches a year. Priest Lake averages 120. This is the town-by-town ranking — with real estate implications at every level. (For more on the lowest-snow town in the ranking, see <a href="/areas/post-falls-idaho" className="text-[#C4842A] hover:underline">the Post Falls living guide</a>.)
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, Licensed REALTOR® at eXp Realty"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · eXp Realty · May 27, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">40"</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Post Falls avg</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Lightest in the region</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">70.3"</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Sandpoint avg</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">NOAA climate normals</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">~120"</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Priest Lake area avg</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Heaviest in ranking</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">3×</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Spread across region</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Prairie to Priest Lake</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full overflow-hidden" style={{ maxHeight: '520px' }}>
        <img
          src="/images/north-idaho-snowfall-ranking.webp"
          alt="North Idaho winter landscape showing snowfall variation across towns from the Rathdrum Prairie to the Priest Lake area"
          className="w-full object-cover object-center"
          style={{ maxHeight: '520px' }}
        />
      </div>

      {/* Article Body */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article */}
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <p className="mb-6">
                Ask two people how much it snows in North Idaho and you&apos;ll get two different answers — because they&apos;re probably living in two different climates without knowing it. A buyer who landed in Post Falls will tell you winter is mild, manageable, nothing like what they expected. A buyer who bought a few acres north of Sandpoint might tell you they didn&apos;t realize what they were signing up for.
              </p>
              <p className="mb-10">
                Both are right. North Idaho spans roughly 100 miles from the Rathdrum Prairie to the Canadian border, and snowfall across that distance triples. This ranking pulls from{' '}
                <a href="https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">NOAA NCEI 1991–2020 climate normals</a>,{' '}
                <a href="https://www.weather.gov/otx/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">NWS Spokane Forecast Office</a> data, and{' '}
                <a href="https://www.nrcs.usda.gov/wps/portal/wcc/home/snowClimateMonitoring/snotel/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">NRCS SNOTEL network</a>{' '}readings — not estimates or marketing. The point isn&apos;t to scare anyone away from the snowier parts. It&apos;s to make sure buyers know what they&apos;re choosing, and what equipment budget goes with that choice.
              </p>

              <p className="mb-10">Snow is one factor in the location decision. For everything else &mdash; home prices, taxes, schools, and commutes &mdash; the{' '}<a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">full North Idaho relocation guide</a>{' '}covers it all.</p>

              {/* Full Ranking Visualization */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Full Ranking: Lightest to Heaviest
              </h2>
              <p className="mb-6">
                All figures are annual average snowfall at town or community elevation. Mountain resort numbers are separate — those are covered in a later section.
              </p>
              <div className="my-8 bg-[#1C1A17] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#2C2A27] flex items-center justify-between">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Annual Average Snowfall — Town Elevation</p>
                  <p className="font-dm-sans text-xs text-[#6B7A8D]">Source: NOAA NCEI / NWS Spokane</p>
                </div>
                <div className="px-6 py-5 space-y-5">
                  {snowfallRanking.map((row) => (
                    <div key={row.rank}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-dm-sans text-xs font-semibold text-[#6B7A8D] w-5 text-right flex-shrink-0">{row.rank}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1.5">
                            <div>
                              <span className="font-dm-sans text-sm font-semibold text-[#FAFAF8]">{row.town}</span>
                              <span className="font-dm-sans text-xs text-[#6B7A8D] ml-2">{row.county} Co.</span>
                            </div>
                            <span className="font-dm-sans text-sm font-semibold flex-shrink-0 ml-3" style={{ color: getBarColor(row.zone) }}>
                              {row.label}
                            </span>
                          </div>
                          <div className="h-2.5 bg-[#2C2A27] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{ width: `${row.pct}%`, backgroundColor: getBarColor(row.zone) }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-4 border-t border-[#2C2A27] flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#5C5650' }} />
                    <span className="font-dm-sans text-xs text-[#9A9590]">Zone 1 — Prairie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#8B6A3A' }} />
                    <span className="font-dm-sans text-xs text-[#9A9590]">Zone 2 — Middle Belt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#C4842A' }} />
                    <span className="font-dm-sans text-xs text-[#9A9590]">Zone 3 — Heavy Snow</span>
                  </div>
                </div>
              </div>

              {/* Zone 1 */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">
                Zone 1: The Rathdrum Prairie Floor (Ranks 1–3)
              </h2>
              <p className="mb-6">
                The Rathdrum Prairie — Post Falls, Rathdrum, Hayden, and the flatter portions of Coeur d&apos;Alene — sits at roughly 2,100–2,200 feet in a wide valley that catches Pacific storm systems only after they&apos;ve lost most of their moisture against the Cascades and the higher Idaho Panhandle elevations. The result is 40 to 45 inches per year at the valley floor, arriving in moderate doses that typically melt between events.
              </p>
              <p className="mb-6">
                In a typical winter, zone 1 towns see snow that stays on the ground for <strong className="text-[#1C1A17]">30 to 60 days total</strong> — but usually in two or three separate stretches rather than one unbroken blanket. December brings the first sticking snow, January and February alternate between accumulation and partial thaw, and by mid-March most lawns are visible again. Out-of-state buyers who move here from California or Arizona often describe their first winter as manageable — and they&apos;re not wrong.
              </p>
              <p className="mb-10">
                For residential lots inside city limits, <strong className="text-[#1C1A17]">a single-stage snowblower handles most storms</strong>. The City of Coeur d&apos;Alene doesn&apos;t initiate plowing until 4 to 5 inches accumulate — which tells you something about the typical event size. The one exception is rural acreage with a driveway longer than a quarter mile, or properties on private roads off Highway 41 or toward Twin Lakes, where a compact tractor starts to earn its keep.
              </p>

              {/* Zone 2 */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Zone 2: The Middle Belt (Ranks 4–6)
              </h2>
              <p className="mb-6">
                St. Maries, Kellogg, and Bonners Ferry form a transitional zone that buyers often underestimate. None of these towns is in a ski resort brochure, but all three average 58 to 63 inches of snow annually — 40 to 55 percent more than the prairie floor.
              </p>
              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E8DDD0]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Zone 2 Towns — What Makes Each Different</p>
                </div>
                <div className="divide-y divide-[#E8DDD0]">
                  {[
                    { town: 'St. Maries (Benewah County)', desc: "Sits in the St. Joe River valley at about 2,650 feet. The St. Joe River drainage funnels moisture inland from the west, boosting snowfall well above the prairie. St. Maries' elevation and valley positioning produce consistent winter snowfall without the lake-effect amplification of Bonner County." },
                    { town: 'Kellogg (Shoshone County)', desc: 'Elevation 2,307 feet in the Silver Valley. Kellogg is just below Wallace on the snowfall chart because it sits slightly lower and the valley is wider — though Silver Mountain directly above the town pulls in 150–200 inches, underscoring how rapidly snowfall climbs with elevation here.' },
                    { town: 'Bonners Ferry (Boundary County)', desc: "Idaho's northernmost major town at roughly 1,765 feet. Bonners Ferry benefits from northern air masses but sits in a wide valley that limits orographic enhancement. The Kootenai River floodplain geography keeps town-level snowfall moderate despite its latitude." },
                  ].map((item) => (
                    <div key={item.town} className="px-6 py-4">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] mb-1">{item.town}</p>
                      <p className="font-dm-sans text-sm text-[#5C5650] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mb-10">
                Zone 2 properties benefit from AWD or 4WD, a two-stage snowblower, and — for rural acreage — a tractor with a blade or blower attachment. Ground cover duration is longer here, typically 50 to 80 days, and older structures are worth inspecting for snow load adequacy before you make an offer.
              </p>

              {/* Zone 3 */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Zone 3: The Heavy Snow Zone (Ranks 7–10)
              </h2>
              <p className="mb-6">
                Sandpoint, Priest River, Wallace, and the Priest Lake area sit in a different category — not just a higher number on the same scale, but a genuinely different winter management reality. Seventy to 120 inches annually means ground cover from mid-December through early to mid-March without interruption. Snow stacks rather than melts between storms. Roof loads matter. Berm management at the end of driveways matters. Whether your propane tank fill and septic riser are reachable in February matters.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                Sandpoint: The gateway to the heavy snow zone
              </h3>
              <p className="mb-6">
                Sandpoint&apos;s 70.3-inch annual average reflects the town at lake level — but the geography explains why it&apos;s only the entry point to the heavy zone, not the ceiling. Lake Pend Oreille, the deepest lake in Idaho, acts as a moisture reservoir that feeds lake-effect snow onto the north shore. The Selkirk and Cabinet ranges rise directly behind town, producing textbook orographic lift. Those two mechanisms don&apos;t exist on the Rathdrum Prairie 45 minutes south.
              </p>
              <p className="mb-6">
                For an in-town Sandpoint lot on a city-plowed street, a two-stage snowblower and AWD are the practical minimums. For rural acreage in Sagle, Dover, Ponderay, or anywhere up the highway, a tractor with a front blade becomes a necessity, not a luxury. The{' '}
                <a href="/articles/north-idaho-microclimates-rathdrum-prairie-sandpoint-snow" className="text-[#C4842A] hover:underline">Rathdrum Prairie vs. Sandpoint micro-climate breakdown</a>{' '}
                goes deeper on the geography behind these numbers.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                Wallace: The canyon that outsnows Sandpoint
              </h3>
              <p className="mb-6">
                Wallace is the surprise entry in the top three. It sits at 2,750 feet in a narrow Silver Valley canyon — roughly 650 feet higher than Sandpoint and 500 feet higher than Kellogg. That elevation differential is the key: orographic lift against the canyon walls and consistent moisture tracking up the St. Joe drainage produce 73 to 82 inches of annual snowfall despite the town being less famous for winter than Sandpoint. Wallace is also one of the best-preserved historic mining towns in the West, which means older structures that buyers should specifically vet for snow load capacity.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                Priest River and Priest Lake: Where the numbers go north
              </h3>
              <p className="mb-6">
                Priest River averages 72 to 81 inches at town level. The Priest Lake area, 40 miles north and roughly 600 feet higher, hits approximately 120 inches — the top of the regional ranking among permanent communities. Priest Lake is not an incorporated city; it refers to the unincorporated communities around the lake (Coolin, Nordman, Priest Lake Village), sourced from NOAA stations and NRCS SNOTEL data in the area. Properties here are genuinely remote in the operational sense: private road access, rural utility infrastructure, and a winter that requires planning, not just equipment.
              </p>

              {/* Mountain Resorts */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">
                Mountain Resorts: Where the Snow Really Stacks
              </h2>
              <p className="mb-6">
                Town-level snowfall numbers don&apos;t capture what happens as you gain elevation. The three active ski areas in or immediately adjacent to North Idaho all operate in a different order of magnitude:
              </p>
              <div className="my-6 bg-[#1C1A17] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#2C2A27]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Mountain Resort Snowfall — Summit/Resort Elevation</p>
                </div>
                <div className="divide-y divide-[#2C2A27]">
                  {mountainResorts.map((resort) => (
                    <div key={resort.name} className="px-6 py-5 flex items-start gap-4">
                      <div className="flex-1">
                        <p className="font-dm-sans text-sm font-semibold text-[#FAFAF8] mb-0.5">{resort.name}</p>
                        <p className="font-dm-sans text-xs text-[#9A9590]">{resort.location} · {resort.county} County</p>
                        <p className="font-dm-sans text-xs text-[#6B7A8D] mt-1">{resort.note}</p>
                      </div>
                      <span className="font-cormorant text-2xl text-[#C4842A] font-semibold flex-shrink-0">{resort.avg}</span>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-3 border-t border-[#2C2A27]">
                  <p className="font-dm-sans text-xs text-[#6B7A8D]">Sources: Resort-published season averages; NWS Spokane orographic data.</p>
                </div>
              </div>
              <p className="mb-10">
                These numbers matter for buyers in two ways. First, proximity to a resort is a lifestyle amenity — but it&apos;s also a signal of the snow zone you&apos;re operating in. A home in the drainage below Schweitzer is not the same winter as a home in Post Falls. Second, properties at elevation near resort zones have the most aggressive snow load requirements and the highest stakes for private road access. Budget accordingly.
              </p>

              {/* Buyer Implications */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">
                What the Ranking Means If You&apos;re Buying a Home
              </h2>
              <p className="mb-6">
                Most buyers I work with have done Google research on snowfall averages before they call me. What they haven&apos;t done is translated those numbers into a maintenance budget, a vehicle decision, and a set of questions to ask the listing agent about roof loads and road access. Here&apos;s how each zone maps to practical decisions:
              </p>
              <div className="my-8 space-y-4">
                {buyerZones.map((bz) => (
                  <div key={bz.zone} className="border border-[#E8DDD0] rounded-sm overflow-hidden">
                    <div className="px-6 py-4 bg-[#F5EFE6] border-b border-[#E8DDD0] flex items-center gap-3">
                      <span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">{bz.zone}</span>
                      <span className="font-cormorant text-xl text-[#1C1A17] font-semibold">{bz.label}</span>
                      <span className="ml-auto font-dm-sans text-xs text-[#9A9590]">{bz.snowRange}</span>
                    </div>
                    <div className="px-6 py-4 bg-white">
                      <p className="font-dm-sans text-xs text-[#9A9590] mb-1 uppercase tracking-wide">Towns</p>
                      <p className="font-dm-sans text-sm text-[#5C5650] mb-4">{bz.towns}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { label: 'Vehicle', value: bz.vehicle },
                          { label: 'Driveway', value: bz.driveway },
                          { label: 'Rural acreage', value: bz.rural },
                          { label: 'Roof', value: bz.roof },
                        ].map((item) => (
                          <div key={item.label}>
                            <p className="font-dm-sans text-xs text-[#9A9590] uppercase tracking-wide mb-0.5">{item.label}</p>
                            <p className="font-dm-sans text-xs text-[#5C5650] leading-relaxed">{item.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">
                How to Verify Snowfall for a Specific Address
              </h2>
              <p className="mb-6">
                Annual averages are a starting point, not a promise. Snowfall varies year to year, and the closest NOAA station to a property might be miles away and at a different elevation. Here&apos;s how I cross-check data when I&apos;m helping a buyer evaluate a specific property:
              </p>
              <div className="my-6 space-y-4">
                {[
                  {
                    label: 'NOAA NCEI Climate Data Online',
                    href: 'https://www.ncei.noaa.gov/cdo-web/',
                    desc: 'Search for the nearest surface station and pull the 1991–2020 climate normals. Look at the station distance and elevation difference from the property — a 500-foot elevation gap can mean 10–20 more inches.',
                  },
                  {
                    label: 'NWS Spokane Forecast Office',
                    href: 'https://www.weather.gov/otx/',
                    desc: "NWS Spokane publishes zone forecasts and climate summaries for the entire Idaho Panhandle. Their seasonal outlooks give you a sense of whether a given winter is running above or below the historical average.",
                  },
                  {
                    label: 'NRCS SNOTEL Network',
                    href: 'https://www.nrcs.usda.gov/wps/portal/wcc/home/snowClimateMonitoring/snotel/',
                    desc: 'SNOTEL stations track snowpack in mountainous and rural areas where NOAA surface stations are sparse. Essential for any property north of Sandpoint, near Priest Lake, or in the Silver Valley drainage.',
                  },
                ].map((source) => (
                  <div key={source.label} className="border-l-2 border-[#C4842A] pl-5">
                    <a href={source.href} target="_blank" rel="noopener noreferrer" className="font-cormorant text-xl text-[#1C1A17] font-semibold hover:text-[#C4842A] transition-colors">{source.label}</a>
                    <p className="font-dm-sans text-sm text-[#5C5650] mt-1 leading-relaxed">{source.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mb-10">
                When I show rural properties north of Hayden or in the Silver Valley, I cross-reference all three sources and note the elevation difference between the nearest station and the property. It&apos;s not a perfect science — no data source captures the specific microclimate of a specific hillside — but it&apos;s far better than relying on a county-level average that might be driven by a station 20 miles away and 800 feet lower.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Why This Matters More Than Most Agents Will Tell You
              </h2>
              <p className="mb-6">
                Snowfall is one of those factors that&apos;s easy to dismiss during a July listing tour and impossible to ignore in February. I&apos;ve worked with buyers who bought in Zone 3 with Zone 1 expectations — and while most of them adapted and love their properties, a few found themselves facing costs and logistics they hadn&apos;t budgeted for. A tractor, a roof reinforcement, a private road that wasn&apos;t plowed by anyone they expected — those surprises are avoidable with the right information upfront.
              </p>
              <p className="mb-10">
                If you&apos;re comparing properties across multiple North Idaho communities, I can pull the historical snowfall data for each address, tell you who plows the road, check the roof&apos;s design load against local building code requirements, and tell you what the current owners actually use for snow removal. That&apos;s the kind of detail that doesn&apos;t show up in a listing description — but it should absolutely be part of your decision.
              </p>

              {/* FAQ */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-6 font-semibold">
                Common Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                    <h3 className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">{faq.q}</h3>
                    <p className="font-dm-sans text-[15px] text-[#5C5650] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="lg:sticky lg:top-8 space-y-6">

                {/* Snow Zone Quick Reference */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Snow Zone Quick Reference</p>
                  <div className="space-y-4">
                    {[
                      { zone: 'Zone 1 — Prairie Floor', towns: 'Post Falls, Rathdrum, CdA, Hayden', avg: '40–45"', cover: '30–60 days' },
                      { zone: 'Zone 2 — Middle Belt', towns: 'St. Maries, Kellogg, Bonners Ferry', avg: '58–63"', cover: '50–80 days' },
                      { zone: 'Zone 3 — Heavy Snow', towns: 'Sandpoint, Priest River, Wallace, Priest Lake', avg: '70–120"', cover: '70–90+ days' },
                    ].map((zr) => (
                      <div key={zr.zone} className="border-b border-[#2C2A27] pb-4 last:border-0 last:pb-0">
                        <p className="font-dm-sans text-xs font-semibold text-[#C4842A] mb-1">{zr.zone}</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mb-2">{zr.towns}</p>
                        <div className="flex gap-4">
                          <div>
                            <p className="font-dm-sans text-xs text-[#6B7A8D] uppercase tracking-wide">Avg / yr</p>
                            <p className="font-dm-sans text-sm font-semibold text-[#FAFAF8]">{zr.avg}</p>
                          </div>
                          <div>
                            <p className="font-dm-sans text-xs text-[#6B7A8D] uppercase tracking-wide">Ground cover</p>
                            <p className="font-dm-sans text-sm font-semibold text-[#FAFAF8]">{zr.cover}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="font-dm-sans text-xs text-[#6B7A8D] mt-4 pt-4 border-t border-[#2C2A27]">
                    Sources: NOAA NCEI 1991–2020 normals; NWS Spokane; NRCS SNOTEL.
                  </p>
                </div>

                {/* Mountain Resorts Sidebar */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Resort Snowfall (Summit)</p>
                  <div className="space-y-3">
                    {[
                      { name: 'Schweitzer Mtn', sub: 'Sandpoint / Bonner Co.', val: '~300"' },
                      { name: 'Lookout Pass', sub: 'Wallace / Idaho–MT border', val: '~350"' },
                      { name: 'Silver Mountain', sub: 'Kellogg / Shoshone Co.', val: '150–200"' },
                    ].map((r) => (
                      <div key={r.name} className="border-t border-[#E8DDD0] pt-3 first:border-0 first:pt-0 flex items-center justify-between">
                        <div>
                          <p className="font-dm-sans text-xs font-semibold text-[#1C1A17]">{r.name}</p>
                          <p className="font-dm-sans text-xs text-[#9A9590]">{r.sub}</p>
                        </div>
                        <span className="font-cormorant text-xl text-[#C4842A] font-semibold">{r.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* About Shirin */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Local Agent</p>
                  <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp, Licensed REALTOR® at eXp Realty" className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-3">Licensed REALTOR® · SRES® · eXp Realty · #1371861</p>
                  <p className="font-dm-sans text-xs text-[#5C5650] leading-relaxed mb-4">
                    Shirin can pull the historical snowfall data for any North Idaho address, verify who plows the road, and check roof load ratings before you make an offer.
                  </p>
                  <a href="/contact" className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Ask Shirin
                  </a>
                </div>

                {/* Related Articles */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Articles</p>
                  <div className="space-y-4">
                    <a href="/articles/north-idaho-microclimates-rathdrum-prairie-sandpoint-snow" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho Micro-Climates: Rathdrum Prairie vs. Sandpoint</p>
                      <p className="font-dm-sans text-xs text-[#9A9590] mt-1">The geography behind the numbers</p>
                    </a>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/best-places-to-live-north-idaho-leaving-california" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Best Places to Live in North Idaho for People Leaving California</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">CdA, Post Falls, Hayden, Sandpoint compared</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/buying-property-prairie-wells-septic-roads" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Buying Property on the Prairie: Wells, Septic, and Roads</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Rural infrastructure costs buyers miss</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/how-much-do-homes-cost-post-falls-idaho" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">How Much Do Homes Cost in Post Falls?</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Price breakdown by budget, 2026</p>
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

      {/* Bottom CTA */}
      <section className="bg-[#1C1A17] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">North Idaho Relocation</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-[#FAFAF8] mb-6 leading-tight font-semibold">
            Want to Know What Winter Looks Like at a Specific Address?
          </h2>
          <p className="font-dm-sans text-[#C4BDB4] text-lg mb-10 leading-relaxed">
            I&apos;ll pull the historical snowfall data, tell you which zone you&apos;re in, who plows the road, and what the current owners actually use for snow removal — before you make an offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold py-4 px-8 transition-colors">
              Get in Touch
            </a>
            <a href="/articles/north-idaho-microclimates-rathdrum-prairie-sandpoint-snow" className="border border-[#5C5650] hover:border-[#9A9590] text-[#C4BDB4] hover:text-[#FAFAF8] font-dm-sans font-semibold py-4 px-8 transition-colors">
              Read the Micro-Climate Guide
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
