import {
  Flex,
  Text,
  Image,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  IconButton,
} from "@chakra-ui/react";
import { CartItemProps } from "../utils/types";
import { useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE_SMALL } from "../../../lib/consts";
import { useRecoilState } from "recoil";
import { cartItemsAtom } from "../utils/cart.recoil";

const CartItem = ({ title, amount, price, img, id }: CartItemProps) => {
  const [itemAmount, setItemAmount] = useState<number>(amount);
  const [cartItems, setCartItems] = useRecoilState(cartItemsAtom);

  const handleChange = (e: any) => {
    setItemAmount(e);
  };

  const updateCartItems = () => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: itemAmount,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleRemoveItemFromArray = () => {
    const filteredItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredItems);
  };

  useEffect(() => {
    updateCartItems();
    if (itemAmount === 0) {
      handleRemoveItemFromArray();
    }
  }, [itemAmount]);

  return (
    <Flex
      w={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      id={id}
    >
      <Flex>
        <Image borderRadius={"lg"} w={"48"} h={"32"} src={img} alt={title} />
      </Flex>
      <Flex
        w={"100%"}
        h={"100%"}
        p={4}
        flexDir={"column"}
        justifyContent={"space-between"}
      >
        <Flex justifyContent={"space-between"}>
          <Text>{title}</Text>
          <IconButton
            outline={"none"}
            _hover={{ borderColor: "transparent" }}
            onClick={handleRemoveItemFromArray}
            justifyItems={"center"}
            alignItems={"center"}
            aria-label={"Remove Item"}
            variant={"ghost"}
          >
            <FontAwesomeIcon
              color={"white"}
              fontSize={ICONS_SIZE_SMALL}
              icon={faTrash}
            />
          </IconButton>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Flex w={"80px"} mr={2}>
              <NumberInput
                defaultValue={Number(itemAmount)}
                onChange={(e) => handleChange(e)}
                min={1}
                max={999}
                step={1}
              >
                <NumberInputField readOnly />
                <NumberInputStepper>
                  <NumberIncrementStepper bg={"white"} />
                  <NumberDecrementStepper bg={"white"} />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
            <Text>x {price}$</Text>
          </Flex>
          <Text>{price * itemAmount}$</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;
