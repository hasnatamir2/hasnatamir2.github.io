import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { personalInfo } from '../lib/data'

const Footer = () => {
  return (
    <footer className='border-t border-gray-800 px-16 py-12'>
      <div className='mx-auto max-w-6xl'>
        <div className='flex items-center justify-between'>
          <div className='text-sm text-gray-500'>
            © {new Date().getFullYear()} Hasnat Amir. All rights reserved.
          </div>
          <div className='flex gap-6'>
            <div className='flex items-center gap-4'>
              <Link
                href={personalInfo.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 hover:text-blue-400 transition-colors'
                aria-label='GitHub'
              >
                <Github className='h-5 w-5' />
              </Link>
              <Link
                href={personalInfo.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 hover:text-blue-400 transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin className='h-5 w-5' />
              </Link>
              <Link
                href={`mailto:${personalInfo.email}`}
                className='text-gray-500 hover:text-blue-400 transition-colors'
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
