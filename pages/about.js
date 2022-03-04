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
        <Flex justify="center" align="center" flexDirection="column" p="10">
          <InputGroup>
            <Input
              borderLeftRadius="3xl"
              borderColor="brand.300"
              bg="white"
              placeholder="EMAIL ADDRESS"
            />
            <InputRightAddon
              borderRightRadius="3xl"
              borderColor="brand.200"
              bg="brand.400"
              color="brand.300"
              // children="GET IN TOUCH"
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
