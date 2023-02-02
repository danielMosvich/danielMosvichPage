import { useEffect, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const ContainerLogo = styled.div`
  width: 40%;
  padding: 0 0 0 300px;
  display: flex;
  align-items: center;
  position: relative;
  /* background-color: red; */
  @media (max-width: 1700px) {
    padding: 0 0 0 200px;
  }
  @media (max-width: 1440px) {
    padding: 0 0 0 100px;
    justify-content: center;
  }
`;

const Buble1 = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 10px;
  position: absolute;
  z-index: 4;
  @media (max-width: 1700px) {
    width: 300px;
    height: 300px;
  }
  img {
    object-fit: contain;

    animation-name: logoSpiner;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes logoSpiner {
      to {
        transform: rotate(0deg);
      }
      from {
        transform: rotate(-360deg);
      }
    }
  }
`;

const ContainerInformation = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 300px 0 0;
  @media (max-width: 1700px) {
    padding: 0 200px 0 0;
  }
  @media (max-width: 1440px) {
    padding: 0 100px 0 0;
  }
  h3 {
    font-size: 3.2rem;
    transition: color 0.4s;
    color: ${(props) => props.theme.textColor1};
  }
  p {
    font-size: 1.1rem;
    font-weight: 500;
    transition: color 0.4s;
    color: ${(props) => props.theme.textColor2};
  }
`;
function AboutMe({}) {
  return (
    <Container>
      <ContainerLogo>
        <Buble1>
          <img src="../../../public/daniray.svg" alt="daniray logo" />
        </Buble1>
        {/* <Buble2 />
        <Buble3 /> */}
      </ContainerLogo>

      <ContainerInformation>
        <h3>Daniel Reyes Mosvich</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat
          sed, pariatur est nobis, eum illo neque quidem itaque nesciunt
          voluptatum similique iste earum aspernatur, facilis vitae! Id, nostrum
          saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reiciendis numquam praesentium, quia enim veritatis alias odio
          sapiente magnam ipsum? Amet ipsum corporis iure, voluptate dolores
          nulla impedit reprehenderit ullam odio.
        </p>
      </ContainerInformation>
    </Container>
  );
}

export default AboutMe;
