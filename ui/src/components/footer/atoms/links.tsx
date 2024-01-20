import { Flex, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../ui/logo";
import { useRecoilState } from "recoil";
import { Links, LinkIDS } from "../../navigation/utils/consts";
import { currentActivePageAtom } from "../../navigation/utils/navigation.recoil";

interface FooterLinksProps {
  isMobile: boolean;
  isTablet: boolean;
}

const FooterLinks = ({ isMobile, isTablet }: FooterLinksProps) => {
  const navigate = useNavigate();
  const [, setIsActive] = useRecoilState(currentActivePageAtom);
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
        <Link to={"/contact"}>Contact Us</Link>
      </Flex>
      <Flex
        width={28}
        height={28}
        cursor={"pointer"}
        order={isMobile || isTablet ? 1 : 2}
        onClick={() => {
          navigate(Links[LinkIDS.HOME].to);
          setIsActive(LinkIDS.HOME);
        }}
      >
        <Logo />
      </Flex>
    </Flex>
  );
};

export default FooterLinks;
