import styled from 'styled-components';
import { device } from '../../config/Breakpoints';


const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 2rem;
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
text-align:center;
  background: url("https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80");
  background-color: #fff;
  background-repeat: no-repeat;
  background-size:cover;
  background-attachment: fixed;
  
  h1{
    color: black;
  mix-blend-mode: lighten;
  background-color: #fff;
  font-size: 10rem;
  font-weight: bold;
  margin:0;
  padding:0;

  @media ${device.mobileL}{
        font-size:19vw;
    }
  }

  h1::selection{
    background: rgba(47, 62, 70, 0.9);
  color: white;
  }

h2, h3{
    color: black;
  mix-blend-mode: lighten;
  background-color: #fff;
  font-size: 4rem;
  font-weight: bold;
  margin:0;
  padding:0 0 2rem 0;
  &::selection{
    background: rgba(47, 62, 70, 0.9);
  color: white;
  }

  @media ${device.mobileL}{
        font-size:8vw;
    }

    @media ${device.desktop}{
        font-size:2vw;
    }
  }
`;
export { HeroContainer, HeroTitle, HeroSubTitle, HeroText, HeroKnockout };