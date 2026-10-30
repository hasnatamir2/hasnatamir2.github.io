'use client'

import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

type BottomSheetProps = {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  id?: string
  centerOnDesktop?: boolean
}

export default function BottomSheet({
  open,
  centerOnDesktop = false,
  ...props
}: BottomSheetProps) {
  const [isCentered, setIsCentered] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const updateLayout = () => setIsCentered(centerOnDesktop && query.matches)
    updateLayout()
    query.addEventListener('change', updateLayout)
    return () => query.removeEventListener('change', updateLayout)
  }, [centerOnDesktop])

  return (
    <AnimatePresence>
      {open && <BottomSheetDialog {...props} isCentered={isCentered} />}
    </AnimatePresence>
  )
}

function BottomSheetDialog({
  onClose,
  title,
  children,
  id,
  isCentered,
}: Omit<BottomSheetProps, 'open' | 'centerOnDesktop'> & {
  isCentered: boolean
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement
    dialog.showModal()
    document.body.style.overflow = 'hidden'

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      if (
        previouslyFocused instanceof HTMLElement &&
        previouslyFocused.isConnected
      ) {
        previouslyFocused.focus({ preventScroll: true })
      }
    }
  }, [])

  const closedPosition = {
    y: isCentered ? 24 : '100%',
    opacity: isCentered ? 0 : 1,
    scale: isCentered ? 0.96 : 1,
  }

  return (
    <motion.dialog
      ref={dialogRef}
      id={id}
      aria-labelledby={titleId}
      aria-modal='true'
      initial={reduceMotion ? false : closedPosition}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={reduceMotion ? undefined : closedPosition}
      transition={{
        duration: reduceMotion ? 0 : 0.24,
        ease: [0.22, 1, 0.36, 1],
      }}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return

        const focusable = Array.from(
          event.currentTarget.querySelectorAll<HTMLElement>(
            'a[href], button, input, select, textarea, [tabindex]'
          )
        ).filter(
          (element) =>
            element.tabIndex >= 0 &&
            !element.matches(':disabled') &&
            !element.closest('[inert]') &&
            element.getClientRects().length > 0
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        const bounds = event.currentTarget.getBoundingClientRect()
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        ) {
          onClose()
        }
      }}
      className={cn(
        'fixed inset-x-0 bottom-0 top-auto m-0 max-h-[85dvh] w-full max-w-none overflow-hidden border border-border bg-card p-0 text-foreground backdrop:bg-background/80 backdrop:backdrop-blur-sm',
        isCentered && 'inset-0 m-auto h-fit max-h-[90dvh] max-w-2xl'
      )}
    >
      <div className='flex max-h-[inherit] flex-col'>
        <div className='flex shrink-0 items-center justify-between gap-4 border-b border-border bg-card/95 px-4 py-3 sm:px-6 sm:py-4'>
          <h2
            id={titleId}
            className='text-sm font-medium uppercase tracking-wider sm:text-base'
          >
            {title}
          </h2>
          <button
            type='button'
            onClick={onClose}
            className='shrink-0 border border-border p-2 transition-colors hover:bg-muted'
            aria-label={`Close ${title.toLowerCase()}`}
          >
            <X className='h-4 w-4' />
          </button>
        </div>

        <div className='min-h-0 overflow-y-auto overscroll-contain px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-4 sm:px-6 sm:pt-6'>
          {children}
        </div>
      </div>
    </motion.dialog>
  )
}
