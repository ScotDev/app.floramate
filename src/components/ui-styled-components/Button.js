import styled from 'styled-components';

const StyledBtn = styled.button`
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.5rem;
  font-family: inherit;
  text-align: center;
  border: 2px solid;

&:hover {
    cursor: pointer;
  }
`

const PrimaryBtn = styled(StyledBtn)`
  color: ${props => props.theme.primaryText || "#f7fffb"};
  background-color: ${props => props.theme.primaryAccent || "#6e6448"};
  border: 1px solid ${props => props.theme.primaryText || "#f7fffb"};
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    color: ${props => props.theme.primaryColour || "#2f3e46"};
    background-color: ${props => props.theme.primaryText || "#f7fffb"};
    border: 1px solid ${props => props.theme.primaryColour || "#f7fffb"};
    transition: 0.2s;
  }
`

const SecondaryBtn = styled(StyledBtn)`
  color: ${props => props.theme.primaryText || "#f7fffb"};
  background-color:  ${props => props.theme.secondaryColour || "#487161"};
  border: 1px solid ${props => props.theme.primaryText || "#f7fffb"};
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    color:  ${props => props.theme.secondaryColour || "#487161"};
    background-color: ${props => props.theme.primaryText || "#f7fffb"};
    border: 1px solid  ${props => props.theme.secondaryColour || "#487161"};
    transition: 0.2s;
  }
`


export { StyledBtn, PrimaryBtn, SecondaryBtn };
