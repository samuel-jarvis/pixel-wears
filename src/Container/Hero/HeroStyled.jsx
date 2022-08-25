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
`

export const HeroImage = styled(motion.img)`
  border: 2px solid brown;
  border-radius: 10%;
  width: 30rem;
  z-index: 1;
`

export const HeroButton = styled(Button)`
  background-color: var(--brown);
  display: inline !important;
  z-index: 20;
`