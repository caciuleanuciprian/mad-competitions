import { Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentActivePageAtom } from "../navigation/utils/navigation.recoil";

const Logo = () => {
  const navigate = useNavigate();
  const [, setIsActive] = useRecoilState(currentActivePageAtom);

  return (
    <Flex
      w={24}
      h={24}
      cursor={"pointer"}
      onClick={() => {
        navigate("/");
        setIsActive(0);
      }}
    >
      <Image src={logo} alt="logo" />
    </Flex>
  );
};

export default Logo;
