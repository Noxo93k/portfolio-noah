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
            <div className="site-ornaments" aria-hidden="true">
              <span className="site-orb o1" />
              <span className="site-orb o2" />
              <span className="site-orb o3" />
              <span className="site-ribbon r1" />
              <span className="site-ribbon r2" />
              <span className="site-beam b1" />
              <span className="site-beam b2" />
              <span className="site-beam b3" />
              <span className="site-flare f1" />
              <span className="site-flare f2" />
              <span className="site-glint g1" />
              <span className="site-glint g2" />
              <span className="site-glint g3" />
              <span className="site-doodle d1">
                <svg viewBox="0 0 120 120" className="site-doodle__svg">
                  <path
                    d="M60 8 L108 36 L108 84 L60 112 L12 84 L12 36 Z"
                    className="site-doodle__stroke"
                  />
                  <circle cx="60" cy="60" r="18" className="site-doodle__stroke site-doodle__stroke--2" />
                </svg>
              </span>
              <span className="site-doodle d2">
                <svg viewBox="0 0 140 140" className="site-doodle__svg">
                  <path
                    d="M20 96 C 46 42, 78 128, 120 52"
                    className="site-doodle__stroke"
                  />
                  <path
                    d="M26 58 C 56 12, 86 112, 116 74"
                    className="site-doodle__stroke site-doodle__stroke--2"
                  />
                </svg>
              </span>
              <span className="site-doodle d3">
                <svg viewBox="0 0 120 120" className="site-doodle__svg">
                  <path
                    d="M60 14 L102 96 L18 96 Z"
                    className="site-doodle__stroke"
                  />
                  <path
                    d="M60 30 L88 86 L32 86 Z"
                    className="site-doodle__stroke site-doodle__stroke--2"
                  />
                </svg>
              </span>
              <span className="site-doodle d4">
                <svg viewBox="0 0 160 160" className="site-doodle__svg">
                  <circle cx="80" cy="80" r="54" className="site-doodle__stroke" />
                  <circle cx="80" cy="80" r="26" className="site-doodle__stroke site-doodle__stroke--2" />
                  <path
                    d="M24 88 C 54 70, 74 116, 132 56"
                    className="site-doodle__stroke site-doodle__stroke--3"
                  />
                </svg>
              </span>
              <span className="site-spark s1" />
              <span className="site-spark s2" />
              <span className="site-spark s3" />
              <span className="site-spark s4" />
              <span className="site-spark s5" />
              <span className="site-spark s6" />
              <span className="site-spark s7" />
              <span className="site-spark s8" />
              <span className="site-spark s9" />
              <span className="site-spark s10" />
              <span className="site-spark s11" />
              <span className="site-spark s12" />
            </div>
            <div className="site-stage__content">{children}</div>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
