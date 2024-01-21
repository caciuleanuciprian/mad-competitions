import { Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Formiz, useForm } from "@formiz/core";
import { InputField } from "../components/ui/forms/inputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const loginForm = useForm();
  return (
    <Flex
      w={"100vw"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      h={"100vh"}
      bg={"black"}
      color={"white"}
      pt={4}
    >
      <Flex
        flexDir={"column"}
        p={8}
        gap={4}
        bg={"gray.900"}
        borderRadius={"md"}
        minW={isMobile ? "75%" : "50%"}
      >
        <Text fontSize={"2xl"} textAlign={"center"}>
          Login
        </Text>
        <Formiz connect={loginForm}>
          <InputField
            name="username"
            type="text"
            leftEl={<FontAwesomeIcon icon={faUser} />}
          />
          <InputField
            name="password"
            type="password"
            leftEl={<FontAwesomeIcon icon={faLock} />}
          />
        </Formiz>
        <Button>Login</Button>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
