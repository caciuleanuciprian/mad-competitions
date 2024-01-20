import { Formiz, useForm } from "@formiz/core";
import { isEmail, isNotEmptyString, isRequired } from "@formiz/validations";
import { InputField } from "../../ui/forms/inputField";
import { TextareaForm } from "../../ui/forms/textareaForm";
import { Button, ButtonGroup, Flex } from "@chakra-ui/react";

interface ContactFormProps {
  order: number;
}

const ContactForm = ({ order }: ContactFormProps) => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const form = useForm({ onSubmit: handleSubmit }); // create a new form

  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      order={order}
      p={4}
      w={"100%"}
      h={"100%"}
    >
      <Formiz
        connect={form}
        children={
          <Flex
            flexDir={"column"}
            gap={4}
            w={"100%"}
            h={"100%"}
            alignItems={"flex-end"}
            p={4}
          >
            <Flex flexDir={"column"} w={"100%"}>
              <InputField
                name="name"
                validations={[
                  {
                    handler: isRequired() && isNotEmptyString(),
                    message: "Name is invalid",
                  },
                ]}
              />
            </Flex>
            <Flex flexDir={"column"} w={"100%"}>
              <InputField
                name="email"
                validations={[
                  {
                    handler: isRequired() && isEmail(),
                    message: "Email is invalid",
                  },
                ]}
              />
            </Flex>
            <Flex flexDir={"column"} w={"100%"}>
              <InputField
                name="address"
                validations={[
                  {
                    handler: isRequired() && isNotEmptyString(),
                    message: "Address is invalid",
                  },
                ]}
              />
            </Flex>
            <Flex flexDir={"column"} w={"100%"}>
              <TextareaForm
                name="message"
                validations={[
                  {
                    handler: isRequired() && isNotEmptyString(),
                    message: "Message is invalid",
                  },
                ]}
              />
            </Flex>
            <ButtonGroup>
              <Button variant={"outline"} color={"white"}>
                Submit
              </Button>
              <Button>Reset</Button>
            </ButtonGroup>
          </Flex>
        }
      />
    </Flex>
  );
};

export default ContactForm;
