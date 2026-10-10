'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import SectionLink from './section-link'
import { Menu, X, Moon, Sun } from 'lucide-react'
import type { PersonalInfo } from '../types/content'
import { useTheme } from 'next-themes'
import { TerminalLogo } from './logo'
import { GithubIcon, LinkedinIcon, EnvelopeIcon } from '@sanity/icons'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function MobileNav({
  personalInfo,
}: {
  personalInfo: PersonalInfo
}) {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!isMobile) {
    return null
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 lg:hidden '>
      <div className='border-t border-blue-500 bg-background/95 px-4 py-3 backdrop-blur-sm sm:px-6 sm:py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-sm font-medium tracking-wide'>
            <TerminalLogo size={40} className='h-10 w-10 shrink-0' />
            <div>
              <p className='text-sm'>{personalInfo.name}</p>
              <p className='text-xs text-gray-400'>{personalInfo.title}</p>
            </div>
          </div>
          <button
            type='button'
            onClick={() => setOpen((prev) => !prev)}
            className='inline-flex items-center gap-2 border border-border px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground'
            aria-expanded={open}
            aria-controls='mobile-nav-panel'
            aria-label={open ? 'Close' : 'Menu'}
          >
            {open ? (
              <>
                <X className='h-4 w-4' />
                <span className='hidden min-[360px]:inline'>Close</span>
              </>
            ) : (
              <>
                <Menu className='h-4 w-4' />
                <span className='hidden min-[360px]:inline'>Menu</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div
        id='mobile-nav-panel'
        className={`border-t border-border bg-background/95 px-4 backdrop-blur-sm transition-all duration-300 ${
          open
            ? 'visible max-h-[calc(100dvh-74px)] overflow-y-auto pb-6 pt-4 opacity-100'
            : 'invisible max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <nav className='grid grid-cols-2 gap-2'>
          {navLinks.map((link) => (
            <SectionLink
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className='border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground'
            >
              {link.name}
            </SectionLink>
          ))}
        </nav>

        <div className='mt-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Link
              href={personalInfo.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground transition-colors hover:text-foreground'
              aria-label='GitHub'
            >
              <GithubIcon className='h-6 w-6' />
            </Link>
            <Link
              href={personalInfo.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground transition-colors hover:text-foreground'
              aria-label='LinkedIn'
            >
              <LinkedinIcon className='h-6 w-6' />
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              className='text-muted-foreground transition-colors hover:text-foreground'
              aria-label='Email'
            >
              <EnvelopeIcon className='h-6 w-6' />
            </Link>
          </div>

          <button
            type='button'
            onClick={toggleTheme}
            className='inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground'
            aria-label='Toggle theme'
          >
            {resolvedTheme === 'dark' ? (
              <Moon className='h-4 w-4' />
            ) : (
              <Sun className='h-4 w-4' />
            )}
            Theme
          </button>
        </div>
      </div>
    </div>
  )
}
