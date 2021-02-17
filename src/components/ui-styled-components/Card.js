import styled from 'styled-components';
// import { device } from '../../config/Breakpoints';


const ResultsCard = styled.div`

display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

  background-color: #fff;
  color: ${props => props.theme.primaryColour};
  min-height: 375px;
  height: fit-content;
  width: 100%;
  min-width: 325px;
  overflow: hidden;
  max-width: 400px;
  border-radius: 8px;
  /*  Taken from Stripe */
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
  overflow: hidden;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  transition: transform ease 0.2s, opacity ease 0.2s;

  &::before {
  content: "";
  display: block;
  height: 15px;
  width: 100%;
  background-color: ${props => props.theme.secondaryColour};
  }

  &:hover, &:focus {
    opacity: 0.7;
  transform: scale(0.97);
  }

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
  font-size: 1.1rem;
  text-align: center;
  margin: 0.5rem 1.5rem 1rem 1.5rem;
  padding-bottom: 0.3rem;
  font-style: italic;
  width: 85%;
}

`

const InnerCardGrid = styled.div`
  display: grid;
  gap: 0.25rem;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  /* margin: 0.8rem 1rem;*/
  padding: 0 0 0 1.8rem;
  overflow: hidden;
  width: 100%;

  div{
    display: flex;
  flex-direction: row;
  overflow: hidden;
  /* text-transform: capitalize; */
  font-weight: 500;
  /* align-items: center; */

  svg{
    color: ${props => props.theme.secondaryColour};
  font-size: 1.75rem;
  align-self: center;
  }
  
p{
  color: ${props => props.theme.primaryColour};
  font-size: 1rem;
  margin: 0.5rem 0 0.95rem 0.5rem;
}

  }
`

export { ResultsCard, InnerCardGrid };