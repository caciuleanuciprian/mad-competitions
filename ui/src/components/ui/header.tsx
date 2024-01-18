import { Flex, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Flex
      w={"100%"}
      h={"8vh"}
      background={"gray.900"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex w={"100%"} height={"100%"}></Flex>
      <Text w={"100%"} textAlign={"center"} fontSize={"4xl"} color={"white"}>
        {title}
      </Text>
      <Flex w={"100%"} height={"100%"} justifyContent={"flex-end"}>
        <Image src={logo} alt="logo" />
      </Flex>
    </Flex>
  );
};

export default Header;
