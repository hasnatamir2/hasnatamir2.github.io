import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(
    112.83deg,
    rgba(0, 0, 0, 0.6) 3.66%,
    rgba(0, 0, 0, 0.1) 100%
  );
  backdrop-filter: blur(25px);
  border-radius: 8px;
  fill: #f6f7f9;
  font-size: 24px;
  svg {
    transition: 250ms ease;
  }
  &:hover {
    svg {
      transform: scale(0.8);
      transition: 250ms ease;
    }
  }
`

const StyledSocialButton: FC<{
  children: ReactNode
  href?: string
}> = ({ children, href }) => {
  return (
    <SocialButton href={href} target="_blank">
      {children}
    </SocialButton>
  )
}

export default StyledSocialButton
