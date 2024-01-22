import { Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";

interface LogoWithoutLinkProps {
  order?: number;
  width?: number;
  height?: number;
  onClick?: () => void;
}

const Logo = ({ order, width, height, onClick }: LogoWithoutLinkProps) => {
  return (
    <Image
      onClick={onClick ? onClick : () => {}}
      cursor={onClick ? "pointer" : "default"}
      order={order}
      w={width}
      h={height}
      src={logo}
      alt="logo"
    />
  );
};

export default Logo;
