import { Flex, Text } from "@chakra-ui/react";
import { BannerColors } from "../utils/consts";
import { BannerProps } from "../utils/types";

const Banner = ({
  text = "To Be Announced",
  color = BannerColors.DEFAULT,
}: BannerProps) => {
  return (
    <Flex
      w={"100%"}
      h={"5%"}
      bg={color}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text fontSize={"md"} fontWeight={"semibold"} color={"white"}>
        {text}
      </Text>
    </Flex>
  );
};

export default Banner;
