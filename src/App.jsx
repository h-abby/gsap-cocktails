import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger, SplitText } from "gsap/all";
import { TextPlugin } from "gsap/TextPlugin";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Footer/>
    </main>
  );
}

export default App;
