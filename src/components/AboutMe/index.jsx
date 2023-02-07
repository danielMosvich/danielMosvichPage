import { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0 300px;
  /* background-color: red; */
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
    height: max-content;
    padding: 80px 10px 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    gap: 30px;
  }
`;

const ContainerLogo = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* background-color: #a6ff00; */
  @media (max-width: 400px) {
    height: 20%;
  }
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 400px) {
    height: max-content;
  }
  /* background-color: red; */
  div {
    /* background-color: green; */
    h3 {
      font-size: 3.2rem;
      transition: color 0.4s;
      color: ${(props) => props.theme.textColor1};
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
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
      height: max-content;
      h3 {
        font-size: 1.7rem;
      }
      p {
        font-size: 0.6rem;
      }
    }
  }
`;
function AboutMe() {

  const myContainerLogo = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    observer.observe(myContainerLogo.current);
  }, []);
  return (
    <Container id="aboutme">
      <ContainerLogo>
        <Buble1
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(100%)",
            transition: "opacity 0.8s, transform 0.8s",
          }}
        >
          <img src="/daniray.svg" alt="daniray logo" />
        </Buble1>
      </ContainerLogo>

      <ContainerInformation>
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(100%)",
            transition: "opacity 0.9s, transform 0.9s",
          }}
        >
          <h3 >Quien soy?</h3>
          <p>
            Hola! Mi nombre es Daniel, soy un desarrollador front-end con nivel
            intermedio y un artista digital desde hace muchos años, Mi pasión
            por la tecnología y diseño me llevaron a especializarme en el
            desarrollo front-end.
          </p>
          <p ref={myContainerLogo}>
            Constantemente estoy aprendiendo nuevas tecnologías y tendencias
            (front-end y futuramente back-end), para mejorar mis habilidades
            para ofrecer soluciones a mis clientes, gracias por tomarte el
            tiempo de conocerme y estoy emocionado de ver como puedo ayudar en
            sus futuros proyectos.
          </p>
        </div>
      </ContainerInformation>
    </Container>
  );
}

export default AboutMe;
