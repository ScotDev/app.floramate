import styled from 'styled-components';
import { motion } from "framer-motion";

const PanelsContainer = styled(motion.div)`

/* Check this height */
width: 50vw;
  height: 450px;
  display: flex;
`;

const PanelItem = styled(motion.div)`
  height: 100%;
  margin: 0 10px;
  border-radius: 50px;
  /* flex: 0.5; */
  cursor: pointer;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* transition: flex 1s ease-in; */

  .active {
    flex: 3.5;
/* Try animating with framer motion */
    h3 {
        opacity: 1;
        transition: opacity 0.5s ease-in 0.4s;
    }
  }

  h3 {
    font-size: 24px;
    color: #fff;
    position: absolute;
    bottom: 30px;
    left: 30px;
    margin: 0;
    opacity: 1;
  }
`;

export { PanelsContainer, PanelItem }