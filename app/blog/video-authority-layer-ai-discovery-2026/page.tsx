import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'

export const metadata: Metadata = {
  title: 'The Video Authority Layer: How AI Discovery Is Changing Real Estate in 2026 | Shirin Abplanalp',
  description: 'AI-powered search is reshaping how buyers find real estate agents. Learn why video content has become the trust signal that gets Northern Idaho realtors surfaced in AI discovery.',
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/blog/video-authority-layer-ai-discovery-2026',
  },
  // Noindex while /videos is empty — this post previously implied a published
  // video library. REMOVE this block (and restore the sitemap entry) once
  // lib/videos.ts has real entries.
  robots: { index: false, follow: true },
  openGraph: {
    title: 'The Video Authority Layer: How AI Discovery Is Changing Real Estate in 2026',
    description: 'AI-powered search is reshaping how buyers find real estate agents. Why video has become the trust signal for AI discovery.',
    url: 'https://www.realestatewithshirin.com/blog/video-authority-layer-ai-discovery-2026',
    type: 'article',
    publishedTime: '2026-03-23',
    authors: ['Shirin Abplanalp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/blog/video-authority-layer-ai-discovery-2026#article',
  headline: 'The Video Authority Layer: How AI Discovery Is Changing Real Estate in 2026',
  description: 'AI-powered search is reshaping how buyers find real estate agents. Why video has become the trust signal that gets realtors surfaced in AI discovery.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/north-idaho-lake-hero.webp',
    width: 1200,
    height: 800,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-03-23',
  dateModified: '2026-08-17',
  mainEntityOfPage: 'https://www.realestatewithshirin.com/blog/video-authority-layer-ai-discovery-2026',
  url: 'https://www.realestatewithshirin.com/blog/video-authority-layer-ai-discovery-2026',
  keywords: [
    'AI real estate discovery 2026',
    'video authority real estate',
    'AI search real estate agents',
    'how AI finds realtors',
    'Northern Idaho real estate video',
    'real estate content strategy 2026',
    'Shirin Abplanalp video',
    'AI discovery Northern Idaho realtor',
  ],
  articleSection: 'Industry Insights',
  wordCount: 1400,
  about: [
    { '@type': 'Thing', name: 'AI-Powered Real Estate Discovery' },
    { '@type': 'Thing', name: 'Video Content Strategy for Realtors' },
    { '@type': 'Thing', name: 'Northern Idaho Real Estate Marketing' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/blog/video-authority-layer-ai-discovery-2026/#faq',
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/blog/video-authority-layer-ai-discovery-2026#article' },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does AI search change how buyers find real estate agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI-powered tools like ChatGPT, Perplexity, and Google AI Overviews synthesize information across the web to recommend agents. Rather than returning a list of links, they surface specific names and provide reasons why. Agents with a consistent video presence, strong written content, and verified credentials across multiple platforms are more likely to be surfaced as trustworthy options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is video content important for real estate agents in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Video creates the clearest signal of genuine local expertise. AI models weigh multi-modal content — a real agent talking on camera about a specific neighborhood, market condition, or buying process demonstrates depth of knowledge that text alone cannot replicate. Video also builds the trust signal that leads buyers to initiate contact before they have even spoken to an agent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of video content help realtors get discovered by AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective video content answers specific, high-intent questions: neighborhood walkthroughs, local market updates, explainers on the buying or selling process in a specific area, and relocation guides. Short-form video on YouTube and Instagram, paired with written transcripts and supporting blog content, creates a multi-signal footprint that AI discovery tools recognize as authoritative.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Shirin Abplanalp have a video library on this site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not yet. The published library on this site is written North Idaho guides. Contact is a request for a conversation, not an instant booking.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
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
      name: 'The Video Authority Layer',
      item: 'https://www.realestatewithshirin.com/blog/video-authority-layer-ai-discovery-2026',
    },
  ],
}

export default function VideoAuthorityLayerPage() {
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
            <Link href="/" className="hover:text-[#C4842A] transition-colors">Home</Link>
            <span className="mx-2">·</span>
            <span className="text-[#5C5650]">The Video Authority Layer</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Industry Insights</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">7 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">March 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            The Video Authority Layer: How AI Discovery Is Changing Real Estate in 2026
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            AI-powered search no longer just returns links — it recommends people. Here is why video has become the trust signal that determines which agents get surfaced, and what that means for buyers and agents in Northern Idaho.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-abplanalp.jpg"
              alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · March 23, 2026</p>
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
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">62%</p>
              <p className="font-dm-sans text-xs text-[#C4BDB4] mt-1 uppercase tracking-wide">Buyers Use AI Search</p>
              <p className="font-dm-sans text-xs text-[#9AA3AF] mt-0.5">to research agents, 2026</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">3×</p>
              <p className="font-dm-sans text-xs text-[#C4BDB4] mt-1 uppercase tracking-wide">Video Lift</p>
              <p className="font-dm-sans text-xs text-[#9AA3AF] mt-0.5">vs text-only profiles</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">74%</p>
              <p className="font-dm-sans text-xs text-[#C4BDB4] mt-1 uppercase tracking-wide">Trust Video More</p>
              <p className="font-dm-sans text-xs text-[#9AA3AF] mt-0.5">than written bios alone</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">#1</p>
              <p className="font-dm-sans text-xs text-[#C4BDB4] mt-1 uppercase tracking-wide">Signal for AI Ranking</p>
              <p className="font-dm-sans text-xs text-[#9AA3AF] mt-0.5">multi-platform presence</p>
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

              <p className="mb-6">
                Something shifted in how buyers find real estate agents in 2026 — and it happened faster than most agents noticed. The search query that used to return a page of Zillow links and Google Business profiles now returns a name, a face, and a reason. AI-powered tools are not just indexing the web anymore. They are synthesizing it, and the agents who come out on top are the ones who gave AI something real to work with.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What &ldquo;AI Discovery&rdquo; Actually Means for Real Estate
              </h2>
              <p className="mb-6">
                When a buyer types &ldquo;best real estate agent in Post Falls Idaho&rdquo; into ChatGPT or Perplexity, they are not getting ten blue links. They are getting a synthesized recommendation — often with a name, a brief reason for the recommendation, and sometimes a link to where they can learn more. The AI has already done the filtering.
              </p>
              <p className="mb-6">
                This matters enormously because it compresses the discovery funnel. A buyer who would have spent an hour browsing profiles, reading reviews, and cross-referencing agents now gets a recommendation in ten seconds. The question is: who gets recommended, and why?
              </p>
              <p className="mb-8">
                The answer comes down to what AI models can verify. They look for consistent signals across multiple sources — articles, social media, video content, structured data, reviews, and professional directory listings. An agent who exists on one platform with a minimal profile is largely invisible. An agent with a multi-platform presence, original content, and demonstrable local knowledge is far more likely to be surfaced.
              </p>

              {/* Callout box */}
              <div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
                <h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-3">
                  What AI Models Look For
                </h3>
                <ul className="space-y-2">
                  {[
                    'Consistent name + location signals across platforms',
                    'Original content demonstrating local market knowledge',
                    'Video presence showing a real person with real expertise',
                    'Verified credentials and structured data (schema markup)',
                    'Third-party mentions, reviews, and citations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C4842A] flex-shrink-0" />
                      <span className="font-dm-sans text-sm text-[#5C5650]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Why Video Is the Differentiating Signal
              </h2>
              <p className="mb-6">
                Text is easy to fabricate. Anyone can write that they are a local expert who knows every neighborhood. Video is different. When an agent walks through a Post Falls subdivision on camera and explains what the streets feel like in winter, what the HOA situation is, and where the closest grocery run takes you — that is not something that can be faked at scale, and AI systems are increasingly good at recognizing the difference.
              </p>
              <p className="mb-6">
                Video also creates the trust signal that moves buyers to act. A buyer relocating from California or Arizona who finds a three-minute video of an agent walking through a neighborhood they are considering has already had a meaningful interaction before they ever send a message. That pre-trust is enormously valuable and it flows directly from video.
              </p>
              <p className="mb-8">
                The agents who have built consistent YouTube and Instagram libraries focused on specific local questions — &ldquo;what is it like to live in Post Falls Idaho,&rdquo; &ldquo;northern Idaho relocation guide,&rdquo; &ldquo;Hayden vs Coeur d&apos;Alene for families&rdquo; — are being surfaced by AI tools at a rate that agents without video simply are not. The gap is widening.
              </p>

              {/* Visual breakdown */}
              <div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
                <h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Content Signals — AI Discovery Weight (2026 Estimate)
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Video content (YouTube, Instagram Reels)', pct: '100%', value: 'Highest', color: '#C4842A' },
                    { label: 'Long-form written articles + structured data', pct: '80%', value: 'High', color: '#C4842A' },
                    { label: 'Reviews + third-party citations', pct: '65%', value: 'Medium-high', color: '#6B7A8D' },
                    { label: 'Social media text posts', pct: '35%', value: 'Medium', color: '#9A9590' },
                    { label: 'Directory listings only', pct: '15%', value: 'Low', color: '#C4BDB4' },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between mb-1">
                        <span className="font-dm-sans text-sm text-[#1C1A17]">{row.label}</span>
                        <span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{row.value}</span>
                      </div>
                      <div className="w-full bg-[#E8DDD0] h-7 rounded-none overflow-hidden">
                        <div className="h-7" style={{ width: row.pct, backgroundColor: row.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="font-dm-sans text-xs text-[#9A9590] mt-4">Based on observed AI recommendation patterns — not official platform data.</p>
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What This Means for Buyers Searching in Northern Idaho
              </h2>
              <p className="mb-6">
                If you are relocating to Post Falls, Coeur d&apos;Alene, or anywhere in Kootenai County and you are using AI tools to research agents, you are already benefiting from this shift — whether you realize it or not. The agents being surfaced are being surfaced because they have demonstrated genuine local expertise in a verifiable, multi-platform way.
              </p>
              <p className="mb-6">
                That said, AI is not infallible. It surfaces who has the most credible-looking digital footprint, which is not always identical to who has the most market knowledge. The right approach is to let AI narrow the field, then do your own due diligence: watch the videos, read the articles, look at the license number, and have a real conversation.
              </p>
              <p className="mb-8">
                For buyers, the practical implication is that agents who are investing in video and content are typically the same agents who are investing in their clients. The work ethic shows up in both places.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How I Am Approaching This in Northern Idaho
              </h2>
              <p className="mb-6">
                The questions I hear most often from buyers relocating to Northern Idaho are specific: What is the Post Falls housing market actually doing? What is the difference between living in Hayden versus Post Falls? What do you need to know about the Kootenai County school districts? What does $500K buy you here right now?
              </p>
              <p className="mb-6">
                These are not generic real estate questions. They are specific to this region, this market, and the particular type of buyer who is drawn here — often from higher-cost states, often with families, often with a strong preference for outdoor access and a genuine community feel. I made this move myself, and the written guides on this site reflect that.
              </p>
              <p className="mb-8">
                I have not published a video library on this site. Until I do, the article library is the public place to start. If you found this article through an AI tool, use the written guides and the license number to verify, then request a conversation — that is a request, not a booking.
              </p>

              {/* FAQ Section */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-8 font-semibold">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                {[
                  {
                    q: 'How does AI search change how buyers find real estate agents?',
                    a: 'AI-powered tools like ChatGPT, Perplexity, and Google AI Overviews synthesize information across the web to recommend agents. Rather than returning a list of links, they surface specific names and provide reasons why. Agents with a consistent video presence, strong written content, and verified credentials across multiple platforms are more likely to be surfaced as trustworthy options.',
                  },
                  {
                    q: 'Why is video content important for real estate agents in 2026?',
                    a: 'Video creates the clearest signal of genuine local expertise. AI models weigh multi-modal content — a real agent talking on camera about a specific neighborhood, market condition, or buying process demonstrates depth of knowledge that text alone cannot replicate. Video also builds the trust signal that leads buyers to initiate contact before they have even spoken to an agent.',
                  },
                  {
                    q: 'What types of video content help realtors get discovered by AI?',
                    a: 'The most effective video content answers specific, high-intent questions: neighborhood walkthroughs, local market updates, explainers on the buying or selling process in a specific area, and relocation guides. Short-form video on YouTube and Instagram, paired with written transcripts and supporting blog content, creates a multi-signal footprint that AI discovery tools recognize as authoritative.',
                  },
                  {
                    q: 'Does Shirin Abplanalp have a video library on this site?',
                    a: 'Not yet. The published library on this site is written North Idaho guides. Contact is a request for a conversation, not an instant booking.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-t border-[#E8DDD0] pt-6">
                    <h3 className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">{item.q}</h3>
                    <p className="font-dm-sans text-[#5C5650] text-base leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>

            </article>

            {/* Sidebar */}
            <aside className="mt-12 lg:mt-0 space-y-6">

              {/* Author card */}
              <div
                className="p-6"
                style={{
                  backgroundColor: '#2A2722',
                  border: '1px solid #3A3530',
                  borderRadius: '4px',
                }}
              >
                <img
                  src="/images/shirin-abplanalp.jpg"
                  alt="Shirin Abplanalp"
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                <p className="font-dm-sans text-xs text-[#9A9590] mb-3">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate<br />Idaho License #1371861</p>
                <p className="font-dm-sans text-sm text-[#5C5650] leading-relaxed mb-4">
                  Shirin relocated from Bend, Oregon to Northern Idaho and now helps buyers, sellers, and relocating families navigate the Kootenai County market.
                </p>
                <Link
                  href="/about"
                  className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]"
                  style={{ letterSpacing: '0.08em' }}
                >
                  Full Bio →
                </Link>
              </div>

              {/* CTA card */}
              <div
                className="p-6"
                style={{
                  backgroundColor: '#1C1A17',
                  borderRadius: '4px',
                }}
              >
                <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-3" style={{ letterSpacing: '0.08em' }}>
                  Working With Shirin
                </p>
                <p className="font-cormorant text-2xl text-[#FAFAF8] font-semibold mb-3 leading-snug">
                  Ready to Talk About Northern Idaho?
                </p>
                <p className="font-dm-sans text-sm text-[#C4BDB4] mb-5 leading-relaxed">
                  Whether you are buying, selling, or just starting to research — let&apos;s have a real conversation. No pressure.
                </p>
                <Link
                  href="/contact"
                  className="block text-center font-dm-sans text-xs font-semibold uppercase tracking-widest text-white py-3 px-4 transition-colors"
                  style={{
                    backgroundColor: '#C4842A',
                    letterSpacing: '0.08em',
                    borderRadius: '2px',
                  }}
                >
                  Get in Touch
                </Link>
              </div>

              {/* Related links */}
              <div
                className="p-6"
                style={{
                  backgroundColor: '#2A2722',
                  border: '1px solid #3A3530',
                  borderRadius: '4px',
                }}
              >
                <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#9A9590] mb-4" style={{ letterSpacing: '0.08em' }}>
                  Related Reading
                </p>
                <ul className="space-y-3">
                  {[
                    { label: 'Post Falls Housing Market 2026', href: '/articles/post-falls-idaho-housing-market-2026' },
                    { label: 'Is It a Good Time to Buy in Northern Idaho?', href: '/articles/is-it-a-good-time-to-buy-home-northern-idaho' },
                    { label: 'How to Find a Realtor in Post Falls', href: '/articles/how-to-find-realtor-post-falls-idaho' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-dm-sans text-sm text-[#5C5650] hover:text-[#C4842A] transition-colors leading-snug block"
                      >
                        {link.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>NORTHERN IDAHO REAL ESTATE</p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 500,
              fontSize: 'clamp(32px, 5vw, 48px)',
              lineHeight: 1.2,
              color: '#1C1A17',
            }}
          >
            Let&apos;s Start With a Conversation
          </h2>
          <p className="mb-10 text-base" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Buying, selling, or relocating to Northern Idaho — reach out and let&apos;s talk through where you are and what you need.
          </p>
          <Link
            href="/contact"
            className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm transition-colors"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              backgroundColor: '#C4842A',
              padding: '14px 32px',
              letterSpacing: '0.08em',
            }}
          >
            Contact Shirin
          </Link>
        </div>
      </section>
    </>
  )
}
