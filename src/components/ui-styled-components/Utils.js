import styled from 'styled-components';

import { device } from '../../config/Breakpoints';

const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  /* padding: 2rem 4rem; */
  /* height: 100vh; */
  /* max-width: 90vw; */
  /* margin: 0 auto; */
  
  /* @media ${device.tablet}{
    padding: 0.5vw;
  } */
`
const PageSection = styled.div`
  padding-left: ${props => props.theme.mainContentPadding};
  padding-right: ${props => props.theme.mainContentPadding};
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  background-color: ${props => props.bgColor};
`
const PageSectionTitle = styled.h3`
    font-size: ${props => props.theme.size.subtitle};
    color: ${props => props.color || props.theme.primaryColour};
    border-bottom: 2px solid ${props => props.color || props.theme.primaryColour};
    margin-bottom: 1rem;
    padding-bottom: 0.3rem;
    align-self: flex-start;

    @media ${device.desktop}{
        font-size:1.7vw;
    }
`

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



export { Content, PageSection, PageSectionTitle, SkewedBg, CreditSection };