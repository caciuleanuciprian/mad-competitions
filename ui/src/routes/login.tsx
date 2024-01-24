import { Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Formiz, useForm } from "@formiz/core";
import InputField from "../components/ui/forms/inputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Page from "../components/ui/page";
import { ICONS_SIZE } from "../lib/consts";

const LoginPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const loginForm = useForm();
  return (
    <Page>
      <Flex
        flexDir={"column"}
        p={8}
        gap={4}
        bg={"gray.900"}
        borderRadius={"md"}
        w={isMobile ? "90%" : "50%"}
        margin={"0 auto"}
        color={"white"}
      >
        <Text fontSize={"2xl"} textAlign={"center"}>
          Login
        </Text>
        <Formiz connect={loginForm}>
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
        </Formiz>
        <Button>Login</Button>
      </Flex>
    </Page>
  );
};

export default LoginPage;
