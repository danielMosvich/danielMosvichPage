import styled from "styled-components";

import ToggleTheme from "./ToggleTheme";
import LinkHeader from "./LinkHeader";
import PhoneMenu from "./PhoneMenu";

const Container = styled.div`
  padding: 0 300px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundColorBlur};
  transition: background 0.4s;
  backdrop-filter: blur(50px);
  position: fixed;
  z-index: 6;
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
`;
const ContainerLogo = styled.a`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  img {
    height: 40px;
    width: 40px;
    object-fit: contain;
    z-index: 3;
  }
  div {
    user-select: none;
    h3 {
      color: ${(props) => props.theme.primaryColor};
      font-size: 1rem;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      letter-spacing:2px;
    }
    h4 {
      color: ${(props) => props.theme.primaryColor};
      font-size: 0.9rem;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      letter-spacing:2px;
    }
  }
  @media (max-width: 1500px) {
    width: 20%;
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 800px) {
  }
`;
const ContainerNav = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
    transition: color, border, 0.4s;
  }
  @media (max-width: 1500px) {
    width: 80%;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

function NavBar({ themeToggle, theme, sectionPosition }) {
  return (
    <Container>
      <ContainerLogo href="/#home">
        <img src="/daniray.svg" alt="daniel mosvich icon" />
        <div>
          <h3>aniel</h3>
          <h4>mosvich</h4>
        </div>
      </ContainerLogo>
      <PhoneMenu themeToggle={themeToggle} theme={theme} />
      <ContainerNav>
        <LinkHeader
          active={sectionPosition === 1 ? true : false}
          url="#home"
          title="Home"
        />
        <LinkHeader
          active={sectionPosition === 2 ? true : false}
          url="#aboutme"
          title="About me"
        />
        <LinkHeader
          active={sectionPosition === 3 ? true : false}
          url="#skills"
          title="Skills"
        />
        {/* <LinkHeader url="#works" title="Works" /> */}
        <LinkHeader
          active={sectionPosition === 4 ? true : false}
          url="#contact"
          title="Contact"
        />
        <ToggleTheme themeToggle={themeToggle} theme={theme} />
      </ContainerNav>
    </Container>
  );
}
export default NavBar;
