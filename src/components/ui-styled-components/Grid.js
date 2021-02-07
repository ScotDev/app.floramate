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
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  /* margin: 1.5rem 0; */
  padding: 2rem 6rem;
overflow: hidden;


 @media ${device.tablet}{
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  padding: 1rem;
 }
 /* @media ${device.laptopL}{
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem 4rem;
 } */

 @media ${device.desktopL}{
  grid-template-columns: repeat(6, 1fr);
  padding: 2rem 5rem;
  gap: 1.5rem;
 }

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