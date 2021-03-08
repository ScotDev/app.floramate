import React from 'react';
import { useQuery } from 'react-query';
import { Content, ArticleContainer, ArticleBody } from './ui-styled-components/Utils';
import { Title, RegularText, Subtitle } from './ui-styled-components/Text';
import Navbar from './Navbar';
import Error from './Error';
import Spinner from '../components/utils/Spinner';


const APIurl = process.env.REACT_APP_API_URL

let responseCode;

const fetchData = async () => {
    const res = await fetch(`${APIurl}/about`);
    console.log(res.status)
    if (res.status === 404) {
        responseCode = res.status
    }
    return res.json();
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
    const { data, isLoading, isError } = useQuery('about', fetchData);

    if (isLoading) {
        return (
            <>
                <Navbar bgColor={"#2f3e46"} ></Navbar>
                <Spinner />
            </>
        )
    }

    if (isError) {
        return (<>
            <Navbar bgColor={"#2f3e46"} ></Navbar>
            <Error code={responseCode} />
        </>)
    }

    return (
        <>
            <Navbar bgColor={"#2f3e46"} ></Navbar>
            <Content>
                <ArticleContainer initial="hidden" animate="visible" variants={parentVariants}>
                    <Title maxWidth={"50ch"} color={"#2f3e46"} textShadow variants={childrenVariants}>{data && data.page_title}</Title>
                    <Subtitle maxWidth={"30ch"} color={"#2f3e46"} textShadow variants={childrenVariants}>{data && data.page_subtitle}</Subtitle>

                    <ArticleBody variants={childrenVariants}>
                        <RegularText color={"#2f3e46"} maxWidth={"65ch"} textAlign={"justify"}>{data && data.page_text_content}</RegularText>
                    </ArticleBody>
                </ArticleContainer>
            </Content>
        </>
    )
}

export default About;