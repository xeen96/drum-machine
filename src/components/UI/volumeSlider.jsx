import React from "react";
import './volumeSlider.css'
import { usePower } from "../../context/powerContext";
import { useVolume } from "../../context/volumeContext";

const VolumeSlider = ({ ...props }) => {
  const { setContent } = props;
  const { isPoweredOn } = usePower();
  const { volume, setVolume } = useVolume();

  const handleChangeVolume = (e) => {
    setVolume((prevVolume) => parseFloat(e.target.value));
    setContent((prevContent) => `Volume: ${(e.target.value * 100).toFixed()}`)
  }

  return (
    <div className="volume-slider">
      <input
        max={1}
        min={0}
        step={0.01}
        type="range"
        onChange={handleChangeVolume}
        value={volume}
        disabled={isPoweredOn}
      />
    </div>
  )

}

export default VolumeSlider;