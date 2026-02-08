export const size = 32
export const contentType = 'image/png'

export default function Icon() {
  return (
    <svg
      width={size}
      height={(size * 100) / 140}
      viewBox='0 0 140 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='2'
        y='2'
        width='136'
        height='76'
        rx='8'
        stroke='#3b82f6'
        stroke-width='2'
      />

      <circle cx='15' cy='15' r='3' fill='#ef4444' />
      <circle cx='27' cy='15' r='3' fill='#f59e0b' />
      <circle cx='39' cy='15' r='3' fill='#10b981' />

      <text
        x='15'
        y='45'
        font-family='monospace'
        font-size='18'
        fill='#3b82f6'
        font-weight='bold'
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
