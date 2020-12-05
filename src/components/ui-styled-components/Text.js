import styled from 'styled-components';

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
`
const RegularText = styled.p`
font-size:${props => props.theme.size.regularText};
`
const SmallText = styled.p`
font-size:${props => props.theme.size.smallText};
`

export { Title, Subtitle, LargeText, RegularText, SmallText };