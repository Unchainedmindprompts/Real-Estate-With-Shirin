'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C1A17' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-12" style={{ borderBottom: '1px solid #2C2A27' }}>
          {/* Brand */}
          <div className="lg:max-w-xs">
            <div className="mb-5">
              <Link href="/" aria-label="Real Estate With Shirin — Home">
                <div
                  className="inline-block rounded-sm"
                  style={{ backgroundColor: '#FAFAF8', padding: '10px 14px' }}
                >
                  <Image
                    src="/images/shirin-logo.png"
                    alt="Real Estate With Shirin"
                    width={110}
                    height={110}
                    className="object-contain"
                    style={{ width: 'auto', height: '110px' }}
                  />
                </div>
              </Link>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#C4BDB4', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              Licensed REALTOR® serving Post Falls, Coeur d&apos;Alene, and Northern Idaho
            </p>
            <div className="mt-5">
              <Image
                src="/images/exp-realty-white.png"
                alt="eXp Realty"
                width={110}
                height={40}
                className="object-contain opacity-80"
              />
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <p className="text-xs uppercase font-semibold tracking-widest mb-4" style={{ color: '#C4842A', fontFamily: "'DM Sans', system-ui, sans-serif", letterSpacing: '0.15em' }}>Navigate</p>
              <ul className="space-y-2">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Buy', href: '/buyers' },
                  { label: 'Sell', href: '/sellers' },
                  { label: 'Areas', href: '/areas' },
                  { label: 'About', href: '/about' },
                  { label: 'Articles', href: '/articles' },
                  { label: 'Contact', href: '/contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: '#C4BDB4', fontFamily: "'DM Sans', system-ui, sans-serif" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#C4842A')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#C4BDB4')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase font-semibold tracking-widest mb-4" style={{ color: '#C4842A', fontFamily: "'DM Sans', system-ui, sans-serif", letterSpacing: '0.15em' }}>Areas</p>
              <ul className="space-y-2">
                {[
                  { label: 'Post Falls', href: '/areas/post-falls-idaho' },
                  { label: "Coeur d'Alene", href: '/areas/coeur-dalene-idaho' },
                  { label: 'Hayden', href: '/areas/hayden-idaho' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: '#C4BDB4', fontFamily: "'DM Sans', system-ui, sans-serif" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#C4842A')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#C4BDB4')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase font-semibold tracking-widest mb-4" style={{ color: '#C4842A', fontFamily: "'DM Sans', system-ui, sans-serif", letterSpacing: '0.15em' }}>Services</p>
              <ul className="space-y-2">
                {[
                  { label: 'Buyers', href: '/buyers' },
                  { label: 'Sellers', href: '/sellers' },
                  { label: 'Relocation', href: '/about' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: '#C4BDB4', fontFamily: "'DM Sans', system-ui, sans-serif" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#C4842A')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#C4BDB4')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase font-semibold tracking-widest mb-4" style={{ color: '#C4842A', fontFamily: "'DM Sans', system-ui, sans-serif", letterSpacing: '0.15em' }}>Contact</p>
              <ul className="space-y-2">
                <li>
                  <p className="text-sm font-semibold" style={{ color: '#C4BDB4', fontFamily: "'DM Sans', system-ui, sans-serif" }}>Shirin Abplanalp</p>
                </li>
                <li>
                  <a
                    href="tel:+12086607468"
                    className="text-sm transition-colors"
                    style={{ color: '#C4BDB4', fontFamily: "'DM Sans', system-ui, sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C4842A')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#C4BDB4')}
                  >
                    (208) 660-7468
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:dreamlifeinidaho@gmail.com"
                    className="text-sm transition-colors"
                    style={{ color: '#C4BDB4', fontFamily: "'DM Sans', system-ui, sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C4842A')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#C4BDB4')}
                  >
                    dreamlifeinidaho@gmail.com
                  </a>
                </li>
                <li className="text-sm" style={{ color: '#C4BDB4', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                  510 S Clearwater Loop<br />
                  Suite 100<br />
                  Post Falls, ID 83854
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-xs text-center lg:text-left" style={{ color: '#C4BDB4', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            © 2026 Real Estate With Shirin · Shirin Abplanalp · Licensed REALTOR® · eXp Realty · Idaho License #1371861
          </p>
          <p className="text-xs" style={{ color: '#C4BDB4', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Helping Northern Idaho buyers and sellers find their perfect home.
          </p>
        </div>
      </div>
    </footer>
  )
}
