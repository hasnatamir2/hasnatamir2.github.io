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

export const metadata = {
  title: 'Hasnat - Devfolio',
  description: 'All the things I wish to share with you are here',
  keywords: [
    'Hasnat Amir',
    'Full Stack Developer',
    'Lead Software Developer',
    'Senior Software Developer',
    'Software Developer',
    'Software Engineer',
    'Portfolio',
    'Devfolio',
    'Web Development',
    'Web Developer',
    'ReactJs',
    'NodeJs',
    'MERN',
  ],
  authors: [
    {
      name: 'Hasnat Amir',
      url: 'https://hasnat.dev',
    },
  ],
  creator: 'Hasnat Amir',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    apple: { url: '/favicon.ico', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    type: 'website',
    title: 'Hasnat - Devfolio',
    description: 'All the things I wish to share with you are here',
    url: 'https://hasnat.dev',
    siteName: 'Hasnat - Devfolio',
    locale: 'en_US',
    images: [
      {
        url: 'https://cdn.sanity.io/images/1j267t9o/production/f5d35d3968d61f08d2602933158e37af1c3a3537-2940x1604.png',
        width: 2940,
        height: 1604,
        alt: 'Hasnat Amir - Portfolio',
      },
    ],
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
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
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=5'
        />
      </head>
      <body className={inter.className}>
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
