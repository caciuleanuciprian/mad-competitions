import {
  Button,
  ButtonGroup,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CARD_WIDTH } from "../utils/consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import AddCompetitionForm from "./addCompetitionForm";

const AddCompetition = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      bg={"gray.900"}
      h={"750px"}
      flexDir={"column"}
      borderRadius={"md"}
      boxShadow={"5px 5px 15px 0px rgba(0,0,0,0.5)"}
      transition={"all 0.2s ease-in-out"}
      w={`${CARD_WIDTH}`}
      _hover={{
        cursor: "pointer",
        color: "green.400",
      }}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
      color={"white"}
      fontSize={"4xl"}
      onClick={onOpen}
    >
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"gray.900"} color={"white"} maxW={"md"}>
          <ModalHeader>Add Competition Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddCompetitionForm />
          </ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button
                variant={"outline"}
                color={"white"}
                _hover={{ color: "black", bg: "white", borderColor: "white" }}
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
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Text>Add Competition</Text>
      <FontAwesomeIcon icon={faCirclePlus} />
    </Flex>
  );
};

export default AddCompetition;
