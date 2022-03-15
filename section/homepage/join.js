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
import {
  Input,
  InputGroup,
  InputRightAddon,
  Textarea,
  Button,
} from "@chakra-ui/react";

const Join = () => {
  return (
    <Box>
      <SimpleGrid
        minH={"40vh"}
        columns={{ base: 1, sm: 1, md: 3 }}
        bg="brand.200"
        color="brand.200"
        bgImage={"url('/mid-pattern.svg')"}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <GridItem
          bg="gray.300"
          colSpan={2}
          p="10"
          backgroundImage="url('/staircase-to-worker.jpg')"
          backgroundPosition="left"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          {/* <Image src="/staircase-to-worker.jpg" alt="staircase" layout="fill" /> */}
          <Flex height={"full"}>
            <Flex
              maxW="sm"
              zIndex="2"
              justifyContent="center"
              flexDirection="column"
            >
              <Heading className="element" as="h1" size="lg">
                JOIN OUR TEAM
              </Heading>
              <Text className="element" fontSize="sm" maxW={"xs"}>
                Looking at safety roles? Join our roster and be paired with a
                jobsite across the country with competitive pay. The TXO way!
              </Text>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            justify="center"
            align="center"
            flexDirection="column"
            p="10"
            h={"full"}

            // height="lg"
          >
            <InputGroup className="element" flexDirection="column" gap="4">
              <Input
                borderRadius="3xl"
                borderColor="brand.200"
                bg="brand.300"
                placeholder="First and Last Name"
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
              <Button borderRadius="3xl" color="brand.300" bg="brand.400">
                GET IN TOUCH
              </Button>
            </InputGroup>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Join;
