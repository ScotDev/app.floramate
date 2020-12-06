import React from 'react'
import { Link } from 'react-router-dom';
import Credits from './layout/Credits';

import { StyledFooter, FooterContent, FooterContentList, FooterContentListItem } from './ui-styled-components/Navigation';

const Footer = () => {
    return <>
        <StyledFooter>
            <FooterContent>
                <FooterContentList>
                    <FooterContentListItem><Link to="/">Home</Link></FooterContentListItem>
                    <FooterContentListItem><Link to="/">Home</Link></FooterContentListItem>
                    <FooterContentListItem><Link to="/">Home</Link></FooterContentListItem>
                    <FooterContentListItem><Link to="/">Home</Link></FooterContentListItem>
                </FooterContentList>
                <FooterContentList>
                    <FooterContentListItem><Link to="/">Home</Link></FooterContentListItem>
                    <FooterContentListItem><Link to="/">Home</Link></FooterContentListItem>
                    <FooterContentListItem><Link to="/">Home</Link></FooterContentListItem>
                    <FooterContentListItem><Link to="/">Home</Link></FooterContentListItem>
                </FooterContentList>
            </FooterContent>

        </StyledFooter>
        <Credits></Credits>
        {/* <div className="credits">
            <a href="https://github.com/ScotDev" rel="noopener noreferrer" target="_blank"
            >Created by ScotDev <i className="fab fa-github"></i></a>
        </div> */}

    </>
};

export default Footer;