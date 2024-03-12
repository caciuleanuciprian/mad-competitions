import { Flex, Text } from "@chakra-ui/react";
import Footer from "../components/footer/footer.organism";
import Header from "../components/ui/header";
import Page from "../components/ui/page";

export const FAQsPage = () => {
  return (
    <Page>
      <Header title="FAQs" />

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={4}
        h={"53vh"}
        color={"white"}
      >
        <Text fontSize={"3xl"}>FAQs</Text>
      </Flex>
      <Footer />
    </Page>
  );
};
