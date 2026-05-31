import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Buying a Home Without a Buyer's Agent in 2026: What North Idaho Buyers Need to Know | Shirin Abplanalp",
  description:
    "What the August 2024 NAR settlement actually changed, why more buyers are going unrepresented, the open house exemption explained, and what unrepresented North Idaho buyers risk losing in real dollars.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles/buying-home-without-agent-nar-settlement-north-idaho',
  },
  openGraph: {
    title: "Buying a Home Without a Buyer's Agent in 2026: What North Idaho Buyers Need to Know After the NAR Settlement",
    description:
      "What the NAR settlement changed, the open house exemption, what solo buyers risk losing, and how to structure a BRA that actually works for you.",
    url: 'https://www.realestatewithshirin.com/articles/buying-home-without-agent-nar-settlement-north-idaho',
    type: 'article',
    publishedTime: '2026-05-22',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/unrepresented-buyers-nar-settlement.webp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/buying-home-without-agent-nar-settlement-north-idaho#article',
  headline: "Buying a Home Without a Buyer's Agent in 2026: What North Idaho Buyers Need to Know After the NAR Settlement",
  description:
    'What the August 2024 NAR settlement actually changed, why more buyers are going unrepresented, the open house exemption, and what unrepresented North Idaho buyers risk losing in real dollars.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/unrepresented-buyers-nar-settlement.webp',
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
  datePublished: '2026-05-22T00:00:00-07:00',
  dateModified: '2026-05-22T00:00:00-07:00',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatewithshirin.com/articles/buying-home-without-agent-nar-settlement-north-idaho',
  },
  url: 'https://www.realestatewithshirin.com/articles/buying-home-without-agent-nar-settlement-north-idaho',
  keywords: [
    "buying a home without a buyer's agent",
    'NAR settlement 2024',
    'unrepresented home buyer',
    'Buyer Representation Agreement Idaho',
    'open house buyer agreement',
    'do I need a buyer\'s agent',
    'NAR 2025 Profile of Home Buyers and Sellers',
    'buyer commission after NAR settlement',
    "North Idaho buyer's agent",
    "Coeur d'Alene buyer representation",
    'model home unrepresented buyer',
    'single property buyer representation agreement',
    'how to negotiate a BRA',
    'non-exclusive buyer agreement Idaho',
  ],
  articleSection: 'North Idaho Buyer Guides',
  wordCount: 4400,
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    geo: { '@type': 'GeoShape', box: '45.5 -117.5 49.0 -114.5' },
  },
  about: [
    {
      '@type': 'AdministrativeArea',
      name: 'Kootenai County',
      sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
    {
      '@type': 'City',
      name: "Coeur d'Alene",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County' },
    },
    { '@type': 'Thing', name: 'Buyer Representation Agreement' },
    { '@type': 'Thing', name: 'NAR Settlement August 2024' },
  ],
  mentions: [
    {
      '@type': 'Organization',
      name: 'National Association of REALTORS®',
      url: 'https://www.nar.realtor',
      sameAs: 'https://en.wikipedia.org/wiki/National_Association_of_Realtors',
    },
    {
      '@type': 'GovernmentOrganization',
      name: 'Idaho Real Estate Commission',
      url: 'https://irec.idaho.gov',
    },
    {
      '@type': 'Organization',
      name: 'Freddie Mac',
      url: 'https://www.freddiemac.com',
      sameAs: 'https://en.wikipedia.org/wiki/Freddie_Mac',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Rice University',
      url: 'https://www.rice.edu',
      sameAs: 'https://en.wikipedia.org/wiki/Rice_University',
    },
  ],
  citation: [
    { '@type': 'WebPage', name: 'NAR 2025 Profile of Home Buyers and Sellers — First-Time Buyer Share Falls', url: 'https://www.nar.realtor/newsroom/first-time-home-buyer-share-falls-to-historic-low-of-21-median-age-rises-to-40' },
    { '@type': 'WebPage', name: 'NAR Consumer Guide to Open Houses and Written Agreements', url: 'https://www.nar.realtor/the-facts/consumer-guide-to-open-houses-and-written-agreements' },
    { '@type': 'WebPage', name: 'NAR 2025 Profile of Home Buyers and Sellers Reveals Market Extremes', url: 'https://www.nar.realtor/magazine/real-estate-news/nar-2025-profile-of-home-buyers-sellers-reveals-market-extremes' },
    { '@type': 'WebPage', name: "Wall Street Journal — Why a Landmark Settlement on Realtor Fees Hasn't Cut Costs", url: 'https://www.wsj.com/real-estate/why-a-landmark-settlement-on-realtor-fees-hasnt-cut-costs-0dd35edc' },
    { '@type': 'WebPage', name: 'RISMedia — More Unrepresented Buyers, More Experienced Agents', url: 'https://www.rismedia.com/2025/10/22/more-unrepresented-buyers-more-experienced-agents-study-finds-consumer-shifts-commission-post-settlement/' },
    { '@type': 'WebPage', name: 'HousingWire — Buyer Agency Agreements Are Incomprehensible', url: 'https://www.housingwire.com/articles/report-finds-buyer-agency-agreements-are-incomprehensible-look-to-avoid-nar-settlement-terms/' },
    { '@type': 'WebPage', name: 'Investopedia — First-Time Homebuyers Drop to Lowest on Record', url: 'https://www.investopedia.com/first-time-home-buyers-are-at-lowest-on-record-11950552' },
    { '@type': 'WebPage', name: 'Freddie Mac Primary Mortgage Market Survey', url: 'https://www.freddiemac.com/pmms' },
    { '@type': 'WebPage', name: "r/TorontoRealEstate — Why buyers hesitate to sign a Buyer Representation Agreement", url: 'https://www.reddit.com/r/TorontoRealEstate/comments/1qpr83c/for_those_buyers_who_are_hesitant_to_sign_a_buyer/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/buying-home-without-agent-nar-settlement-north-idaho#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Can I legally buy a home in Idaho without a buyer's agent?",
      acceptedAnswer: { '@type': 'Answer', text: "Yes. There is no legal requirement that a home buyer be represented by an agent in Idaho or any other state. You can tour open houses without signing any agreement, work directly with a listing agent, write your own offers, and close the transaction unrepresented. The 2025 NAR Profile of Home Buyers and Sellers shows that 12% of buyers nationally go without an agent. The legal question and the financial question are separate — being allowed to go solo does not mean it is the lowest-cost path on any given transaction." },
    },
    {
      '@type': 'Question',
      name: 'What is a Buyer Representation Agreement and do I have to sign one?',
      acceptedAnswer: { '@type': 'Answer', text: "A Buyer Representation Agreement (BRA) is a written contract between a buyer and a real estate agent that specifies the services the agent will provide, the amount the agent will be paid, who pays them, and the term length. Since August 17, 2024, NAR rules require that any buyer working with an agent sign a written BRA before touring a home with that agent. You do not need to sign a BRA to attend an open house on your own or to ask an agent about their services. All BRA terms are fully negotiable per NAR's official consumer guide, and you should not sign an agreement with provisions you do not understand or agree with." },
    },
    {
      '@type': 'Question',
      name: 'Does going to an open house require signing a buyer agreement?',
      acceptedAnswer: { '@type': 'Answer', text: "No. NAR's official consumer guide states explicitly that if you are simply visiting an open house on your own or asking a real estate professional about their services, you do not need to sign a written buyer agreement. This is true for traditional open houses, builder model home walkthroughs, and any tour where you are visiting on your own without a representing agent. The listing agent or model home sales rep is working for the seller in those settings and is not required to enter into a written agreement with you." },
    },
    {
      '@type': 'Question',
      name: 'Do unrepresented buyers actually save money?',
      acceptedAnswer: { '@type': 'Answer', text: "Sometimes — but the research is mixed. The Duarte and Zhang study summarized by RISMedia notes that solo buyers may end up over-paying for properties, with potential commission savings offset by negotiation losses, contract-term losses, and inspection-leverage losses. A buyer who can secure a 2–3% seller credit in lieu of a buyer-agent commission may save $12,000–$18,000 on a $600,000 North Idaho home, but only if the seller agrees, the lender allows the concession (typically capped at 3–6% by loan program), and the buyer negotiates the rest of the transaction as effectively as a represented buyer would have. In competitive offer scenarios, the comparison frequently goes the other way." },
    },
    {
      '@type': 'Question',
      name: "Will the seller pay my agent's commission after the NAR settlement?",
      acceptedAnswer: { '@type': 'Answer', text: "Often, yes — but it must be negotiated rather than assumed. The settlement banned the publication of buyer-agent commission offers on the MLS, but it did not ban sellers from offering to pay them. A buyer's agent in 2026 typically asks the seller to cover the buyer-agent fee as part of the purchase offer, either as a direct fee payment or as a seller concession credited to the buyer at closing. Most North Idaho sellers, particularly in a balanced or slow market, still agree to cover buyer-agent fees because doing so widens the buyer pool. The amount is no longer standardized at 2.5% or 3% — it is negotiable on every transaction." },
    },
    {
      '@type': 'Question',
      name: 'Is going unrepresented riskier with new construction or model homes?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes, significantly. The on-site sales representative at a builder model home is the listing agent, contractually and legally obligated to the builder. They cannot advise an unrepresented buyer on what to offer, what upgrades to negotiate, what contingencies to include, or how to structure the contract in the buyer's favor. New construction transactions also involve multi-month build timelines, change orders, walkthrough inspections, and lender coordination that an experienced buyer's agent manages routinely. Unrepresented new-construction buyers frequently overpay on upgrades and miss inspection items that would have been standard requests with representation." },
    },
    {
      '@type': 'Question',
      name: 'What should I look for in a Buyer Representation Agreement before signing?',
      acceptedAnswer: { '@type': 'Answer', text: "Read carefully for: (1) the fee structure — flat fee, hourly rate, or percentage; (2) the term length — most BRAs run 30 to 180 days and should be limited to a reasonable search window; (3) early termination provisions — what happens if you want to switch agents or stop searching; (4) the holdover clause — how long after the agreement ends you are still obligated to pay if you buy a home the agent showed you; and (5) double-commission scenarios — clauses that could create an obligation to pay both the agent and a future agent. All terms are negotiable, and you should walk away from any agent who will not explain or modify provisions you do not understand." },
    },
    {
      '@type': 'Question',
      name: "How should I decide whether to use a buyer's agent in North Idaho?",
      acceptedAnswer: { '@type': 'Answer', text: "The decision usually comes down to four factors: (1) your familiarity with the local market — North Idaho has meaningful microclimate, property tax, infrastructure, and school district variation that affect both pricing and long-term ownership cost; (2) your comfort with contract terms and negotiation — Idaho's Property Condition Disclosure, inspection objection windows, and seller concession caps are technical; (3) the transaction type — new construction and competitive multiple-offer scenarios are higher-risk for unrepresented buyers than slower resale markets; and (4) the fee math — if you can negotiate a seller-paid buyer-agent fee on a clearly-defined BRA, the out-of-pocket cost to you is often zero." },
    },
    {
      '@type': 'Question',
      name: 'Can a Buyer Representation Agreement be limited to just one property or a single day?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes. The BRA term length, property scope, and exclusivity provisions are all negotiable under NAR's post-settlement rules and under Idaho practice. A buyer who wants to see one specific house before committing to a longer agreement can sign a single-property, single-showing, or short-term BRA limited to that property and that date. This is increasingly common in the post-settlement environment because it solves the most-cited buyer objection — that signing a 90- or 180-day exclusive agreement before the first tour feels like an overcommitment. The agreement can always be extended once you decide to keep working together." },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/buying-home-without-agent-nar-settlement-north-idaho#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    { '@type': 'ListItem', position: 3, name: "Buying a Home Without a Buyer's Agent After the NAR Settlement", item: 'https://www.realestatewithshirin.com/articles/buying-home-without-agent-nar-settlement-north-idaho' },
  ],
}

const narStats = [
  { stat: 'All buyers who used an agent or broker', value: '88%' },
  { stat: 'Buyers of previously-owned homes who used an agent', value: '92%' },
  { stat: 'Buyers who would use their agent again or recommend them', value: '91%' },
  { stat: 'First-time buyer share of market', value: '21% — record low since 1981' },
  { stat: 'Median first-time buyer age', value: '40 — all-time high' },
  { stat: 'Median repeat buyer age', value: '62' },
  { stat: 'Median age of all buyers', value: '59' },
  { stat: 'All sellers who used an agent', value: '91% — tied for highest on record' },
]

const buyerLosses = [
  { n: 1, label: 'Price', body: 'A listing agent cannot advise an unrepresented buyer on what to offer. Solo buyers frequently anchor to list price or comp-pull from public sites that lag the real-time market by 30–60 days. In a competitive offer situation, a represented buyer with a sharp agent often wins for less.' },
  { n: 2, label: 'Contract terms', body: "Earnest money structure, contingency language, financing terms, appraisal-gap clauses, inspection objection windows, seller concession caps — every one of these affects the final cost. A buyer who doesn't know what's negotiable doesn't negotiate it." },
  { n: 3, label: 'Inspection leverage', body: 'After inspection, a represented buyer routinely negotiates seller credits for repairs, replacements, or carry-back items. Unrepresented buyers frequently accept findings as-is because they don\'t know what\'s standard to request.' },
  { n: 4, label: 'Lender coordination', body: 'Closing on time, rate-lock timing, appraisal disputes, and lender-required repairs all happen faster when an agent is coordinating. Solo buyers absorb the cost of delays as missed rate locks, extended rate-lock fees, or per diem penalties.' },
  { n: 5, label: 'Disclosure interpretation', body: 'Idaho sellers must complete a Property Condition Disclosure form. Reading it and knowing what\'s missing or evasive requires experience. A represented buyer\'s agent will catch a vague disclosure entry that a solo buyer reads at face value.' },
]

const buyerObjections = [
  {
    objection: '"It\'s an exclusive agreement that confines me to a single agent just to view a property."',
    answer: 'The BRA term length is fully negotiable in Idaho. A one-property, one-day, or seven-day agreement is legal and common. So is a non-exclusive agreement. So is a 30-day trial with a free-exit clause. An agent who insists on a 180-day exclusive on the first phone call is signaling something — and the buyer is right to walk away.',
  },
  {
    objection: '"Why would I commit to working with someone I just met for the largest purchase of my life?"',
    answer: "You shouldn't. The right structure is a short, narrow first agreement — limited to the specific property you want to see — that lets you and the agent figure out whether the working relationship works before either side commits to anything longer.",
  },
  {
    objection: '"I don\'t want to be tied to someone who may prioritize their own interests over mine."',
    answer: 'Under a BRA, an agent owes you the duty of loyalty, full disclosure, confidentiality, and obedience to lawful instruction, codified by the Idaho Real Estate Commission. The practical test: has your agent ever told you not to buy a house, or to walk away after inspection? That\'s the signal.',
  },
  {
    objection: '"I want a one-page agreement in plain English, not a six-page legal document."',
    answer: "The required BRA elements are narrow: services provided, fee amount, who pays, and term. Everything beyond that — holdover clauses, dual-commission language, broad exclusivity — is negotiable and often removable. A buyer who asks for a simplified, one-property, short-term agreement should expect their agent to say yes.",
  },
  {
    objection: '"What if I want to set the commission to zero if the seller doesn\'t cover it?"',
    answer: "This is also negotiable in Idaho. The BRA must state who pays the agent — but the amount the buyer pays can be written as zero, contingent on seller-paid compensation. If the seller does not cover the buyer-agent fee, the agreement terminates or shifts to a different structure.",
  },
]

const threePaths = [
  {
    label: 'Option 1',
    title: 'Full representation with a clear fee structure',
    body: "Sign a BRA, negotiate the fee (flat, hourly, or percentage), and ask the seller to cover it in the purchase agreement as a concession. This is what 88% of buyers still do and what 91% of those buyers say they would do again. The 'savings' of going solo only materialize if you outperform a competent agent on price and terms — which is rare.",
    highlight: true,
  },
  {
    label: 'Option 2',
    title: 'Limited or flat-fee representation',
    body: "Some agents now offer transaction-only or limited-scope services for a flat fee. You handle search; the agent handles offer drafting, contract negotiation, and closing coordination. A valid middle path for experienced buyers who genuinely don't need search help.",
    highlight: false,
  },
  {
    label: 'Option 3',
    title: 'Fully unrepresented with a real estate attorney',
    body: "Buyers willing to truly go solo should at minimum retain an Idaho real estate attorney for offer review, contract terms, and closing. Attorney fees on a single purchase run $800–$2,500 in Idaho — meaningfully less than 2–3% commission, but only if you are confident in your own ability to handle price negotiation, inspection objections, and lender coordination.",
    highlight: false,
  },
]

const faqs = [
  { q: "Can I legally buy a home in Idaho without a buyer's agent?", a: "Yes. There is no legal requirement that a home buyer be represented by an agent in Idaho or any other state. You can tour open houses without signing any agreement, work directly with a listing agent, write your own offers, and close unrepresented. The 2025 NAR Profile shows 12% of buyers nationally go without an agent. The legal question and the financial question are separate — being allowed to go solo does not mean it is the lowest-cost path on any given transaction." },
  { q: 'What is a Buyer Representation Agreement and do I have to sign one?', a: "A BRA is a written contract between a buyer and an agent that specifies services, the agent's fee, who pays, and the term length. Since August 17, 2024, NAR rules require that any buyer working with an agent sign a written BRA before touring a home. You do not need to sign a BRA to attend an open house on your own. All BRA terms are fully negotiable per NAR's official consumer guide." },
  { q: 'Does going to an open house require signing a buyer agreement?', a: "No. NAR's official guide states: 'If you are simply visiting an open house on your own or asking a real estate professional about their services, you do not need to sign a written buyer agreement.' This applies to traditional open houses and builder model home walkthroughs. The listing agent in those settings is working for the seller." },
  { q: 'Do unrepresented buyers actually save money?', a: "Sometimes — but the research is mixed. The Duarte and Zhang study notes that solo buyers may end up over-paying for properties, with commission savings offset by negotiation losses. A buyer who secures a 2–3% seller credit may save $12,000–$18,000 on a $600,000 home — but only if the seller agrees, the lender allows the concession, and the buyer negotiates as effectively as a represented buyer. In competitive situations, the comparison frequently goes the other way." },
  { q: "Will the seller pay my agent's commission after the NAR settlement?", a: "Often, yes — but it must be negotiated rather than assumed. The settlement banned MLS commission-offer publication, not seller-paid buyer-agent fees. A buyer's agent in 2026 typically asks the seller to cover the fee as part of the purchase offer. Most North Idaho sellers in a balanced or slow market still agree, because doing so widens the buyer pool. The amount is no longer standardized — it is negotiable on every transaction." },
  { q: 'Is going unrepresented riskier with new construction or model homes?', a: "Yes, significantly. The on-site rep at a model home is the listing agent, obligated to the builder. They cannot advise an unrepresented buyer on pricing, upgrades, contingencies, or contract structure. New construction also involves multi-month build timelines, change orders, and walkthrough inspections that an experienced buyer's agent manages routinely. Unrepresented new-construction buyers frequently overpay on upgrades and miss inspection items." },
  { q: 'What should I look for in a Buyer Representation Agreement before signing?', a: "Read carefully for: (1) fee structure; (2) term length — most BRAs run 30 to 180 days; (3) early termination provisions; (4) the holdover clause — how long after the agreement ends you are still obligated to pay; and (5) double-commission scenarios. All terms are negotiable. Walk away from any agent who will not explain or modify provisions you do not understand." },
  { q: "How should I decide whether to use a buyer's agent in North Idaho?", a: "Four factors: (1) your familiarity with the local market — North Idaho has meaningful microclimate, property tax, infrastructure, and school district variation; (2) your comfort with contract terms and negotiation; (3) the transaction type — new construction and competitive offers are higher-risk for unrepresented buyers; and (4) the fee math — if you can negotiate a seller-paid buyer-agent fee on a clearly-defined BRA, your out-of-pocket cost is often zero." },
  { q: 'Can a Buyer Representation Agreement be limited to just one property or a single day?', a: "Yes. Term length, property scope, and exclusivity are all negotiable under NAR's post-settlement rules and Idaho practice. A single-property, single-showing, or short-term BRA is legal and increasingly common. It solves the most-cited buyer objection — that signing a 90- or 180-day exclusive before the first tour feels like an overcommitment. If an agent will not write a short, narrow agreement to start, that is meaningful information." },
]

export default function NARSettlementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh', backgroundColor: '#F5EFE6' }}>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="mb-4" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4842A' }}>
            North Idaho Buyer Guides
          </p>
          <h1 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(28px, 4.5vw, 48px)', lineHeight: 1.1, color: '#1C1A17' }}>
            Buying a Home Without a Buyer&apos;s Agent in 2026
          </h1>
          <p className="mb-8" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(17px, 2.5vw, 22px)', fontStyle: 'italic', color: '#5C5650', lineHeight: 1.4 }}>
            What North Idaho Buyers Need to Know After the NAR Settlement
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#5C5650' }}>By Shirin Abplanalp, REALTOR® · SRES®</span>
            <span style={{ color: '#C4842A' }}>·</span>
            <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#5C5650' }}>May 22, 2026</span>
            <span style={{ color: '#C4842A' }}>·</span>
            <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#5C5650' }}>16 min read</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full">
        <img
          src="/images/unrepresented-buyers-nar-settlement.webp"
          alt="NAR settlement buyer representation guide — what changed for North Idaho buyers in 2024"
          className="w-full h-auto block"
        />
      </div>

      {/* Article Body */}
      <section style={{ backgroundColor: '#FAFAF8', paddingTop: '64px', paddingBottom: '80px' }}>
        <div className="max-w-5xl mx-auto px-6" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '64px', alignItems: 'start' }}>

          {/* Main Column */}
          <article style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '16px', lineHeight: 1.8, color: '#3A3530' }}>

            {/* Byline */}
            <div className="flex items-center gap-4 mb-10 pb-8" style={{ borderBottom: '1px solid #E8DDD0' }}>
              <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp" style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '14px', fontWeight: 600, color: '#1C1A17', margin: 0 }}>Shirin Abplanalp</p>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590', margin: 0 }}>Licensed REALTOR® · SRES® · eXp Realty, North Idaho</p>
              </div>
            </div>

            {/* Lead */}
            <p className="mb-6" style={{ fontSize: '17px', lineHeight: 1.85, color: '#1C1A17' }}>
              Yes, you can legally buy a home in North Idaho without your own agent — <strong style={{ color: '#1C1A17' }}>88% of buyers still use one</strong>, but the{' '}
              <a href="https://www.nar.realtor/newsroom/first-time-home-buyer-share-falls-to-historic-low-of-21-median-age-rises-to-40" target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A' }}>NAR&apos;s 2025 Profile of Home Buyers and Sellers</a>{' '}
              and a Rice University study by Jefferson Duarte and David Zhang both confirm that <strong style={{ color: '#1C1A17' }}>more buyers are going unrepresented in the wake of the August 17, 2024 NAR settlement</strong>.
            </p>
            <p className="mb-6">
              The settlement changed two things: (1) listing agents can no longer publish buyer-agent commission offers on the MLS, and (2) buyers working with an agent must sign a written Buyer Representation Agreement before touring a home. Open houses are explicitly exempt —{' '}
              <a href="https://www.nar.realtor/the-facts/consumer-guide-to-open-houses-and-written-agreements" target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A' }}>NAR&apos;s own consumer guide</a>{' '}
              confirms &ldquo;if you are simply visiting an open house on your own, you do not need to sign a written buyer agreement.&rdquo; That single exemption is fueling most of the unrepresented-buyer behavior in the field right now.
            </p>
            <p className="mb-10">
              The math case for going solo looks compelling — potentially <strong style={{ color: '#1C1A17' }}>$12,000–$18,000 in commission savings</strong> on a $600,000 Coeur d&apos;Alene home. But the Rice/RISMedia research explicitly notes that solo buyers may &ldquo;end up over-paying for properties&rdquo; by amounts that can erase those savings entirely. This article explains what changed, what the rules actually say, what unrepresented buyers are missing in real dollars, and how to decide which path makes sense for your specific transaction.
            </p>

            <p className="mb-10" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '17px', lineHeight: 1.75, color: '#5C5650' }}>
              If you&rsquo;re still early in the relocation decision,{' '}<a href="/relocating-to-north-idaho" style={{ color: '#C4842A', textDecoration: 'none' }}>the North Idaho relocation guide</a>{' '}covers the full buying process context for out-of-state buyers &mdash; before the agent decision matters.
            </p>

            {/* What changed */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 600, color: '#1C1A17', marginTop: '48px', marginBottom: '20px' }}>
              What changed on August 17, 2024
            </h2>
            <div className="space-y-4 mb-10">
              {[
                {
                  rule: 'Rule 1: No more buyer-agent commission offers on the MLS.',
                  body: "Before the settlement, listing agents published exactly how much they were offering a buyer's agent — typically 2.5% or 3%. That practice is now banned. Buyer-agent compensation must be negotiated separately, either in the BRA or as part of the purchase offer.",
                },
                {
                  rule: 'Rule 2: Buyers working with an agent must sign a written BRA before touring a home.',
                  body: "Per NAR's official guidance, the agreement must specify: (a) services the agent will provide, (b) the amount the agent will be paid, (c) who pays them, and (d) the term length. All terms are fully negotiable. \"Buyers should not sign anything that includes terms they do not agree with or do not understand.\"",
                },
              ].map((item) => (
                <div key={item.rule} className="p-5 rounded-sm" style={{ backgroundColor: '#F5EFE6', borderLeft: '3px solid #C4842A' }}>
                  <p style={{ fontWeight: 700, color: '#1C1A17', marginBottom: '6px' }}>{item.rule}</p>
                  <p style={{ color: '#5C5650', margin: 0, fontSize: '15px' }}>{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mb-10">
              Two things did <strong style={{ color: '#1C1A17' }}>not</strong> change: home sellers can still offer to cover the buyer&apos;s agent fee as part of the purchase agreement, and listing agents still represent the seller exclusively — they are not neutral and cannot represent the buyer without explicit written disclosure and consent.
            </p>

            {/* NAR data */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 600, color: '#1C1A17', marginTop: '48px', marginBottom: '16px' }}>
              The data — what&apos;s actually happening to buyer representation
            </h2>
            <p className="mb-6">
              The most authoritative data on buyer behavior is the{' '}
              <a href="https://www.nar.realtor/magazine/real-estate-news/nar-2025-profile-of-home-buyers-sellers-reveals-market-extremes" target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A' }}>NAR 2025 Profile of Home Buyers and Sellers</a>,{' '}
              based on a survey covering July 2024 through June 2025 — the first full year of post-settlement behavior:
            </p>
            <div className="mb-6 rounded-sm overflow-hidden" style={{ border: '1px solid #E8DDD0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '14px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#1C1A17' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left', color: '#FAFAF8', fontWeight: 600, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Statistic</th>
                    <th style={{ padding: '12px 16px', textAlign: 'right', color: '#C4842A', fontWeight: 700, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>2025 Value</th>
                  </tr>
                </thead>
                <tbody>
                  {narStats.map((row, i) => (
                    <tr key={row.stat} style={{ backgroundColor: i % 2 === 0 ? '#2A2722' : '#1C1A17' }}>
                      <td style={{ padding: '11px 16px', color: '#C8B99A', borderBottom: '1px solid #3A3530' }}>{row.stat}</td>
                      <td style={{ padding: '11px 16px', textAlign: 'right', fontWeight: 700, color: '#FAFAF8', borderBottom: '1px solid #3A3530', whiteSpace: 'nowrap' }}>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', color: '#9A9590', padding: '10px 16px', margin: 0, backgroundColor: '#1C1A17' }}>
                Source: NAR 2025 Profile of Home Buyers and Sellers, released November 4, 2025.
              </p>
            </div>
            <div className="space-y-3 mb-10">
              {[
                { n: '1', text: 'Representation is still overwhelmingly the norm. 88% of buyers use an agent, and 91% are satisfied enough to recommend or reuse their agent. The settlement did not collapse the buyer-agent relationship.' },
                { n: '2', text: 'The 12% of buyers going unrepresented is meaningfully larger than the historical baseline — and the largest increases are in states where written buyer agreements were uncommon before 2024, which includes Idaho.' },
                { n: '3', text: 'First-time buyers are the affordability-pressured cohort most likely to go solo. They are the smallest market share on record (21%), and the median first-time buyer is now 40 years old.' },
              ].map((item) => (
                <div key={item.n} className="flex gap-4">
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '20px', fontWeight: 700, color: '#C4842A', flexShrink: 0, paddingTop: '2px', minWidth: '20px' }}>{item.n}.</span>
                  <p style={{ margin: 0, color: '#3A3530' }}>{item.text}</p>
                </div>
              ))}
            </div>

            {/* 7 reasons */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 600, color: '#1C1A17', marginTop: '48px', marginBottom: '20px' }}>
              Why buyers are going unrepresented — the seven real reasons
            </h2>
            <div className="space-y-6 mb-10">
              {[
                { n: 1, heading: 'The settlement created a perception that buyers now pay out of pocket.', body: "This is the single biggest driver. Buyers saw headlines, drew the wrong conclusion, and assumed they would owe their agent thousands at closing with no way to roll it into the loan. The actual rules are more flexible — sellers can still offer to cover the buyer-agent fee, the fee can be written into the offer as a seller concession, and lenders treat seller-paid buyer-agent fees the same as before. But the perception has stuck." },
                { n: 2, heading: 'The Buyer Representation Agreement itself is intimidating.', body: "Before August 2024, most Idaho buyers had never signed a written agreement before touring homes. Now, a BRA must be signed before the first tour. For a buyer who has never seen one, signing a document with dollar amounts and contract terms before they have even decided to buy a specific house feels like a major commitment. A HousingWire analysis found that many BRAs contain provisions 'designed to scare' buyers, with double-commission scenarios and holdover clauses that are difficult to understand." },
                { n: 3, heading: 'The open house and model home exemption.', body: "NAR's guide is explicit — twice. Buyers can tour open houses, attend builder model home walkthroughs, and meet listing agents at properties — all without any paperwork, fee discussion, or representation commitment. It is a legal, intentional exemption. It is also where unrepresented buyers get into the most trouble, because the listing agent or builder sales rep they are now interacting with is not on their side." },
                { n: 4, heading: 'The commission \"savings\" calculation.', body: "The math looks straightforward: skip the buyer's agent, ask the seller to credit 2–3% back as a closing-cost concession, and pocket the difference. On a $600,000 Coeur d'Alene home, that is $12,000–$18,000. The problem is that the savings assume the seller agrees, the lender allows it, and the buyer negotiates as effectively as a represented buyer would have. Those three assumptions rarely all hold." },
                { n: 5, heading: 'The "I already did my research" mindset.', body: "Over 95% of buyers search for homes online before contacting an agent. Zillow, Redfin, and Realtor.com give buyers more information than agents had 20 years ago. What remains is negotiation, contract structure, inspection management, lender coordination, and local market knowledge — and whether those functions justify a 2–3% fee is exactly the question buyers are now actively asking, post-settlement, for the first time at scale." },
                { n: 6, heading: 'Extreme affordability pressure.', body: "First-time buyers are the smallest share of the market on record, the median first-time buyer is 40 years old, the median down payment is 10% (the highest in a generation), and mortgage rates remain in the mid-6% range. When a buyer is stretched to the absolute limit of qualification, the commission line item gets scrutinized in a way it never used to." },
                { n: 7, heading: 'New construction and builder model homes — the highest-risk scenario.', body: "The site agent at a model home is the listing agent, contractually obligated to the builder. They are trained sales professionals. They cannot legally advise an unrepresented buyer on what to offer, what contingencies to include, how to negotiate upgrade pricing, or what to inspect during the build. Unrepresented buyers often find out after closing that they paid full retail on upgrades and forgot to negotiate items a represented buyer would have flagged immediately." },
              ].map((item) => (
                <div key={item.n}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '20px', fontWeight: 600, color: '#1C1A17', marginBottom: '8px' }}>
                    {item.n}. {item.heading}
                  </h3>
                  <p style={{ color: '#5C5650', margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>

            {/* What buyers lose */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 600, color: '#1C1A17', marginTop: '48px', marginBottom: '12px' }}>
              What unrepresented buyers actually lose
            </h2>
            <p className="mb-6">
              The Duarte and Zhang research notes that &ldquo;one possibility regarding solo buyers is that they end up over-paying for properties.&rdquo; In practice, the losses cluster in five categories:
            </p>
            <div className="space-y-3 mb-10">
              {buyerLosses.map((item) => (
                <div key={item.n} className="flex gap-4 p-5 rounded-sm" style={{ backgroundColor: '#F5EFE6' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '22px', fontWeight: 700, color: '#C4842A', lineHeight: 1, flexShrink: 0, paddingTop: '2px', minWidth: '24px' }}>{item.n}</span>
                  <div>
                    <p style={{ fontWeight: 700, color: '#1C1A17', marginBottom: '4px', fontSize: '15px' }}>{item.label}</p>
                    <p style={{ color: '#5C5650', margin: 0, fontSize: '14px' }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buyer objections */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 600, color: '#1C1A17', marginTop: '48px', marginBottom: '12px' }}>
              What buyers actually say when they hesitate — and why most concerns are solvable
            </h2>
            <p className="mb-6">
              A widely-read 2026 thread on r/TorontoRealEstate — where Ontario buyers have lived under mandatory written buyer agreements for years under TRESA, essentially the world U.S. buyers just entered post-settlement — found that 54% of buyers ghosted their agent once the BRA was introduced. The top-voted concerns were not about commission. They were about exclusivity, lock-in, and trust. Here is what buyers said, and what the realistic answer looks like for an Idaho purchase:
            </p>
            <div className="space-y-5 mb-10">
              {buyerObjections.map((item, i) => (
                <div key={i} className="rounded-sm overflow-hidden" style={{ border: '1px solid #E8DDD0' }}>
                  <div className="px-5 py-4" style={{ backgroundColor: '#2A2722' }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '16px', fontStyle: 'italic', color: '#C8B99A', margin: 0 }}>{item.objection}</p>
                  </div>
                  <div className="px-5 py-4" style={{ backgroundColor: '#FAFAF8' }}>
                    <p style={{ fontSize: '14px', color: '#5C5650', margin: 0, lineHeight: 1.75 }}>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-sm mb-10" style={{ backgroundColor: '#F5EFE6', borderLeft: '3px solid #C4842A' }}>
              <p style={{ color: '#3A3530', margin: 0, fontSize: '15px' }}>
                The buyers ghosting after the BRA conversation are mostly not running from representation — they are running from <em>the way representation is being offered to them</em>. Long exclusive terms, vague fee language, and high-pressure paperwork at the first showing are exactly what makes the BRA feel adversarial. None of those things are required.
              </p>
            </div>

            {/* Three paths */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 600, color: '#1C1A17', marginTop: '48px', marginBottom: '20px' }}>
              The path forward — three realistic options
            </h2>
            <div className="space-y-4 mb-10">
              {threePaths.map((path) => (
                <div key={path.label} className="p-6 rounded-sm" style={{ border: path.highlight ? '2px solid #C4842A' : '1px solid #3A3530', backgroundColor: path.highlight ? '#1C1A17' : '#2A2722' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FAFAF8', backgroundColor: '#C4842A', padding: '3px 8px', borderRadius: '2px' }}>{path.label}</span>
                    {path.highlight && <span style={{ fontSize: '11px', color: '#C4842A', fontWeight: 600 }}>88% of buyers · 91% satisfaction</span>}
                  </div>
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '18px', fontWeight: 600, color: '#FAFAF8', marginBottom: '8px' }}>{path.title}</p>
                  <p style={{ fontSize: '14px', color: '#C8B99A', margin: 0, lineHeight: 1.75 }}>{path.body}</p>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-sm mb-10" style={{ backgroundColor: '#1C1A17' }}>
              <p style={{ color: '#C8B99A', margin: 0, fontSize: '15px', lineHeight: 1.8 }}>
                What none of these three options accommodate is the dangerous middle ground: showing up to model homes and open houses, telling the listing agent you are &ldquo;just looking on your own,&rdquo; and trying to negotiate a major purchase as a one-time buyer against a trained sales professional whose legal obligation runs to the seller.
              </p>
            </div>

            {/* Sources */}
            <div className="mb-8 p-5 rounded-sm" style={{ backgroundColor: '#F5EFE6', border: '1px solid #E8DDD0' }}>
              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9A9590', marginBottom: '12px' }}>Primary Sources</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="space-y-2">
                {[
                  { label: 'NAR 2025 Profile of Home Buyers and Sellers', url: 'https://www.nar.realtor/newsroom/first-time-home-buyer-share-falls-to-historic-low-of-21-median-age-rises-to-40' },
                  { label: 'NAR Consumer Guide to Open Houses and Written Agreements', url: 'https://www.nar.realtor/the-facts/consumer-guide-to-open-houses-and-written-agreements' },
                  { label: 'RISMedia — More Unrepresented Buyers, More Experienced Agents', url: 'https://www.rismedia.com/2025/10/22/more-unrepresented-buyers-more-experienced-agents-study-finds-consumer-shifts-commission-post-settlement/' },
                  { label: "Wall Street Journal — Why a Landmark Settlement on Realtor Fees Hasn't Cut Costs", url: 'https://www.wsj.com/real-estate/why-a-landmark-settlement-on-realtor-fees-hasnt-cut-costs-0dd35edc' },
                  { label: 'HousingWire — Buyer Agency Agreements Are Incomprehensible', url: 'https://www.housingwire.com/articles/report-finds-buyer-agency-agreements-are-incomprehensible-look-to-avoid-nar-settlement-terms/' },
                  { label: 'Freddie Mac Primary Mortgage Market Survey', url: 'https://www.freddiemac.com/pmms' },
                  { label: 'Idaho Real Estate Commission', url: 'https://irec.idaho.gov' },
                ].map((src) => (
                  <li key={src.url}>
                    <a href={src.url} target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A', fontSize: '13px' }}>{src.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="mb-10 p-5 rounded-sm" style={{ backgroundColor: '#F0EBE3', border: '1px solid #E0D5C8' }}>
              <p style={{ fontSize: '12px', color: '#7A7470', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: '#5C5650' }}>Disclaimer:</strong> This article is for informational and educational purposes only and does not constitute legal, tax, financial, or real estate transactional advice for your specific purchase. Buyer representation agreement terms, commission structures, lender concession caps, and post-settlement practices vary by state, brokerage, and individual transaction. The NAR settlement rules and related state-level regulations have continued to evolve since August 2024 and may change further. Before signing a Buyer Representation Agreement, going unrepresented, or making any decision about how to structure your real estate purchase, consult a licensed Idaho real estate attorney, your lender, and the Idaho Real Estate Commission for current rules. I am a licensed REALTOR® and Seniors Real Estate Specialist® — not a legal advisor.
              </p>
            </div>

            {/* Shirin's note */}
            <div className="p-6 rounded-sm" style={{ border: '1px solid #C4842A', backgroundColor: '#FAFAF8' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '18px', fontWeight: 600, color: '#1C1A17', marginBottom: '12px' }}>A note from Shirin</p>
              <p style={{ fontSize: '15px', color: '#5C5650', lineHeight: 1.8, marginBottom: '12px' }}>
                The honest answer to &ldquo;should I use a buyer&apos;s agent in 2026?&rdquo; is: it depends, but for most North Idaho buyers, yes — with the right agreement structure. The settlement changed the conversation about how agents get paid; it did not change the value an experienced local agent brings on price, contract, inspection, and closing.
              </p>
              <p style={{ fontSize: '15px', color: '#5C5650', lineHeight: 1.8, marginBottom: '12px' }}>
                What it <em>did</em> change is that buyers now have explicit, documented permission to negotiate every term of the relationship. Use that. I write single-property, short-term, seller-paid-or-it-terminates agreements for buyers who want to start narrow and earn the longer relationship.
              </p>
              <p style={{ fontSize: '15px', color: '#5C5650', lineHeight: 1.8, marginBottom: '20px' }}>
                If you are exploring the market and want to talk through what a transparent, narrow, fair BRA looks like for your specific North Idaho purchase — or whether full representation, limited representation, or solo with attorney support makes the most sense — I am happy to walk through it without commitment.
              </p>
              <a href="/contact" style={{ display: 'inline-block', backgroundColor: '#C4842A', color: '#FAFAF8', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 24px', borderRadius: '2px', textDecoration: 'none' }}>
                Talk through your options →
              </a>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6" style={{ position: 'sticky', top: '32px' }}>

            {/* Key numbers */}
            <div className="rounded-sm overflow-hidden" style={{ border: '1px solid #E8DDD0' }}>
              <div className="px-5 py-4" style={{ backgroundColor: '#1C1A17' }}>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4842A', margin: 0 }}>By the Numbers</p>
                <p style={{ fontSize: '12px', color: '#9A9590', marginTop: '2px', marginBottom: 0 }}>NAR 2025 · Post-Settlement</p>
              </div>
              <div style={{ backgroundColor: '#2A2722' }}>
                {[
                  { num: '88%', label: 'of buyers still use an agent' },
                  { num: '91%', label: 'would use their agent again' },
                  { num: '12%', label: 'going unrepresented — rising' },
                  { num: '21%', label: 'first-time buyers — record low' },
                  { num: '$12–18K', label: 'potential savings on $600K home' },
                  { num: 'Aug 17', label: '2024 — settlement effective date' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 px-5 py-3" style={{ borderBottom: '1px solid #3A3530' }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '20px', fontWeight: 700, color: '#C4842A', minWidth: '68px', flexShrink: 0 }}>{item.num}</span>
                    <span style={{ fontSize: '12px', color: '#C8B99A' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Open house rule callout */}
            <div className="p-5 rounded-sm" style={{ backgroundColor: '#1C1A17' }}>
              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4842A', marginBottom: '10px' }}>The Open House Rule</p>
              <p style={{ fontSize: '13px', color: '#C8B99A', lineHeight: 1.7, marginBottom: '10px', fontStyle: 'italic' }}>
                &ldquo;If you are simply visiting an open house on your own, you do not need to sign a written buyer agreement.&rdquo;
              </p>
              <p style={{ fontSize: '11px', color: '#9A9590', margin: 0 }}>— NAR Official Consumer Guide</p>
            </div>

            {/* BRA checklist */}
            <div className="p-5 rounded-sm" style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722' }}>
              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4842A', marginBottom: '14px' }}>BRA — What to Check</p>
              <div className="space-y-3">
                {['Fee structure (flat, hourly, or %)', 'Term length — negotiate short', 'Early termination clause', 'Holdover clause length', 'Double-commission scenarios', 'Property scope — limit to one if needed'].map((item) => (
                  <div key={item} className="flex gap-2" style={{ borderBottom: '1px solid #3A3530', paddingBottom: '10px' }}>
                    <span style={{ color: '#C4842A', flexShrink: 0, fontSize: '14px' }}>✓</span>
                    <span style={{ fontSize: '12px', color: '#C8B99A' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related articles */}
            <div className="p-5 rounded-sm" style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722' }}>
              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4842A', marginBottom: '14px' }}>Related Articles</p>
              <div className="space-y-3">
                {[
                  { href: '/articles/why-home-buyers-feel-like-theyre-doing-their-realtors-job', label: "Why Buyers Feel Like They're Doing Their Agent's Job" },
                  { href: '/articles/how-to-find-realtor-post-falls-idaho', label: 'How to Find the Right Realtor in Post Falls' },
                  { href: '/articles/north-idaho-cost-of-living-comparison', label: 'North Idaho Cost of Living (BEA Data)' },
                  { href: '/articles/north-idaho-property-taxes-county-comparison', label: 'Property Taxes by County' },
                  { href: '/articles/north-idaho-to-spokane-commute-times', label: 'Commute Times to Spokane by Town' },
                ].map((link) => (
                  <a key={link.href} href={link.href} style={{ display: 'block', fontSize: '13px', color: '#C4842A', textDecoration: 'none', paddingBottom: '10px', borderBottom: '1px solid #3A3530' }}>
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#2A2722', paddingTop: '64px', paddingBottom: '80px' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4842A', marginBottom: '12px', textAlign: 'center' }}>FAQ</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(28px, 4vw, 40px)', color: '#FAFAF8', textAlign: 'center', marginBottom: '48px', lineHeight: 1.15 }}>
            Common questions about buyer representation after the NAR settlement
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} style={{ borderBottom: '1px solid #3A3530', paddingBottom: '4px' }}>
                <summary style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', fontWeight: 600, color: '#FAFAF8', cursor: 'pointer', padding: '16px 0', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <span>{faq.q}</span>
                  <span style={{ color: '#C4842A', flexShrink: 0, fontSize: '20px' }}>+</span>
                </summary>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '14px', color: '#C8B99A', lineHeight: 1.8, padding: '0 0 16px 0', margin: 0 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
