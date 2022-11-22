import React from 'react'
import '../home/Home.css'
import '../home/Home'
import '../navBar/NavBar'
import NavBar from '../navBar/NavBar'
import Home from '../home/Home'

function LandingPage() {
  return (
    <div className='land'>
        <NavBar/>
        <Home/>
    </div>
  )
}

export default LandingPage