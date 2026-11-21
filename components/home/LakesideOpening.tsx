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
  const [loadedScenes, setLoadedScenes] = useState<Set<number>>(() => new Set([0]))
  const waterfrontImage = useRef<HTMLImageElement>(null)
  const glide = useRef<Animation | null>(null)
  const [playback, setPlayback] = useState<'still' | 'playing' | 'paused' | 'ended'>('still')

  useEffect(() => {
    const photo = waterfrontImage.current
    if (current !== 0 || !photo?.animate) return
    const preference = window.matchMedia('(prefers-reduced-motion: no-preference)')
    let active = true

    async function syncMotion() {
      glide.current?.cancel()
      glide.current = null
      setPlayback('still')
      if (!preference.matches || !photo) return
      try {
        await photo.decode()
      } catch {
        return
      }
      if (!active || !preference.matches || glide.current) return
      const animation = photo.animate([
        { transform: 'translate3d(0, 0, 0) scale(1)' },
        { transform: 'translate3d(3.4%, 0, 0) scale(1.1)' },
      ], { duration: 10000, easing: 'cubic-bezier(.25,.52,.38,1)', fill: 'forwards' })
      glide.current = animation
      animation.onfinish = () => setPlayback('ended')
      setPlayback('playing')
    }

    void syncMotion()
    preference.addEventListener('change', syncMotion)
    return () => {
      active = false
      preference.removeEventListener('change', syncMotion)
      glide.current?.cancel()
      glide.current = null
    }
  }, [current])

  function preloadScene(offset: number) {
    const nextIndex = (current + offset + scenes.length) % scenes.length
    setLoadedScenes(prev => (prev.has(nextIndex) ? prev : new Set([...prev, nextIndex])))
  }

  function changeScene(offset: number) {
    const nextIndex = (current + offset + scenes.length) % scenes.length
    setLoadedScenes(prev => (prev.has(nextIndex) ? prev : new Set([...prev, nextIndex])))
    setPlayback('still')
    setCurrent(nextIndex)
  }

  function togglePlayback() {
    const animation = glide.current
    if (!animation) return
    if (animation.playState === 'running') {
      animation.pause()
      setPlayback('paused')
    } else {
      animation.play()
      setPlayback('playing')
    }
  }

  const playbackLabel = playback === 'playing' ? 'Pause photo motion' : playback === 'ended' ? 'Replay photo motion' : 'Resume photo motion'

  return <section className={s.opening} data-waterfront={current === 0} aria-labelledby="home-content">
    {scenes.map((scene, i) => <div key={scene.photo.src} className={s.scene} data-active={i === current} aria-hidden={i !== current}>
      {loadedScenes.has(i) && <Image
        ref={i === 0 ? waterfrontImage : undefined}
        src={scene.photo} alt={scene.alt} fill sizes="100vw"
        quality={i === 0 ? 75 : 85}
        placeholder="blur"
        preload={i === 0}
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
          {current === 0 && playback !== 'still' && <button type="button" onClick={togglePlayback} aria-label={playbackLabel} title={playbackLabel}>
            <svg aria-hidden="true" viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
              <path d={playback === 'playing' ? 'M3 2h3.5v12H3zm6.5 0H13v12H9.5z' : 'M4 2l9 6-9 6z'} />
            </svg>
          </button>}
          <button type="button" aria-label="Previous waterfront photograph" onMouseEnter={() => preloadScene(-1)} onFocus={() => preloadScene(-1)} onClick={() => changeScene(-1)}>←</button>
          <span>{String(current + 1).padStart(2, '0')} <b>/</b> {String(scenes.length).padStart(2, '0')}</span>
          <button type="button" aria-label="Next waterfront photograph" onMouseEnter={() => preloadScene(1)} onFocus={() => preloadScene(1)} onClick={() => changeScene(1)}>→</button>
        </div>
      </div>
    </div>
  </section>
}
