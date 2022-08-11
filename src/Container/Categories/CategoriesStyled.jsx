import styled from 'styled-components';
import {Container} from '../../globalStyles';
import { Link } from 'react-router-dom';

export const CategoriesContainer = styled(Container)`
  background-color: var(--bg);
  position: relative;
`
export const CategoriesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`
export const CategoriesItem = styled(Link)`
  text-decoration: none;
  text-align: center;
  img {
    width: 100%;
    border-radius: 15rem;
  }

  h3 {
    font-size: 2.5rem;
    font-family: var(--font-styled);
    margin-top: 2rem;
    font-weight: 200;
  }
`

export const RoundLogo = styled.div`
  position: absolute;
  bottom: -7rem;

  img {
    animation: rotation 20s infinite linear;
    width: 15rem;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
}
`
