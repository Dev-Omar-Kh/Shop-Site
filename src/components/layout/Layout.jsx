import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './../header/Header';
import Footer from './../footer/Footer';

export default function Layout() {
    return <React.Fragment>

        <Header />

        <div className="outlet_cont">

            <Outlet />

        </div>

        <Footer />

    </React.Fragment>
}
