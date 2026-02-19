import Sidebar from '../components/sidebar'
import Hero from '../components/hero'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Footer from '../components/footer'
import MobileNav from '../components/mobile-nav'
import { getHomePageData } from '../sanity/lib/data'
import { SanityLive } from '../sanity/lib/live'

// ISR: Revalidate every 5 minutes (300 seconds)
// Pages are static but refresh automatically
export const revalidate = 300

export async function generateMetadata() {
  const { data } = await getHomePageData()

  if (!data?.siteSettings) {
    return {
      title: 'Hasnat - Devfolio',
      description: 'All the things I wish to share with you are here',
    }
  }

  const { siteSettings } = data

  return {
    title: `${siteSettings.name} - ${siteSettings.title}`,
    description: siteSettings.tagline,
    keywords: [
      siteSettings.name,
      'Full Stack Developer',
      'Lead Software Developer',
      'Senior Software Developer',
      'Software Engineer',
      'Portfolio',
      'Web Development',
      'ReactJs',
      'NodeJs',
      'MERN',
    ],
    authors: [
      {
        name: siteSettings.name,
        url: 'https://hasnat.dev',
      },
    ],
    creator: siteSettings.name,
    openGraph: {
      type: 'website',
      title: `${siteSettings.name} - ${siteSettings.title}`,
      description: siteSettings.tagline,
      url: 'https://hasnat.dev',
      siteName: `${siteSettings.name} - Devfolio`,
      locale: 'en_US',
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

  return (
    <div className='relative'>
      <div className='hidden lg:block'>
        <Sidebar personalInfo={siteSettings} />
      </div>

      <main className='pb-14 md:pb-24 lg:ml-72 lg:pb-0'>
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
