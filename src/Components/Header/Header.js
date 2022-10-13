import React from 'react';
import { ComputerDesktopIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-red-300'>
            <div className='container flex justify-between items-center'>

            <Link to='/' className='flex items-center'>
            <ComputerDesktopIcon className="h-6 w-6"/>
            <h6 className='text-3xl text-blue-700 font-bold'>KS</h6><p className='text-3xl text-red-700 font-bold'>IT</p>
            </Link>
            
            <div className='text-xl'>
                <Link to='/'>Home</Link>
                <Link to='/statistics' className='mx-10'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            </div>
        </nav>
    );
};

export default Header;