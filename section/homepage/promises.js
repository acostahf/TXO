import {
  Box,
  Flex,
  Heading,
  Wrap,
  WrapItem,
  Spacer,
  VStack,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Card from "../../components/card";

// data
const cardItems = [
  {
    title: "Turnkey Solutions",
    description:
      "Looking for a specific set of talent for your safety needs? At TXO, we love to come up with fresh solutions that spark innovation and lead to better business results. We provide the safety that checks off all the boxes because we are your one stop shop for all that is safety! ",
  },
  {
    title: "Fast and Easy",
    description:
      "Who said safety couldn”t be fast and easy? We are mindful of deadlines and expectations so you can rest assured we can get a safety team assigned to your jobsite faster and better than the rest.",
  },
  {
    title: "Cost-Effective",
    description:
      " It’s no secret that safety can add additional costs to your bottom line, but with TXO, we work with your budget to find the best cost-effective solution for your jobs.",
  },
];

const Promises = (props) => {
  return (
    <VStack
      align="center"
      direction="column"
      className="section"
      bg="brand.300"
      p="20"
      spacing="10"
    >
      <Heading className="title" mb="20">
        The TXO PROMISE
      </Heading>
      <Flex align="center" justify="center">
        <Wrap justify="center">
          {cardItems.map((items, i) => (
            <WrapItem key={i} className="promises">
              <Card title={items.title} description={items.description} />
              <Spacer />
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
      <Button borderRadius="3xl" color="brand.300" bg="brand.400">
        GET IN TOUCH
      </Button>
    </VStack>
  );
};

export default Promises;
