import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";

export const ServicesHero = () => {
  return (
    <Box minH="100vh">
      <Flex paddingTop="10" justify="center">
        <Heading className="element" fontSize="5xl" fontWeight="bold" as="h1">
          Safety Services & Trainings
        </Heading>
      </Flex>
    </Box>
  );
};
