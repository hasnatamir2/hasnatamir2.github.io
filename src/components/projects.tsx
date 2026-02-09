'use client'

import { ArrowRight } from 'lucide-react'
import type { Project } from '../types/content'
import { sanityToNextImg, cn } from '../lib/utils'
import Link from 'next/link'
import Badge from './ui/badge'
import Image from 'next/image'
import { GithubIcon } from '@sanity/icons'
import { useState } from 'react'
import { TECH_THRESHOLD } from '../lib/constants'

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section
      id='projects'
      className='section-fade visible min-h-screen px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24'
    >
      <div className='max-w-6xl'>
        <div className='mb-12 sm:mb-16'>
          <p className='text-xs font-light uppercase tracking-wider text-blue-600 dark:text-blue-400 sm:text-sm'>
            SELECTED WORK
          </p>
          <h2 className='mb-3 mt-3 text-3xl font-light sm:mb-4 sm:mt-4 sm:text-4xl'>
            Projects
          </h2>
          <p className='text-sm font-light text-muted-foreground sm:text-base'>
            High-impact applications built with precision and care
          </p>
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-12'>
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const isFeatured = project.featured
  const hasOverflowTech = project.technologies.length > TECH_THRESHOLD

  const [showAllTech, setShowAllTech] = useState(isFeatured)

  const visibleTechnologies =
    showAllTech || isFeatured
      ? project.technologies
      : project.technologies.slice(0, TECH_THRESHOLD)

  const remainingCount = project.technologies.length - TECH_THRESHOLD
  return (
    <div
      className={cn(
        `group relative col-span-1 row-span-1 h-full cursor-pointer overflow-hidden border border-border bg-gradient-to-br from-card to-background p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:rotate-0.5 hover:shadow-glow dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 sm:p-8 lg:col-span-4`,
        {
          'lg:col-span-8 lg:row-span-2': project.featured,
        }
      )}
    >
      {project.image && (
        <div
          className={cn(
            'pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 opacity-0 transition-all duration-500 ease-out group-hover:-bottom-4 group-hover:-right-4 group-hover:opacity-100',
            {
              'h-48 w-48': project.featured,
            }
          )}
        >
          <div className='relative h-full w-full overflow-hidden rounded-2xl border-2 border-blue-600/30 shadow-2xl backdrop-blur-sm dark:border-blue-400/30'>
            <Image
              src={sanityToNextImg(project.image)}
              alt={project.title}
              fill
              className='object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-50'
            />
            <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/50'></div>
          </div>
        </div>
      )}

      <div className='absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-blue-400/10'></div>

      <div className='relative z-10 space-y-4'>
        {project.featured && (
          <span className='mb-6 text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400'>
            Featured Project
          </span>
        )}

        <div>
          <h4
            className={cn('mb-1 text-lg font-medium sm:text-xl', {
              'text-2xl font-medium sm:text-3xl': project.featured,
            })}
          >
            {project.title}
          </h4>
          <p className={cn('mb-4 text-xs text-muted-foreground')}>
            {project.subtitle}
          </p>
        </div>

        <p
          className={cn(
            'mb-6 line-clamp-3 font-light leading-relaxed text-muted-foreground',
            { 'text-sm': !project.featured }
          )}
        >
          {project.description}
        </p>

        {project.impact && project.featured && (
          <div className='mb-8'>
            <div className='mb-2 text-sm text-muted-foreground'>Impact</div>
            <ul className='space-y-2 font-light text-muted-foreground'>
              {project.impact?.map((imp, key) => (
                <li key={key} className='flex items-baseline gap-2'>
                  <div className='text-blue-600 dark:text-blue-400'>•</div>
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div
          className={cn(
            `opacity-0 transition-opacity group-hover:opacity-100`,
            {
              'opacity-100': project.featured,
            }
          )}
        >
          <div className='mb-6 flex flex-wrap gap-2 transition-all duration-300 ease-out'>
            {visibleTechnologies.map((tech) => (
              <Badge
                key={tech._id}
                text={tech.name}
                classNames={
                  !isFeatured
                    ? 'px-2 py-1 bg-blue-600/20 dark:bg-blue-400/20 text-blue-600 dark:text-blue-400 text-xs'
                    : 'px-3'
                }
              />
            ))}

            {!isFeatured && !showAllTech && hasOverflowTech && (
              <button
                type='button'
                onClick={() => setShowAllTech(true)}
                className='focus:outline-none'
              >
                <Badge
                  text={`+${remainingCount} more`}
                  classNames='px-2 py-1 text-xs'
                />
              </button>
            )}
            {!isFeatured && showAllTech && (
              <button
                type='button'
                onClick={() => setShowAllTech(false)}
                className='focus:outline-none'
              >
                <Badge
                  text="__Shrink__"
                  classNames='px-2 py-1 text-xs'
                />
              </button>
            )}
          </div>

          <div className='flex items-center gap-4 text-blue-600 dark:text-blue-400'>
            {project.link && (
              <Link
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400'
              >
                Visit Project
                <ArrowRight className='h-4 w-4' />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400'
              >
                <GithubIcon className='h-4 w-4' />
                Github
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
