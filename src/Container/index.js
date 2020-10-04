import React from 'react'

import Header from './Header'
import LandingPage from './LandingPage'
import About from './AboutMe'
import OpenSource from './OpenSourceProjects'
import Projects from './Projects'
import Blogs from './Blogs'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'


const Main = () => {
    return(
        <>
            <Header/>
            <LandingPage/>
            <About/>
            <OpenSource/>
            <Projects/>
            <Blogs/>
            <Experience/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Main;