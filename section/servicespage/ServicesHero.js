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
          fontSize={{ base: "3xl" ,sm: "5xl"}}
          fontWeight="extrabold"
          textAlign="center"
          as="h1"
        >
          SAFETEY SERVICES <br /> & TRAININGS
        </Heading>
      </Flex>
    </Box>
  );
};
