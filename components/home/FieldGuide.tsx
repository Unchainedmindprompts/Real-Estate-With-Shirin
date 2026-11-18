import Link from 'next/link'
import Image from 'next/image'
import LakesideOpening from './LakesideOpening'
import TownAtlas from './TownAtlas'
import { Reviews, Weekend } from './LifeAndReviews'
import { BROKERAGE_NAME, PHONE, PHONE_DISPLAY } from '@/lib/schema-ids'
import s from './Home.module.css'

const guides = [
  { href: '/relocating-to-north-idaho', tag:'Relocation', title: 'Moving to North Idaho', text: 'A place to start with the towns, seasons, schools and the move itself.' },
  { href: '/articles/north-idaho-to-spokane-commute-times', tag:'Daily life', title: 'The commute to Spokane', text: 'What the drive looks like from each town when work is across the state line.' },
  { href: '/articles/selling-a-home-north-idaho-what-your-home-is-worth', tag:'For sellers', title: 'What is your home worth?', text: 'How local sales, preparation and timing fit into an asking price.' },
]

export default function FieldGuide({ reviews }: { reviews: { name:string; context:string; quote:string }[] }) {
  return <div className={s.home}>
    <LakesideOpening/>
    <nav className={s.serviceStrip} aria-label="Real estate services">
      <span>Work with Shirin</span>
      <Link href="/buyers">Buying a home <i aria-hidden="true">↗</i></Link>
      <Link href="/sellers">Selling a home <i aria-hidden="true">↗</i></Link>
      <Link href="/relocating-to-north-idaho">Moving to Idaho <i aria-hidden="true">↗</i></Link>
    </nav>
    <section className={s.story} id="meet-shirin" aria-labelledby="story-title">
      <div className={s.portraitWrap}><div className={s.portrait}>
        <Image src="/images/shirin-portrait-2026.png" alt="Shirin Abplanalp" fill sizes="(max-width:700px) 86vw, 37vw"/>
      </div><div className={s.portraitCaption}><span>Shirin Abplanalp</span><span>REALTOR® · SRES®</span></div></div>
      <div className={s.storyCopy}><p className={s.kicker}><span className={s.shortRule}/>Meet Shirin</p>
        <h2 id="story-title">I made the<br/><i>move, too.</i></h2>
        <p>When I moved from Bend to Post Falls, I wanted to know what life here would feel like on an ordinary day. Which town would fit? What would the drive be like in February?</p>
        <p>Those are the conversations I love having with people who are looking here. Tell me what an ordinary Tuesday looks like for you. That’s where we’ll start.</p>
        <div className={s.signature}>Shirin</div>
        <Link href="/about" className={s.darkTextLink}>More of my story <span aria-hidden="true">→</span></Link>
        <p className={s.broker}>{BROKERAGE_NAME} · Idaho license #1371861</p>
      </div>
    </section>
    <div className={s.credentials}><p><strong>11</strong> years in real estate</p><p><strong>100+</strong> personal transactions in Bend</p><p><strong>5×</strong> Top Producer at Bend Premier Real Estate</p></div>
    <TownAtlas/>
    <Weekend/>
    <Reviews reviews={reviews}/>
    <section className={s.journal} id="field-notes" aria-labelledby="notes-heading">
      <div className={s.sectionTop}><div><p className={s.kicker}><span className={s.shortRule}/>Shirin’s guides</p><h2 id="notes-heading">Field <i>notes.</i></h2></div><Link className={s.darkTextLink} href="/articles">All articles <span aria-hidden="true">→</span></Link></div>
      <div className={s.guideGrid}>{guides.map(g=><Link key={g.href} className={s.guide} href={g.href}><p className={s.kicker}>{g.tag}</p><h3>{g.title}</h3><p>{g.text}</p><span className={s.readGuide}>Read guide <span aria-hidden="true">↗</span></span></Link>)}</div>
    </section>
    <section className={s.contact} aria-labelledby="contact-title"><div className={s.contactPhoto}><Image src="/images/field-guide/marina.webp" fill sizes="100vw" alt=""/></div>
      <div className={s.contactInner}><p className={s.kicker}><span className={s.shortRule}/>Get in touch</p><h2 id="contact-title">Let’s talk about<br/><i>your move.</i></h2>
      <div className={s.heroActions}><Link href="/contact" className={s.lightButton}>Contact Shirin <span aria-hidden="true">↗</span></Link><a className={s.lightTextLink} href={'tel:'+PHONE}>{PHONE_DISPLAY}</a></div></div>
    </section>
  </div>
}
