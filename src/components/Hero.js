import React from 'react';
import { HeroContainer, HeroTitle, HeroSubTitle, HeroText } from './ui-styled-components/Hero';

const Hero = () => {
    return <HeroContainer>
        <HeroTitle>floramate</HeroTitle>
        <HeroSubTitle>Welcome to floramate</HeroSubTitle>
        <HeroText>Helping you find wildlife-friendly plants for your area</HeroText>
    </HeroContainer>
};

export default Hero;