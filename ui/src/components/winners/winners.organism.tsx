import { Flex } from "@chakra-ui/react";
import WinnersCard from "./molecules/winnersCard";

const Winners = () => {
  return (
    <Flex
      width={"100%"}
      maxWidth={"1500px"}
      margin={"0 auto"}
      h={"100%"}
      minH={"53.65vh"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={8}
      my={8}
      flexWrap={"wrap"}
    >
      <WinnersCard />
    </Flex>
  );
};

export default Winners;
