import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/button";
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
        align="center"
        direction="column"
        bg="brand.400"
        color="brand.300"
        p={{base: "5", sm: "20"}}
        spacing="10"
        justify={"center"}
      >
        <Heading textAlign={"center"} >SAFETY TRAINING</Heading>
        <Text textAlign={"center"} fontSize={"sm"}>
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
          divider={<StackDivider borderColor="brand.200" w="" />}
        >
          <Flex flexDirection="column" alignItems={{base: "center" ,sm:"end"}} gap={"2"} textAlign="center">
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              OSHA 10-hour
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Bloodborne Pathogens
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Crane Safety
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Electrical Safety
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Emergency Response Planning
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Ergonomics Awareness
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Fall Protection
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Forklift/Powered Industrial Vehicle
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Hazard Communication
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Hearing Protection
            </Text>
          </Flex>

          <Flex flexDirection="column" gap={"2"}  alignItems={{base: "center" ,sm:"start"}} textAlign={{base: "center", md: "start" }}>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              OSHA 10-hour
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Bloodborne Pathogens
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Crane Safety
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Electrical Safety
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Emergency Response Planning
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Ergonomics Awareness
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Fall Protection
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Forklift/Powered Industrial Vehicle
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Hazard Communication
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "sm", sm: "lg", lg: "2xl" }}
            >
              Hearing Protection
            </Text>
          </Flex>
        </HStack>
        <ButtonGroup mt="20">
          <Button
            rounded="full"
            px="10"
            bgColor="brand.200"
            _hover={{ bg: 'brand.100' }}
            color="white"
            variant="solid"
            fontFamily={"heading"}
            fontSize={"sm"}
          >
            GET IN TOUCH
          </Button>
        </ButtonGroup>
      </Stack>
    </box>
  );
};
export default list;
