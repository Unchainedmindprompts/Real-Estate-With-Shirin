'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import HomeNav from './home/HomeNav'

export default function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!isHome) return

    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  return <HomeNav key={pathname} solid={!isHome || scrolled} />
}
