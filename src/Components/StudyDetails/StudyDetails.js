import React from 'react';
import './StudyDetails.css'

const StudyDetails = () => {
    return (
        <div>
            <h3>Study Details</h3>
            <div className='study-info'>
                <h4>Study time</h4>
                <h4>20 <span>M</span></h4>
            </div>
            <div className='study-info'>
                <h4>Break time</h4>
                <h4>20 <span>M</span></h4>
            </div>
        </div>
    );
};

export default StudyDetails;