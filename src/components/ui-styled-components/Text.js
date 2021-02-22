import styled from 'styled-components';
import { motion } from "framer-motion";
// import { device } from '../../config/Breakpoints';

const Title = styled(motion.h1)`
    font-size: ${props => props.theme.size.title};
    color: ${props => props.color || props.theme.primaryText};
    margin-bottom: 0.5em;
    max-width: ${props => props.maxWidth};
`
const Subtitle = styled(motion.h2)`
    font-size: ${props => props.theme.size.subtitle};
    color: ${props => props.color || props.theme.primaryText};
    margin-bottom: 0.5em;
    max-width: ${props => props.maxWidth};
    text-align: ${props => props.textAlign};
`
const LargeText = styled(motion.h4)`
    font-size:${props => props.theme.size.largeText};
    color: ${props => props.color || props.theme.primaryColour};
    max-width: ${props => props.maxWidth};
    text-align: ${props => props.textAlign};
    margin-bottom: 0.5em;
`
const RegularText = styled(motion.p)`
    font-size:${props => props.theme.size.regularText};
    color: ${props => props.color || props.theme.primaryColour};
    max-width: ${props => props.maxWidth};
    line-height: 1.6;
    text-align: ${props => props.textAlign};
    padding: ${props => props.padding || "1em"};

`
const SmallText = styled(motion.p)`
    font-size:${props => props.theme.size.smallText};
    color: ${props => props.color || props.theme.primaryColour};
`

export { Title, Subtitle, LargeText, RegularText, SmallText };