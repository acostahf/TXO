import Head from "next/head";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import Promises from "../section/homepage/promises";
import Services from "../section/homepage/services";
import Carousel from "../section/homepage/carousel";
// import Join from "../section/aboutpage/join";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline({});
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",
        // scrub: 1,
        start: "top 80%",
        end: "bottom 30%",
        // markers: true,
      },
    });

    tl.from(".element", {
      duration: 2,
      y: 100,
      opacity: 0,
      stagger: 0.5,
    });
    // tl.to(".element", { duration: 2, x: 500 });
    //
    tl2.from(".title", { duration: 1, opacity: 0, x: 100 });
    tl2.from(".promises", { duration: 1, y: 100, opacity: 0 });
    // tl2.to(".section", { x: 900, duration: 2, opacity: 0 });
  });
  return (
    <div>
      <Hero />
      <Promises />
      <Services />
      <Carousel />
      {/* <Join /> */}
    </div>
  );
}
