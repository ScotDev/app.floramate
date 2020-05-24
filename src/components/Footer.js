import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return <>
        <footer>
            <div className="basic-grid">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/advice">Advice</Link></li>
                    <li><Link to="/species">Species</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/advice">Advice</Link></li>
                    <li><Link to="/species">Species</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </footer>
    </>
};

export default Footer;