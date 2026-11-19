'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { KVCORE_BASE } from '@/lib/idx-search'
import s from './Home.module.css'

const links = [
  ['Buy', '/buyers'], ['Sell', '/sellers'], ['Communities', '#communities'],
  ['Meet Shirin', '#meet-shirin'],
]

export default function HomeNav({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  return <header className={s.nav} data-solid={scrolled || open} onKeyDown={event => {
    if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus() }
  }}>
    <a className={s.skip} href="#home-content">Skip to content</a>
    <nav className={s.navInner} aria-label="Main navigation">
      <Link href="/" aria-label="Real Estate With Shirin homepage" className={s.brand} onClick={() => setOpen(false)}>
        <Image src="/images/field-guide/monogram.png" width={55} height={43} alt="" />
        <span>Real Estate <i>with</i> Shirin<small>BHHS Jacklin Real Estate</small></span>
      </Link>
      <div className={s.navLinks}>{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <Link href="/contact" className={s.navCta}>Let’s talk <span aria-hidden="true">↗</span></Link>
      <button ref={toggle} type="button" className={s.menuButton} aria-controls="home-menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span>
      </button>
    </nav>
    <div id="home-menu" hidden={!open} className={s.drawer}>
      {[...links, ['Search homes', KVCORE_BASE], ['Contact Shirin','/contact']].map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<span aria-hidden="true">↗</span></Link>)}
    </div>
  </header>
}
