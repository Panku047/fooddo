import React from "react";

import {LOGO_LINK} from '../../constants/constant'
import './HeaderStyle.css'

const Header = () =>{
    return(
        <div className="header">
            <img className="logo" alt="logo" src={LOGO_LINK} />
            <div className="app-name">Food Do</div>
            <button className="my-account">My Account</button>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Investor</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;