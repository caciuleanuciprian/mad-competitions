import { Flex, useMediaQuery } from "@chakra-ui/react";
import CompetitionsCard from "./molecules/competitionsCard";

const Competitions = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)", { ssr: false });
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
      px={isMobile ? 4 : 0}
    >
      <CompetitionsCard />
    </Flex>
  );
};

export default Competitions;
