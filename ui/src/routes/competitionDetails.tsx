import { useRecoilState } from "recoil";
import { currentActivePageAtom } from "../components/navigation/utils/navigation.recoil";
import { useEffect, useState } from "react";
import { LinkIDS } from "../components/navigation/utils/consts";
import Page from "../components/ui/page";
import Header from "../components/ui/header";
import Footer from "../components/footer/footer.organism";
import "@splidejs/react-splide/css";
import ProductCarousel from "../components/ui/carousel";
import { useAxios } from "../lib/axios/useAxios";
import {
  Button,
  Divider,
  Flex,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import TicketsSlider from "../components/ui/slider";
import { filesToUploadAtom } from "../components/competitions/utils/competitions.recoil";
import Price from "../components/competitions/atoms/price";
import Timer from "../components/competitions/atoms/timer";
import ProgressBar from "../components/competitions/atoms/progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE_SMALL } from "../lib/consts";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import QuestionRadio from "../components/ui/radioCard";

const CompetitionDetails = () => {
  const [, setIsActive] = useRecoilState(currentActivePageAtom);
  const title = "";
  const images: File[] = [];

  const [filesToUpload, setFilesToUpload] = useRecoilState(filesToUploadAtom);

  const [value, setValue] = useState("");

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery("(max-width: 1200px)");

  const params = {
    method: "GET",
    url: "/posts",
    headers: { accept: "*/*" },
    data: {
      userId: 1,
      id: 19392,
      title: "title",
      body: "Sample text",
    },
  };

  const { response, loading, error } = useAxios(params);

  useEffect(() => {
    setIsActive(LinkIDS.COMPETITIONS);
  }, []);

  return (
    <Page>
      {loading && <Spinner />}
      {error && <div>Error: {`${error}`}</div>}
      <Header title={title} />
      <Flex
        flexDir={"column"}
        width={"100%"}
        maxWidth={"1500px"}
        margin={"0 auto"}
        h={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={8}
        my={8}
        px={4}
      >
        <Flex
          gap={8}
          w={"100%"}
          flexDir={isTablet || isMobile ? "column" : "row"}
        >
          <ProductCarousel images={filesToUpload || []} />
          <Flex flexDir={"column"} w={isTablet || isMobile ? "100%" : "50%"}>
            <Flex flexDir={"column"} color={"white"}>
              <Price color={"white"} price={2.99} />
              <Flex flexDir={"column"} my={2} gap={4}>
                <Text fontSize={"2xl"}>
                  How many apples are in Ana's basket?
                </Text>
                <QuestionRadio
                  options={["First", "Second", "Third"]}
                  name={"question"}
                  onChange={(e) => e && setValue(e)}
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
              {/* Should place max available tickets based on remaining tickets */}
              <TicketsSlider />
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
              >
                <Text fontSize={"lg"}>
                  Buy Tickets{" "}
                  <FontAwesomeIcon
                    fontSize={ICONS_SIZE_SMALL}
                    icon={faChevronRight}
                  />
                </Text>
              </Button>
              <Timer background="gray.900" color="white" />
              <Flex flexDir={"column"} fontWeight={"bold"} color={"white"}>
                <Text fontSize={"lg"}>Remaining tickets</Text>
                <ProgressBar
                  ticketsBought={2000}
                  totalTickets={5995}
                  height="30px"
                  px={0}
                />
              </Flex>
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
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente ipsa a, accusamus temporibus illo maiores perferendis
                  mollitia quod repellat totam natus similique ut fugiat aliquam
                  ipsum dolorum distinctio neque ipsam eos molestias sunt sit.
                  Ducimus numquam minima atque consequatur accusamus et voluptas
                  ab facere ipsa expedita mollitia dolore est cumque, ad, omnis
                  ipsam non soluta assumenda autem quis incidunt! Assumenda
                  corporis ea consequuntur nihil eligendi nostrum praesentium,
                  error maxime modi rerum ratione placeat consectetur vero
                  laboriosam recusandae saepe fugiat doloribus perferendis,
                  officiis atque pariatur iure, voluptates eveniet odio! Alias
                  aut ea deleniti aliquid necessitatibus aliquam, non quisquam
                  aspernatur quaerat magni.
                </Text>
              </TabPanel>
              <TabPanel px={0}>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente ipsa a, accusamus temporibus illo maiores perferendis
                  mollitia quod repellat totam natus similique ut fugiat aliquam
                  ipsum dolorum distinctio neque ipsam eos molestias sunt sit.
                  Ducimus numquam minima atque consequatur accusamus et voluptas
                  ab facere ipsa expedita mollitia dolore est cumque, ad, omnis
                  ipsam non soluta assumenda autem quis incidunt! Assumenda
                  corporis ea consequuntur nihil eligendi nostrum praesentium,
                  error maxime modi rerum ratione placeat consectetur vero
                  laboriosam recusandae saepe fugiat doloribus perferendis,
                  officiis atque pariatur iure, voluptates eveniet odio! Alias
                  aut ea deleniti aliquid necessitatibus aliquam, non quisquam
                  aspernatur quaerat magni.
                </Text>
              </TabPanel>
              <TabPanel px={0}>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente ipsa a, accusamus temporibus illo maiores perferendis
                  mollitia quod repellat totam natus similique ut fugiat aliquam
                  ipsum dolorum distinctio neque ipsam eos molestias sunt sit.
                  Ducimus numquam minima atque consequatur accusamus et voluptas
                  ab facere ipsa expedita mollitia dolore est cumque, ad, omnis
                  ipsam non soluta assumenda autem quis incidunt! Assumenda
                  corporis ea consequuntur nihil eligendi nostrum praesentium,
                  error maxime modi rerum ratione placeat consectetur vero
                  laboriosam recusandae saepe fugiat doloribus perferendis,
                  officiis atque pariatur iure, voluptates eveniet odio! Alias
                  aut ea deleniti aliquid necessitatibus aliquam, non quisquam
                  aspernatur quaerat magni.
                </Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
      <Footer />
    </Page>
  );
};

export default CompetitionDetails;
