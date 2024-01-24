import {
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import { Formiz, useForm } from "@formiz/core";
import InputField from "../../ui/forms/inputField";
import TextareaForm from "../../ui/forms/textareaForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { filesToUploadAtom } from "../utils/competitions.recoil";
import axios from "axios";
import MultipleFilesUpload from "../../ui/forms/multipleFilesUpload";
import FileUpload from "../../ui/forms/fileUpload";
import { fileToUploadAtom } from "../../winners/utils/winners.recoil";
import { useEffect } from "react";
import { ICONS_SIZE } from "../../../lib/consts";

interface AddCompetitionFormProps {
  onClose: () => void;
}

const AddCompetitionForm = ({ onClose }: AddCompetitionFormProps) => {
  const addCompetitionForm = useForm({
    onSubmit: async (values) => {
      console.log(values);
      await handleSubmit(values);
      resetForm();
    },
  });

  const [filesToUpload, setFilesToUpload] = useRecoilState(filesToUploadAtom);
  const [fileToUpload, setFileToUpload] = useRecoilState(fileToUploadAtom);

  const handleSubmit = async (values: any) => {
    console.log({
      title: values.title,
      description: values.description,
      maxTickets: values.maxTickets,
      ticketPrice: values.ticketPrice,
      startDate: values.startDate,
      endDate: values.endDate,
      imageShowcase: fileToUpload,
      imagesCarousel: filesToUpload,
      alternativePrize: values.alternativePrize,
      tags: values.tags,
    });
    await axios.post("/api/competitions", {
      title: values.title,
      description: values.description,
      maxTickets: values.maxTickets,
      ticketPrice: values.ticketPrice,
      startDate: values.startDate,
      endDate: values.endDate,
      imageShowcase: fileToUpload,
      imagesCarousel: filesToUpload,
      alternativePrize: values.alternativePrize,
      tags: values.tags,
    });
  };

  const resetForm = () => {
    addCompetitionForm.reset();
    setFilesToUpload(null);
    setFileToUpload(null);
  };

  useEffect(() => {
    setFilesToUpload(null);
    setFileToUpload(null);
  }, []);

  return (
    <Flex flexDir={"column"} gap={4}>
      <Formiz connect={addCompetitionForm}>
        <InputField name="title" type="text" label="Competition Title" />
        <TextareaForm
          name="description"
          type="text"
          label="Competition Description"
        />

        <Flex gap={4}>
          <InputField name="maxTickets" type="number" label="Max Tickets" />
          <InputField name="ticketPrice" type="number" label="Ticket Price" />
        </Flex>

        <InputField
          name="startDate"
          type="datetime-local"
          label="Start Date"
          rightEl={<FontAwesomeIcon fontSize={ICONS_SIZE} icon={faCalendar} />}
        />
        <InputField
          name="endDate"
          type="datetime-local"
          label="End Date"
          rightEl={<FontAwesomeIcon fontSize={ICONS_SIZE} icon={faCalendar} />}
        />

        <Flex flexDir={"column"}>
          <FormLabel
            fontSize={"sm"}
            color={"white"}
            textTransform={"capitalize"}
          >
            Image Showcase
          </FormLabel>
          <FileUpload />
        </Flex>

        <Flex flexDir={"column"}>
          <FormLabel
            fontSize={"sm"}
            color={"white"}
            textTransform={"capitalize"}
          >
            Images Carousel
          </FormLabel>
          <MultipleFilesUpload />
        </Flex>

        <InputField
          name="alternativePrize"
          type="number"
          label="Alternative Prize"
        />

        <Flex flexDir={"column"}>
          <FormLabel
            fontSize={"sm"}
            color={"white"}
            textTransform={"capitalize"}
          >
            Tags
          </FormLabel>
          <Stack direction="row" spacing={4}>
            <Checkbox>Car</Checkbox>
            <Checkbox>Tech</Checkbox>
            <Checkbox>Cash</Checkbox>
            <Checkbox>Other</Checkbox>
          </Stack>
          <ButtonGroup py={4} justifyContent={"flex-end"}>
            <Button
              variant={"outline"}
              color={"white"}
              _hover={{ color: "black", bg: "white", borderColor: "white" }}
              onClick={() => addCompetitionForm.submit()}
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
      </Formiz>
    </Flex>
  );
};

export default AddCompetitionForm;
