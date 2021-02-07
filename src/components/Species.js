import React from 'react';

// Functional components
import Search from './functional/Search';

// UI components
import { Content } from './ui-styled-components/Utils';
import { HeroContainer, HeroTitle, HeroText } from './ui-styled-components/Hero';


const Species = () => {
    return (
        <Content>
            {/* <HeroContainer>
                <HeroTitle>Species</HeroTitle>
                <HeroText>All the species in the floramate project</HeroText>
            </HeroContainer> */}

            <Search>
            </Search>
        </Content>
    )
}

export default Species;