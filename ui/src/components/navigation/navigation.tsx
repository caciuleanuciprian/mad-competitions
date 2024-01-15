import { Button, Flex, Icon } from "@chakra-ui/react";
import NavLink from "./navLink";
import { NavLinkProps } from "./types";
import { Menu, ShoppingCart } from "lucide-react";
import Logo from "../ui/logo";
import { useRecoilState } from "recoil";
import { currentActivePageAtom } from "./navigation.recoil";
import { Links } from "./consts";

const Navigation = () => {
  const [isActive, setIsActive] = useRecoilState(currentActivePageAtom);
  return (
    <Flex
      h={"10vh"}
      w={"100vw"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={6}
      bg={"gray.900"}
    >
      <Flex alignItems={"center"} gap={6}>
        <Logo />
        <Flex>
          {Links.map((link: NavLinkProps, index: number) => (
            <NavLink
              to={link.to}
              label={link.label}
              hasBorderRight={index < Links.length - 1}
              key={`${link.label}-${index}`}
              onClick={() => setIsActive(index)}
              isActive={isActive === index}
            />
          ))}
        </Flex>
      </Flex>

      <Flex justifyContent={"flex-end"} gap={4}>
        <Button
          colorScheme="blackAlpha"
          outline={"none"}
          borderRadius={"50%"}
          w={16}
          h={16}
          _hover={{ borderColor: "green.400" }}
        >
          <Icon color={"white"} w={6} h={6} as={Menu} />
        </Button>
        <Button
          colorScheme="blackAlpha"
          outline={"none"}
          borderRadius={"50%"}
          w={16}
          h={16}
          _hover={{ borderColor: "green.400" }}
        >
          <Icon color={"white"} w={6} h={6} as={ShoppingCart} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navigation;
