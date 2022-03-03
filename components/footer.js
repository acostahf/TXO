import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { VStack, Flex, Link, Box, Text, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      minH="30vh"
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
            width="229px"
            height="99px"
            alt="green logo"
          />
        </Box>
        <Divider />
        <Flex>
          <Text>Copright 2023. TXO Consulting, LLC. All rights reserved.</Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Footer;
