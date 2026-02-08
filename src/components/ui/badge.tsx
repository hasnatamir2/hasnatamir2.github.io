import { cn } from '@/src/lib/utils'
import { CSSProperties } from 'react'

const Badge = ({
  text,
  classNames,
}: {
  text: string
  classNames?: string
  styles?: CSSProperties
}) => {
  return (
    <span
      className={cn(
        'border border-blue-600/20 bg-blue-600/10 text-blue-600 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-400 px-3 py-1 text-xs',
        classNames
      )}
    >
      {text}
    </span>
  )
}

export default Badge
