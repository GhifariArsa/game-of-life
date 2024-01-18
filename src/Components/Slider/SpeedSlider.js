import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { useGrid } from "../../Context/gridContext";
import { PRIMARY } from "../../constants/constants";

export default function SpeedSlider() {
  const [sliderValue, setSliderValue] = useState(80);
  const { setContextSliderValue } = useGrid();
  const [showToolTip, setShowToolTip] = useState(false);

  // Changing the value on mouseleave to reduce lag from context
  const mouseLeave = () => {
    setShowToolTip(false);
    setContextSliderValue(sliderValue);
  };

  return (
    <Slider
      id="slider"
      defaultValue={80}
      min={1}
      max={100}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowToolTip(true)}
      onMouseLeave={mouseLeave}
    >
      <SliderTrack>
        <SliderFilledTrack></SliderFilledTrack>
      </SliderTrack>
      <Tooltip
        hasArrow
        bg={PRIMARY}
        color="white"
        placement="top"
        isOpen={showToolTip}
        label={`${sliderValue}%`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
}
