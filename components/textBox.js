import { Button, ButtonGroup } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import NextLink from "next/link";

const textBox = (props) => {
  return (
    <Flex direction="column" px={{ sm: 0, base: 0, sm: 10 }}>
      <Text
        fontWeight="extrabold"
        fontSize="2xl"
        color="brand.300"
        fontFamily={"heading"}
      >
        {props.title}
      </Text>
      <Text
        fontSize={{ base: "x-small", sm: "x-small", md: "sm", lg: "md" }}
        lineHeight={"taller"}
        mt="2"
      >
        {props.des}
      </Text>
      <ButtonGroup mt="20">
        <NextLink href="/contact" passHref>
          <Button
            rounded="full"
            px="10"
            py={"6"}
            _hover={{ bg: "brand.100" }}
            bgColor="brand.500"
            color="white"
            variant="solid"
          >
            GET IN TOUCH
          </Button>
        </NextLink>
      </ButtonGroup>
    </Flex>
  );
};

export default textBox;
