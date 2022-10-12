import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cards = () => {
    const cards = useLoaderData();
    return (
        <div className='container'>
            <h2>total cards: {cards.data.length}</h2>
        </div>
    );
};

export default Cards;