import styled from 'styled-components';

import { Container, Heading, Button } from '../../globalStyles';

export const CheckoutContainer = styled(Container)``;

export const CheckoutHeading = styled(Heading)`
  border-bottom: 1px solid var(--brown);
  text-align: left;
  padding-bottom: 2rem;
`


export const CheckoutGroup = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 4rem;
`
export const CheckoutForm = styled.div`
  border: 1px solid #e6e6e6;
  padding: 2rem;
`

export const FormGroup = styled.div`
  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--brown);
    font-family: var(--font-styled);
  }
`

export const InputGroup = styled.div`
  margin-bottom: 1rem;

  input {
    width: 100%;
    border: none;
    margin: 1rem 0;
    font-size: 1.6rem;
    border-bottom:1px solid #e6e6e6;
    outline: none;
  }

  label {
    font-size: 1.4rem;
  }
`

export const CheckoutProducts = styled.div`
  border: 1px solid #e6e6e6;
  padding: 2rem;
`
export const Products = styled.div`
  display: flex;
  font-size: 1.4rem;  
  min-width: 30rem;
  margin-bottom: 2rem;
`

export const ProductsImage = styled.img`
  width: 5.5rem;
  margin-right: 2rem;
`
export const ProductsInfo = styled.div``
export const ProductsName = styled.div``
export const ProductsPrice = styled.div``
export const ProductQty = styled.div`
`

export const ProductTotal = styled.div`
  font-weight: bold;
  margin-top: 1rem;
  font-size: 1.6rem;
  color: var(--brown);
`
export const SummaryInfo = styled.div`
  margin-top: 6rem;
  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--brown);
    font-family: var(--font-styled);
  }
`

export const SummaryDetails = styled.div`
  h5 {
    font-weight: 400
  }

  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin-top: ${props => props.bold ? '3rem' : ''};
`

export const CheckoutButton = styled(Button)`
  text-align: center;
`