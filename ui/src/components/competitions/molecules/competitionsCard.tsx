import { Button, Flex, Image, Text } from "@chakra-ui/react";
import giveaway from "../../../assets/giveaway.jpg";
import Timer from "../atoms/timer";
import Banner from "../atoms/banner";
import ProgressBar from "../atoms/progress";
import Price from "../atoms/price";
import { ChevronRight } from "lucide-react";
import { CARD_WIDTH } from "../utils/consts";
import Alternative from "../atoms/alternative";
import TagDisplay from "../atoms/tag";

const CompetitionsCard = () => {
  return (
    <Flex
      bg={"white"}
      h={"750px"}
      flexDir={"column"}
      borderRadius={"md"}
      boxShadow={"5px 5px 15px 0px rgba(0,0,0,0.5)"}
      transition={"all 0.2s ease-in-out"}
      w={`${CARD_WIDTH}`}
      _hover={{
        cursor: "pointer",
      }}
    >
      <Image
        borderTopRadius={"md"}
        src={giveaway}
        alt="giveaway-picture"
        w={"100%"}
        h={"50%"}
      />
      <Banner />
      <Timer />
      <ProgressBar ticketsBought={2000} totalTickets={5995} />
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={2}
        px={4}
      >
        <Price price={29.95} />
        <TagDisplay tags={["Car", "Tech"]} />
      </Flex>
      <Text fontSize={"lg"} px={4} py={4} fontWeight={"semibold"}>
        {
          "Crazy Lambo or $100K only on this website - draw today so be quick haha!"
        }
      </Text>
      <Alternative alternative={15000} />
      <Button
        variant={"solid"}
        background={"green.400"}
        size={"lg"}
        color={"white"}
        textAlign={"left"}
        borderRadius={"none"}
        borderBottomRadius={"md"}
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
