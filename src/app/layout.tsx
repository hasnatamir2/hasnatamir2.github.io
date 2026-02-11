import '@styles/globals.css'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '../components/google-analtyics'
import { ThemeProvider } from 'next-themes'
import ScrollProgress from '../components/scroll-progress'
import CustomCursor from '../components/custom-cursor'

const inter = Inter({ subsets: ['latin'] })

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
      { url: '/favicon.ico', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/png' },
      new URL('/favicon.ico', 'https://hasnatdev.com'),
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
      },
    ],
  },
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
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <ScrollProgress />
        <CustomCursor />

        {GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics MEASUREMENTID={GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  )
}
