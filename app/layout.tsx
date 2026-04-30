import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yasharth Rai - Product Manager & Data Enthusiast',
  description: 'Minimal portfolio showcasing experience in product management, data analysis, and fintech innovation. 50K+ users managed, 25% growth achieved.',
  keywords: ['product manager', 'data analyst', 'portfolio', 'tech', 'fintech', 'data science'],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Yasharth Rai - Product Manager',
    description: 'Explore my portfolio of product management, data analysis, and leadership experience.',
    url: 'https://yasarthrai.com',
    siteName: 'Yasharth Rai Portfolio',
    images: [
      {
        url: 'https://yasarthrai.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [
    {
      name: 'Yasharth Rai',
      url: 'https://linkedin.com/in/raiyasharth/',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yasarthrai.com" />
        <meta name="theme-color" content="#7c3aed" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.getItem('theme') === 'light') {
                document.documentElement.classList.add('light')
              }
            `,
          }}
        />
      </head>
      <body className="bg-red-950 text-white antialiased transition-colors duration-300 light:bg-white light:text-black">
        <ThemeProvider>
          <div className="min-h-screen">
            {children}
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
