// import { useEffect, useRef } from "react";
import styled from "styled-components";
import GlobalButton from "../GlobalButton";
import Character from "./Character";
const Container = styled.div`
  /* background-color: red; */
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0 300px;
  @media (max-width: 1500px) {
    padding: 0 100px;
  }
  @media (max-width: 1200px) {
    padding: 0 50px;
  }
  @media (max-width: 800px) {
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }
  @media (max-width: 400px) {
    padding: 0 10px;
  }
`;
const DataContainer = styled.div`
/* background-color: red; */
  overflow: hidden;
  animation: titleSlide 2s ease 1.5s forwards;
  opacity: 0;
  @keyframes titleSlide {
    from {
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: background 0.4s;
  z-index: 5;
  h2 {
    font-size: 8rem;
    line-height: 100%;
    text-transform: capitalize;
    font-weight: 800;
    /* color: ${(props) => props.theme.primaryColor}; */
    /* color: transparent; */
    background: linear-gradient(
      0deg,
      rgba(255, 207, 139, 1) 0%,
      rgba(255, 102, 102, 1) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 30px ${(props) => props.theme.primaryColorGlow2};
  }
  h3 {
    font-size: 1.8rem;
    color: ${(props) => props.theme.textColor1};
    transition: color 0.4s;
  }
  p {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${(props) => props.theme.textColor2};
    transition: color 0.4s;
  }
  div {
    margin-top: 10px;
    display: flex;
    gap: 10px;
  }
  @media (max-width: 1500px) {
    h2 {
      font-size: 6rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 1200px) {
    h2 {
      /* font-size: 5rem; */
    }
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    h2 {
      text-align: center;
      font-size: 4.9rem;
    }
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 400px) {
    h2 {
      font-size: 4.5rem;
    }
    h3 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.7rem;
    }
    padding-top: 60px;
  }
`;

function Presentation({ coords, id }) {
  return (
    <Container  id={id}>
      <DataContainer>
        <h2>Hola, soy Daniel Mosvich</h2>
        <h3>Front-web developer & digital artist</h3>
        <div>
          <GlobalButton padding={"15px"} color={"white"} size={"1.2rem"}>
            Proyectos
          </GlobalButton>
          <GlobalButton padding={"15px"} outlined size={"1.2rem"}>
            Descargar CV
          </GlobalButton>
        </div>
      </DataContainer>
      <Character coords={coords} />
    </Container>
  );
}

export default Presentation;
