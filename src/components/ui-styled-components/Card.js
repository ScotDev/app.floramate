import styled from 'styled-components';
import { device } from '../../config/Breakpoints';
import { motion } from "framer-motion";

const ResultsCard = styled(motion.div)`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: ${props => props.theme.primaryColour};
  min-height: 375px;
  height: fit-content;
  /* min-width: 270px; */
  /* width: 300px; */
  overflow: hidden;
  /* max-width: 300px; */
  margin: 0.9rem;
  border-radius: 8px;
  /*  Taken from Stripe */
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
  overflow: hidden;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  transition: all ease 0.2s;

  &::before {
  content: "";
  display: block;
  height: 15px;
  width: 100%;
  background-color: ${props => props.theme.secondaryColour};
  }

  /* &:hover, &:focus {
    opacity: 0.7;
    transform: translateY(-6px);
  } */

  img{
  height: 225px;
  object-fit: cover;
  width: 100%;
  border-bottom: 3px solid ${props => props.theme.secondaryColour};
  /* position: relative; */
  }

  h4 {
  /* color: #fff; */
  /* border-bottom: 2px solid var(--primary-green); */
  font-size: 1.2rem;
  text-align: center;
  margin: 0.5rem 1.5rem;
  padding-bottom: 0.3rem;
}

#divider {
  max-width: 20px;
  width: 5%;
  height: 2px;
  border-radius: 5px;
  background-color: ${props => props.theme.secondaryColour}
}

h5 {
  /* color: #fff; */
  border-bottom: 2px solid ${props => props.theme.secondaryColour};
  font-size: ${props => props.theme.size.regularText};
  text-align: center;
  margin: 0.5rem 1.5rem 1rem 1.5rem;
  padding-bottom: 0.3rem;
  font-style: italic;
  width: 85%;

}

`

const InnerCardGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  /* margin: 0.8rem 1rem;*/
  padding: 0.8rem 1.5rem;
  overflow: hidden;
  width: 100%;

  @media ${device.tablet}{
    gap: 0.6rem;
    padding: 0.7rem 1rem;
  }

  div{
    display: flex;
    flex-direction: row;
    overflow: hidden;
    font-weight: 500;
    align-items: center;

  svg{
    color: ${props => props.theme.secondaryColour};
    font-size: 1.5rem;
    margin-right: 0.25rem;

    @media ${device.tablet}{
    font-size: 1.25rem;
    }
  }
  
  p{
    color: ${props => props.theme.secondaryBlue};
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;

    @media ${device.tablet}{
    font-size: 1rem;
    }
  }

  }
`

export { ResultsCard, InnerCardGrid };