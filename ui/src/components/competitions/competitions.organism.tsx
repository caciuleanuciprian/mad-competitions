import { Flex } from "@chakra-ui/react";
import CompetitionsCard from "./molecules/competitionsCard";

const Competitions = () => {
  return (
    <Flex
      width={"100%"}
      maxWidth={"1200px"}
      margin={"0 auto"}
      h={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
      mt={4}
    >
      <CompetitionsCard />
      <CompetitionsCard />
      <CompetitionsCard />
    </Flex>
  );
};

export default Competitions;
