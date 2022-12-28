import { FC } from 'react'
// import HaSvg from '../../assets/images/HA.svg'
import HeaderLogo from '../icons/header-logo'

const Navbar: FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <HeaderLogo />
      </div>
      <div className="navbar-links">
        <a href="#work" className="nav-item">
          Work
        </a>
        <a href="#skills" className="nav-item">
          Skills
        </a>
        <a href="#contact" className="nav-item">
          Contact
        </a>
      </div>
    </div>
  )
}

export default Navbar
