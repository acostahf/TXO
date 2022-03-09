import { Flex, Text, Box, Heading } from "@chakra-ui/layout";

import { useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Card from "../../components/carCard";

// data
const cardItems = [
  {
    img: "/industries/date-center.png",
    title: "Data Center",
  },
  {
    img: "/industries/hospital.png",
    title: "Healthcare",
  },
  {
    img: "/industries/construction.png",
    title: "Construction",
  },
  {
    img: "/industries/commercial.png",
    title: "Commercial",
  },
  {
    img: "/industries/utilities.png",
    title: "Utilities",
  },
  {
    img: "/industries/oil-final.png",
    title: "Oil Refinery",
  },
  {
    img: "/industries/airport.png",
    title: "Airports",
  },
  {
    img: "/industries/stadium.png",
    title: "Wind And Solar",
  },
];
const animation = { duration: 5000, easing: (t) => t };

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    initial: 0,
    slides: {
      perView: 5,
      spacing: 5,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });
  //   loop: true,
  //   renderMode: "performance",
  //   drag: false,
  //   created(s) {
  //     s.moveToIdx(2, true, animation);
  //   },
  //   updated(s) {
  //     s.moveToIdx(s.track.details.abs + 2, true, animation);
  //   },
  //   animationEnded(s) {
  //     s.moveToIdx(s.track.details.abs + 2, true, animation);
  //   },
  // });

  return (
    <Flex py="10" align="center" direction="column" bg="brand.300">
      <Heading fontSize="3xl" fontWeight="extrabold">
        INDUSTRIES WE SERVICE
      </Heading>
      <Flex ref={sliderRef} className="keen-slider">
        {cardItems.map((items) => (
          <div className="keen-slider__slide" padding="0">
            <Card key={items.title} title={items.title} img={items.img} />
          </div>
        ))}
      </Flex>
    </Flex>
  );
};

export default Carousel;
