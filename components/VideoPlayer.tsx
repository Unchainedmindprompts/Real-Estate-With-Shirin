'use client'

import { useState } from 'react'
import Image from 'next/image'

type Props = {
  embedUrl: string
  thumbnail: string
  title: string
}

// Facade player: shows a thumbnail with play button until clicked.
// The iframe (and the player JS that comes with it) only loads on click.
// Aspect ratio is locked to 16:9 — no layout shift.
export default function VideoPlayer({ embedUrl, thumbnail, title }: Props) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className="relative w-full overflow-hidden rounded-sm bg-[#1C1A17]"
      style={{ aspectRatio: '16 / 9' }}
    >
      {playing ? (
        <iframe
          src={`${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play: ${title}`}
          className="absolute inset-0 w-full h-full group cursor-pointer"
        >
          <Image
            src={thumbnail}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex items-center justify-center rounded-full transition-transform group-hover:scale-110"
              style={{
                width: '78px',
                height: '78px',
                backgroundColor: '#C4842A',
                boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  )
}
