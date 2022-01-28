import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import { gsap } from "gsap";
import React, { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(".element", { duration: 2, y: 100, opacity: 0, stagger: 0.5 });
  });

  return (
    <Box>
      <SimpleGrid minH="100vh" columns={2}>
        <Flex justify="center" align="center" flexDirection="column" p="10">
          <Box>
            <Text className="element" fontWeight="semibold" fontSize="xl">
              {" "}
              Cillum non consequat tempor ad tempor nulla laboris irure irure
              officia.
            </Text>
            <Heading className="element" as="h1" size="3xl">
              {" "}
              Nulla ullamco in excepteur nostrud proident.
            </Heading>
          </Box>
        </Flex>
        <GridItem bg="red.500"></GridItem>
      </SimpleGrid>
    </Box>
  );
};
