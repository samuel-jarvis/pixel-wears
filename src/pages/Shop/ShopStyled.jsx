import styled from 'styled-components';
import {Container, Heading, Button} from '../../globalStyles';

export const ShopContainer = styled(Container)`
`

export const ShopHeading = styled(Heading)`
  border-bottom: 1px solid var(--brown);
  text-align: left;
  padding-bottom: 2rem;
`

export const ShopGroup = styled.div`
  display: grid;
  grid-template-columns: 350px 3fr;
  align-items: start;
`

export const ProductFilter = styled.div`
  position: sticky;
  top: 10rem;
  align-self: start;
  margin-right: 4rem;
`
export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  align-items: stretch;
  grid-auto-rows: 1fr;
  margin-bottom: 6rem;
`

export const FilterGroup = styled.div`
  margin-bottom: 3rem;
  background-color: #e8e8e885;
  padding: 2rem;
  border-radius: 1rem;

  h3 {
    font-size: 2.5rem;
    font-weight: 200;
    margin-bottom: 2rem;
  }

  li {
    list-style: none;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    cursor: pointer;
  }
`

export const PriceInput = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 1rem 0.5rem;
    font-size: 1.5rem;
    border: 1px solid #BF996F;
    width: 10rem;
    color: rgba(0, 0, 0, 0.8);

  }

  & :not(input) {
    margin: 0 0.5rem;
  }
`

export const FilterButton = styled(Button)`
  background-color: var(--brown);
  display: inline-block;
  margin-top: 2rem;
  font-size: 1.5rem;
`