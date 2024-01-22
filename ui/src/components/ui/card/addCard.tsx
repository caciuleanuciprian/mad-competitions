import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FormModal } from "../forms/formModal";
import { Card } from "./card";

interface AddCardProps {
  form: React.ReactNode;
  title: string;
}

const AddCard = ({ form, title }: AddCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Card bg={"gray.900"} onClick={onOpen} centered>
      <FormModal
        form={form}
        isOpen={isOpen}
        onClose={onClose}
        title={`${title} Form`}
      />
      <Flex
        fontSize={"4xl"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        color={"white"}
        gap={4}
      >
        <Text>{title}</Text>
        <FontAwesomeIcon icon={faCirclePlus} />
      </Flex>
    </Card>
  );
};

export default AddCard;
