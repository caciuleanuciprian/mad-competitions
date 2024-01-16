import { useMediaQuery } from "@chakra-ui/react";
import NavigationMobile from "./molecules/navigationMobile";
import NavigationWeb from "./molecules/navigationWeb";

const Navigation = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)", { ssr: false });

  return <>{isMobile ? <NavigationMobile /> : <NavigationWeb />}</>;
};

export default Navigation;
