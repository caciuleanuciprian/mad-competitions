import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Links, LinkIDS } from "../../navigation/utils/consts";

interface CopyrightProps {
  isMobile: boolean;
  isTablet: boolean;
}

const Copyright = ({ isMobile, isTablet }: CopyrightProps) => {
  return (
    <Flex
      py={4}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDir={isMobile || isTablet ? "column" : "row"}
    >
      <Text fontSize={"xs"} wordBreak={"break-all"}>
        Copyright © 2024{" "}
        <Link to={Links[LinkIDS.HOME].to}>MAD Competitions</Link> | Companies
        House Number: 123456789
      </Text>
      <Text fontSize={"xs"}>
        Competition Platform by{" "}
        <a href="https://www.devstoz.com/" target="_blank">
          DevsToZ
        </a>
      </Text>
    </Flex>
  );
};

export default Copyright;
