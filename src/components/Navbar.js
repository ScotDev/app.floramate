import React from 'react';
import { StyledNavbar, NavbarBrand, NavbarList, NavbarListItem, MobileNavbar, MobileNavMenu, MobileNavMenuItem } from './ui-styled-components/Navigation';
import { RegularText } from './ui-styled-components/Text';


import BrandImage from "../assets/img/brand.svg";

import { NavLink, Link } from 'react-router-dom';

const navbarVariants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.05,
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            // duration: 0.5,
            when: "afterChildren",
            staggerChildren: 0.09,
        }
    },
    scroll: {
        backgroundColor: "#2f3e46"
    }
}

const childrenVariants = {
    visible: {
        opacity: 1
    },
    hidden: { opacity: 0 },
    scroll: {
        opacity: 1
    }
}

function Navbar({ bgColor, scrolling }) {
    return (<>
        <StyledNavbar bgColor={bgColor} borderBottom={scrolling && "#84a98c"} initial="visible" animate={scrolling ? "scroll" : "visible"} variants={navbarVariants} >
            <Link exact to="/">
                <NavbarBrand variants={childrenVariants} initial="hidden"><img alt="brand name" src={BrandImage} /><h4>floramate</h4></NavbarBrand>
            </Link>
            <NavbarList >
                <NavbarListItem variants={childrenVariants} initial="hidden">
                    <NavLink exact to="/">Home</NavLink>
                </NavbarListItem>
                <NavbarListItem variants={childrenVariants} initial="hidden">
                    <NavLink to="/species">Species</NavLink>

                </NavbarListItem>
                {/* <NavbarListItem>
                    <NavLink to="/advice">Advice</NavLink>
                </NavbarListItem> */}
                <NavbarListItem variants={childrenVariants} initial="hidden">
                    <NavLink to="/about">About</NavLink>
                </NavbarListItem>

            </NavbarList>
            {/* <NavbarList>
                <NavbarListItem>
                    <PrimaryBtn>Log in</PrimaryBtn>
                </NavbarListItem>
                <NavbarListItem>
                    <SecondaryBtn>Sign up</SecondaryBtn>
                </NavbarListItem>
            </NavbarList> */}
        </StyledNavbar>
        <MobileNavbar>
            <input type="checkbox"></input>
            <div></div>
            <div></div>
            <div></div>
        </MobileNavbar>
        <MobileNavMenu>
            <MobileNavMenuItem><RegularText><NavLink to="/about">About</NavLink></RegularText></MobileNavMenuItem>
        </MobileNavMenu>
    </>)
}

export default Navbar;