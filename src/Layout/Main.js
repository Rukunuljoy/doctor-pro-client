import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/components/Footer/Footer';
import Topbar from '../Pages/components/Navbar/Topbar';

const Main = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Main;