import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/layout";

const carCard = (props) => {
  return (
    <Flex
      color="brand.400"
      maxW="sm"
      h="100%"
      direction="column"
      align="center"
      p="12"
    >
      <Box w="28" h="28" bgColor="brand.400" rounded="full" mb="2"></Box>
      <Heading pt="2" as="h6" fontSize="xl" mb="2">
        {props.title}
      </Heading>
      <Text fontSize="sm" align="center">
        {props.description}
      </Text>
    </Flex>
  );
};

export default carCard;
