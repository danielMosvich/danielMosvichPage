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
`;
export default function GlobalButton({
  children,
  bg,
  padding,
  color,
  outlined,
}) {
  return (
    <>
      {outlined ? (
        <ContainerOutline bg={bg} padding={padding} color={color}>
          {children}
        </ContainerOutline>
      ) : (
        <Container bg={bg} padding={padding} color={color}>
          {children}
        </Container>
      )}
    </>
  );
}
