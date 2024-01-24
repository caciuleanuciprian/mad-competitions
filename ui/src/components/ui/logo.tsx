import { Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";

interface LogoWithoutLinkProps {
  order?: number;
  width?: number;
  height?: number;
  onClick?: () => void;
  marginRight?: number;
}

const Logo = ({
  order,
  width,
  height,
  onClick,
  marginRight,
}: LogoWithoutLinkProps) => {
  return (
    <Image
      onClick={onClick ? onClick : () => {}}
      cursor={onClick ? "pointer" : "default"}
      order={order}
      w={width}
      h={height}
      src={logo}
      alt="logo"
      mr={marginRight ? marginRight : ""}
    />
  );
};

export default Logo;
