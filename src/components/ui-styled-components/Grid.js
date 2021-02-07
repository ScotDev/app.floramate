import styled from 'styled-components';
import { device } from '../../config/Breakpoints';

// Maybe change this
// const GridContainer = styled.div`
// display:flex;
// flex-direction:row;

// @media ${device.tablet}{
//   flex-direction:column;
// }
// `
const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  margin: 1.5rem 0;
  padding: 1rem 3rem;

`

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
`


const FlexBox = styled.div`
display:flex;
flex-direction:row;

@media ${device.tablet}{
  flex-direction:column;
}
`

const FlexBoxItem = styled.div`
    display: flex;
    flex-direction: column;
text-align:justify;
padding-right:2rem;

@media ${device.tablet}{
  padding-right:0;
}
`



export { ResultsGrid, GridItem, FlexBox, FlexBoxItem };