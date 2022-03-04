import React from "react";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  HStack,
  Text,
  Stack,
  StackDivider,
} from "@chakra-ui/layout";

// const items = [
//  {
//    title: "OSHA 10-hour",
//  },

// ];

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
        <HStack
          columns={2}
          spacing={1}
          gap="3"
          divider={<StackDivider borderColor="brand.200" />}
        >
          <Flex flexDirection="column" alignItems="end">
            <Text>OSHA 10-hour</Text>
            <Text>Bloodborne Pathogens</Text>
            <Text>Crane Safety</Text>
            <Text>Electrical Safety</Text>
            <Text>Emergency Response Planning</Text>
            <Text>Ergonomics Awareness</Text>
            <Text>Fall Protection</Text>
            <Text>Forklift/Powered Industrial Vehicle</Text>
            <Text>Hazard Communication</Text>
            <Text>Hearing Protection</Text>
          </Flex>

          <Flex flexDirection="column">
            <Text>OSHA 10-hour</Text>
            <Text>Bloodborne Pathogens</Text>
            <Text>Crane Safety</Text>
            <Text>Electrical Safety</Text>
            <Text>Emergency Response Planning</Text>
            <Text>Ergonomics Awareness</Text>
            <Text>Fall Protection</Text>
            <Text>Forklift/Powered Industrial Vehicle</Text>
            <Text>Hazard Communication</Text>
            <Text>Hearing Protection</Text>
          </Flex>
        </HStack>
      </Stack>
    </box>
  );
};
export default list;
