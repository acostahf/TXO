import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  Heading,
  Center,
  Divider,
  Stack,
  HStack,
  StackDivider,
} from "@chakra-ui/react";
import Image from "next/image";

const AboutHero = (props) => {
  return (
    <Box>
      <Stack minH="90vh" bg="brand.400" color="brand.300">
        <Flex paddingTop="10" justify="center">
          <Heading className="element" fontSize="5xl" fontWeight="bold" as="h1">
            Who We Are
          </Heading>
        </Flex>
        <HStack
          p="10"
          justify="center"
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Flex maxW="2xl" align="start" flexDirection="column" p="10">
            <Box position="relative">
              <Image src="/values.png" alt="Values" width="600" height="462" />
            </Box>
            <Text fontWeight="semibold" fontSize="4xl" paddingBottom="5">
              Mission
            </Text>
            <Text fontSize="xl">
              We provide safety that doesn’t break the bank and doesn’t give you
              a headache. For so long in our business, general contractors,
              construction managers, and the like have put safety as a last
              priority not because they don’t care about safety but because of
              the hassle that comes with it. We are on a mission to change that.
            </Text>
          </Flex>

          <Flex maxW="2xl" align="start" flexDirection="column" p="10">
            <Box position="relative">
              <Image src="/values.png" alt="Values" width="600" height="462" />
            </Box>
            <Text fontWeight="semibold" fontSize="4xl" paddingBottom="5">
              VALUES
            </Text>
            <Text fontSize="xl">
              We believe that safety can be affordable, can be fast, and can be
              easy. It’s that simple. Our industry has overcomplicated it.
              Because of that, we instill the values of simplicity, trust, and
              determination in everything we do.
            </Text>
          </Flex>
        </HStack>
      </Stack>
    </Box>
  );
};

export default AboutHero;
