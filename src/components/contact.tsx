'use client'

import { useRef, useState } from 'react'
import { AlertCircle, Check, Send } from 'lucide-react'
import type { PersonalInfo } from '../types/content'
import Link from 'next/link'

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

  return (
    <section
      id='contact'
      className='flex justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24'
    >
      <div className='w-full max-w-3xl'>
        <div className='mb-8 sm:mb-10'>
          <p className='text-xs font-light uppercase tracking-wider text-blue-600 dark:text-blue-400 sm:text-sm'>
            GET IN TOUCH
          </p>
          <h2 className='mb-4 mt-3 text-3xl font-light sm:mb-6 sm:mt-4 sm:text-4xl lg:text-5xl'>
            Let's work together.
          </h2>
          <p className='text-base font-light text-muted-foreground sm:text-lg lg:text-xl'>
            Have a project in mind or a role to discuss? Send me a message.
          </p>
        </div>

        <div className='border border-border p-5 sm:p-8'>
          <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
            <p className='flex flex-wrap items-baseline gap-x-2 text-sm text-muted-foreground'>
              <span>Prefer email?</span>
              <Link
                href={`mailto:${personalInfo.email}`}
                className='inline-flex min-h-[44px] items-center break-all text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
              >
                {personalInfo.email}
              </Link>
            </p>

            <div className='grid gap-6 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='name'
                  className='mb-2 block text-sm text-muted-foreground'
                >
                  Your Name
                </label>
                <input
                  id='name'
                  name='name'
                  autoComplete='name'
                  placeholder='Your name'
                  required
                  disabled={status === 'loading'}
                  className='w-full border border-border bg-transparent px-4 py-3 text-base focus:border-primary focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary disabled:opacity-60'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm text-muted-foreground'
                >
                  Your Email
                </label>
                <input
                  id='email'
                  type='email'
                  name='email'
                  autoComplete='email'
                  placeholder='your@email.com'
                  required
                  disabled={status === 'loading'}
                  className='w-full border border-border bg-transparent px-4 py-3 text-base focus:border-primary focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary disabled:opacity-60'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='projectType'
                className='mb-2 block text-sm text-muted-foreground'
              >
                Inquiry Type
              </label>

              <div className='relative'>
                <select
                  id='projectType'
                  name='projectType'
                  required
                  disabled={status === 'loading'}
                  className='w-full appearance-none border border-border bg-transparent px-4 py-3 pr-10 text-base font-normal leading-6 text-foreground transition-colors focus:border-primary focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary disabled:opacity-60'
                >
                  <option value='' className='bg-background text-foreground'>
                    Select inquiry type
                  </option>
                  <option
                    value='project'
                    className='bg-background text-foreground'
                  >
                    Project
                  </option>
                  <option
                    value='job-opportunity'
                    className='bg-background text-foreground'
                  >
                    Hiring
                  </option>
                  <option
                    value='consulting'
                    className='bg-background text-foreground'
                  >
                    Consulting
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
                id='message'
                name='message'
                rows={6}
                placeholder='Tell me about your project or the role you have in mind...'
                required
                disabled={status === 'loading'}
                className='w-full resize-none border border-border bg-transparent px-4 py-3 text-base focus:border-primary focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary disabled:opacity-60'
              />
            </div>

            {status === 'success' && (
              <div
                role='alert'
                className='flex items-center gap-3 border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400'
              >
                <Check className='h-5 w-5' />
                <p className='text-sm'>
                  Message sent successfully. I will get back to you soon.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div
                role='alert'
                className='flex items-center gap-3 border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400'
              >
                <AlertCircle className='h-5 w-5' />
                <p className='text-sm'>
                  {errorMessage || 'Failed to send message. Please try again.'}
                </p>
              </div>
            )}

            <button
              type='submit'
              disabled={status === 'loading'}
              className='flex w-full items-center justify-center gap-2 bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto'
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
