import React, { useState } from 'react';
import AddBreak from '../AddBreak/AddBreak';
import './StudyDetails.css'

const StudyDetails = ({card,count}) => {
    
    const totalTime =count.reduce((total,pd)=>total + pd.time, 0);
 
    return (
        <div>
            <div className='study-info'>
                <h4>Study time :</h4>
                <h4>{totalTime} <span>Minutes</span></h4>
            </div>
        </div>
    );
};

export default StudyDetails;