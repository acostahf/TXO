import { Box, Flex, Heading, Wrap, WrapItem } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import Card from "../../components/card";

// data
const cardItems = [
  {
    title: "Lorem Ipuem",
    description:
      " Laboris consequat irure est irure quis ipsum adipisicing incididunt ex.",
  },
  {
    title: "Lorem Ipuem",
    description:
      " Laboris consequat irure est irure quis ipsum adipisicing incididunt ex.",
  },
  {
    title: "Lorem Ipuem",
    description:
      " Laboris consequat irure est irure quis ipsum adipisicing incididunt ex.",
  },
  {
    title: "Lorem Ipuem",
    description:
      " Laboris consequat irure est irure quis ipsum adipisicing incididunt ex.",
  },
  {
    title: "Lorem Ipuem",
    description:
      " Laboris consequat irure est irure quis ipsum adipisicing incididunt ex.",
  },
];

const Promises = (props) => {
  return (
    <section>
      <Flex align="center" direction="column" className="section">
        <Heading className="title" mt="20" mb="20">
          The TXO Promises{" "}
        </Heading>
        <Flex align="center" justify="center">
          <Wrap justify="center">
            {cardItems.map((items, i) => (
              <WrapItem key={i} className="promises">
                <Card title={items.title} description={items.description} />
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Flex>
    </section>
  );
};

export default Promises;
