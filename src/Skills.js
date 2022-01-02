import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <div className='skillsContent'>
             
            <div className="skillMain">
            <div className="skillTitle">
                    Skills
                </div>
                <div className="skillLanguage"> 
                Language 
                    <div className='skillLanguageBox'>

                        <div>Java |</div>
                        <div>C/C++ |</div>
                        <div>JavaScript |</div>
                        <div>Solidity </div>
                    </div>
                </div>
                <div className="skillTechnologies"> Technologies 
                    <div className='skillTechnologiesBox'>
                    
                        <div>React |</div>
                        <div>Redux |</div>
                        <div>Node js |</div>
                        <div>Native App |</div>
                        <div>Blockchain </div>
                      
                    </div>
                </div>
                <div className="skillPlatform">
                Platform  
                    <div className='skillPlatformBox'>
                        <div>Android |</div>
                        <div>Firebase |</div>
                        <div>Ethereum |</div>
                        <div>thirdweb |</div>
                        <div>Web </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills
