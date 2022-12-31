import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface AnchorProps {
  size?: 'sm' | 'md'
  underline?: boolean
}

const AnchorSpan = styled.span`
  display: inline-flex;
`

const Anchor = styled('a')<AnchorProps>`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: ${({ size }) => (size === 'sm' ? '14px' : '20px')};
  line-height: ${({ size }) => (size === 'sm' ? '20px' : '28px')};
  padding: 16px 8px;
  border-radius: 4px;
  transition: 250ms ease;
  text-transform: capitalize;

  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 0px;
    background: ${({ theme }) => theme.text};
    margin-top: 8px;
    transition: 250ms ease;
    position: relative;
    transform: rotatex(180deg);
    transform-origin: top;
    padding: 1px;
    left: 0px;
  }
  &:hover {
    color: ${({ theme }) => theme.text};
    &::after {
      width: 105%;
      height: 100%;
      background: linear-gradient(96.38deg, #8e54e9 0%, #e29587 99.81%);
      transition: 250ms ease;
      z-index: -1;
      border-radius: 4px;
      left: -4px;
    }
  }
`

const StyledAnchor: FC<{
  children: ReactNode
  href?: string
  size?: 'sm' | 'md'
  underline?: boolean
}> = ({ children, href, size = 'md', underline = true }) => {
  return (
    <AnchorSpan>
      <Anchor href={href} size={size} underline={underline} target="_blank">
        {children}
      </Anchor>
    </AnchorSpan>
  )
}

export default StyledAnchor
