import styled from "styled-components";

const Container = styled.div`
  font-weight: bold;
  width: fit-content;
  cursor: pointer;
  padding: ${(props) => props.padding || "0px"};
  background-color: ${(props) => props.bg || props.theme.primaryColor};
  color: ${(props) => props.color || props.theme.textColor1};
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: ${(props)=> props.size ? props.size : "1rem"};
  @media (max-width: 1500px) {
    font-size: calc( ${(props => props.size ? props.size : "1rem")}/ 1.1);
  }
  @media (max-width: 1200px) {
    padding: 10px;
  }
  @media (max-width: 800px) {
    font-size: calc( ${(props => props.size ? props.size : "1rem")}/ 1.5);
  }
`;
const ContainerOutline = styled.div`
  font-weight: bold;
  width: fit-content;
  cursor: pointer;
  padding: ${(props) => props.padding || "0px"};
  background-color: transparent;
  color: ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.primaryColor};
  display: flex;
  align-items: center;
  font-size: ${(props)=> props.size ? props.size : "1rem"};
  @media (max-width: 1500px) {
    font-size: calc( ${(props => props.size ? props.size : "1rem")}/ 1.1);
  }
  @media (max-width: 1200px) {
    padding: 10px;
  }
  @media (max-width: 800px) {
    font-size: calc( ${(props => props.size ? props.size : "1rem")}/ 1.5);
  }
`;
export default function GlobalButton({
  children,
  bg,
  padding,
  color,
  outlined,
  size
}) {
  return (
    <>
      {outlined ? (
        <ContainerOutline bg={bg} padding={padding} color={color} size={size}>
          {children}
        </ContainerOutline>
      ) : (
        <Container bg={bg} padding={padding} color={color} size={size}>
          {children}
        </Container>
      )}
    </>
  );
}
