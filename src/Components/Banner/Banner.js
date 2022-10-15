import React from 'react';
import logo from '../../Images/banner_img.png';
const Banner = () => {
    return (
        <div className='flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full'>
            <div className='flex-auto w-1/2 lg:p-8'>
            <img src={logo} alt="" className='rounded-xl'/>

        </div>
        <div className='flex-auto text-center w-1/2'>
            <h1 className='text-lg lg:text-8xl font-semibold text-lime-300'> Test Your Skill </h1>
            <p className='text-sm lg:text-lg mt-4 lg:mt-8 font-mono font-semibold'> Start a quiz and learn and test yourself. Broaden your knowledge about programming. </p>
        </div>
        </div>
    );
};

export default Banner;