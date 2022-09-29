import React from 'react';
import './User.css'
import AddBreak from '../AddBreak/AddBreak';
import StudyDetails from '../StudyDetails/StudyDetails';
import UserInfo from '../UserInfo/UserInfo';
import Swal from 'sweetalert2';


const User = ({card,count}) => {
    const handleAlart =()=>{
      Swal.fire("Good job","You clicked the button!","success")
    }

    // const [time,setTime]=useState([])


    


    return (
        <div className='user-activity'>
            <div className='user-card'>
                <UserInfo></UserInfo>
                <h3>Add a Break Time</h3>
                <AddBreak></AddBreak>
                <StudyDetails count={count} card={card}></StudyDetails>
                <button onClick={handleAlart} className='btn-activate'>Activity Completed</button>
                 
            </div>          
        </div>
    );
};

export default User;