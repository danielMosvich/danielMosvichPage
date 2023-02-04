import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 100px;
  /* background-color: red; */
  z-index: 3;
  h2 {
    text-align: center;
    font-size: 5rem;
    color: ${(props) => props.theme.primaryColor};
    text-shadow: 0px 0px 30px ${(props) => props.theme.primaryColorGlow2};
  }
  position: sticky;
  top: 100px;
  @media (max-width: 800px) {
    h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 400px) {
    h2 {
      font-size: 3rem;
    }
  }
`;
const CardsContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 180px);
  grid-auto-rows: 130px;
  justify-content: center;
  gap: 30px;
  /* background-color: red; */
  z-index: 3;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 150px);
    grid-auto-rows: 100px;
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(4, 80px);
    grid-auto-rows: 80px;
    gap: 15px;
    padding: 0 20px;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(3, 70px);
    grid-auto-rows: 70px;
    padding: 0px;
    margin-top: 20px;
  }
`;

function Skills() {
  return (
    <Container>
      <h2>Skills</h2>
      <CardsContainer>
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
      </CardsContainer>
    </Container>
  );
}

export default Skills;
