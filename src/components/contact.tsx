'use client'

import { useState } from 'react'
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          projectType: '',
          message: '',
        })
        setStatus('idle')
      }, 3000)
    } catch (error) {
      console.error(error)
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong'
      )

      setTimeout(() => {
        setStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

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
              <EnvelopeIcon className=' text-xl text-blue-600 dark:text-blue-400' />
            </div>
            <div className='text-sm text-muted-foreground'>Email</div>
            <div className='mt-1 text-sm font-medium'>{personalInfo.email}</div>
          </Link>

          <Link
            href={`mailto:${personalInfo.linkedin}`}
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
            <div className='mt-1 text-sm font-medium'>Connect</div>
          </Link>

          <Link
            href={`mailto:${personalInfo.github}`}
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
            <div className='mt-1 text-sm font-medium'>View Code</div>
          </Link>
        </div>

        <div className='border border-border p-6 sm:p-10 lg:p-12'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='name'
                  className='mb-2 block text-sm text-muted-foreground'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder='Your name'
                  className='w-full border border-border bg-transparent px-4 py-3 text-sm transition-colors 
                    focus:border-primary focus:outline-none sm:text-base'
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm text-muted-foreground'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder='your@email.com'
                  className='w-full border border-border bg-transparent px-4 py-3 text-sm transition-colors 
                    focus:border-primary focus:outline-none sm:text-base'
                  required
                  disabled={status === 'loading'}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='projectType'
                className='mb-2 block text-sm text-muted-foreground'
              >
                Project Type
              </label>
              <select
                id='projectType'
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                className='w-full appearance-none rounded-none border border-border bg-transparent px-4 py-3 
                  text-base focus:border-primary focus:outline-none disabled:opacity-60'
                required
                disabled={status === 'loading'}
              >
                <option value=''>Select project type</option>
                <option value='job-opportunity'>
                  Software Development Job
                </option>
                <option value='web-app'>Web Application</option>
                <option value='mobile-app'>Mobile Application</option>
                <option value='api'>API Development</option>
                <option value='consulting'>Technical Consulting</option>
                <option value='other'>Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor='message'
                className='mb-2 block text-sm text-muted-foreground'
              >
                Message
              </label>
              <textarea
                id='message'
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder='Tell me about your project...'
                rows={6}
                className='w-full resize-none border border-border bg-transparent px-4 py-3 text-sm 
                  transition-colors focus:border-primary focus:outline-none sm:text-base'
                required
                disabled={status === 'loading'}
              />
            </div>

            {status === 'success' && (
              <div
                className='flex items-center gap-3 border border-green-200 bg-green-50 p-4 
                text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400'
              >
                <Check className='h-5 w-5 flex-shrink-0' />
                <p className='text-sm'>
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div
                className='flex items-center gap-3 border border-red-200 bg-red-50 p-4 
                text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400'
              >
                <AlertCircle className='h-5 w-5 flex-shrink-0' />
                <p className='text-sm'>
                  {errorMessage || 'Failed to send message. Please try again.'}
                </p>
              </div>
            )}

            <button
              type='submit'
              disabled={status === 'loading' || status === 'success'}
              className='flex w-full items-center justify-center gap-2 bg-blue-600 px-6 py-3 text-sm 
                font-medium text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed 
                disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-base'
            >
              {status === 'loading' ? (
                <>
                  <div className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent' />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <Check className='h-5 w-5' />
                  Sent Successfully!
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
