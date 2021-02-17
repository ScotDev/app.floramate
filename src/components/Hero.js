import React from 'react';
import { HeroContainer, HeroTitle, HeroText, HeroKnockout } from './ui-styled-components/Hero';
import { SecondaryBtn, InfoBtn, BtnGroup } from './ui-styled-components/Button';
import { Link } from 'react-router-dom';


const Hero = () => {
    return <HeroContainer>
        <HeroKnockout>
            <HeroTitle>floramate</HeroTitle>
            {/* <HeroSubTitle>Welcome to floramate</HeroSubTitle> */}
            <HeroText>Helping you find wildlife-friendly plants for your area</HeroText>
        </HeroKnockout>
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
};

export default Hero;