import React from 'react';
import { useInView } from 'react-intersection-observer'
// import { motion } from "framer-motion";

import { PageSection, PageSectionTitle } from '../../ui-styled-components/Utils';

import Hero from '../../Hero';
import Navbar from '../../Navbar';
// import SpeciesProfile from '../../Species'
import Info from './Info'
import Results from '../../Results';

const speciesData = require("../../../data/speciesData");

// const parentVariants = {
//     visible: {
//         opacity: 1,
//         transition: {
//             type: "spring",
//             stiffness: 300,
//             duration: 0.5,
//             when: "beforeChildren",
//             staggerChildren: 0.22,
//         }
//     },
//     hidden: {
//         opacity: 0
//     }
// }

// const childrenVariants = {
//     visible: {
//         opacity: 1
//     },
//     hidden: { opacity: 0 },
//     hover: { scale: 0.97, opacity: 0.7, transition: { duration: 0.2 } }
// }

export default function Home() {
    // Tweak
    const [ref, inView] = useInView({
        rootMargin: "620px",
        threshold: 0,
    })

    return (
        <>
            <Navbar scrolling={inView}></Navbar>
            <Hero></Hero>
            <PageSection ref={ref} bgColor={"#2f3e46"} padding={"10vw"}>
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
