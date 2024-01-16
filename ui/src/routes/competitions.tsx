import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { LinkIDS } from "../components/navigation/utils/consts";
import { currentActivePageAtom } from "../components/navigation/utils/navigation.recoil";
import Page from "../components/ui/page";

const CompetitionsPage = () => {
  const [, setIsActive] = useRecoilState(currentActivePageAtom);

  useEffect(() => {
    setIsActive(LinkIDS.COMPETITIONS);
  }, []);
  return <Page>Competitions</Page>;
};

export default CompetitionsPage;
