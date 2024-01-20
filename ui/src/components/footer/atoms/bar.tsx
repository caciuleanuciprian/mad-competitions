import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Crown, Lock, PlayCircle } from "lucide-react";

const Bar = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)", { ssr: false });
  const [isTablet] = useMediaQuery("(max-width: 1200px)", { ssr: false });
  return (
    <Flex
      w={"100%"}
      bg={"gray.900"}
      color={"white"}
      justifyContent={"space-evenly"}
      p={4}
      alignItems={"center"}
      boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.5)"}
      fontSize={"lg"}
      fontWeight={"semibold"}
    >
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxW={"1200px"}
        flexDir={isMobile || isTablet ? "column" : "row"}
        gap={4}
      >
        <Flex>
          <Lock />
          <Text ml={2}>Secure Payments</Text>
        </Flex>
        <Flex>
          <Crown />
          <Text ml={2}>Guaranteed Winners</Text>
        </Flex>
        <Flex>
          <PlayCircle />
          <Text ml={2}>Live Draws on Facebook</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Bar;
