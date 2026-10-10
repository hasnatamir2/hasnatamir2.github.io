import Image from 'next/image'
import { ArrowUp } from 'lucide-react'
import type { PersonalInfo } from '../types/content'
import SectionLink from './section-link'

const Footer = ({ personalInfo }: { personalInfo: PersonalInfo }) => {
  return (
    <footer className='portfolio-footer'>
      <div className='portfolio-footer-artwork' aria-hidden='true'>
        <Image
          src='/images/footer-workbench.webp'
          alt=''
          fill
          sizes='(min-width: 1024px) calc(100vw - 288px), 100vw'
          className='object-contain'
        />
      </div>
      <div className='portfolio-footer-fade' aria-hidden='true' />
      <div className='portfolio-footer-caption'>
        <div className='mx-auto flex max-w-3xl items-center justify-between gap-4'>
          <p className='text-xs sm:text-sm'>
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <SectionLink
            href='#home'
            className='inline-flex min-h-[44px] shrink-0 items-center gap-2 text-xs transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-sm'
          >
            Back to top
            <ArrowUp className='h-4 w-4' aria-hidden='true' />
          </SectionLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
