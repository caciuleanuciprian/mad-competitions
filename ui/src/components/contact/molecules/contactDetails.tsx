import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE } from "../../../lib/consts";

interface ContactDetailsProps {
  order: number;
}
const ContactDetails = ({ order }: ContactDetailsProps) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)", { ssr: false });
  return (
    <Flex
      flexDir={"column"}
      color={"white"}
      alignItems={"center"}
      justifyContent={isMobile ? "center" : "flex-start"}
      order={order}
      p={4}
      gap={4}
      pt={isMobile ? 4 : 12}
      w={isMobile ? "100%" : "50%"}
      h={"100%"}
      minH={isMobile ? "20vh" : "55vh"}
      bg={"gray.700"}
      borderTopRightRadius={"md"}
      borderBottomRightRadius={isMobile ? "none" : "md"}
      borderTopLeftRadius={isMobile ? "md" : "none"}
    >
      <a href={"mailto:test@gmail.com"} target={"_blank"}>
        <Flex gap={2} alignItems={"center"}>
          <FontAwesomeIcon
            fontSize={ICONS_SIZE}
            icon={faEnvelope}
            cursor={"pointer"}
          />
          <Text fontSize={"xl"}>{"/mad.competitions"}</Text>
        </Flex>
      </a>
      <a href={"https://www.facebook.com/"} target={"_blank"}>
        <Flex gap={2} alignItems={"center"}>
          <FontAwesomeIcon
            fontSize={ICONS_SIZE}
            icon={faFacebook}
            cursor={"pointer"}
          />
          <Text fontSize={"xl"}>{"/mad.competitions"}</Text>
        </Flex>
      </a>
      <a href={"https://www.instagram.com/"} target={"_blank"}>
        <Flex gap={2} alignItems={"center"}>
          <FontAwesomeIcon
            fontSize={ICONS_SIZE}
            icon={faInstagram}
            cursor={"pointer"}
          />
          <Text fontSize={"xl"}>{"/mad.competitions"}</Text>
        </Flex>
      </a>
      <a href={"https://www.twitter.com/"} target={"_blank"}>
        <Flex gap={2} alignItems={"center"}>
          <FontAwesomeIcon
            fontSize={ICONS_SIZE}
            icon={faTwitter}
            cursor={"pointer"}
          />

          <Text fontSize={"xl"}>{"/mad.competitions"}</Text>
        </Flex>
      </a>
    </Flex>
  );
};

export default ContactDetails;
