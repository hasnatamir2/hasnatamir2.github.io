import { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface AnchorProps {
  size?: 'sm' | 'md'
  underline?: boolean
}

const AnchorSpan = styled.span`
  display: inline-flex;
  padding: 3px 2px;
`

const Anchor = styled('a')<AnchorProps>`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: ${({ size }) => (size === 'sm' ? '14px' : '20px')};
  line-height: ${({ size }) => (size === 'sm' ? '20px' : '28px')};
  padding: 16px 8px;
  &:hover {
    color: ${({ theme }) => theme.text};
    /* background: linear-gradient(96.38deg, #8e54e9 0%, #e29587 99.81%); */
  }
  ${({ underline }) =>
    underline &&
    css`
      &::after {
        content: '';
        display: block;
        width: 50%;
        height: 2px;
        background-color: ${({ theme }) => theme.text};
        margin-top: 8px;
      }
    `}
`

const StyledAnchor: FC<{
  children: ReactNode
  href?: string
  size?: 'sm' | 'md'
  underline?: boolean
}> = ({ children, href, size = 'md', underline = true }) => {
  return (
    <AnchorSpan>
      <Anchor href={href} size={size} underline={underline}>
        {children}
      </Anchor>
    </AnchorSpan>
  )
}

export default StyledAnchor
