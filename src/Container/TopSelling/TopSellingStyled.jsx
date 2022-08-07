import styled from 'styled-components';
import {Container, Heading, SubHeading} from '../../globalStyles';

export const TopSellingContainer = styled(Container)`
 
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  align-items: stretch;
  grid-auto-rows: 1fr;
`

