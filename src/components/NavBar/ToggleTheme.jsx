import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  width: 50px;
  height: 30px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.toggle === true ? "#303136" : "white")};
  cursor: pointer;
  position: relative;
  transition: background 0.4s;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: ${(props) =>
      props.toggle === true
        ? "#303136"
        : "linear-gradient(40deg,#ffa467,#ff3131 90%)"};
    border-radius: 50%;
    position: absolute;
    margin: 0 5px;
    transition: left 0.4s;
    left: ${(props) => (props.toggle === true ? "20px" : "0px")};
    box-shadow: ${(props) =>
      props.toggle === true
        ? "inset -3px -2px 5px -2px #1a0eff, inset -10px -4px 0 0 #647af7"
        : "none"};
  }
`;
export default function ToggleTheme({ themeToggle, theme }) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    themeToggle();
    toggle === false ? setToggle(true) : setToggle(false);
  }
  useEffect(() => {
    theme === "dark" && setToggle(true);
  }, []);
  return <Container toggle={toggle} onClick={handleToggle}></Container>;
}
