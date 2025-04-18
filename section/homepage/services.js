import { Flex, Box, SimpleGrid, VStack } from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";

import TextBox from "../../components/textBox";

// data
const servicesItems = [
    {
        title: "PROFESSIONAL SERVICES",
        des: "From small projects to large ones, we match you with certified, experienced, and trusted safety professionals that come with a wide range of work experience. They understand the complexities of serious hazards within construction and manufacturing environments to make your project a success. By allowing TXO to audit and develop your safety program, we insure that all on-site safety requirements are met on day one.",
        src: "/safety-staffing.png",
    },
    {
        title: "SAFETY PROGRAMS",
        des: " Need help creating, developing, and implementing a strong safety program for your future project? At TXO, we excel in creating and maintaining safety programs that check off every box to meet site specific requirements and most importantly prevent incidents before they happen. From the custom design of the program, to training and implementation, we hold your hand throughout the process so you can worry about the project at hand, not an OSHA visit. Let us help you create a safe work environment, today.",
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
        <VStack
            bg="brand.400"
            bgImage={"url('/mid-pattern.png')"}
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            color="brand.300"
            p={{ base: 5, sm: 5, md: 10, lg: 10 }}
            gap={{ base: "0", sm: "10" }}
        >
            <Flex
                align="center"
                px={{ base: 5, sm: 10, md: 20 }}
                minH="container.sm"
            >
                <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }}>
                    <Box
                        position="relative"
                        pb={{ base: 5, sm: 5, md: 10, lg: 0 }}
                    >
                        <Image
                            src={servicesItems[0].src}
                            alt="header image"
                            layout="responsive"
                            width="654"
                            height="499"
                            priority
                        />
                    </Box>
                    <TextBox
                        title={servicesItems[0].title}
                        des={servicesItems[0].des}
                    />
                </SimpleGrid>
            </Flex>
            <Flex
                align="center"
                px={{ base: 5, sm: 10, md: 20 }}
                minH="container.sm"
            >
                <SimpleGrid
                    columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
                    display={{ base: "none", md: "grid" }}
                >
                    <TextBox
                        title={servicesItems[1].title}
                        des={servicesItems[1].des}
                    />
                    <Box
                        position="relative"
                        pt={{ base: 5, sm: 5, md: 10, lg: 0 }}
                    >
                        <Image
                            src={servicesItems[1].src}
                            alt="header image"
                            layout="responsive"
                            width="654"
                            height="499"
                            priority
                        />
                    </Box>
                </SimpleGrid>
                <SimpleGrid
                    columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
                    display={{ base: "grid", md: "none" }}
                >
                    <Box
                        position="relative"
                        pt={{ base: 5, sm: 5, md: 10, lg: 0 }}
                    >
                        <Image
                            src={servicesItems[1].src}
                            alt="header image"
                            layout="responsive"
                            width="654"
                            height="499"
                            priority
                        />
                    </Box>
                    <TextBox
                        title={servicesItems[1].title}
                        des={servicesItems[1].des}
                    />
                </SimpleGrid>
            </Flex>
            <Flex
                align="center"
                px={{ base: 5, sm: 10, md: 20 }}
                minH="container.sm"
            >
                <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }}>
                    <Box
                        position="relative"
                        pb={{ base: 5, sm: 5, md: 10, lg: 0 }}
                    >
                        <Image
                            src={servicesItems[2].src}
                            alt="header image"
                            layout="responsive"
                            width="654"
                            height="499"
                            priority
                        />
                    </Box>
                    <TextBox
                        title={servicesItems[2].title}
                        des={servicesItems[2].des}
                    />
                </SimpleGrid>
            </Flex>
        </VStack>
    );
};

export default Services;
