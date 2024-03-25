import WinnersCard from "./molecules/winnersCard";
import { useRecoilState } from "recoil";
import { isAdminAtom } from "../navigation/utils/navigation.recoil";
import CardContainer from "../ui/card/cardContainer";
import AddWinnerForm from "./molecules/addWinnerForm";
import AddCard from "../ui/card/addCard";
import { Spinner, useDisclosure, useToast } from "@chakra-ui/react";
import useAxios from "../../lib/axios/useAxios";
import { GetWinners } from "./core/winners.service";
import { useEffect, useState } from "react";
import { displayToast } from "../ui/toast";
import { Pagination } from "../ui/pagination";

const Winners = () => {
  const toast = useToast();
  const [isAdmin] = useRecoilState(isAdminAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const { data, isLoading, error, loadData } = useAxios({
    fetchFn: GetWinners,
    paramsOfFetch: { page: currentPage || 0, size: 9 },
    loadOnMount: true,
  });

  useEffect(() => {
    if (data) {
      setTotalPages(data.totalPages);
    }
  }, [data]);

  useEffect(() => {
    if (currentPage !== null) {
      loadData();
    }
  }, [currentPage]);

  useEffect(() => {
    if (error) {
      displayToast({ type: "error", text: "Something went wrong.", toast });
    }
  }, [error]);

  return (
    <>
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
        {isLoading ? (
          <Spinner color="white" />
        ) : (
          data?.winners?.map((card: any, index: number) => (
            <WinnersCard
              key={`${card.id}-${index}`}
              id={card.id}
              competitionName={card.competitionName}
              image={card.image}
              name={card.name}
              ticketNumber={card.ticketNumber}
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

export default Winners;
