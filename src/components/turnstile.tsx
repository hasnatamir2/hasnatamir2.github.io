'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { TURNSTILE_CONTACT_ACTION, TURNSTILE_SITE_KEY } from '../lib/turnstile'

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string
      action: string
      theme: 'light' | 'dark'
      size: 'compact' | 'flexible'
      callback: (token: string) => void
      'expired-callback': () => void
      'error-callback': () => void
      'timeout-callback': () => void
    }
  ) => string
  reset: (widgetId: string) => void
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

export default function Turnstile({
  onTokenChange,
  resetCount,
}: {
  onTokenChange: (token: string) => void
  resetCount: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const [ready, setReady] = useState(false)
  const [compact, setCompact] = useState(true)
  const [error, setError] = useState('')
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new ResizeObserver(([entry]) => {
      setCompact(entry.contentRect.width < 300)
    })
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const turnstile = window.turnstile
    if (!ready || !turnstile || !containerRef.current) return

    onTokenChange('')
    setError('')

    const widgetId = turnstile.render(containerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      action: TURNSTILE_CONTACT_ACTION,
      theme: resolvedTheme === 'dark' ? 'dark' : 'light',
      size: compact ? 'compact' : 'flexible',
      callback: (token) => {
        onTokenChange(token)
        setError('')
      },
      'expired-callback': () => {
        onTokenChange('')
        setError('Verification expired. Please verify again.')
      },
      'error-callback': () => {
        onTokenChange('')
        setError('Verification failed. Please try again.')
      },
      'timeout-callback': () => {
        onTokenChange('')
        setError('Verification timed out. Please try again.')
      },
    })
    widgetIdRef.current = widgetId

    return () => {
      turnstile.remove(widgetId)
      widgetIdRef.current = null
      onTokenChange('')
    }
  }, [ready, compact, resolvedTheme, onTokenChange])

  useEffect(() => {
    if (widgetIdRef.current !== null) {
      onTokenChange('')
      setError('')
      window.turnstile?.reset(widgetIdRef.current)
    }
  }, [resetCount, onTokenChange])

  return (
    <div className='min-w-0 space-y-2'>
      <Script
        id='cloudflare-turnstile'
        src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
        strategy='afterInteractive'
        onReady={() => setReady(true)}
        onError={() => {
          onTokenChange('')
          setError(
            'Verification could not load. Reload the page or use the email link above.'
          )
        }}
      />
      <div
        ref={containerRef}
        data-sitekey={TURNSTILE_SITE_KEY}
        data-action={TURNSTILE_CONTACT_ACTION}
        aria-label='Human verification'
      />
      {error && (
        <p role='alert' className='text-sm text-red-600 dark:text-red-400'>
          {error}
        </p>
      )}
    </div>
  )
}
