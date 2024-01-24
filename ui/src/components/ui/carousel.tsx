import { useEffect, useRef } from "react";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import { Flex, Image } from "@chakra-ui/react";

interface ProductCarouselProps {
  images: File[];
}

const ProductCarousel = ({ images }: ProductCarouselProps) => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    //@ts-ignore
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      //@ts-ignore
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const renderSlides = () => {
    return images.map((slide: any, index: number) => (
      <SplideSlide key={slide.name}>
        <Image
          src={URL.createObjectURL(slide as Blob)}
          alt={`${slide.name}-${index}`}
          style={{ objectFit: "contain" }}
        />
      </SplideSlide>
    ));
  };

  const thumbWidth = window.innerWidth / images.length;

  const mainOptions: Options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    pagination: false,
    height: "50rem",
    cover: true,
    arrows: true,
  };

  const thumbsOptions: Options = {
    type: "slide",
    perPage: 5,
    rewind: true,
    pagination: false,
    fixedWidth: thumbWidth,
    fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
    arrows: false,
  };

  return (
    <Flex gap={4} overflow={"hidden"}>
      <Flex flexDir={"column"} w={"50%"}>
        <Splide
          options={mainOptions}
          ref={mainRef}
          aria-labelledby="thumbnail-slider-main"
        >
          {renderSlides()}
        </Splide>

        <Splide
          options={thumbsOptions}
          ref={thumbsRef}
          aria-label="thumbnail-slider-slide"
        >
          {renderSlides()}
        </Splide>
      </Flex>
    </Flex>
  );
};

export default ProductCarousel;
