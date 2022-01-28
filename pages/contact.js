import React, { useEffect } from "react";
import gsap from "gsap";
import { Box, Heading } from "@chakra-ui/layout";

const contact = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(".element", { duration: 2, y: 100, opacity: 0, stagger: 0.5 });
  });
  return (
    <div>
      <Box paddingTop="10" justify="center" align="center">
        <Heading className="element" as="h1" fontWeight="bold" fontSize="5xl">
          Contact
        </Heading>
      </Box>
    </div>
  );
};

export default contact;
