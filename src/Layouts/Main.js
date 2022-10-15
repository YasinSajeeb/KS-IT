import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import Header from '../Components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;