import {
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
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
import { useEffect, useState } from "react";
import { ICONS_SIZE } from "../../../lib/consts";

interface AddCompetitionFormProps {
  onClose: () => void;
}

enum Tags {
  CAR = "Car",
  TECH = "Tech",
  CASH = "Cash",
  OTHER = "Other",
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

  const [checkedItems, setCheckedItems] = useState(["", "", "", ""]);

  console.log(checkedItems);

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
      tags: checkedItems.filter((item) => item !== ""),
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
      tags: checkedItems.filter((item) => item !== ""),
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
          {/* Should be redesigned */}
          <CheckboxGroup colorScheme="green">
            <Stack direction="row" spacing={4}>
              <Checkbox
                isChecked={checkedItems[0] !== ""}
                value={Tags.CAR}
                onChange={(e) =>
                  e.target.checked
                    ? setCheckedItems([
                        e.target.value,
                        checkedItems[1],
                        checkedItems[2],
                        checkedItems[3],
                      ])
                    : setCheckedItems([
                        "",
                        checkedItems[1],
                        checkedItems[2],
                        checkedItems[3],
                      ])
                }
              >
                Car
              </Checkbox>
              <Checkbox
                isChecked={checkedItems[1] !== ""}
                value={Tags.TECH}
                onChange={(e) =>
                  e.target.checked
                    ? setCheckedItems([
                        checkedItems[0],
                        e.target.value,
                        checkedItems[2],
                        checkedItems[3],
                      ])
                    : setCheckedItems([
                        checkedItems[0],
                        "",
                        checkedItems[2],
                        checkedItems[3],
                      ])
                }
              >
                Tech
              </Checkbox>
              <Checkbox
                isChecked={checkedItems[2] !== ""}
                value={Tags.CASH}
                onChange={(e) =>
                  e.target.checked
                    ? setCheckedItems([
                        checkedItems[0],
                        checkedItems[1],
                        e.target.value,
                        checkedItems[3],
                      ])
                    : setCheckedItems([
                        checkedItems[0],
                        checkedItems[1],
                        "",
                        checkedItems[3],
                      ])
                }
              >
                Cash
              </Checkbox>
              <Checkbox
                isChecked={checkedItems[3] !== ""}
                value={Tags.OTHER}
                onChange={(e) =>
                  e.target.checked
                    ? setCheckedItems([
                        checkedItems[0],
                        checkedItems[1],
                        checkedItems[2],
                        e.target.value,
                      ])
                    : setCheckedItems([
                        checkedItems[0],
                        checkedItems[1],
                        checkedItems[2],
                        "",
                      ])
                }
              >
                Other
              </Checkbox>
            </Stack>
          </CheckboxGroup>
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
