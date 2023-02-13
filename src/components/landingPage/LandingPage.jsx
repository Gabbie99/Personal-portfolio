import React from 'react'
import '../home/Home.css'
import NavBar from '../navBar/NavBar'
import Home from '../home/Home'
import AboutMe from '../aboutMe/AboutMe'
import Technical from '../technical/Technical'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'

function LandingPage() {
  return (
    <div className='land' id='home'>
      <div className='land-nav'>
        <NavBar/>
      </div>
      <Home/>
      <AboutMe/>
      <Technical/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default LandingPage