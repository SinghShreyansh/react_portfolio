import React from 'react'
import './Header.css'

import Instagram from './assets/instagram.png'
import Github from './assets/github.png'
import Twitter from './assets/twitter.png'

const Header = () => {


   
    return (
        <div className='header'>
            <div className="headMain">
                <a href='PortfolioScreenShot.pdf' download='Shreyansh Portfolio.pdf' >
                   Download ⬇️ 
                </a>
                {/* <div className="homeHead" >
                    Home
                </div>
                <div className="project">
                    Projects
                </div>
                <div className="skills">
                    Skills
                </div>
                <div className="qualification">
                    Education
                </div>
                <div className="contact">
                    Contact
                </div> */}

            </div>
            <div className="social">
            <a className="instagram" href='https://www.instagram.com/shreyansh0322/'>
                <img src={Instagram} alt="" />
                   
                </a>
            <a className="twitter" href='https://twitter.com/Shreyansh0322'>
                <img src={Twitter} alt="" />
            
                </a>
            <a className="Github" href='https://github.com/SinghShreyansh' >
                <img src= {Github} alt="" />
           
                </a>
            </div>
        </div>
    )
}

export default Header
