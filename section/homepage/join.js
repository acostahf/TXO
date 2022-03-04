import React from "react";
import Image from "next/image";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import { Input, InputGroup, InputRightAddon, Textarea } from "@chakra-ui/react";

const Join = () => {
  return (
    <Box>
      <SimpleGrid minH="50vh" columns={3} bg="brand.200" color="brand.200">
        <GridItem
          bg="gray.300"
          colSpan={2}
          p="10"
          backgroundImage="url('/staircase-to-worker.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          {/* <Image src="/staircase-to-worker.jpg" alt="staircase" layout="fill" /> */}
          <Flex
            maxW="sm"
            zIndex="2"
            justifyContent="center"
            flexDirection="column"
          >
            <Heading className="element" as="h1" size="xl">
              JOIN OUT TEAM
            </Heading>
            <Text className="element" fontSize="xs">
              Looking at safety roles? Join our roster and be paired with a
              jobsite across the country with competitive pay. The TXO way!
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            justify="center"
            align="center"
            flexDirection="column"
            p="10"
            height="lg"
          >
            <InputGroup className="element" flexDirection="column" gap="4">
              <Input
                borderRadius="3xl"
                borderColor="brand.200"
                bg="brand.300"
                placeholder="EMAIL ADDRESS"
              />
              <Input
                borderRadius="3xl"
                borderColor="brand.200"
                bg="brand.300"
                placeholder="EMAIL ADDRESS"
              />
              <Textarea
                borderRadius="md"
                borderColor="brand.200"
                bg="brand.300"
                placeholder="EMAIL ADDRESS"
                size="lg"
              />
            </InputGroup>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Join;
