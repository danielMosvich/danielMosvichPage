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
  /* margin-top: 100px; */
  @media (max-width: 800px) {
    /* margin-top: 300px; */
  }
  z-index: 4;
  img{
    position: absolute;
    bottom: 0px;
    width: 100%;

  }
`
function Home({setLoad, themeToggle, theme,sectionPosition, setSectionPosition}) {
  // ! use the scrollY value for Paralax Effect in the future
  const [scrollY, setScrollY] = useState(0)
  const [coords,setCoords] = useState({x:0,y:0})
  const [styledState, setStyledState] = useState({transform: ""})
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
    setLoad(false)
  },[])
  useEffect(()=>{
    if(scrollY < 700){
      setSectionPosition(1)
    }
    if(scrollY >= 600){
      setSectionPosition(2)
    } 
    if(scrollY >= 1500){
      setSectionPosition(3)
    } 
    if(scrollY >= 2300){
      setSectionPosition(4)
    }
  },[scrollY])
  return (
    <ContainerHome>
      {/* <p style={{position:"fixed",color:"red", zIndex:10}}>{scrollY}</p> */}


      <NavBar sectionPosition={sectionPosition} themeToggle={themeToggle} theme={theme}/>
      <Presentation id="home" coords={coords}/>
      <AboutMe id="aboutme" />
      <Skills id="skills" />
      <WaveContainer style={styledState}>
        <img src="/wave.png" alt="" />
      </WaveContainer>
      <Contact id="contact" />
    </ContainerHome>
  );
}
export default Home;
