import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Text,
  Flex,
} from "@chakra-ui/react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import NavIcon from "../navigation/atoms/navIcon";
import { useRecoilState } from "recoil";
import { cartItemsAtom } from "./utils/cart.recoil";
import CartItem from "./molecules/cartItem";
import { CartItemProps } from "./utils/types";
import CartSummary from "./molecules/cartSummary";
import { useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setCartItems([
      {
        id: "1",
        title: "Item 1",
        amount: 12,
        price: 100,
        img: "https://via.placeholder.com/150",
      },
      {
        id: "2",
        title: "Item 2",
        amount: 24,
        price: 200,
        img: "https://via.placeholder.com/150",
      },
      {
        id: "3",
        title: "Item 3",
        amount: 31,
        price: 300,
        img: "https://via.placeholder.com/150",
      },
      {
        id: "4",
        title: "Item 3",
        amount: 34,
        price: 300,
        img: "https://via.placeholder.com/150",
      },
      {
        id: "5",
        title: "Item 3",
        amount: 3,
        price: 300,
        img: "https://via.placeholder.com/150",
      },
      {
        id: "6",
        title: "Item 3",
        amount: 3,
        price: 300,
        img: "https://via.placeholder.com/150",
      },
      {
        id: "7",
        title: "Item 3",
        amount: 3,
        price: 300,
        img: "https://via.placeholder.com/150",
      },
      {
        id: "8",
        title: "Item 3",
        amount: 3,
        price: 300,
        img: "https://via.placeholder.com/150",
      },
    ]);
  }, []);

  return (
    <>
      <NavIcon ariaLabel={"Open Cart"} onClick={onOpen} icon={faShoppingCart} />
      <Drawer
        blockScrollOnMount={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent
          color={"white"}
          background={"gray.900"}
          borderColor={"green.400"}
        >
          <DrawerCloseButton
            background={"black"}
            color={"white"}
            colorScheme="blackAlpha"
            p={4}
            _hover={{ borderColor: "green.400" }}
          />
          <DrawerHeader>Shopping Cart ({cartItems.length} items)</DrawerHeader>
          <DrawerBody
            display={"flex"}
            flexDir={"column"}
            justifyContent={"space-between"}
            gap={8}
            mb={8}
          >
            <Flex
              flexDir={"column"}
              gap={8}
              overflowY={cartItems.length > 0 ? "scroll" : "hidden"}
              width={"100%"}
              boxShadow={"inset 0px -5px 10px -5px rgba(0,0,0,0.5);"}
              pb={4}
            >
              {cartItems.length > 0 ? (
                cartItems.map((item: CartItemProps) => (
                  <CartItem key={item.id} {...item} />
                ))
              ) : (
                <Text fontSize={"lg"}>Cart is empty</Text>
              )}
            </Flex>
            <CartSummary />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
