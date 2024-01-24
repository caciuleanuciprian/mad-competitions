import WinnersCard from "./molecules/winnersCard";
import { useRecoilState } from "recoil";
import { isAdminAtom } from "../navigation/utils/navigation.recoil";
import CardContainer from "../ui/card/cardContainer";
import AddWinnerForm from "./molecules/addWinnerForm";
import AddCard from "../ui/card/addCard";
import { useDisclosure } from "@chakra-ui/react";

const Winners = () => {
  const [isAdmin] = useRecoilState(isAdminAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <CardContainer>
      {isAdmin && (
        <AddCard
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          form={<AddWinnerForm onClose={onClose} />}
          title={"Add Winner"}
        />
      )}
      <WinnersCard />
      <WinnersCard />
      <WinnersCard />
      <WinnersCard />
      <WinnersCard />
    </CardContainer>
  );
};

export default Winners;
