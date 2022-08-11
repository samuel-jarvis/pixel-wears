import React from 'react'
import styled from 'styled-components'
import roundLogo from '../../assets/roundLogo.png';

const Section = styled.section`
  background-color: #f1f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Image = styled.div`
  img {
    animation: rotation 10s infinite linear;
    animation-delay: .5s;
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

const Loading = () => {
  return (
    <Section>
      <Image>
        <img src={roundLogo} alt="" />
      </Image>
    </Section>
  )
}

export default Loading