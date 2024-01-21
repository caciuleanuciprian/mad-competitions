import { Checkbox, Flex, FormLabel, Stack } from "@chakra-ui/react";
import { Formiz, useForm } from "@formiz/core";
import { InputField } from "../../ui/forms/inputField";
import { TextareaForm } from "../../ui/forms/textareaForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const AddCompetitionForm = () => {
  const addCompetitionForm = useForm();
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
          rightEl={<FontAwesomeIcon icon={faCalendar} />}
        />
        <InputField
          name="endDate"
          type="datetime-local"
          label="End Date"
          rightEl={<FontAwesomeIcon icon={faCalendar} />}
        />

        <Flex flexDir={"column"}>
          <FormLabel
            fontSize={"sm"}
            color={"white"}
            textTransform={"capitalize"}
          >
            Image Showcase
          </FormLabel>
          <input name="imageShowcase" type="file" />
        </Flex>

        <Flex flexDir={"column"}>
          <FormLabel
            fontSize={"sm"}
            color={"white"}
            textTransform={"capitalize"}
          >
            Images Carousel
          </FormLabel>
          <input type="file" name="imagesCarousel" multiple />
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
        </Flex>
      </Formiz>
    </Flex>
  );
};

export default AddCompetitionForm;
