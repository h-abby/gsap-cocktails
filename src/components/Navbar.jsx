import React from "react";
import { navLinks } from "../../constants";


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP,ScrollTrigger);

function Navbar() {
  useGSAP(()=> {
    const navTween = gsap.timeline({
      scrollTrigger: {
      trigger: 'nav',
       start: 'bottom top',
      }
    });
    navTween.fromTo('nav', {
      backgroundColor: 'transparent',
    }, {
      backgroundColor: '#00000050',
      backdropFilter: 'blur(10px)',
      duration: 1,
      ease: 'power1.inOut'
    })
},[])

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" />
          <p>Velvet Pour</p>
        </a>
        <ul>
         {navLinks.map((link, idx)=> (
            <li key={link.id}>
                <a href={`#${link.id}`} className="">{link.title}</a>
            </li>
         ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
