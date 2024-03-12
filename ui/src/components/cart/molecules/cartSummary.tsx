import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../core/cart.context";

const CartSummary = () => {
  const cart = useContext(CartContext);
  const [totalCost, setTotalCost] = useState<any>(0);
  const [totalTickets, setTotalTickets] = useState<any>(0);

  useEffect(() => {
    setTotalCost(cart.getTotalCost());
    setTotalTickets(cart.getTotalTickets());
  }, [cart]);

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
            {/* @ts-ignore */}
            <Text w={"50%"}>{`${totalCost.toFixed(2)}`}$</Text>
          </Flex>
          <Flex gap={8}>
            <Text w={"50%"}>Total tickets: </Text>
            <Text w={"50%"}>{`${totalTickets}`}</Text>
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
