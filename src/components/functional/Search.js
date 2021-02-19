import React from 'react';
import Results from '../Results';

import { SearchSection, SearchBox, SearchBtn, ResultsHeading } from '../ui-styled-components/Search';

// import { PrimaryBtn } from '../ui-styled-components/Button';
// import { Subtitle } from '../ui-styled-components/Text';



const speciesData = require("../../data/speciesData");


export default function Search() {


    return (
        <>
            <SearchSection>
                <h2>Species</h2>
                <form>

                    <SearchBox type="text" placeholder="Search..."></SearchBox>
                    <SearchBtn type="submit" value="Search" />
                    {/* <PrimaryBtn type="submit">Search</PrimaryBtn> */}
                </form>

            </SearchSection>
            <ResultsHeading>Results</ResultsHeading>

            <Results speciesData={speciesData} />


        </>
    )
}
