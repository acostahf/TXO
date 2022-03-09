import { Flex, Box, SimpleGrid, VStack } from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";

import TextBox from "../../components/textBox";

// data
const servicesItems = [
  {
    title: "SAFETY STAFFING",
    des: "We alleviate your staffing burdens by contracting trained professionals to help meet your on-site safety requirements. From small projects to large ones, we match you with certified, experienced, and trusted safety coordinators that come with a wide range of work experience. They understand the complexities of serious hazards within construction and manufacturing environments to make your project a success. By allowing TXO to handle the hiring of safety profesionals, you insure that all on-site safety requirements are met on day one.",
    src: "/safety-staffing.png",
  },
  {
    title: "SAFETY PROGRAMS",
    des: "Need help creating, developing, and implementing a strong safety program for your future project? At TXO, we excel in creating and maintaining safety programs that check off every box and most importantly prevent incidents before they happen. From the custom design of the program, to training and implementation, we hold your hand throughout the process so you can worry about the project at hand, not an OSHA visit. Let us help you create a safe work environment, today.",
    src: "/safety-program.jpg",
  },
  {
    title: "SAFETY TRAINING",
    des: "Providing your employees with the necessary and relevant safety training is key in preventing potential incidents, creating a safe work environment, and dramatically lowering the impact of your insurance costs. TXO’s highly customizable trainings in many different courses gives your employees the knowledge they need on the jobsite. With our flexible training schedule we can implement trainings weekly, monthly, or as a needed basis.",
    src: "/safety-training.jpg",
  },
];

const Services = (props) => {
  return (
    <VStack bg="brand.400" color="brand.300">
      <Flex align="center" px="20" minH="container.sm">
        <SimpleGrid columns="2">
          <Box
            // bgColor="gray.300"
            position="relative"
            // height="499px"
          >
            <Image
              src={servicesItems[0].src}
              alt="header image"
              layout="responsive"
              width="654"
              height="499"
            />
            <Box
              as="button"
              px="4"
              py="2"
              bg="brand.300"
              fontWeight="extrabold"
              fontSize="2xl"
              color="brand.400"
              position="absolute"
              top="-5"
              left="-5"
            >
              CERTIFIED
            </Box>
            <Box
              as="button"
              px="4"
              py="2"
              bg="brand.300"
              fontWeight="extrabold"
              fontSize="2xl"
              color="brand.400"
              position="absolute"
              top="32"
              left="32"
            >
              EXPERIENCED
            </Box>
            <Box
              as="button"
              px="4"
              py="2"
              bg="brand.300"
              fontWeight="extrabold"
              fontSize="2xl"
              color="brand.400"
              position="absolute"
              bottom="10"
              left="-10"
            >
              TRUSTED
            </Box>
          </Box>
          <TextBox title={servicesItems[0].title} des={servicesItems[0].des} />
        </SimpleGrid>
      </Flex>
      <Flex align="center" px="20" minH="container.sm">
        <SimpleGrid columns="2">
          <TextBox title={servicesItems[1].title} des={servicesItems[1].des} />
          <Box position="relative">
            <Image
              src={servicesItems[1].src}
              alt="header image"
              layout="responsive"
              width="654"
              height="499"
            />
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex align="center" px="20" minH="container.sm">
        <SimpleGrid columns="2">
          <Box position="relative">
            <Image
              src={servicesItems[2].src}
              alt="header image"
              layout="responsive"
              width="654"
              height="499"
            />
          </Box>
          <TextBox title={servicesItems[2].title} des={servicesItems[2].des} />
        </SimpleGrid>
      </Flex>
    </VStack>
  );
};

export default Services;
