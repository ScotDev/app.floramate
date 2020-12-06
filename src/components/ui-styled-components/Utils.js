import styled from 'styled-components';

import { device } from '../../config/Breakpoints';

const Content = styled.div`
  min-height: 100vh;
  padding: 0 5rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width:100vw;
  
  @media ${device.tablet}{
    padding: 0 2rem;
  }
`
const PageSection = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const PageSectionTitle = styled.h3`
    font-size: ${props => props.theme.size.subtitle};
    color: ${props => props.theme.secondaryColour};
    border-bottom: 4px solid ${props => props.theme.secondaryColour};
    margin-bottom: 2rem;
    padding-bottom: 0.3rem;
    align-self: flex-start;
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
    :hover{
      border-bottom: 2px solid ${props => props.theme.primaryText};
    }
  }


`



export { Content, PageSection, PageSectionTitle, SkewedBg, CreditSection };