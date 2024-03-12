import { Flex, Text } from "@chakra-ui/react";
import Footer from "../components/footer/footer.organism";
import Header from "../components/ui/header";
import Page from "../components/ui/page";

export const TOSPage = () => {
  return (
    <Page>
      <Header title="Terms of Service" />

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={4}
        h={"53vh"}
        color={"white"}
      >
        <Text fontSize={"3xl"}>Terms of Service</Text>
      </Flex>
      <Footer />
    </Page>
  );
};
