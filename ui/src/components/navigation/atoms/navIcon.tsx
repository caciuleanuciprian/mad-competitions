import { IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE } from "../../../lib/consts";

interface NavIconProps {
  ariaLabel: string;
  onClick: () => void;
  icon: any;
}

const NavIcon = ({ ariaLabel, onClick, icon }: NavIconProps) => {
  return (
    <IconButton
      aria-label={ariaLabel}
      colorScheme="blackAlpha"
      outline={"none"}
      borderRadius={"50%"}
      w={16}
      h={16}
      _hover={{ borderColor: "green.400" }}
      onClick={onClick}
      justifyItems={"center"}
      alignItems={"center"}
    >
      <FontAwesomeIcon color={"white"} fontSize={ICONS_SIZE} icon={icon} />
    </IconButton>
  );
};

export default NavIcon;
