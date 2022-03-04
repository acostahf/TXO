import gsap from "gsap";
import React, { useEffect } from "react";
import List from "../section/servicespage/list";
import Reviews from "../section/servicespage/reviews";

import { ServicesHero } from "../section/servicespage/ServicesHero";

const Services = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(".element", { duration: 2, y: 100, opacity: 0, stagger: 0.5 });
  });
  return (
    <div>
      <ServicesHero />
      <List />
      <Reviews />
    </div>
  );
};

export default Services;
