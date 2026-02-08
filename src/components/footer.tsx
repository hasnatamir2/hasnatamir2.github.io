import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { personalInfo } from '../lib/data'

const Footer = () => {
  return (
    <footer className='border-t border-border px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-12'>
      <div className='mx-auto max-w-6xl'>
        <div className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
          <div className='text-xs text-muted-foreground sm:text-sm'>
            © {new Date().getFullYear()} Hasnat Amir. All rights reserved.
          </div>
          <div className='flex gap-6'>
            <div className='flex items-center gap-4'>
              <Link
                href={personalInfo.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors'
                aria-label='GitHub'
              >
                <Github className='h-5 w-5' />
              </Link>
              <Link
                href={personalInfo.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin className='h-5 w-5' />
              </Link>
              <Link
                href={`mailto:${personalInfo.email}`}
                className='text-muted-foreground hover:text-primary transition-colors'
                aria-label='Email'
              >
                <Mail className='h-5 w-5' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
