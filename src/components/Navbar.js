import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import About from './components/About';
// import Species from './components/Species';
// import Advice from './components/Advice';


function Navbar() {
    return <nav className="navbar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/advice">Advice</a></li>
            <li><a href="/species">Species</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
}

export default Navbar;