import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";


const Card_1 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.primaryColor};
  position: fixed;
  z-index: 10;
`;
const Card_2 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.secondColor};
  position: fixed;
  z-index: 9;
`;
const Card_3 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.thirdColor};
  position: fixed;
  z-index: 8;
`;

export default function Preload({ load }) {
  const [show,setShow] = useState(true)

  const c1 = useRef();
  const c2 = useRef();
  const c3 = useRef();

  useEffect(() => {
    if (!load) {
      setTimeout(() => {
        window.scroll(0,0)
        let tl = gsap.timeline({});
        tl.to(c1.current, { x: "100vw", duration: 1.5, ease: "power2.out" });
        tl.to(
          c2.current,
          { x: "100vw", duration: 1.5, ease: "power2.out" },
          "-=1.4"
        );
        tl.to(
          c3.current,
          { x: "100vw", duration: 1.5, ease: "power2.out" },
          "-=1.3"
        );
        setTimeout(()=>{
          setShow(false)
        },2000)
      }, 2000);
    }

  }, [load]);
  return (
    <div >
      <Card_1 ref={c1} style={{display: show ? "block" : "none"}}> Cargando</Card_1>
      <Card_2 ref={c2} style={{display: show ? "block" : "none"}}/>
      <Card_3 ref={c3} style={{display: show ? "block" : "none"}}/>
    </div>
  );
}
