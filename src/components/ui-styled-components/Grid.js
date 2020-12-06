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
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 2rem;
`

const CardGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(6, 1fr);
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



export { InfoGrid, GridItem, CardGrid, FlexBox, FlexBoxItem };