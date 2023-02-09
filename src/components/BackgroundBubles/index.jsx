import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  /* background-color: black; */
  left: 0;
  /* z-index: 50; */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Bubles = styled.div`
  position: relative;
  display: flex;
  gap: 10px;

  span {
    opacity: 0.1;
    position: relative;
    min-width: 30px;
    min-height: 30px;
    border-radius: 50%;
    
    background-color: #ff6666;
    box-shadow:  
    0 0 50px #ff6666, 
    0 0 100px #ff6666;
    animation: animate 15s linear infinite;
    @keyframes animate {
      0% {
        transform: translateY(100vh) scale(0);
      }
      100% {
        transform: translateY(-10vh) scale(.7);
      }
    }

    &:nth-child(even) {
      background-color: #ff938b;
      box-shadow: 0 0 50px #ff938b, 0 0 100px #ff938b;
    }
  }
`;

export default function BackgroundBubles() {
  const duration = "125s";
  return (
    <Container>
      <Bubles>
        <span style={{ animationDuration: `calc(${duration} / 11)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 12)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 24)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 10)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 14)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 23)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 18)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 16)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 19)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 20)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 22)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 25)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 17)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 21)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 15)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 13)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 26)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 11)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 13)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 28)` }}></span>

        <span style={{ animationDuration: `calc(${duration} / 11)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 12)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 24)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 10)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 14)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 23)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 18)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 16)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 19)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 20)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 22)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 25)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 17)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 21)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 15)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 13)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 26)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 11)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 13)` }}></span>
        <span style={{ animationDuration: `calc(${duration} / 28)` }}></span>
      </Bubles>
    </Container>
  );
}
