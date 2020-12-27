import styled from 'styled-components';

import { device } from '../../config/Breakpoints';

const StyledNavbar = styled.nav`
  overflow: hidden;
  background-color: ${props => props.theme.primaryColour || "#f7fffb"};;
  display: flex;
  align-items:center;
  padding: 0.25rem 1.5rem;
  height: 4.5rem;

/* Temporary, change to mobile QMT */
  @media ${device.tablet}{
    display:none;
  }
`

const NavbarBrand = styled.div`

  display: flex;
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  color:#fff;


img {
  margin-right: 1rem;
  height: 50px;
  width: 50px;
}
`;

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
    font-size:${props => props.theme.size.smallText};
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

const MobileNavbar = styled.div`
  padding: 0;
  margin: 0;
  border: 1px solid green;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
  height:50px;
  width:50px;
      /* Just for development */
      display:none;

input{
  z-index:1;
  border: 1px solid red;
}

div {
    display: block;
    width: 33px;
    height: 4px;
    position: relative;
    border-radius: 6px;
    background: #fff;
    margin: 4px 0;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      opacity 0.55s ease;
  }

  div:first-of-type {
    transform-origin: 0% 0%;
  }
  div:last-of-type {
    transform-origin: 0% 100%;
  }
`

const MobileNavMenu = styled.ul`
    height: 400px;
    width: 50%;
    top:0;
    right:0;
    z-index:1;
    margin:0;
    padding:0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: 1px solid yellow;

    /* Just for development */
    display:none;
`
const MobileNavMenuItem = styled.li`
      text-align: center;
      list-style-type:none;
      padding:0.25rem;
      
  a {
color: ${props => props.theme.primaryText};
  text-decoration:none;

  :hover {
  border-bottom: ${props => props.theme.primaryText};
  }
  }



`



export { StyledNavbar, NavbarBrand, NavbarList, NavbarListItem, StyledFooter, FooterContent, FooterContentList, FooterContentListItem, MobileNavbar, MobileNavMenu, MobileNavMenuItem };