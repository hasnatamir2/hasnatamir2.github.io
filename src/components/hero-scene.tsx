'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { startHeroMotion } from './hero-motion'
import styles from './hero.module.css'

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
    <div className={styles.interactive} data-paused={paused}>
      <div className={styles.topline}>
        {availability ? (
          <p className={styles.availability}>
            <i aria-hidden='true' />
            {availability}
          </p>
        ) : (
          <span />
        )}
        <button
          type='button'
          className={styles.motionToggle}
          aria-pressed={paused}
          onClick={() => motionRef.current?.toggle()}
        >
          {paused ? playLabel : pauseLabel}
        </button>
      </div>
      <div ref={sceneRef} className={styles.scene}>
        <canvas ref={canvasRef} className={styles.routing} aria-hidden='true' />
        {children}
        <div className={styles.agentZone}>
          <div ref={avatarRef} className={styles.personalAgent}>
            <div ref={tiltRef} className={styles.avatarTilt}>
              {artwork}
              {artwork ? (
                <span className={styles.eyes} aria-hidden='true'>
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
