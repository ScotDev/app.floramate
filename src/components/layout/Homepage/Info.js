import React from 'react';

import { FlexBox, FlexBoxItem } from '../../ui-styled-components/Grid';
import { LargeText, RegularText } from '../../ui-styled-components/Text';

export default function Info({ color }) {
    return (

        <FlexBox >
            <FlexBoxItem >
                <LargeText color={color} textAlign={"center"}>
                    Native trees
    </LargeText>
                <RegularText color={color} padding={"0"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </FlexBoxItem>
            <FlexBoxItem>
                <LargeText color={color} textAlign={"center"}>
                    Wildflowers
    </LargeText>
                <RegularText color={color} padding={"0"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </FlexBoxItem>
            <FlexBoxItem>
                <LargeText color={color} textAlign={"center"}>
                    Introduced plants
    </LargeText>
                <RegularText color={color} padding={"0"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </FlexBoxItem>

        </FlexBox>
    )
}
