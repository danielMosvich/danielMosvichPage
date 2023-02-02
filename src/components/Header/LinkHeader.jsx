import styled from "styled-components";
const ContainerLink = styled.a`
  background-color: green;
  cursor: pointer;
  padding: 0 30px;
  /* @media (max-width: 1200px) {
    padding: 0 10px;
    } */
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
`;
const Container = styled.div`
  /* background-color: blue; */
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
export default function LinkHeader({ url, title }) {
  return (
    <ContainerLink>
      <Container href={url}>
        {title}
        <span></span>
      </Container>
    </ContainerLink>
  );
}
