import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import gsap from "gsap";
import React, { useEffect } from "react";

export const ServicesHero = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(".element", { duration: 2, y: 100, opacity: 0, stagger: 0.5 });
  });
  return (
    <Box minH="100vh">
      <Flex paddingTop="10" justify="center">
        <Heading className="element" fontSize="5xl" fontWeight="bold" as="h1">
          Services
        </Heading>
      </Flex>
      <SimpleGrid className="element" columns={2}>
        <Flex justify="center" align="center" flexDirection="column" p="10">
          <Box>
            <Text fontWeight="semibold" fontSize="4xl" paddingBottom="5">
              Mission
            </Text>
            <Text fontSize="xl">
              {" "}
              Nulla ullamco in excepteur nostrud proident. Nulla ullamco in
              excepteur nostrud proident. Nulla ullamco in excepteur nostrud
              proident. Nulla ullamco in excepteur nostrud proident.
            </Text>
          </Box>
        </Flex>
        <Flex justify="center" align="center" flexDirection="column" p="10">
          <Box>
            <Text fontWeight="semibold" fontSize="4xl" paddingBottom="5">
              Mission
            </Text>
            <Text fontSize="xl">
              {" "}
              Nulla ullamco in excepteur nostrud proident. Nulla ullamco in
              excepteur nostrud proident. Nulla ullamco in excepteur nostrud
              proident. Nulla ullamco in excepteur nostrud proident.
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};
