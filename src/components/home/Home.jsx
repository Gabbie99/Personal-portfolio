import React from 'react'
import './Home.css'
import profile from '../../assets/profile.webp'
import{LinkedinLogo, TwitterLogo, FacebookLogo} from 'phosphor-react'
import git2 from '../../assets/git2.svg'

function Home() {
  return (
    <div className='myhome'>
        <div className="home1">
            <img src={profile} alt="me" width={200} height={200} className="pro" />
            <h1>Gabrielle Alexander</h1>
            <p>I'm a front-end developer</p>
            <div className="icons">
            <FacebookLogo size={20} color="white" weight="fill" />
            <TwitterLogo size={20} color="white" weight="fill" />
            <LinkedinLogo size={20} color="white" weight="fill" />
            <img src={git2} alt="git" />
            </div>
            <div className='view-div'>
                <span className='view'>View my works &darr;</span>
            </div>
        </div>
    </div>
  )
}

export default Home