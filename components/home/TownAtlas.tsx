'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IDX_SEARCH_BY_AREA } from '@/lib/idx-search'
import s from './Home.module.css'

const towns = [
  {
    name: 'Coeur d’Alene', slug: 'coeur-dalene-idaho', x: 244, y: 374,
    phrase: 'Downtown meets the lake',
    detail: 'Start on Sherman Avenue, then walk down to the water. Around Tubbs Hill, the trails, beach and downtown restaurants are all part of the same afternoon.',
    photo: {
      caption: 'Lake Coeur d’Alene from Tubbs Hill', alt: 'Lake Coeur d’Alene at sunset, seen from Tubbs Hill', position: '50% 52%',
      credit: 'Natecation', source: 'https://commons.wikimedia.org/wiki/File:Lake_Coeur_d%27Alene_from_Tubbs_Hill_at_Sunset.jpg',
      license: 'CC BY-SA 4.0', terms: 'https://creativecommons.org/licenses/by-sa/4.0/',
    },
  },
  {
    name: 'Post Falls', slug: 'post-falls-idaho', x: 186, y: 357,
    phrase: 'Life along the Spokane River',
    detail: 'Falls Park and the Spokane River run through the heart of town. This is where I landed after Bend. It’s a good place to start looking if your week takes you into Spokane.',
    photo: {
      caption: 'The Spokane River at Corbin Park', alt: 'The tree-lined Spokane River at Corbin Park in Post Falls', position: '50% 54%',
      credit: 'Tnasci1313', source: 'https://commons.wikimedia.org/wiki/File:Spokane_River.JPG',
      license: 'CC BY-SA 3.0', terms: 'https://creativecommons.org/licenses/by-sa/3.0/',
    },
  },
  {
    name: 'Hayden', slug: 'hayden-idaho', x: 242, y: 333,
    phrase: 'A quieter lakeside pace',
    detail: 'Head east toward Honeysuckle Beach and the streets start to wind through the trees. Closer to town, daily errands are an easy part of the drive home.',
    photo: {
      caption: 'Honeysuckle Bay, Hayden Lake', alt: 'Honeysuckle Bay on Hayden Lake in North Idaho', position: '50% 53%',
      credit: 'Dave Raiman', source: 'https://commons.wikimedia.org/wiki/File:Honeysuckle_Bay,_Hayden_Lake,_ID_-_panoramio.jpg',
      license: 'CC BY 3.0', terms: 'https://creativecommons.org/licenses/by/3.0/',
    },
  },
  {
    name: 'Rathdrum', slug: 'rathdrum-idaho', x: 207, y: 307,
    phrase: 'Where the prairie opens up',
    detail: 'Open prairie meets the wooded slopes of Rathdrum Mountain. Look here for a small downtown, room for a shop, or a little more distance between neighbors.',
    photo: {
      caption: 'Rathdrum Prairie from Chilco Mountain', alt: 'Rathdrum Prairie seen from the slopes of Chilco Mountain', position: '50% 32%',
      credit: 'USDA Forest Service', source: 'https://www.flickr.com/photos/fsnorthernregion/48014601186/',
      license: 'Public domain', terms: null,
    },
  },
  {
    name: 'Sandpoint', slug: 'sandpoint-idaho', x: 326, y: 65,
    phrase: 'Mountain town on a big lake',
    detail: 'Lake Pend Oreille anchors downtown, with City Beach a short walk from the shops. In winter, Schweitzer gives the week a different rhythm.',
    photo: {
      caption: 'City Beach, Lake Pend Oreille', alt: 'City Beach on Lake Pend Oreille in Sandpoint', position: '50% 76%',
      credit: 'Epdp', source: 'https://commons.wikimedia.org/wiki/File:Sandpoint_id_city_beach.jpg',
      license: 'CC BY-SA 3.0', terms: 'https://creativecommons.org/licenses/by-sa/3.0/',
    },
  },
]
export const comparisonPath = '/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint'

type Town = (typeof towns)[number]

function TownComparison({ left, right }: { left: Town; right: Town }) {
  const [split, setSplit] = useState(25)
  return <figure className={s.townPhoto} id="town-photograph">
    <div className={s.townPhotoWindow} style={{ '--split': split + '%' } as CSSProperties}>
      {[right, left].map((place, index) => (
        <div key={place.slug} className={index === 0 ? s.rightView : s.leftView}>
          <Image src={'/images/community-atlas/' + place.slug + '.webp'} alt={place.photo.alt}
            style={{ objectPosition: place.photo.position }} fill sizes="(max-width: 800px) 92vw, (max-width: 1150px) 72vw, 842px" />
          <span className={s.viewLabel}>{place.name}</span>
        </div>
      ))}
      <input className={s.revealRange} type="range" min="0" max="100" value={split}
        onChange={event => setSplit(event.currentTarget.valueAsNumber)}
        aria-label={'Compare ' + left.name + ' and ' + right.name}
        aria-valuetext={split + '% ' + left.name + ', ' + (100 - split) + '% ' + right.name} />
      <span className={s.revealLine} aria-hidden="true">
        <span className={s.revealGrip}>
          <Image src="/images/field-guide/monogram.png" width={30} height={24} alt="" />
        </span>
      </span>
    </div>
    <figcaption>
      <span>{right.photo.caption}</span>
      <details className={s.photoCredit}>
        <summary>Photo credits</summary>
        <div>{[left, right].map(({ photo }) => (
          <p key={photo.source}>{photo.caption} · <a href={photo.source}>{photo.credit}</a> · {photo.terms
            ? <a href={photo.terms}>{photo.license}</a> : photo.license} · Cropped</p>
        ))}</div>
      </details>
    </figcaption>
  </figure>
}

export default function TownAtlas() {
  const [{ active, previous }, setPair] = useState({ active: 0, previous: 1 })
  const indexRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const town = towns[active]

  useEffect(() => {
    const media = mediaRef.current
    if (!media || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return
      observer.disconnect()
      if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        media.animate([
          { opacity: 0, transform: 'translateX(min(3vw, 48px))' },
          { opacity: 1, transform: 'translateX(0)' },
        ], { duration: 500, easing: 'ease-out' })
      }
    }, { threshold: 0.12 })
    observer.observe(media)
    return () => observer.disconnect()
  }, [])

  function pickTown(index: number) {
    setPair(pair => index === pair.active ? pair : { active: index, previous: pair.active })
  }

  function pickFromMap(index: number) {
    pickTown(index)
    const choices = indexRef.current
    if (!choices || !window.matchMedia('(max-width: 800px)').matches) return
    const choice = choices.querySelectorAll('button')[index]
    choice.focus({ preventScroll: true })
    choice.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return <section className={s.atlas} id="communities" aria-labelledby="atlas-title">
    <div className={s.atlasSpread}>
      <header className={s.atlasHeader}>
        <h2 id="atlas-title"><span>Five towns.</span> <i>Where’s home?</i></h2>
        <p className={s.kicker}>The community atlas</p>
      </header>
      <div className={s.atlasMedia} ref={mediaRef}>
        <TownComparison key={town.slug} left={towns[previous]} right={town} />
      </div>
      <div className={s.townChoices} ref={indexRef} role="group" aria-label="Choose a town">
        {towns.map((item, index) => (
          <button type="button" key={item.slug} aria-pressed={index === active} aria-controls="town-story town-photograph"
            onClick={() => pickTown(index)}>{item.name}</button>
        ))}
      </div>
      <article className={s.atlasStory} id="town-story" aria-labelledby="town-headline">
        <div className={s.townInfo} aria-live="polite" aria-atomic="true">
          <h3 id="town-headline">{town.phrase}</h3>
          <p>{town.detail}</p>
        </div>
        <div className={s.townActions}>
          <Link href={'/areas/' + town.slug}>Explore {town.name} <span aria-hidden="true">→</span></Link>
          <a href={IDX_SEARCH_BY_AREA[town.slug]}>Homes for sale <span aria-hidden="true">↗</span></a>
        </div>
      </article>
    </div>
    <div className={s.atlasCompanion}>
      <details className={s.atlasFigure}>
        <summary>Explore the regional map</summary>
        <figure>
            <div className={s.atlasPlate}>
              <svg viewBox="0 0 550 550" role="group" aria-label="Interactive map of five North Idaho towns">
                <defs>
                  <pattern id="atlas-grid" width="45" height="45" patternUnits="userSpaceOnUse">
                    <path d="M45 0H0V45" fill="none" stroke="#938a70" strokeOpacity=".26" strokeWidth=".6"/>
                  </pattern>
                  <radialGradient id="atlas-fade"><stop offset="60%" stopColor="white"/><stop offset="100%" stopColor="black"/></radialGradient>
                  <mask id="atlas-paper"><rect width="550" height="550" fill="url(#atlas-fade)"/></mask>
                  <linearGradient id="atlas-water" x2=".85" y2="1">
                    <stop stopColor="#7d9b9e"/><stop offset="1" stopColor="#557b81"/>
                  </linearGradient>
                </defs>
                <rect width="550" height="550" fill="url(#atlas-grid)" mask="url(#atlas-paper)"/>
                <g fill="url(#atlas-water)" stroke="#63868a" strokeWidth=".8">
                  {/* Shorelines simplified from Esri USA Detailed Water Bodies, projected in local latitude and longitude. */}
                  <path d="M254 524 248 516 245 504 237 500 236 496 225 497 218 487 207 484 205 480 200 480 192 487 184 488 194 483 198 477 207 474 211 475 209 470 202 463 214 466 230 447 232 439 231 434 232 427 231 419 215 418 221 411 231 413 238 409 244 402 243 394 236 397 237 390 233 386 228 381 231 376 242 378 250 382 253 385 258 385 261 392 266 392 270 401 280 402 284 397 282 402 293 404 289 407 280 405 280 410 278 406 270 406 258 399 258 407 254 401 249 399 246 406 250 410 245 410 246 418 238 421 241 428 243 440 249 448 240 450 237 456 233 459 230 462 233 471 229 469 225 468 218 479 230 490 242 483 249 482 238 488 250 487 242 492 248 497 256 511 259 518Z"/>
                  <path d="M430 103 433 111 439 116 433 116 429 132 411 144 389 140 383 141 368 152 367 157 369 162 365 166 364 172 358 178 357 190 361 203 364 210 362 220 342 235 335 233 315 233 330 225 327 221 322 220 338 217 345 212 334 196 330 180 331 170 335 162 347 149 358 127 363 126 364 111 368 116 381 116 387 108 384 104 392 102 387 92 388 85 386 80 377 74 362 74 365 85 358 82 354 77 345 71 343 67 335 73 335 83 330 88 324 84 321 88 314 83 310 86 302 85 299 82 307 81 312 77 316 69 314 74 327 68 330 74 325 62 326 57 327 66 327 60 333 51 345 49 350 55 354 53 359 44 373 54 373 61 384 63 384 55 381 50 389 53 382 48 383 43 390 54 401 71 413 83 421 88 422 92 416 88 410 90 417 96 415 102 418 105 423 111 426 108Z"/>
                  <path d="M275 304 277 311 275 315 283 319 279 326 283 328 272 331 280 333 275 339 271 336 265 336 259 339 253 337 254 329 265 326 269 328 273 318 274 309Z"/>
                </g>
                <g fill="none" stroke="#75979b" strokeWidth="1.9" strokeLinejoin="round" strokeLinecap="round"><path d="M-10 389 26 381 34 376 52 371 61 367 75 370 83 365 91 374 103 379 111 372 120 373 131 372 137 373 151 365 161 365 166 368 173 361 182 357 189 363 196 366 230 365 239 372 236 376"/><path d="M299 82 283 76 277 77 273 90 267 97 266 111 254 124 246 125 227 135 218 131 211 121 196 117 169 118 156 113 141 92 115 84 97 87 89 84 76 50 66 38 68 0"/></g>
                <path d="M151 0V550" stroke="#a9ae9c" strokeDasharray="3 6" fill="none"/>
                <g className={s.waterLabels}><text x="382" y="174">Lake Pend Oreille</text><text x="280" y="449">Lake Coeur d’Alene</text><text x="62" y="407">Spokane River</text></g>
                <g className={s.mapRegion}><text x="160" y="234">I D A H O</text><text x="34" y="234">W A S H I N G T O N</text></g>
                <g transform="translate(53 62)" fill="#36534a">
                  <text y="-20" textAnchor="middle" fontSize="10" fontFamily="Georgia,serif">N</text>
                  <path d="M0 -13 -4 8 0 4Z"/><path d="M0 -13 4 8 0 4Z" fill="#c6c6b6" stroke="#36534a" strokeWidth=".55"/>
                </g>
                {towns.map((item, index) => {
                  const labelLeft = index === 1 || index === 3
                  return <g key={item.slug} className={s.mapTown} data-active={index === active}
                    role="button" tabIndex={0} aria-label={'Select ' + item.name} aria-pressed={index === active}
                    onClick={() => pickFromMap(index)} onKeyDown={event => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        pickFromMap(index)
                      }
                    }}>
                    <circle className={s.halo} cx={item.x} cy={item.y} r="12"/>
                    <circle cx={item.x} cy={item.y} r={index === active ? 4.6 : 3.7}/>
                    <text x={item.x + (labelLeft ? -13 : 13)} y={item.y + (index === 2 ? -9 : 4)}
                      textAnchor={labelLeft ? 'end' : 'start'}>{item.name}</text>
                    <circle cx={item.x} cy={item.y} r="16" fill="transparent"/>
                  </g>
                })}
              </svg>
            </div>
            <figcaption className={s.atlasLegend}>
              <span>North Idaho · Regional map</span>
              <a href="https://www.arcgis.com/home/search.html?q=USA%20Detailed%20Water%20Bodies">Water data · Esri</a>
            </figcaption>
        </figure>
      </details>
      <Link href={comparisonPath} className={s.comparison}>Compare all five towns <span aria-hidden="true">→</span></Link>
    </div>
  </section>
}
