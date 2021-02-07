import styled from 'styled-components';

import { device } from '../../config/Breakpoints';

const SearchSection = styled.div`
  background: url("https://images.unsplash.com/photo-1534237828806-a4855e4b4596?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 35vh;
  /* margin: 0 0 2rem 0; */
  padding: 3.5rem 0 0 0;
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

const ResultsHeading = styled.h3`
  text-align: center;
  font-size: 2.5rem;
  color: ${props => props.theme.secondaryBlue};
  border-bottom: 2px solid rgba(47, 62, 70, 0.5);
  width: 15%;
  min-width: 175px;
  margin: 1.5rem auto 0 auto;
`

export { SearchSection, SearchBox, SearchBtn, ResultsHeading };