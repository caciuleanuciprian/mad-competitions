import { Flex, Text } from "@chakra-ui/react";

interface PriceProps {
  price: number;
}

const Price = ({ price }: PriceProps) => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      display={"inline"}
      px={4}
      mt={2}
    >
      <Text fontSize={"3xl"} fontWeight={"bold"} display={"inline"}>
        {price}
      </Text>
      <Text fontSize={"sm"} display={"inline"} ml={1}>
        Per Entry
      </Text>
    </Flex>
  );
};

export default Price;
