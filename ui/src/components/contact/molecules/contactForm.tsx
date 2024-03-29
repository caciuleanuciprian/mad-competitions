import { Formiz, useForm } from "@formiz/core";
import { isEmail, isNotEmptyString, isRequired } from "@formiz/validations";
import InputField from "../../ui/forms/inputField";
import TextareaForm from "../../ui/forms/textareaForm";
import { Button, ButtonGroup, Flex, useToast } from "@chakra-ui/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE_SMALL } from "../../../lib/consts";
import { useSubmit } from "@formspree/react";
import { displayToast } from "../../ui/toast";

interface ContactFormProps {
  order: number;
}

const ContactForm = ({ order }: ContactFormProps) => {
  const toast = useToast();
  const submit = useSubmit("mvoeqdgz", {
    onError: (_e) =>
      displayToast({ type: "error", text: "Message failed to send", toast }),
    onSuccess: (_e) =>
      displayToast({
        type: "success",
        text: "Message sent successfully",
        toast,
      }),
  });

  const form = useForm({ onSubmit: submit });

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
                type="text"
                leftEl={
                  <FontAwesomeIcon fontSize={ICONS_SIZE_SMALL} icon={faUser} />
                }
                placeholder={"Name"}
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
                type="email"
                leftEl={
                  <FontAwesomeIcon
                    fontSize={ICONS_SIZE_SMALL}
                    icon={faEnvelope}
                  />
                }
                placeholder={"Email"}
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
                type="text"
                leftEl={
                  <FontAwesomeIcon
                    fontSize={ICONS_SIZE_SMALL}
                    icon={faLocationDot}
                  />
                }
                placeholder={"Address"}
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
              <Button
                variant={"outline"}
                color={"white"}
                _hover={{ color: "black", bg: "white", borderColor: "white" }}
                onClick={() => {
                  form.submit();
                  form.reset();
                }}
              >
                Submit
              </Button>
              <Button
                variant={"solid"}
                _hover={{ borderColor: "white" }}
                onClick={() => form.reset()}
              >
                Clear
              </Button>
            </ButtonGroup>
          </Flex>
        }
      />
    </Flex>
  );
};

export default ContactForm;
