import React from 'react'
import './AboutMe.css'
import blackb from '../../assets/redcup.webp'

function AboutMe() {
  return (
    <div className='about-gen'>
        <div className='about'>
        <h1>About Me &#128156;</h1>
        <div className="about-me">
            <div className='about-img'>
                <img src={blackb} alt="lady" width={300}
                height={300} />
            </div>
            <div className='about-text'>
                <p>Gabrielle Alexander is a Mathematics and Education graduate transitioning into Web designs and development. She is a well taught Frontend developer specialized in building responsive websites.</p>
                <p>She is an optimistic, enthusiastic and motivated frontend developer that is seeking an opportunity to contribute massively to various institutions and organisations by implementing ideas, ideas, concepts and methodologies learned, in this way, adding values to the organization and society at large.</p>
                <p>Miss Gabrielle is passionate about building beautiful and functional websites. I build projects using HTML, CSS, Javascript, React etc.</p>
                <div className="about-contact">
                    <span>Contact Me</span>
                </div>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default AboutMe