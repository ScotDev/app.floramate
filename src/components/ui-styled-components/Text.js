import styled from 'styled-components';
// import { device } from '../../config/Breakpoints';

const Title = styled.h1`
    font-size: ${props => props.theme.size.title};
    color: ${props => props.theme.primaryText};

`

const Subtitle = styled.h2`
    font-size: ${props => props.theme.size.subtitle};
    color: ${props => props.theme.primaryText};
`

const LargeText = styled.h4`
font-size:${props => props.theme.size.largeText};
color: ${props => props.colour || props.theme.primaryColour};
`
const RegularText = styled.p`
font-size:${props => props.theme.size.regularText};
color: ${props => props.colour || props.theme.primaryColour};
`
const SmallText = styled.p`
font-size:${props => props.theme.size.smallText};
color: ${props => props.colour || props.theme.primaryColour};
`

export { Title, Subtitle, LargeText, RegularText, SmallText };