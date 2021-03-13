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
`;


const FilterBar = styled.form`
  width: 50%;
  border-radius: ${props => props.theme.borderRadius};
  margin: 1rem auto;
  padding: 1rem 4rem;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
      0 3px 7px -3px rgb(0 0 0 / 30%);
  background-color: ${props => props.theme.secondaryBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  fieldset {
  /* border: 1px solid ${props => props.theme.primaryText}; */
  border:none;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
      0 3px 7px -3px rgb(0 0 0 / 30%);
  /* background-color:${props => props.theme.primaryText}; */
  background-color: transparent;

    label {
    color: ${props => props.theme.primaryText};
    font-weight: 500;
    font-size: ${props => props.theme.size.regularText};
    padding-bottom: 0.5rem;
    }

  }

`;

const FilterSelect = styled.select`
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
      0 3px 7px -3px rgb(0 0 0 / 30%);
  border-radius: ${props => props.theme.borderRadius};
  padding: 0.2rem 0.75rem;
  font-family: inherit;
  font-size: ${props => props.theme.size.regularText};
  color: ${props => props.theme.primaryText};
  background-color: ${props => props.theme.secondaryBlue};

`

export { SearchSection, SearchBox, SearchBtn, ResultsHeading, FilterBar, FilterSelect };