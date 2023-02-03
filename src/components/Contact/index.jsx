import styled from "styled-components";

const Container = styled.div`
  /* transform: translateY(-5px); */
  background-color: ${(props) => props.theme.primaryColor};
  width: 100%;
  padding: 0 300px;
  display: flex;
  position: relative;
  height: 100vh;
  @media (max-width: 1500px) {
    padding: 0 100px;
  }
  @media (max-width: 1200px) {
    padding: 0 50px;
  }
  @media (max-width: 800px) {
    padding: 0 20px;
  }
  @media (max-width: 400px) {
    padding: 0 10px;
  }
  z-index: 1;
`;
const AllData = styled.div`
  width: 100%;
  display: flex;
  /* height: 100vh; */
  /* background-color: black; */
`;
const ContainerDraw = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  img {
    position: absolute;
    height: 80%;
    width: 100%;
    object-fit: contain;
  }
  @media (max-width: 800px) {
    width: 30%;
  }
`;
const ContainerData = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: green; */
  @media (max-width: 800px) {
    width: 70%;
  }
`;
const Head = styled.div`
  /* background-color: purple; */
  img {
    width: 200px;
    height: 200px;
    filter: brightness(3);
  }
  h3 {
    font-size: 4.5rem;
    font-weight: 800;
    color: white;
  }
  p {
    font-size: 1.5rem;
    color: white;
  }
  @media (max-width: 1200px) {
    h3 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
      color: white;
    }
    img {
      width: 150px;
      height: 150px;
      filter: brightness(3);
    }
  }
  @media (max-width: 800px) {
    h3 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.9rem;
      color: white;
    }
    img {
      width: 100px;
      height: 100px;
      filter: brightness(3);
    }
  }
`;
const Body = styled.div`
  width: 100%;
  /* height: 100px; */
  /* background-color: red; */
  border-top: 2px solid white;
  margin-top: 20px;
  padding-top: 20px;

  display: flex;
  justify-content: space-between;
  @media (max-width: 400px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* background-color: blue; */
  h4 {
    font-size: 2.5rem;
    color: white;
    font-weight: 500;
  }
  p {
    font-size: 1.2rem;
    color: white;
  }
  @media (max-width: 1200px) {
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
const RedesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h4 {
    font-size: 2.5rem;
    color: white;
    font-weight: 500;
  }
  a {
    text-decoration: none;
    display: flex;
    gap: 10px;
    p {
      font-size: 1.2rem;
      color: white;
    }
    img {
      height: 20px;
    }
  }
  @media (max-width: 1200px) {
    h4 {
      font-size: 1.5rem;
    }
    a {
      p {
        font-size: 0.8rem;
      }
      img {
        height: 15px;
      }
    }
  }
`;
function Contact() {
  return (
    <Container>
      <AllData>
        <ContainerData>
          <Head>
            <img src="../../../public/daniray.svg" alt="" />
            <h3>Daniel Mosvich</h3>
            <p>contactame en mis redes :D</p>
          </Head>
          <Body>
            <ContactContainer>
              <h4>Contacto</h4>
              <p>danirayytxx@gmail.com</p>
            </ContactContainer>
            <RedesContainer>
              <h4>Redes</h4>
              <a href="#">
                <p>GitHub</p>
                <img src="../../../public/icons/github.png" alt="" />
              </a>
              <a href="#">
                <p>LinkedIn</p>
                <img src="../../../public/icons/linkedin.png" alt="" />
              </a>
            </RedesContainer>
          </Body>
        </ContainerData>

        <ContainerDraw>
          <img src="../../../public/characters/character4.png" alt="" />
        </ContainerDraw>
      </AllData>
    </Container>
  );
}

export default Contact;
