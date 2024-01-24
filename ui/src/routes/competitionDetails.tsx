import { useRecoilState } from "recoil";
import { currentActivePageAtom } from "../components/navigation/utils/navigation.recoil";
import { useEffect } from "react";
import { LinkIDS } from "../components/navigation/utils/consts";
import Page from "../components/ui/page";
import Header from "../components/ui/header";
import Footer from "../components/footer/footer.organism";
import "@splidejs/react-splide/css";
import ProductCarousel from "../components/ui/carousel";

const CompetitionDetails = () => {
  const [, setIsActive] = useRecoilState(currentActivePageAtom);
  const title = "";
  const images: File[] = [];

  useEffect(() => {
    setIsActive(LinkIDS.COMPETITIONS);
  }, []);

  return (
    <Page>
      <Header title={title} />
      <ProductCarousel images={images} />
      <Footer />
    </Page>
  );
};

export default CompetitionDetails;
