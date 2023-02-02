import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  margin-top: 200px;
`;
const AllData = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
`;
const SvgContainer = styled.div`
  width: 100%;
  height: 10px;
  position: relative;
  /* background-color: red; */
  img {
    position: absolute;
    top: -423px;
  }
`;
const ContainerDraw = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: purple; */
  position: relative;
  img {
    left: 150px;
    position: absolute;
    top: 90px;
    height: 90%;
  }
`;
const ContainerData = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 50px 0 300px;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Head = styled.div`
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
`;
const Body = styled.div`
  width: 100%;
  /* height: 100px; */
  /* background-color: green; */
  border-top: 2px solid white;
  margin-top: 20px;
  padding-top: 20px;

  display: flex;
  justify-content: space-between;
`;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h4 {
    font-size: 2.5rem;
    color: white;
    font-weight: 500;
  }
  p {
    font-size: 1.2rem;
    color: white;
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
`;
function Contact() {
  return (
    <Container>
      <SvgContainer>
        <img src="../../../public/wave.svg" alt="" />
      </SvgContainer>

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
                <p>GitHub</p>
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
