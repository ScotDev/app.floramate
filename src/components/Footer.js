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
        <div className="credits">
            <a href="https://github.com/ScotDev" rel="noopener noreferrer" target="_blank"
            >Created by ScotDev <i class="fab fa-github"></i></a>
        </div>
    </>
};

export default Footer;