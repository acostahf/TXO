import Image from "next/image";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  Stack,
} from "@chakra-ui/layout";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Box>
      <SimpleGrid
        minH="80vh"
        columns={{ base: 1, sm: 1, md: 2 }}
        bg="brand.200"
        bgImage={"url('/mid-pattern.svg')"}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        color="brand.300"
      >
        <Flex justify="center" align="center" flexDirection="column" p="10">
          <Stack spacing={10}>
            <Box>
              <Heading
                className="element"
                // fontWeight="semibold"
                fontSize="xl"
                fontFamily={"body"}
              >
                No Matter Who You Are.
              </Heading>
              <Heading className="element" as="h1" size="4xl">
                Safety <br /> Made Easy.
              </Heading>
            </Box>
            <InputGroup className="element" maxW={"xl"}>
              <Input
                borderLeftRadius="3xl"
                borderColor="brand.200"
                bg="brand.300"
                placeholder="EMAIL ADDRESS"
                fontFamily={"heading"}
                fontSize={"x-small"}
              />
              <InputRightAddon
                borderRightRadius="3xl"
                borderColor="brand.200"
                fontFamily={"heading"}
                fontSize={"sm"}
                bg="brand.400"
              >
                GET IN TOUCH
              </InputRightAddon>
            </InputGroup>
          </Stack>
        </Flex>
        <GridItem
          h={{ sm: "0", md: "auto" }}
          bg="gray.300"
          position="relative"
          bgImage="url('/header.jpg') "
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
        >
          {/* <Image src="/header.jpg" alt="header imager" layout="fill" priority /> */}
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
