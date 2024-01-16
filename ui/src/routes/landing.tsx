import { useEffect } from "react";
import Page from "../components/ui/page";
import { useRecoilState } from "recoil";
import { currentActivePageAtom } from "../components/navigation/utils/navigation.recoil";
import { LinkIDS } from "../components/navigation/utils/consts";
import Header from "../components/ui/header";
import Competitions from "../components/competitions/competitions.organism";

const LandingPage = () => {
  const [, setIsActive] = useRecoilState(currentActivePageAtom);

  useEffect(() => {
    setIsActive(LinkIDS.HOME);
  }, []);

  return (
    <Page>
      <Header />
      <Competitions />
    </Page>
  );
};

export default LandingPage;
