import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const AnchorSpan = styled.span`
  display: inline-flex;
  padding: 3px 2px;
`

const Anchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  text-transform: capitalize;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 2px;
    background-color: ${({ theme }) => theme.text};
    margin-top: 8px;
  }
`

const StyledAnchor: FC<{ children: ReactNode; href: string }> = ({
  children,
  href,
}) => {
  return (
    <AnchorSpan>
      <Anchor href={href}>{children}</Anchor>
    </AnchorSpan>
  )
}

export default StyledAnchor
