import { Button, ButtonGroup, Flex, FormLabel } from "@chakra-ui/react";
import { Formiz, useForm } from "@formiz/core";
import InputField from "../../ui/forms/inputField";
import { useRecoilState } from "recoil";
import { fileToUploadAtom } from "../utils/winners.recoil";
import FileUpload from "../../ui/forms/fileUpload";
import axios from "axios";

interface AddWinnerFormProps {
  onClose: () => void;
}

const AddWinnerForm = ({ onClose }: AddWinnerFormProps) => {
  const addWinnerForm = useForm({
    onSubmit: async (values) => {
      console.log(values);
      await handleSubmit(values);
    },
  });

  const [fileToUpload, setFileToUpload] = useRecoilState(fileToUploadAtom);

  const handleSubmit = async (values: any) => {
    console.log({
      name: values.name,
      competition: values.competition,
      ticketNumber: values.ticketNumber,
      picture: fileToUpload,
    });
    await axios.post("/api/winners", {
      name: values.name,
      competition: values.competition,
      ticketNumber: values.ticketNumber,
      picture: fileToUpload,
    });
    setFileToUpload(null);
  };

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
          <FileUpload />
        </Flex>
      </Formiz>
      <ButtonGroup py={4} justifyContent={"flex-end"}>
        <Button
          variant={"outline"}
          color={"white"}
          _hover={{ color: "black", bg: "white", borderColor: "white" }}
          onClick={() => addWinnerForm.submit()}
        >
          Create
        </Button>
        <Button
          variant={"solid"}
          _hover={{ borderColor: "white" }}
          onClick={onClose}
        >
          Cancel
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default AddWinnerForm;
