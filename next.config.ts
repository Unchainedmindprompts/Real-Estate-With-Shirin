import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Articles retired November 13, 2026 (content audit cleanup: 8 removed, 3 folded into parents)
      {
        source: '/articles/north-idaho-geographic-jackpot-coeur-dalene-post-falls-corridor',
        destination: '/articles/best-places-to-live-in-north-idaho-2026-guide',
        permanent: true,
      },
      {
        source: '/articles/why-honored-joining-berkshire-hathaway-jacklin-real-estate',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/articles/is-it-a-good-time-to-buy-home-northern-idaho',
        destination: '/articles/north-idaho-housing-market-update',
        permanent: true,
      },
      {
        source: '/articles/how-to-find-realtor-post-falls-idaho',
        destination: '/articles/best-realtor-north-idaho-how-to-choose',
        permanent: true,
      },
      {
        source: '/articles/why-home-buyers-feel-like-theyre-doing-their-realtors-job',
        destination: '/articles/best-realtor-north-idaho-how-to-choose',
        permanent: true,
      },
      {
        source: '/articles/trutina-at-north-place-senior-community-post-falls-buyer-guide',
        destination: '/articles/how-much-do-homes-cost-post-falls-idaho',
        permanent: true,
      },
      {
        source: '/articles/sres-designation-real-estate-after-55-north-idaho',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/articles/buying-north-idaho-home-before-selling-current-bridge-financing-options',
        destination: '/articles/selling-a-home-north-idaho-what-your-home-is-worth',
        permanent: true,
      },
      // Folded into parent articles November 13, 2026
      {
        source: '/articles/earthquake-insurance-idaho-homeowners-policy',
        destination: '/articles/homeowners-insurance-idaho-cost-wildfire-flood-coverage',
        permanent: true,
      },
      {
        source: '/articles/idaho-land-due-diligence-water-mineral-rights-flood-zones',
        destination: '/articles/buying-land-north-idaho-cost-per-acre-perc-power-access',
        permanent: true,
      },
      {
        source: '/articles/lakefront-due-diligence-north-idaho-shoreline-rules',
        destination: '/articles/buying-lakefront-property-north-idaho-lake-coeur-dalene-hayden-lake-pend-oreille',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
