import React from 'react';
import logo from '../images/logo1.png';

function Navbar() {
    return (
        <nav>
            <a href="/" className="logo">
                <img src = {logo} alt="logo" />
            </a>
            <input className = "menu-btn" type = "checkbox" id = 'menu-btn'/>
            <label className = 'menu-icon' for= 'menu-btn'>
                <span className = "nav-icon"></span>

            </label>
            <ul className = "menu">
                <li><a href = '/' className = 'active'>Home</a></li>
                <li><a href = '/'>About</a></li>
                <li><a href = '/'>Agent</a></li>
                <li><a href = '/'>Properties</a></li>
                <li><a href = '/'>Contact</a></li>
            </ul>
            <a href= '/' className = "property">Properties</a>
        </nav>
    )
}

export default Navbar;