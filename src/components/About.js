import React from 'react';
import { Content } from './ui-styled-components/Utils';
import { HeroContainer, HeroTitle, HeroText } from './ui-styled-components/Hero';

const About = () => {
    return (
        <Content>
            <HeroContainer>
                <HeroTitle>About</HeroTitle>
                <HeroText>All about the floramate project</HeroText>
            </HeroContainer>
        </Content>
    )
}

export default About;