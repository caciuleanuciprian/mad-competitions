import { IconButton, Icon } from "@chakra-ui/react";

interface NavIconProps {
  ariaLabel: string;
  onClick: () => void;
  icon: any;
}

export const NavIcon = ({ ariaLabel, onClick, icon }: NavIconProps) => {
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
    >
      <Icon color={"white"} w={6} h={6} as={icon} />
    </IconButton>
  );
};
