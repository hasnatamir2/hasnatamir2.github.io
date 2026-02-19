'use client'

import { useRef, useState } from 'react'
import { AlertCircle, Check, Send } from 'lucide-react'
import type { PersonalInfo } from '../types/content'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon, EnvelopeIcon } from '@sanity/icons'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact({
  personalInfo,
}: {
  personalInfo: PersonalInfo
}) {
  const formRef = useRef<HTMLFormElement>(null)

  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (status === 'loading') return

    setStatus('loading')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      formRef.current?.reset()

      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong'
      )

      setTimeout(() => {
        setStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  const linkedinUsername =
    personalInfo.linkedin.split('/').filter(Boolean).pop() || 'linkedin'
  const githubUsername =
    personalInfo.github.split('/').filter(Boolean).pop() || 'github'

  return (
    <section
      id='contact'
      className='section-fade visible flex min-h-screen items-center justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24'
    >
      <div className='w-full max-w-3xl'>
        <div className='mb-12 text-center sm:mb-16'>
          <p className='text-xs font-light uppercase tracking-wider text-blue-600 dark:text-blue-400 sm:text-sm'>
            GET IN TOUCH
          </p>
          <h3 className='mb-4 mt-3 text-3xl font-light sm:mb-6 sm:mt-4 sm:text-4xl lg:text-5xl'>
            Let's Build Something Great
          </h3>
          <p className='text-base font-light text-muted-foreground sm:text-lg lg:text-xl'>
            I'm currently available for select projects and consulting
            opportunities
          </p>
        </div>

        <div className='mb-10 grid grid-cols-1 gap-4 sm:mb-14 sm:grid-cols-2 sm:gap-6 lg:mb-16 lg:grid-cols-3 lg:gap-8'>
          <Link
            href={`mailto:${personalInfo.email}`}
            className='group border border-border p-5 text-center transition-colors hover:border-primary sm:p-6'
          >
            <div
              className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border 
              border-blue-600/20 bg-blue-600/10 transition-colors group-hover:bg-blue-600/20 
              dark:border-blue-400/20 dark:bg-blue-400/10 dark:group-hover:bg-blue-400/20'
            >
              <EnvelopeIcon className='h-7 w-7 text-xl text-blue-600 dark:text-blue-400' />
            </div>
            <div className='text-sm text-muted-foreground'>Email</div>
            <div className='mt-1 text-sm font-medium'>{personalInfo.email}</div>
          </Link>

          <Link
            href={personalInfo.linkedin}
            className='group border border-border p-5 text-center transition-colors hover:border-primary sm:p-6'
          >
            <div
              className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border 
              border-blue-600/20 bg-blue-600/10 transition-colors group-hover:bg-blue-600/20 
              dark:border-blue-400/20 dark:bg-blue-400/10 dark:group-hover:bg-blue-400/20'
            >
              <LinkedinIcon className=' h-7 w-7 text-xl text-blue-600 dark:text-blue-400' />
            </div>
            <div className='text-sm text-muted-foreground'>LinkedIn</div>
            <div className='mt-1 text-sm font-medium'>
              in/{linkedinUsername}
            </div>
          </Link>

          <Link
            href={personalInfo.github}
            className='group border border-border p-5 text-center transition-colors hover:border-primary sm:p-6'
          >
            <div
              className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border 
              border-blue-600/20 bg-blue-600/10 transition-colors group-hover:bg-blue-600/20 
                dark:border-blue-400/20 dark:bg-blue-400/10 dark:group-hover:bg-blue-400/20'
            >
              <GithubIcon className=' h-7 w-7 text-xl text-blue-600 dark:text-blue-400' />
            </div>
            <div className='text-sm text-muted-foreground'>GitHub</div>
            <div className='mt-1 text-sm font-medium'>
              github.com/{githubUsername}
            </div>
          </Link>
        </div>

        <div className='border border-border p-6 sm:p-10 lg:p-12'>
          <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='name'
                className='mb-2 block text-sm text-muted-foreground'
              >
                Your Name
              </label>
              <input
                name='name'
                placeholder='Your name'
                required
                disabled={status === 'loading'}
                className='w-full border border-border bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none disabled:opacity-60 sm:text-base'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='mb-2 block text-sm text-muted-foreground'
              >
                Your Name
              </label>
              <input
                type='email'
                name='email'
                placeholder='your@email.com'
                required
                disabled={status === 'loading'}
                className='w-full border border-border bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none disabled:opacity-60 sm:text-base'
              />
            </div>

            <div>
              <label
                htmlFor='projectType'
                className='mb-2 block text-sm text-muted-foreground'
              >
                Project Type
              </label>

              <div className='relative'>
                <select
                  id='projectType'
                  name='projectType'
                  required
                  disabled={status === 'loading'}
                  className='w-full appearance-none border border-border bg-transparent px-4 py-3 pr-10 text-sm font-normal leading-6 text-foreground transition-colors focus:border-primary focus:outline-none disabled:opacity-60 sm:text-base'
                >
                  <option value='' className='bg-background text-foreground'>
                    Select project type
                  </option>
                  <option
                    value='job-opportunity'
                    className='bg-background text-foreground'
                  >
                    Software Development Job
                  </option>
                  <option
                    value='web-app'
                    className='bg-background text-foreground'
                  >
                    Web Application
                  </option>
                  <option
                    value='mobile-app'
                    className='bg-background text-foreground'
                  >
                    Mobile Application
                  </option>
                  <option value='api' className='bg-background text-foreground'>
                    API Development
                  </option>
                  <option
                    value='consulting'
                    className='bg-background text-foreground'
                  >
                    Technical Consulting
                  </option>
                  <option
                    value='other'
                    className='bg-background text-foreground'
                  >
                    Other
                  </option>
                </select>

                <div className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground'>
                  <svg
                    className='h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor='message'
                className='mb-2 block text-sm text-muted-foreground'
              >
                Message
              </label>
              <textarea
                name='message'
                rows={6}
                placeholder='Tell me about your project...'
                required
                disabled={status === 'loading'}
                className='w-full resize-none border border-border bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none disabled:opacity-60 sm:text-base'
              />
            </div>

            {status === 'success' && (
              <div className='flex items-center gap-3 border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400'>
                <Check className='h-5 w-5' />
                <p className='text-sm'>
                  Message sent successfully. I will get back to you soon.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className='flex items-center gap-3 border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400'>
                <AlertCircle className='h-5 w-5' />
                <p className='text-sm'>
                  {errorMessage || 'Failed to send message. Please try again.'}
                </p>
              </div>
            )}

            <button
              type='submit'
              disabled={status === 'loading'}
              className='flex w-full items-center justify-center gap-2 bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:px-8 sm:py-4 sm:text-base'
            >
              {status === 'loading' ? (
                <>
                  <div className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent' />
                  Sending...
                </>
              ) : (
                <>
                  <Send className='h-5 w-5' />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
