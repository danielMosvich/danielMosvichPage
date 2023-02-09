import styled from "styled-components";

const Container = styled.div`
  font-weight: bold;
  width: fit-content;
  position: relative;
  cursor: pointer;
  padding: ${(props) => props.padding || "0px"};
  background-color: ${(props) => props.bg || props.theme.primaryColor};
  color: ${(props) => props.color || props.theme.textColor1};
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: ${(props) => (props.size ? props.size : "1rem")};
  a {
    z-index: 3;
    color: ${(props) => props.color || props.theme.primaryColor};
    text-decoration: none;
  }
  @media (max-width: 1500px) {
    font-size: calc(${(props) => (props.size ? props.size : "1rem")} / 1.1);
  }
  @media (max-width: 1200px) {
    padding: 10px;
  }
  @media (max-width: 800px) {
    font-size: calc(${(props) => (props.size ? props.size : "1rem")} / 1.5);
  }
  overflow: hidden;
  &:hover {
    > div {
      clip-path: circle(70% at 50% 50%);
      opacity: 0.2;
      transition: opacity 0.4s, clip-path 0.8s;
    }
  }
  > div {
    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${(props) => props.theme.textColor2};
    /* background-color: red; */
    filter: contrast(1);
    opacity: 0;
    transition: opacity 0.4s, clip-path 1.5s;
    left: 0;
    clip-path: circle(0% at 50% 50%);
  }
`;

const ContainerOutline = styled.a`
  font-weight: bold;
  width: fit-content;
  cursor: pointer;
  position: relative;
  padding: ${(props) => props.padding || "0px"};
  background-color: transparent;
  color: ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.primaryColor};
  display: flex;
  align-items: center;
  font-size: ${(props) => (props.size ? props.size : "1rem")};
  a {
    z-index: 3;
    color: ${(props) => props.color || props.theme.primaryColor};
    text-decoration: none;
  }
  @media (max-width: 1500px) {
    font-size: calc(${(props) => (props.size ? props.size : "1rem")} / 1.1);
  }
  @media (max-width: 1200px) {
    padding: 10px;
  }
  @media (max-width: 800px) {
    font-size: calc(${(props) => (props.size ? props.size : "1rem")} / 1.5);
  }
  overflow: hidden;
  &:hover {
    > div {
      clip-path: circle(70% at 50% 50%);
      opacity: 0.2;
      transition: opacity 0.4s, clip-path 0.8s;
    }
  }
  > div {
    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${(props) => props.theme.primaryColor};
    opacity: 0;
    transition: opacity 0.4s, clip-path 1.5s;
    left: 0;
    clip-path: circle(0% at 50% 50%);
  }
`;
// "https://drive.google.com/file/d/1Vh0R4kTc4W3UdOIwyvzOJUSpXdzNw27T/view?usp=sharing"
export default function GlobalButton({
  children,
  bg,
  padding,
  color,
  outlined,
  size,
  url,
}) {
  return (
    <>
      {outlined ? (
        <ContainerOutline bg={bg} padding={padding} color={color} size={size}>
          {url ? (
            <a href={url} target={"_blank"}>
              {children}
            </a>
          ) : (
            children
          )}
          <div></div>
        </ContainerOutline>
      ) : (
        <Container bg={bg} padding={padding} color={color} size={size}>
          {url ? (
            <a href={url} target={"_blank"}>
              {children}
            </a>
          ) : (
            children
          )}
          <div></div>
        </Container>
      )}
    </>
  );
}
