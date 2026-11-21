import { heroMetadata, riverfrontCard } from '@/lib/hero-share'
import { KVCORE_BASE } from '@/lib/idx-search'
import FieldGuide from '@/components/home/FieldGuide'
import {
  BASE_URL,
  BUSINESS_ID,
  AGENT_ID,
  WEBSITE_ID,
  JACKLIN_ID,
  BHHS_BRAND_ID,
  PHONE,
  EMAIL,
  INSTAGRAM_URL,
  AGENT_IMAGE,
  BROKERAGE_PHONE,
  AGENT_NAME,
  BRAND_NAME,
  BROKERAGE_NAME,
  BROKERAGE_URL,
  BROKERAGE_ADDRESS,
  LICENSE_NUMBER,
  AGENT_AUTHOR_STUB,
  BRAND_PUBLISHER_STUB,
  PLACE,
  MARKET_AREA_SERVED,
} from '@/lib/schema-ids'

// Homepage page-scoped copy. Single source; both metadata AND the WebPage
// JSON-LD node reference these so title/description/image can't drift between
// what search sees and what the entity graph declares.
const HOMEPAGE_TITLE = 'Shirin Abplanalp | North Idaho REALTOR® | BHHS Jacklin'
const HOMEPAGE_DESCRIPTION =
  "Shirin Abplanalp is a licensed North Idaho REALTOR® with BHHS Jacklin Real Estate, helping buyers, sellers, and relocating families across North Idaho."
export const metadata = heroMetadata('', HOMEPAGE_TITLE, HOMEPAGE_DESCRIPTION, riverfrontCard)

const googleReviews = [
  {
    name: 'Justine Kingston',
    context: 'Home sale and rental purchase · Bend, Oregon',
    quote: "I've worked with Shirin twice in Bend, Oregon, once to list my home and once to buy a rental property, and she was fantastic both times. She is incredibly organized, friendly, and efficient, and she kept every step clear and on track.",
  },
  {
    name: 'Paul Weaver',
    context: 'Two home purchases',
    quote: 'We have had the pleasure of working with Shirin on two home purchases. Shirin’s professionalism, attention to detail, communication and follow-up are second to none. Shirin carefully guided us through every step of our recent transaction.',
  },
]

const testimonials = [
  {
    name: 'Koval Dan',
    location: 'Buyer — Mountain View, Bend OR · Zillow',
    source: 'Zillow',
    quote:
      "Shirin was able to help me locate the perfect house. As a first time buyer I really didn't know much about the whole process but Shirin was there to help with any concerns. She is very pro active in searching for a home for her clients. She seems to enjoy what she does. Well done, Shirin.",
    stars: 5,
  },
  {
    name: 'Verified Buyer',
    location: 'Bend, OR · Zillow',
    source: 'Zillow',
    quote:
      "Shirin went above and beyond for us and blew us away. Her responsiveness is lightning fast and she took the time to call several counties to look into state zoning and property laws — we had no idea a realtor even did that. What we appreciated most was how genuine Shirin was. It was so apparent she cared about what was best for us. We can't recommend Shirin enough.",
    stars: 5,
    excludeFromSchema: true,
  },
  {
    name: 'Jacque Martini Roberts',
    location: 'Facebook Recommendation',
    source: 'Facebook',
    quote:
      "Shirin is an amazing real estate broker. She always goes above and beyond and she definitely knows her stuff. On a scale from 1–10, Shirin is a 10!",
    stars: 5,
  },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': WEBSITE_ID,
            url: BASE_URL,
            name: BRAND_NAME,
            description: `${BRAND_NAME} — ${AGENT_NAME}, licensed REALTOR® at ${BROKERAGE_NAME}, serving Post Falls, Coeur d'Alene, Hayden, Rathdrum, Sandpoint, and North Idaho.`,
            publisher: BRAND_PUBLISHER_STUB,
            inLanguage: 'en-US',
          },
          {
            '@type': 'WebPage',
            '@id': `${BASE_URL}/#webpage`,
            url: BASE_URL,
            name: HOMEPAGE_TITLE,
            description: HOMEPAGE_DESCRIPTION,
            isPartOf: { '@id': WEBSITE_ID },
            about: [{ '@id': AGENT_ID }, { '@id': BUSINESS_ID }],
            mainEntity: { '@id': AGENT_ID },
            inLanguage: 'en-US',
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: BASE_URL + riverfrontCard.path,
              width: 1200,
              height: 630,
            },
          },
          {
            '@type': 'RealEstateAgent',
            '@id': BUSINESS_ID,
            name: BRAND_NAME,
            description: `${BRAND_NAME} is the customer-facing practice of licensed REALTOR® ${AGENT_NAME}, helping buyers, sellers, and relocating families in Post Falls, Coeur d'Alene, Hayden, Rathdrum, Sandpoint, and the surrounding North Idaho market.`,
            url: BASE_URL,
            telephone: PHONE,
            email: EMAIL,
            image: AGENT_IMAGE,
            address: BROKERAGE_ADDRESS,
            geo: { '@type': 'GeoCoordinates', latitude: 47.7028, longitude: -116.8093 },
            founder: AGENT_AUTHOR_STUB,
            memberOf: { '@id': JACKLIN_ID },
            areaServed: MARKET_AREA_SERVED,
            knowsAbout: ['Post Falls real estate', "Coeur d'Alene real estate", 'Northern Idaho relocation', 'Kootenai County homes', 'Buyer representation', 'Seller representation', 'Relocation', 'Idaho real estate market', 'Active family relocation to Northern Idaho'],
            slogan: 'Your Northern Idaho Real Estate Advisor',
            sameAs: [
              'https://maps.google.com/?cid=2147151028860799721',
              'https://www.yelp.com/biz/real-estate-with-shirin-coeur-d-alene',
              'https://www.bbb.org/us/id/post-falls/profile/real-estate-agent/real-estate-with-shirin-1296-1000195359',
              'https://www.facebook.com/ShirinRealty',
              INSTAGRAM_URL,
            ],
            review: testimonials.filter((t) => !t.excludeFromSchema).map((t) => ({
              '@type': 'Review',
              author: { '@type': 'Person', name: t.name },
              reviewRating: { '@type': 'Rating', ratingValue: t.stars, bestRating: 5 },
              reviewBody: t.quote,
              itemReviewed: { '@id': BUSINESS_ID },
              publisher: { '@type': 'Organization', name: t.source },
            })),
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: 5,
              reviewCount: testimonials.filter((t) => !t.excludeFromSchema).length,
              bestRating: 5,
            },
          },
          {
            '@type': 'Person',
            '@id': AGENT_ID,
            name: AGENT_NAME,
            jobTitle: 'Licensed REALTOR®',
            description: `${AGENT_NAME} is a licensed REALTOR® and SRES® at ${BROKERAGE_NAME}. 11 years in real estate, 100+ transactions closed, 5× Top Producer. She relocated from Bend, Oregon to Post Falls and helps buyers, sellers, and relocating families across North Idaho.`,
            telephone: PHONE,
            email: EMAIL,
            url: `${BASE_URL}/about`,
            image: AGENT_IMAGE,
            worksFor: { '@id': JACKLIN_ID },
            memberOf: [
              { '@type': 'Organization', name: 'National Association of REALTORS®', url: 'https://www.nar.realtor', sameAs: 'https://en.wikipedia.org/wiki/National_Association_of_Realtors' },
              { '@type': 'Organization', name: "Coeur d'Alene Association of REALTORS®", url: 'https://cdarealtors.com' },
            ],
            hasCredential: [
              { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Real Estate License', identifier: LICENSE_NUMBER, recognizedBy: { '@type': 'GovernmentOrganization', name: 'Idaho Real Estate Commission', url: 'https://irec.idaho.gov' } },
              { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional Designation', name: 'Seniors Real Estate Specialist®', abbreviation: 'SRES®', recognizedBy: { '@type': 'Organization', name: 'SRES® Council', url: 'https://sres.realtor', parentOrganization: { '@type': 'Organization', name: 'National Association of REALTORS®', url: 'https://www.nar.realtor', sameAs: 'https://en.wikipedia.org/wiki/National_Association_of_Realtors' } } },
              { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Award', name: '5× Top Producer', recognizedBy: { '@type': 'Organization', name: 'Bend Premier Real Estate' } },
            ],
            knowsAbout: ['Post Falls Idaho real estate', "Coeur d'Alene Idaho real estate", 'Northern Idaho relocation', 'Kootenai County homes for sale', 'Buyer representation', 'Seller representation', 'Relocation', 'North Idaho lifestyle', 'Out-of-state relocation real estate', 'Seniors Real Estate Specialist services', 'First-time home buyers Idaho', 'Kootenai County neighborhoods'],
            affiliation: { '@id': BUSINESS_ID },
            sameAs: [
              'https://www.jacklinrealestate.com/agents/2081255/Shirin+Abplanalp',
              `${KVCORE_BASE}/`,
              'https://www.zillow.com/profile/dreamlifeinidaho',
              'https://www.realtor.com/realestateagents/6852257644eab0a63cfd80af',
              'https://www.homes.com/real-estate-agents/shirin-abplanalp/j7j2jr7/',
              'https://www.realty.com/a/Shirin-Abplanalp-1777925821520',
              'https://www.linkedin.com/in/shirinrealty/',
              'https://members.cdarealtors.com/directory/Details/shirin-abplanalp-4150054',
            ],
          },
          {
            '@type': 'Organization',
            '@id': JACKLIN_ID,
            name: BROKERAGE_NAME,
            url: BROKERAGE_URL,
            telephone: BROKERAGE_PHONE,
            address: BROKERAGE_ADDRESS,
            logo: `${BASE_URL}/images/bhhs-jacklin-logo.png`,
            sameAs: [
              BROKERAGE_URL,
              'https://www.bhhsjacklin.com/',
              'https://www.facebook.com/bhhsjacklin/',
              'https://business.cdachamber.com/list/member/berkshire-hathaway-homeservices-jacklin-real-estate-9147',
              'https://member.postfallschamber.org/list/member/berkshire-hathaway-homeservices-jacklin-real-estate-3040',
            ],
            brand: { '@id': BHHS_BRAND_ID },
          },
          {
            '@type': 'Brand',
            '@id': BHHS_BRAND_ID,
            name: 'Berkshire Hathaway HomeServices',
            sameAs: [
              'https://www.linkedin.com/company/berkshire-hathaway-homeservices',
              'https://en.wikipedia.org/wiki/HomeServices_of_America',
              'https://www.wikidata.org/wiki/Q5887960',
            ],
          },
          PLACE.idaho,
          PLACE.northIdaho,
          {
            '@type': 'FAQPage',
            '@id': `${BASE_URL}/#faq`,
            isPartOf: { '@id': `${BASE_URL}/#webpage` },
            mainEntity: [
              { '@type': 'Question', name: 'Who is the best realtor in Post Falls Idaho?', acceptedAnswer: { '@type': 'Answer', text: `${AGENT_NAME} is a licensed REALTOR® at ${BROKERAGE_NAME} serving Post Falls, Coeur d'Alene, and Northern Idaho. With 11 years of experience, 100+ closed transactions, and firsthand relocation experience from Bend, Oregon to Post Falls, Shirin specializes in helping buyers, sellers, and relocating families navigate the North Idaho real estate market.` } },
              { '@type': 'Question', name: 'What areas does Shirin Abplanalp serve in Northern Idaho?', acceptedAnswer: { '@type': 'Answer', text: `${AGENT_NAME} serves buyers and sellers in Post Falls, Coeur d'Alene, Hayden, Rathdrum, and Sandpoint, as well as Kootenai County, Bonner County, and the broader North Idaho market.` } },
              { '@type': 'Question', name: 'Is Shirin Abplanalp a licensed realtor?', acceptedAnswer: { '@type': 'Answer', text: `Yes. ${AGENT_NAME} holds Idaho Real Estate License #${LICENSE_NUMBER} and is affiliated with ${BROKERAGE_NAME}. She is a 5× Top Producer with 11 years of real estate experience and 100+ closed transactions.` } },
              { '@type': 'Question', name: 'Does Shirin Abplanalp help with relocation to North Idaho?', acceptedAnswer: { '@type': 'Answer', text: `Yes. ${AGENT_NAME} relocated to Post Falls, Idaho herself after years in Bend, Oregon, and specializes in helping families make the same move. She has firsthand knowledge of what it takes to relocate to Northern Idaho and helps clients understand neighborhoods, lifestyle, and market conditions before making their move.` } },
              { '@type': 'Question', name: 'What is the real estate market like in Post Falls Idaho?', acceptedAnswer: { '@type': 'Answer', text: `Post Falls is one of Northern Idaho's fastest-growing communities, offering affordable home prices compared to larger Pacific Northwest markets, strong community feel, and access to lakes, mountains, and outdoor recreation within 60 minutes. ${AGENT_NAME} provides current market analysis for buyers and sellers in Post Falls and surrounding Kootenai County communities.` } },
            ],
          },
        ],
      })}} />
      <FieldGuide reviews={[
        ...googleReviews.map(r => ({ ...r, context: r.context + ' · Google' })),
        ...testimonials.map(r => ({ name: r.name, quote: r.quote, context: r.location })),
      ]} />
    </>
  )
}
