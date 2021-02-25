import React from 'react';
import { useInView } from 'react-intersection-observer'
import { PageSection, PageSectionTitle } from '../../ui-styled-components/Utils';

import Hero from '../../Hero';
import Navbar from '../../Navbar';
// import SpeciesProfile from '../../Species'
import Info from './Info'
import Results from '../../Results';

const speciesData = require("../../../data/speciesData");

export default function Home() {
    // Tweak
    const [ref, inView] = useInView({
        rootMargin: "620px",
        threshold: 0,
    })



    return (
        <>
            <Navbar scrolling={inView}></Navbar>
            <Hero ></Hero>
            <PageSection bgColor={"#2f3e46"} padding={"10vw"}>
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
