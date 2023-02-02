import styled from "styled-components";
import GlobalButton from "../GlobalButton";
import Character from "./Character";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const DataContainer = styled.div`
/* background-color: blue; */
  padding: 0 0px 0 300px;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: background 0.4s;
  h2 {
    font-size: 5rem;
    text-transform: uppercase;
    font-weight: 800;
    color: ${(props) => props.theme.primaryColor};
    text-shadow: 0px 0px 30px ${(props) => props.theme.primaryColorGlow2};
  }
  h3 {
    font-size: 1.8rem;
    color: ${(props) => props.theme.textColor1};
    transition: color 0.4s;
  }
  p {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${(props) => props.theme.textColor2};
    transition: color 0.4s;
  }
  div {
    margin: 10px 0 0;
    display: flex;
    gap: 10px;
  }
  @media (max-width: 1700px) {
    padding: 0 0 0 200px;
  }
  @media (max-width: 1440px) {
    padding: 0 0 0 100px;
  }
`;

function Presentation({coords}) {
  return (
    <Container>
      <DataContainer>
        <h2>Daniel Mosvich</h2>
        <h3>Front-end Web Developer & Digital Artist</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nobis
          nostrum consequuntur temporibus sit quaerat labore deleniti! Qui,
          error velit alias excepturi quam minus aut ex veniam explicabo cum
          temporibus.
        </p>
        <div>
          <GlobalButton padding={"15px"} color={"white"}>
            About me
          </GlobalButton>
          <GlobalButton padding={"15px"} outlined>
            About me
          </GlobalButton>
          <GlobalButton />
        </div>
      </DataContainer>
      <Character coords={coords}/>
      
    </Container>
  );
}

export default Presentation;
