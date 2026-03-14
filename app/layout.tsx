import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Noah Cayol - Portfolio',
  description: 'Portfolio personnel de Noah Cayol, etudiant en BTS SIO',
}

export const viewport: Viewport = {
  themeColor: '#1e1e1e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <div className="app-zoom">
          <div className="site-stage">
            <div className="site-stage__content">{children}</div>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
