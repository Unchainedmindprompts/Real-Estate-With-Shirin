import Image from 'next/image'
import Link from 'next/link'
import s from './Home.module.css'

const landscapeSizes = '(min-aspect-ratio: 512/269) 100vw, 190.34vh'
const landscapeSrcSet = [1280, 1920, 2560, 3840, 5120, 8192]
  .map(width => `/images/field-guide/marina-${width}.avif ${width}w`).join(', ')
const portraitSrcSet = [768, 1280, 1920]
  .map(width => `/images/field-guide/marina-portrait-${width}.avif ${width}w`).join(', ')

const cities = [
  { name: 'Coeur d’Alene', slug: 'coeur-dalene-idaho' },
  { name: 'Post Falls', slug: 'post-falls-idaho' },
  { name: 'Hayden', slug: 'hayden-idaho' },
  { name: 'Rathdrum', slug: 'rathdrum-idaho' },
  { name: 'Sandpoint', slug: 'sandpoint-idaho' },
]

export default function TownAtlas() {
  return <section className={s.atlas} aria-labelledby="communities-heading">
    <div className={s.atlasWindow}>
      <div className={s.atlasWindowPhoto}>
        <picture>
          <source type="image/avif" media="(max-width: 800px) and (max-aspect-ratio: 4/5)"
            srcSet={portraitSrcSet} sizes="80vh" />
          <source type="image/avif" srcSet={landscapeSrcSet} sizes={landscapeSizes} />
          <source
            srcSet={[
              '/images/field-guide/sunset-marina-clear-2048.webp 2048w',
              '/images/field-guide/sunset-marina-clear-4096.webp 4096w',
              '/images/field-guide/sunset-marina-clear-8192.webp 8192w',
            ].join(', ')}
            sizes={landscapeSizes}
          />
          <Image src="/images/field-guide/sunset-marina-clear-2048.webp"
            alt="Sunset over the lake and mountains, with golden lights tracing the marina docks"
            fill unoptimized loading="eager" fetchPriority="low" />
        </picture>
      </div>
      <div className={s.atlasScrim} aria-hidden="true" />
      <div className={s.atlasOverlay}>
        <div className={s.atlasIntro}>
          <p className={s.kicker}><span className={s.shortRule}/>North Idaho communities</p>
          <h2 id="communities-heading">Five towns,<br/><i>five different paces.</i></h2>
          <p className={s.atlasLead}>
            From walkable lakefront blocks in Coeur d’Alene to open acreage on the Prairie and mountain mornings in Sandpoint.
          </p>
          <Link className={s.atlasGuideLink} href="/areas">
            Compare all communities <span aria-hidden="true">→</span>
          </Link>
        </div>
        <p className={s.atlasCaption}>
          <span className={s.sceneLine} aria-hidden="true" />
          Lake Coeur d’Alene at dusk
        </p>
      </div>
    </div>
    <nav id="communities" className={s.atlasSheet} aria-label="City guides">
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
