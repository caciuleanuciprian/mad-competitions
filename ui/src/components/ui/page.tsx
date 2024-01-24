import { Flex } from "@chakra-ui/react";
import Navigation from "../navigation/navigation.organism";

const Page = ({ children }: any) => {
  return (
    <>
      <Navigation />
      <Flex width={"100%"} minH={"90vh"} flexDir={"column"} bg={"black"}>
        {children}
      </Flex>
    </>
  );
};

export default Page;
