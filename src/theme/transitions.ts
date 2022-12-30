import { keyframes } from 'styled-components'

const topToBottom = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
    transform: translateY(-30px);
  }
  15% {
    opacity: 1;
    transform: translateY(0px);
  }
  35% {
    opacity: 1;
    transform: translateY(0px);
  }
  50% {
    opacity: 0;
    transform: translateY(30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

export { topToBottom }
