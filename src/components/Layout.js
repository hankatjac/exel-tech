import React from 'react';
import { Outlet } from "react-router-dom";
import Clients from './Clients';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Clients />
            <Footer />
        </>
    )
}

export default Layout