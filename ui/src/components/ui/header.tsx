import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Logo from "./logo";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex
      w={"100%"}
      h={"8vh"}
      background={"gray.900"}
      justifyContent={"center"}
      alignItems={"center"}
      minH={"80px"}
      fontWeight={"bold"}
      textOverflow={"ellipsis"}
      whiteSpace={isTablet ? "wrap" : "nowrap"}
      overflow={"hidden"}
    >
      <Flex w={"100%"} height={"100%"}></Flex>
      <Text
        w={"100%"}
        textAlign={"center"}
        fontSize={isTablet ? "sm" : "2xl"}
        color={"white"}
      >
        {title}
      </Text>
      <Flex w={"100%"} height={"100%"} justifyContent={"flex-end"}>
        <Logo />
      </Flex>
    </Flex>
  );
};

export default Header;
