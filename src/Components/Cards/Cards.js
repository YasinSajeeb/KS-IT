import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';

const Cards = () => {
    const cards = useLoaderData();
    const {data} = cards;
    return (
        <div>
            <Banner></Banner>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-12'>
            {
                data.map(card => <Card
                key={data.id}
                card={card}
                ></Card>)
            }
        </div>
        </div>
    );
};

export default Cards;