'use client'

import { useState, useRef, useEffect } from 'react'
import { MapPin, ChevronDown, GraduationCap } from 'lucide-react'
import type { Experience } from '../types/content'
import { cn } from '../lib/utils'
import Badge from './ui/badge'

export default function Experience({
  experiences,
}: {
  experiences: Experience[]
}) {
  const [expandedId, setExpandedId] = useState<string | number | null>(null)
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const [heights, setHeights] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const newHeights: { [key: string]: number } = {}
    Object.keys(contentRefs.current).forEach((key) => {
      const element = contentRefs.current[key]
      if (element) {
        newHeights[key] = element.scrollHeight
      }
    })
    setHeights(newHeights)
  }, [experiences])

  const handleToggle = (expId: string | number) => {
    setExpandedId(expandedId === expId ? null : expId)
  }

  return (
    <section
      id='experience'
      className='section-fade visible min-h-screen px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24'
    >
      <div className='max-w-4xl'>
        <div className='mb-12 sm:mb-16'>
          <p className='text-xs font-light uppercase tracking-wider text-blue-600 dark:text-blue-400 sm:text-sm'>
            CAREER PATH
          </p>
          <h3 className='mb-3 mt-3 text-3xl font-light sm:mb-4 sm:mt-4 sm:text-4xl'>
            Experience
          </h3>
          <p className='text-sm font-light text-muted-foreground sm:text-base'>
            Progressive growth from junior to technical leadership
          </p>
        </div>

        <div className='space-y-0'>
          {experiences.map((exp, index) => {
            const expId = exp._id ?? exp.id ?? index
            const isExpanded = expandedId === expId
            const isLast = index === experiences.length - 1

            return (
              <div
                key={expId}
                className='relative pb-10 pl-8 sm:pb-12 sm:pl-12'
              >
                {!isLast && (
                  <div className='absolute bottom-0 left-[6px] top-2 w-px bg-border' />
                )}

                <div
                  className={cn(
                    'absolute left-0 top-0 h-3 w-3 rounded-full border-2 transition-all duration-300',
                    index === 0
                      ? 'border-primary bg-primary shadow-lg shadow-primary/50'
                      : isExpanded
                      ? 'scale-125 border-primary bg-primary/20'
                      : 'border-muted-foreground bg-muted-foreground'
                  )}
                />

                <div
                  className={cn(
                    'transition-all duration-300',
                    isExpanded
                      ? 'border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card shadow-lg shadow-primary/5'
                      : 'border border-transparent bg-card/50 hover:border-border hover:shadow-md'
                  )}
                >
                  <button
                    onClick={() => handleToggle(expId)}
                    className='group w-full p-4 text-left sm:p-5'
                  >
                    <div className='flex items-start justify-between gap-4'>
                      <div className='min-w-0 flex-1'>
                        <div className='mb-2 font-mono text-sm text-primary'>
                          {exp.year}
                        </div>

                        <div className='mb-2 flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4'>
                          <div className='min-w-0 flex-1'>
                            <h3 className='mb-1 flex items-center gap-2 text-lg font-medium transition-colors group-hover:text-primary sm:text-xl'>
                              {exp.role}
                              {isLast && (
                                <GraduationCap
                                  className='h-6 w-6 text-primary'
                                  strokeWidth={2.25}
                                />
                              )}
                            </h3>

                            <p className='text-sm text-muted-foreground sm:text-base'>
                              {exp.company}
                            </p>
                          </div>

                          <div className='flex shrink-0 flex-col items-start gap-2 text-sm text-muted-foreground sm:items-end'>
                            <span className='flex items-center gap-1 text-xs sm:text-sm'>
                              <MapPin className='h-3 w-3 sm:h-4 sm:w-4' />{' '}
                              {exp.location}
                            </span>
                            <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className='mt-1 flex-shrink-0'>
                        <ChevronDown
                          className={cn(
                            'h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:text-primary',
                            isExpanded && 'rotate-180 text-primary'
                          )}
                        />
                      </div>
                    </div>
                  </button>

                  <div
                    style={{
                      maxHeight: isExpanded ? `${heights[expId]}px` : '0px',
                    }}
                    className={cn(
                      'overflow-hidden transition-all duration-500 ease-in-out',
                      isExpanded ? 'opacity-100' : 'opacity-0'
                    )}
                  >
                    <div
                      ref={(el) => {
                        contentRefs.current[expId] = el
                      }}
                      className='border-t border-border/50 px-4 pb-5 sm:px-5 sm:pb-6'
                    >
                      <p className='mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base'>
                        {exp.description}
                      </p>

                      {exp.responsibilities && (
                        <div className='mt-6'>
                          <div className='mb-3 flex items-center gap-2'>
                            <div className='h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent'></div>
                            <p className='text-xs font-medium uppercase tracking-wider text-foreground'>
                              Key Responsibilities
                            </p>
                            <div className='h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent'></div>
                          </div>
                          <ul className='space-y-2.5'>
                            {exp.responsibilities.map((responsibility, i) => (
                              <li
                                key={i}
                                className='flex items-start gap-3 text-sm font-light leading-relaxed text-foreground/80 sm:text-base'
                              >
                                <span className='mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary'></span>
                                <span className='flex-1'>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {exp.achievements && (
                        <div className='mt-6'>
                          <div className='mb-3 flex items-center gap-2'>
                            <div className='h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent'></div>
                            <p className='text-xs font-medium uppercase tracking-wider text-foreground'>
                              Impact
                            </p>
                            <div className='h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent'></div>
                          </div>
                          <ul className='space-y-2.5'>
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className='flex items-start gap-3 text-sm font-light leading-relaxed text-foreground/80 sm:text-base'
                              >
                                <span className='mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary'></span>
                                <span className='flex-1'>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {exp.technologies?.length ? (
                        <div className='mt-6 border-t border-border/30 pt-4'>
                          <p className='mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground'>
                            Tech Stack
                          </p>
                          <div className='flex flex-wrap gap-2'>
                            {exp.technologies.map((tech) => (
                              <Badge key={tech._id} classNames='text-xs'>
                                {tech.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
