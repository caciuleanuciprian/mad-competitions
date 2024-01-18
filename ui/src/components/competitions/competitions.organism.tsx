import { Flex } from "@chakra-ui/react";
import CompetitionsCard from "./molecules/competitionsCard";

const Competitions = () => {
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
      <CompetitionsCard />
      <CompetitionsCard />
      <CompetitionsCard />
      <CompetitionsCard />
    </Flex>
  );
};

export default Competitions;