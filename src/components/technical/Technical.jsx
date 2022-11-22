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
    <div>
        <h1>Technical Skills</h1>
        <div className="logos">
            <img src={html} alt="logo" /><p></p>
            <img src={css} alt="logo" /><p></p>
            <img src={java} alt="logo" /><p></p>
            <img src={react} alt="logo" /><p></p>
            <img src={tail} alt="logo" /><p></p>
            <img src={git} alt="logo" /><p></p>
        </div>
    </div>
  )
}

export default Technical