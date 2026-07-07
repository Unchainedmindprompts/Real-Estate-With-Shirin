import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Why Do Home Buyers Feel Like They're Doing Their Realtor's Job? | Shirin Abplanalp",
  description:
    "Buyers are finding their own listings, chasing their own agents, and wondering why they hired a professional. Here is what a great buyer's agent actually does — and how to know if you have the wrong one.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles/why-home-buyers-feel-like-theyre-doing-their-realtors-job',
  },
  openGraph: {
    title: "Why Do Home Buyers Feel Like They're Doing Their Realtor's Job?",
    description:
      "A good realtor leads the process, communicates proactively, and advocates hard when it counts. If that is not what you are experiencing, the problem is not you — it is the agent.",
    url: 'https://www.realestatewithshirin.com/articles/why-home-buyers-feel-like-theyre-doing-their-realtors-job',
    type: 'article',
    publishedTime: '2026-05-15',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/north-idaho-lake-hero.webp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/why-home-buyers-feel-like-theyre-doing-their-realtors-job#article',
  headline: "Why Do Home Buyers Feel Like They're Doing Their Realtor's Job — And What a Great Agent Actually Does",
  description:
    "Buyers are finding their own listings, sending their own follow-ups, and wondering why they hired a professional. Here is what a great buyer's agent actually does — and how to know if you have the wrong one.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/north-idaho-lake-hero.webp',
    width: 1672,
    height: 941,
  },
  author: { '@id': 'https://www.realestatewithshirin.com/#agent' },
  publisher: { '@id': 'https://www.realestatewithshirin.com/#business' },
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  datePublished: '2026-05-15T00:00:00-07:00',
  dateModified: '2026-05-15T00:00:00-07:00',
  mainEntityOfPage: 'https://www.realestatewithshirin.com/articles/why-home-buyers-feel-like-theyre-doing-their-realtors-job',
  url: 'https://www.realestatewithshirin.com/articles/why-home-buyers-feel-like-theyre-doing-their-realtors-job',
  keywords: [
    'buyer agent not responding',
    'realtor not doing their job',
    'what does a buyer agent do',
    'how to find a good realtor',
    'buyer representation North Idaho',
    'Post Falls buyer agent',
    "Coeur d'Alene buyer agent",
    'relocation buyer agent Idaho',
    'buyer consultation',
    'North Idaho real estate agent',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 2200,
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    geo: {
      '@type': 'GeoShape',
      box: '47.5 -117.0 48.5 -116.0',
    },
  },
  contentLocation: [
    { '@type': 'City', name: "Coeur d'Alene", addressRegion: 'ID', addressCountry: 'US' },
    { '@type': 'City', name: 'Post Falls', addressRegion: 'ID', addressCountry: 'US' },
    { '@type': 'City', name: 'Hayden', addressRegion: 'ID', addressCountry: 'US' },
    { '@type': 'City', name: 'Rathdrum', addressRegion: 'ID', addressCountry: 'US' },
  ],
  about: [
    {
      '@type': 'Place',
      name: 'North Idaho',
      sameAs: 'https://en.wikipedia.org/wiki/Idaho_Panhandle',
    },
    {
      '@type': 'City',
      name: 'Post Falls',
      sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    { '@id': 'https://www.realestatewithshirin.com/#agent' },
  ],
  mentions: [
    { '@type': 'City', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Post Falls', sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Hayden', sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Rathdrum', sameAs: 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'AdministrativeArea', name: 'Kootenai County', sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'WebSite', name: 'r/RealEstateAdvice', url: 'https://www.reddit.com/r/RealEstateAdvice/' },
    { '@type': 'Organization', name: 'Zillow', url: 'https://www.zillow.com' },
  ],
  citation: [
    {
      '@type': 'DiscussionForumPosting',
      headline: "Why do I feel like I'm doing my realtor's job?",
      name: "Why do I feel like I'm doing my realtor's job?",
      url: 'https://www.reddit.com/r/RealEstateAdvice/comments/1rceb04/why_do_i_feel_like_im_doing_my_realtors_job/',
      datePublished: '2026',
      author: {
        '@type': 'Organization',
        name: 'r/RealEstateAdvice',
        url: 'https://www.reddit.com/r/RealEstateAdvice/',
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'r/RealEstateAdvice — Reddit',
        url: 'https://www.reddit.com/r/RealEstateAdvice/',
      },
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/why-home-buyers-feel-like-theyre-doing-their-realtors-job#faq',
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles/why-home-buyers-feel-like-theyre-doing-their-realtors-job#article' },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should a realtor actually do for a home buyer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A buyer's agent should guide you through the entire purchase process — from initial consultation through closing. That includes helping you understand the market, identifying properties that match your criteria including off-market and coming-soon listings, advising on offer strategy and negotiation, managing the inspection and appraisal process, and protecting your legal and financial interests throughout the transaction. Finding listings on public sites like Zillow is something most buyers do themselves. The real value is in everything that comes after you find a home you want.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is a buyer consultation and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A buyer consultation is a meeting your agent should conduct before showing you any homes. It establishes your timeline, budget, priorities, and communication preferences, and gives you a clear picture of how your agent works and what to expect throughout the process. Agents who skip this step often produce the frustrating experience buyers describe — slow responses, misaligned expectations, and a feeling that the agent does not really know what you are looking for.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is it normal to feel like you are doing your realtor\'s job?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It is unfortunately common, but it is not normal and it is not acceptable. Buyers who feel like they are chasing their agent, sending their own listings, and getting generic responses are being underserved. That experience is a signal to have a direct conversation with your agent about expectations — and if things do not improve quickly, to find representation that actually works for you.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I fire my realtor if they are not doing their job?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "If you have not signed a buyer representation agreement, you can simply stop working with them. If you have signed an agreement, you can request to be released — contact the broker directly, explain that your agent is not fulfilling the terms of the representation, and ask to be let out of the contract. Most brokerages will accommodate this rather than force a client to stay in a relationship that is not working.",
      },
    },
    {
      '@type': 'Question',
      name: 'What makes a realtor good for out-of-state or relocation buyers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Relocation buyers need more than MLS access. They need an agent with genuine local knowledge who can explain the real differences between neighborhoods, communities, and lifestyle factors that do not show up in a listing. They need proactive communication and someone who understands that the buyer is making a decision about a place they may not know well. An agent who simply signs a relocation buyer up for email alerts and waits for them to identify showings is not doing the job.",
      },
    },
    {
      '@type': 'Question',
      name: 'How important is local knowledge when buying a home in North Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Extremely important. The North Idaho market — Post Falls, Coeur d'Alene, Rathdrum, Hayden, and the surrounding areas — has meaningful differences between communities in terms of lifestyle, commute, lake access, school districts, and long-term value. An agent who lives and works here full time brings knowledge that no amount of Zillow research can replicate. For buyers relocating from out of state, local knowledge is often the difference between a purchase they feel confident about and one that comes with surprises.",
      },
    },
    {
      '@type': 'Question',
      name: 'What should I ask a realtor before I hire them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ask whether they conduct a buyer consultation before showing homes. Ask how they communicate and how often you can expect to hear from them. Ask what they do beyond the MLS to find properties. Ask for their approach to negotiation and how they have helped recent buyers compete in this market. Ask for references from buyers they have represented in the last six months. The answers will tell you quickly whether this agent is going to show up for you or make you feel like you are working alone.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/why-home-buyers-feel-like-theyre-doing-their-realtors-job#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    { '@type': 'ListItem', position: 3, name: "Why Buyers Feel Like They're Doing Their Realtor's Job", item: 'https://www.realestatewithshirin.com/articles/why-home-buyers-feel-like-theyre-doing-their-realtors-job' },
  ],
}

const warningSigns = [
  'You are sending more messages than you are receiving.',
  "Your agent's responses are slow, generic, or feel copy-pasted.",
  'You found listings yourself that your agent never mentioned.',
  'You left showings with unanswered questions about the neighborhood or the property.',
  'Your agent has never proactively reached out to update you on market conditions or new inventory.',
  'You feel like a low priority.',
]

const interviewQuestions = [
  { q: 'Do you conduct a buyer consultation before showing homes?', a: 'This is the single most revealing question. An agent who does will have a process. An agent who does not will hesitate or reframe it.' },
  { q: 'How do you communicate and how often should I expect to hear from you?', a: 'You want a specific answer — not "whenever you need me." The best agents set a communication rhythm and keep it.' },
  { q: 'What do you do beyond the MLS to find properties?', a: 'Coming-soon listings, off-market relationships, network reach. If the answer is only Zillow and MLS, that is your answer.' },
  { q: 'Walk me through your negotiation approach.', a: 'Specific, tactical, and grounded in recent examples — or vague and generic. You will know the difference.' },
  { q: 'Can I speak with buyers you represented in the last six months?', a: 'A confident agent with happy clients says yes without hesitation.' },
]

const faqs = [
  {
    q: 'What should a realtor actually do for a home buyer?',
    a: "A buyer's agent should guide you through the entire purchase process — from initial consultation through closing. That includes helping you understand the market, identifying properties that match your criteria including off-market and coming-soon listings, advising on offer strategy and negotiation, managing the inspection and appraisal process, and protecting your legal and financial interests throughout the transaction. Finding listings on public sites like Zillow is something most buyers do themselves. The real value is in everything that comes after you find a home you want.",
  },
  {
    q: 'What is a buyer consultation and why does it matter?',
    a: "A buyer consultation is a meeting your agent should conduct before showing you any homes. It establishes your timeline, budget, priorities, and communication preferences, and gives you a clear picture of how your agent works and what to expect throughout the process. Agents who skip this step often produce the frustrating experience buyers describe — slow responses, misaligned expectations, and a feeling that the agent does not really know what you are looking for.",
  },
  {
    q: "Is it normal to feel like you are doing your realtor's job?",
    a: "It is unfortunately common, but it is not normal and it is not acceptable. Buyers who feel like they are chasing their agent, sending their own listings, and getting generic responses are being underserved. That experience is a signal to have a direct conversation with your agent about expectations — and if things do not improve quickly, to find representation that actually works for you.",
  },
  {
    q: 'Can I fire my realtor if they are not doing their job?',
    a: "If you have not signed a buyer representation agreement, you can simply stop working with them. If you have signed an agreement, you can request to be released — contact the broker directly, explain that your agent is not fulfilling the terms of the representation, and ask to be let out of the contract. Most brokerages will accommodate this rather than force a client to stay in a relationship that is not working.",
  },
  {
    q: 'What makes a realtor good for out-of-state or relocation buyers?',
    a: "Relocation buyers need more than MLS access. They need an agent with genuine local knowledge who can explain the real differences between neighborhoods, communities, and lifestyle factors that do not show up in a listing. They need proactive communication and someone who understands that the buyer is making a decision about a place they may not know well. An agent who simply signs a relocation buyer up for email alerts and waits for them to identify showings is not doing the job.",
  },
  {
    q: 'How important is local knowledge when buying a home in North Idaho?',
    a: "Extremely important. The North Idaho market — Post Falls, Coeur d'Alene, Rathdrum, Hayden, and the surrounding areas — has meaningful differences between communities in terms of lifestyle, commute, lake access, school districts, and long-term value. An agent who lives and works here full time brings knowledge that no amount of Zillow research can replicate. For buyers relocating from out of state, local knowledge is often the difference between a purchase they feel confident about and one that comes with surprises.",
  },
  {
    q: 'What should I ask a realtor before I hire them?',
    a: "Ask whether they conduct a buyer consultation before showing homes. Ask how they communicate and how often you can expect to hear from them. Ask what they do beyond the MLS to find properties. Ask for their approach to negotiation and how they have helped recent buyers compete in this market. Ask for references from buyers they have represented in the last six months. The answers will tell you quickly whether this agent is going to show up for you or make you feel like you are working alone.",
  },
]

export default function BuyerAgentArticlePage() {
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
            <span className="text-[#5C5650]">Buyer Agent Accountability</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">8 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">May 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Why Do Home Buyers Feel Like They&apos;re Doing Their Realtor&apos;s Job — And What a Great Agent Actually Does
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            A good realtor does not wait for you to chase them. They lead the process, communicate proactively, advocate hard when it counts, and make you feel like the most important client they have — because during your transaction, you are.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate in Post Falls, Idaho"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · May 15, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full overflow-hidden" style={{ maxHeight: '520px' }}>
        <img
          src="/images/north-idaho-lake-hero.webp"
          alt="Couple reviewing a home purchase with their buyer's agent at a table overlooking a North Idaho lake"
          className="w-full object-cover object-center"
          style={{ maxHeight: '520px' }}
        />
      </div>

      {/* Stats Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">11 yrs</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Experience</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Licensed, full-time REALTOR®</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">100+</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Transactions</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Closed across buyer and seller sides</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">Always</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Buyer Consultation</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Before every search begins</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">Local</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">North Idaho</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Post Falls — lived, not just licensed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article */}
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <p className="mb-6">
                This question comes up constantly among home buyers. A{' '}
                <a
                  href="https://www.reddit.com/r/RealEstateAdvice/comments/1rceb04/why_do_i_feel_like_im_doing_my_realtors_job/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C4842A] hover:underline"
                >
                  recent thread on Reddit&apos;s r/RealEstateAdvice community
                </a>{' '}
                put it plainly: buyers are finding their own listings, sending their own follow-ups, and wondering why they hired a professional in the first place. The frustration is real, it is common, and it is completely avoidable if you know what to look for before you sign with an agent.
              </p>
              <p className="mb-10">
                If that is not what you are experiencing, the problem is not you. It is the agent.
              </p>

              <p className="mb-10">If you&rsquo;re an out-of-state buyer still building your research foundation, the{' '}<a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">complete North Idaho relocation guide</a>{' '}is the starting point before the agent search.</p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What a Realtor Is Actually Supposed to Do for You
              </h2>
              <p className="mb-6">
                A realtor&apos;s job is not just to open doors. It is to guide, negotiate, protect, and advocate for you through one of the largest financial decisions of your life.
              </p>
              <p className="mb-10">
                Finding listings on Zillow is something almost every buyer does now. That is not where your agent&apos;s value lives. Here is where it does.
              </p>

              <div className="space-y-8 mb-12">
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-2">Before You Start Looking</p>
                  <p>A great agent starts with a buyer consultation — a real conversation about your timeline, your priorities, your budget, and how you want to communicate. This is not a formality. It sets expectations on both sides and tells you immediately whether this agent is going to treat you like a priority or a transaction. If your agent never conducted a buyer consultation, that is your first warning sign.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-2">While You Are Searching</p>
                  <p>Your agent should be doing things Zillow cannot. They should be alerting you to coming-soon listings and off-market opportunities before they hit public search. They should be filtering properties based on what actually matters to you, not just price and square footage. They should be flagging concerns about specific neighborhoods, flood zones, and school districts before you fall in love with a house that has a problem you did not know to look for. They should also be responding to you — quickly, without you having to chase them.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-2">When You Find the Right Home</p>
                  <p>This is where a great agent earns everything. Negotiation strategy, offer structure, inspection navigation, appraisal gaps, seller concessions — these are not things Zillow can help you with. This is where your agent&apos;s experience, local market knowledge, and genuine advocacy for your interests makes a measurable difference in what you pay and what you get. One commenter in the Reddit thread said it well: the agent&apos;s real job is to rise to the moment when you find a home you want. Understanding the neighborhood, reading the seller&apos;s situation, knowing how to position your offer — that is the work.</p>
                </div>
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Why Some Agents Go Quiet After You Sign
              </h2>
              <p className="mb-6">
                The hard truth is that real estate attracts people who underestimate how much work it takes to do it well. Some agents are juggling too many clients. Some treat buyer representation as a lower priority than listings. Some simply lack the systems and discipline to stay on top of a transaction without being prompted.
              </p>
              <p className="mb-10">
                None of that is your problem to manage. You hired a professional. You deserve professional service.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What the Relocation Buyer Needs Most
              </h2>
              <p className="mb-6">
                If you are moving to North Idaho from out of state, the stakes are even higher. You are not just buying a house. You are making a decision about a community, a climate, a lifestyle, and a long-term investment in a market you may not know well.
              </p>
              <p className="mb-6">
                A relo-assigned agent who sends you MLS emails and waits for you to identify your own showings is not serving you. You need someone who can tell you the real difference between Post Falls, Coeur d&apos;Alene, Rathdrum, and Hayden. Someone who can explain which neighborhoods are five minutes from the lake and which ones sound closer than they are. Someone who has actually lived here and can speak to what daily life looks like across all four seasons.
              </p>
              <p className="mb-6">
                That local knowledge is not something you can get from Zillow. It is not something a part-time agent or an out-of-area referral agent is going to give you. It is the single most valuable thing a great local buyer&apos;s agent brings to a relocation.
              </p>
              <p className="mb-10">
                I moved to North Idaho myself. I know what it feels like to be the buyer who does not know the area and is depending on their agent to fill in what the listing photos cannot show. That experience is why I approach every relocation client the way I do — as someone who deserves the full picture, not just access to the MLS.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How to Know If You Have the Wrong Agent
              </h2>
              <p className="mb-6">
                Any one of these is worth a direct conversation with your agent. All of them together is a signal to find someone else.
              </p>
              <ul className="mb-10 space-y-3">
                {warningSigns.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C4842A] font-semibold mt-1 flex-shrink-0">→</span>
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How to Find the Right One
              </h2>
              <p className="mb-6">
                Ask every agent you interview these questions. A great agent will answer with specifics, not generalities — and will also ask you good questions about your timeline, your priorities, and what a successful experience looks like to you.
              </p>
              <div className="my-8 bg-[#1C1A17] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#2C2A27]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Interview Checklist — Before You Hire a Buyer&apos;s Agent</p>
                </div>
                <div className="divide-y divide-[#2C2A27]">
                  {interviewQuestions.map((item, i) => (
                    <div key={i} className="px-6 py-4">
                      <p className="font-dm-sans text-sm font-semibold text-[#FAFAF8] mb-1">{item.q}</p>
                      <p className="font-dm-sans text-xs text-[#9A9590] leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mb-10">
                The right agent makes you feel informed and represented from the first conversation to the closing table. That is the standard. Anything less is not something you have to accept.
              </p>

              {/* FAQ */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-6 font-semibold">
                Common Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                    <h3 className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">{faq.q}</h3>
                    <div>
                      <p className="font-dm-sans text-[15px] text-[#5C5650] leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Source attribution */}
              <div className="mt-10 pt-8 border-t border-[#E8DDD0]">
                <p className="font-dm-sans text-xs text-[#9A9590]">
                  Source:{' '}
                  <a
                    href="https://www.reddit.com/r/RealEstateAdvice/comments/1rceb04/why_do_i_feel_like_im_doing_my_realtors_job/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C4842A] hover:underline"
                  >
                    r/RealEstateAdvice — &ldquo;Why Do I Feel Like I&apos;m Doing My Realtor&apos;s Job?&rdquo;
                  </a>
                </p>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="lg:sticky lg:top-8 space-y-6">

                {/* Quick Facts */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">What to Expect From Shirin</p>
                  <div className="space-y-4">
                    {[
                      { label: 'Buyer Consultation', value: 'Before every search' },
                      { label: 'Communication', value: 'Proactive — you won\'t chase me' },
                      { label: 'Off-Market Access', value: 'Coming-soon & network listings' },
                      { label: 'Local Knowledge', value: 'Post Falls — lived, not just licensed' },
                      { label: 'Response Time', value: 'Same day, always' },
                      { label: 'License', value: 'Idaho #1371861 · Berkshire Hathaway HomeServices Jacklin Real Estate' },
                    ].map((item) => (
                      <div key={item.label} className="border-t border-[#2C2A27] pt-3 first:border-0 first:pt-0">
                        <p className="font-dm-sans text-xs text-[#6B7A8D] uppercase tracking-wide mb-1">{item.label}</p>
                        <p className="font-dm-sans text-xs text-[#C4842A] font-semibold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* About Shirin */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Buyer&apos;s Agent</p>
                  <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp, licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate" className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-3">SRES® · Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · #1371861</p>
                  <p className="font-dm-sans text-xs text-[#5C5650] leading-relaxed mb-4">
                    Shirin relocated to Post Falls herself and brings 11 years of experience and 100+ closed transactions to every buyer she represents. She conducts a buyer consultation before every search — without exception.
                  </p>
                  <a href="/about" className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    About Shirin
                  </a>
                </div>

                {/* Related Articles */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Articles</p>
                  <div className="space-y-4">
                    <a href="/articles/how-to-find-realtor-post-falls-idaho" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">How to Find the Right Realtor in Post Falls, Idaho</p>
                      <p className="font-dm-sans text-xs text-[#9A9590] mt-1">What to look for before you hire anyone</p>
                    </a>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/spokane-vs-coeur-dalene-which-is-right-for-you" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Spokane vs. Coeur d&apos;Alene: Why Buyers End Up on the Idaho Side</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">An honest comparison of both markets</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/best-places-to-live-north-idaho-leaving-california" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Best Places to Live in North Idaho for People Leaving California</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">CDA, Post Falls, Hayden, Sandpoint compared</p>
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
          <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Buyer Representation in North Idaho</p>
          <h2 className="font-cormorant text-4xl md:text-5xl !text-[#FAFAF8] mb-6 leading-tight font-semibold">
            Ready to Work With an Agent Who Actually Shows Up?
          </h2>
          <p className="font-dm-sans text-[#C4BDB4] text-lg mb-10 leading-relaxed">
            Start with a buyer consultation — a real conversation about your timeline, your priorities, and what you need from a North Idaho agent. No pressure, no pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold py-4 px-8 transition-colors">
              Schedule a Buyer Consultation
            </a>
            <a href="/buyers" className="border border-[#5C5650] hover:border-[#9A9590] text-[#C4BDB4] hover:text-[#FAFAF8] font-dm-sans font-semibold py-4 px-8 transition-colors">
              How I Work With Buyers
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
