import styled from 'styled-components';

// import { device } from '../../config/Breakpoints';

const StyledBtn = styled.button`
  border-radius: ${props => props.theme.borderRadius};
  padding: 0.3em 1em;
  margin-bottom: 0.5em;
  font-family: inherit;
  text-align: center;
  border: 2px solid transparent;
  font-size: ${props => props.fontSize || props.theme.size.regularText};
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);
  transition: border 0.2s, color 0.2s, background-image 0.2s, background-color 0.2s;
  cursor: pointer;

`

const PrimaryBtn = styled(StyledBtn)`
color: ${props => props.theme.primaryColour || "#f7fffb"};
  background-color:  ${props => props.theme.primaryText || "#487161"};
  border: 2px solid ${props => props.theme.primaryColour || "#f7fffb"};
  font-weight: bold;

  &:hover {
    color:  ${props => props.theme.primaryText || "#487161"};
    background-color: ${props => props.theme.primaryColour || "#f7fffb"};
    border: 2px solid  ${props => props.theme.primaryColour || "#487161"};
  }
  `;

const SecondaryBtn = styled(StyledBtn)`
color: ${props => props.theme.primaryText || "#f7fffb"};
background-color: ${props => props.theme.secondaryColour || "#6e6448"};
border: 2px solid ${props => props.theme.secondaryColour || "#f7fffb"};
font-weight: bold;


&:hover {
  color: ${props => props.theme.secondaryColour || "#2f3e46"};
  background-color: ${props => props.theme.primaryText || "#f7fffb"};
}
`

const InfoBtn = styled(StyledBtn)`
  color: ${props => props.theme.primaryColour || "#f7fffb"};
  background-color:  ${props => props.bgColor || "#fff"};
  border: 2px solid ${props => props.theme.primaryColour || "#f7fffb"};
  font-weight: bold;

  background-repeat: no-repeat;
  background-size:contain;
  background-attachment: fixed;

  &:hover {
    color:  ${props => props.theme.primaryText || "#487161"};
    border: 2px solid ${props => props.theme.secondaryBlue || "#f7fffb"};
    /* background-color: ${props => props.theme.primaryColour || "#f7fffb"}; */

/* Needs to be made way smaller */
    background-image: url("https://images.unsplash.com/photo-1477696957384-3b1d731c4cff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80");
  }
`


const BtnGroup = styled.div`
display: flex;
margin-bottom: 5rem;


button:nth-of-type(1) {
  margin-right:1rem;
}

`;


export { StyledBtn, PrimaryBtn, SecondaryBtn, BtnGroup, InfoBtn };
