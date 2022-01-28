import { Box, SimpleGrid, Flex, Text, Heading } from "@chakra-ui/react";

const AboutHero = (props) => {
  return (
    <Box>
      <Flex paddingTop="10" justify="center">
        <Heading className="element" fontSize="5xl" fontWeight="bold" as="h1">
          Who We Are
        </Heading>
      </Flex>
      <SimpleGrid className="element" columns={2}>
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

export default AboutHero;
