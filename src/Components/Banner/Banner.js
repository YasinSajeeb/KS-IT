import React from 'react';
import Header from '../Header/Header';

const banner = () => {
    return (
        <div>
            <Header></Header>
            <div className='banner bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-5'>
            <div>Hello</div>
        </div>
        </div>
    );
};

export default banner;