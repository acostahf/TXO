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
    <Box bg="brand.100" color="brand.300">
      <Flex minH="50vh" paddingTop="10" align="center" justify="center">
        <Heading
          className="element"
          fontSize="5xl"
          fontWeight="extrabold"
          as="h1"
        >
          SAFETEY SERVICES <br /> & TRAININGS
        </Heading>
      </Flex>
    </Box>
  );
};
