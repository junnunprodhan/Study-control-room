import React from 'react';
import './Cards.css'
import Card from '../Card/Card';

const Cards = ({card,handleAddCard}) => {
    return (
        <div className='cards-container'>
        {
            card.map(pd=><Card key={pd.id} card={pd} handleAddCard={handleAddCard}></Card>)
        }
        </div>
    );
};

export default Cards;