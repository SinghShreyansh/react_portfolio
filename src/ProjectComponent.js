import React from 'react'
import './ProjectComponent.css'



const ProjectComponent = ({video,link,title,description}) => {
    return (
        <div className='projectComponent'>
            <div className="projectVideo">
            <video className="projectVideoComponent" controls>    
             <source src={video}/>
            </video>
            </div>
            <a className="projectTitle" href={link}>
                {title} 
            </a>
            <div className="projectDescription">
            {description}
            </div>
        </div>
    )
}

export default ProjectComponent
