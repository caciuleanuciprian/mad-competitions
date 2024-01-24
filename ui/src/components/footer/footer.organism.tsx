import { Divider, Flex, useMediaQuery } from "@chakra-ui/react";
import Bar from "./atoms/bar";
import Social from "./atoms/social";
import Payment from "./atoms/payment";
import FooterLinks from "./atoms/links";
import Copyright from "./atoms/copyright";

// TODO Separate footer into sections/smaller components

const Footer = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)", { ssr: false });
  const [isTablet] = useMediaQuery("(max-width: 1200px)", { ssr: false });

  return (
    <Flex
      w={"100%"}
      bg={"gray.700"}
      flexDir={"column"}
      color={"white"}
      minH={"25vh"}
    >
      <Bar />
      <Flex
        flexDir={"column"}
        maxW={"1500px"}
        margin={"0 auto"}
        w={"100%"}
        h={"100%"}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"100%"}
          py={4}
          flexDir={isMobile || isTablet ? "column" : "row"}
        >
          <Social />
          <Payment />
        </Flex>
        <Divider />
        <FooterLinks isMobile={isMobile} isTablet={isTablet} />
        <Divider />
        <Copyright isMobile={isMobile} isTablet={isTablet} />
      </Flex>
    </Flex>
  );
};

export default Footer;
