import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import { cartItemsAtom } from "../utils/cart.recoil";
import { useRecoilState } from "recoil";
import { useMemo } from "react";

const CartSummary = () => {
  const [cartItems] = useRecoilState(cartItemsAtom);

  const calculateSubtotal = useMemo(() => {
    return cartItems.reduce(
      (acc, curr) => acc + Number(curr.price) * Number(curr.amount),
      0
    );
  }, [cartItems]);

  const calculateTotalTickets = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + Number(curr.amount), 0);
  }, [cartItems]);

  return (
    <>
      <Flex
        h={"15vh"}
        alignItems={"center"}
        fontSize={"xl"}
        flexDir={"column"}
        gap={4}
      >
        <Divider />

        <Flex
          justifyContent={"space-between"}
          w={"100%"}
          h={"100%"}
          flexDir={"column"}
        >
          <Flex gap={8}>
            <Text w={"50%"}>Subtotal:</Text>
            <Text w={"50%"}>{calculateSubtotal}$</Text>
          </Flex>
          <Flex gap={8}>
            <Text w={"50%"}>Total tickets: </Text>
            <Text w={"50%"}>{calculateTotalTickets}</Text>
          </Flex>
          <Button
            variant={"solid"}
            color={"black"}
            mt={4}
            _hover={{ borderColor: "white" }}
          >
            Checkout
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default CartSummary;
