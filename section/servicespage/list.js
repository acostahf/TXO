import React from "react";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  Stack,
} from "@chakra-ui/layout";

const list = () => {
  return (
    <box>
      <Stack
        minH="100vh"
        align="center"
        direction="column"
        bg="brand.400"
        color="brand.300"
        p="10"
        spacing="10"
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
      </Stack>
    </box>
  );
};
export default list;
