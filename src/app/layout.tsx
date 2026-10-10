import type { Metadata, Viewport } from 'next'
import { SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from '../lib/seo'
import '@styles/globals.css'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '../components/google-analtyics'
import { ThemeProvider } from 'next-themes'
import ScrollProgress from '../components/scroll-progress'
import SectionLink from '../components/section-link'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  applicationName: 'Hasnat Amir',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/brand/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/icons/favicon-96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
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
        <SectionLink
          href='#main-content'
          className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-background focus:p-3'
        >
          Skip to content
        </SectionLink>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <ScrollProgress />
        </ThemeProvider>

        {GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics MEASUREMENTID={GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  )
}
