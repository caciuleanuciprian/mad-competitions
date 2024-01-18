import { Flex, Icon, IconButton } from "@chakra-ui/react";
import NavLink from "../atoms/navLink";
import { NavLinkProps } from "../utils/types";
import { ShoppingCart } from "lucide-react";
import Logo from "../../ui/logo";
import { useRecoilState } from "recoil";
import { currentActivePageAtom } from "../utils/navigation.recoil";
import { Links } from "../utils/consts";

const NavigationWeb = () => {
  const [isActive, setIsActive] = useRecoilState(currentActivePageAtom);

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

export default NavigationWeb;
