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
  Button,
  ButtonGroup
} from "@chakra-ui/react";
import React from "react";

export const ContactForm = () => {
  return (
    <div>
      <Flex
        bgColor="brand.200"
        bgImage={"url('/mid-pattern.svg')"}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        maxW={"5xl"}
      
      >
        <Flex p="10" bg={"brand.300"} minW={"2xl"}>
          <FormControl>
            <Flex direction={"column"} gap={"5"}>
              <FormLabel
                htmlFor="email"
                fontWeight="bold"
                fontFamily={"heading"}
                fontSize="xl"
                color="brand.400"
              >
                How May We Help You?
              </FormLabel>
              <RadioGroup defaultValue="Itachi" color="brand.300">
                <HStack spacing="24px">
                  <Radio value="Quote">Quote</Radio>
                  <Radio value="Additional Information">
                    Additional Information
                  </Radio>
                </HStack>
              </RadioGroup>
              <Flex gap={"2"}>
                <Input
                  borderRadius={"full"}
                  borderColor="brand.200"
                  id="first"
                  type="first"
                  placeholder="Frist Name"
                />
                <Input
                  borderRadius={"full"}
                  borderColor="brand.200"
                  id="last"
                  type="last"
                  placeholder="Last Name"
                />
              </Flex>
              <Flex gap={"2"}>
                <Input
                  borderRadius={"full"}
                  borderColor="brand.200"
                  id="company"
                  type="company"
                  placeholder="Company Name"
                />
                <Input
                  borderRadius={"full"}
                  borderColor="brand.200"
                  id="number"
                  type="number"
                  placeholder="Phone Number"
                />
              </Flex>
              <Input
                borderRadius={"full"}
                borderColor="brand.200"
                id="email"
                type="email"
                placeholder="Email Address"
              />
              <Flex gap={"2"}>
                <Input
                  borderRadius={"full"}
                  borderColor="brand.200"
                  id="service"
                  type="service"
                  placeholder="Service Requesting"
                />

                <Input
                  borderRadius={"full"}
                  borderColor="brand.200"
                  id="reference"
                  type="reference"
                  placeholder="How did you find us"
                />
              </Flex>
              <Textarea
                borderRadius={"xl"}
                borderColor="brand.200"
                id="message"
                type="message"
                placeholder="message"
                size="sm"
              />
               <ButtonGroup >
                  <Button
                    rounded="full"
                    px="6"
                    bgColor="brand.200"
                    _hover={{ bg: 'brand.100' }}
                    color="white"
                    variant="solid"
                    fontFamily={"heading"}
                    fontSize={"x-small"}
                  >
                     GET IN TOUCH
                    </Button>
                  </ButtonGroup>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </div>
  );
};
