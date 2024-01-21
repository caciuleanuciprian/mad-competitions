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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { CARD_WIDTH } from "../../competitions/utils/consts";
import AddWinnerForm from "./addWinnerForm";

const AddWinner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      bg={"gray.900"}
      h={"625px"}
      flexDir={"column"}
      borderRadius={"md"}
      boxShadow={"5px 5px 15px 0px rgba(0,0,0,0.5)"}
      transition={"all 0.2s ease-in-out"}
      w={`${CARD_WIDTH}`}
      color={"white"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
      fontSize={"4xl"}
      onClick={onOpen}
    >
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"gray.900"} color={"white"} maxW={"md"}>
          <ModalHeader>Add Winner Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddWinnerForm />
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
      <Text>Add Winner</Text>
      <FontAwesomeIcon icon={faCirclePlus} />
    </Flex>
  );
};

export default AddWinner;
