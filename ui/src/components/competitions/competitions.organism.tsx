import CompetitionsCard from "./molecules/competitionsCard";
import { useRecoilState } from "recoil";
import {
  isAdminAtom,
  shouldRefetchAtom,
} from "../navigation/utils/navigation.recoil";
import CardContainer from "../ui/card/cardContainer";
import AddCard from "../ui/card/addCard";
import AddCompetitionForm from "./molecules/addCompetitionForm";
import {
  Flex,
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
  const [shouldRefetch, setShouldRefetch] = useRecoilState(shouldRefetchAtom);
  const [filterBy, setFilterBy] = useState(null);
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
      loadData();
    }
  }, [filterBy]);

  useEffect(() => {
    if (currentPage !== null) {
      loadData();
    }
  }, [currentPage]);

  useEffect(() => {
    if (shouldRefetch) {
      loadData();
      setShouldRefetch(false);
    }
  }, [shouldRefetch]);

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
        {!isLoading && data?.length === 0 && (
          <Flex color={"white"}>No competitions found.</Flex>
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
