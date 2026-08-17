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
              Licensed REALTOR® serving Post Falls, Coeur d&apos;Alene, and North Idaho
            </p>
            <div className="mt-5">
              <Image
                src="/images/bhhs-jacklin-logo-white.png"
                alt="Berkshire Hathaway HomeServices Jacklin Real Estate"
                width={200}
                height={38}
                className="object-contain opacity-90"
                style={{ width: 'auto', height: '38px' }}
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
              <p className="text-xs uppercase font-semibold tracking-widest mb-4" style={{ color: '#C4842A', fontFamily: "'DM Sans', system-ui, sans-serif", letterSpacing: '0.15em' }}>Services</p>
              <ul className="space-y-2">
                {[
                  { label: 'Buyers', href: '/buyers' },
                  { label: 'Sellers', href: '/sellers' },
                  { label: 'Relocation', href: '/relocating-to-north-idaho' },
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
              <p className="text-xs uppercase font-semibold tracking-widest mb-4" style={{ color: '#C4842A', fontFamily: "'DM Sans', system-ui, sans-serif", letterSpacing: '0.15em' }}>Service Areas</p>
              <ul className="space-y-2">
                {[
                  { label: 'Post Falls', href: '/areas/post-falls-idaho' },
                  { label: "Coeur d'Alene", href: '/areas/coeur-dalene-idaho' },
                  { label: 'Hayden', href: '/areas/hayden-idaho' },
                  { label: 'Rathdrum', href: '/areas/rathdrum-idaho' },
                  { label: 'Sandpoint', href: '/areas/sandpoint-idaho' },
                  { label: 'Kootenai County', href: '/areas/kootenai-county' },
                  { label: 'Bonner County', href: '/areas/bonner-county' },
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
                  1927 W. Riverstone Drive<br />
                  Coeur d&apos;Alene, ID 83814
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-xs text-center lg:text-left" style={{ color: '#C4BDB4', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            © 2026 Real Estate With Shirin · Shirin Abplanalp · Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · Idaho License #1371861
          </p>
          <p className="text-xs" style={{ color: '#C4BDB4', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Helping North Idaho buyers and sellers find their perfect home.
          </p>
        </div>

        {/* BHHS franchisee disclaimer — required by Berkshire Hathaway HomeServices for franchisees */}
        <div className="pt-8 mt-2 flex justify-center" style={{ borderTop: '1px solid #2C2A27' }}>
          <Image
            src="/images/bhhs-franchisee-disclaimer.png"
            alt="© 2026 BHH Affiliates, LLC. An independently owned and operated franchisee of BHH Affiliates, LLC. Berkshire Hathaway HomeServices and the Berkshire Hathaway HomeServices symbol are registered service marks of Columbia Insurance Company, a Berkshire Hathaway affiliate. Equal Housing Opportunity."
            width={1737}
            height={193}
            className="object-contain"
            style={{ width: '100%', maxWidth: '960px', height: 'auto' }}
          />
        </div>
      </div>
    </footer>
  )
}
