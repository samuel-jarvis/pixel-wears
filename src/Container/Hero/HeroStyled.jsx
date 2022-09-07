import styled from 'styled-components'
import {Container, Button} from '../../globalStyles'
import {motion} from 'framer-motion'

export const HeroContainer = styled(Container)`
  background-color: var(--bg);
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  padding-top: 15rem;
  padding-bottom: 10rem;
  min-height: 80vh;
  /* border-radius:  0 50% 50%/0 0 100% 100%; */
  transform: scale(1);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg);
    border-radius: 0 50% 50%/0 0 100% 100%;
    /* transform: scale(1.2); */
  }
`

export const Text = styled(motion.p)`
  font-family: var(--font-styled);
  font-size: 15rem;
  text-align: center;
  position: relative;
  z-index: 10;
  top: 35rem;
  position: absolute;
  /* transform: translate(-50%, -50%); */
  /* left: 50%;  */

  @media screen and (max-width: 768px) {
    font-size: 13rem;
    /* top: 30rem; */
  }

  @media screen and (max-width: 480px) {
    font-size: 7rem;
  }
`

export const HeroImage = styled(motion.img)`
  border: 4px solid #CFB111;
  border-radius: 5rem;
  width: 30rem;
  z-index: 1;

  @media screen and (max-width: 400px) {
    width: 30rem;
  }
`

export const HeroButton = styled(Button)`
  background-color: var(--brown);
  display: inline !important;
  z-index: 20;
`