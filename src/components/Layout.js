import React from 'react';
import { Outlet } from "react-router-dom";
import Clients from './Clients';
import Footer from './Footer';
import Menu from './Menu';
import Popchat from './chat/Popchat'

const Layout = ({user, logOut}) => {
    return (
        <>
            <Menu user={user} logOut={logOut}/>
            <Outlet />
            <Popchat />
            <Clients />
            <Footer />
        </>
    )
}

export default Layout