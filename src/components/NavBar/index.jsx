import styled from "styled-components";
import gsap from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
import LinkHeader from "./LinkHeader";
import PhoneMenu from "./PhoneMenu";

const Container = styled.div`
  /* background-color: purple; */
  padding: 0 300px;
  width: 100%;
  height: 60px;
  display: flex;
  /* box-shadow: 0px 4px 15px ${(props) => props.theme.shadowColor}; */
  background-color: ${(props) => props.theme.backgroundColorBlur};
  transition: background 0.4s;
  backdrop-filter: blur(50px);
  position: fixed;
  z-index: 5;
  @media (max-width: 1500px) {
    padding: 0 100px;
  }
  @media (max-width: 1200px) {
    padding: 0 50px;
  }
  @media (max-width: 800px) {
    padding: 0 20px;
  }
  @media (max-width:400px) {
    padding: 0 10px;
  }
`;
const ContainerLogo = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    height: 45px;
    width: 45px;
    object-fit: contain;
  }
  @media (max-width: 1500px) {
    width: 20%;
  }
  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: 800px) {
    display: flex;
    width: 40%;
  }
`;
const ContainerNav = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-transform: uppercase;
    color: ${(props) => props.theme.textColor1};
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
    transition: color, border, 0.4s;
  }
  @media (max-width: 1500px) {
    width: 80%;
  }
  @media (max-width: 1200px) {
    width: 100%;
    a{
      font-size: 1rem;
    }
  }
  @media (max-width:800px) {
    display: none;
  }
  
`;

function NavBar({ themeToggle, theme }) {
  const logo = useRef(null);
  useEffect(() => {
    gsap.to(logo.current, {
      rotate: 360,
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  }, []);
  return (
    <Container>
      <ContainerLogo>
        <img ref={logo} src="/daniray.svg" alt="daniel mosvich icon" />
      </ContainerLogo>
      <PhoneMenu themeToggle={themeToggle} theme={theme}/>
      <ContainerNav>
        <LinkHeader url="uwu.com" title="Home" />
        <LinkHeader url="#presentation" title="About me" />
        <LinkHeader url="#presentation" title="Skills" />
        <LinkHeader url="#presentation" title="Works" />
        <LinkHeader url="#presentation" title="Contact" />

        {/* <a href="#aboutMe">About me</a>
        <a href="#">Skills</a>
        <a href="#">Works</a>
        <a href="#">Contact</a> */}
        {/* bru */}
        <ToggleTheme themeToggle={themeToggle} theme={theme} />
      </ContainerNav>
    </Container>
  );
}
export default NavBar;
