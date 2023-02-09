import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// import Card from "./Card";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 300px;
  display: flex;
  align-items: center;
  @media (max-width: 1500px) {
    padding: 0 100px;
  }
  @media (max-width: 1200px) {
    padding: 0 50px;
  }
  @media (max-width: 800px) {
    padding: 0 20px;
    /* height: 80vh; */
    justify-content: center;
    flex-direction: column-reverse;
  }
  @media (max-width: 400px) {
    padding: 0 10px;
  }
`;
const ContainerInformation = styled.div`
  width: 50%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: clamp(1rem, 3vw, 2rem);
    transition: color 0.4s;
    color: ${(props) => props.theme.textColor1};
    margin-bottom: 10px;
  }
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
  @media (max-width: 800px) {
    width: 100%;
    height: max-content;
  }
`;
const ContainerNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const TechCard = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  img {
    object-fit: contain;
    height: 15px;
    /* filter: contrast(0.); */
  }
  div {
    width: 100%;
    display: flex;
    gap: 10px;
  }
  h4 {
    font-size: clamp(0.5rem, 2.5vw, 1rem);
    font-weight: 500;
    color: ${(props) => props.theme.textColor1};
    font-family: "Fira Sans", sans-serif;
  }
  p {
    font-weight: 500;
    font-size: clamp(0.5rem, 2.5vw, 1rem);
    color: ${(props) => props.theme.textColor2};
    font-family: "Fira Sans", sans-serif;
  }
`;
const Data = styled.div`
  backdrop-filter: blur(50px);
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
const ContainerGif = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    position: absolute;
    width: clamp(300px, 35vw, 450px);
    height: clamp(200px, 35vw, 400px);
    transform: translateY(-15%);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 45%;
    div {
      transform: translateY(0px);
    }
  }
`;

function Skills({ id }) {
  const myContainer = useRef();
  const myGif = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    observer.observe(myContainer.current);
    observer.observe(myGif.current);
  }, []);
  return (
    <Container id={id}>
      <ContainerInformation
        ref={myContainer}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(100%)",
          transition: "opacity 0.8s, transform 0.7s",
        }}
      >
        <h3>▹ Habilidades</h3>
        <Data>
          <div>
            <p>
              desde ya varios años vengo practicando la programacion y el arte,
              pase por varias tecnologias y programas pero las que mas me
              llamaron la atencion fueron las siguentes, aun asi, estoy
              dispuesto a seguir aprendiendo nuevas tecnologias para poder
              seguir creando nuevas soluciones.
            </p>
          </div>

          <div>
            <ContainerNav>
              <TechCard>
                <h4>▹ Front-end lenguajes</h4>
                <p> Html - Css - Javascript</p>
                <div>
                  <img src="/tech/html.png" alt="" />
                  <img src="/tech/css.png" alt="" />
                  <img src="/tech/javascript.png" alt="" />
                </div>
              </TechCard>

              <TechCard>
                <h4>▹ JavaScript Frameworks / librerias</h4>
                <p> React - React Native - NextJs - NodeJs</p>
                <div>
                  <img src="/tech/react.png" alt="" />
                  <img src="/tech/next.png" alt="" />
                  <img src="/tech/nodejs.webp" alt="" />
                </div>
              </TechCard>

              <TechCard>
                <h4>▹ Programas de diseño</h4>
                <p> Photoshop - Figma</p>
                <div>
                  <img src="/tech/photoshop.png" alt="" />
                  <img src="/tech/figma.png" alt="" />
                </div>
              </TechCard>
            </ContainerNav>
          </div>
        </Data>
      </ContainerInformation>

      <ContainerGif
      ref={myGif}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(100%)",
          transition: "opacity 0.8s, transform 0.8s",
        }}
      >
        <div>
          <img src="/videos/gif1.gif" alt="" />
        </div>
      </ContainerGif>
    </Container>
  );
}

export default Skills;
