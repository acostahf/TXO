import React, { useEffect } from "react";
import NextLink from "next/link";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";
import gsap from "gsap";
import theme from "../theme";

const Navbar = () => {
  // useEffect(() => {
  //   // const navTl = gsap.timeline();
  //   gsap.from(".box", { duration: 1.5, y: -300, stagger: 0.2 });
  // }, []);

  return (
    <Box bg="brand.400">
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        p="6"
        px="12"
        boxShadow="lg"
      >
        <NextLink href="/" passHref bg="brand.100">
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
        <Flex color="brand.300" justify="space-evenly" align="center" gap="4">
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
              bg="brand.200"
              rounded="full"
              px="8"
              py="1"
            >
              GET IN TOUCH
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
