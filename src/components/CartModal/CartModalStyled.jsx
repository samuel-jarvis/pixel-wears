import styled from "styled-components";
import { GrClose } from 'react-icons/gr';
import { motion } from 'framer-motion';
import {BsDash, BsPlus} from 'react-icons/bs';
import {BiTrashAlt} from 'react-icons/bi';
import { Button } from "../../globalStyles";


export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`

export const CartCard = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 40vw;
  min-width: 36rem;
  height: 100%;
  background-color: #fff;
  z-index: 2000000;
  padding: 4rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 3rem;
    padding-right: 2rem;
  }
`


export const CartHeading = styled.div`
  font-size: 3rem;
  font-weight: 300;
  font-family: var(--font-styled);
  display: flex;
  align-items: center;
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--brown);


 p {
    font-size: 2.5rem;
    margin-left: 1rem;
    height: 3.5rem;
    width: 3.5rem;
    /* background-color: #000; */
    color: #fff;
    text-align: center;
    border-radius: 50%;
    vertical-align: bottom;
    color: var(--brown)
 }
`

export const CloseModal = styled(GrClose)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  color: var(--brown);
  font-size: 2rem;
  z-index: 100000;
`

export const CartProducts = styled.div`
  height: 50rem;
  overflow: hidden;
  overflow-y: scroll;
  margin: 4rem 0;

  &::-webkit-scrollbar {
    width: 3px;
  }
  
  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    background: $primary  ;
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

`
export const CartProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 3rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6e6e6;
  min-height: 10rem;

  img {
    width: 7rem;
    border-radius: 5rem 5rem 0 0;
    display: inline;
    margin-right: 3rem;

    @media screen and (max-width: 768px) {
      width: 5rem;
      height: 5rem;
      margin-right: 2rem;
    }
  }

  h4 {
    font-size: 1.7rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1.6rem;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* justify-content: space-between; */
  flex: 1;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: 300;
  font-family: var(--font-styled);
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--brown);

  p {
    font-size: 2rem;
    font-family: var(--font-styled);
  }

`

export const SubTotal = styled.div`
  font-size: 2rem;
  font-weight: 400;
  font-family: var(--font-styled);
`

export const CartBtns = styled.div`
  text-align: center;
`

export const Checkout = styled(Button)`
  display: inline-block;
  margin-top: 2rem;
  text-align: center;
`

export const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 1rem;
  font-size: 12rem;
  font-size: 1.8rem;
  width: 10rem;
  margin-right: 4rem;

  @media screen and (max-width: 768px) {
    margin-right: 2rem;
    font-size: 1.6rem;
    padding: .6rem;
    width: 6rem;

  }
`

export const Add = styled(BsPlus)``
export const Minus = styled(BsDash)``
export const Delete = styled(BiTrashAlt)`
  font-size: 2rem;
  margin-right: 2rem;
`

export const EmptyCart = styled.div`
  font-size: 2rem;
  font-weight: 300;
  /* font-family: var(--font-styled); */
  text-align: center;
`