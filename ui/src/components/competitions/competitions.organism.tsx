import CompetitionsCard from "./molecules/competitionsCard";
import { useRecoilState } from "recoil";
import { isAdminAtom } from "../navigation/utils/navigation.recoil";
import CardContainer from "../ui/card/cardContainer";
import AddCard from "../ui/card/addCard";
import AddCompetitionForm from "./molecules/addCompetitionForm";
import {
  Spinner,
  useDisclosure,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PagesURL } from "../../routes/consts";
import { GetCompetitions } from "./core/competitions.service";
import useAxios from "../../lib/axios/useAxios";
import { useEffect, useState } from "react";
import { displayToast } from "../ui/toast";
import { Pagination } from "../ui/pagination";
import { Filters } from "../ui/filters";

const Competitions = () => {
  const toast = useToast();
  const [isAdmin] = useRecoilState(isAdminAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [filterBy, setFilterBy] = useState("");
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });

  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const { data, isLoading, error, loadData } = useAxios({
    fetchFn: GetCompetitions,
    paramsOfFetch: { page: currentPage || 0, size: 9, tag: filterBy },
    loadOnMount: true,
  });

  useEffect(() => {
    if (data) {
      setTotalPages(data.totalPages);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      displayToast({ type: "error", text: "Something went wrong.", toast });
    }
  }, [error]);

  useEffect(() => {
    if (filterBy !== null) {
      loadData({ page: 0, size: 9, tag: filterBy });
    }
  }, [filterBy]);

  useEffect(() => {
    if (currentPage !== null) {
      loadData();
    }
  }, [currentPage]);

  return (
    <>
      <CardContainer>
        <Filters setFilterBy={setFilterBy} marginRight={isTablet ? "8" : "0"} />

        {isAdmin && (
          <AddCard
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            form={<AddCompetitionForm onClose={onClose} />}
            title={"Add Competition"}
          />
        )}

        {isLoading ? (
          <Spinner color="white" />
        ) : (
          data?.map((card: any) => (
            <CompetitionsCard
              key={card.id}
              id={card.id}
              alternativePrize={card.alternativePrize}
              endTime={card.endTime}
              images={card.images}
              maxNumberOfTickets={card.maxNumberOfTickets}
              pricePerTicket={card.pricePerTicket}
              tag={card.tag}
              title={card.title}
              currentTicketNumber={card.currentTicketNumber}
              onClick={() => navigate(`${PagesURL.COMPETITIONS}/${card.id}`)}
            />
          ))
        )}
      </CardContainer>
      <Pagination
        currentPage={currentPage || 0}
        //@ts-ignore
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default Competitions;
