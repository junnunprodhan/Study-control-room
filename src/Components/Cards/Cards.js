import React from 'react';
import './Cards.css'
import Card from '../Card/Card';

const Cards = ({card}) => {
    console.log(card)
    return (
        <div className='cards-container'>
        {
            card.map(pd=><Card key={pd.id} card={pd}></Card>)
        }
        </div>
    );
};

export default Cards;