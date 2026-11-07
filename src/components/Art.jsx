import React from 'react'
import {goodLists} from '../../constants/index'
import {featureLists} from '../../constants/index'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

function Art() {
    const isMobile = useMediaQuery({maxWidth: 767})

    useGSAP(()=> {
        const start = isMobile? 'top 20%' : 'top top';

        const maskTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                markers: true,
                pin:true,
            }
        });
        maskTimeline
        .to('.will-fade', {
            opacity: '0',
            stagger: 0.02,
            ease:'power1.inOut',
            duration: 4,
        }).
 
        fromTo('.masked-img',{
            maskSize: '50%',
            maskPosition:'center',
        }, {
            scale: 1.3,
            maskSize: '380%',
            maskPosition: 'center',
            duration: 5, 
            ease: 'power1.inOut',
        })
        .to('#masked-content ', {
        
            opacity: 1,
            ease: 'power1.inOut',
            duration: 4
            
        }, )
    
    })
  return (
    <div id="art">
        <div className="container mx-auto h-full pt-20">
            <h2 className="will-fade">The ART</h2>
            <div className="content">
                <ul className="space-y-4 will-fade">
                   {goodLists.map((good, idx)=> (
                    <li key={idx} className="flex items-center gap-2 ">
                        <img src="/images/check.png" alt="" />
                        <p className="md:w-fit w-60">{good}</p>
                    </li>
                   ))}
                </ul>
                <div className="cocktail-img">
                    <img src="/images/under-img.jpg" alt="" className="abs-center size-full masked-img" />
                </div>
                   <ul className="space-y-4 will-fade">
                   {featureLists.map((feature, idx)=> (
                    <li key={idx} className="flex items-center gap-2 justify-start">
                        <img src="/images/check.png" alt="" />
                        <p className="md:w-fit w-60">{feature}</p>
                    </li>
                   ))}
                </ul>
            </div>
            <div className="masked-container">
                <h2 className="will-fade">Sip-worthy perfection</h2>
                <div id="masked-content">
                  <h3 className="">Made with craft, poured with passion</h3>
                  <p className="">This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Art