import { Flex, Text, Box, Heading } from "@chakra-ui/layout";
import React from "react";
import Card from "../../components/carCard";

const Carousel = () => {
  return (
    <Flex py="10" align="center" direction="column" bg="brand.300">
      <Heading fontSize="3xl" fontWeight="extrabold">
        INDUSTRIES WE SERVICE
      </Heading>
      <Flex>
        <Card title="something" />
        <Card title="something" />
        <Card title="something" />
        <Card title="something" />
        <Card title="something" />
      </Flex>
    </Flex>
  );
};

export default Carousel;
