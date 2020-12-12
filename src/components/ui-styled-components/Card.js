import styled from 'styled-components';
// import { device } from '../../config/Breakpoints';


const Card = styled.div`
box-shadow: ${props => props.boxShadow || props.theme.boxShadow};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  background: ${props => props.colour || props.theme.primaryAccent};
  color: ${props => props.colour || props.theme.primaryText};
  /* Should probably be fixed dimensions */
  height: 100%;
  width: 100%;
  border-radius: 6px;
  padding-bottom: 0.5rem;
  overflow: hidden;
  transition: transform 0.1s ease;
  -webkit-transition: transform 0.1s ease;
  -moz-transition: transform 0.1s ease;
  -ms-transition: transform 0.1s ease;
  -o-transition: transform 0.1s ease;

  img {
    border-radius: 5px 5px 0 0;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 225px;
  }


  &:hover {
    transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    -o-transform: translateY(-5px);
  }
`;

export { Card };