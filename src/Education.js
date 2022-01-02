import React from 'react'
import './Education.css'

const Education = () => {
    return (
        <div className='educationContent'>
            <div className="educationMain">
                <div className="educationTitle">
                    Education
                </div>

                <div className="educationDegree">
                    <div className="Engineering">
                    Vivekanand Education Society's Institute of Technology (VESIT), Mumbai University
                    </div>
                    <small className='beIT'>B.E (Information Technology)</small>
                    <div className='EngineeringMark'>
                    <small> F.E - CGPA: 9.57</small>
                    <small> (Batch- 2024)</small>
                    </div>
                    <div className='BoardMark'>
                        Mumbai Divisional Board (Maharashtra State Board)
                        <div className="twelvthMark">
                        <small> 12th Grade : 88.30 percentage </small>
                        <small>( 2019-2020 )</small>
                        </div>
                        <div className="tenthMark">
                        <small> 10th Grade : 90.80 percentage </small>
                        <small>( 2017-2018 )</small>
                        </div>
                    </div>
                    

                </div>
            </div>
            
        </div>
    )
}

export default Education
