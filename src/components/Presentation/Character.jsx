import styled from "styled-components";
import { useEffect, useState } from "react";
const Container = styled.div`
  animation:characterSlide 2s ease 1.5s forwards;
  opacity: 0;
  @keyframes characterSlide {
    from{
      transform: translateX(100%);
    } to{
      opacity: 1;
      transform: translateX(0px);
    }
  }
  width: 40%;
  height: 100%;
  display: flex;
  transition: background 0.4s;
  align-items: center;
  justify-content: center;

  position: relative;
  padding-top: 60px;
  /* background-color: red; */

  @media (max-width: 1200px) {
    padding-top: 0px;
  }
  @media (max-width: 800px) {
    width: 60%;
    position: absolute;
    opacity: 0.1;
    filter: grayscale(1);
    @keyframes characterSlide {
    from{
      transform: translateX(100%);
    } to{
      opacity: 0.1;
      transform: translateX(0px);
    }
  }
  }
  @media (max-width: 400px) {
    /* background-color: red; */
    width: 80%;
  }
  /* @media (max-width:800px) {
    padding-top: 0;
  } */
`;
const ImgContainer1 = styled.div`
  /* ANIMATION */
  width: 100%;
  object-fit: cover;
  z-index: 4;
  animation-name: character1;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @keyframes character1 {
    0% {
      transform: translate(-5px, -5px);
    }
    50% {
      transform: translate(5px, 5px);
    }
    100% {
      transform: translate(-5px, -5px);
    }
  }
  @media (max-width: 800px) {
    transform: none;
  }
`;
const ImgContainer2 = styled.div`
  position: absolute;
  z-index: 3;
  /* ANIMATION */
  width: 100%;
  animation-name: character2;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @keyframes character2 {
    0% {
      transform: translate(-5px, -5px);
    }
    50% {
      transform: translate(5px, 5px);
    }
    100% {
      transform: translate(-5px, -5px);
    }
  }
`;
const ImgContainer3 = styled.div`
  position: absolute;
  z-index: 2;
  /* ANIMATION */
  width: 100%;
  animation-name: character3;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @keyframes character3 {
    0% {
      transform: translate(-5px, -5px);
    }
    50% {
      transform: translate(5px, 5px);
    }
    100% {
      transform: translate(-5px, -5px);
    }
  }
`;

export default function Character({ coords }) {
  const { x, y } = coords;

  const [styled1, setStyled1] = useState({ transform: "" });
  const [styled2, setStyled2] = useState({ transform: "" });
  const [styled3, setStyled3] = useState({ transform: "" });

  useEffect(() => {
    setStyled1({ transform: `translate(-${x / 50}px, -${y / 50}px)` });
    setTimeout(() => {
      setStyled2({ transform: `translate(-${x / 50}px, -${y / 50}px)` });
    }, 50);
    setTimeout(() => {
      setStyled3({ transform: `translate(-${x / 50}px, -${y / 50}px)` });
    }, 100);
  }, [coords]);
  return (
    <Container>
      <ImgContainer1>
        <img
          src="characters/character1.png"
          alt="character image"
          style={styled1}
        />
      </ImgContainer1>
      <ImgContainer2>
        <img
          src="characters/character2.png"
          alt="character image"
          style={styled2}
        />
      </ImgContainer2>
      <ImgContainer3>
        <img
          src="characters/character3.png"
          alt="character image"
          style={styled3}
        />
      </ImgContainer3>
    </Container>
  );
}
