'use client'

import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef(0)
  const targetRef = useRef(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const updateTarget = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      targetRef.current = docHeight > 0 ? scrollTop / docHeight : 0
    }

    const animate = () => {
      progressRef.current += (targetRef.current - progressRef.current) * 0.15

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progressRef.current})`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('scroll', updateTarget, { passive: true })
    updateTarget()
    animate()

    return () => {
      window.removeEventListener('scroll', updateTarget)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className='fixed left-0 right-0 top-0 z-50 h-1 overflow-hidden bg-border/30'>
      <div
        ref={barRef}
        className='h-full origin-left bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
