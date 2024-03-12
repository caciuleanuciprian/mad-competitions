import { Box, Button, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE_SMALL } from "../../../lib/consts";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  data: any;
  isLoading: boolean;
}

export const Hero = ({ data, isLoading }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <>
      {isLoading && <Spinner color="white" />}
      {data && !isLoading && (
        <>
          <Image
            src={data?.images[0]}
            w={"100%"}
            h={"100%"}
            objectFit={"cover"}
          />
          <Box
            position={"absolute"}
            w={"100%"}
            h={"66%"}
            bg={
              "linear-gradient(360deg, rgba(0,0,0,1) 33%, rgba(255,255,255,0) 100%);"
            }
            opacity={0.5}
            bottom={0}
          />
          <Flex
            position={"absolute"}
            color={"white"}
            fontSize={"6xl"}
            bottom={"5vh"}
            left={"7%"}
            w={"85%"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            flexDir={"column"}
            gap={4}
          >
            <Text textTransform={"uppercase"}>{data?.title}</Text>
            <Button
              variant={"solid"}
              background={"green.400"}
              size={"lg"}
              color={"white"}
              textAlign={"left"}
              borderRadius={"md"}
              textTransform={"uppercase"}
              border={"2px solid white"}
              _hover={{
                background: "green.400",
                outline: "0px",
                border: "2px solid white",
              }}
              onClick={() => navigate(`/competitions/${data?.id}`)}
            >
              <Text fontSize={"lg"}>
                Enter Now{" "}
                <FontAwesomeIcon
                  fontSize={ICONS_SIZE_SMALL}
                  icon={faChevronRight}
                />
              </Text>
            </Button>
          </Flex>
        </>
      )}
    </>
  );
};
