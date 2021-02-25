import React, { useState } from 'react';
import { StyledNavbar, NavbarBrand, NavbarList, NavbarListItem, MobileNavbar, MobileNavList, MobileNavItem, MobileNavToggle } from './ui-styled-components/Navigation';

import BrandImage from "../assets/img/brand.svg";

import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const mobileNavVariants = {
    closed: { y: -300, opacity: 0 },
    open: { y: 0, opacity: 1 }
}
const mobileToggleVariants = {
    closed: { backgroundColor: "#5a6368" },
    open: { backgroundColor: "transparent", boxShadow: "none" }
}

const hamburgerVariants = {
    topClosed: { x: 0, y: 0 },
    topOpen: { x: 0, y: 10, rotate: 45, scale: 1.2 },
    middleClosed: { opacity: 1 },
    middleOpen: { opacity: 0 },
    bottomClosed: { x: 0, y: 0 },
    bottomOpen: { x: 0, y: -12, rotate: -45, scale: 1.2 }
}

function Navbar({ bgColor, scrolling }) {

    const [toggleOpen, setToggleOpen] = useState(false)

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
        </StyledNavbar>

        {/* Set to invisible on open, replaced with x on dropdown, divide items by section, not individually*/}
        <MobileNavToggle initial="closed" animate={toggleOpen ? "open" : "closed"} onClick={() => setToggleOpen(!toggleOpen)} variants={mobileToggleVariants}>
            <motion.div
                initial="topClosed" animate={toggleOpen ? "topOpen" : "topClosed"}
                variants={hamburgerVariants}></motion.div>

            <motion.div
                initial="middleClosed" animate={toggleOpen ? "middleOpen" : "middleClosed"}
                transition={{ duration: 0.1 }}
                variants={hamburgerVariants}>
            </motion.div>
            <motion.div
                initial="bottomClosed" animate={toggleOpen ? "bottomOpen" : "bottomClosed"}
                variants={hamburgerVariants}
            ></motion.div>
        </MobileNavToggle>
        <MobileNavbar initial="closed" animate={toggleOpen ? "open" : "closed"} variants={mobileNavVariants}>
            <MobileNavList>
                <MobileNavItem>
                    <NavLink exact to="/">Home</NavLink>
                </MobileNavItem>
                <MobileNavItem>
                    <NavLink to="/species">Species</NavLink>
                </MobileNavItem>
                <MobileNavItem>
                    <NavLink to="/about">About</NavLink>
                </MobileNavItem>
            </MobileNavList>
        </MobileNavbar>

    </>)
}

export default Navbar;