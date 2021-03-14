import React from 'react';
import { Content, ArticleContainer, ArticleBody } from './ui-styled-components/Utils';
import { Title, RegularText, Subtitle } from './ui-styled-components/Text';
import Navbar from './Navbar';
import Spinner from '../components/utils/Spinner';
import useAPI from '../hooks/useApi';
import { theme } from '../config/Theme';

const APIurl = process.env.REACT_APP_API_URL

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
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

const About = () => {
    const getData = useAPI(`${APIurl}/about`)
    console.log(theme)

    const { data, isLoading } = getData;

    return (
        <>
            <Navbar bgColor={"#2f3e46"} ></Navbar>
            {isLoading && <Spinner />}
            {data && <Content>
                <ArticleContainer initial="hidden" animate="visible" variants={parentVariants}>
                    <Title maxWidth={"50ch"} color={theme.secondaryBlue} textShadow variants={childrenVariants}>{data.page_title}</Title>
                    <Subtitle maxWidth={"30ch"} color={theme.secondaryBlue} textShadow variants={childrenVariants}>{data.page_subtitle}</Subtitle>

                    <ArticleBody variants={childrenVariants}>
                        <RegularText color={theme.secondaryBlue} maxWidth={"65ch"} textAlign={"justify"}>{data.page_text_content}</RegularText>
                    </ArticleBody>
                </ArticleContainer>
            </Content>}
        </>
    )
}

export default About;