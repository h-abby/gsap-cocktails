import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger, SplitText } from "gsap/all";
import { TextPlugin } from "gsap/TextPlugin";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(useGSAP,ScrollTrigger,TextPlugin,SplitText);

function App() {

  return (
    <main>
     <Navbar/>
     <Hero/>
     <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App
