import { Flex, Heading, Wrap, WrapItem, Spacer } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React from "react";
import Card from "../../components/card";
import NextLink from "next/link";

// data
const cardItems = [
  {
    img: "/key.svg",
    title: "Turnkey Solutions",
    description:
      "At TXO, we love to come up with fresh solutions that spark innovation and lead to better business results. By allowing TXO to audit and develop your safety program, we ensure that on-site safety requirements are met on day one.",
  },
  {
    img: "/bolt.svg",
    title: "Fast and Easy",
    description:
      "Who said safety couldn”t be fast and easy? We are mindful of deadlines and expectations so you can rest assured we can get a safety team assigned to your jobsite faster and better than the rest.",
  },
  {
    img: "/money.svg",
    title: "Cost-Effective",
    description:
      " It’s no secret that safety can add additional costs to your bottom line, but with TXO, we work with your budget to find the best cost-effective solution for your jobs.",
  },
];

const Promises = (props) => {
  return (
    <Flex
      align="center"
      direction="column"
      className="section"
      bg="brand.300"
      p="10"
      spacing="10"
    >
      <Heading className="title" mb="20" fontSize={"3xl"} textAlign={"center"}>
        The TXO PROMISE
      </Heading>
      <Flex align="center" justify="center">
        <Wrap justify="center">
          {cardItems.map((items, i) => (
            <WrapItem
              key={i}
              className="promises"
              paddingBottom={{ base: "20" }}
            >
              <Card
                title={items.title}
                description={items.description}
                img={items.img}
              />
              <Spacer />
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
      <NextLink href="/contact" passHref>
        <Button
          borderRadius="full"
          color="brand.300"
          bg="brand.400"
          fontFamily={"heading"}
          px={"8"}
          py={"6"}
          fontSize={"sm"}
          _hover={{ bg: "brand.100" }}
        >
          GET IN TOUCH
        </Button>
      </NextLink>
    </Flex>
  );
};

export default Promises;
