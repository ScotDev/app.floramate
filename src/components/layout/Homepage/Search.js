import React from 'react';

import { HomepageSearchSection, HomepageSearchForm, SearchBox } from '../../ui-styled-components/Search';
import { Subtitle } from '../../ui-styled-components/Text';
import { PrimaryBtn } from '../../ui-styled-components/Button';

export default function Search() {
    return (
        <HomepageSearchSection>
            <HomepageSearchForm>
                <Subtitle>Find plants</Subtitle>
                <SearchBox type="text" placeholder="Search..."></SearchBox>
                <PrimaryBtn type="submit">Search</PrimaryBtn>
            </HomepageSearchForm>
        </HomepageSearchSection>
    )
};