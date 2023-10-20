import React from "react";

import Header from '../feature/header/Header'
import MainBody from '../feature/body/MainBody'
import Footer from "../feature/footer/Footer";

const Layout = () =>{
    return(
        <div className="appLayout">
            <Header />
            <MainBody />
            <Footer />
        </div>
    );
}
export default Layout;