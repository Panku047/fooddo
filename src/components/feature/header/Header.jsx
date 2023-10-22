import React from "react";
import {NavLink } from 'react-router-dom'; 

import {LOGO_LINK} from '../../constants/constant'
import './HeaderStyle.css'

const linkCSS = {
    textDecoration: 'none',
}

const Header = () =>{
    return(
        <div className="header">
            <NavLink style={linkCSS} to="/">
                <img className="logo" alt="logo" src={LOGO_LINK} />
            </NavLink>
            <div className="app-name">Food Do</div>
            <div className="my-account-head">
                <button className="my-account">My Account</button>
                <div className="dropdown-content">
                    <a href="#">My Profile</a>
                    <a href="#">Orders</a>
                    <a href="#">Gift Card</a>
                    <a href="#">Coupon</a>
                    <a href="#">Notification</a>
                    <a href="#">Logout</a>
                </div>
            </div>
            <div className="nav-items">
                <ul>
                    <li><NavLink style={linkCSS} to="/home">Home</NavLink></li>
                    <li><NavLink style={linkCSS} to="/about">About</NavLink></li>
                    <li>Contact</li>
                    <li>Investor</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;