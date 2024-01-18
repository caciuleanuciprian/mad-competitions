import { Flex, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
      <Text fontSize={"2xl"}>Follow Us</Text>
      <a href={"https://www.facebook.com/"} target={"_blank"}>
        <FontAwesomeIcon fontSize={28} icon={faFacebook} cursor={"pointer"} />
      </a>
      <a href={"https://www.instagram.com/"} target={"_blank"}>
        <FontAwesomeIcon fontSize={28} icon={faInstagram} cursor={"pointer"} />
      </a>
      <a href={"https://www.twitter.com/"} target={"_blank"}>
        <FontAwesomeIcon fontSize={28} icon={faTwitter} cursor={"pointer"} />
      </a>
    </Flex>
  );
};

export default Social;
