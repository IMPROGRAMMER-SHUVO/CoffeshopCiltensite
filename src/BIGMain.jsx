import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

const BIGMain = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
          
            <Footer></Footer>
        </div>
    );
};

export default BIGMain;