import styled from "styled-components";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useRef } from "react";
const Container = styled.div`
  padding: 100px 150px 0 0;
  width: 40%;
  height: 100%;
  display: flex;
  transition: background 0.4s;
  align-items: center;
  position: relative;
  /* background-color: green; */
`;
const ImgContainer1 = styled.div`
  /* ANIMATION */
  object-fit: cover;
  left: -40px;
  bottom: 70px;
  position: absolute;
  z-index: 4;
  animation-name: character1;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  /* background-color: red; */
  img{
    width: 100%;
    height: 100%;
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
  left: -40px;
  bottom: 70px;
  /* ANIMATION */
  animation-name: character2;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  /* animation-delay: 0.4s; */
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
  left: -40px;
  bottom: 70px;
  /* ANIMATION */
  animation-name: character3;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  /* animation-delay: 0.6s; */
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

// !-------------------------------
const Image1 = styled.img``;
const Image2 = styled.img``;
const Image3 = styled.img``;
export default function Character({ coords }) {
  const { x, y } = coords;
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);

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
          ref={img1}
          src="../../../public/characters/character1.png"
          alt="character image"
          style={styled1}
        />
      </ImgContainer1>
      <ImgContainer2>
        <img
          ref={img2}
          src="../../../public/characters/character2.png"
          alt="character image"
          style={styled2}
        />
      </ImgContainer2>
      <ImgContainer3>
        <img
          ref={img3}
          src="../../../public/characters/character3.png"
          alt="character image"
          style={styled3}
        />
      </ImgContainer3>
    </Container>
  );
}
