import styled from 'styled-components';
import { device } from '../../config/Breakpoints';
import { motion } from "framer-motion";

// Rename this - grid isn't a grid anymore
const ResultsGrid = styled.div`
  display: flex;
  padding: 0 2rem;
  margin: 2rem auto 0 auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  & > * {
    flex: 1 1 100%;
    min-width: 300px;
    max-width: 340px;

    /* @media ${device.laptopL}{
    flex: 1 1 20%;
    } */

  }

/* Dev only */

img#spinner{
  margin: 0 auto;
}

`

// Dead, remove after check
const GridItem = styled.div`
    display: flex;
    flex-direction: column;
`

// Should be moved to utils
const FlexBox = styled(motion.div)`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;

& > * {
  flex: 1 1 30%;
}

/* padding-left: ${props => props.theme.mainContentPadding};
 padding-right: ${props => props.theme.mainContentPadding}; */

`

const FlexBoxItem = styled(motion.div)`
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