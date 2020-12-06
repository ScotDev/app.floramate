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
export { HeroContainer, HeroTitle, HeroSubTitle, HeroText };