import styled from "styled-components";
const ContainerAnimation = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  div {
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
  }

  div:nth-child(1){
    animation-name: buble1;
    @keyframes buble1 {
      0%{
        transform: translateY(0px);
      }
      50%{
        transform: translateY(-50px);
      }
      100%{
        transform: translateY(0px);
      }
    }
  }
  div:nth-child(2){
    animation-name: buble2;
    animation-delay: 0.3s;
    @keyframes buble2 {
      0%{
        transform: translateY(0px);
      }
      50%{
        transform: translateY(-50px);
      }
      100%{
        transform: translateY(0px);
      }
    }
  }
  div:nth-child(3){
    animation-name: buble3;
    animation-delay: 0.6s;
    @keyframes buble3 {
      0%{
        transform: translateY(0px);
      }
      50%{
        transform: translateY(-50px);
      }
      100%{
        transform: translateY(0px);
      }
    }
  }
  div:nth-child(4){
    animation-name: buble4;
    animation-delay: 0.9s;
    @keyframes buble4 {
      0%{
        transform: translateY(0px);
      }
      50%{
        transform: translateY(-50px);
      }
      100%{
        transform: translateY(0px);
      }
    }
  }
  div:nth-child(5){
    animation-name: buble5;
    animation-delay: 1.2s;
    @keyframes buble5 {
      0%{
        transform: translateY(0px);
      }
      50%{
        transform: translateY(-50px);
      }
      100%{
        transform: translateY(0px);
      }
    }
  }
`;

export default function AnimateBuble() {
  return (
    <ContainerAnimation>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </ContainerAnimation>
  );
}
