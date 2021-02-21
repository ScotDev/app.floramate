import React from 'react';
import Navbar from './Navbar';
import { HeroContainer } from './ui-styled-components/Hero';
import { SecondaryBtn, InfoBtn, BtnGroup } from './ui-styled-components/Button';
import { Link } from 'react-router-dom';



const Hero = ({ hideNav }) => {

    console.log(hideNav)

    return (<>
        <HeroContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Navbar hideNav={hideNav}></Navbar>
            {/* <HeroKnockout> */}
            <h1>floramate</h1>
            <h2>Helping you find wildlife-friendly plants for your area</h2>
            {/* </HeroKnockout> */}
            <BtnGroup>
                <Link to="/species">
                    <SecondaryBtn fontSize={"1.5rem"}>
                        Browse
            </SecondaryBtn>
                </Link>
                <Link to="/about">
                    <InfoBtn fontSize={"1.5rem"}>About</InfoBtn>
                </Link>
            </BtnGroup>

        </HeroContainer>
    </>)
};

export default Hero;