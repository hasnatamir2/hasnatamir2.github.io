interface LogoProps {
  variant?: 'terminal' | 'brackets' | 'favicon'
  size?: number
  className?: string
}

export default function Logo({
  variant = 'terminal',
  size = 120,
  className = '',
}: LogoProps) {
  if (variant === 'brackets') {
    return (
      <svg
        width={size}
        height={(size * 100) / 140}
        viewBox='0 0 140 100'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        {/* Left Bracket */}
        <path
          d='M20 20 L10 20 L10 80 L20 80'
          stroke='#3b82f6'
          strokeWidth='4'
          strokeLinecap='round'
          fill='none'
        />

        {/* HA Text */}
        <text
          x='70'
          y='62'
          fontFamily='monospace'
          fontSize='36'
          fill='currentColor'
          fontWeight='bold'
          textAnchor='middle'
        >
          HA
        </text>

        {/* Right Bracket */}
        <path
          d='M120 20 L130 20 L130 80 L120 80'
          stroke='#60a5fa'
          strokeWidth='4'
          strokeLinecap='round'
          fill='none'
        />

        {/* Dots */}
        <circle cx='70' cy='20' r='3' fill='#3b82f6' />
        <circle cx='70' cy='80' r='3' fill='#60a5fa' />
      </svg>
    )
  }

  if (variant === 'terminal') {
    return (
      <svg
        width={size}
        height={(size * 100) / 140}
        viewBox='0 0 140 80'
        fill='none'
        className={className}
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='2'
          y='2'
          width='136'
          height='76'
          rx='8'
          stroke='#3b82f6'
          strokeWidth='2'
        />

        <circle cx='15' cy='15' r='3' fill='#ef4444' />
        <circle cx='27' cy='15' r='3' fill='#f59e0b' />
        <circle cx='39' cy='15' r='3' fill='#10b981' />

        <text
          x='15'
          y='45'
          fontFamily='monospace'
          fontSize='18'
          fill='#3b82f6'
          fontWeight='bold'
        >
          &gt; HA_
        </text>

        <rect x='70' y='32' width='2' height='18' fill='#3b82f6'>
          <animate
            attributeName='opacity'
            values='1;0;1'
            dur='1s'
            repeatCount='indefinite'
          />
        </rect>
      </svg>
    )
  }

  // Favicon variant
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect width='64' height='64' rx='12' fill='#0f0f0f' />

      {/* H */}
      <path
        d='M16 16 L16 48 M16 32 L28 32 M28 16 L28 48'
        stroke='#3b82f6'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />

      {/* A */}
      <path
        d='M34 48 L40 16 L46 48 M36 34 L44 34'
        stroke='#60a5fa'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
