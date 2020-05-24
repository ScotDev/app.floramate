import React from 'react';
import { Link } from 'react-router-dom';
// import About from './components/About';
// import Species from './components/Species';
// import Advice from './components/Advice';


function Navbar() {
    return <nav className="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/advice">Advice</Link></li>
            <li><Link to="/species">Species</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
}

export default Navbar;