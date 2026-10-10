'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'

type SectionLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string
}

export default function SectionLink({
  href,
  onClick,
  ...props
}: SectionLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      onClick={(event) => {
        onClick?.(event)
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          !href.startsWith('#') ||
          window.location.hash !== href
        )
          return

        const section = document.getElementById(href.slice(1))
        if (!section) return

        // Next.js can skip scrolling when the current URL already has this hash.
        event.preventDefault()
        section.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)')
            .matches
            ? 'instant'
            : 'smooth',
          block: 'start',
        })
      }}
    />
  )
}
