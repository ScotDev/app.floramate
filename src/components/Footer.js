import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return <>
        <footer>
            <div className="footer">
                <ul className="footer-list">
                    <li className="footer-list-item"><Link to="/">Home</Link></li>
                    <li className="footer-list-item"><Link to="/advice">Advice</Link></li>
                    <li className="footer-list-item"><Link to="/species">Species</Link></li>
                    <li className="footer-list-item"><Link to="/about">About</Link></li>
                </ul>
                <ul className="footer-list">
                    <li className="footer-list-item"><Link to="/">Home</Link></li>
                    <li className="footer-list-item"><Link to="/advice">Advice</Link></li>
                    <li className="footer-list-item"><Link to="/species">Species</Link></li>
                    <li className="footer-list-item"><Link to="/about">About</Link></li>
                </ul>
            </div>
        </footer>
        <div className="credits">
            <a href="https://github.com/ScotDev" rel="noopener noreferrer" target="_blank"
            >Created by ScotDev <i className="fab fa-github"></i></a>
        </div>
    </>
};

export default Footer;