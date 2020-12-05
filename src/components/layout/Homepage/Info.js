import React from 'react';

import { InfoGrid, GridItem } from '../../ui-styled-components/Grid';
import { LargeText, RegularText } from '../../ui-styled-components/Text';

export default function Info() {
    return (

        <InfoGrid>
            <GridItem>
                <LargeText colour={"#487161"} >
                    Native trees
    </LargeText>
                <RegularText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </GridItem>
            <GridItem>
                <LargeText colour={"#487161"} >
                    Wildflowers
    </LargeText>
                <RegularText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </GridItem>
            <GridItem>
                <LargeText colour={"#487161"} >
                    Introduced plants
    </LargeText>
                <RegularText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </GridItem>

        </InfoGrid>
    )
}
