import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buying in North Idaho Before Selling Your Current Home | Shirin Abplanalp',
  description:
    "A North Idaho REALTOR's guide to seven legitimate financing strategies for buyers who've found their dream home in Coeur d'Alene, Post Falls, Hayden, Rathdrum, or Sandpoint but haven't yet sold their current home.",
  alternates: {
    canonical:
      'https://www.realestatewithshirin.com/articles/buying-north-idaho-home-before-selling-current-bridge-financing-options',
  },
  openGraph: {
    title: "You Found Your North Idaho Dream Home — But You Still Have a House to Sell",
    description:
      'Seven real strategies to buy in North Idaho before selling your current home — the 60-day IRA rollover, 401(k) loans, bridge loans, HELOCs, recasts, sale-leasebacks, and contingent offers.',
    url: 'https://www.realestatewithshirin.com/articles/buying-north-idaho-home-before-selling-current-bridge-financing-options',
    type: 'article',
    publishedTime: '2026-05-23',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/north-idaho-bridge-financing.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/buying-north-idaho-home-before-selling-current-bridge-financing-options#article',
  headline: "You Found Your North Idaho Dream Home — But You Still Have a House to Sell. Here's How to Bridge the Gap.",
  alternativeHeadline:
    '7 Real Strategies to Buy in North Idaho Before Selling Your Current Home — Including the 60-Day IRA Rollover, 401(k) Loans, Bridge Loans, HELOCs, Recasts, Sale-Leasebacks, and Contingent Offers',
  description:
    "A North Idaho REALTOR's guide to seven legitimate financing strategies for buyers who've found their dream home in Coeur d'Alene, Post Falls, Hayden, Rathdrum, or Sandpoint but haven't yet sold their current home. Includes IRS-verified rules on 60-day IRA rollovers and 401(k) loans, current bridge loan terms, HELOC timing strategy, mortgage recast mechanics, sale-leaseback structure, and contingent offer reality in the 2026 North Idaho market.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/north-idaho-bridge-financing.png',
    width: 1536,
    height: 1024,
  },
  author: {
    '@type': 'Person',
    '@id': 'https://www.realestatewithshirin.com/#agent',
    name: 'Shirin Abplanalp',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.realestatewithshirin.com/#business',
    name: 'Shirin Abplanalp — Real Estate With Shirin',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.realestatewithshirin.com/images/shirin-logo.png',
      width: 1254,
      height: 1254,
    },
  },
  datePublished: '2026-05-23T00:00:00-07:00',
  dateModified: '2026-05-23T00:00:00-07:00',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatewithshirin.com/articles/buying-north-idaho-home-before-selling-current-bridge-financing-options',
  },
  url: 'https://www.realestatewithshirin.com/articles/buying-north-idaho-home-before-selling-current-bridge-financing-options',
  articleSection: 'North Idaho Buyer Guides',
  keywords: [
    'bridge loan North Idaho',
    '60-day IRA rollover home purchase',
    '401k loan to buy house',
    'buy before selling Idaho',
    "Coeur d'Alene real estate financing",
    'Kootenai County closing timeline',
    'mortgage recast Idaho',
    'HELOC bridge home purchase',
    'sale leaseback Idaho',
    'contingent offer North Idaho',
  ],
  wordCount: 2950,
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    geo: { '@type': 'GeoShape', box: '47.4090 -117.0357 48.5275 -116.2530' },
    containedInPlace: [
      { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
      { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    ],
  },
  isPartOf: {
    '@type': 'CollectionPage',
    '@id': 'https://www.realestatewithshirin.com/articles',
    name: 'Northern Idaho Real Estate Articles',
    url: 'https://www.realestatewithshirin.com/articles',
  },
  about: [
    { '@type': 'Thing', name: 'Bridge Financing' },
    { '@type': 'Thing', name: 'Real Estate Transactions' },
    { '@type': 'Place', name: 'North Idaho' },
  ],
  mentions: [
    { '@type': 'GovernmentOrganization', name: 'Internal Revenue Service', url: 'https://www.irs.gov', sameAs: 'https://en.wikipedia.org/wiki/Internal_Revenue_Service' },
    { '@type': 'GovernmentOrganization', name: 'Idaho Real Estate Commission', url: 'https://irec.idaho.gov' },
    { '@type': 'Organization', name: 'National Association of REALTORS®', sameAs: 'https://en.wikipedia.org/wiki/National_Association_of_Realtors' },
  ],
  citation: [
    { '@type': 'WebPage', name: 'IRS — Rollovers of Retirement Plan and IRA Distributions', url: 'https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions', publisher: { '@type': 'GovernmentOrganization', name: 'Internal Revenue Service', url: 'https://www.irs.gov' } },
    { '@type': 'WebPage', name: 'IRS — Retirement Topics: Plan Loans', url: 'https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-loans', publisher: { '@type': 'GovernmentOrganization', name: 'Internal Revenue Service', url: 'https://www.irs.gov' } },
    { '@type': 'WebPage', name: 'Freddie Mac — Primary Mortgage Market Survey (PMMS), May 21, 2026', url: 'https://www.freddiemac.com/pmms', publisher: { '@type': 'Organization', name: 'Freddie Mac', url: 'https://www.freddiemac.com' } },
    { '@type': 'WebPage', name: 'Fannie Mae — Re-amortized (Recast) Mortgages', url: 'https://singlefamily.fanniemae.com/job-aid/loan-delivery/topic/recast_mortgage.htm', publisher: { '@type': 'Organization', name: 'Fannie Mae', url: 'https://www.fanniemae.com' } },
    { '@type': 'WebPage', name: 'CFPB — What You Should Know About Home Equity Lines of Credit (HELOC)', url: 'https://files.consumerfinance.gov/f/documents/cfpb_heloc-brochure_print.pdf', publisher: { '@type': 'GovernmentOrganization', name: 'Consumer Financial Protection Bureau', url: 'https://www.consumerfinance.gov' } },
    { '@type': 'WebPage', name: 'Bankrate — What Is A Bridge Loan And How Does It Work?', url: 'https://www.bankrate.com/mortgages/bridge-loan/' },
    { '@type': 'WebPage', name: "Inland Northwest Lifestyles — Escrow Process in Idaho: Coeur d'Alene Buyer Guide", url: 'https://inlandnwlifestyles.com/blog/how-escrow-works-in-idaho-real-estate' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/buying-north-idaho-home-before-selling-current-bridge-financing-options#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I really pull money from my IRA to buy a house without penalty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — if you redeposit the full amount back into an IRA within 60 days of the distribution, the IRS treats it as a rollover and no tax or penalty applies. The limit is once per 12-month period across all your IRAs aggregated together. If you miss the 60-day window, the entire amount becomes a taxable distribution plus a 10% early withdrawal penalty if you're under 59½. This is a real strategy, but it's precision-only — not something to wing without a clear redeposit plan.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between a 60-day IRA rollover and a 401(k) loan?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The 60-day IRA rollover is a withdrawal you must redeposit within 60 days — fast and clean, but unforgiving on timing. A 401(k) loan is an actual loan from your account that you repay over time (generally 5 years, longer if used for a primary residence), with interest going back into your own account. The loan is more flexible but capped at the lesser of $50,000 or 50% of your vested balance per IRS rules.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much do bridge loans cost in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bridge loan rates currently range from roughly the prime rate to prime plus 2 percentage points, putting most bridge loans in the high single digits to low double digits in 2026. Terms are typically 6 to 12 months with interest-only payments and a balloon payment at the end. Most lenders require at least 15-20% equity in the current home and a credit score of 680 or higher. Bridge loans are the most expensive option but offer the most certainty.',
      },
    },
    {
      '@type': 'Question',
      name: "Why can't I get a HELOC after I list my house?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most lenders won't issue a HELOC on a home that's actively listed for sale because the equity backing the loan is about to leave their books. Some lenders will even freeze an existing HELOC once the home is listed. This is why HELOC strategy requires planning — you need to open the HELOC before you list. If you're already past that point, bridge loans or mortgage recasts are usually the right alternatives.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I recast any mortgage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Government-backed loans (FHA, VA, USDA) generally don’t allow recasting. Most conventional Fannie Mae and Freddie Mac loans allow recasting, but not every loan servicer offers it even when the loan technically permits it. Always confirm with the specific servicer before closing on a loan you plan to recast later.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long is a sale-leaseback in Idaho usually?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most sale-leasebacks in North Idaho are structured for 30 to 60 days. Going longer than 60 days can create problems for the buyer's lender — many lenders will reclassify a primary residence loan as an investment property loan if the seller's rent-back exceeds 60 days, which changes the buyer's financing terms. 30 days is the most common window, with 60 days as the practical maximum.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are contingent offers worth trying in North Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Mostly not. In Coeur d'Alene, Post Falls, and Hayden, contingent offers usually lose to clean offers because sellers don't want to pull their listing for an uncertain outcome. They may still work in Sandpoint (where days-to-pending run longer), on properties that have been on the market 60+ days, or on higher-end properties with smaller buyer pools. Even then, the offer usually needs to be above asking with a carefully structured contingency.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does closing take in Kootenai County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Conventional financed purchases in Kootenai County typically close in 30 to 45 days, with many landing around 30. Cash purchases can close in 7 to 21 days when title is clean. VA and USDA loans tend to run longer due to additional requirements. Knowing the closing timeline is critical when aligning the purchase with the sale of a current home.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the first step if I've found my Idaho home but haven't sold my current one?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Get familiar with these options early and talk them through with your lender and CPA before you make an offer — they'll tell you which path fits your taxes and accounts. Your REALTOR®'s role is the real estate side: structuring the offer and closing timeline around the path you choose so the house doesn't slip away on a technicality. Buyers who lose homes in this market usually didn't know these options existed until it was too late.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/buying-north-idaho-home-before-selling-current-bridge-financing-options#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Buying a North Idaho Home Before Selling Your Current One: Bridge Financing Strategies',
      item: 'https://www.realestatewithshirin.com/articles/buying-north-idaho-home-before-selling-current-bridge-financing-options',
    },
  ],
}

const stats = [
  { value: '6.51%', label: 'Avg 30-yr fixed', sub: 'Freddie Mac, May 2026' },
  { value: '7', label: 'Ways to bridge the gap', sub: 'Most buyers know two' },
  { value: '30–45 days', label: 'Typical Kootenai close', sub: 'Cash: 7–21 days' },
  { value: '60 days', label: 'IRA rollover window', sub: 'Not 61' },
]

const faqs = faqSchema.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text }))

const linkClass = 'text-[#C4842A] hover:underline'

export default function BridgeFinancingArticlePage() {
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
            <span className="text-[#5C5650]">Bridge Financing in North Idaho</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">North Idaho Buyer Guides</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">13 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">May 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            You Found Your North Idaho Dream Home — But You Still Have a House to Sell
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            Seven real ways to bridge the gap between buying here and selling there — what works, what doesn&apos;t, and what the IRS actually says.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · May 23, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">{s.value}</p>
                <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">{s.label}</p>
                <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image (placeholder — upload to /public/images/north-idaho-bridge-financing.png) */}
      <img
        src="/images/north-idaho-bridge-financing.png"
        alt="A North Idaho home with a for-sale sign — bridging the gap between buying and selling"
        className="w-full h-auto block"
      />

      {/* Article Body */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article */}
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <p className="mb-6">I get this call almost every week.</p>
              <p className="mb-6">
                It usually goes something like this: &ldquo;Shirin, we found <em>the</em>{' '}house. The one with the view, the workshop, the right neighborhood — everything we&apos;ve been looking for. But our place in San Jose isn&apos;t on the market yet, and we don&apos;t want to carry two mortgages. What do we do?&rdquo;
              </p>
              <p className="mb-6">
                Here&apos;s what I tell them: <strong className="text-[#1C1A17]">deep breath.</strong>{' '}You have more options than you think — and most buyers don&apos;t know that five of them even exist until they&apos;re already in a bind.
              </p>
              <p className="mb-6">
                Let me be clear about my lane: I&apos;m a REALTOR®, not a CPA or a financial advisor, and I won&apos;t pretend to be one. I don&apos;t map out your finances and I don&apos;t tell you which account to pull from. What I&apos;ve seen is a lot of out-of-state buyers navigate this exact gap — and the ones who walk in already aware of their options do far better than the ones scrambling six weeks too late. The whole point of this article is awareness, so you can take the strategies that fit your situation to your own CPA and lender with a head start.
              </p>
              <p className="mb-10">
                So let&apos;s walk through this. Seven real strategies — what works, what doesn&apos;t, what the IRS actually says (not what your brother-in-law thinks they said), and how to make a move from out of state without losing your mind or the house. None of these are decisions you make alone, and none are ones I make for you — they&apos;re options to put on the table with the professionals who handle your money.
              </p>

              <p className="mb-10">If you&rsquo;re still evaluating which part of North Idaho you want to land in, start with the full relocation guide before choosing a financing strategy:{' '}<a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">Relocating to North Idaho: The Complete Local Guide for Out-of-State Buyers</a>.</p>
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">First, why this even matters</h2>
              <p className="mb-6">
                In May 2026, the average 30-year fixed mortgage rate is sitting at <strong className="text-[#1C1A17]">6.51%</strong> ({' '}
                <a href="https://www.freddiemac.com/pmms" target="_blank" rel="noopener noreferrer" className={linkClass}>Freddie Mac PMMS, May 21, 2026</a>). That&apos;s not 3%. That&apos;s not 4%. That means carrying two mortgages — even for 90 days — is <em>expensive</em>. On a $500,000 loan, that&apos;s roughly $3,000 a month in interest alone. For three months, you&apos;re looking at $9,000 you&apos;ll never see again.
              </p>
              <p className="mb-10">
                So buyers freeze. They find the house, they fall in love, and then they stall out because they don&apos;t know how to bridge the gap between buying here and selling there. Most of them lose the house. That&apos;s the part that kills me — because there are at least seven ways to make this work, and most buyers don&apos;t know about five of them.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">The Idaho closing timeline (why this is a real problem)</h2>
              <p className="mb-6">
                In Kootenai County, <strong className="text-[#1C1A17]">conventional financed purchases typically close in 30 to 45 days</strong>, with many landing around 30 ({' '}
                <a href="https://inlandnwlifestyles.com/blog/how-escrow-works-in-idaho-real-estate" target="_blank" rel="noopener noreferrer" className={linkClass}>Inland Northwest Lifestyles — Escrow Process in Idaho</a>). Cash deals can close in 7 to 21 days when title is clear.
              </p>
              <p className="mb-4">
                California closings tend to run a similar 30 to 45 days, but here&apos;s the thing — your timelines almost never line up. If you&apos;re selling in California and buying in Idaho, you&apos;re trying to thread a needle where:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Your Idaho seller wants to close fast (because the market here moves)</li>
                <li>Your California buyer wants their own 30-day timeline</li>
                <li>Your lender wants both files cleared before they release funds</li>
                <li>You want to not own two houses for six months</li>
              </ul>
              <p className="mb-10">That&apos;s the gap. Now let&apos;s bridge it.</p>

              {/* Strategy 1 */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Strategy #1: The 60-Day IRA Rollover</h2>
              <p className="mb-6">
                This is the one buyers&apos; eyes light up at, because most of them have never heard of it. Here&apos;s how it works, straight from the IRS:
              </p>
              <blockquote className="my-6 pl-5 border-l-2 border-[#C4842A] italic text-[#5C5650]">
                <p className="mb-2">&ldquo;If a distribution from an IRA or a retirement plan is paid directly to you, you can deposit all or a portion of it in an IRA or a retirement plan within 60 days.&rdquo;</p>
                <p className="text-sm not-italic text-[#9A9590]">—{' '}
                  <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions" target="_blank" rel="noopener noreferrer" className={linkClass}>IRS: Rollovers of Retirement Plan and IRA Distributions</a>
                </p>
              </blockquote>
              <p className="mb-6">
                In plain English: you can pull money out of your traditional IRA, use it as a temporary cash bridge to buy your North Idaho home, and as long as you redeposit the full amount into an IRA within <strong className="text-[#1C1A17]">60 days</strong>, there&apos;s no tax and no penalty. As if it never happened. That&apos;s a real, legal, IRS-sanctioned 60-day interest-free loan from your own retirement account.
              </p>
              <p className="mb-3 font-semibold text-[#1C1A17]">But there are rules, and you have to follow them exactly:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong className="text-[#1C1A17]">60 days means 60 days.</strong> Not 61. The clock starts the day you receive the distribution. Miss it and the entire amount becomes a taxable distribution, plus a 10% penalty if you&apos;re under 59½.</li>
                <li><strong className="text-[#1C1A17]">Once per 12-month period.</strong> Only one IRA-to-IRA rollover in any 12-month period, across all your IRAs aggregated together — but it&apos;s per person, so you and your spouse each get one.</li>
                <li><strong className="text-[#1C1A17]">20% withholding warning.</strong> Pull from a 401(k) instead and the administrator must withhold 20% for taxes — you&apos;d have to cover that 20% from another source to redeposit the full amount. IRAs don&apos;t have this withholding, which is part of why this is cleaner from an IRA.</li>
              </ul>
              <p className="mb-2"><strong className="text-[#1C1A17]">Who this works for:</strong> your current home sells in 45–60 days, the sale is solid, and you need a short bridge. You have enough in your IRA to cover it, and you can <em>guarantee</em> the redeposit hits within 60 days.</p>
              <p className="mb-10"><strong className="text-[#1C1A17]">Who this is dangerous for:</strong> anyone whose sale isn&apos;t already under contract. If your buyer falls through, you just turned your retirement into a taxable event with a 10% penalty on top. This is a <em>bridge</em>, not a Hail Mary.</p>

              {/* Strategy 2 */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Strategy #2: The 401(k) Loan</h2>
              <p className="mb-6">
                This one&apos;s different. Not a withdrawal — an actual loan from your own account, where you pay yourself back with interest. It won&apos;t fund a whole purchase, but it&apos;s a useful way to boost a down payment or bridge a short gap. Here&apos;s what the IRS says you can borrow ({' '}
                <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-loans" target="_blank" rel="noopener noreferrer" className={linkClass}>IRS: Retirement Topics – Plan Loans</a>):
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>The lesser of <strong className="text-[#1C1A17]">$50,000</strong> or <strong className="text-[#1C1A17]">50% of your vested account balance</strong></li>
                <li>Generally <strong className="text-[#1C1A17]">5 years</strong> to repay, with payments at least quarterly</li>
                <li><strong className="text-[#1C1A17]">Primary-residence exception:</strong> the law allows a longer repayment window when the loan is used to buy a primary residence — some plans extend it to 10, 15, even 25 years (check with your administrator)</li>
              </ul>
              <p className="mb-6">
                Here&apos;s the honest limitation, and it&apos;s a real one: $50,000 won&apos;t buy a North Idaho house — on a $600,000 home it&apos;s a slice, not the meal. Two things make it matter anyway. First, the cap is <strong className="text-[#1C1A17]">per person</strong>, so a married couple can each borrow against their own 401(k) — roughly <strong className="text-[#1C1A17]">$100,000 combined</strong>. Second, it&apos;s a down-payment booster, not whole-house funding: $50&ndash;100K can be exactly what lets you put 20% down and make a clean, non-contingent offer, then repay the loan when your current home sells. It&apos;s most powerful stacked with a HELOC or a recast — rarely the right move on its own.
              </p>
              <p className="mb-6">
                The thing people get wrong: old advice said if you leave your job you have 60 days to repay or it becomes taxable. The Tax Cuts and Jobs Act of 2017 changed that. Now you have until the due date of your federal tax return (including extensions) for the year the loan was deemed distributed — potentially until October 15 of the following year — to repay it or roll the offset into an IRA. It used to be a 60-day panic; now it&apos;s a structured runway.
              </p>
              <p className="mb-2"><strong className="text-[#1C1A17]">Who this works for:</strong> couples who can each tap a 401(k) to assemble a stronger down payment, or anyone boosting a down payment or bridging a short gap without starting the IRA-rollover clock. Best used alongside another strategy, not as your only one.</p>
              <p className="mb-10"><strong className="text-[#1C1A17]">Who this doesn&apos;t work for:</strong> self-employed buyers with no 401(k), anyone planning to leave their job mid-loan, or anyone expecting $50K to fund the whole purchase.</p>

              {/* Strategy 3 */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Strategy #3: The Bridge Loan</h2>
              <p className="mb-6">
                A bridge loan is exactly what it sounds like — a short-term loan that bridges the gap between buying your new house and selling your old one, with your current home usually as collateral. The reality on terms in 2026 ({' '}
                <a href="https://www.bankrate.com/mortgages/bridge-loan/" target="_blank" rel="noopener noreferrer" className={linkClass}>Bankrate</a>):
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong className="text-[#1C1A17]">Duration:</strong> 6 to 12 months typical, some as short as 3</li>
                <li><strong className="text-[#1C1A17]">Rates:</strong> prime to prime + 2 points — high single digits to low double digits today</li>
                <li><strong className="text-[#1C1A17]">Equity:</strong> most lenders want 15–20% in your current home</li>
                <li><strong className="text-[#1C1A17]">Credit:</strong> typically 680 minimum</li>
                <li><strong className="text-[#1C1A17]">Structure:</strong> interest-only during the term, then a balloon when your home sells</li>
              </ul>
              <p className="mb-6">
                The catch most buyers don&apos;t see: many bridge lenders will only do the bridge if you also finance your next home through them — so you&apos;re shopping for a lender who&apos;ll do <em>both</em>. And bridge loans aren&apos;t a standardized product; terms, fees, and balloon structures vary by lender. This is one of those places where knowing the local lender landscape really matters.
              </p>
              <p className="mb-2"><strong className="text-[#1C1A17]">Who this works for:</strong> significant equity (20%+), strong credit, and you want certainty — and you&apos;ll pay for it in higher interest.</p>
              <p className="mb-10"><strong className="text-[#1C1A17]">Who this doesn&apos;t work for:</strong> thin equity, slower-selling markets, or anyone uncomfortable with balloon payments.</p>

              {/* Strategy 4 */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Strategy #4: The HELOC (set it up <em>before</em> you list)</h2>
              <p className="mb-6">
                The most important sentence in this article: <strong className="text-[#1C1A17]">you have to set up the HELOC before you list your house for sale.</strong> Most lenders won&apos;t issue a home equity line on a property that&apos;s actively listed — your equity is about to leave their books, so they see you as a flight risk ({' '}
                <a href="https://files.consumerfinance.gov/f/documents/cfpb_heloc-brochure_print.pdf" target="_blank" rel="noopener noreferrer" className={linkClass}>CFPB: What you should know about HELOCs</a>).
              </p>
              <p className="mb-6">
                The play: months before you move, open a HELOC on your current home, use it to fund your Idaho down payment, then pay it off at closing when your old home sells. It&apos;s significantly cheaper than a bridge loan, you only pay interest on what you draw, and it&apos;s far more flexible. The catch: you have to plan ahead — if your house isn&apos;t listed yet and you want to offer next week, it&apos;s too late for a HELOC. Rates are usually variable, and some lenders freeze a HELOC once the home is listed even after origination, so read the fine print.
              </p>
              <p className="mb-10"><strong className="text-[#1C1A17]">Who this works for:</strong> buyers 2–6 months out who are doing this strategically, with strong equity and a preference for flexibility over a full bridge structure.</p>

              {/* Strategy 5 */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Strategy #5: The Recast (buy first, sell second, reset the payment)</h2>
              <p className="mb-6">
                A recast (re-amortization) is when you apply a lump sum to the principal of an existing mortgage and the lender recalculates your monthly payment on the new, lower balance — same rate, same remaining term ({' '}
                <a href="https://singlefamily.fanniemae.com/job-aid/loan-delivery/topic/recast_mortgage.htm" target="_blank" rel="noopener noreferrer" className={linkClass}>Fannie Mae: Re-amortized (Recast) Mortgages</a>).
              </p>
              <p className="mb-6">
                The play: buy your Idaho home with a regular, non-contingent mortgage; move in and sell your old home; dump the proceeds into the new mortgage&apos;s principal; ask the lender to recast. You make a strong offer in a competitive market, you don&apos;t pay refinance closing costs (a recast usually runs $250–$500), you keep your original rate, and your payment drops to reflect the smaller balance.
              </p>
              <p className="mb-6">
                The catch: <strong className="text-[#1C1A17]">government-backed loans (FHA, VA, USDA) generally don&apos;t allow recasting</strong> — most conventional loans do, but not every servicer offers it. You also need to qualify for the original mortgage and bridge the months between purchase and sale, and some lenders have minimum recast amounts ($5,000–$10,000). It&apos;s not a refinance — only your payment changes, not your rate or term.
              </p>
              <p className="mb-10"><strong className="text-[#1C1A17]">Who this works for:</strong> buyers with income to carry both mortgages temporarily, enough to buy the Idaho home (often via 401(k) loan or HELOC), and a current home that sells within 6 months.</p>

              {/* Strategy 6 */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Strategy #6: The Sale-Leaseback</h2>
              <p className="mb-6">
                Sometimes the best move is to flip the script. A sale-leaseback (rent-back or post-closing occupancy agreement) is when you sell your current home but rent it back from the new buyer for 30, 60, or sometimes 90 days while you close on your new place.
              </p>
              <p className="mb-6">
                You list and sell, negotiate a rent-back clause into the purchase agreement, then stay as a tenant for an agreed period (usually 30–60 days), paying rent to the new owner (often their daily PITI). The upside: you have cash in hand, so you&apos;re a strong buyer for your Idaho purchase; no two mortgages, no retirement pull, no bridge-loan rates — a clean window with no financial stress. The tax wrinkle: rent you pay as a seller generally isn&apos;t deductible, and rent the buyer collects is typically taxable income ({' '}
                <a href="https://www.rocketmortgage.com/learn/rent-back-agreement" target="_blank" rel="noopener noreferrer" className={linkClass}>Rocket Mortgage</a>).
              </p>
              <p className="mb-6">
                The catch: your buyer has to agree (easy in a seller&apos;s market, harder in a buyer&apos;s), most lenders cap rent-backs at <strong className="text-[#1C1A17]">60 days for primary residences</strong> (longer can reclassify the buyer&apos;s loan as investment property), and you need a properly drafted written agreement.
              </p>
              <p className="mb-10"><strong className="text-[#1C1A17]">Who this works for:</strong> anyone whose old home is already on the market or about to be — especially powerful in seller-leaning markets where you have leverage with your buyer.</p>

              {/* Strategy 7 */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Strategy #7: The Contingent Offer (last resort here)</h2>
              <p className="mb-6">
                A contingent offer makes your purchase contingent on selling your current home. It used to be common; in North Idaho in 2026, it&apos;s mostly dead. In neighborhoods where sellers still see multiple offers, a contingent offer almost always loses to a clean one — you&apos;re asking the seller to take their house off the market while you try to sell yours, and if it doesn&apos;t sell, the deal collapses and they&apos;re back to square one.
              </p>
              <p className="mb-4">Where it might still work:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Sandpoint, especially properties sitting 60+ days (we covered the longer days-to-pending in my{' '}
                  <a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className={linkClass}>city comparison article</a>)</li>
                <li>Higher-end properties ($1M+) where the buyer pool is smaller</li>
                <li>Slower seasons (deep winter, often)</li>
                <li>Off-market or pre-market deals where the seller isn&apos;t getting other offers</li>
              </ul>
              <p className="mb-10">
                If you&apos;re going contingent, offer above asking, include a kick-out clause that&apos;s genuinely favorable to the seller, and have your existing home already listed and priced realistically.
              </p>

              {/* Which one */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">So which one&apos;s right for <em>you</em>?</h2>
              <p className="mb-6">
                Honest answer: it depends — on your equity, your timeline, your retirement balances, your tax situation, whether your current home is already listed, and a dozen other factors. The right strategy for someone selling a paid-off house in Seattle is completely different from someone selling a leveraged condo in San Diego, which is different again from a couple pulling from a Roth and a 401(k) at the same time.
              </p>
              <p className="mb-4 font-semibold text-[#1C1A17]">How to actually use this list:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Pick the two or three strategies that sound like they could fit your situation</li>
                <li>Run them by <strong className="text-[#1C1A17]">your CPA and your lender</strong> — they&apos;ll tell you what actually works for your taxes, your accounts, and your loan. That&apos;s their lane, not mine.</li>
                <li>If it helps, I&apos;m glad to point you toward local lenders who handle these structures — but you talk to them directly, and the financial call is yours and your advisors&apos;</li>
                <li>Once you and your team land on a path, I build the offer and closing timeline around it so you don&apos;t lose the house on a technicality — that part is my job</li>
              </ul>
              <p className="mb-10">
                The buyers who lose their dream home in North Idaho usually lose it because they didn&apos;t know these options existed until it was six weeks too late. The ones who get the house knew their choices going in.
              </p>

              {/* Disclaimers */}
              <div className="mb-10 p-5 rounded-sm bg-[#F0EBE3] border border-[#E0D5C8]">
                <p className="font-semibold text-[#1C1A17] mb-2">Important disclaimers (please read)</p>
                <p className="text-[15px] mb-3"><strong className="text-[#1C1A17]">I&apos;m a REALTOR®, not a CPA, tax attorney, or licensed financial advisor.</strong> This article is educational information about strategies used by real homebuyers — not personalized tax, legal, or investment advice. IRS rules around IRA rollovers, 401(k) loans, and retirement distributions are nuanced and depend on your age, income, filing status, and account type. Before pulling any money from a retirement account, talk to a qualified tax professional or financial advisor.</p>
                <p className="text-[15px] mb-3"><strong className="text-[#1C1A17]">Mortgage products vary by lender.</strong> The bridge loans, HELOCs, and recast options above are general descriptions. Specific terms, rates, fees, and eligibility vary significantly between lenders — always get written terms from a licensed mortgage professional before committing.</p>
                <p className="text-[15px]"><strong className="text-[#1C1A17]">Idaho real estate transactions are governed by Idaho law and the{' '}
                  <a href="https://irec.idaho.gov" target="_blank" rel="noopener noreferrer" className={linkClass}>Idaho Real Estate Commission</a>.</strong> As a licensed Idaho REALTOR®, I can advise on real estate matters within the scope of my licensure. For tax, legal, and financial advice, I refer you to the appropriate professionals — and I&apos;m happy to be part of that team conversation if helpful.</p>
              </div>

              {/* FAQ */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-6 font-semibold">Frequently asked questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                    <h3 className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">{faq.q}</h3>
                    <p className="font-dm-sans text-[15px] text-[#5C5650] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* Closing */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">Ready to make a move?</h2>
              <p className="mb-6">
                If you&apos;ve found a home and you&apos;re trying to figure out how to close on it without selling your current place first, let&apos;s talk. I&apos;ll make sure you know which options exist, point you toward local lenders worth a conversation, and — once you and your financial team settle on an approach — structure your offer and timeline so the house doesn&apos;t slip away on a technicality. You found the house. Let&apos;s not lose it.
              </p>
              <p className="mb-2 text-[15px] text-[#9A9590]">
                Shirin Abplanalp is a licensed Idaho REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate, serving Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, and Sandpoint. Educational information only — not tax, legal, or financial advice.
              </p>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="lg:sticky lg:top-8 space-y-6">

                {/* CTA */}
                <div className="bg-[#C4842A] rounded-sm p-6">
                  <p className="font-cormorant text-2xl text-white font-semibold mb-2">Found the house, haven&apos;t sold yours?</p>
                  <p className="font-dm-sans text-sm text-white/90 mb-4 leading-relaxed">I&apos;ll make sure you know your options and structure the offer around whatever path you and your lender choose.</p>
                  <a href="/contact" className="block text-center bg-[#1C1A17] hover:bg-[#2C2A27] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Schedule a call →
                  </a>
                </div>

                {/* Strategies at a glance */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Seven Ways to Bridge</p>
                  <ol className="space-y-2 list-decimal pl-5">
                    {['60-day IRA rollover', '401(k) loan', 'Bridge loan', 'HELOC (before listing)', 'Mortgage recast', 'Sale-leaseback', 'Contingent offer'].map((s) => (
                      <li key={s} className="font-dm-sans text-sm text-[#FAFAF8]">{s}</li>
                    ))}
                  </ol>
                </div>

                {/* Related */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Reading</p>
                  <div className="space-y-4">
                    <a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">CdA vs Post Falls vs Hayden vs Rathdrum vs Sandpoint</p>
                    </a>
                    <a href="/articles/how-much-do-homes-cost-post-falls-idaho" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">How Much Do Homes Cost in Post Falls?</p>
                    </a>
                    <a href="/articles/is-it-a-good-time-to-buy-home-northern-idaho" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Is It a Good Time to Buy in Northern Idaho?</p>
                    </a>
                  </div>
                </div>

                {/* About Shirin */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Local Agent</p>
                  <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate" className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-3">Licensed REALTOR® · SRES® · Berkshire Hathaway HomeServices Jacklin Real Estate</p>
                  <p className="font-dm-sans text-xs text-[#5C5650] leading-relaxed">
                    Shirin helps out-of-state buyers structure the move to North Idaho without carrying two mortgages or losing the house.
                  </p>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}
