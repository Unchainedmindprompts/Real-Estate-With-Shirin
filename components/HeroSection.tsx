'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  { src: '/images/hero-slide-1.webp', alt: 'North Idaho real estate consultation' },
  { src: '/images/hero-slide-2.webp', alt: 'Lakefront home at golden hour in North Idaho' },
  { src: '/images/hero-slide-3.webp', alt: 'Couple outside craftsman home in North Idaho' },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState<Set<number>>(new Set([0]))
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const goTo = useCallback((index: number) => {
    setCurrent(index)
    setLoaded(prev => new Set([...prev, index]))
  }, [])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  return (
    <section
      className="flex flex-col lg:flex-row relative"
      style={{ minHeight: '100svh' }}
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart === null) return
        const diff = touchStart - e.changedTouches[0].clientX
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
        setTouchStart(null)
      }}
    >
      {/* Carousel — absolute background layer */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{ opacity: i === current ? 1 : 0, transition: 'opacity 400ms ease-in-out' }}
            aria-hidden={i !== current}
          >
            {loaded.has(i) && (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="100vw"
              />
            )}
          </div>
        ))}
        {/* 35% dark overlay for text legibility */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.35)' }} />
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 p-2 transition-opacity hover:opacity-90 focus:outline-none"
        style={{ zIndex: 10, opacity: 0.45, color: 'white' }}
        aria-label="Previous slide"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 p-2 transition-opacity hover:opacity-90 focus:outline-none"
        style={{ zIndex: 10, opacity: 0.45, color: 'white' }}
        aria-label="Next slide"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Left: text, vertically centered — cream panel sits above carousel */}
      <div
        className="flex items-center w-full lg:w-[43%] px-8 sm:px-14 lg:px-16 xl:px-20"
        style={{
          paddingTop: '96px',
          paddingBottom: '64px',
          position: 'relative',
          zIndex: 2,
          backgroundColor: 'rgba(245, 240, 230, 0.93)',
        }}
      >
        <div className="w-full">
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>
            POST FALLS · COEUR D&apos;ALENE · NORTH IDAHO
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: 'clamp(46px, 5.5vw, 74px)',
              lineHeight: 1.1,
              color: '#1C1A17',
            }}
          >
            I Made This Move.<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#C4842A' }}>Now I Help Others Make Theirs.</em>
          </h1>
          <p
            className="mb-2"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#5C5650',
            }}
          >
            Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · North Idaho
          </p>
          <p
            className="mb-10"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '13px',
              letterSpacing: '0.06em',
              color: '#C4852A',
            }}
          >
            11 Years in Real Estate &nbsp;·&nbsp; 100+ Transactions &nbsp;·&nbsp; 5× Top Producer
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block text-center text-white text-xs uppercase font-semibold rounded-sm transition-colors"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                backgroundColor: '#C4842A',
                padding: '15px 36px',
                letterSpacing: '0.1em',
              }}
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/about"
              className="inline-block text-center text-xs uppercase font-semibold rounded-sm transition-colors"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                color: '#1C1A17',
                border: '1.5px solid #1C1A17',
                padding: '15px 36px',
                letterSpacing: '0.1em',
              }}
            >
              My Story
            </Link>
          </div>
        </div>
      </div>

      {/* Right: photo card */}
      <div
        className="w-full lg:w-[57%] flex items-center justify-center lg:justify-end"
        style={{ padding: '100px 40px 40px 16px', position: 'relative', zIndex: 2 }}
      >
        <div
          style={{
            maxWidth: '480px',
            width: '100%',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/shirin-abplanalp.jpg"
            alt="Shirin Abplanalp, licensed Northern Idaho REALTOR®"
            width={0}
            height={0}
            sizes="(max-width: 1024px) 100vw, 57vw"
            priority
            className="w-full h-auto block"
          />
        </div>
      </div>

    </section>
  )
}
