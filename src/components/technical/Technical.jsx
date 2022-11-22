import React from 'react'
import './Technical.css'
import html from '../../assets/html.webp'
import css from '../../assets/css.png'
import java from '../../assets/javascript.png'
import react from '../../assets/React.png'
import tail from '../../assets/Tailwind.png'
import git from '../../assets/Git-icon.png'

function Technical() {
  return (
    <div className='tech-gen'>
        <h1>Technical Skills</h1>
        <div className="logos">
            <div className='log'><img src={html} alt="logo" /><span>HTML</span></div>
            <div className='log'><img src={css} alt="logo" /><span>CSS</span></div>
            <div className='log'><img src={java} alt="logo" /><span>JAVASCRIPT</span></div>
            <div className='log'><img src={react} alt="logo" /><span>REACT JS</span></div>
            <div className='log'><img src={tail} alt="logo" /><span>TAILWIND</span></div>
            <div className='log'><img src={git} alt="logo" /><span>GIT</span></div>
        </div>
    </div>
  )
}

export default Technical