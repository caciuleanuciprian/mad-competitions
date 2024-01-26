import {
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { useState } from "react";

const TicketsSlider = () => {
  const [sliderValue, setSliderValue] = useState(20);

  return (
    <Slider
      colorScheme="green"
      aria-label="slider-ex-6"
      onChange={(val) => setSliderValue(val)}
      value={sliderValue}
    >
      <SliderMark
        value={sliderValue}
        textAlign="center"
        bg="green.400"
        color="white"
        mt="-8"
        ml="-10"
        w="20"
        fontSize={"sm"}
      >
        {sliderValue} Tickets
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};

export default TicketsSlider;
