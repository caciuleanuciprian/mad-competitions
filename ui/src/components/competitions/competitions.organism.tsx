import CompetitionsCard from "./molecules/competitionsCard";
import { useRecoilState } from "recoil";
import { isAdminAtom } from "../navigation/utils/navigation.recoil";
import CardContainer from "../ui/card/cardContainer";
import AddCard from "../ui/card/addCard";
import AddCompetitionForm from "./molecules/addCompetitionForm";
import { useDisclosure } from "@chakra-ui/react";

const Competitions = () => {
  const [isAdmin] = useRecoilState(isAdminAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <CardContainer>
      {isAdmin && (
        <AddCard
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          form={<AddCompetitionForm onClose={onClose} />}
          title={"Add Competition"}
        />
      )}
      <CompetitionsCard />
      <CompetitionsCard />
      <CompetitionsCard />
      <CompetitionsCard />
      <CompetitionsCard />
    </CardContainer>
  );
};

export default Competitions;
