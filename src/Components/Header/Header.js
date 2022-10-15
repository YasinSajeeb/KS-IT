import React from 'react';
import { ComputerDesktopIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-gradient-to-r from-cyan-400 to-cyan-500 lg:py-5'>
            <div className='lg:container flex justify-between items-center'>

            <Link to='/' className='flex items-center'>
            <ComputerDesktopIcon className="h-4 w-4 lg:h-6 lg:w-6"/>
            <h6 className='lg:text-3xl text-blue-700 font-bold'>KS</h6><p className='lg:text-3xl text-red-700 font-bold'>IT</p>
            </Link>
            
            <div className='text-sm lg:text-xl'>
                <Link to='/' className='font-bold hover:text-yellow-400 focus:border-b-yellow-300 focus:border-b-4 focus:text-yellow-300'>Home</Link>
                <Link to='/statistics' className='mx-3 lg:mx-10 font-bold hover:text-yellow-400 focus:border-b-yellow-300 focus:border-b-4 focus:text-yellow-300'>Statistics</Link>
                <Link to='/blog' className='font-bold hover:text-yellow-400 focus:border-b-yellow-300 focus:border-b-4 focus:text-yellow-300'>Blog</Link>
            </div>
            </div>
        </nav>

    );
};

export default Header;