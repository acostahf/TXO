import React from "react";
import Image from "next/image";
import { Box, Heading, Text, Flex } from "@chakra-ui/layout";

const Card = (props) => {
  return (
    <Flex
      bg="brand.400"
      color="brand.300"
      maxW="sm"
      h="100%"
      direction="column"
      align="center"
      p="12"
      position="relative"
    >
      <Box
        position="absolute"
        top="-14"
        w="28"
        h="28"
        bgColor="brand.100"
        rounded="full"
        mb="2"
      >
        <Image src={props.img} alt="header imager" layout="fill" priority />
      </Box>
      <Heading pt="10" as="h6" fontSize="xl" mb="2">
        {props.title}
      </Heading>
      <Text fontSize="sm" align="center">
        {props.description}
      </Text>
    </Flex>
  );
};

export default Card;
