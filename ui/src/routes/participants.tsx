import { Flex, Text, useToast } from "@chakra-ui/react";
import Footer from "../components/footer/footer.organism";
import Header from "../components/ui/header";
import Page from "../components/ui/page";
import { useParams } from "react-router-dom";
import useAxios from "../lib/axios/useAxios";
import { GetParticipants } from "../components/competitions/core/competitions.service";
import { useEffect } from "react";
import { displayToast } from "../components/ui/toast";

export const ParticipantsPage = () => {
  const toast = useToast();
  const { id } = useParams();
  const { data, error } = useAxios({
    fetchFn: GetParticipants,
    paramsOfFetch: { id: id },
    loadOnMount: true,
  });

  useEffect(() => {
    if (error) {
      displayToast({ type: "error", text: "Something went wrong.", toast });
    }
  }, [error]);
  return (
    <Page>
      <Header title="Privacy Policy" />

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={4}
        color={"white"}
        my={8}
      >
        {data?.map((participant: any, idx: number) =>
          participant.tickets.map((ticket: any, index: number) => (
            <Flex
              key={`${participant}-${idx}-${index}`}
              w={"40%"}
              bg={"gray.700"}
              p={4}
            >
              <Text
                key={`${participant.id}-${ticket.id}-${idx}-${index}`}
              >{`${ticket} - ${participant.name}`}</Text>
            </Flex>
          ))
        )}
      </Flex>
      <Footer />
    </Page>
  );
};
