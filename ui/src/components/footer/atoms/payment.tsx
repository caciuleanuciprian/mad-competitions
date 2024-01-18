import { Flex, Text } from "@chakra-ui/react";
import {
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faGooglePay,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Payment = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
      <Text fontSize={"2xl"}>Payment</Text>
      <FontAwesomeIcon fontSize={28} icon={faCcVisa} />
      <FontAwesomeIcon fontSize={28} icon={faCcMastercard} />
      <FontAwesomeIcon fontSize={28} icon={faCcPaypal} />
      <FontAwesomeIcon fontSize={28} icon={faCcApplePay} />
      <FontAwesomeIcon fontSize={28} icon={faGooglePay} />
    </Flex>
  );
};

export default Payment;
