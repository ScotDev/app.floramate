import styled from 'styled-components';

const Content = styled.div`
  min-height: 100vh;
  padding: 0 5rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
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
  height: 60%;
  background: ${props => props.theme.primaryColour};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1 !important;
  transform: skewY(-4deg);
  transform-origin: top left;
`

export { Content, PageSection, PageSectionTitle, SkewedBg };