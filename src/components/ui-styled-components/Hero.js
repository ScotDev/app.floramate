import styled from 'styled-components';
import { device } from '../../config/Breakpoints';
import { motion } from "framer-motion";

// https://medium.com/@matt.readout/adding-css-animations-with-styled-components-6c191c23b6ba
// Check above article, define animation elsewhere and pass down to StyledNavbar, rework below nav class

// const navAnimation = props =>
//   css`
// ${fadeNav} ${props.animationLength} ease-out;
// `;

const HeroContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: left;
  /* align-items: center; */
  justify-content: center;
  padding-top:0;
  padding-bottom: 2rem;
  padding-left: ${props => props.theme.mainContentPadding};
  padding-right: ${props => props.theme.mainContentPadding};
  background-image: url("https://images.unsplash.com/photo-1453053131046-5aea58348d50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1678&q=80");
  background-repeat: no-repeat;
  background-position: top;
  background-size:cover;
  background-attachment: fixed;
  min-height: 100vh;

  box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%),
    0 3px 7px -3px rgb(0 0 0 / 30%);

    @media ${device.laptop}{
      padding-left: 15vw;
      padding-right: 15vw;
    }

    @media ${device.tablet}{
    text-align: center;
    padding-left: 5vw;
    padding-right: 5vw;

    justify-content: flex-start;

    padding-top: 4rem;
    }

h1 {
  color: ${props => props.theme.primaryText};
  font-size: 9rem;
  font-weight: 700;
  margin: 0;
  padding: 0 0 1.5rem 0;
  text-shadow: 0 6px 12px rgb(50 50 93 / 25%),
    0 3px 7px rgb(0 0 0 / 30%);
  width: 100%;

  @media ${device.laptopL} {
    font-size: 8rem;
    padding: 2rem 0 1.75rem 0;
  }
  @media ${device.laptop} {
    font-size: 6rem;
    padding-bottom: 2rem;
  }
  @media ${device.tablet} {
    font-size: 5rem;
  }
}

h2, h3{
  color: ${props => props.theme.primaryText};
  font-size: 3.2rem;
  font-weight: bold;
  margin: 0;
  padding: 0 0 1rem 0;
  text-shadow: 0 6px 12px rgb(50 50 93 / 10%),
    0 3px 7px rgb(0 0 0 / 30%);
  max-width: 40ch;

  @media ${device.laptopL} {
    font-size: 3rem;
    padding-bottom: 2.5rem;
  }
  @media ${device.laptop} {
    font-size: ${props => props.theme.size.largeText};
    padding-bottom: 2rem;
  }
  @media ${device.desktopL} {
    max-width: 100%;
    padding: 0 10em 1em 0;
  }

}
`

// !!!!!!! Save below as snippet/gist !!!! 


// const HeroKnockout = styled.div`
//   border:0;
//   text-align:left;
//   background-image: url("https://images.unsplash.com/photo-1477696957384-3b1d731c4cff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80");
//   background-color: ${props => props.theme.primaryBg};
//   background-repeat: no-repeat;
//   background-size:cover;
//   background-attachment: fixed;
//   width:100%;

//     @media ${device.tablet}{
//     text-align: center;
//   }

//   h1{
//   color: black;
//   mix-blend-mode: lighten;
//   background-color: ${props => props.theme.primaryBg};
//   font-size: 9rem;
//   font-weight: 700;
//   margin:0;
//   padding:0;
//   text-shadow: 0 6px 12px rgb(50 50 93 / 25%),
//   0 3px 7px rgb(0 0 0 / 30%);
//   width: 100%;

//    @media ${device.laptop}{
//      font-size: 6rem;
//      padding-bottom: 1rem;
//     }
//    @media ${device.tablet}{
//     font-size:5rem;
//     }
//   }

//   h1::selection{
//   background: rgba(47, 62, 70, 0.9);
//   color: ${props => props.theme.primaryBg};
//   }

//   h2, h3{
//     color: black;
//     mix-blend-mode: lighten;
//     background-color: ${props => props.theme.primaryBg};
//     font-size: 3.4rem;
//     font-weight: bold;
//     margin:0;
//     padding:0 0 1em 0;
//     text-shadow: 0 6px 12px rgb(50 50 93 / 10%),
//       0 3px 7px rgb(0 0 0 / 30%);
//     max-width: 40ch;

//     @media ${device.laptop}{
//         font-size: ${props => props.theme.size.largeText};
//         padding-bottom: 1rem;
//       }
//           @media ${device.desktopL}{
//         max-width: 100%;
//         padding: 0 10em 1em 0;
//       }

//   &::selection{
//     background: rgba(47, 62, 70, 0.9);
//     color: white;
//   }

//   }
// `;
export { HeroContainer };