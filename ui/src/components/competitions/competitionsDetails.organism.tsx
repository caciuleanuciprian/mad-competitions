import {
  useToast,
  useMediaQuery,
  Flex,
  Button,
  Tabs,
  TabList,
  Tab,
  Divider,
  TabPanels,
  TabPanel,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import useAxios from "../../lib/axios/useAxios";
import { ICONS_SIZE_SMALL } from "../../lib/consts";
import { CartContext } from "../cart/core/cart.context";
import Footer from "../footer/footer.organism";
import { LinkIDS } from "../navigation/utils/consts";
import {
  currentActivePageAtom,
  isAdminAtom,
} from "../navigation/utils/navigation.recoil";
import ProductCarousel from "../ui/carousel";
import { FeaturedCompetitions } from "../ui/features-competitions";
import Header from "../ui/header";
import QuestionRadio from "../ui/radioCard";
import TicketsSlider from "../ui/slider";
import { displayToast } from "../ui/toast";
import { FAQs } from "./atoms/faqs";
import Price from "./atoms/price";
import ProgressBar from "./atoms/progress";
import { Rules } from "./atoms/rules";
import Timer from "./atoms/timer";
import { GetCompetitionById } from "./core/competitions.service";

const CompetitionDetails = () => {
  const cart = useContext(CartContext);
  const [, setIsActive] = useRecoilState(currentActivePageAtom);
  const toast = useToast();
  const { id } = useParams();
  const navigate = useNavigate();

  const [questionAnswer, setQuestionAnswer] = useState("");
  const [sliderValue, setSliderValue] = useState(20);

  const [isMobile] = useMediaQuery("(min-width: 0px)", { ssr: false });
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });
  const [isDesktop] = useMediaQuery("(min-width: 1200px)", { ssr: false });

  const [isAdmin] = useRecoilState(isAdminAtom);

  const { data, isLoading, error } = useAxios({
    fetchFn: GetCompetitionById,
    paramsOfFetch: { id: id },
    loadOnMount: true,
  });

  const showParticipants = () => {
    navigate(`/competitions/${id}/participants`);
  };

  useEffect(() => {
    setIsActive(LinkIDS.COMPETITIONS);
  }, []);

  const handleAddToCart = () => {
    if (!questionAnswer) {
      displayToast({
        id: "competitionsQuestion",
        type: "info",
        text: "You must answer the question before adding to cart.",
        toast,
      });
      return;
    }
    cart.addAmountToCart(
      data.id,
      data.title,
      sliderValue,
      data.pricePerTicket,
      data.images[0],
      questionAnswer
    );
    displayToast({
      id: "competitionsSuccess",
      type: "success",
      text: `Added tickets to cart.`,
      toast,
    });
  };

  return (
    <>
      {error && <div>Error: {`${error}`}</div>}
      <Header title={data?.title} />
      {data ? (
        <Flex
          flexDir={"column"}
          width={"100%"}
          maxWidth={
            isDesktop
              ? "1500px"
              : isTablet
              ? "1200px"
              : isMobile
              ? "768px"
              : "100%"
          }
          margin={"0 auto"}
          h={"100%"}
          minHeight={"54vh"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={8}
          my={8}
          px={4}
        >
          <Flex gap={8} w={"100%"} flexDir={isDesktop ? "row" : "column"}>
            <ProductCarousel images={data?.images} />
            <Flex flexDir={"column"} w={isDesktop ? "50%" : "100%"}>
              <Flex flexDir={"column"} color={"white"}>
                <Text fontSize={"3xl"} fontWeight={"bold"}>
                  {data.title}
                </Text>
                <Price color={"white"} price={data.pricePerTicket} />
                <Flex flexDir={"column"} my={2} gap={4}>
                  <Text fontSize={"xl"}>{data.question.question}</Text>
                  <QuestionRadio
                    options={[
                      data.question.answer1,
                      data.question.answer2,
                      data.question.answer3,
                    ]}
                    name={"question"}
                    onChange={(e) => e && setQuestionAnswer(e)}
                  />
                </Flex>
              </Flex>
              <Flex
                flexDir={"column"}
                gap={4}
                justifyContent={"center"}
                alignItems={"space-between"}
                mt={8}
              >
                <TicketsSlider
                  maxNumberOfTickets={data.maxNumberOfTickets}
                  currentTicketNumber={data.currentTicketNumber}
                  sliderValue={sliderValue}
                  setSliderValue={setSliderValue}
                />
                <Button
                  variant={"solid"}
                  background={"green.400"}
                  size={"lg"}
                  color={"white"}
                  textAlign={"left"}
                  textTransform={"uppercase"}
                  border={"2px solid white"}
                  h={"50px"}
                  _hover={{
                    background: "green.400",
                    outline: "0px",
                    border: "2px solid white",
                  }}
                  onClick={() => handleAddToCart()}
                >
                  <Text fontSize={"lg"}>
                    Buy Tickets{" "}
                    <FontAwesomeIcon
                      fontSize={ICONS_SIZE_SMALL}
                      icon={faChevronRight}
                    />
                  </Text>
                </Button>
                <Flex flexDir={"column"} fontWeight={"bold"} color={"white"}>
                  <Text fontSize={"lg"} opacity={0.5}>
                    Time until live draw
                  </Text>
                  <Timer
                    endTime={data.endTime}
                    background="gray.900"
                    color="white"
                  />
                </Flex>

                <Flex flexDir={"column"} fontWeight={"bold"} color={"white"}>
                  <Text fontSize={"lg"} opacity={0.5}>
                    Remaining tickets
                  </Text>
                  <ProgressBar
                    ticketsBought={data.currentTicketNumber}
                    totalTickets={data.maxNumberOfTickets}
                    height="40px"
                    px={0}
                  />
                </Flex>
                {isAdmin && (
                  <Flex>
                    <Button
                      variant={"solid"}
                      background={"green.400"}
                      size={"lg"}
                      color={"white"}
                      textAlign={"left"}
                      textTransform={"uppercase"}
                      border={"2px solid white"}
                      h={"50px"}
                      _hover={{
                        background: "green.400",
                        outline: "0px",
                        border: "2px solid white",
                      }}
                      onClick={showParticipants}
                    >
                      <Text fontSize={"lg"}>Show Participants</Text>
                    </Button>
                  </Flex>
                )}
              </Flex>
            </Flex>
          </Flex>
          <Flex w={"100%"} color={"white"}>
            <Tabs w={"100%"} variant={"solid-rounded"} colorScheme="green">
              <TabList gap={4}>
                <Tab color={"white"} _hover={{ borderColor: "green.600" }}>
                  Description
                </Tab>
                <Tab color={"white"} _hover={{ borderColor: "green.600" }}>
                  Rules
                </Tab>
                <Tab color={"white"} _hover={{ borderColor: "green.600" }}>
                  FAQs
                </Tab>
              </TabList>

              <Divider mt={4} />

              <TabPanels>
                <TabPanel px={0}>
                  <Text>{data.description}</Text>
                </TabPanel>
                <TabPanel px={0}>
                  <Rules maxTickets={50} endDate={data.endTime} />
                </TabPanel>
                <TabPanel px={0}>
                  <FAQs endDate={data.endTime} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      ) : isLoading ? (
        <Flex
          flexDir={"column"}
          width={"100%"}
          maxWidth={"1500px"}
          minHeight={"54vh"}
          margin={"0 auto"}
          h={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={8}
          my={8}
          px={4}
        >
          <Spinner color="white" />
        </Flex>
      ) : (
        <Flex
          flexDir={"column"}
          width={"100%"}
          maxWidth={"1500px"}
          minHeight={"54vh"}
          margin={"0 auto"}
          h={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={8}
          my={8}
          px={4}
        >
          <Text>{error}</Text>
        </Flex>
      )}
      <FeaturedCompetitions />
      <Footer />
    </>
  );
};

export default CompetitionDetails;
