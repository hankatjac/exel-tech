import React from 'react';
import { Outlet } from "react-router-dom";
import Clients from './Clients';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({user, logOut}) => {
    return (
        <>
            <Navbar user={user} logOut={logOut}/>
            <Outlet />
            <Clients />
            <Footer />
        </>
    )
}

export default Layout