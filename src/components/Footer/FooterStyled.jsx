import styled from "styled-components";

import {Container} from '../../globalStyles'

export const FooterContainer = styled(Container)`
  background-color: var(--bg);
  padding-bottom: 6rem;
`

export const FooterGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export const FooterELement = styled.div`
  h3 {
    font-size: 3rem;
    font-family: var(--font-styled);  
    font-weight: 400;
    margin-bottom: 4rem;
  }

  li {
    list-style-type: none;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-weight: light;
    color: rgba(0, 0, 0, 0.7);
  }

  h5 {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 4rem;
    font-family: var(--font-styled);
  }
`
export const FooterForm = styled.div`
  input {
    font-size: 1.6rem;
    padding: 1rem;
    border: none;
  }

  button {
    font-size: 1.6rem;
    padding: 1rem;
    background-color: var(--brown);
    outline: none;
    color: white;
    border: none;
  }
`

export const Copyright = styled.div`
  text-align: center;
  font-size: 1.4rem;
  margin-top: 4rem;
  color: rgba(0, 0, 0, 0.7);
`