import React, { FC } from 'react'
import styled from 'styled-components'
import { topToBottom } from '../../../theme/transitions'

const RoundAnchor = styled.a`
  display: inline-flex;
  padding: 18px 23px;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.secondary}`};
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => `${theme.secondary}80`};
    background-color: ${({ theme }) => `${theme.secondary}80`};
    * {
      animation: ${topToBottom} 1s ease-in-out infinite;
    }
  }
`

const StyledRoundAnchor: FC<{
  children: React.ReactNode
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}> = ({ children, href, onClick }) => {
  return (
    <RoundAnchor href={href} onClick={onClick}>
      {children}
    </RoundAnchor>
  )
}

export default StyledRoundAnchor
