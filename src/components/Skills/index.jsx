import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 300px 0;
  margin-top: 100px;
  h2 {
    text-align: center;
    font-size: 5rem;
    color: ${(props) => props.theme.primaryColor};
  }
`;
const CardsContainer = styled.div`
/* background-color: red; */
  margin-top: 50px;
  width: 100%;
  max-height: 80%;
  display: grid;
  grid-template-columns: repeat(5, 180px);
  grid-auto-rows: 130px;
  justify-content: center;
  gap: 30px;
`;

function Skills() {
  return (
    <Container>
      <h2>Skills</h2>
      <CardsContainer>
        <Card url="../../../public/tech/html.png" title="html"></Card>
        <Card url="../../../public/tech/css.png" title="css"></Card>
        <Card
          url="../../../public/tech/javascript.png"
          title="javascript"
        ></Card>
        <Card url="../../../public/tech/jquery.png" title="jquery"></Card>
        <Card url="../../../public/tech/bootstrap.png" title="bootstrap"></Card>
        <Card url="../../../public/tech/sass.png" title="sass"></Card>
        <Card url="../../../public/tech/jquery.png" title="jquery"></Card>
        <Card url="../../../public/tech/git.png" title="git"></Card>
        <Card url="../../../public/tech/react.png" title="react"></Card>
        <Card
          url="../../../public/tech/styledComponents.png"
          title="styled Components"
        ></Card>
        <Card
          url="../../../public/tech/typescript.png"
          title="typeScript"
        ></Card>
        <Card
          url="../../../public/tech/material.png"
          title="material ui"
        ></Card>
        <Card url="../../../public/tech/next.png" title="next"></Card>
        <Card url="../../../public/tech/nodejs.webp" title="nodejs"></Card>
        <Card url="../../../public/tech/figma.png" title="figma"></Card>
        <Card url="../../../public/tech/photoshop.png" title="photoshop"></Card>
      </CardsContainer>
    </Container>
  );
}

export default Skills;
