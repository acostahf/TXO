import React from "react";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";

const list = () => {
  return (
    <box>
      <Flex
        minH="100vh"
        align="center"
        direction="column"
        bg="brand.400"
        color="brand.300"
      >
        <Heading>SAFETY TRAINING</Heading>
        <Text>
          Providing your employees with the necessary and relevant safety
          training is key in preventing potential incidents, creating a safe
          work environment, and dramatically lowering the impact of your
          insurance costs. TXO’s highly customizable trainings in many different
          courses gives your employees the knowledge they need on the jobsite.
          With our flexible training schedule we can implement trainings weekly,
          monthly, or as a needed basis.
        </Text>
      </Flex>
    </box>
  );
};
export default list;
