import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Cards = () => {
    const cards = useLoaderData();
    return (
        <div className='container'>
            {
                cards.data.map(card => <Card
                key={cards.data.id}
                card={card}
                ></Card>)
            }
        </div>
    );
};

export default Cards;