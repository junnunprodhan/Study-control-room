import React from 'react';
import './Card.css'

const Card = ({card,handleAddCard}) => {
const{img,title,time,id}=card;
    return (
        <div className='card'>
           <div>
           <img src={img} alt="" />
            <h3>{title}</h3>
            <p>Time required : {time} minutes</p>
            <button onClick={()=>handleAddCard(card)} className='btn-add'>Add to List</button>
           </div>
        </div>
    );
};

export default Card;