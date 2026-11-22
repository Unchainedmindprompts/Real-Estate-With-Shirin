import { heroMetadata, riverfrontCard } from '@/lib/hero-share'
import FieldGuide from '@/components/home/FieldGuide'
import {
  BASE_URL,
  BUSINESS_ID,
  AGENT_ID,
  WEBSITE_ID,
  PLACE_ID,
  BUSINESS_BASE_NODE,
  jsonLdGraph,
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
  const homepageWebPage = {
    '@type': 'WebPage',
    '@id': `${BASE_URL}/#webpage`,
    url: BASE_URL,
    name: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    isPartOf: { '@id': WEBSITE_ID },
    about: [{ '@id': BUSINESS_ID }, { '@id': PLACE_ID.northIdaho }],
    mainEntity: { '@id': AGENT_ID },
    inLanguage: 'en-US',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: BASE_URL + riverfrontCard.path,
      width: 1200,
      height: 630,
    },
  }

  const homepageBusiness = {
    ...BUSINESS_BASE_NODE,
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
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph([homepageWebPage, homepageBusiness])) }}
      />
      <FieldGuide reviews={[
        ...googleReviews.map(r => ({ ...r, context: r.context + ' · Google' })),
        ...testimonials.map(r => ({ name: r.name, quote: r.quote, context: r.location })),
      ]} />
    </>
  )
}
