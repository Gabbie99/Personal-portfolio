import React from 'react'
import './Projects.css'
import thumb1 from '../../assets/Capture1.JPG'
import thumb2 from '../../assets/Capture2.JPG'

function Projects() {
  return (
    <div className='pro-gen'>
        <div className="project">
            <h1>My Projects &#128204;</h1>
            <div className="pro-sec">
                <div className='pro-img'>
                    <img src={thumb1} alt="" />
                    <h3>Bar-Chart</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sed corrupti rem cupiditate in magni. Odit, deserunt eveniet. Ut aliquid harum ipsam ducimus perspiciatis, cupiditate deserunt a error doloribus consectetur?</p>
                    <div className='pro-span'>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                    </div>
                    <div className='pro-but'>
                        <button>See Code</button>
                        <button>View Live</button>
                    </div>
                </div>
                <div className='pro-img'>
                    <img src={thumb2} alt="" />
                    <h3>Kitten-Album</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sed corrupti rem cupiditate in magni. Odit, deserunt eveniet. Ut aliquid harum ipsam ducimus perspiciatis, cupiditate deserunt a error doloribus consectetur?</p>
                    <div className='pro-span'>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                    </div>
                    <div className='pro-but'>
                        <button>See Code</button>
                        <button>View Live</button>
                    </div>
                </div>
                <div className='pro-img'>
                    <img src={thumb1} alt="" />
                    <h3>Bar-Chart</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sed corrupti rem cupiditate in magni. Odit, deserunt eveniet. Ut aliquid harum ipsam ducimus perspiciatis, cupiditate deserunt a error doloribus consectetur?</p>
                    <div className='pro-span'>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                    </div>
                    <div className='pro-but'>
                        <button>See Code</button>
                        <button>View Live</button>
                    </div>
                </div>
                <div className='pro-img'>
                    <img src={thumb2} alt="" />
                    <h3>Kitten-Album</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sed corrupti rem cupiditate in magni. Odit, deserunt eveniet. Ut aliquid harum ipsam ducimus perspiciatis, cupiditate deserunt a error doloribus consectetur?</p>
                    <div className='pro-span'>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                    </div>
                    <div className='pro-but'>
                        <button>See Code</button>
                        <button>View Live</button>
                    </div>
                </div>
            </div>
            <p className='pro-view'>View more &rarr;</p>
        </div>
    </div>
  )
}

export default Projects