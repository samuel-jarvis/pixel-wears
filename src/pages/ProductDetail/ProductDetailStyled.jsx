import styled from "styled-components";
import {Container} from '../../globalStyles'
import {motion} from 'framer-motion'

export const ProductContainer = styled(motion.div)`
  padding: 10rem 10rem;
  @media (max-width: 1100px) {
    padding: 8rem 4rem;
  }

  @media (max-width: 500px) {
    padding: 6rem 2rem;
  }
`

export const ProductGroup = styled.div`
  display: flex;
  margin-top: 5rem;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`

export const ProductImage = styled.div`
    padding: 4rem;
    flex: 0 0 50%;
    text-align: center;  
    margin-right: 8rem;

    @media screen and (max-width: 1000px) {
      margin-right: 0;
  }
`

export const Image = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 5rem;
  border-radius: 8rem 8rem 0 0;
  max-width: 40rem;
  margin: 0 auto;

  img {
    width: 100%;
    margin: auto;
    /* padding: 10rem; */
  }
`

export const Details = styled.div`
  font-size: 1.6rem;
  line-height: 2;
`

export const Price = styled.div`
  font-size: 3.2rem !important;
  color: var(--brown);
`

export const ProductDetails = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 0;
  }

  p {
    font-size: 1.4rem;
    color: rgb(0, 0, 0.7);
    padding: 1rem 0
  }
`

export const Btn = styled.button`
  width: 100%;
  font-size: 1.6rem;
  padding: 2rem;
  border: none;
  cursor: pointer;
`

export const WhiteBtn = styled(Btn)`
  background: #E9E9E9;
  color: black;
  
  `
export const BlackBtn = styled(Btn)`
  background: #454647;
  color: white;
  margin-bottom: 2rem;
  margin-top: 4rem;
`


// Sizes

export const Sizes = styled.ul`
  display: flex;
  margin-top: 4rem;
`

export const Size = styled.li`
  font-size: 1.6rem;
  list-style-type: none;
  background-color: #f3eeee;
  padding: .8rem 1.2rem;
  margin-right: 1rem ;
  color: ${({selectedSize, size}) => selectedSize === size ? 'white' : '#454647'};
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({selectedSize, size}) => selectedSize === size ? '#454647' : '#f1f0f0'};
  transition: all 0.5s ease-in-out;
`