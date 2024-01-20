import { Flex, IconButton, Icon, useDisclosure } from "@chakra-ui/react";
import { Menu, ShoppingCart } from "lucide-react";
import MobileNav from "./mobileNav";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentActivePageAtom } from "../utils/navigation.recoil";
import Logo from "../../ui/logo";
import { LinkIDS, Links } from "../utils/consts";

const NavigationMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [, setIsActive] = useRecoilState(currentActivePageAtom);

  return (
    <Flex
      h={"8vh"}
      w={"full"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={6}
      bg={"black"}
      minH={"80px"}
    >
      <Flex alignItems={"center"} gap={6}>
        <Flex
          w={24}
          h={24}
          cursor={"pointer"}
          onClick={() => {
            navigate(Links[LinkIDS.HOME].to);
            setIsActive(LinkIDS.HOME);
          }}
        >
          <Logo />
        </Flex>
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
