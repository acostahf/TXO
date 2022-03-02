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
      <SimpleGrid minH="100vh" columns={2} bg="brand.200" color="brand.300">
        <Flex justify="center" align="center" flexDirection="column" p="10">
          <Stack spacing={10}>
            <Box>
              <Text className="element" fontWeight="semibold" fontSize="xl">
                No Matter Who You Are.
              </Text>
              <Heading className="element" as="h1" size="4xl">
                Safety <br /> Made Easy.
              </Heading>
            </Box>
            <InputGroup className="element">
              <Input
                borderLeftRadius="3xl"
                borderColor="brand.200"
                bg="brand.300"
                placeholder="EMAIL ADDRESS"
              />
              <InputRightAddon
                borderRightRadius="3xl"
                borderColor="brand.200"
                bg="brand.400"
              >
                GET IN TOUCH
              </InputRightAddon>
            </InputGroup>
          </Stack>
        </Flex>
        <GridItem bg="gray.300" position="relative">
          <Image
            src="/header.jpg"
            alt="header imager"
            // width={500}
            // height={500}
            layout="fill"
          />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
