'use client'

import { useEffect, useState, useRef } from 'react'

export default function DotCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const requestRef = useRef<number>()

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick !== null ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'

      setIsPointer(isClickable)
    }

    const animate = () => {
      setPosition({ x: mouseX, y: mouseY })

      setDotPosition((prev) => ({
        x: prev.x + (mouseX - prev.x) * 0.15,
        y: prev.y + (mouseY - prev.y) * 0.15,
      }))

      requestRef.current = requestAnimationFrame(animate)
    }

    const hideCursor = () => setIsHidden(true)
    const showCursor = () => setIsHidden(false)

    window.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseleave', hideCursor)
    document.addEventListener('mouseenter', showCursor)

    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseleave', hideCursor)
      document.removeEventListener('mouseenter', showCursor)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      <div
        className='pointer-events-none fixed left-0 top-0 z-[9998]'
        style={{
          transform: `translate(${dotPosition.x}px, ${dotPosition.y}px)`,
          opacity: isHidden ? 0 : 0.6,
        }}
      >
        <div
          className={`
            h-10 w-10 -translate-x-1/2 -translate-y-1/2
            rounded-full border border-blue-400/50
            transition-all duration-300
            ${isPointer ? 'scale-150 border-blue-400' : 'scale-100'}
          `}
        />
      </div>

      <div
        className='pointer-events-none fixed left-0 top-0 z-[9999]'
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isHidden ? 0 : 1,
        }}
      >
        <div
          className={`
            h-2 w-2 -translate-x-1/2 -translate-y-1/2
            rounded-full
            transition-all duration-200
            ${isPointer ? 'scale-200 bg-blue-400' : 'scale-100 bg-blue-500'}
          `}
        />
      </div>
    </>
  )
}
