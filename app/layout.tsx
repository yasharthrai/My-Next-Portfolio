import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yasharth Rai - Product Manager & Data Enthusiast',
  description: 'Minimal portfolio showcasing experience in product management, data analysis, and innovation.',
  keywords: ['product manager', 'data analyst', 'portfolio', 'tech'],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-gray-100 antialiased">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
