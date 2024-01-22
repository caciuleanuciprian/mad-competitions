import CompetitionsCard from "./molecules/competitionsCard";
import { useRecoilState } from "recoil";
import { isAdminAtom } from "../navigation/utils/navigation.recoil";
import { CardContainer } from "../ui/card/cardContainer";
import AddCard from "../ui/card/addCard";
import AddCompetitionForm from "./molecules/addCompetitionForm";

const Competitions = () => {
  const [isAdmin] = useRecoilState(isAdminAtom);
  return (
    <CardContainer>
      {isAdmin && (
        <AddCard form={<AddCompetitionForm />} title={"Add Competition"} />
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
