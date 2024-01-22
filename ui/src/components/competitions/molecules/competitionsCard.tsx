import { Button, Flex, Image, Text } from "@chakra-ui/react";
import giveaway from "../../../assets/giveaway.jpg";
import Timer from "../atoms/timer";
import Banner from "../atoms/banner";
import ProgressBar from "../atoms/progress";
import Price from "../atoms/price";
import { ChevronRight } from "lucide-react";
import Alternative from "../atoms/alternative";
import TagDisplay from "../atoms/tag";
import { Card } from "../../ui/card/card";

const CompetitionsCard = () => {
  return (
    <Card bg={"white"}>
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
    </Card>
  );
};

export default CompetitionsCard;
