import { cn } from '@/src/lib/utils'
import { CSSProperties, ReactNode } from 'react'

const Badge = ({
  children,
  classNames,
}: {
  classNames?: string
  styles?: CSSProperties
  children: ReactNode
}) => {
  return (
    <span
      className={cn(
        'border border-blue-600/20 bg-blue-600/10 text-blue-600 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-400 px-3 py-1 text-xs flex items-center',
        classNames
      )}
    >
      {children}
    </span>
  )
}

export default Badge
