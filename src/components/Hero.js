import React from 'react';
import { HeroContainer } from './ui-styled-components/Hero';
import { SecondaryBtn, InfoBtn, BtnGroup } from './ui-styled-components/Button';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const btnVariants = {
    hover: { scale: 0.95, transition: { duration: 0.15 } }
}

const parentVariants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.22,
        }
    },
    hidden: {
        opacity: 0
    }
}

const childrenVariants = {
    visible: {
        opacity: 1
    },
    hidden: { opacity: 0 }
}

const Hero = () => {

    return (<>
        <HeroContainer initial="hidden" animate="visible" variants={parentVariants}>
            {/* <HeroKnockout> */}
            <motion.h1 variants={childrenVariants}>floramate</motion.h1>
            <motion.h2 variants={childrenVariants}> Helping you find wildlife-friendly plants for your area</motion.h2>
            {/* </HeroKnockout> */}
            <BtnGroup variants={childrenVariants}>
                <Link to="/species">
                    <SecondaryBtn fontSize={"1.5rem"} whileHover="hover" whileFocus="hover" variants={btnVariants}>Browse</SecondaryBtn>
                </Link>
                <Link to="/about">
                    <InfoBtn fontSize={"1.5rem"} whileHover="hover" whileFocus="hover" variants={btnVariants}>About</InfoBtn>
                </Link>
            </BtnGroup>

        </HeroContainer>
    </>)
};

export default Hero;