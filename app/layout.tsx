import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech Directory - Web Development Resources',
  description: 'Discover curated tools, tutorials, libraries, and educational content for web developers. Browse by category, difficulty level, and technology tags.',
  keywords: 'web development, programming, tutorials, tools, resources, react, typescript, javascript',
  authors: [{ name: 'Tech Directory' }],
  openGraph: {
    title: 'Tech Directory - Web Development Resources',
    description: 'Discover curated tools, tutorials, libraries, and educational content for web developers.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CosmicBadge bucketSlug={bucketSlug} />
        </div>
      </body>
    </html>
  )
}