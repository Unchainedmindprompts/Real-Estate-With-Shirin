'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import waterfront from '@/public/images/field-guide/waterfront-homes.webp'
import evening from '@/IMG_3712.jpeg'
import boardwalk from '@/IMG_1627.jpeg'
import marina from '@/IMG_2343.jpeg'
import s from './Home.module.css'

const scenes = [
  { photo: waterfront, caption: 'Homes along the river', alt: 'Riverfront homes and docks reflected in still water beneath pine-covered hills' },
  { photo: evening, caption: 'Last light on Lake Coeur d’Alene', alt: 'A copper sunset reflected on Lake Coeur d’Alene, framed by pine trees' },
  { photo: boardwalk, caption: 'A walk along the water', alt: 'A timber boardwalk reaching into blue water on Lake Coeur d’Alene' },
  { photo: marina, caption: 'Still water at the marina', alt: 'The Coeur d’Alene marina and lake beneath a pale evening sky' },
]

export default function LakesideOpening() {
  const [current, setCurrent] = useState(0)
  const video = useRef<HTMLVideoElement>(null)
  const [motionAllowed, setMotionAllowed] = useState(false)
  const [filmState, setFilmState] = useState<'still' | 'playing' | 'paused' | 'ended' | 'failed'>('still')

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: no-preference)')
    const syncPreference = () => {
      setMotionAllowed(preference.matches)
      setFilmState('still')
    }
    syncPreference()
    preference.addEventListener('change', syncPreference)
    return () => preference.removeEventListener('change', syncPreference)
  }, [])

  function changeScene(offset: number) {
    setFilmState('still')
    setCurrent(i => (i + offset + scenes.length) % scenes.length)
  }

  function togglePlayback() {
    const player = video.current
    if (!player) return
    if (player.paused || player.ended) {
      void player.play().catch(() => setFilmState('failed'))
    } else {
      player.pause()
    }
  }

  const showFilm = motionAllowed && current === 0 && filmState !== 'failed'
  const playbackLabel = filmState === 'playing' ? 'Pause riverfront film' : filmState === 'ended' ? 'Replay riverfront film' : 'Play riverfront film'

  return <section className={s.opening} data-waterfront={current === 0} aria-labelledby="home-content">
    {scenes.map((scene, i) => <div key={scene.photo.src} className={s.scene} data-active={i === current} aria-hidden={i !== current}>
      <Image src={scene.photo} alt={scene.alt} fill sizes={i === 0 ? 'max(100vw, 150svh)' : '100vw'} quality={85} preload={i === 0} />
      {i === 0 && showFilm && <video
        ref={video}
        className={s.waterfrontFilm}
        data-visible={filmState !== 'still'}
        src="/video/riverfront-glide.mp4"
        muted autoPlay playsInline
        aria-hidden="true"
        onPlaying={() => setFilmState('playing')}
        onPause={event => { if (!event.currentTarget.ended) setFilmState('paused') }}
        onEnded={() => setFilmState('ended')}
        onError={() => setFilmState('failed')}
      />}
    </div>)}
    <div className={s.scrim} />
    <div className={s.heroInner}>
      <div className={s.heroText}>
        <p className={s.kicker}><span className={s.shortRule}/>North Idaho real estate</p>
        <h1 id="home-content" tabIndex={-1}>At home in <i>North Idaho.</i></h1>
        <p className={s.introLine}>With Shirin Abplanalp, REALTOR®</p>
        <div className={s.heroActions}>
          <a className={s.lightButton} href="#buying">Buy a home <span aria-hidden="true">↓</span></a>
          <a className={s.lightTextLink} href="#selling">Sell a home <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className={s.sceneBar}>
        <div className={s.sceneCaption} aria-live="polite" aria-atomic="true">
          <span className={s.sceneLine} />{scenes[current].caption}
        </div>
        <div className={s.sceneControls}>
          {showFilm && <button type="button" onClick={togglePlayback} aria-label={playbackLabel} title={playbackLabel}>
            <svg aria-hidden="true" viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
              <path d={filmState === 'playing' ? 'M3 2h3.5v12H3zm6.5 0H13v12H9.5z' : 'M4 2l9 6-9 6z'} />
            </svg>
          </button>}
          <button type="button" aria-label="Previous waterfront photograph" onClick={() => changeScene(-1)}>←</button>
          <span>{String(current + 1).padStart(2, '0')} <b>/</b> {String(scenes.length).padStart(2, '0')}</span>
          <button type="button" aria-label="Next waterfront photograph" onClick={() => changeScene(1)}>→</button>
        </div>
      </div>
    </div>
  </section>
}
