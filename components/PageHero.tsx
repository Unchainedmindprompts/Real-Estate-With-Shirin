import type { ReactNode } from 'react'
import Image from 'next/image'
import styles from './PageHero.module.css'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  children: string
  layout?: 'service' | 'articles'
}

export default function PageHero({ eyebrow, title, children, layout = 'service' }: PageHeroProps) {
  const isArticleIndex = layout === 'articles'

  return (
    <section className={`relative flex items-center justify-center ${styles.hero}`}>
      <Image
        src="/images/field-guide/lake-house-editorial-4k.webp"
        alt=""
        fill
        preload
        sizes="max(100vw, 107vh)"
        quality={85}
        className="object-cover"
      />
      <div className={styles.shade} aria-hidden="true" />
      <div className={`relative z-10 text-center px-6 lg:px-8 py-20 mx-auto ${isArticleIndex ? 'max-w-3xl' : 'max-w-4xl'}`}>
        <p className={`eyebrow mb-4 ${styles.eyebrow}`}>{eyebrow}</p>
        <h1 className={`mb-6 ${styles.title}`}>{title}</h1>
        <p className={styles.intro} data-layout={layout}>{children}</p>
      </div>
    </section>
  )
}
