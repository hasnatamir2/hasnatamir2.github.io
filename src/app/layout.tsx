import type { Metadata, Viewport } from 'next'
import { SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from '../lib/seo'
import '@styles/globals.css'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '../components/google-analtyics'
import { ThemeProvider } from 'next-themes'
import ScrollProgress from '../components/scroll-progress'
import CustomCursor from '../components/custom-cursor'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  icons: { icon: '/favicon.ico' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3f0ea' },
    { media: '(prefers-color-scheme: dark)', color: '#1c1e21' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-background focus:p-3'
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <ScrollProgress />

          <div className='hidden md:block'>
            <CustomCursor />
          </div>
        </ThemeProvider>

        {GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics MEASUREMENTID={GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  )
}
