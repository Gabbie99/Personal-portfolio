import React from 'react'
import './AboutMe.css'
import gabbie from '../../assets/gabbie prof.jpg'

function AboutMe() {
  return (
    <div className='about-gen' id='about'>
        <div className='about'>
        <h1>About Me &#128156;</h1>
        <div className="about-me">
            <div className='about-img'>
                <img src={gabbie} alt="lady" width={150}
                height={300} />
            </div>
            <div className='about-text'>
                <p>Gabrielle Idoko is a Mathematics and Education graduate transitioning into Web designs and development. She is a well taught Frontend developer specialized in building responsive websites.</p>
                <p>She is an optimistic, enthusiastic and motivated frontend developer that is seeking an opportunity to contribute massively to various institutions and organisations by implementing ideas, ideas, concepts and methodologies learned, in this way, adding values to the organization and society at large.</p>
                <p>Gabrielle is passionate about building beautiful, user-friendly and functional websites. She build projects using HTML, CSS, Javascript, React etc. She is also learning Python to up her skill set.</p>
                <div className="about-contact">
                    <span><a href='#contact'>Contact Me</a></span>
                </div>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default AboutMe