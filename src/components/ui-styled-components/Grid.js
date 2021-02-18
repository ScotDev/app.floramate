import styled from 'styled-components';
import { device } from '../../config/Breakpoints';


const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 3rem;

 @media ${device.laptop}{
  padding: 2rem;
 }

 /* @media ${device.laptopL}{
    padding: 3rem;
    } */

 @media ${device.desktopL}{
  /* grid-template-columns: repeat( auto-fill, minmax(300px, 1fr)); */
  /* padding: 2rem 14rem; */
  padding: 2rem 14rem;
 }

`

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
`

// Should be moved to utils
const FlexBox = styled.div`
display:flex;
flex-direction:row;

/* padding-left: ${props => props.theme.mainContentPadding};
 padding-right: ${props => props.theme.mainContentPadding}; */

@media ${device.laptop}{
  flex-direction:column;
  margin: 0;
  padding: 0;
}
`

const FlexBoxItem = styled.div`
    display: flex;
    flex-direction: column;
    text-align:justify;
    margin-right:3rem;


@media ${device.laptop}{
  /* padding-right:0;
   */
   margin: 0;
}
`



export { ResultsGrid, GridItem, FlexBox, FlexBoxItem };