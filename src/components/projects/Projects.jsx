import React from 'react'
import './Projects.css'
import thumb1 from '../../assets/Capture1.JPG'
import thumb2 from '../../assets/Capture2.JPG'

function Projects() {
  return (
    <div className='pro-gen' id='project'>
        <div className="project">
            <h1>My Projects &#128204;</h1>
            <div className="pro-sec">
                <div className='pro-img'>
                    <img src={thumb1} alt="" className='thum' />
                    <h3>Bar-Chart</h3>
                    <p>This project aims to create a visually compelling and data-driven bar chart that effectively communicates key insights. The design will prioritize clarity, accessibility, and aesthetics, ensuring users can quickly interpret the data. </p>
                    <div className='pro-span'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>REACT JS</span>
                    </div>
                    <div className='pro-but'>
                        <button><a href='https://github.com/Gabbie99/my-react-charts/tree/master/src'>See Code</a></button>&nbsp;&nbsp;
                        <button><a href='https://my-react-chart.netlify.app'>View Live</a></button>
                    </div>
                </div>
                <div className='pro-img'>
                    <img src={thumb2} alt="" className='thum' />
                    <h3>Kitten-Album</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sed corrupti rem cupiditate in magni. Odit, deserunt eveniet. Ut aliquid harum ipsam ducimus perspiciatis, cupiditate deserunt a error doloribus consectetur?</p>
                    <div className='pro-span'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>REACT JS</span>
                    </div>
                    <div className='pro-but'>
                        <button><a href='https://github.com/Gabbie99/react-robofriends/tree/master/src'>See Code</a></button>&nbsp;&nbsp;
                        <button><a href='https://gabskitten.netlify.app'>View Live</a></button>
                    </div>
                </div>
                <div className='pro-img'>
                    <img src={thumb1} alt="" className='thum' />
                    <h3>Bar-Chart</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sed corrupti rem cupiditate in magni. Odit, deserunt eveniet. Ut aliquid harum ipsam ducimus perspiciatis, cupiditate deserunt a error doloribus consectetur?</p>
                    <div className='pro-span'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>REACT JS</span>
                    </div>
                    <div className='pro-but'>
                        <button>See Code</button>&nbsp;&nbsp;
                        <button>View Live</button>
                    </div>
                </div>
                <div className='pro-img'>
                    <img src={thumb2} alt="" className='thum' />
                    <h3>Kitten-Album</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sed corrupti rem cupiditate in magni. Odit, deserunt eveniet. Ut aliquid harum ipsam ducimus perspiciatis, cupiditate deserunt a error doloribus consectetur?</p>
                    <div className='pro-span'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>REACT JS</span>
                    </div>
                    <div className='pro-but'>
                        <button>See Code</button>&nbsp;&nbsp;
                        <button>View Live</button>
                    </div>
                </div>
            </div>
            <p className='pro-view'>View More Projects &rarr;</p>
        </div>
    </div>
  )
}

export default Projects