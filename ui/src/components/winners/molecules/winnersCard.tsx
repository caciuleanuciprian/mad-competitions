import { Flex, Image } from "@chakra-ui/react";
import WinnersName from "../atoms/winnersName";
import WinnersPrize from "../atoms/winnersPrize";
import WinnersTicket from "../atoms/winnersTicket";
import { CARD_WIDTH } from "../../competitions/utils/consts";
import winner from "../../../assets/winner.jpg";

const WinnersCard = () => {
  return (
    <Flex
      bg={"gray.900"}
      h={"625px"}
      flexDir={"column"}
      borderRadius={"md"}
      boxShadow={"5px 5px 15px 0px rgba(0,0,0,0.5)"}
      transition={"all 0.2s ease-in-out"}
      w={`${CARD_WIDTH}`}
      color={"white"}
      justifyContent={"space-between"}
    >
      <Image
        w={"100%"}
        h={"75%"}
        objectFit={"cover"}
        src={winner}
        alt="winner"
        borderTopRadius={"md"}
      />
      <WinnersName name="John Wick" />
      <WinnersPrize prize="MERCEDES A45 AMG OR £15,000 WINNER " />
      <WinnersTicket ticket="953" />
    </Flex>
  );
};

export default WinnersCard;
