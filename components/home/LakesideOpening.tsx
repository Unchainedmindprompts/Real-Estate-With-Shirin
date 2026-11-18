'use client'

import { useState } from 'react'
import Image from 'next/image'
import { KVCORE_BASE } from '@/lib/idx-search'
import s from './Home.module.css'

const scenes = [
  { file: 'evening', caption: 'Last light on Lake Coeur d’Alene', alt: 'A copper sunset reflected on Lake Coeur d’Alene, framed by pine trees' },
  { file: 'boardwalk', caption: 'A walk along the water', alt: 'A timber boardwalk reaching into blue water on Lake Coeur d’Alene' },
  { file: 'marina', caption: 'Still water at the marina', alt: 'The Coeur d’Alene marina and lake beneath a pale evening sky' },
]

export default function LakesideOpening() {
  const [current, setCurrent] = useState(0)
  return <section className={s.opening} aria-labelledby="home-content">
    {scenes.map((scene, i) => <div key={scene.file} className={s.scene} data-active={i === current} aria-hidden={i !== current}>
      <Image src={'/images/field-guide/' + scene.file + '.webp'} alt={scene.alt} fill sizes="100vw" preload={i === 0} />
    </div>)}
    <div className={s.scrim} />
    <div className={s.heroInner}>
      <div className={s.heroText}>
        <p className={s.kicker}><span className={s.shortRule}/>North Idaho real estate</p>
        <h1 id="home-content" tabIndex={-1}>At home in<br/><i>North Idaho.</i></h1>
        <p className={s.introLine}>With Shirin Abplanalp, REALTOR®</p>
        <div className={s.heroActions}>
          <a className={s.lightButton} href="#communities">Explore the towns <span aria-hidden="true">↓</span></a>
          <a className={s.lightTextLink} href={KVCORE_BASE}>Search homes <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className={s.sceneBar}>
        <div className={s.sceneCaption} aria-live="polite" aria-atomic="true">
          <span className={s.sceneLine} />{scenes[current].caption}
        </div>
        <div className={s.sceneControls}>
          <button type="button" aria-label="Previous lake photograph" onClick={() => setCurrent((current + scenes.length - 1) % scenes.length)}>←</button>
          <span>{String(current + 1).padStart(2, '0')} <b>/</b> 03</span>
          <button type="button" aria-label="Next lake photograph" onClick={() => setCurrent((current + 1) % scenes.length)}>→</button>
        </div>
      </div>
    </div>
  </section>
}
