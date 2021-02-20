import React from 'react';
import Navbar from './Navbar';
import { HeroContainer } from './ui-styled-components/Hero';
import { SecondaryBtn, InfoBtn, BtnGroup } from './ui-styled-components/Button';
import { Link } from 'react-router-dom';


const Hero = () => {
    return (<>

        <HeroContainer>
            <Navbar></Navbar>
            {/* <HeroKnockout> */}
            <h1>floramate</h1>
            <h2>Helping you find wildlife-friendly plants for your area</h2>
            {/* </HeroKnockout> */}
            <BtnGroup>
                <Link to="/species">
                    <SecondaryBtn fontSize={"1.4rem"}>
                        Browse
        </SecondaryBtn>
                </Link>
                <Link to="/about">
                    <InfoBtn bgColor={"transparent"} fontSize={"1.4rem"}>About</InfoBtn>
                </Link>
            </BtnGroup>

        </HeroContainer>
    </>)
};

export default Hero;