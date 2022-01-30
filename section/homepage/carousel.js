import { Flex, Text, Box } from "@chakra-ui/layout";
import React from "react";
import Card from "../../components/card";

const Carousel = () => {
  return (
    <section>
      <Flex mt="2" align="center" direction="column">
        <Text fontSize="2xl" fontWeight="bold">
          Industries We Service
        </Text>
        <Flex>
          <Card title="something" />
          <Card title="something" />
          <Card title="something" />
          <Card title="something" />
          <Card title="something" />
          <Card title="something" />
        </Flex>
      </Flex>
    </section>
  );
};

export default Carousel;
