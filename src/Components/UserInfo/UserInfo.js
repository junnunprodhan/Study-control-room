import React from 'react';
import './UserInfo.css'

const UserInfo = () => {
    return (
        <div>
            <div>
                <img src="" alt="" />
                <h2>Junnun Prodhan</h2>
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