import { Flex, Box, Text, Center, SimpleGrid } from "@chakra-ui/layout";

const textBox = (props) => {
  return (
    <Flex direction="column" p="10">
      <Text fontWeight="bold" fontSize="xl" color="green.600">
        {props.title}
      </Text>
      <Text>{props.des}</Text>
    </Flex>
  );
};

export default textBox;
