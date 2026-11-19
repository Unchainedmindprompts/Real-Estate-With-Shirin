import Link from 'next/link'
import Image from 'next/image'
import LakesideOpening from './LakesideOpening'
import TownAtlas from './TownAtlas'
import { Reviews, Weekend } from './LifeAndReviews'
import { BROKERAGE_NAME, PHONE, PHONE_DISPLAY } from '@/lib/schema-ids'
import { KVCORE_BASE } from '@/lib/idx-search'
import s from './Home.module.css'

export default function FieldGuide({ reviews }: { reviews: { name:string; context:string; quote:string }[] }) {
  return <div className={s.home}>
    <div className={s.revealPair}>
      <LakesideOpening/>
      <section className={s.buyerChapter} id="buying" aria-labelledby="buyer-title">
        <div className={s.buyerPhoto}>
          <Image src="/images/field-guide/townhome-walk.webp" alt="A sidewalk curves past modern townhomes with wood balconies and black railings"
            fill sizes="(max-width: 720px) max(100vw, clamp(345px, 63svh, 630px)), max(54vw, 975px, 137svh)" quality={85}/>
        </div>
        <div className={s.buyerCopy}>
          <p className={s.kicker}><span className={s.shortRule}/>For buyers</p>
          <h2 id="buyer-title">Find your place<br/><i>in North Idaho.</i></h2>
          <p>Would you trade a shorter commute for a few acres? How does that hillside road feel in January? We’ll look past the listing photos and find the homes that fit your day.</p>
          <div className={s.chapterActions}>
            <Link className={s.chapterLink} href="/buyers">Buying with Shirin <span aria-hidden="true">→</span></Link>
            <a href={KVCORE_BASE}>Search homes <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </div>
    <div className={s.revealPair} id="selling">
      <section className={s.sellerChapter} aria-labelledby="seller-title">
        <Image src="/images/field-guide/lake-house-editorial-4k.webp" alt="" fill
          sizes="(max-width: 720px) max(100vw, 978px, 164svh), max(100vw, 1076px, 178svh)" quality={85}/>
        <div className={s.sellerCopy}>
          <p className={s.kicker}><span className={s.shortRule}/>For sellers</p>
          <h2 id="seller-title">Before the sign<br/><i>goes up.</i></h2>
          <p>Which projects are worth doing? What are nearby homes actually selling for? We’ll walk through your home together and build a plan around your timing.</p>
          <div className={s.chapterActions}>
            <Link className={s.chapterLink} href="/sellers">Selling with Shirin <span aria-hidden="true">→</span></Link>
            <Link href="/contact">Discuss your home <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <div className={s.storySheet}>
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
      </div>
    </div>
    <Reviews reviews={reviews}/>
    <TownAtlas/>
    <Weekend/>
    <section className={s.contact} id="get-in-touch" aria-labelledby="contact-title"><div className={s.contactPhoto}><Image src="/images/field-guide/sunset-over-the-lake.webp" fill sizes="100vw" alt=""/></div>
      <div className={s.contactInner}><p className={s.kicker}><span className={s.shortRule}/>Get in touch</p><h2 id="contact-title">Let’s talk about<br/><i>your move.</i></h2>
      <div className={s.heroActions}><Link href="/contact" className={s.lightButton}>Contact Shirin <span aria-hidden="true">↗</span></Link><a className={s.lightTextLink} href={'tel:'+PHONE}>{PHONE_DISPLAY}</a></div></div>
    </section>
  </div>
}
