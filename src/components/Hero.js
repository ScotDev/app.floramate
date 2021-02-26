import React from 'react';
import { HeroContainer } from './ui-styled-components/Hero';
import { SecondaryBtn, InfoBtn, BtnGroup } from './ui-styled-components/Button';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.22,
        }
    }
}
const childrenVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

const Hero = () => {

    return (<>
        <HeroContainer initial="hidden" animate="visible" variants={containerVariants}>

            <motion.h1 variants={childrenVariants} initial="hidden">floramate</motion.h1>
            <motion.h2 variants={childrenVariants} initial="hidden"> Helping you find wildlife-friendly plants for your area</motion.h2>

            <BtnGroup variants={childrenVariants} initial="hidden">
                <Link to="/species">
                    <SecondaryBtn fontSize={"1.5rem"} >Browse</SecondaryBtn>
                </Link>
                <Link to="/about">
                    <InfoBtn fontSize={"1.5rem"}>About</InfoBtn>
                </Link>
            </BtnGroup>

        </HeroContainer>
    </>)
};

export default Hero;