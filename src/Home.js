import React from 'react'
import './Home.css'
import profilePic from './assets/profilePic.jpeg'

const Home = () => {
   
    return (
        <div className='home'>
        <div className="homeMain">
            <div className="homeName">
               Shreyansh Singh
            </div>
            <div className="homeImage">
                <div className="imageContainer">
                <img src={profilePic} alt="" />
                </div>
            </div>
            <div className="homeDev">
                Web Developer | Android Developer | BlockChain Developer
            </div>
        </div>
        </div>
    )
}

export default Home
