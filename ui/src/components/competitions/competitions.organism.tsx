import CompetitionsCard from "./molecules/competitionsCard";
import { useRecoilState } from "recoil";
import { isAdminAtom } from "../navigation/utils/navigation.recoil";
import CardContainer from "../ui/card/cardContainer";
import AddCard from "../ui/card/addCard";
import AddCompetitionForm from "./molecules/addCompetitionForm";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PagesURL } from "../../routes/consts";
import { GetCompetitions } from "./core/competitions.service";
import useAxios from "../../lib/axios/useAxios";

const Competitions = () => {
  const [isAdmin] = useRecoilState(isAdminAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const COMPETITIONS_CARDS = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];

  const { data, isLoading, error } = useAxios({
    fetchFn: GetCompetitions,
    paramsOfFetch: {},
    loadOnMount: true,
  });

  console.log(data);

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
      {COMPETITIONS_CARDS.map((card) => (
        <CompetitionsCard
          key={card.id}
          onClick={() => navigate(`${PagesURL.COMPETITIONS}/${card.id}`)}
        />
      ))}
    </CardContainer>
  );
};

export default Competitions;
