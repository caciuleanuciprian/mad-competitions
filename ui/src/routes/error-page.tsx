import { Button, Flex, Text } from "@chakra-ui/react";
import Footer from "../components/footer/footer.organism";
import Page from "../components/ui/page";
import { useNavigate } from "react-router-dom";
import { PagesURL } from "./consts";
import Logo from "../components/ui/logo";
import Header from "../components/ui/header";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <Header title="" />

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={4}
        h={"53vh"}
        color={"white"}
      >
        {/* @ts-ignore */}
        <Logo width={"100%"} height={128} />
        <Text fontSize={"3xl"}>Page not found!</Text>
        <Button
          variant={"outline"}
          color={"white"}
          _hover={{ color: "black", bg: "white", borderColor: "white" }}
          onClick={() => {
            navigate(PagesURL.LANDING);
          }}
        >
          Home
        </Button>
      </Flex>
      <Footer />
    </Page>
  );
};

export default ErrorPage;
