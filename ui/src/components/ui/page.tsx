import { Flex } from "@chakra-ui/react";
import Navigation from "../navigation/navigation.organism";
import { useRecoilState } from "recoil";
import { isAdminAtom } from "../navigation/utils/navigation.recoil";

const Page = ({ children }: any) => {
  const [isAdmin] = useRecoilState(isAdminAtom);
  window.scrollTo(0, 0);
  return (
    <>
      {isAdmin && (
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          bg={"green.500"}
          color={"white"}
          h={"50px"}
        >
          You are logged in as an Administrator!
        </Flex>
      )}

      <Navigation />
      <Flex width={"100%"} minH={"90vh"} flexDir={"column"} bg={"black"}>
        {children}
      </Flex>
    </>
  );
};

export default Page;
