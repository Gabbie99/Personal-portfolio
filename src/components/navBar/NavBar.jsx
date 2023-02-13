import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='Navbar'>
        <div className="nav1">
            <h1 className='xan'>Xan<span className='tech'>tech</span></h1>
            <div className="resume">
                <a href="https://drive.google.com/file/d/1Cn3UH_Z0YHFCNIHnmj81qZsY_6j_7RIW/view?usp=share_link"><span>Resume</span>&nbsp;&nbsp;<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg></a>     
            </div>
        </div>
    </div>
  )
}

export default NavBar