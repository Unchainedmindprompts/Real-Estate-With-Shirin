'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import s from './Home.module.css'

const weekends = [
  { name: 'On the water', place: 'Lake Coeur d’Alene', image: 'lake-life.jpeg', alt: 'Docks and blue water along the Coeur d’Alene shoreline' },
  { name: 'At the table', place: 'River & Rye · Coeur d’Alene', image: 'river-and-rye-dining-4k.webp', alt: 'A plate of pasta at River & Rye' },
  { name: 'On the trails', place: 'Silver Mountain Bike Park · Kellogg', image: 'silver-mountain-bike-park-4k.avif', alt: 'A rider descending a forest trail at Silver Mountain Bike Park' },
  { name: 'A winter morning', place: 'Skiing in North Idaho', image: 'skiing-action-4k.webp', alt: 'A skier cuts through fresh snow' },
  { name: 'One more hole', place: 'Golf in lake country', image: 'golf-4k.webp', alt: 'Golfers on a green overlooking the lake' },
  { name: 'A glass downtown', place: 'Rivaura · Sherman Avenue', image: 'rivaura-cda-tasting-room-4k.webp', alt: 'Rivaura tasting room on Sherman Avenue' },
]

export function Weekend() {
  const rail = useRef<HTMLDivElement>(null)
  const [bounds, setBounds] = useState({start: true, end: false})
  function move(step: number) {
    const el = rail.current
    if (!el) return
    const cards = Array.from(el.children) as HTMLElement[]
    const current = cards.reduce((best, card, i) => Math.abs(card.offsetLeft-el.scrollLeft) < Math.abs(cards[best].offsetLeft-el.scrollLeft) ? i : best, 0)
    const next = cards[Math.max(0,Math.min(cards.length-1,current+step))]
    el.scrollTo({left:next.offsetLeft,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})
  }
  return <section className={s.weekend} aria-labelledby="weekend-heading">
    <div className={s.sectionTop}><div><p className={s.kicker}><span className={s.shortRule}/>Life around here</p><h2 id="weekend-heading">The weekend <i>edit.</i></h2></div>
      <div className={s.railControls}><button type="button" aria-label="Previous lifestyle photograph" disabled={bounds.start} onClick={() => move(-1)}>←</button><button type="button" aria-label="Next lifestyle photograph" disabled={bounds.end} onClick={() => move(1)}>→</button></div>
    </div>
    <div ref={rail} className={s.rail} onScroll={e=>{const el=e.currentTarget;setBounds({start:el.scrollLeft<=2,end:el.scrollLeft+el.clientWidth>=el.scrollWidth-3})}} aria-label="North Idaho lifestyle photographs" tabIndex={0}>
      {weekends.map(x=><figure key={x.name}><div className={s.railImage}><Image src={'/images/'+x.image} fill sizes="(max-width: 660px) 80vw, 36vw" alt={x.alt}/></div><figcaption><h3>{x.name}</h3><span>{x.place}</span></figcaption></figure>)}
    </div>
  </section>
}

type Review = { name: string; context: string; quote: string }
export function Reviews({ reviews }: { reviews: Review[] }) {
  const [active,setActive]=useState(0)
  return <section className={s.reviews} aria-label="Client reviews">
    <div className={s.reviewAside}><span aria-hidden="true" className={s.quotation}>“</span><p className={s.kicker}>In their words</p></div>
    <div className={s.reviewBody}><div aria-live="polite" aria-atomic="true">
      {reviews.map((r,i)=><figure key={r.name} hidden={i!==active}><blockquote>“{r.quote}”</blockquote><figcaption><strong>{r.name}</strong><span>{r.context}</span></figcaption></figure>)}
    </div><div className={s.reviewControls}>
      <button aria-label="Previous client review" onClick={()=>setActive((active+reviews.length-1)%reviews.length)}>←</button><span>{active+1} / {reviews.length}</span><button aria-label="Next client review" onClick={()=>setActive((active+1)%reviews.length)}>→</button>
    </div></div>
  </section>
}
