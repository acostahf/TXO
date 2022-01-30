import { Flex, Box, SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import TextBox from "../../components/textBox";

// data
const servicesItems = [
  {
    title: "Services",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Dui faucibus in ornare quam viverra. Interdum velit euismod in pellentesque massa placerat duis ultricies. Gravida quis blandit turpis cursus in. Urna duis convallis convallis tellus id interdum velit. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Velit sed ullamcorper morbi tincidunt ornare",
  },
  {
    title: "OSHA 30 Virtual",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Dui faucibus in ornare quam viverra. Interdum velit euismod in pellentesque massa placerat duis ultricies. Gravida quis blandit turpis cursus in. Urna duis convallis convallis tellus id interdum velit. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Velit sed ullamcorper morbi tincidunt ornare",
  },
];

const Services = () => {
  return (
    <section>
      {servicesItems.map((item, i) => (
        <Flex align="center" px="20" minH="container.sm">
          {i % 2 ? (
            <SimpleGrid columns="2" key={i}>
              <Box bgColor="gray.300"></Box>
              <TextBox title={item.title} des={item.des} />
            </SimpleGrid>
          ) : (
            <SimpleGrid columns="2" key={i}>
              <TextBox title={item.title} des={item.des} />
              <Box bgColor="gray.300"></Box>
            </SimpleGrid>
          )}
        </Flex>
      ))}
    </section>
  );
};

export default Services;
