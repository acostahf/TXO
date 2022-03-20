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
  ButtonGroup
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
                fontSize={"md"}
                bg="brand.300"
                placeholder="First and Last Name"
              />
              <Input
                borderRadius="3xl"
                borderColor="brand.200"
                fontSize={"md"}
                bg="brand.300"
                placeholder="Email Address"
              />
              <Textarea
                borderRadius="md"
                borderColor="brand.200"
                fontSize={"md"}
                h={"32"}
                bg="brand.300"
                placeholder="Brief Message"
                size="lg"
              />
               <ButtonGroup >
                  <Button
                    rounded="full"
                    px="6"
                    bgColor="brand.400"
                    _hover={{ bg: 'brand.100' }}
                    color="white"
                    variant="solid"
                    fontFamily={"heading"}
                    fontSize={"x-small"}
                  >
                     GET IN TOUCH
                    </Button>
                  </ButtonGroup>
            </InputGroup>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Join;
