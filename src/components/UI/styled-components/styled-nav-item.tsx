import { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface NavItemProps {
  underline?: boolean
}

const NavItem = styled('a')<NavItemProps>`
  margin-left: 46px;
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  cursor: pointer;
  ${({ underline }) =>
    underline &&
    css`
      &::after {
        content: '';
        display: block;
        opacity: 0;
        width: 50%;
        height: 2px;
        background-color: ${({ theme }) => theme.text};
        margin-top: 8px;
        transition: 250ms ease;
      }
      &:hover {
        &::after {
          opacity: 1;
          transition: 250ms ease;
        }
      }
    `}
`

const StyledNavItem: FC<{
  children: ReactNode
  href?: string
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  underline?: boolean
}> = ({ children, href, className, onClick, underline = true }) => {
  return (
    <NavItem
      href={href}
      className={className}
      onClick={onClick}
      underline={underline}
      target="_blank"
    >
      {children}
    </NavItem>
  )
}

export default StyledNavItem
