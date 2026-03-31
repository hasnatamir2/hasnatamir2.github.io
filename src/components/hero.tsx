import type { PersonalInfo, Stats } from '../types/content'
import Link from 'next/link'

export default function Hero({
  personalInfo,
  stats,
}: {
  personalInfo: PersonalInfo
  stats: Stats
}) {
  return (
    <section
      id='home'
      className='section-fade visible flex min-h-screen items-center justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24'
    >
      <div className='max-w-4xl'>
        <p className='mb-6 text-xs font-light uppercase tracking-wider text-blue-600 dark:text-blue-400 sm:mb-8 sm:text-sm'>
          Available for select projects
        </p>

        <h1 className='mb-6 text-3xl font-light leading-tight sm:mb-8 sm:text-4xl lg:text-6xl'>
          I build{' '}
          <span className='bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text font-semibold text-transparent dark:from-blue-400 dark:to-blue-400'>
            scalable systems
          </span>{' '}
          that solve real problems
        </h1>

        <div className='max-w-2xl space-y-5 text-base text-muted-foreground sm:space-y-6 sm:text-lg'>
          <p className='mb-4 text-xl font-light leading-relaxed text-muted-foreground dark:text-gray-400 sm:text-xl'>
            {personalInfo.pageSubTitle1}
          </p>
        </div>

        <div className='mt-10 flex flex-wrap gap-3 sm:mt-12 sm:gap-4'>
          <Link
            href={personalInfo.resume}
            target='_blank'
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 transition-colors text-white text-sm font-medium tracking-wide sm:px-8 sm:py-4 sm:text-base"
          >
            Resume
          </Link>
          <Link
            href='#contact'
            className='border border-border px-6 py-3 text-sm font-medium tracking-wide transition-colors hover:border-primary sm:px-8 sm:py-4 sm:text-base'
          >
            Get in Touch
          </Link>
        </div>

        <div className='mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8 sm:mt-16 sm:grid-cols-3 sm:gap-8 sm:pt-10 lg:mt-20 lg:pt-12'>
          <div>
            <div className="text-3xl font-light text-blue-600 dark:text-blue-400 mb-2 sm:text-4xl">
              {stats.yearsExperience}
            </div>
            <div className='text-xs text-muted-foreground sm:text-sm'>
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-3xl font-light text-blue-600 dark:text-blue-400 mb-2 sm:text-4xl">
              {stats.projectsDelivered}
            </div>
            <div className='text-xs text-muted-foreground sm:text-sm'>
              Projects Delivered
            </div>
          </div>
          <div>
            <div className="text-3xl font-light text-blue-600 dark:text-blue-400 mb-2 sm:text-4xl">
              {stats.technologiesMastered}
            </div>
            <div className='text-xs text-muted-foreground sm:text-sm'>
              Technologies Mastered
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
