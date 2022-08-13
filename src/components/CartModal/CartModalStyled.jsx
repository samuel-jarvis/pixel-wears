import styled from "styled-components";
import { GrClose } from 'react-icons/gr';
import { motion } from 'framer-motion';


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
  height: 100%;
  background-color: #fff;
  z-index: 2000000;
  padding: 4rem;
`


export const CartHeading = styled.div`
  font-size: 3rem;
  font-weight: 300;
  font-family: var(--font-styled);
  display: flex;
  align-items: center;
  position: relative;
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
  
`
export const CartProduct = styled.div`

`
export const SubTotal = styled.div`
  font-size: 2rem;
  font-weight: 400;
  font-family: var(--font-styled);
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--brown)

`
export const CartBtns = styled.div`

`