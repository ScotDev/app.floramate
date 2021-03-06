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

const FilterBarWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const FilterBar = styled.form`
  width: 50%;
  border-radius: ${props => props.theme.borderRadius};
  margin: 1rem auto 0.5rem auto;
  padding: 0.5rem 2rem;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
      0 3px 7px -3px rgb(0 0 0 / 30%);
  background-color: ${props => props.theme.secondaryBlue};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  

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
  background-color:${props => props.theme.primaryText};
    margin: 0.5rem;

    label {
    color: ${props => props.theme.secondaryBlue};
    font-weight: 500;
    font-size: ${props => props.theme.size.regularText};
    padding-bottom: 0.5rem;
    }

  }

  

  @media ${device.laptopL}{
    width: 70%;
    }

  @media ${device.laptop}{
    width: 90%;
    }

    @media ${device.tablet}{
    display: ${props => props.display ? "flex" : "none"};
    flex-direction: column;
    justify-content:flex-start;
    align-items:center;
    }
`;

const IconWrapper = styled.div`
border: 0;
margin: 1rem auto 0.5rem auto;
display: none;
justify-content: flex-end;
align-items: center;
padding: 0;

@media ${device.tablet}{
    display: flex;
    }

svg {
    display: block;
    color: white;
    font-size: 2rem;

    cursor: pointer;
    background-color: ${props => props.theme.secondaryBlue};
    padding: 0.3rem;
    height: 47.375px;
    width: 47.375px;
    border-radius: ${props => props.theme.borderRadius};

  }
`;


const FilterSelect = styled.select`
  /* box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
      0 3px 7px -3px rgb(0 0 0 / 30%); */
  /* border-radius: ${props => props.theme.borderRadius}; */
  border: none;
  padding: 0.2rem 0rem;
  font-family: inherit;
  font-size: ${props => props.theme.size.regularText};
  color: ${props => props.theme.primaryText};
  background-color: ${props => props.theme.secondaryBlue};
  /* background-color: transparent; */
  cursor:pointer;

  @media ${device.tablet}{
    padding: 0.5rem 0rem;
    /* width: 150px; */
    }
`



export { SearchSection, SearchBox, SearchBtn, ResultsHeading, FilterBar, FilterBarWrapper, IconWrapper, FilterSelect };