import styled from "styled-components";
import { useEffect, useState } from "react";
import LinkHeader from "./LinkHeader";
import ToggleTheme from "./ToggleTheme";
const Container = styled.div`
  width: 60%;
  display: none;
  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
const IconContainer = styled.button`
  background-color: transparent;
  z-index: 3;
  width: 40px;
  height: 40px;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  div {
    width: 40px;
    height: 4px;
    border-radius: 2px;
    background-color: ${(props) => props.theme.textColorPure};
    transition: all 0.4s ease-out;
  }
`;
const OptionsMenu = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 2;
  top: 0px;
  right: -100vw;
  background-color: ${(props) => props.theme.backgroundColor};
  transition: transform ,background, 0.4s;
`;
const LinksContainer = styled.div`
  width: 200px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 600;
  & > span{
    height: 60px;
    display: flex;
    align-items: center;
  }
  /* transition: color 0.4s; */
`;
export default function PhoneMenu({ themeToggle, theme }) {
  const [buttonState, setButtonState] = useState(false);

  const [style1, setStyle1] = useState({ transform: "" });
  const [style2, setStyle2] = useState({ transform: "" });
  const [style3, setStyle3] = useState({ transform: "" });
  const [style4, setStyle4] = useState({ transform: "" });
  const [styleOption, setStyleOption] = useState({ transform: "" });
  function changeStyle() {
    if (!buttonState) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }
  useEffect(() => {
    if (buttonState) {
      setStyle1({
        transform: "rotate(-180deg) translateY(-9px)",
      });
      setStyle2({
        transform: "rotate(270deg)",
      });
      setStyle3({
        transform: "rotate(270deg) translate(12px) scale(0.8)",
        // visibility:"hidden"
      });
      setStyle4({
        transform: "rotate(45deg)",
      });
      setStyleOption({
        transform: "translateX(-100vw)",
      });
    } else {
      setStyle1({
        transform: "rotate(0deg) translate(0px,0px)",
      });
      setStyle2({
        transform: "rotate(0deg)",
      });
      setStyle3({
        ...style3,
        transform: "rotate(0deg) translate(0px ,0px) scale(1)",
        visibility: "visible",
      });
      setStyle4({
        transform: "rotate(0deg)",
      });
      setStyleOption({
        transform: "translateX(100vw)",
      });
    }
  }, [buttonState]);
  return (
    <Container>
      <IconContainer style={style4} onClick={changeStyle}>
        <div style={style1}></div>
        <div style={style2}></div>
        <div style={style3}></div>
      </IconContainer>
      <OptionsMenu style={styleOption}>
        <LinksContainer>
          <span onClick={changeStyle}>
            <LinkHeader url="#home" title="Home" />
          </span>
          <span onClick={changeStyle}>
            <LinkHeader url="#aboutme" title="About me" />
          </span>
          <span onClick={changeStyle}>
            <LinkHeader url="#skills" title="Skills" />
          </span>
          {/* <span onClick={changeStyle}>
            <LinkHeader url="#presentation" title="Works" />
          </span> */}
          <span onClick={changeStyle}>
            <LinkHeader url="#contact" title="Contact" />
          </span>
          <span>
            <ToggleTheme themeToggle={themeToggle} theme={theme}/>
          </span>
        </LinksContainer>
      </OptionsMenu>
    </Container>
  );
}
