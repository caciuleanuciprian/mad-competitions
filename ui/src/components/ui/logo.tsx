import { Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";

interface LogoWithoutLinkProps {
  order?: number;
  width?: number;
  height?: number;
}

const Logo = ({ order, width, height }: LogoWithoutLinkProps) => {
  return <Image order={order} w={width} h={height} src={logo} alt="logo" />;
};

export default Logo;
