import { Button, ButtonGroup } from "@chakra-ui/button";
import { Flex, Box, Text, Center, SimpleGrid } from "@chakra-ui/layout";

const textBox = (props) => {
  return (
    <Flex direction="column" p={{ base: 0, sm: 10 }}>
      <Text fontWeight="extrabold" fontSize="2xl" color="brand.300">
        {props.title}
      </Text>
      <Text fontSize={"xs"} mt="2">
        {props.des}
      </Text>
      <ButtonGroup mt="20">
        <Button
          rounded="full"
          px="10"
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
