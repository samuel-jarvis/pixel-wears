import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #ECE6E0;
    --font-mako: 'Mako', sans-serif;
    --font-styled: "OrpheusW05-Regular";
    --brown: #A6753F;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 1px soild red !important;
  }

  html {
    font-size: 62.5%; 
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    color: ;
    transition: all 0.2s linear;
    overflow-x: hidden;
  }

  p, div {
    font-family: var(--font-mako);
  }
`;

export const Container = styled.div`
  padding: 10rem 10rem;

  @media (max-width: 1100px) {
    padding: 8rem 4rem;
  }

  @media (max-width: 500px) {
    padding: 6rem 2rem;
  }
  /* max-width: 1400px; */
`;

export const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  font-family: var(--font-styled);
  text-align: center;

  @media (max-width: 900px) {
    font-size: 3rem;
  }
`

export const SubHeading = styled.p`
  font-size: 1.8rem;
  margin-bottom: 8rem;
  font-family: var(--font-mako);
  text-align: center;

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
`

export const Button = styled.div`
  font-size: 1.8rem;
  color: white;
  padding: 1rem 2.5rem;
  background-color: var(--blue);
  border-radius: 0.5rem;
  cursor: pointer !important;
  transition: all 0.2s linear;

  &:hover {
    font-size: 1.9rem;
    background-color: var(--blue-hover);
  }
`

// Themes
export const lightTheme = {
  background: '#efe7e7',
  text: '#131e2a'
}

export const darkTheme = {
  // background: '#131e2a',
  background: '#0e121b',
  text: 'white'
}


export default GlobalStyles;
