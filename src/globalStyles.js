import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --dark: #131e2a;
    --green: #1cbe74;
    --yellow: #fab52c;
    --blue: #0094fe;
    --blue-hover: rgb(25 131 207);
    --red: #f35130;
    --card: #1d2c3d;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-family: 'Jost', sans-serif;
    border: 1px soild red;
  }

  html {
    font-size: 62.5%; 
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.2s linear;
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

  @media (max-width: 900px) {
    font-size: 3rem;
  }
`

export const SubHeading = styled.p`
  font-size: 2.2rem;
  margin-bottom: 4rem;

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
  cursor: pointer;
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
