import { FC, MouseEvent } from 'react'
// import HaSvg from '../../assets/images/HA.svg'
import HeaderLogo from '../icons/header-logo'
import ScrollTo from '../../utils/scrollTo'

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
        <a href="#hero" className="nav-item" onClick={scrollToTop}>
          <HeaderLogo />
        </a>
      </div>
      <div className="navbar-links">
        <a href="#portfolio" className="nav-item" onClick={ScrollTo}>
          Portfolio
        </a>
        <a href="#skills" className="nav-item" onClick={ScrollTo}>
          Skills
        </a>
        <a href="#contact" className="nav-item" onClick={ScrollTo}>
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
