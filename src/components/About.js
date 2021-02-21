import React from 'react';
import { Content, ArticleContainer, ArticleBody } from './ui-styled-components/Utils';
import { Title, RegularText, Subtitle } from './ui-styled-components/Text';
import Navbar from './Navbar';

// Will query backend for content, static for development



const About = () => {
    return (
        <>
            <Navbar bgColor={"#2f3e46"}></Navbar>
            <Content initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <ArticleContainer>
                    <Title color={"#2f3e46"} maxWidth={"50ch"}>About floramate</Title>
                    <Subtitle color={"#2f3e46"} maxWidth={"40ch"}>Helping you find wildlife-friendly plants for your area</Subtitle>

                    <ArticleBody>
                        <RegularText color={"#2f3e46"} maxWidth={"65ch"} textAlign={"justify"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat consequat mauris. Dignissim sodales ut eu sem integer vitae justo eget. Pulvinar pellentesque habitant morbi tristique senectus et netus. Feugiat sed lectus vestibulum mattis ullamcorper velit. Suspendisse interdum consectetur libero id. Ipsum dolor sit amet consectetur adipiscing. Eget nunc lobortis mattis aliquam faucibus. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Pharetra et ultrices neque ornare aenean euismod elementum nisi.

                        Non blandit massa enim nec. Praesent elementum facilisis leo vel fringilla. Ornare arcu odio ut sem nulla. Ut consequat semper viverra nam libero justo. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Non quam lacus suspendisse faucibus interdum. Adipiscing tristique risus nec feugiat in fermentum posuere. Lorem ipsum dolor sit amet consectetur adipiscing elit. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Ut aliquam purus sit amet luctus venenatis lectus.

                    Nibh nisl condimentum id venenatis a condimentum. Massa tincidunt dui ut ornare. A diam maecenas sed enim ut sem viverra. Quis viverra nibh cras pulvinar mattis nunc. Arcu risus quis varius quam quisque id. Lectus nulla at volutpat diam ut. Cras fermentum odio eu feugiat pretium nibh. Egestas sed tempus urna et pharetra pharetra massa massa. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Aliquam vestibulum morbi blandit cursus. Viverra mauris in aliquam sem fringilla. Urna et pharetra pharetra massa massa. Habitant morbi tristique senectus et netus.</RegularText>
                    </ArticleBody>
                </ArticleContainer>
            </Content>
        </>
    )
}

export default About;