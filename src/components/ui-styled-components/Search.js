import styled from 'styled-components';
import { motion } from "framer-motion";

import { device } from '../../config/Breakpoints';

const SearchSection = styled(motion.div)`
  background: url("https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height:300px;
  /* margin: 0 0 2rem 0; */
  padding: 4.5rem 0 0 0;
  text-align: center;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);

    h2{
        color: #fff;
  margin: 0 0 2rem 0;
  font-size: 3.25rem;
  font-weight: bold;
    }
`

// const SearchForm = styled.form`
//     border-radius: 6px;
//     -webkit-border-radius: 6px;
//     -moz-border-radius: 6px;
//     -ms-border-radius: 6px;
//     -o-border-radius: 6px;
//     /* border: 2px solid ${props => props.theme.primaryAccent || "#6e6448"}; */
//     width: 40%;
//     box-shadow: ${props => props.theme.boxShadow};
//     background-color: ${props => props.theme.secondaryColour};
//     padding: 1rem 1rem 2rem 1rem;

//     @media ${device.tablet}{
//     width:100%;
//     padding: 0.5rem 1rem 1rem 1rem;

// }
// `

const StyledSearchInput = styled.input`
  padding: 10px 15px;
  font-size: 1.1rem;
  font-family: inherit;
  outline: none;
  border: none;
  font-weight: bold;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
`

const SearchBox = styled(StyledSearchInput)`
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  border: 2px solid transparent;

    ::placeholder{
    font-weight:700;
    }

    /* :focus{ */
/* box-shadow:0 0 0 2px ${props => props.theme.black} */
    /* } */

    /* @media ${device.tablet}{
    width:100%;
    margin-bottom: 0.75rem;
    } */
`

const SearchBtn = styled(StyledSearchInput)`
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  cursor: pointer;
  color: #fff;
  background-color: ${props => props.theme.secondaryBlue};
  border: 2px solid transparent;

  &:hover, &:focus{
    color: #fff;
  background-color: ${props => props.theme.primaryColour};
  /* border: 2px solid var(--primary-blue); */
  border: 2px solid #fff;
  transition: 0.2s;
  }
`

const ResultsHeading = styled(motion.h3)`
  text-align: center;
  font-size: 2.5rem;
  color: ${props => props.theme.secondaryBlue};
  width: 10%;
  min-width: 175px;
  margin: 1.5rem auto;

  &::after {
    height: 3px;
    width: 100%;
    content: "";
    display: block;
    background-color: ${props => props.theme.secondaryColour};
    border-radius: ${props => props.theme.borderRadius}
  }
`

export { SearchSection, SearchBox, SearchBtn, ResultsHeading };