import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.realestatewithshirin.com'),
  title: {
    default: 'Northern Idaho Real Estate Agent | Shirin Abplanalp · eXp Realty',
    template: '%s | Shirin Abplanalp · eXp Realty',
  },
  description: "Shirin Abplanalp is a licensed Northern Idaho realtor with eXp Realty specializing in Post Falls, Coeur d'Alene, and Kootenai County.",
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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
