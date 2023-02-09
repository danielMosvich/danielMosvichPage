import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
const Container = styled.div`
  /* background-color: purple; */
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
  /* width: 100%;
  height: 100vh;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    text-align: center;
    font-size: 5rem;
    color: ${(props) => props.theme.primaryColor};
    text-shadow: 0px 0px 30px ${(props) => props.theme.primaryColorGlow2};
  }
  @media (max-width: 800px) {
    height: max-content;
    h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 400px) {
    padding-top: 80px;
    h2 {
      font-size: 3rem;
    }
  } */
`;
// const CardsContainer = styled.div`
//   margin-top: 40px;
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(5, 180px);
//   grid-auto-rows: 130px;
//   justify-content: center;
//   gap: 30px;
//   position: relative;
//   z-index: 3;
//   @media (max-width: 1200px) {
//     grid-template-columns: repeat(4, 150px);
//     grid-auto-rows: 100px;
//   }
//   @media (max-width: 800px) {
//     grid-template-columns: repeat(4, 80px);
//     grid-auto-rows: 80px;
//     gap: 15px;
//     padding: 0 20px;
//   }
//   @media (max-width: 400px) {
//     grid-template-columns: repeat(3, 70px);
//     grid-auto-rows: 70px;
//     padding: 0px;
//     margin-top: 20px;
//   }
// `;
const ContainerInformation = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: ; */
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
  const myH2 = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    observer.observe(myH2.current);
  }, []);
  return (
    <Container id={id}>
      {/* <h2
        ref={myH2}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(100%)",
          transition: "opacity 0.8s, transform 0.8s",
        }}
      >
        Skills
      </h2>
      <CardsContainer
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(100%)",
          transition: "opacity 0.9s, transform 0.9s",
        }}
      >
        <Card url="/tech/html.png" title="html"></Card>
        <Card url="/tech/css.png" title="css"></Card>
        <Card url="/tech/javascript.png" title="javascript"></Card>
        <Card url="/tech/jquery.png" title="jquery"></Card>
        <Card url="/tech/unkwow.png" title="bootstrap"></Card>
        <Card url="/tech/sass.png" title="sass"></Card>
        <Card url="/tech/git.png" title="git"></Card>
        <Card url="/tech/react.png" title="react"></Card>
        <Card url="/tech/styledComponents.png" title="styled Components"></Card>
        <Card url="/tech/typescript.png" title="typeScript"></Card>
        <Card url="/tech/material.png" title="material ui"></Card>
        <Card url="/tech/next.png" title="next"></Card>
        <Card url="/tech/nodejs.webp" title="nodejs"></Card>
        <Card url="/tech/figma.png" title="figma"></Card>
        <Card url="/tech/photoshop.png" title="photoshop"></Card>
      </CardsContainer> */}
      <ContainerInformation
        ref={myH2}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(100%)",
          transition: "opacity 0.8s, transform 0.8s",
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
