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
        'border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400',
        classNames
      )}
    >
      {text}
    </span>
  )
}

export default Badge
