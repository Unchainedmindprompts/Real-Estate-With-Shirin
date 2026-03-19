'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const areas = [
  { label: 'Post Falls', href: '/areas/post-falls-idaho' },
  { label: "Coeur d'Alene", href: '/areas/coeur-dalene-idaho' },
  { label: 'Hayden', href: '/areas/hayden-idaho' },
  { label: 'Rathdrum', href: '/areas/rathdrum-idaho' },
  { label: 'Sandpoint', href: '/areas/sandpoint-idaho' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const solid = !isHome || scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: solid ? '#FAFAF8' : 'transparent',
        boxShadow: solid ? '0 1px 12px rgba(28,26,23,0.08)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="leading-none"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(36px, 4vw, 54px)',
            fontWeight: 400,
            color: solid ? '#1C1A17' : '#FAFAF8',
          }}
        >
          Real Estate With Shirin
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/buyers"
            className="text-sm uppercase tracking-wider font-medium transition-colors"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              color: solid ? '#5C5650' : '#F5EFE6',
              letterSpacing: '0.08em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C4842A')}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = solid ? '#5C5650' : '#F5EFE6')
            }
          >
            Buy
          </Link>
          <Link
            href="/sellers"
            className="text-sm uppercase tracking-wider font-medium transition-colors"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              color: solid ? '#5C5650' : '#F5EFE6',
              letterSpacing: '0.08em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C4842A')}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = solid ? '#5C5650' : '#F5EFE6')
            }
          >
            Sell
          </Link>

          {/* Areas dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button
              className="text-sm uppercase tracking-wider font-medium transition-colors flex items-center gap-1"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                color: solid ? '#5C5650' : '#F5EFE6',
                letterSpacing: '0.08em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Areas
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
                className="mt-0.5"
              >
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {areasOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52">
                <div
                  className="rounded py-2"
                  style={{
                    backgroundColor: '#FAFAF8',
                    border: '1px solid #E8DDD0',
                    boxShadow: '0 4px 20px rgba(28,26,23,0.12)',
                  }}
                >
                {areas.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="block px-4 py-2 text-sm transition-colors"
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      color: '#5C5650',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#C4842A'
                      e.currentTarget.style.backgroundColor = '#F5EFE6'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#5C5650'
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    {area.label}
                  </Link>
                ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="text-sm uppercase tracking-wider font-medium transition-colors"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              color: solid ? '#5C5650' : '#F5EFE6',
              letterSpacing: '0.08em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C4842A')}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = solid ? '#5C5650' : '#F5EFE6')
            }
          >
            About
          </Link>
          <Link
            href="/articles"
            className="text-sm uppercase tracking-wider font-medium transition-colors"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              color: solid ? '#5C5650' : '#F5EFE6',
              letterSpacing: '0.08em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C4842A')}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = solid ? '#5C5650' : '#F5EFE6')
            }
          >
            Articles
          </Link>

          <Link
            href="/contact"
            className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm transition-colors"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              backgroundColor: '#C4842A',
              padding: '10px 24px',
              letterSpacing: '0.08em',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = '#8B4F2A')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = '#C4842A')
            }
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: solid ? '#1C1A17' : '#FAFAF8' }}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden px-6 pb-6"
          style={{ backgroundColor: '#FAFAF8', borderTop: '1px solid #E8DDD0' }}
        >
          <div className="flex flex-col gap-4 pt-4">
            <Link href="/buyers" className="text-sm uppercase tracking-wider font-medium" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }} onClick={() => setMobileOpen(false)}>Buy</Link>
            <Link href="/sellers" className="text-sm uppercase tracking-wider font-medium" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }} onClick={() => setMobileOpen(false)}>Sell</Link>
            <div>
              <p className="text-sm uppercase tracking-wider font-medium mb-2" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>Areas</p>
              <div className="pl-4 flex flex-col gap-2">
                {areas.map((area) => (
                  <Link key={area.href} href={area.href} className="text-sm" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }} onClick={() => setMobileOpen(false)}>{area.label}</Link>
                ))}
              </div>
            </div>
            <Link href="/about" className="text-sm uppercase tracking-wider font-medium" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }} onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/articles" className="text-sm uppercase tracking-wider font-medium" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }} onClick={() => setMobileOpen(false)}>Articles</Link>
            <Link
              href="/contact"
              className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm text-center"
              style={{ backgroundColor: '#C4842A', padding: '10px 24px', fontFamily: "'DM Sans', system-ui, sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
