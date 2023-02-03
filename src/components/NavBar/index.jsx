import styled from "styled-components";
import gsap from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
import LinkHeader from "./LinkHeader";

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  /* box-shadow: 0px 4px 15px ${(props) => props.theme.shadowColor}; */
  background-color: ${(props) => props.theme.backgroundColorBlur};
  transition: background 0.4s;
  backdrop-filter: blur(50px);
  position: fixed;
  z-index: 5;
`;
const ContainerLogo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;
const ContainerNav = styled.div`
  /* background-color: red; */
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1500px) {
    width: 80%;
  }
  @media (max-width: 1200px) {
      width:100%;
    }
  a {
    text-transform: uppercase;
    color: ${(props) => props.theme.textColor1};
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
    transition: color, border, 0.4s;
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
        <img
          ref={logo}
          src="/daniray.svg"
          alt="daniel mosvich icon"
        />
      </ContainerLogo>
      <ContainerNav>
        <LinkHeader url="#presentation" title="Home" />
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
