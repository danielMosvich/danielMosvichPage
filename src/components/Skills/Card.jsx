import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  gap: 15px;
  /* width: 200px;
    height: 150px; */
  border-radius: 10px;
  /* color: #; */
  background-color: ${(props) => props.theme.cardBackground};
  transition: background 0.4s;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 15px ${(props) => props.theme.shadowColor};
  img {
    object-fit: contain;
    height: 60px;
  }
  p {
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    color: ${(props) => props.theme.textColor1};
    transition: color 0.4s;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media (max-width: 900px) {
    padding: 0px;
    justify-content: center;
    img {
      height: 40px;
    }
    p {
      display: none;
    }
  }
`;
export default function ({ url, title }) {
  return (
    <Container>
      <img src={url} alt={title} />
      <p>{title}</p>
    </Container>
  );
}
