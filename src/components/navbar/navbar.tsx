import { FC, MouseEvent } from 'react'
// import HaSvg from '../../assets/images/HA.svg'
import HeaderLogo from '../icons/header-logo'
import ScrollTo from '../../utils/scrollTo'
import { StyledAnchor, StyledNavItem } from '../UI/styled-components'

const Navbar: FC = () => {
  const scrollToTop = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#hero" onClick={scrollToTop}>
          <HeaderLogo />
        </a>
      </div>
      <div className="navbar-links">
        <StyledNavItem onClick={() => ScrollTo('#portfolio')}>
          Portfolio
        </StyledNavItem>
        <StyledNavItem onClick={() => ScrollTo('#skills')}>
          Skills
        </StyledNavItem>
        <StyledNavItem onClick={() => ScrollTo('#contact')}>
          Contact
        </StyledNavItem>
        <StyledNavItem
          underline={false}
          href={
            'https://drive.google.com/file/d/1mCzbiCb007_q9CVNEbh1ClC2YR1Kk_bU/view?usp=share_link'
          }
        >
          <StyledAnchor>Resume</StyledAnchor>
        </StyledNavItem>
      </div>
    </nav>
  )
}

export default Navbar
