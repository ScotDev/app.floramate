import React from 'react';
import { useInView } from 'react-intersection-observer'

import { PageSection, PageSectionTitle } from '../../ui-styled-components/Utils';

import Hero from '../../Hero';
// import SpeciesProfile from '../../Species'
import Info from './Info'
import Results from '../../Results';
// import Latest from './Latest';

// import useApi from '../../../hooks/useApi';

const speciesData = require("../../../data/speciesData");


export default function Home() {
    const [ref, inView] = useInView({
        rootMargin: "-300px",
        threshold: 0,
    })

    // const latestItems = useApi("https://5fd4a0dde9cda40016f5c41d.mockapi.io/api/dev1/species?page=1&limit=5")
    // console.log(latestItems)

    return (
        <>
            <Hero hideNav={inView}></Hero>

            <PageSection bgColor={"#2f3e46"} padding={"10vw"} >
                <PageSectionTitle color={"#fff"}>Featured</PageSectionTitle>
                <Results speciesData={speciesData} limit={3} />
            </PageSection>

            <PageSection ref={ref}>
                <Info></Info>
            </PageSection>

            {/* 

            <PageSection>
                <Info color={"#2f3e46"}></Info>
            </PageSection> */}

            {/* <Route path="/:post_id" component={SpeciesProfile}></Route> */}

        </>
    )
}
