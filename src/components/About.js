import React from 'react';
import { Content, ArticleContainer, ArticleBody } from './ui-styled-components/Utils';
import { Title, RegularText, Subtitle } from './ui-styled-components/Text';
import Navbar from './Navbar';
import Spinner from '../components/utils/Spinner';
import useAPI from '../hooks/useApi';

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

    const { data, isLoading } = getData;

    // if (isLoading) {
    //     return (
    //         <>
    //             <Navbar bgColor={"#2f3e46"} ></Navbar>
    //             <Spinner />
    //         </>
    //     )
    // }


    return (
        <>
            <Navbar bgColor={"#2f3e46"} ></Navbar>
            {isLoading && <Spinner />}
            {data && <Content>
                <ArticleContainer initial="hidden" animate="visible" variants={parentVariants}>
                    <Title maxWidth={"50ch"} color={"#2f3e46"} textShadow variants={childrenVariants}>{data.page_title}</Title>
                    <Subtitle maxWidth={"30ch"} color={"#2f3e46"} textShadow variants={childrenVariants}>{data.page_subtitle}</Subtitle>

                    <ArticleBody variants={childrenVariants}>
                        <RegularText color={"#2f3e46"} maxWidth={"65ch"} textAlign={"justify"}>{data.page_text_content}</RegularText>
                    </ArticleBody>
                </ArticleContainer>
            </Content>}
        </>
    )
}

export default About;