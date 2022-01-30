import Head from "next/head";
import Image from "next/image";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import Promises from "../section/homepage/promises";
import Services from "../section/homepage/services";
import Carousel from "../section/homepage/carousel";

export default function Home() {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(".element", { duration: 2, y: 100, opacity: 0, stagger: 0.5 });
  });
  return (
    <div>
      <Hero />
      <Promises />
      <Services />
      <Carousel />
    </div>
  );
}
