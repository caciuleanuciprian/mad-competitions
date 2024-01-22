import { Image } from "@chakra-ui/react";
import WinnersName from "../atoms/winnersName";
import WinnersPrize from "../atoms/winnersPrize";
import WinnersTicket from "../atoms/winnersTicket";
import winner from "../../../assets/winner.jpg";
import { Card } from "../../ui/card/card";

const WinnersCard = () => {
  return (
    <Card bg={"gray.900"}>
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
    </Card>
  );
};

export default WinnersCard;
