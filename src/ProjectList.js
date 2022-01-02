import React from 'react'
import './ProjectList.css'
import ProjectComponent from './ProjectComponent'
import amazonVideo from './assets/amazonVideo.mp4'
import nftVideo from './assets/nftVideo.mp4'
import NewsApp from './assets/NewsApp.mp4'
import votingDapp from './assets/votingDapp.mp4'

const ProjectList = () => {


    
    return (
        <div  className='projectList'>
            <div className="projectListTitle">
                Projects
            </div>
            <div className="projectListMain1">

            <ProjectComponent video={nftVideo} link='https://github.com/SinghShreyansh/React_NFT' title='NFT-Project using thirdweb' description=" Modern Cryptopunk Clone with React.js & Web 3.0...        (Dec 2021)"/>
            <ProjectComponent video={amazonVideo} link='https://github.com/SinghShreyansh/amazon-clone' title='Amazon-Clone' description="Amazon-Clone web application using React.js , node.js , stripe library , express library ...   (Nov-Dec 2021)"/>
            
            </div>
            <div className="projectListMain2">

             <ProjectComponent video={NewsApp} link='https://github.com/SinghShreyansh/NewsApp' title='NewsApp' description=" Chatting feature and Phone-verification feature , News API, firebase , Android Studio ,Java ...(Aug-Sep 2021)"/>
             <ProjectComponent video={votingDapp} link='https://github.com/SinghShreyansh/Voting-Dapp' title='Voting Dapp' description="Decentralized Voting web application using React.js , Ganache , remix ide, solidity ,web3.js,truffle ... (Nov-2021)"/>

             </div>

             <a className="projectMore" href='https://github.com/SinghShreyansh?tab=repositories'>
                 More Project on Github...
             </a>
        </div>
    )
}

export default ProjectList
