import styled from 'styled-components';

import { device } from '../../config/Breakpoints';

const StyledNavbar = styled.nav`
 overflow: hidden;
  background-color: transparent;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;


/* Temporary, change to mobile QMT */
  @media ${device.tablet}{
    display:none;
  }
`

const NavbarList = styled.ul`
 list-style-type: none;
    display: flex;

    &:nth-last-child() {
    align-self: flex-end;
  }
`

const NavbarListItem = styled.li`
    margin-right: 1.5rem;
    text-align: center;
    color: #f7fffb;
  height:1.8rem;

    a{
    color: #f7fffb;
    line-height: 1.7;
    padding-bottom: 0.25rem;
    }

    &:hover {
      border-bottom: 2px solid #f7fffb;
    }
        .active{
        border-bottom: 2px solid #f7fffb;
    }
`

const StyledFooter = styled.footer`
  /* position:relative;
  bottom: 0;
  left: 0; */
  /* padding: 1rem 5rem 10rem 5rem; */
  padding:1rem;
  margin:0;
  overflow: hidden;
  height: 20vh;
  width: 100%;
  background-color: ${props => props.theme.primaryColour || "#f7fffb"};
  color: ${props => props.theme.primaryAccent || "#6e6448"};
  display: flex;
  justify-content: flex-start;
`

const FooterContent = styled.ul`
display:flex;
flex-direction:row;
`

const FooterContentList = styled.ul`
display:flex;
flex-direction:column;

      `
const FooterContentListItem = styled.li`
      list-style-type: none;
      line-height: 1.7;
      /* margin-right: 4rem; */
      a{
        color: ${props => props.theme.primaryText};
  &:hover {
  border-bottom: ${props => props.theme.primaryText};
  }
      }

`


// const NavbarLink = styled.a`
//     color: #f7fffb;
//     line-height: 1.7;
//     padding-bottom: 4px;

//     &:hover {
//       border-bottom: 2px solid #f7fffb;
//     }

//     /* .active{
//         border-bottom: 2px solid #f7fffb;
//     } */
// `

export { StyledNavbar, NavbarList, NavbarListItem, StyledFooter, FooterContent, FooterContentList, FooterContentListItem };