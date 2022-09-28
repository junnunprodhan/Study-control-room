import React from 'react';
import './User.css'
import AddBreak from '../AddBreak/AddBreak';
import StudyDetails from '../StudyDetails/StudyDetails';
import UserInfo from '../UserInfo/UserInfo';

const User = () => {
    return (
        <div>
            <UserInfo></UserInfo>
            <h3>Add a Break Time</h3>
            <AddBreak></AddBreak>
            <StudyDetails></StudyDetails>
            <button className='btn-activate'>Activity Completed</button>            
        </div>
    );
};

export default User;