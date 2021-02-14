import React from 'react';

import { FlexBox, FlexBoxItem } from '../../ui-styled-components/Grid';
import { LargeText, RegularText } from '../../ui-styled-components/Text';

export default function Info({ color }) {
    return (

        <FlexBox >
            <FlexBoxItem >
                <LargeText color={color}>
                    Native trees
    </LargeText>
                <RegularText color={color}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </FlexBoxItem>
            <FlexBoxItem>
                <LargeText color={color}>
                    Wildflowers
    </LargeText>
                <RegularText color={color}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </FlexBoxItem>
            <FlexBoxItem>
                <LargeText color={color}>
                    Introduced plants
    </LargeText>
                <RegularText color={color}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </FlexBoxItem>

        </FlexBox>
    )
}
