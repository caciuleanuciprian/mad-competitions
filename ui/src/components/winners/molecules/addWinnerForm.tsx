import { Flex, FormLabel } from "@chakra-ui/react";
import { Formiz, useForm } from "@formiz/core";
import { InputField } from "../../ui/forms/inputField";

const AddWinnerForm = () => {
  const addWinnerForm = useForm();
  return (
    <Flex flexDir={"column"} gap={4}>
      <Formiz connect={addWinnerForm}>
        <InputField name="name" type="text" label="Winner Name" />

        <InputField name="competition" type="text" label="Won Competition" />
        <InputField name="ticketNumber" type="number" label="Ticket Number" />

        <Flex flexDir={"column"}>
          <FormLabel
            fontSize={"sm"}
            color={"white"}
            textTransform={"capitalize"}
          >
            Winner Picture
          </FormLabel>
          <input name="winnerPicture" type="file" />
        </Flex>
      </Formiz>
    </Flex>
  );
};

export default AddWinnerForm;
