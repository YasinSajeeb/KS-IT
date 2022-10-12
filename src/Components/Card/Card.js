import React from 'react';

const Card = ({card}) => {
    const {logo} = card;
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default Card;