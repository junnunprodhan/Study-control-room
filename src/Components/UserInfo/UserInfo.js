import React from 'react';
import './UserInfo.css'

const UserInfo = () => {
    return (
        <div>
            <div className='container'>
                <img className='user-img' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' alt="" />
                <div>
                <h2>Junnun Prodhan</h2>
                </div>
            </div>
            <div className='info-containers'>
                <div className='info'>
                    <h3>67 <small>kg</small></h3>
                    <small>Weight</small>
                </div>
                <div className='info'>
                    <h3>5.8</h3>
                    <small>Height</small>
                </div>
                <div className='info'>
                    <h3>24<small>yr</small></h3>
                    <small>Age</small>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;