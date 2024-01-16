import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { LinkIDS } from "../components/navigation/utils/consts";
import { currentActivePageAtom } from "../components/navigation/utils/navigation.recoil";
import Page from "../components/ui/page";

const WinnersPage = () => {
  const [, setIsActive] = useRecoilState(currentActivePageAtom);

  useEffect(() => {
    setIsActive(LinkIDS.WINNERS);
  }, []);
  return <Page>Winners</Page>;
};

export default WinnersPage;
