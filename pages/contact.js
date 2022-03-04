import React, { useEffect } from "react";
import gsap from "gsap";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(".element", { duration: 2, y: 100, opacity: 0, stagger: 0.5 });
  });
  return (
    <div>
      <Box
        paddingTop="10"
        justify="center"
        align="center"
        minH="100vh"
        bgColor="brand.400"
        color="brand.300"
      >
        <Heading className="element" as="h1" fontWeight="bold" fontSize="5xl">
          WE ARE JUST A FEW CLICKS AWAY.
        </Heading>
        <Text>Get In Contact With Us. We Don’t Bite.</Text>
        <ContactForm />
      </Box>
    </div>
  );
};

export default Contact;
