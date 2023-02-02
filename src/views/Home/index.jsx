import styled from "styled-components";
import Presentation from "../../components/Presentation";
import Header from "../../components/Header";
import AboutMe from "../../components/AboutMe";
import Skills from "../../components/Skills";
import Contact from '../../components/Contact'
import { useEffect, useState } from "react";

const ContainerHome = styled.div`
  width: 100%;
  transition: 0.4s;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const WaveContainer = styled.div`
  width: 100%;
  /* height: 10px; */
  /* background-color: red; */
  img{
    width: 100%;
  }
`
function Home({setLoad, themeToggle, theme}) {
  // ! use the scrollY value for Paralax Effect in the future
  const [scrollY, setScrollY] = useState(0)
  const [coords,setCoords] = useState({x:0,y:0})


  useEffect(()=>{
    function handleScroll(){
      setScrollY(window.scrollY)
    }
    function handleMouseMove(e){
      setCoords({x:e.clientX,y:e.clientY})
    }
    window.addEventListener('scroll',handleScroll)
    window.addEventListener("mousemove",handleMouseMove)
  },[])
  return (
    <ContainerHome>
      <p style={{position:"fixed",color:"red", zIndex:10}}>{scrollY}</p>
      <Header themeToggle={themeToggle} theme={theme}/>
      <Presentation id="presentation" coords={coords}/>
      <AboutMe id="aboutMe" coords={coords} />
      <Skills />
      <WaveContainer>
        <img src="../../public/wave.png" alt="" />
      </WaveContainer>
      <Contact />
    </ContainerHome>
  );
}
export default Home;
