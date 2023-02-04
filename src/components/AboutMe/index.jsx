import { useEffect, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0 300px;
  @media (max-width: 1500px) {
    padding: 0 100px;
  }
  @media (max-width: 1200px) {
    padding: 0 50px;
    height: 70vh;
  }
  @media (max-width: 800px) {
    padding: 0 20px;
  }
  @media (max-width: 400px) {
    padding: 0 10px;
    height: 50vh;
  }
`;

const ContainerLogo = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* background-color: #ff00004c; */
`;

const Buble1 = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 10px;
  position: absolute;
  z-index: 4;
  @media (max-width: 1500px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 1200px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 400px) {
    width: 70px;
    height: 70px;
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
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: 3.2rem;
    transition: color 0.4s;
    color: ${(props) => props.theme.textColor1};
  }
  p {
    margin-bottom: 20px;
    font-size: 1.1rem;
    font-weight: 500;
    transition: color 0.4s;
    color: ${(props) => props.theme.textColor2};
  }
  @media (max-width: 1200px) {
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 800px) {
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 400px) {
    h3 {
      font-size: 1.7rem;
    }
    p {
      font-size: 0.6rem;
    }
  }
`;
function AboutMe({}) {
  return (
    <Container>
      <ContainerLogo>
        <Buble1>
          <img src="/daniray.svg" alt="daniray logo" />
        </Buble1>
        {/* <Buble2 />
        <Buble3 /> */}
      </ContainerLogo>

      <ContainerInformation>
        <h3>Quien soy?</h3>
        <p>
          Hola! Mi nombre es Daniel, soy un desarrollador front-end con nivel
          intermedio y un artista digital desde hace muchos años, Mi pasión por
          la tecnología y diseño me llevaron a especializarme en el desarrollo
          front-end.
        </p>
        

        <p>
          Constantemente estoy aprendiendo nuevas tecnologías y tendencias
          (front-end y futuramente back-end), para mejorar mis habilidades para
          ofrecer soluciones a mis clientes, gracias por tomarte el tiempo de
          conocerme y estoy emocionado de ver como puedo ayudar en sus futuros
          proyectos
        </p>
      </ContainerInformation>
    </Container>
  );
}

export default AboutMe;
