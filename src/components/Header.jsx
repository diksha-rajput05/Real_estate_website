import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div className = 'header'>
          <Navbar/>
          <div className = "intro">
            <p>Looking for a property!</p>
            <h1><span>Buy </span>and<span> Sell </span></h1>
            <p className = "details"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa saepe hic repudiandae accusantium, at possimus officiis tempore corporis nihil tempora veniam a. </p>
            <a href= '#'className = 'header-btn'>Details</a>
          </div>
        </div>
    )
}

export default Header;