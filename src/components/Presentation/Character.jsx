import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRef } from "react";
const Container = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  transition: background 0.4s;
  align-items: center;
  justify-content: center;
  /* background-color: red; */

  position: relative;
  padding-top: 80px;
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
  img{
    width:100%;
    height:100%;
    object-fit:contain;
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
  img{
    width:100%;
    height:100%;
    object-fit:contain;
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
  img{
    width:100%;
    height:100%;
    object-fit:contain;
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
          
          src="../../../public/characters/character1.png"
          alt="character image"
          style={styled1}
        />
      </ImgContainer1>
      <ImgContainer2>
        <img
          
          src="../../../public/characters/character2.png"
          alt="character image"
          style={styled2}
        />
      </ImgContainer2>
      <ImgContainer3>
        <img
          
          src="../../../public/characters/character3.png"
          alt="character image"
          style={styled3}
        />
      </ImgContainer3>
    </Container>
  );
}
