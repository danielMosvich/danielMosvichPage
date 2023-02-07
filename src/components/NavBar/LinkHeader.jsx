import styled from "styled-components";
const ContainerLink = styled.a`
  cursor: pointer;
  padding: 0 30px;
  /* color: ${(props) => props.theme.textColor1}; */
  transition: color 0.4s;
  text-decoration: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Standard */

  &:hover {
    color: ${(props) => props.theme.primaryColor};
    text-shadow: 0px 0px 10px ${(props) => props.theme.primaryColorGlow2};
    span {
      transition: 1s;
      visibility: visible;
      width: 150%;
      position: absolute;
      bottom: 0;
    }
  }
  color: ${(props) =>
    props.active ? props.theme.primaryColor : props.theme.textColor1};
  @media (max-width: 800px) {
    &:hover {
      color: ${(props) => props.theme.primaryColor};
      text-shadow: 0px 0px 10px ${(props) => props.theme.primaryColorGlow2};
      span {
        transition: 1s;
        visibility: visible;
        width: 150%;
        position: absolute;
        bottom: 0;
      }
    }
  }
`;
const Container = styled.div`
  padding: 5px 0;
  position: relative;
  transition: width 0.3s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  span {
    width: 0px;
    height: 3px;
    position: absolute;
    bottom: 0;
    background-color: ${(props) => props.theme.primaryColor};
    visibility: hidden;
    transition: 0.6s;
  }
`;
export default function LinkHeader({ url, title, active }) {
  // const styleTitle = {
  //   color: `${(props) => props.theme.primaryColor}`,
  //   textShadow: `0px 0px 10px ${(props) => props.theme.primaryColorGlow2}`,
  // }
  const styleSpan = {
    transition: "1s",
    visibility: "visible",
    width: "150%",
    position: "absolute",
    bottom: 0,
  };
  return (
    <ContainerLink href={url} active={active}>
      <Container>
        {title}
        <span style={active ? styleSpan : {}}></span>
      </Container>
    </ContainerLink>
  );
}
