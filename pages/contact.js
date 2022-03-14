import React, { useEffect } from "react";
import gsap from "gsap";
import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(".element", { duration: 2, y: 100, opacity: 0, stagger: 0.5 });
  });
  return (
    <Flex
      direction={"column"}
      justify="center"
      minH="100vh"
      bgGradient={["linear( brand.400 70%,  brand.200 )"]}
      // bgColor="brand.400"
      color="brand.300"
      gap={"10"}
    >
      <Box justify="center" align="center">
        <Heading className="element" as="h1" fontWeight="bold" fontSize="5xl">
          WE ARE JUST A FEW CLICKS AWAY.
        </Heading>
        <Text>Get In Contact With Us. We Don’t Bite.</Text>
      </Box>
      <Box paddingTop="10" justify="center" align="center">
        <ContactForm />
      </Box>
    </Flex>
  );
};

export default Contact;
