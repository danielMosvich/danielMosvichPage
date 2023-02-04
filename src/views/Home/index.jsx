import styled from "styled-components";
import Presentation from "../../components/Presentation";
import NavBar from "../../components/NavBar";
import AboutMe from "../../components/AboutMe";
import Skills from "../../components/Skills";
import Contact from '../../components/Contact'
import { useEffect, useState } from "react";

const ContainerHome = styled.div`
  width: 100%;
  transition: 0.4s;
  background-color: ${(props) => props.theme.backgroundColor};
  /* background-color: red; */
`;

const WaveContainer = styled.div`
  width: 100%;
  height: 1px;
  position: relative;
  background-color: ${(props) => props.theme.primaryColor};
  margin-top: 200px;
  img{
    position: absolute;
    bottom: 0px;
    width: 100%;

  }
`
function Home({setLoad, themeToggle, theme}) {
  // ! use the scrollY value for Paralax Effect in the future
  const [scrollY, setScrollY] = useState(0)
  const [coords,setCoords] = useState({x:0,y:0})
  const [styledState, setStyledState] = useState({transform: ""})
  // const styled1 = {

  // }
  useEffect(()=>{
    function handleScroll(){
      setScrollY(window.scrollY)
      setStyledState({transform:`translateY${scrollY * 0.7} px`})
    }
    function handleMouseMove(e){
      setCoords({x:e.clientX,y:e.clientY})
    }
    window.addEventListener('scroll',handleScroll)
    window.addEventListener("mousemove",handleMouseMove)
  },[])
  return (
    <ContainerHome>
      {/* <p style={{position:"fixed",color:"red", zIndex:10}}>{scrollY}</p> */}
      <NavBar themeToggle={themeToggle} theme={theme}/>
      <Presentation id="presentation" coords={coords}/>
      <AboutMe id="aboutMe" coords={coords} />
      <Skills />
      <WaveContainer style={styledState}>
        <img src="/wave.png" alt="" />
      </WaveContainer>
      <Contact />
    </ContainerHome>
  );
}
export default Home;
