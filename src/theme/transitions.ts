import { keyframes } from 'styled-components'

const topToBottom = keyframes`
  0% {
    transform: translateY(0%);
  }

  52% {
    transform: translateY(200%);
  }

  59% {
    opacity: 0;
    transform: translateY(-200%);
  }
`

export { topToBottom }
