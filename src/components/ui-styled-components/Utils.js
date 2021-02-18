import styled from 'styled-components';

import { device } from '../../config/Breakpoints';

const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 2rem 4rem; */
  /* height: 100vh; */
  /* max-width: 90vw; */
  /* margin: 0 auto; */
  

`
const PageSection = styled.div`
  padding-left: ${props => props.padding || props.theme.mainContentPadding};
  padding-right: ${props => props.padding || props.theme.mainContentPadding};
  /* padding-top: 1rem; */
  padding-bottom: 4rem;
  display: ${props => props.display || "flex"};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  background-color: ${props => props.bgColor};
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);

    @media ${device.laptop}{
  padding: 1.5rem;
}
`
const PageSectionTitle = styled.h3`
    font-size: ${props => props.theme.size.subtitle};
    color: ${props => props.color || props.theme.primaryColour};
    /* border-bottom: 2px solid ${props => props.color || props.theme.primaryColour}; */
    margin-bottom: 1rem;
    padding-bottom: 0.3rem;
    text-align: center;
    /* align-self: center; */
`

const ArticleContainer = styled.div`
  /* background-color: ${props => props.theme.primaryText}; */
  background: linear-gradient(180deg,#ebf4fd,hsla(0,0%,100%,0) 10%,hsla(0,0%,100%,0) 80%,#ebf4fd);
  margin: 3rem 0;
  padding: 2rem 4rem;
  border-radius: ${props => props.theme.borderRadius};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet}{
    /* width:100%; */
    padding: 1.1rem;
    margin: 0;
  }
`;


const ArticleBody = styled.article`
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
  border-radius: ${props => props.theme.borderRadius};
  margin: 2rem 0;
  width: 70%;
  padding: 1rem 3rem;

  @media ${device.laptop}{
    width:90%;
  }

    @media ${device.tablet}{
    width:100%;
    padding: 1rem;
  }
`;

const SkewedBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height:60%;
  background: ${props => props.theme.primaryColour};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1 !important;
  transform: skewY(-4deg);
  transform-origin: top left;

  /* @media ${device.desktop}{
    height:45%;
  } */
  @media ${device.laptop}{
    height:50%;
  }
  @media ${device.tablet}{
    height:45%;
  }
  @media ${device.mobileL}{
    height:60%;
  }
  @media ${device.mobileM}{
    height:80%;
  }
  @media ${device.mobileS}{
    height:90%;
  }
`

const CreditSection = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
background-color:${props => props.theme.primaryColour || "#f7fffb"};
/* border: none;
  margin-top: -1px; */
  padding-bottom:2rem;

  a{
    color: ${props => props.theme.primaryText};
    text-decoration: none;
    &:hover{
      border-bottom: 2px solid ${props => props.theme.primaryText};
    }
  }


`



export { Content, PageSection, PageSectionTitle, ArticleContainer, ArticleBody, SkewedBg, CreditSection };