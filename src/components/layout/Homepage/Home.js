import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Content, PageSection, PageSectionTitle } from '../../ui-styled-components/Utils';


import Hero from '../../Hero';
// import Search from '../../functional/Search'
import SpeciesProfile from '../../Species'
import Info from './Info'
// import Latest from './Latest';

import useApi from '../../../hooks/useApi';

export default function Home() {

    const latestItems = useApi("https://5fd4a0dde9cda40016f5c41d.mockapi.io/api/dev1/species?page=1&limit=5")
    console.log(latestItems)

    return (
        <>
            <BrowserRouter>
                <Hero></Hero>
                {/* <Search></Search> */}
                <PageSection>
                    <PageSectionTitle>Latest</PageSectionTitle>
                    {/* <SpeciesGrid> */}
                    {/* <Latest data={latestItems}></Latest> */}
                    {/* </SpeciesGrid> */}
                </PageSection>
                <PageSection><PageSectionTitle>What do we do?</PageSectionTitle>
                    <Info></Info>
                </PageSection>
                <Route path="/:post_id" component={SpeciesProfile}></Route>
            </BrowserRouter>

        </>
    )
}
