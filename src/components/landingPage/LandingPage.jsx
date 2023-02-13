import React from 'react'
import '../home/Home.css'
import '../home/Home'
import '../navBar/NavBar'
import NavBar from '../navBar/NavBar'
import Home from '../home/Home'

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