import styled from 'styled-components';

const StyledNavbar = styled.nav`
 overflow: hidden;
  background-color: transparent;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export { StyledNavbar, NavbarList, NavbarListItem };