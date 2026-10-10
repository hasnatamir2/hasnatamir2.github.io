'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Pause, Play } from 'lucide-react'
import { startHeroMotion } from './hero-motion'

export default function HeroScene({
  availability,
  pauseLabel,
  playLabel,
  artwork,
  children,
}: {
  availability?: string
  pauseLabel: string
  playLabel: string
  artwork: ReactNode
  children: ReactNode
}) {
  const sceneRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const tiltRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const motionRef = useRef<ReturnType<typeof startHeroMotion>>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const scene = sceneRef.current
    const avatar = avatarRef.current
    const tilt = tiltRef.current
    const field = canvasRef.current
    if (!scene || !avatar || !tilt || !field) return
    const motion = startHeroMotion({
      scene,
      avatar,
      tilt,
      field,
      onPausedChange: setPaused,
    })
    motionRef.current = motion
    return () => {
      motion?.destroy()
      motionRef.current = null
    }
  }, [])

  return (
    <div className='portfolio-hero-interactive' data-paused={paused}>
      <div className='portfolio-hero-topline'>
        {availability ? (
          <p className='portfolio-hero-availability'>
            <i aria-hidden='true' />
            {availability}
          </p>
        ) : (
          <span />
        )}
        <button
          type='button'
          className='portfolio-hero-motion-toggle'
          aria-label={paused ? playLabel : pauseLabel}
          title={paused ? playLabel : pauseLabel}
          aria-pressed={paused}
          onClick={() => motionRef.current?.toggle()}
        >
          {paused ? (
            <Play size={16} aria-hidden='true' />
          ) : (
            <Pause size={16} aria-hidden='true' />
          )}
          <span>motion</span>
        </button>
      </div>
      <div ref={sceneRef} className='portfolio-hero-scene'>
        <canvas
          ref={canvasRef}
          className='portfolio-hero-routing'
          aria-hidden='true'
        />
        {children}
        <div className='portfolio-hero-agent-zone'>
          <div ref={avatarRef} className='portfolio-hero-personal-agent'>
            <div ref={tiltRef} className='portfolio-hero-avatar-tilt'>
              {artwork}
              {artwork ? (
                <span className='portfolio-hero-eyes' aria-hidden='true'>
                  <i />
                  <i />
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
