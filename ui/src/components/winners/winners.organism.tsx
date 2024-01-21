import { Flex, useMediaQuery } from "@chakra-ui/react";
import WinnersCard from "./molecules/winnersCard";
import { useRecoilState } from "recoil";
import { isAdminAtom } from "../navigation/utils/navigation.recoil";
import AddWinner from "./molecules/addWinner";

const Winners = () => {
  const [isAdmin] = useRecoilState(isAdminAtom);
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
      {isAdmin && <AddWinner />}
      <WinnersCard />
      <WinnersCard />
      <WinnersCard />
      <WinnersCard />
      <WinnersCard />
    </Flex>
  );
};

export default Winners;
