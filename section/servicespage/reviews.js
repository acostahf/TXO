import React from "react";
import { Stack, Heading } from "@chakra-ui/layout";

const Reviews = () => {
  return (
    <box>
      <Stack
        minH="50vh"
        align="center"
        direction="column"
        bg="brand.300"
        color="brand.300"
        p="10"
        spacing="10"
      >
        <Heading as="h1" color="brand.400">
          Client Reviews
        </Heading>
      </Stack>
    </box>
  );
};
export default Reviews;
