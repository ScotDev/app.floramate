import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return <nav className="navbar">
        <ul className="navbar-ul-main">
            <li className="navbar-list-item"><NavLink exact to="/" className="navbar-link">Home</NavLink></li>
            <li className="navbar-list-item"><NavLink to="/advice" className="navbar-link">Advice</NavLink></li>
            <li className="navbar-list-item"><NavLink to="/species" className="navbar-link">Species</NavLink></li>
            <li className="navbar-list-item"><NavLink to="/about" className="navbar-link">About</NavLink></li>
        </ul>
        <ul className="navbar-ul-secondary">
            <li className="navbar-list-item"><button className="btn-primary">Log in</button></li>
            <li className="navbar-list-item"><button className="btn-secondary">Sign up</button></li>
        </ul>
    </nav>
}

export default Navbar;