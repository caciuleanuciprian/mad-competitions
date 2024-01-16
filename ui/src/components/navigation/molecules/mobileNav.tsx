import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Links } from "../utils/consts";
import { NavLinkProps } from "../utils/types";
import { useRecoilState } from "recoil";
import { currentActivePageAtom } from "../utils/navigation.recoil";
import MobileNavLink from "../atoms/mobileNavLink";

interface MobileNavProps {
  isOpen: boolean;
  onClose: (params?: any) => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [isActive, setIsActive] = useRecoilState(currentActivePageAtom);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent background={"gray.900"} borderColor={"green.400"} pt={8}>
        <DrawerCloseButton
          background={"black"}
          color={"white"}
          colorScheme="blackAlpha"
          p={4}
          _hover={{ borderColor: "green.400" }}
        />
        {Links.map((link: NavLinkProps, index: number) => (
          <MobileNavLink
            to={link.to}
            label={link.label}
            key={`${link.label}-${index}`}
            onClick={() => setIsActive(index)}
            isActive={isActive === index}
          />
        ))}
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
