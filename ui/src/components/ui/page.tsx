import { Flex } from "@chakra-ui/react";
import Navigation from "../navigation/navigation.organism";

const Page = ({ children }: any) => {
  return (
    <>
      <Navigation />
      <Flex width={"100vw"} minH={"90vh"} flexDir={"column"} bg={"gray.800"}>
        {children}
      </Flex>
    </>
  );
};

export default Page;
