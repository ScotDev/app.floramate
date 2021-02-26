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
    padding-right: 1.1rem;
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
      background-color: ${props => props.theme.secondaryColour};
      color: ${props => props.theme.primaryText};
    }
    &:hover, &:focus {
      background-color: ${props => props.theme.secondaryColour};
      color: ${props => props.theme.primaryText};
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

`;

const MobileNavbar = styled(motion.div)`
  top: 0;
  left: 0;
  position: absolute;
  transform: translateY(-300px);
  height: 300px;
  background-color: ${props => props.theme.primaryColour};
  width: 100vw;
  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);

  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0;
  border-bottom: 4px solid ${props => props.theme.secondaryColour};
`;

const MobileNavList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding: 1.2rem 0;
    margin: 0;
`;

const MobileNavItem = styled(motion.li)`
    padding: 0;
    margin: 0;
    /* border-bottom: 1px solid ${props => props.theme.primaryText}; */
    text-align: center;

    a {
    color: ${props => props.theme.primaryText};
    line-height: 2;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.15s;
    border-bottom:3px solid transparent;
    transition: all 0.2s ease;
 
    &.active{
      color:${props => props.theme.secondaryColour};
      border-bottom: 3px solid ${props => props.theme.secondaryColour};
    }

    &:hover, &:focus{
      color:${props => props.theme.secondaryColour};
      border-bottom: 3px solid ${props => props.theme.secondaryColour};
    }

    }
`;

const MobileNavToggle = styled(motion.div)`
  top: 15px;
  right: 15px;
  position: absolute;
  height: 55px;
  color: ${props => props.theme.primaryText};
  width: 55px;
  display: none;
  z-index: 2;
  border-radius: ${props => props.theme.borderRadius};
  /* box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%); */
  /* background-color:rgba(0,0,0, 0.4); */
  cursor: pointer;
  padding: 7px 0;

  div{
      display: block;
      width: 60%;
      height: 3px;
      position: relative;
      border-radius: 50px;
      background: ${props => props.theme.primaryText};
      margin:0;
      padding: 0;
  }

  @media ${device.laptop}{
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }
`;

export { StyledNavbar, NavbarBrand, NavbarList, NavbarListItem, StyledFooter, FooterContent, FooterContentList, FooterContentListItem, MobileNavbar, MobileNavList, MobileNavItem, MobileNavToggle };