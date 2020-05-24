import React from 'react'

import Home from './Home';
import About from './About';
import Species from './Species';
import Advice from './Advice';

const Footer = () => {
    return <>
        <footer>
            <div className="basic-grid">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/advice">Advice</a></li>
                    <li><a href="/species">Species</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/advice">Advice</a></li>
                    <li><a href="/species">Species</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </footer>
    </>
};

export default Footer;