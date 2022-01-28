import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import React from "react";

export const ServicesHero = () => {
  return (
    <Box minH="100vh">
      <Flex paddingTop="10" justify="center">
        <Heading fontSize="5xl" fontWeight="bold" as="h1">
          Services
        </Heading>
      </Flex>
      <SimpleGrid columns={2}>
        <Flex justify="center" align="center" flexDirection="column" p="10">
          <Box>
            <Text fontWeight="semibold" fontSize="4xl" paddingBottom="5">
              Mission
            </Text>
            <Text fontSize="xl">
              {" "}
              Nulla ullamco in excepteur nostrud proident. Nulla ullamco in
              excepteur nostrud proident. Nulla ullamco in excepteur nostrud
              proident. Nulla ullamco in excepteur nostrud proident.
            </Text>
          </Box>
        </Flex>
        <Flex justify="center" align="center" flexDirection="column" p="10">
          <Box>
            <Text fontWeight="semibold" fontSize="4xl" paddingBottom="5">
              Mission
            </Text>
            <Text fontSize="xl">
              {" "}
              Nulla ullamco in excepteur nostrud proident. Nulla ullamco in
              excepteur nostrud proident. Nulla ullamco in excepteur nostrud
              proident. Nulla ullamco in excepteur nostrud proident.
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};
