// import { useEffect, useRef } from "react";
import styled from "styled-components";
import BackgroundBubles from "../BackgroundBubles";
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
  span {
    background: linear-gradient(
      0deg,
      rgba(255, 102, 102, 1) 50%,
      #ffcf8b 100%
    );
    animation: bgEfect 4s ease infinite both;
    @keyframes bgEfect {
      0%{
        background-size: 100% 100%;
        
      }
      50% {
        background-size: 100% 200%;
      }
      100% {
        background-size: 100% 100%;
      }
    }
    -webkit-background-clip: text;
    background-clip: text;
    h2 {
      font-size: clamp(4rem, 10vw, 7rem);
      line-height: 100%;
      text-transform: capitalize;
      font-weight: 800;
      font-family: "Azeret Mono", monospace;
      display: flex;
      color: transparent;
      text-shadow: 0px 0px 10px ${(props) => props.theme.primaryColorGlow2};
    }
  }
  h3 {
    font-family: "Roboto Mono", monospace;
    font-size: clamp(1rem, 2vw, 1.5rem);
    color: ${(props) => props.theme.textColor2};
    transition: color 0.4s;
    font-weight: 500;
  }
  h4 {
    font-family: "Roboto Mono", monospace;
    font-size: clamp(1rem, 2vw, 1.7rem);
    line-height: 100%;
    text-transform: capitalize;
    /* font-weight: 800; */
    font-weight: 600;
    color: ${(props) => props.theme.textColor1};
    transition: 0.4s;
  }
  p {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${(props) => props.theme.textColor2};
    transition: color 0.4s;
  }
  > div {
    /* margin-top: 10px; */
    padding-top: 20px;
    display: flex;
    gap: 10px;
  }
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    h2 {
      text-align: center;
    }
    h4 {
      text-align: center;
    }
  }
  @media (max-width: 400px) {
    /* h2 {
      font-size: 4.5rem;
    } */
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
    <Container id={id}>
      <BackgroundBubles></BackgroundBubles>
      <DataContainer>
        <h3>Hola, mi nombre es</h3>
        <span>
          <h2>Daniel Mosvich</h2>
        </span>
        <h4>Front-web developer & digital artist</h4>
        <div>
          <GlobalButton padding={"15px"} color={"white"} size={"1.2rem"}>
            Proyectos
          </GlobalButton>
          <GlobalButton padding={"15px"} outlined size={"1.2rem"} url="https://drive.google.com/file/d/1Vh0R4kTc4W3UdOIwyvzOJUSpXdzNw27T/view?usp=sharing">
            Descargar CV
          </GlobalButton>
        </div>
      </DataContainer>
      <Character coords={coords} />
    </Container>
  );
}

export default Presentation;
