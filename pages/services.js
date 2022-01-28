import gsap from "gsap";
import React, { useEffect } from "react";

import { ServicesHero } from "../components/ServicesHero";

const services = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(".element", { duration: 2, y: 100, opacity: 0, stagger: 0.5 });
  });
  return (
    <div>
      <ServicesHero />
    </div>
  );
};

export default services;
