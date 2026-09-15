import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger, SplitText } from "gsap/all";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger,TextPlugin,SplitText);

function App() {

  return (
    <>
    <div className="flex-center h-screen">
      <h1 className="text-indigo-400 text-3xl">Hello GSAP!</h1>
    </div>
     
    </>
  )
}

export default App
