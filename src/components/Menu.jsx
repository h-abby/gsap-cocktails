import React, { useRef, useState } from "react";
import { allCocktails } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const conRef = useRef();
  useGSAP(() => {
    const leafanim = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "top 30%",
        end: "bottom 80",
        scrub: true,
      },
    });
    leafanim.to(" #m-right-leaf", {
      y: -100,
    });
    leafanim.to(
      " #m-left-leaf",
      {
        y: 100,
      },
      0
    );
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
    gsap.fromTo(
      ".cocktail img",
      {
        translateX: "-100%",
        opacity: 0,
      },
      {
        translateX: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
      }
    );
    gsap.fromTo(
      ".details h2",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details p",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power1.inOut",
      }
    );
  }, [currentIndex]);

  const goToSlide = (index) => {
    const newIndex = (index + allCocktails.length) % allCocktails.length;
    setCurrentIndex(newIndex);
  };
  const getCocktailAt = (indexOffset) => {
    return allCocktails[
      (currentIndex + indexOffset + allCocktails.length) % allCocktails.length
    ];
  };
  const prevCocktail = getCocktailAt(-1);
  const currentCocktail = getCocktailAt(0);
  const nextCocktail = getCocktailAt(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>
      <nav className="cocktail-tabs">
        {allCocktails.map((cocktail, index) => {
          const isActive = index == currentIndex;
          return (
            <button
              key={cocktail.id}
              id="btn"
              className={
                isActive
                  ? "text-white border-white btn"
                  : "text-white/50 border-white/50 btn"
              }
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="cocktail">
          <img src={currentCocktail.image} alt="" />
        </div>
        <div className="recipe">
          <div className="info" ref={conRef}>
            <p>Recipe for:</p>
            <div id="title">{currentCocktail.name}</div>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
