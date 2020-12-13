import React from 'react';

import { SearchSection, SearchForm, SearchBox } from '../ui-styled-components/Search';
import { PrimaryBtn } from '../ui-styled-components/Button';
import { Subtitle } from '../ui-styled-components/Text';


export default function Search() {
    return (
        <>
            <SearchSection>
                <SearchForm>
                    <Subtitle>Find plants</Subtitle>
                    <SearchBox type="text" placeholder="Search..."></SearchBox>
                    <PrimaryBtn type="submit">Search</PrimaryBtn>
                </SearchForm>

            </SearchSection>

        </>
    )
}
