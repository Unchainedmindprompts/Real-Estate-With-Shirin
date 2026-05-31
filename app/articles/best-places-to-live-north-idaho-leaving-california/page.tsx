import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Places to Live in North Idaho for People Leaving California (2026 Relocation Guide) | Shirin Abplanalp',
  description: "A 2026 relocation guide for Californians moving to North Idaho. Compare Coeur d'Alene, Post Falls, Hayden, and Sandpoint for cost, lifestyle, taxes, and community.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles/best-places-to-live-north-idaho-leaving-california',
  },
  openGraph: {
    title: 'Best Places to Live in North Idaho for People Leaving California (2026 Relocation Guide)',
    description: "A 2026 relocation guide for Californians moving to North Idaho. Compare Coeur d'Alene, Post Falls, Hayden, and Sandpoint for cost, lifestyle, taxes, and community.",
    url: 'https://www.realestatewithshirin.com/articles/best-places-to-live-north-idaho-leaving-california',
    type: 'article',
    publishedTime: '2026-04-22',
    authors: ['Shirin Abplanalp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/best-places-to-live-north-idaho-leaving-california#article',
  headline: 'Best Places to Live in North Idaho for People Leaving California (2026 Relocation Guide)',
  description: 'A relocation guide for Californians moving to North Idaho in 2026. Compare Coeur d\'Alene, Post Falls, Hayden, and Sandpoint for cost, lifestyle, and community.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/north-idaho-family-home.png',
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
  datePublished: '2026-04-22T00:00:00-07:00',
  dateModified: '2026-04-22T00:00:00-07:00',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatewithshirin.com/articles/best-places-to-live-north-idaho-leaving-california',
  },
  isPartOf: {
    '@type': 'CollectionPage',
    '@id': 'https://www.realestatewithshirin.com/articles',
    name: 'Articles',
    url: 'https://www.realestatewithshirin.com/articles',
  },
  url: 'https://www.realestatewithshirin.com/articles/best-places-to-live-north-idaho-leaving-california',
  keywords: [
    'best places to live in north idaho',
    'leaving california',
    'moving from california to idaho',
    'california to idaho relocation',
    'is idaho a good place to live',
    "coeur d'alene relocation",
    'post falls idaho moving',
    'hayden idaho homes',
    'sandpoint idaho living',
    'north idaho real estate',
  ],
  articleSection: 'Relocation Guide',
  wordCount: 2000,
  about: [
    {
      '@type': 'Place',
      name: 'North Idaho',
      sameAs: 'https://en.wikipedia.org/wiki/Idaho_Panhandle',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Kootenai County',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Bonner County',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
  ],
  mentions: [
    {
      '@type': 'City',
      name: "Coeur d'Alene",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Post Falls',
      sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Hayden',
      sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Sandpoint',
      sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'Place',
      name: 'Idaho Panhandle',
      sameAs: 'https://en.wikipedia.org/wiki/Idaho_Panhandle',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Kootenai County',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Bonner County',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
    {
      '@type': 'GovernmentOrganization',
      name: 'Idaho Real Estate Commission',
      url: 'https://irec.idaho.gov',
    },
    {
      '@type': 'Organization',
      name: 'National Association of REALTORS®',
      url: 'https://www.nar.realtor',
      sameAs: 'https://en.wikipedia.org/wiki/National_Association_of_Realtors',
    },
  ],
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    sameAs: 'https://en.wikipedia.org/wiki/Idaho_Panhandle',
    containedInPlace: { '@type': 'State', name: 'Idaho' },
  },
  citation: [
    { '@type': 'WebPage', name: "Coeur d'Alene Regional Realtors 2025 Year-End Market Report", url: 'https://www.cdarealtors.com' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/best-places-to-live-north-idaho-leaving-california#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best places to live in North Idaho for people leaving California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The four best places to live in North Idaho for Californians relocating in 2026 are Coeur d'Alene, Post Falls, Hayden, and Sandpoint. Each offers a lower cost of living than California, four-season outdoor recreation, and a community-oriented pace, but they differ in price point, size, and lifestyle. Coeur d'Alene is the flagship lakeside town, Post Falls offers the strongest value and growth, Hayden provides a quieter upgrade near the lake, and Sandpoint is the mountain-town destination.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Idaho have state income tax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Idaho has a flat 5.3% state income tax as of 2026. That is meaningfully lower than California's progressive system, which tops out at 13.3%, but it is not zero. The bigger financial win for most Californians moving to Idaho is the combination: lower income tax, lower home prices, lower property taxes in dollar terms, and lower sales tax, vehicle fees, and cost of living overall.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is North Idaho cheaper than California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. North Idaho's cost of living runs roughly 20 to 30 percent below California averages, with the biggest gap in housing. The median home price in Kootenai County was $549,000 at the end of 2025, compared to California's statewide median of over $800,000.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is North Idaho safer than California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Crime rates in Kootenai County and the surrounding area run well below most California metros, and the sense of community-level safety is one of the things new residents mention most often after moving here.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much money do you need to move from California to Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no single number, but most families moving here comfortably need enough cash to cover a down payment on a home in the $500,000 to $700,000 range, moving costs, and a financial cushion for the transition period. Many Californians arrive with significant equity from their California home sale, which often makes the move financially straightforward.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/best-places-to-live-north-idaho-leaving-california#breadcrumb',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.realestatewithshirin.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Articles',
      item: 'https://www.realestatewithshirin.com/articles',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Best Places to Live in North Idaho for People Leaving California',
      item: 'https://www.realestatewithshirin.com/articles/best-places-to-live-north-idaho-leaving-california',
    },
  ],
}

export default function BestPlacesNorthIdahoCaliforniaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#F5EFE6] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#C4842A] transition-colors">Home</a>
            <span className="mx-2">·</span>
            <a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
            <span className="mx-2">·</span>
            <span className="text-[#5C5650]">Best Places to Live in North Idaho for People Leaving California</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Relocation Guide</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">9 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">April 2026</span>
          </div>
          {/* H1 */}
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Best Places to Live in North Idaho for People Leaving California
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            For Californians relocating to North Idaho in 2026, the four best places to land are Coeur d&apos;Alene, Post Falls, Hayden, and Sandpoint. Each offers a lower cost of living than California, four-season outdoor recreation, and a community-oriented pace of life, but they differ in price, size, and character. This guide walks through what to expect from each town, what Californians actually save when they move here, and what to know before you start your search.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, licensed realtor at eXp Realty"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · eXp Realty · April 22, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E8DDD0]" />

      {/* Key Stats Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$549K</p>
              <p className="font-dm-sans text-xs text-[#C4BDB4] mt-1 uppercase tracking-wide">Kootenai County Median</p>
              <p className="font-dm-sans text-xs text-[#9AA3AF] mt-0.5">End of 2025</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">5.3%</p>
              <p className="font-dm-sans text-xs text-[#C4BDB4] mt-1 uppercase tracking-wide">Idaho Income Tax</p>
              <p className="font-dm-sans text-xs text-[#9AA3AF] mt-0.5">vs CA top rate of 13.3%</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">20–30%</p>
              <p className="font-dm-sans text-xs text-[#C4BDB4] mt-1 uppercase tracking-wide">Lower Cost of Living</p>
              <p className="font-dm-sans text-xs text-[#9AA3AF] mt-0.5">Compared to California</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">+9.9%</p>
              <p className="font-dm-sans text-xs text-[#C4BDB4] mt-1 uppercase tracking-wide">Post Falls YoY Growth</p>
              <p className="font-dm-sans text-xs text-[#9AA3AF] mt-0.5">Strongest in region</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article + Sidebar */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article Body */}
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-2 mb-5 font-semibold">
                Why Californians Are Moving to North Idaho
              </h2>
              <p className="mb-6">
                The migration from California to Idaho has been one of the steadiest patterns of the last five years, and it has not slowed in 2026. The reasons people give when they sit down to talk about the move are consistent: taxes, home prices, cost of living, safety, politics, and a desire for a quieter life closer to the outdoors.
              </p>
              <p className="mb-6">
                This article focuses on location options for California buyers. For the full picture &mdash; taxes, cost of living, schools, weather, and the buying process &mdash; the{' '}<a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">complete North Idaho relocation guide</a>{' '}covers it all.
              </p>
              <p className="mb-8">
                What surprises most Californians when they arrive is not any single one of those things. It is the combination. You are not just saving on income tax. You are also paying less for your house, less for gas, less at the grocery store, less for your car registration, and in most cases less for your insurance. Small differences stacked together produce a lifestyle most Californians had given up on affording.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Is North Idaho a Good Place to Live?
              </h2>
              <p className="mb-6">
                Yes. North Idaho consistently ranks among the top regions in the country for families, retirees, and remote workers relocating from higher-cost states. The region offers genuine four-season weather, some of the cleanest air in the Pacific Northwest, strong public schools, low crime rates compared to most California metros, and a cost of living roughly 20 to 30 percent below California averages.
              </p>
              <p className="mb-8">
                The trade-offs are real and worth naming honestly. Winters are real winters. You will need to own a snow shovel and know how to drive on ice. Summers can be hot and, in some years, smoky from regional wildfires. The pace is slower than Los Angeles, San Francisco, or San Diego. Dining, shopping, and entertainment options are good but not endless. If you are moving here expecting a transplanted version of your coastal California life, you will be disappointed. If you are moving here because you want a different kind of life, you will probably love it.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Four Best Places to Live in North Idaho
              </h2>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-8 mb-4 font-semibold">
                Coeur d&apos;Alene — The Flagship Town
              </h3>
              <p className="mb-6">
                Coeur d&apos;Alene is the largest and most recognizable town in North Idaho, sitting right on the north shore of its namesake lake. It is the region&apos;s cultural and commercial anchor, home to a walkable downtown, a long-established resort, strong restaurants, and genuine lakefront living. The median home price in Coeur d&apos;Alene ran around $575,000 to $600,000 through early 2026, which makes it the priciest of the four towns covered here.
              </p>
              <p className="mb-8">
                Coeur d&apos;Alene is the right fit for buyers who want the most polished version of North Idaho living: lake access, downtown amenities, and a recognizable address. It is popular with retirees, second-home buyers, and professionals who can work remotely. The trade-off is price. You pay a premium for the brand, the lake, and the walkability.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-8 mb-4 font-semibold">
                Post Falls — The Value Play
              </h3>
              <p className="mb-6">
                Post Falls sits just west of Coeur d&apos;Alene, about ten minutes away by highway, and has quietly become the strongest growth market in the region. The median home price was around $500,000 to $510,000 in early 2026, with year-over-year growth approaching 10 percent. That means you get meaningfully more house for your money than in Coeur d&apos;Alene, without giving up proximity to the lake, the airport, or Spokane, which is twenty minutes west.
              </p>
              <p className="mb-6">
                Post Falls is the right fit for families wanting a newer home at a more reasonable price, commuters who work in Spokane, and first-time buyers who want to be in Kootenai County but cannot stretch to Coeur d&apos;Alene prices. The character of the town is more suburban and residential than Coeur d&apos;Alene — less walkable downtown, more new construction, more space. For most Californians moving up from a small condo or a starter home, Post Falls is where the math works best.
              </p>
              <p className="mb-8">
                This is where I live and work. I moved here from Bend, Oregon a few years ago, and I have watched this market develop from the inside. The growth in Post Falls is not speculative. It is driven by families who ran the numbers and realized they could own more home, more land, and more life here than almost anywhere in the west.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-8 mb-4 font-semibold">
                Hayden — The Quiet Upgrade
              </h3>
              <p className="mb-6">
                Hayden sits just north of Coeur d&apos;Alene and offers something in between the two larger towns. The median home price was around $525,000 to $580,000 in early 2026. Hayden has its own lake (Hayden Lake), a mix of older established neighborhoods and newer subdivisions, and a noticeably quieter feel than either Coeur d&apos;Alene or Post Falls.
              </p>
              <p className="mb-8">
                Hayden is the right fit for buyers who want proximity to Coeur d&apos;Alene without paying Coeur d&apos;Alene prices, lake access without the tourist crowds, and a slightly more rural feel without giving up modern amenities. It tends to attract families who plan to stay for decades, retirees who want a peaceful home base, and buyers drawn to the newer construction on the north side of town.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-8 mb-4 font-semibold">
                Sandpoint — The Destination Town
              </h3>
              <p className="mb-6">
                Sandpoint is about an hour north of Coeur d&apos;Alene, up in Bonner County, and it is a different kind of place entirely. It is a genuine mountain town, sitting between Lake Pend Oreille and the Selkirk Mountains, home to Schweitzer Mountain Resort. Home prices vary widely depending on proximity to the lake and the mountain, but the overall market runs higher than Kootenai County.
              </p>
              <p className="mb-8">
                Sandpoint is the right fit for retirees, second-home buyers, remote workers who do not need frequent airport access, and people who actively want a smaller, more seasonal town. It is also a different commit than the Kootenai County towns. You are further from Spokane, further from major medical centers, and further from the conveniences that come with a larger population. For the right buyer, that is exactly the appeal.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Moving from California to Idaho: What to Expect
              </h2>
              <p className="mb-6">
                The move is bigger than most Californians anticipate. Not because it is difficult logistically, but because the day-to-day rhythm of life is genuinely different. Here is what to expect on the practical side.
              </p>
              <p className="mb-6">
                <strong className="text-[#1C1A17]">Taxes.</strong> Idaho has a flat 5.3 percent state income tax. That is lower than California&apos;s progressive system, which tops out at 13.3 percent, but it is not zero. Anyone telling you Idaho has no state income tax is thinking of Washington, Nevada, or Texas. The bigger financial story is the combination: lower income tax, dramatically lower home prices, lower property taxes in dollar terms (even though the rates are similar, the home values are so much lower that the actual bill drops meaningfully), lower sales tax, and lower fees across the board for things like vehicle registration.
              </p>
              <p className="mb-6">
                <strong className="text-[#1C1A17]">Home prices.</strong> This is where the savings show up most. A family selling a 1,400-square-foot home in San Diego for $900,000 can buy a 2,800-square-foot home on a half-acre in Post Falls for $600,000 and pocket the difference. That math is what drives most of the moves I see.
              </p>
              <p className="mb-6">
                <strong className="text-[#1C1A17]">Cost of living.</strong> Groceries, utilities, gas, dining, and most day-to-day costs run below California averages. Not by a huge margin on any one thing, but consistently across everything.
              </p>
              <p className="mb-6">
                <strong className="text-[#1C1A17]">Climate.</strong> Real winters. Real summers. Four genuine seasons. If you have never lived in a place that snows, plan for that. Snow tires are not optional. Neither is learning how to drive in winter.
              </p>
              <p className="mb-8">
                <strong className="text-[#1C1A17]">Logistics.</strong> You will need a new driver&apos;s license within 90 days of becoming a resident, and you will need to register your vehicles. The process is straightforward but worth planning for. Idaho does not have a vehicle safety inspection requirement, which is a pleasant change for many California transplants.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Working with a Local Realtor Who Made the Move Herself
              </h2>
              <p className="mb-6">
                I relocated to North Idaho from Bend, Oregon, and I now help families from California, Washington, Oregon, and across the country find their landing spot in Kootenai County. The reason I focus on relocating buyers is simple: I know what the move actually feels like from the inside. I know which neighborhoods fit which kinds of families. I know which towns are growing and which are leveling off. I know what Californians typically underestimate about winter and what they typically overestimate about the adjustment.
              </p>
              <p className="mb-8">
                If you are seriously considering the move, the best place to start is a real conversation. No pressure, no pitch. I will give you an honest read on neighborhoods, prices, schools, and what to expect. If the move is right for you, we will find you the right place. If it is not the right time, I will tell you that too.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 mb-12">
                <div className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                  <h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">
                    What are the best places to live in North Idaho for people leaving California?
                  </h3>
                  <p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">
                    The four best places to live in North Idaho for Californians relocating in 2026 are Coeur d&apos;Alene, Post Falls, Hayden, and Sandpoint. Each offers a lower cost of living than California, four-season outdoor recreation, and a community-oriented pace, but they differ in price point, size, and lifestyle. Coeur d&apos;Alene is the flagship lakeside town, Post Falls offers the strongest value and growth, Hayden provides a quieter upgrade near the lake, and Sandpoint is the mountain-town destination.
                  </p>
                </div>
                <div className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                  <h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">
                    Does Idaho have state income tax?
                  </h3>
                  <p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">
                    Yes. Idaho has a flat 5.3% state income tax as of 2026. That is meaningfully lower than California&apos;s progressive system, which tops out at 13.3%, but it is not zero. The bigger financial win for most Californians moving to Idaho is the combination: lower income tax, lower home prices, lower property taxes in dollar terms, and lower sales tax, vehicle fees, and cost of living overall.
                  </p>
                </div>
                <div className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                  <h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">
                    Is North Idaho cheaper than California?
                  </h3>
                  <p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">
                    Yes. North Idaho&apos;s cost of living runs roughly 20 to 30 percent below California averages, with the biggest gap in housing. The median home price in Kootenai County was $549,000 at the end of 2025, compared to California&apos;s statewide median of over $800,000.
                  </p>
                </div>
                <div className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                  <h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">
                    Is North Idaho safer than California?
                  </h3>
                  <p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">
                    Yes. Crime rates in Kootenai County and the surrounding area run well below most California metros, and the sense of community-level safety is one of the things new residents mention most often after moving here.
                  </p>
                </div>
                <div className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                  <h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">
                    How much money do you need to move from California to Idaho?
                  </h3>
                  <p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">
                    There is no single number, but most families moving here comfortably need enough cash to cover a down payment on a home in the $500,000 to $700,000 range, moving costs, and a financial cushion for the transition period. Many Californians arrive with significant equity from their California home sale, which often makes the move financially straightforward.
                  </p>
                </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="sticky top-28 space-y-6">

                {/* Market Snapshot */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Market Snapshot</p>
                  <p className="font-dm-sans text-xs text-[#C4BDB4] mb-4">Kootenai County · End of 2025</p>
                  <div className="space-y-3">
                    {[
                      { label: 'Median Home Price', value: '$549,000', change: '' },
                      { label: 'YoY Growth', value: '+4.3%', change: '' },
                      { label: 'Post Falls Growth', value: '+9.9%', change: 'Strongest in region' },
                      { label: 'Avg Days on Market', value: '93 days', change: '' },
                    ].map((stat) => (
                      <div key={stat.label} className="flex justify-between items-start border-b border-[#2C2A27] pb-3 last:border-0 last:pb-0">
                        <span className="font-dm-sans text-xs text-[#C4BDB4]">{stat.label}</span>
                        <div className="text-right">
                          <span className="font-dm-sans text-sm font-semibold text-[#FAFAF8]">{stat.value}</span>
                          {stat.change && <p className="font-dm-sans text-xs text-[#9AA3AF]">{stat.change}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="font-dm-sans text-xs text-[#9AA3AF] mt-4">Source: Coeur d&apos;Alene Regional Realtors, 2025 year-end</p>
                </div>

                {/* Agent Card */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Relocation Advisor</p>
                  <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp" className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-3">Licensed REALTOR® · eXp Realty · #1371861</p>
                  <p className="font-dm-sans text-xs text-[#5C5650] leading-relaxed mb-4">Shirin relocated from Bend, Oregon to Northern Idaho and now helps buyers, sellers, and relocating families navigate the Kootenai County market.</p>
                  <a href="/about" className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    About Shirin
                  </a>
                </div>

                {/* Related Articles */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Articles</p>
                  <div className="space-y-4">
                    <a href="/articles/post-falls-idaho-housing-market-2026" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Post Falls Housing Market 2026</p>
                      <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Prices, inventory, and what to expect</p>
                    </a>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/how-much-do-homes-cost-post-falls-idaho" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">How Much Do Homes Cost in Post Falls?</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Price breakdown by budget, 2026</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/how-to-find-realtor-post-falls-idaho" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">How to Find a Realtor in Post Falls</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">What to look for before you hire anyone</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/is-it-a-good-time-to-buy-home-northern-idaho" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Is It a Good Time to Buy in Northern Idaho?</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Honest 2026 answer</p>
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
          <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Northern Idaho Relocation</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-[#FAFAF8] mb-6 leading-tight font-semibold">
            Thinking About the Move from California?
          </h2>
          <p className="font-dm-sans text-[#C4BDB4] text-lg mb-10 leading-relaxed">
            Whether you are six months out or six weeks out, the earlier we start the conversation, the more prepared you will be when it is time. No pressure. Just an honest read on what the move actually looks like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold py-4 px-8 transition-colors">
              Get in Touch
            </a>
            <a href="/articles/post-falls-idaho-housing-market-2026" className="border border-[#5C5650] hover:border-[#9A9590] text-[#C4BDB4] hover:text-[#FAFAF8] font-dm-sans font-semibold py-4 px-8 transition-colors">
              View Post Falls Market
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
