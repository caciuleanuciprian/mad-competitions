import { Flex } from "@chakra-ui/react";

const NavContainer = ({ children }: any) => {
  return (
    <Flex
      h={"8vh"}
      w={"full"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={6}
      bg={"black"}
      minH={"80px"}
    >
      {children}
    </Flex>
  );
};

export default NavContainer;
