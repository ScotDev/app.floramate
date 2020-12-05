import styled from 'styled-components';

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 2rem;
`

const CardGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(6, 1fr);
`

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
`

export { InfoGrid, GridItem, CardGrid };