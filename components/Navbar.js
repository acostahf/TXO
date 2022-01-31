import React, { useEffect } from "react";
import NextLink from "next/link";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";
import gsap from "gsap";

const Navbar = () => {
  useEffect(() => {
    gsap.from(".box", { duration: 1.5, y: -300, stagger: 0.2 });
  });

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
            className="box"
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
        <Flex justify="space-evenly" align="center" gap="4">
          <NextLink href="/services" passHref>
            <Link className="box">Safety Services</Link>
          </NextLink>
          <NextLink href="/about" passHref>
            <Link className="box">Who We Are</Link>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Link className="box">Contact</Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link
              className="box"
              textColor="white"
              fontWeight="bold"
              bg="green.500"
              rounded="full"
              px="8"
              py="1"
            >
              BTN
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
