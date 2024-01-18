import { Flex } from "@chakra-ui/react";
import WinnersCard from "./molecules/winnersCard";

const Winners = () => {
  return (
    <Flex
      width={"100%"}
      maxWidth={"1500px"}
      margin={"0 auto"}
      h={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={8}
      my={8}
      flexWrap={"wrap"}
    >
      <WinnersCard />
      <WinnersCard />
      <WinnersCard />
      <WinnersCard />
      <WinnersCard />
    </Flex>
  );
};

export default Winners;
