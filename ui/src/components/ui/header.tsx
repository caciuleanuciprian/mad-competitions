import { Flex, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <Flex
      w={"100vw"}
      h={"10vh"}
      background={"black"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex w={"100%"} height={"100%"}></Flex>
      <Text w={"100%"} textAlign={"center"} fontSize={"4xl"} color={"white"}>
        Competitions
      </Text>
      <Flex w={"100%"} height={"100%"} justifyContent={"flex-end"}>
        <Image src={logo} alt="logo" />
      </Flex>
    </Flex>
  );
};

export default Header;
