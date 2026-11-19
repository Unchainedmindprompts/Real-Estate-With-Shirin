import type { Metadata } from 'next'
import { riverfrontCard, shareImage } from '@/lib/hero-share'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  openGraph: { images: [shareImage(riverfrontCard)] },
  metadataBase: new URL('https://www.realestatewithshirin.com'),
  title: {
    default: 'Shirin Abplanalp | North Idaho REALTOR® | BHHS Jacklin',
    template: '%s',
  },
  description: "Shirin Abplanalp is a licensed North Idaho REALTOR® with BHHS Jacklin Real Estate, helping buyers, sellers, and relocating families across North Idaho.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@400;500;600&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
