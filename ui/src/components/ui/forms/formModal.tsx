import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  form: React.ReactNode;
  title: string;
}

export const FormModal = ({
  isOpen,
  onClose,
  form,
  title,
}: ModalComponentProps) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"gray.900"} color={"white"} maxW={"md"}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{form}</ModalBody>

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
  );
};
