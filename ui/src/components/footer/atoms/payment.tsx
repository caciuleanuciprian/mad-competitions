import { Flex, Text } from "@chakra-ui/react";
import {
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faGooglePay,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE } from "../../../lib/consts";

const Payment = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
      <Text fontSize={"lg"}>Payment</Text>
      <FontAwesomeIcon fontSize={ICONS_SIZE} icon={faCcVisa} />
      <FontAwesomeIcon fontSize={ICONS_SIZE} icon={faCcMastercard} />
      <FontAwesomeIcon fontSize={ICONS_SIZE} icon={faCcPaypal} />
      <FontAwesomeIcon fontSize={ICONS_SIZE} icon={faCcApplePay} />
      <FontAwesomeIcon fontSize={ICONS_SIZE} icon={faGooglePay} />
    </Flex>
  );
};

export default Payment;
