import React from 'react';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';

const LoginLayout = () => {
    return (
        <>
            <div className='w-11/12 mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default LoginLayout;