import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {Heading} from '../../globalStyles';

import "@splidejs/splide/dist/css/themes/splide-default.min.css";



export const LatestHeading = styled(Heading)`
  text-align: center;
`

// Producs SLider
export const ProductSlide = styled(Splide)`
  margin-top: 8rem;
`
  

export const Products = styled(SplideSlide)`
  /* width: 10rem; */
`
