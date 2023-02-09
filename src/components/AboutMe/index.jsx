import { useEffect, useState, useRef } from "react";
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
  }
  @media (max-width: 800px) {
    height: 70vh;
    padding: 0 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
  @media (max-width: 400px) {
    padding: 0 10px;
  }
`;

const ContainerLogo = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 800px) {
    height: 30%;
    width: 100%;
    min-width: max-content;
  }
`;

const Buble1 = styled.div`
  backdrop-filter: blur(50px);
  border: 2px solid ${(props) => props.theme.textColor3};
  padding: 10px;
  width: clamp(180px, 30vw, 300px);
  height: clamp(180px, 30vw, 300px);
  border-radius: 10px;
  position: absolute;
  overflow: hidden;
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContainerInformation = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px) {
    height: max-content;
    width: 100%;
  }
  div {
    padding: 10px;
    border-radius: 10px;
    backdrop-filter: blur(50px);
    p {
      margin-bottom: 10px;
      font-size: clamp(0.7rem, 3vw, 1rem);
      font-weight: 400;
      line-height: 150%;
      transition: color 0.4s;
      color: ${(props) => props.theme.textColor3};
      font-family: "Fira Sans", sans-serif;

      span {
        color: ${(props) => props.theme.textColor2};
        font-weight: 500;
        transition: 0.4s;
      }
    }
  }
`;
const ContainerTitle = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  h3 {
    font-size: clamp(1rem, 3vw, 2rem);
    transition: color 0.4s;
    color: ${(props) => props.theme.textColor1};
    margin-bottom: 10px;
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
          ref={myContainerLogo}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(100%)",
            transition: "opacity 0.8s, transform 0.8s",
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/100236313?v=4"
            alt="daniray logo"
          />
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
          <ContainerTitle>
            <h3>▹ Acerca de mi</h3>
          </ContainerTitle>

          <p>
            Hola! Mi nombre es Daniel, soy un{" "}
            <span>desarrollador front-end</span> con nivel intermedio y un{" "}
            <span>artista digital</span> desde hace muchos años, Mi pasión por
            la tecnología y diseño me llevaron a especializarme en el
            <span>desarrollo front-end.</span>
          </p>
          <p>
            Constantemente estoy aprendiendo nuevas tecnologías y tendencias
            <span>(front-end y futuramente back-end)</span>, para mejorar mis
            habilidades para ofrecer soluciones a mis clientes, gracias por
            tomarte el tiempo de conocerme y{" "}
            <span>
              estoy emocionado de ver como puedo ayudar en sus futuros
              proyectos.
            </span>
          </p>
        </div>
      </ContainerInformation>
    </Container>
  );
}

export default AboutMe;
