import { Flex, IconButton, Icon, useDisclosure } from "@chakra-ui/react";
import { Menu, ShoppingCart } from "lucide-react";
import Logo from "../../ui/logo";
import MobileNav from "./mobileNav";

const NavigationMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      h={"8vh"}
      w={"full"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={6}
      bg={"black"}
    >
      <Flex alignItems={"center"} gap={6}>
        <Logo />
      </Flex>

      <MobileNav isOpen={isOpen} onClose={onClose} />

      <Flex justifyContent={"flex-end"} gap={4}>
        <IconButton
          aria-label="Open Menu"
          colorScheme="blackAlpha"
          outline={"none"}
          borderRadius={"50%"}
          w={16}
          h={16}
          _hover={{ borderColor: "green.400" }}
          onClick={onOpen}
        >
          <Icon color={"white"} w={6} h={6} as={Menu} />
        </IconButton>

        <IconButton
          aria-label="Cart"
          colorScheme="blackAlpha"
          outline={"none"}
          borderRadius={"50%"}
          w={16}
          h={16}
          _hover={{ borderColor: "green.400" }}
        >
          <Icon color={"white"} w={6} h={6} as={ShoppingCart} />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default NavigationMobile;
