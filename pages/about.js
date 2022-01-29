import React, { useEffect } from "react";
import gsap from "gsap";
import AboutHero from "../components/AboutHero";

const About = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(".element", { duration: 2, y: 100, opacity: 0, stagger: 0.5 });
  });
  return (
    <div>
      <AboutHero />
    </div>
  );
};

export default about;
