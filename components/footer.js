import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { VStack, Flex, Link, Box, Text, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      // minH="30vh"
      align="center"
      justify="center"
      bg="brand.400"
      color="brand.300"
      p="10"
    >
      <VStack gap="4">
        <Flex
          justify="space-evenly"
          align="center"
          gap="4"
          fontWeight="extrabold"
          fontFamily={"heading"}
          fontSize={{base: "x-small", md:"sm"}}
        >
          <NextLink href="/services" passHref>
            <Link className="box">SERVICES</Link>
          </NextLink>
          <NextLink href="/about" passHref>
            <Link className="box">ABOUT US</Link>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Link className="box">CONTACT</Link>
          </NextLink>
        </Flex>
        <Box>
          <Image
            src="/green-logo.png"
            width="150px"
            height="59px"
            alt="green logo"
          />
        </Box>
        <Divider />
        <Flex>
          <Text fontSize={"sm"}>
            Copright 2023. TXO Consulting, LLC. All rights reserved.
          </Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Footer;
