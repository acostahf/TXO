import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import React from "react";

export const Hero = () => {
  return (
    <Box>
      <SimpleGrid minH="100vh" columns={2}>
        <Flex justify="center" align="center" flexDirection="column" p="10">
          <Box>
            <Text fontWeight="semibold" fontSize="xl">
              {" "}
              Cillum non consequat tempor ad tempor nulla laboris irure irure
              officia.
            </Text>
            <Heading as="h1" size="3xl">
              {" "}
              Nulla ullamco in excepteur nostrud proident.
            </Heading>
          </Box>
        </Flex>
        <GridItem bg="red.500"></GridItem>
      </SimpleGrid>
    </Box>
  );
};
