import { Flex, Divider, Text } from "@chakra-ui/react";
import { Crown, Lock, PlayCircle } from "lucide-react";

const Bar = () => {
  return (
    <Flex
      w={"100%"}
      bg={"gray.900"}
      color={"white"}
      justifyContent={"center"}
      alignItems={"center"}
      p={4}
      boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.5)"}
      fontSize={"lg"}
      fontWeight={"semibold"}
    >
      <Lock />
      <Text ml={2}>Secure Payments</Text>
      <Divider orientation={"vertical"} mx={4} />
      <Crown />
      <Text ml={2}>Guaranteed Winners</Text>
      <Divider orientation={"vertical"} mx={4} />
      <PlayCircle />
      <Text ml={2}>Live Draws on Facebook</Text>
    </Flex>
  );
};

export default Bar;
