import { Flex, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { ICONS_SIZE } from "../../../lib/consts";

const Social = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
      <Text fontSize={"lg"}>Follow Us</Text>
      <a href={"https://www.facebook.com/"} target={"_blank"}>
        <FontAwesomeIcon
          fontSize={ICONS_SIZE}
          icon={faFacebook}
          cursor={"pointer"}
        />
      </a>
      <a href={"https://www.instagram.com/"} target={"_blank"}>
        <FontAwesomeIcon
          fontSize={ICONS_SIZE}
          icon={faInstagram}
          cursor={"pointer"}
        />
      </a>
      <a href={"https://www.twitter.com/"} target={"_blank"}>
        <FontAwesomeIcon
          fontSize={ICONS_SIZE}
          icon={faTwitter}
          cursor={"pointer"}
        />
      </a>
    </Flex>
  );
};

export default Social;
