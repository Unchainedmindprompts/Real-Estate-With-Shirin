import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BASE_URL, WEBSITE_ID, BRAND_PUBLISHER_STUB, placeStub } from '@/lib/schema-ids'
import styles from './page.module.css'

const url = `${BASE_URL}/life-in-north-idaho`
const description = 'Picture your everyday life in North Idaho: local food and wine, lake days, outdoor adventures, and a discovery visit with Shirin Abplanalp.'
export const metadata: Metadata = {
  title: 'Life in North Idaho | A Local Guide With Shirin',
  description,
  alternates: { canonical: url },
  openGraph: { title: 'Life in North Idaho', description, url, images: [{ url: '/images/lake-life.jpeg', alt: 'Waterfront docks and wooded hills in North Idaho' }] },
}

const favorites = [
  { name: 'Piccolo Pizza', location: 'Post Falls · Millworx', mood: 'An easy evening out', description: 'Brick-oven pizza, a cocktail, and time to settle into the evening. A stop to keep in mind when exploring Post Falls — including happy hour.', href: 'https://piccolopizza.net/', link: 'Explore Piccolo Pizza' },
  { name: 'Rivaura', location: 'Downtown Coeur d’Alene', mood: 'A taste of Idaho', description: 'Estate-grown Idaho wines from the Hewett family, with a tasting room on Sherman Avenue. Make room for a downtown stroll before or after your visit.', href: 'https://rivaura.com/visit/cda-tasting-room/', link: 'Explore Rivaura' },
  { name: 'Wine House CDA', location: 'East Sherman · Coeur d’Alene', mood: 'Stay for another conversation', description: 'Curated wines and shareable plates make this an inviting East Sherman stop. Ask for TJ if you’d like help finding a wine you’ll enjoy. Nearby Moon Time adds a neighborhood pub and comfort-food option.', href: 'https://www.winehousecda.com/', link: 'Explore Wine House CDA' },
  { name: 'Embers by the Lake', location: 'Hauser Lake', mood: 'Dinner with a lake view', description: 'Wood-fired pizza, outdoor seating, and Hauser Lake views. A relaxed detour to consider as you get to know the quieter corners around Post Falls.', href: 'https://www.facebook.com/embersbythelake', link: 'Visit Embers on Facebook' },
]
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'CollectionPage', '@id': url, url, name: 'Life in North Idaho', description, isPartOf: { '@id': WEBSITE_ID }, publisher: BRAND_PUBLISHER_STUB, about: placeStub('northIdaho'), breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#local-picks` }, inLanguage: 'en-US' },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Life in North Idaho', item: url }] },
    { '@type': 'ItemList', '@id': `${url}#local-picks`, name: 'Food and wine to explore in North Idaho', itemListElement: favorites.map((place, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'Place', name: place.name, url: place.href, description: place.description } })) },
  ],
}

export default function LifeInNorthIdahoPage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <Image src="/images/lake-life.jpeg" alt="Waterfront docks beneath blue skies and wooded North Idaho hills" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/">Home</Link><span aria-hidden="true"> / </span><span>Life in North Idaho</span></nav>
          <p className={styles.eyebrow}>A little closer to the life you imagine</p>
          <h1>Life in North Idaho.<br /><em>Find your kind of everyday.</em></h1>
          <p className={styles.heroLead}>Lake mornings. A favorite table. Room to get outside.<br className={styles.desktopBreak} /> Discover the places and small routines that make a place feel like home.</p>
          <a href="#explore" className={styles.button}>Find your inspiration <span aria-hidden="true">↓</span></a>
        </div>
        <span className={styles.heroCaption}>A glimpse of waterfront life in North Idaho</span>
      </section>

      <div className={styles.exploreNav} id="explore">
        <nav aria-label="Explore life in North Idaho" className={styles.wrap}>
          <span>Make yourself at home</span>
          <a href="#food-wine">Food &amp; wine</a><a href="#lake-life">On the water</a><a href="#outdoors">Get outside</a><a href="#everyday">Everyday life</a>
        </nav>
      </div>

      <section className={`${styles.intro} ${styles.wrap}`}>
        <p className={styles.eyebrow}>More than a place to live</p>
        <h2>The house is only<br /><em>part of the story.</em></h2>
        <div><p>Before you choose a home, give yourself a little time to picture the life around it. Where would you spend a free afternoon? What would you walk to, drive to, or make a regular part of your week?</p><p>This is a starting point for exploring North Idaho at your own pace — a few local stops, a little fresh air, and practical questions to bring along. Shirin can help you connect what you love with the communities and homes you explore.</p></div>
      </section>

      <section id="food-wine" className={styles.food}>
        <div className={styles.wrap}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>01 / Around the table</p><h2>Good food.<br /><em>Even better company.</em></h2></div><p>A glass of local wine, pizza after a day of exploring, or a familiar neighborhood table. Start with a few places worth getting to know.</p></div>
          <div className={styles.favoriteGrid}>{favorites.map((place, index) => <article className={styles.favorite} key={place.name}><span className={styles.number}>0{index + 1}</span><p className={styles.location}>{place.location}</p><h3>{place.name}</h3><p className={styles.mood}>{place.mood}</p><p>{place.description}</p><a href={place.href} target="_blank" rel="noopener noreferrer">{place.link} <span aria-hidden="true">↗</span></a></article>)}</div>
          <p className={styles.smallNote}>A few ideas for your visit. Check directly with each business for current hours, menus, and availability.</p>
        </div>
      </section>

      <section id="lake-life" className={styles.lake}>
        <div className={styles.lakePhoto}><Image src="/images/lake-life.jpeg" alt="Docks and a waterfront walkway in North Idaho" fill sizes="(max-width: 800px) 100vw, 55vw" className={styles.cover} /></div>
        <div className={styles.lakeCopy}><p className={styles.eyebrow}>02 / A different pace</p><h2>Leave room<br />for <em>lake days.</em></h2><p>You don’t need to decide on a waterfront home to make time on the water part of your plans. Start by exploring access, the drive from home, and how often you actually want to get out.</p><div className={styles.inset}><h3>Boat days, without owning a boat?</h3><p>A boat-club membership may be worth exploring. Ask about locations, reservation rules, training, seasonal access, and the full cost before choosing an option.</p><Link href="/contact">Ask Shirin about local options <span aria-hidden="true">→</span></Link></div><Link className={styles.textLink} href="/areas/coeur-dalene-idaho">Explore Coeur d’Alene <span aria-hidden="true">→</span></Link></div>
      </section>

      <section id="outdoors" className={`${styles.outdoors} ${styles.wrap}`}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>03 / Make time to play</p><h2>A little fresh air.<br /><em>A new favorite routine.</em></h2></div><p>Think beyond a vacation itinerary. What would you love to do on an ordinary Tuesday — or when the seasons change?</p></div>
        <div className={styles.activityGrid}>
          <article className={styles.seasonCard}><div className={styles.activityPhoto}><Image src="/images/skiing-action.jpeg" alt="Skier enjoying a snowy mountain run" fill sizes="(max-width: 800px) 100vw, 50vw" className={styles.cover} /></div><div><p className={styles.eyebrow}>Follow the seasons</p><h3>Outside is part of the plan.</h3><p>Leave space for trails, golf, and winter mountain days. On your discovery visit, try the drive from a community you’re considering to the activities you want in your week.</p><Link href="/areas">Get to know the communities <span aria-hidden="true">→</span></Link></div></article>
          <article className={styles.pickleCard}><span className={styles.court} aria-hidden="true"><span /></span><p className={styles.eyebrow}>Post Falls / Indoor play</p><h3>Meet you<br />on the court.</h3><p>The Flying Pickle brings indoor pickleball, lessons, social play, and an on-site restaurant to Post Falls. A place to explore whether you’re learning the game or making it a regular thing.</p><a href="https://www.theflyingpickle.com/clubs/post-falls-id/" target="_blank" rel="noopener noreferrer">Explore The Flying Pickle <span aria-hidden="true">↗</span></a></article>
        </div>
      </section>

      <section id="everyday" className={styles.everyday}><div className={styles.wrap}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>04 / Picture the whole week</p><h2>Find the rhythm<br /><em>that feels like you.</em></h2></div><p>A great visit includes a little ordinary life, too. Walk around, run an errand, test a commute, and notice what feels convenient.</p></div><div className={styles.practicalGrid}>{[
        { title: 'Start with your everyday', text: 'Bring a short list: commute, groceries, healthcare, hobbies, and the places you want nearby. Compare actual routes and access with Shirin.', href: '/relocating-to-north-idaho', link: 'Read the relocation guide' },
        { title: 'Give each place a little time', text: 'Explore downtown Coeur d’Alene, spend an afternoon in Post Falls, or get to know Hayden and Rathdrum. Visit at more than one time of day.', href: '/areas', link: 'Compare the communities' },
        { title: 'Connect the life to the home', text: 'Storage for outdoor gear, space to host, a manageable yard, or a shorter drive to the water — turn the way you want to live into a useful home search.', href: '/buyers', link: 'Explore buying with Shirin' },
      ].map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p><Link href={item.href}>{item.link} <span aria-hidden="true">→</span></Link></article>)}</div></div></section>

      <section className={`${styles.discovery} ${styles.wrap}`}><div className={styles.portrait}><Image src="/images/shirin-abplanalp.jpg" alt="Shirin Abplanalp" fill sizes="(max-width: 650px) 160px, 260px" className={styles.cover} /></div><div><p className={styles.eyebrow}>Come see how life could feel</p><h2>Your next chapter<br /><em>starts with a little exploring.</em></h2><p>Tell Shirin what a good day looks like for you. Together, you can make a discovery visit more useful — with time to explore communities, talk about homes, and get a feel for everyday life.</p><Link href="/contact" className={styles.button}>Plan your North Idaho discovery visit with Shirin <span aria-hidden="true">→</span></Link><p className={styles.noPressure}>A conversation, a few good questions, and a place to start.</p></div></section>
    </div>
  )
}
