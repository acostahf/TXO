import React, { useEffect } from "react";
import gsap from "gsap";
import AboutHero from "../section/aboutpage/AboutHero";
import {
  Flex,
  Heading,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";

const About = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(".element", { duration: 2, y: 100, opacity: 0, stagger: 0.5 });
  });
  return (
    <div>
      <AboutHero />
      <Flex
        bg="brand.300"
        color="brand.400"
        justify="center"
        align="center"
        direction="column"
        p="10"
      >
        <Heading as="h1">GET STARTED.</Heading>
        <Flex justify="center" align="center" flexDirection="column" p={{base: "5",sm:"10"}}>
          <InputGroup>
            <Input
              borderLeftRadius="3xl"
              borderColor="brand.300"
              bg="white"
              fontFamily={"heading"}
              fontSize={{base: "x-small",  sm:"sm"}}
              placeholder="EMAIL ADDRESS"
            />
            <InputRightAddon
              borderRightRadius="3xl"
              borderColor="brand.200"
              bg="brand.400"
              fontFamily={'heading'}
              fontSize={{base: "x-small",  sm:"sm"}}
              color="brand.300"
            >
              GET IN TOUCH
            </InputRightAddon>
          </InputGroup>
        </Flex>
      </Flex>
    </div>
  );
};

export default About;
