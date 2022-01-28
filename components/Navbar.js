import React from "react";
import NextLink from "next/link";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        p="8"
        boxShadow="lg"
      >
        <NextLink href="/" passHref>
          <Link
            textColor="white"
            fontWeight="bold"
            bg="gray.500"
            rounded="full"
            px="8"
            py="1"
          >
            LOGO
          </Link>
        </NextLink>
        <Flex justify="space-evenly" gap="4">
          <NextLink href="/services" passHref>
            <Link>Safety Services</Link>
          </NextLink>
          <NextLink href="/about" passHref>
            <Link>Who We Are</Link>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Link>Contact</Link>
          </NextLink>
          <Button size="sm" colorScheme="green" rounded="full" px="10">
            CTA
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
