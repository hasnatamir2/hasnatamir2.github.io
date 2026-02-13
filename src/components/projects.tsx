'use client'

import { ArrowRight, Minus, X } from 'lucide-react'
import type { Project } from '../types/content'
import { sanityToNextImg, cn } from '../lib/utils'
import Link from 'next/link'
import Badge from './ui/badge'
import Image from 'next/image'
import { GithubIcon } from '@sanity/icons'
import { useState, useEffect, useRef } from 'react'
import { TECH_THRESHOLD } from '../lib/constants'

export default function Projects({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
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
              <ProjectCard
                key={project._id}
                project={project}
                onViewDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectDetailView
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}

function ProjectCard({
  project,
  onViewDetails,
}: {
  project: Project
  onViewDetails: () => void
}) {
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
      onClick={onViewDetails}
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
            'pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 transition-all duration-500 ease-out group-hover:-bottom-4 group-hover:-right-4 group-hover:opacity-100 md:opacity-0',
            {
              'md:h-48 md:w-48': project.featured,
            }
          )}
        >
          <div className='relative h-full w-full overflow-hidden border-2 border-blue-600/30 shadow-2xl backdrop-blur-sm dark:border-blue-400/30'>
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
            `transition-opacity group-hover:opacity-100 md:opacity-0`,
            {
              'opacity-100': project.featured,
            }
          )}
        >
          <div className='mb-6 flex flex-wrap gap-2'>
            {visibleTechnologies.map((tech) => (
              <Badge
                key={tech._id}
                classNames={
                  !isFeatured
                    ? 'px-2 py-1 bg-blue-600/20 dark:bg-blue-400/20 text-blue-600 dark:text-blue-400 text-xs'
                    : 'px-3'
                }
              >
                {tech.name}
              </Badge>
            ))}

            {!isFeatured && !showAllTech && hasOverflowTech && (
              <button
                type='button'
                onClick={(e) => {
                  e.stopPropagation()
                  setShowAllTech(true)
                }}
                className='focus:outline-none'
              >
                <Badge classNames='px-2 py-1 text-xs'>
                  +{remainingCount} more
                </Badge>
              </button>
            )}
          </div>

          <div className='flex flex-wrap items-center gap-4'>
            <span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
              Tap to view details
            </span>
            <div className='flex gap-4'>
              {project.link && (
                <Link
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={(e) => e.stopPropagation()}
                  className='flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400'
                >
                  Visit
                  <ArrowRight className='h-4 w-4' />
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={(e) => e.stopPropagation()}
                  className='flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400'
                >
                  Code
                  <GithubIcon className='h-4 w-4' />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectDetailView({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const [startY, setStartY] = useState(0)
  const [currentY, setCurrentY] = useState(0)
  const sheetRef = useRef<HTMLDivElement>(null)
  const dragY = useRef(0)
  const isDragging = useRef(false)

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [project])

  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && currentY === 0) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sheetRef.current) return

    // Only allow drag if content is scrolled to top
    const scrollTop = sheetRef.current.scrollTop
    if (scrollTop > 0) return

    isDragging.current = true
    setStartY(e.touches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return

    const deltaY = e.touches[0].clientY - startY
    if (deltaY > 0) {
      dragY.current = deltaY
      setCurrentY(deltaY)
    }
  }

  const handleTouchEnd = () => {
    if (!isDragging.current) return

    isDragging.current = false

    if (dragY.current > 120) {
      onClose()
    }

    dragY.current = 0
    setCurrentY(0)
  }

  if (!project) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className='fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300'
        onClick={onClose}
      />

      <div
        ref={sheetRef}
        style={{
          transform: `translateY(${currentY}px)`,
          transition: currentY === 0 ? 'transform 0.3s ease-out' : 'none',
        }}
        className={cn(
          'fixed z-50 overflow-hidden border border-border bg-card',
          // Mobile: Bottom sheet - NO rounding at all for consistency
          'bottom-0 left-0 right-0 max-h-[85dvh]',
          // Desktop: Centered modal - Sharp edges, no rounding
          'md:inset-0 md:m-auto md:h-fit md:max-h-[90dvh] md:w-full md:max-w-2xl'
        )}
      >
        <div className='flex justify-center md:hidden'>
          <span
            className='h-1 w-24 rounded-lg bg-muted-foreground mb-2 mt-3 '
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        </div>
        <div className='sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card px-4 py-3 md:px-6 md:py-4'>
          <h3 className='text-sm font-medium uppercase tracking-wider md:text-base'>
            Project Details
          </h3>
          <button
            onClick={onClose}
            className='border border-border p-2 transition-colors hover:bg-muted'
            aria-label='Close'
          >
            <X className='h-4 w-4' />
          </button>
        </div>

        <div className='max-h-[calc(85vh-60px)] overflow-y-auto overscroll-contain md:max-h-[calc(90vh-60px)]'>
          <div className='p-4 max-md:mb-24 md:p-6'>
            {project.image && (
              <div className='relative mb-4 h-48 w-full overflow-hidden border border-border md:mb-6 md:h-64'>
                <Image
                  src={sanityToNextImg(project.image)}
                  alt={project.title}
                  fill
                  className='object-contain'
                />
              </div>
            )}

            <div className='mb-4 md:mb-6'>
              <div className='mb-2 flex items-center gap-3'>
                <h4 className='text-xl font-medium md:text-2xl'>
                  {project.title}
                </h4>
                {project.category && (
                  <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium capitalize text-primary'>
                    {project.category}
                  </span>
                )}
              </div>
              <p className='text-sm text-muted-foreground md:text-base'>
                {project.subtitle}
              </p>
            </div>

            <p className='mb-4 text-sm leading-relaxed text-muted-foreground md:mb-6 md:text-base'>
              {project.description}
            </p>

            {project.impact && project.impact.length > 0 && (
              <div className='mb-4 border-b border-border pb-4 md:mb-6 md:pb-6'>
                <h5 className='mb-3 text-xs font-medium uppercase tracking-wider md:text-sm'>
                  Impact
                </h5>
                <ul className='space-y-2'>
                  {project.impact.map((imp, key) => (
                    <li
                      key={key}
                      className='flex items-start gap-3 text-sm text-muted-foreground'
                    >
                      <span className='mt-1 text-blue-600 dark:text-blue-400'>
                        •
                      </span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className='mb-6'>
              <h5 className='mb-3 text-xs font-medium uppercase tracking-wider md:text-sm'>
                Tech Stack
              </h5>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech) => (
                  <Badge key={tech._id} classNames='px-2 md:px-3 text-xs'>
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-3 border-t border-border pt-4 md:pt-6'>
              {project.link && (
                <Link
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center gap-2 border border-primary bg-primary px-6 py-3 text-sm text-primary-foreground transition-colors hover:bg-primary/90 md:text-base'
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
                  className='inline-flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm transition-colors hover:bg-muted md:text-base'
                >
                  <GithubIcon className='h-4 w-4' />
                  View Source Code
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
