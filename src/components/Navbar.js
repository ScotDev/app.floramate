import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return <nav className="navbar">
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/advice">Advice</NavLink></li>
            <li><NavLink to="/species">Species</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>
}

export default Navbar;