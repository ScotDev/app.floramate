import styled from 'styled-components';
import { device } from '../../config/Breakpoints';

const ResultsGrid = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  
  & > * {
    flex: 1 1 10%;
    min-width: 270px;
    max-width: 335px;

    /* @media ${device.laptopL}{
    flex: 1 1 20%;
    } */

    /* @media ${device.laptop}{
    flex: 1 1 30%;
    } */

    @media ${device.tablet}{
    flex: 1 1 100%;
    max-width: 100%;
    } 
  }
  /* display: grid;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr));
  gap: 2rem;*/


 /* @media ${device.laptop}{
  padding: 2rem;
 }  */

 /* @media ${device.laptopL}{
    padding: 3rem;
    } */



`

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
`

// Should be moved to utils
const FlexBox = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;

& > * {
  flex: 1 1 30%;
}

/* padding-left: ${props => props.theme.mainContentPadding};
 padding-right: ${props => props.theme.mainContentPadding}; */

`

const FlexBoxItem = styled.div`
    display: flex;
    flex-direction: column;
    text-align:justify;
    align-items: center;
    margin-right: 2.5rem;

    p {
      max-width: 45ch;
    }

    h4 {
      line-height: 1.5;
    }

    h4::after {
    height: 3px;
    width: 100%;
    content: "";
    display: block;
    background-color: ${props => props.theme.secondaryColour};
    border-radius: ${props => props.theme.borderRadius}
    }

    @media ${device.laptop}{
      padding: 0.2rem 1rem;      
      margin: 0;
      flex-basis: 100%
    }
`



export { ResultsGrid, GridItem, FlexBox, FlexBoxItem };