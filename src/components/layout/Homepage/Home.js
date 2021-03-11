import React from 'react';
import { useInView } from 'react-intersection-observer'
import { PageSection, PageSectionTitle } from '../../ui-styled-components/Utils';

import Hero from '../../Hero';
import Navbar from '../../Navbar';
import Info from './Info'
import Results from '../../Results';
import Featured from './Featured';

export default function Home() {
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
                {/* <Results limit={3} /> */}
                <Featured />

            </PageSection>

            <PageSection ref={ref}>
                <Info></Info>
            </PageSection>
        </>
    )
}
