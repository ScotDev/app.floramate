import React from 'react';

import { FlexBox, FlexBoxItem } from '../../ui-styled-components/Grid';
import { LargeText, RegularText } from '../../ui-styled-components/Text';

export default function Info() {
    return (

        <FlexBox>
            <FlexBoxItem>
                <LargeText>
                    Native trees
    </LargeText>
                <RegularText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </FlexBoxItem>
            <FlexBoxItem>
                <LargeText>
                    Wildflowers
    </LargeText>
                <RegularText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </FlexBoxItem>
            <FlexBoxItem>
                <LargeText>
                    Introduced plants
    </LargeText>
                <RegularText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </RegularText>
            </FlexBoxItem>

        </FlexBox>
    )
}
