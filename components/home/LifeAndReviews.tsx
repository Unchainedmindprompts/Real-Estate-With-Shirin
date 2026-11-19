'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
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
  const [expanded, setExpanded] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const element = rail.current
    if (!element) return
    function updateControls() {
      if (!element) return
      setAtStart(element.scrollLeft < 2)
      setAtEnd(element.scrollLeft + element.clientWidth >= element.scrollWidth - 2)
    }
    const observer = new ResizeObserver(updateControls)
    observer.observe(element)
    element.addEventListener('scroll', updateControls, { passive: true })
    updateControls()
    return () => {
      observer.disconnect()
      element.removeEventListener('scroll', updateControls)
    }
  }, [])

  function move(direction: number) {
    const element = rail.current
    if (!element) return
    const panels = Array.from(element.querySelectorAll('figure'))
    const positions = panels.map(panel => Math.min(panel.offsetLeft, element.scrollWidth - element.clientWidth))
    const target = direction > 0
      ? positions.find(left => left > element.scrollLeft + 2)
      : positions.reverse().find(left => left < element.scrollLeft - 2)
    if (target !== undefined) element.scrollTo({ left: target, behavior: 'auto' })
  }

  return <section id="weekend-edit" className={s.weekend} aria-labelledby="weekend-heading">
    <div className={s.weekendHeader}>
      <p className={s.kicker}><span className={s.shortRule}/>Life around here</p>
      <h2 id="weekend-heading">Life in the <i>INW.</i></h2>
    </div>
    <div ref={rail} id="weekend-photos" className={s.rail}>
      {weekends.map((photo, index) => (
        <figure key={photo.name} className={s.weekendPanel} data-expanded={expanded === index}
          onPointerEnter={event => { if (event.pointerType === 'mouse') setExpanded(index) }}>
          <Image src={'/images/' + photo.image} fill
            sizes="(max-width: 650px) 85vw, (max-width: 1100px) 52vw, 38vw" alt={photo.alt}/>
          <figcaption>
            <span className={s.foldedTitle} aria-hidden="true">{photo.name}</span>
            <div className={s.panelCaption}>
              <h3>{photo.name}</h3>
              <span>{photo.place}</span>
            </div>
          </figcaption>
          <button className={s.expandPanel} type="button" aria-label={'Expand ' + photo.name}
            aria-pressed={expanded === index} onFocus={() => setExpanded(index)} onClick={() => setExpanded(index)}/>
        </figure>
      ))}
    </div>
    <div className={s.railControls}>
      <button type="button" aria-label="Previous lifestyle photograph" aria-controls="weekend-photos"
        disabled={atStart} onClick={() => move(-1)}>←</button>
      <button type="button" aria-label="Next lifestyle photograph" aria-controls="weekend-photos"
        disabled={atEnd} onClick={() => move(1)}>→</button>
    </div>
  </section>
}

type Review = { name: string; context: string; quote: string }
const reviewEmphasis = 'she kept every step clear and on track.'

export function Reviews({ reviews }: { reviews: Review[] }) {
  const [active, setActive] = useState(0)

  return (
    <section id="client-reviews" className={s.reviews} aria-label="Client reviews">
      <div className={s.reviewBody}>
        <p className={s.kicker}>
          <span aria-hidden="true" className={s.quotation}>“</span>
          In their words
        </p>
        <div id="client-review-slides" aria-live="polite" aria-atomic="true">
          {reviews.map((review, index) => (
            <figure key={review.name} hidden={index !== active}>
              <blockquote>
                {review.quote.endsWith(reviewEmphasis) ? (
                  <>{review.quote.slice(0, -reviewEmphasis.length)}<em>{reviewEmphasis}</em></>
                ) : review.quote}
              </blockquote>
              <figcaption>
                <strong>{review.name}</strong>
                <span>{review.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className={s.reviewControls}>
          <button type="button" aria-label="Previous client review" aria-controls="client-review-slides"
            onClick={() => setActive(index => (index + reviews.length - 1) % reviews.length)}>←</button>
          <span>{active + 1} / {reviews.length}</span>
          <button type="button" aria-label="Next client review" aria-controls="client-review-slides"
            onClick={() => setActive(index => (index + 1) % reviews.length)}>→</button>
        </div>
      </div>
    </section>
  )
}
