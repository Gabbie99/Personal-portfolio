import React from 'react'
import './Projects.css'
import thumb1 from '../../assets/Capture1.JPG'
import thumb2 from '../../assets/Capture2.JPG'
import thumb3 from '../../assets/tech.jpg'
// import thumb4 from '../../assets/Capture1.JPG'

function Projects() {
  return (
    <div className='pro-gen'>
        <div className="project">
            <div className="pro-sec">
                <div>
                    <img src={thumb1} alt="" />
                    <h3></h3>
                    <p></p>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <button>See Code</button>
                        <button>View Live</button>
                    </div>
                </div>
                <div>
                    <img src={thumb2} alt="" />
                    <h3></h3>
                    <p></p>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <button>See Code</button>
                        <button>View Live</button>
                    </div>
                </div>
                <div>
                    <img src={thumb3} alt="" />
                    <h3></h3>
                    <p></p>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <button>See Code</button>
                        <button>View Live</button>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3></h3>
                    <p></p>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <button>See Code</button>
                        <button>View Live</button>
                    </div>
                </div>
            </div>
            <p>View more &rarr;</p>
        </div>
    </div>
  )
}

export default Projects