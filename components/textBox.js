import { Button, ButtonGroup } from "@chakra-ui/button";
import { Flex, Box, Text, Center, SimpleGrid } from "@chakra-ui/layout";

const textBox = (props) => {
  return (
    <Flex direction="column" p="10">
      <Text fontWeight="bold" fontSize="xl" color="green.600">
        {props.title}
      </Text>
      <Text mt="2">{props.des}</Text>
      <ButtonGroup mt="8">
        <Button
          rounded="full"
          px="10"
          bgColor="green.700"
          color="white"
          variant="solid"
        >
          Button
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default textBox;
