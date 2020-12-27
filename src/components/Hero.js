import React from 'react';
import { HeroContainer, HeroTitle, HeroSubTitle, HeroText, HeroKnockout } from './ui-styled-components/Hero';

const Hero = () => {
    return <HeroContainer>
        {/* <HeroTitle>floramate</HeroTitle> */}
        <HeroKnockout>
            <HeroTitle>floramate</HeroTitle>
            {/* <HeroSubTitle>Welcome to floramate</HeroSubTitle> */}
            <HeroText>Helping you find wildlife-friendly plants for your area</HeroText>
        </HeroKnockout>

    </HeroContainer>
};

export default Hero;