import { Flex } from "@chakra-ui/react";
import Navigation from "../navigation/navigation";

const Page = ({ children }: any) => {
  return (
    <>
      <Navigation />
      <Flex width={"100vw"} height={"90vh"} bg={"red"}>
        {children}
      </Flex>
    </>
  );
};

export default Page;
