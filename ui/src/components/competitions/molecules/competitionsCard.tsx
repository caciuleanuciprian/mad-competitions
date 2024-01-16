import { Button, Flex, Image, Text } from "@chakra-ui/react";
import giveaway from "../../../assets/giveaway.jpg";
import Timer from "../atoms/timer";
import Banner from "../atoms/banner";
import ProgressBar from "../atoms/progress";
import Price from "../atoms/price";
import { ChevronRight } from "lucide-react";

const CompetitionsCard = () => {
  return (
    <Flex
      bg={"white"}
      h={"625px"}
      w={"425px"}
      flexDir={"column"}
      borderRadius={"10px"}
      boxShadow={"5px 5px 15px 0px rgba(0,0,0,0.5)"}
      transition={"all 0.2s ease-in-out"}
      _hover={{
        cursor: "pointer",
      }}
    >
      <Image
        borderTopRadius={"10px"}
        src={giveaway}
        alt="giveaway-picture"
        w={"100%"}
        h={"50%"}
      />
      <Banner />
      <Timer />
      <ProgressBar ticketsBought={2000} totalTickets={5995} />
      <Price price={29.95} />
      <Text fontSize={"lg"} px={4} py={4} fontWeight={"semibold"}>
        {
          "Crazy Lambo or $100K only on this website - draw today so be quick haha!"
        }
      </Text>
      <Button
        variant={"solid"}
        background={"green.400"}
        size={"lg"}
        color={"white"}
        textAlign={"left"}
        borderRadius={"none"}
        borderBottomRadius={"10px"}
        textTransform={"uppercase"}
        border={"2px solid white"}
        _hover={{
          background: "green.400",
          outline: "0px",
          border: "2px solid white",
        }}
      >
        {"Enter Now"} <ChevronRight />
      </Button>
    </Flex>
  );
};

export default CompetitionsCard;
