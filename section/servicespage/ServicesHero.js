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
    <Box
      bg="brand.200"
      color="brand.300"
      // opacity={".9"}
      bgImage={"url('/mid-pattern.svg')"}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Flex minH="50vh" paddingTop="10" align="center" justify="center">
        <Heading
          className="element"
          fontSize="5xl"
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
