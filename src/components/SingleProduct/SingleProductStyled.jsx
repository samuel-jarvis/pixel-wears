import styled from "styled-components";
import {Link} from 'react-router-dom'
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { Link } from "react-router-dom";

export const Product = styled(SplideSlide)`
  border-radius: 10px;
  color: black;

  h4 {
    font-size: 1.8rem;
    font-weight: 500;
    font-weight: var(--font-mako);
    margin-bottom: 1rem;
    text-decoration: none;

  }
  
  p {
    font-size: 1.8rem;
    text-decoration: none;
    color: var(--brown)
  }

  a {
    text-decoration: none;
    color: black;
  }
`

export const ProductImage = styled.div`
  /* background-color: #DFE4E3; */
  text-align: center;
  padding: 8rem 4rem;
  border-radius: 8rem 8rem 0 0;
  margin-bottom: 1rem;
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);



  img {
    height: 12rem;
    margin:auto;
  }
`

export const CartButton = styled.button`
  outline: none;
  border: none;
  font-size: 1.6rem;
  color: #fff;
  padding: 1rem 2rem;
  background-color: var(--brown);
  background-color: #454647;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
`