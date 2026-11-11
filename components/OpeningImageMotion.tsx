'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import styles from './EditorialMotion.module.css'

export default function OpeningImageMotion({ children }: { children: ReactNode }) {
  const layer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const image = layer.current
    const section = image?.parentElement
    if (!image || !section) return

    const motion = matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    let frame = 0
    const paint = () => {
      frame = 0
      const bounds = section.getBoundingClientRect()
      // Keep the original image crop; pin only while the opening section passes.
      const offset = motion.matches ? Math.max(0, Math.min(-bounds.top, bounds.height)) : 0
      image.style.transform = offset ? `translate3d(0, ${offset}px, 0)` : 'none'
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }
    paint()
    addEventListener('scroll', schedule, { passive: true })
    addEventListener('resize', schedule)
    motion.addEventListener('change', schedule)
    return () => {
      cancelAnimationFrame(frame)
      removeEventListener('scroll', schedule)
      removeEventListener('resize', schedule)
      motion.removeEventListener('change', schedule)
    }
  }, [])

  return <div ref={layer} className={styles.openingImage}>{children}</div>
}
