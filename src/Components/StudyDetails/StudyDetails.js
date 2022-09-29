import React from 'react';
import './StudyDetails.css'

const StudyDetails = ({card}) => {
    
    // const totalTime =card.reduce((total,pd)=>total + pd.time, 0);
    // console.log(totalTime)

    return (
        <div>
            <h3>Study Details</h3>
            <div className='study-info'>
                <h4>Study time :</h4>
                <h4>{card.length} <span>Minutes</span></h4>
            </div>
            <div className='study-info'>
                <h4>Break time :</h4>
                <h4>100000000 <span>Minutes</span></h4>
            </div>
        </div>
    );
};

export default StudyDetails;