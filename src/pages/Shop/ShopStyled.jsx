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
  position: relative;
  display: grid;
  grid-template-columns: 350px 3fr;
  align-items: start;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`
// Filter Button
export const Filter = styled.div`
  display: none;
  text-align: right;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  color: var(--brown);

  p {
    color: black;
    margin-right: 1rem;
    font-weight: 500;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`
// Filter options
export const ProductFilter = styled.div`
  position: sticky;
  top: 10rem;
  align-self: start;
  margin-right: 4rem;
;

  @media screen and (max-width: 1024px) {
    background-color: white;
    top: 0;
    left: 0;
    padding: 2rem;
    padding-top: 10rem;
    position: fixed;
    width: 100%;
    z-index: 78;
    height: 100vh;
    display: block;
    /* display: ${props => props.showFilter ? 'none' : 'block'}; */
  }
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

  @media screen and (max-width: 1024px) {
    background-color: white;
    border: 1px solid var(--brown);
  }
`

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
  grid-gap: 4rem;
  align-items: stretch;
  grid-auto-rows: 1fr;
  margin-bottom: 6rem;
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