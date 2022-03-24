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
<<<<<<< HEAD
    <Box
      bg="brand.200"
      color="brand.300"
      // opacity={".9"}
      bgImage={"url('/mid-pattern.svg')"}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
=======
    <Box bg="brand.100" color="brand.300" bgImage={"url('/safety-page-header.svg')"}
    bgPosition="center"
    bgSize="cover"
    bgRepeat="no-repeat">
>>>>>>> 06946352df94966302a6087a371a9f93f0648422
      <Flex minH="50vh" paddingTop="10" align="center" justify="center">
        <Heading
          className="element"
          fontSize={{ base: "3xl" ,sm: "5xl"}}
          fontWeight="extrabold"
          textAlign="center"
          as="h1"
        >
          SAFETY SERVICES <br /> & TRAININGS
        </Heading>
      </Flex>
    </Box>
  );
};
