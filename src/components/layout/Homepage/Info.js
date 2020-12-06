import React from 'react';

import { FlexBox, FlexBoxItem } from '../../ui-styled-components/Grid';
import { LargeText, RegularText } from '../../ui-styled-components/Text';

export default function Info() {
    return (

        <FlexBox>
            <FlexBoxItem>
                <LargeText colour={"#487161"} >
                    Native trees
    </LargeText>
                <RegularText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </FlexBoxItem>
            <FlexBoxItem>
                <LargeText colour={"#487161"} >
                    Wildflowers
    </LargeText>
                <RegularText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </FlexBoxItem>
            <FlexBoxItem>
                <LargeText colour={"#487161"} >
                    Introduced plants
    </LargeText>
                <RegularText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </FlexBoxItem>

        </FlexBox>
    )
}
