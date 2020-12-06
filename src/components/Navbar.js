import React from 'react';
import { PrimaryBtn, SecondaryBtn } from './ui-styled-components/Button';
import { StyledNavbar, NavbarList, NavbarListItem, MobileNavbar, MobileNavMenu, MobileNavMenuItem } from './ui-styled-components/Navigation';
import { RegularText } from './ui-styled-components/Text';

import { NavLink } from 'react-router-dom';

// Set up router here

function Navbar() {
    return (<>
        <StyledNavbar>
            <NavbarList>
                <NavbarListItem>
                    <NavLink exact to="/">Home</NavLink>
                </NavbarListItem>
                <NavbarListItem>
                    <NavLink to="/advice">Advice</NavLink>
                </NavbarListItem>
                <NavbarListItem>
                    <NavLink to="/species">Species</NavLink>
                </NavbarListItem>
                <NavbarListItem>
                    <NavLink to="/about">About</NavLink>
                </NavbarListItem>

            </NavbarList>
            <NavbarList>
                <NavbarListItem>
                    <PrimaryBtn>Log in</PrimaryBtn>
                </NavbarListItem>
                <NavbarListItem>
                    <SecondaryBtn>Sign up</SecondaryBtn>
                </NavbarListItem>
            </NavbarList>
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