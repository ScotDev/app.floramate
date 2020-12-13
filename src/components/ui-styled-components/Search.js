import styled from 'styled-components';

import { device } from '../../config/Breakpoints';

const SearchSection = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
width:100%;
`

const SearchForm = styled.form`
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    -ms-border-radius: 6px;
    -o-border-radius: 6px;
    /* border: 2px solid ${props => props.theme.primaryAccent || "#6e6448"}; */
    width: 40%;
    box-shadow: ${props => props.theme.boxShadow};
    background-color: ${props => props.theme.secondaryColour};
    padding: 1rem 1rem 2rem 1rem;

    @media ${device.tablet}{
    width:100%;
    padding: 0.5rem 1rem 1rem 1rem;

}
`

const SearchBox = styled.input`
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: ${props => props.theme.size.regularText};
    outline: 0;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    -ms-border-radius: 6px;
    -o-border-radius: 6px;
    border: none;
    padding: 0.5rem 0.75rem;
    font-family: inherit;
    width: 70%;

    ::placeholder{
    font-weight:500;
    }

    :focus{
box-shadow:0 0 0 2px ${props => props.theme.black}
    }

    @media ${device.tablet}{
    width:100%;
    margin-bottom: 0.75rem;
    }
`

export { SearchSection, SearchForm, SearchBox };