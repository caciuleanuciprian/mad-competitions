import { Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../ui/logo";
import { useRecoilState } from "recoil";
import { Links, LinkIDS } from "../../navigation/utils/consts";
import { currentActivePageAtom } from "../../navigation/utils/navigation.recoil";

interface FooterLinksProps {
  isTablet: boolean;
}

const FooterLinks = ({ isTablet }: FooterLinksProps) => {
  const navigate = useNavigate();
  const [, setIsActive] = useRecoilState(currentActivePageAtom);
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      textAlign={isTablet ? "center" : "left"}
      py={4}
      flexDir={isTablet ? "column" : "row"}
      gap={4}
      px={4}
    >
      <Flex
        order={isTablet ? 2 : 1}
        flexDir={"column"}
        h={"100%"}
        justifyContent={"space-evenly"}
      >
        <Link to={"/tos"}>Terms & Conditions</Link>
        <Link to={"/privacy"}>Privacy Policy</Link>
        <Link to={"/faqs"}>FAQs</Link>

        <Link to={"/contact"}>Contact Us</Link>
      </Flex>
      <Flex
        width={28}
        height={28}
        cursor={"pointer"}
        order={isTablet ? 1 : 2}
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
