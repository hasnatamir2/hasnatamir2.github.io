import type { Metadata } from 'next'
import { SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from '../lib/seo'
import { urlFor } from '../sanity/lib/image'
import Sidebar from '../components/sidebar'
import Hero from '../components/hero'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Footer from '../components/footer'
import MobileNav from '../components/mobile-nav'
import { getHomePageData, getSiteSettings } from '../sanity/lib/data'
import { SanityLive } from '../sanity/lib/live'

// ISR: Revalidate every 5 minutes (300 seconds)
// Pages are static but refresh automatically
export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await getSiteSettings()
  const title = settings?.seo.title || DEFAULT_TITLE
  const description = settings?.seo.description || DEFAULT_DESCRIPTION
  const image = settings?.seo.image?.asset
    ? urlFor(settings.seo.image)
        .width(1200)
        .height(630)
        .fit('crop')
        .format('jpg')
        .quality(85)
        .url()
    : `${SITE_URL}/brand/social/hasnat-amir-1200x630.jpg`
  const imageAlt =
    settings?.seo.image?.alt ||
    `${settings?.name || 'Hasnat Amir'} — full-stack AI engineer`

  return {
    title,
    description,
    alternates: { canonical: SITE_URL },
    authors: [{ name: settings?.name || 'Hasnat Amir', url: SITE_URL }],
    creator: settings?.name || 'Hasnat Amir',
    openGraph: {
      type: 'website',
      title,
      description,
      url: SITE_URL,
      siteName: settings?.name || 'Hasnat Amir',
      locale: 'en_US',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          type: 'image/jpeg',
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    robots: {
      index: !settings?.seo.noIndex,
      follow: true,
      googleBot: {
        index: !settings?.seo.noIndex,
        follow: true,
        'max-image-preview': 'large',
      },
    },
  }
}

export default async function Home() {
  const { data } = await getHomePageData()

  const {
    siteSettings,
    experiences = [],
    projects = [],
    skills = [],
  } = data || {}

  if (!siteSettings) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <p className='text-muted-foreground'>Loading...</p>
      </div>
    )
  }

  const profileData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#profile`,
    url: SITE_URL,
    name:
      siteSettings.seo?.title || `${siteSettings.name} | ${siteSettings.title}`,
    description: siteSettings.seo?.description || siteSettings.tagline,
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: siteSettings.name,
      jobTitle: siteSettings.title,
      url: SITE_URL,
      sameAs: [siteSettings.github, siteSettings.linkedin].filter(Boolean),
      image: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/brand/hasnat-amir-avatar.png`,
        width: 512,
        height: 512,
        caption: `${siteSettings.name} illustrated avatar`,
      },
    },
  }

  return (
    <div className='relative'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileData).replace(/</g, '\\u003c'),
        }}
      />
      <div className='hidden lg:block'>
        <Sidebar personalInfo={siteSettings} />
      </div>

      <main id='main-content' className='lg:ml-72'>
        <Hero personalInfo={siteSettings} stats={siteSettings?.stats} />

        <Projects projects={projects} />

        <Experience experiences={experiences} />

        <Skills skills={skills} />

        <Contact personalInfo={siteSettings} />

        <Footer personalInfo={siteSettings} />
      </main>

      <MobileNav personalInfo={siteSettings} />

      {/* Sanity Live Preview (only in development/preview) */}
      <SanityLive />
    </div>
  )
}
