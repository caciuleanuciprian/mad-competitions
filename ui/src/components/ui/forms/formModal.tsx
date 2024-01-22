import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { shouldSubmitAtom } from "../../winners/utils/winners.recoil";

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
      </ModalContent>
    </Modal>
  );
};
