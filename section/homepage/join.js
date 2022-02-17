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

const join = () => {
  return (
    <Box>
      <SimpleGrid minH="40vh" columns={3} bg="brand.200" color="brand.200">
        <GridItem bg="gray.300" colSpan={2} p="10">
          <Box maxW="sm">
            <Heading className="element" as="h1" size="xl">
              JOIN OUT TEAM
            </Heading>
            <Text className="element" fontSize="xs">
              Looking at safety roles? Join our roster and be paired with a
              jobsite across the country with competitive pay. The TXO way!
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Flex justify="center" align="center" flexDirection="column" p="10">
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
                children="GET IN TOUCH"
              />
            </InputGroup>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default join;
