import styled from 'styled-components';
// import { device } from '../../config/Breakpoints';
// import { motion } from "framer-motion";

const ProfileContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 8rem 4rem 2rem 4rem;
  /* height: 100vh; */
  max-width: 90vw;
  margin: 0 auto;

`;

const ProfileTitle = styled.h1`
  font-size: 3.25rem;
  font-weight: bold;
  color: ${props => props.theme.primaryColour};
  margin: 0;
`;

const ProfileSubtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props => props.theme.secondaryBlue};
  margin: 1rem 0 0 0;
 `;

const ProfileGrid = styled.div`

    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr;
    gap: 2rem 2.5rem;
    grid-template-areas:
        ". ."
        ". ."
        ". ."
        ". .";

    margin-top: 2rem;
    text-align: left;

`;

export { ProfileContent, ProfileTitle, ProfileSubtitle, ProfileGrid };