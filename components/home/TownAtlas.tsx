import Image from 'next/image'
import Link from 'next/link'
import s from './Home.module.css'

const cities = [
  { name: 'Coeur d’Alene', slug: 'coeur-dalene-idaho' },
  { name: 'Post Falls', slug: 'post-falls-idaho' },
  { name: 'Hayden', slug: 'hayden-idaho' },
  { name: 'Rathdrum', slug: 'rathdrum-idaho' },
  { name: 'Sandpoint', slug: 'sandpoint-idaho' },
]

export default function TownAtlas() {
  return <section className={s.atlas} id="communities" aria-label="North Idaho communities">
    <div className={s.atlasWindow}>
      <div className={s.atlasWindowPhoto}>
        <picture>
          <source
            srcSet={[
              '/images/field-guide/sunset-marina-clear-2048.webp 2048w',
              '/images/field-guide/sunset-marina-clear-4096.webp 4096w',
              '/images/field-guide/sunset-marina-clear-8192.webp 8192w',
            ].join(', ')}
            sizes="(min-aspect-ratio: 512/269) 100vw, 190.34vh"
          />
          <Image src="/images/field-guide/sunset-marina-clear-2048.webp"
            alt="Sunset over the lake and mountains, with golden lights tracing the marina docks"
            fill unoptimized />
        </picture>
      </div>
    </div>
    <nav className={s.atlasSheet} aria-label="City guides">
      <ul className={s.cityList}>
        {cities.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/areas/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </section>
}
