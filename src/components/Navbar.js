import React from 'react';
import { PrimaryBtn, SecondaryBtn } from './ui-styled-components/Button';
import { StyledNavbar, NavbarList, NavbarListItem } from './ui-styled-components/Navigation';

import { NavLink } from 'react-router-dom';

function Navbar() {
    return (<StyledNavbar>
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
    </StyledNavbar>)
}

export default Navbar;