interface IdxSearchCtaProps {
  placeName: string;
  searchUrl: string;
}

// "See homes for sale" block that hands off to Shirin's kvCORE IDX search,
// filtered to the area the page is about. Placed directly above each area
// page's Bottom CTA so the reading flow ends guide -> live listings -> call.
export default function IdxSearchCta({ placeName, searchUrl }: IdxSearchCtaProps) {
  return (
    <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <p className="eyebrow mb-6" style={{ color: '#96601A' }}>Live MLS Search</p>
        <h2
          className="mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 500,
            fontSize: 'clamp(32px, 5vw, 48px)',
            lineHeight: 1.15,
            color: '#1C1A17',
          }}
        >
          See Homes for Sale in {placeName}
        </h2>
        <p className="mb-10" style={{ color: '#4A453F', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
          Browse current listings in {placeName} on Shirin&apos;s MLS property search, provided
          through Berkshire Hathaway HomeServices Jacklin Real Estate. You can save a search
          there and get an alert when a matching home comes on the market.
        </p>
        <a
          href={searchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[#1C1A17] text-xs uppercase font-semibold tracking-wider rounded-sm"
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            backgroundColor: '#C4842A',
            padding: '14px 32px',
            letterSpacing: '0.08em',
          }}
        >
          Search {placeName} Homes
        </a>
        <p className="mt-5" style={{ color: '#4A453F', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '14px' }}>
          Opens Shirin&apos;s property search on jacklinrealestate.com.
        </p>
      </div>
    </section>
  );
}
