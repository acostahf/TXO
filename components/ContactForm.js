import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export const ContactForm = () => {
  return (
    <div>
      <Flex p="10" bgColor="brand.300">
        <FormControl>
          <FormLabel
            htmlFor="email"
            fontWeight="bold"
            fontSize="3xl"
            color="brand.400"
          >
            How May We Help You
          </FormLabel>
          <RadioGroup defaultValue="Itachi" color="brand.300">
            <HStack spacing="24px">
              <Radio value="Quote">Quote</Radio>
              <Radio value="Additional Information">
                Additional Information
              </Radio>
            </HStack>
          </RadioGroup>
          <Input
            borderColor="brand.200"
            id="first"
            type="first"
            placeholder="Frist Name"
          />
          <Input
            borderColor="brand.200"
            id="last"
            type="last"
            placeholder="Last Name"
          />
          <Input
            borderColor="brand.200"
            id="company"
            type="company"
            placeholder="Company Name"
          />
          <Input
            borderColor="brand.200"
            id="email"
            type="email"
            placeholder="Email Address"
          />
          <Input
            borderColor="brand.200"
            id="service"
            type="service"
            placeholder="Service Requesting"
          />
          <Input
            borderColor="brand.200"
            id="reference"
            type="reference"
            placeholder="How did you find us"
          />
          <Textarea
            borderColor="brand.200"
            id="message"
            type="message"
            placeholder="message"
            size="sm"
          />
        </FormControl>
      </Flex>
    </div>
  );
};
