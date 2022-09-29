import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import User from '../User/User';
import './Home.css'

const Home = () => {
    const [card, setCard]=useState([]);
    const [count,setCount]=useState([])
 
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])
  
    const handleAddCard=(id)=>{
        console.log(id)
        const newCount=[...count, id];
        setCount(newCount)
    }
    return (
        <div className='home-container'>
            <div className='card-container'>
                <Cards card={card} handleAddCard={handleAddCard}></Cards>
            </div>
            <div className='user-container'>
                <div className='user-div'>
                <User card={card}></User>
                </div>
            </div>
        </div>
    );
};

export default Home;