import { FC } from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
