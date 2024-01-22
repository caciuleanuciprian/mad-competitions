import WinnersCard from "./molecules/winnersCard";
import { useRecoilState } from "recoil";
import { isAdminAtom } from "../navigation/utils/navigation.recoil";
import { CardContainer } from "../ui/card/cardContainer";
import AddWinnerForm from "./molecules/addWinnerForm";
import AddCard from "../ui/card/addCard";

const Winners = () => {
  const [isAdmin] = useRecoilState(isAdminAtom);

  return (
    <CardContainer>
      {isAdmin && <AddCard form={<AddWinnerForm />} title={"Add Winner"} />}
      <WinnersCard />
      <WinnersCard />
      <WinnersCard />
      <WinnersCard />
      <WinnersCard />
    </CardContainer>
  );
};

export default Winners;
