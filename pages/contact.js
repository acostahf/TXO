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
      bgGradient={["linear( brand.400 ,  brand.600 )"]}
      color="brand.300"
      gap={"20"}
      p={{base: "0" ,sm:"0", md: "20"}}
    >
      <Box justify="center" align="center" >
        <Heading className="element" as="h1" fontWeight="bold" fontSize={{base: "2xl",md:"5xl"}} paddingBottom={"6"}>
          WE ARE JUST A FEW CLICKS AWAY.
        </Heading>
        <Text fontWeight={"bold"}>Get In Contact With Us. We Don’t Bite.</Text>
      </Box>
      <Box paddingTop="10" justify="center" align="center" p={"10"}>
        <ContactForm />
      </Box>
    </Flex>
  );
};

export default Contact;
