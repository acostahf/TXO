import {
  Box,
  SimpleGrid,
  Text,
  Center,
  Circle,
  Heading,
  Flex,
} from "@chakra-ui/layout";
import React from "react";

const Footer = () => {
  return (
    // <SimpleGrid columns="5" px="20" bg="gray.400">
    <Flex justify="space-between" p="20">
      <Circle size="28" bg="gray.400"></Circle>
      <Box>
        <Heading fontSize="lg">Hours</Heading>
        <Text>Monday-Closed</Text>
        <Heading fontSize="lg">Contact #</Heading>
        <Text>+ 1 (512) 999 9999</Text>
      </Box>
      <Box>
        <Heading fontSize="lg">Our Home</Heading>
      </Box>
      <Box>
        <Heading fontSize="lg">Connect</Heading>
      </Box>
      <Box>
        <Heading fontSize="lg">Nowhere to go but up</Heading>
      </Box>
    </Flex>
    // </SimpleGrid>
  );
};

export default Footer;
