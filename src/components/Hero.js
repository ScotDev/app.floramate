import React from 'react';
import { HeroContainer, HeroTitle, HeroText, HeroKnockout } from './ui-styled-components/Hero';
import { SecondaryBtn, InfoBtn, BtnGroup } from './ui-styled-components/Button';

const Hero = () => {
    return <HeroContainer>
        <HeroKnockout>
            <HeroTitle>floramate</HeroTitle>
            {/* <HeroSubTitle>Welcome to floramate</HeroSubTitle> */}
            <HeroText>Helping you find wildlife-friendly plants for your area</HeroText>
        </HeroKnockout>
        <BtnGroup>
            <SecondaryBtn>
                Browse
        </SecondaryBtn>
            <InfoBtn>About</InfoBtn>
        </BtnGroup>

    </HeroContainer>
};

export default Hero;