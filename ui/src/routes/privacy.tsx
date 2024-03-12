import { Flex, Text } from "@chakra-ui/react";
import Footer from "../components/footer/footer.organism";
import Header from "../components/ui/header";
import Page from "../components/ui/page";

export const PrivacyPolicyPage = () => {
  return (
    <Page>
      <Header title="Privacy Policy" />

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={4}
        h={"53vh"}
        color={"white"}
      >
        <Text fontSize={"3xl"}>Privacy Policy</Text>
      </Flex>
      <Footer />
    </Page>
  );
};
