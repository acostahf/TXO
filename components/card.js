import React from "react";
import Image from "next/image";
import { Box, Heading, Text, Flex } from "@chakra-ui/layout";

const Card = (props) => {
  return (
    <Flex
      bgGradient={["linear( brand.400 ,  brand.600 )"]}
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
      <Heading pt="10" pb="5" size={"xs"} mb="2">
        {props.title}
      </Heading>
      <Text lineHeight={"taller"} fontSize="sm" align="center">
        {props.description}
      </Text>
    </Flex>
  );
};

export default Card;
