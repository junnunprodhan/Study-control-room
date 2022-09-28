import React from 'react';
import './Card.css'

const Card = ({card}) => {
const{img,title,time}=card;
    return (
        <div className='card'>
           <div>
           <img src={img} alt="" />
            <h3>{title}</h3>
            <p>Time required : {time}</p>
            <button className='btn-add'>Add to List</button>
           </div>
        </div>
    );
};

export default Card;