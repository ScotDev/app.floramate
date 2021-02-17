import styled from 'styled-components';
import { device } from '../../config/Breakpoints';


const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  /* align-items: center; */
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: ${props => props.theme.mainContentPadding};
  padding-right: ${props => props.theme.mainContentPadding};
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);

    /* @media ${device.mobileL}{
        padding: 1.5rem;
    } */
`
// Already defined in Text.js - apart from colour
const HeroTitle = styled.h1`
    font-size: ${props => props.theme.size.title};
    color: ${props => props.theme.primaryText || "#f7fffb"};
    @media ${device.mobileM}{
        font-size:2.75rem;
    }
`
// Already defined in Text.js - apart from colour
const HeroSubTitle = styled.h2`
    font-size: ${props => props.theme.size.subtitle};
    color: ${props => props.theme.primaryText || "#f7fffb"};
    @media ${device.mobileM}{
        font-size:1.75rem;
    }
`

const HeroText = styled.h3`
    font-size: ${props => props.theme.size.largeText};
    font-weight: 400;
    color: ${props => props.theme.primaryText || "#f7fffb"};
`

const HeroKnockout = styled.div`
  border:0;
  text-align:left;
  background-image: url("https://images.unsplash.com/photo-1477696957384-3b1d731c4cff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80");
  background-color: ${props => props.theme.primaryBg};
  background-repeat: no-repeat;
  background-size:cover;
  background-attachment: fixed;
  max-width:95%;
  
  h1{
  color: black;
  mix-blend-mode: lighten;
  background-color: ${props => props.theme.primaryBg};
  font-size: 9rem;
  font-weight: bold;
  margin:0;
  padding:0;
  text-shadow: 0 6px 12px rgb(50 50 93 / 25%),
  0 3px 7px rgb(0 0 0 / 30%);
  }

  h1::selection{
  background: rgba(47, 62, 70, 0.9);
  color: ${props => props.theme.primaryBg};
  }

h2, h3{
  color: black;
  mix-blend-mode: lighten;
  background-color: ${props => props.theme.primaryBg};
  font-size: 3.4rem;
  font-weight: bold;
  margin:0;
  padding:0 0 1em 0;
  text-shadow: 0 6px 12px rgb(50 50 93 / 10%),
    0 3px 7px rgb(0 0 0 / 30%);
    max-width: 40ch;

  &::selection{
    background: rgba(47, 62, 70, 0.9);
    color: white;
  }

  }
`;
export { HeroContainer, HeroTitle, HeroSubTitle, HeroText, HeroKnockout };