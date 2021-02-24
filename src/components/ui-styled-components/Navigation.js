import styled from 'styled-components';
import { device } from '../../config/Breakpoints';
import { motion } from "framer-motion";

const StyledNavbar = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0%;
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 1rem 3.5rem;
    background-color: ${props => props.bgColor || "transparent"};
    height: 75px;
    z-index: 1;
    border-bottom: 4px solid ${props => props.borderBottom || "transparent"};;

  /* Temporary while mobile nav developed */
    @media ${device.laptop}{
      display:none;
    }
  `

const NavbarBrand = styled(motion.div)`
  display: flex;
  padding: 0;
  margin: 0;
  color:#fff;

  h4{
    font-size: 2.3rem;
    padding: 0;
    margin: 0;
    font-weight: 400;
  }

  img {
    margin-right: 1rem;
    height: 50px;
    width: 50px;
  }
`;

const NavbarList = styled(motion.ul)`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;

    &:nth-last-child() {
    align-self: flex-end;
    }
`

const NavbarListItem = styled(motion.li)`
    padding-right: 1.2rem;
    text-align: center;
    
    a {
    color: ${props => props.theme.primaryText};
    line-height: 1.6;
    padding: 0.15em 1em;
    font-size:${props => props.theme.size.regularText};
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: ${props => props.theme.borderRadius};
    transition: all 0.15s;

    &.active{
      background-color: ${props => props.theme.primaryText};
      color: ${props => props.theme.primaryColour};
    }
    &:hover, &:focus {
      background-color: ${props => props.theme.primaryText};
      color: ${props => props.theme.primaryColour};
    }

    } 

`

const StyledFooter = styled.footer`
  /* position:relative;
  bottom: 0;
  left: 0; */
  padding-left: ${props => props.theme.mainContentPadding};
  padding-right: ${props => props.theme.mainContentPadding};
  margin:0;
  overflow: hidden;
  height: 15vh;
  width: 100%;
  background-color: ${props => props.theme.primaryColour || "#f7fffb"};
  color: ${props => props.theme.primaryAccent || "#6e6448"};
  display: flex;
  justify-content: flex-start;
`

const FooterContent = styled.ul`
display:flex;
flex-direction:row;
padding: 0;
`

const FooterContentList = styled.ul`
display:flex;
flex-direction:column;
padding: 0;
padding-right:5rem;
`

const FooterContentListItem = styled.li`
      list-style-type: none;
      line-height: 1.7;
      /* margin-right: 4rem; */
      a{
        color: #f7fffb;
        &:hover {
    border-bottom: 2px solid #f7fffb;
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
color: #f7fffb;
  text-decoration:none;

  &:hover {
    border-bottom: 2px solid #f7fffb;
  }
  }
`

export { StyledNavbar, NavbarBrand, NavbarList, NavbarListItem, StyledFooter, FooterContent, FooterContentList, FooterContentListItem, MobileNavbar, MobileNavMenu, MobileNavMenuItem };