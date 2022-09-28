import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import User from '../User/User';
import './Home.css'

const Home = () => {
    const [card, setCard]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])
    return (
        <div className='home-container'>
            <div className='card-container'>
                <Cards card={card}></Cards>
            </div>
            <div className='user-container'>
                <User></User>
            </div>
        </div>
    );
};

export default Home;