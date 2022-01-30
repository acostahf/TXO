import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/layout";

const Card = (props) => {
  return (
    <Flex maxW="xs" direction="column" align="center" p="12">
      <Box w="20" h="20" bgColor="gray.500" rounded="full" mb="2"></Box>
      <Heading as="h6" fontSize="xl" mb="2">
        {props.title}
      </Heading>
      <Text fontSize="md" align="center">
        {props.description}
      </Text>
    </Flex>
  );
};

export default Card;
