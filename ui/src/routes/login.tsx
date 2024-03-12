import { Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Formiz, useForm } from "@formiz/core";
import InputField from "../components/ui/forms/inputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Page from "../components/ui/page";
import { ICONS_SIZE } from "../lib/consts";
import Header from "../components/ui/header";
import Footer from "../components/footer/footer.organism";
import Logo from "../components/ui/logo";

const LoginPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const loginForm = useForm();
  return (
    <Page>
      <Header title="Login" />
      <Flex
        flexDir={"column"}
        p={8}
        gap={4}
        bg={"gray.900"}
        borderRadius={"md"}
        w={isMobile ? "90%" : "50%"}
        margin={"0 auto"}
        color={"white"}
        my={8}
        h={"52vh"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Logo width={200} height={200} />
        <Formiz connect={loginForm}>
          <Flex flexDir={"column"} w={"100%"} gap={4}>
            <InputField
              name="username"
              type="text"
              leftEl={<FontAwesomeIcon fontSize={ICONS_SIZE} icon={faUser} />}
            />
            <InputField
              name="password"
              type="password"
              leftEl={<FontAwesomeIcon fontSize={ICONS_SIZE} icon={faLock} />}
            />
            <Button>Login</Button>
          </Flex>
        </Formiz>
      </Flex>
      <Footer />
    </Page>
  );
};

export default LoginPage;
