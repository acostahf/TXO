import { Button, ButtonGroup } from "@chakra-ui/button";
import { Flex, Box, Text, Center, SimpleGrid } from "@chakra-ui/layout";

const textBox = (props) => {
  return (
    <Flex direction="column" px={{ base: 0, sm: 10 }} >
      <Text fontWeight="extrabold" fontSize="2xl" color="brand.300" fontFamily={"heading"}>
        {props.title}
      </Text>
      <Text  fontSize={"md"} lineHeight={"taller"} mt="2">
        {props.des}
      </Text>
      <ButtonGroup mt="20">
        <Button
          rounded="full"
          px="10"
          py={"6"}
          _hover={{ bg: 'brand.100' }}
          bgColor="brand.500"
          color="white"
          variant="solid"
        >
          GET IN TOUCH
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default textBox;
