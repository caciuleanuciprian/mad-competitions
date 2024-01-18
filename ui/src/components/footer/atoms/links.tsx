import { Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

interface FooterLinksProps {
  isMobile: boolean;
  isTablet: boolean;
}

const FooterLinks = ({ isMobile, isTablet }: FooterLinksProps) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      textAlign={isMobile || isTablet ? "center" : "left"}
      py={4}
      flexDir={isMobile || isTablet ? "column" : "row"}
      gap={4}
    >
      <Flex
        order={isMobile || isTablet ? 2 : 1}
        flexDir={"column"}
        h={"100%"}
        justifyContent={"space-evenly"}
      >
        <Link to={"/tos"}>Terms & Conditions</Link>
        <Text>Privacy Policy</Text>
        <Text>Cookie Policy</Text>
        <Text>FAQs</Text>
        <Text>Contact Us</Text>
      </Flex>
      <Image
        order={isMobile || isTablet ? 1 : 2}
        w={28}
        h={28}
        src={logo}
        alt="logo"
      />
    </Flex>
  );
};

export default FooterLinks;
