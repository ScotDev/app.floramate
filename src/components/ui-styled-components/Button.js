import styled from 'styled-components';

const StyledBtn = styled.button`
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.5rem;
  font-family: inherit;
  text-align: center;
  border: 2px solid transparent;

&:hover {
    cursor: pointer;
  }
`

const PrimaryBtn = styled(StyledBtn)`
color: ${props => props.theme.primaryColour || "#f7fffb"};
  background-color:  ${props => props.theme.primaryText || "#487161"};
  border: 2px solid ${props => props.theme.primaryColour || "#f7fffb"};
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    color:  ${props => props.theme.primaryText || "#487161"};
    background-color: ${props => props.theme.primaryColour || "#f7fffb"};
    border: 2px solid  ${props => props.theme.primaryColour || "#487161"};
    transition: 0.2s;
  }
  `;

const SecondaryBtn = styled(StyledBtn)`
color: ${props => props.theme.primaryText || "#f7fffb"};
background-color: ${props => props.theme.secondaryColour || "#6e6448"};
border: 2px solid ${props => props.theme.secondaryColour || "#f7fffb"};
font-weight: bold;
font-size: 1.2rem;

&:hover {
  color: ${props => props.theme.secondaryColour || "#2f3e46"};
  background-color: ${props => props.theme.primaryText || "#f7fffb"};
  transition: 0.2s;
}
`

const InfoBtn = styled(StyledBtn)`
  color: ${props => props.theme.primaryColour || "#f7fffb"};
  background-color:  ${props => props.theme.primaryText || "#487161"};
  border: 2px solid ${props => props.theme.primaryColour || "#f7fffb"};
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    color:  ${props => props.theme.primaryText || "#487161"};
    background-color: ${props => props.theme.primaryColour || "#f7fffb"};
    transition: 0.2s;
  }
`




const BtnGroup = styled.div`
display: flex;
/* align-items: space-between;
justify-content:space-between; */

button:nth-of-type(1) {
  margin-right:1vw;
}

`;


export { StyledBtn, PrimaryBtn, SecondaryBtn, BtnGroup, InfoBtn };
