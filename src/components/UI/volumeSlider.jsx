import React, { useState } from "react";
import './volumeSlider.css'

const VolumeSlider = ({...props}) => {
  const {content, setContent} = props;
  const [volume, setVolume] = useState(0.5);

  const handleChangeVolume = (e) => {
    setVolume((prevVolume) => e.target.value);
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
      value={volume}/>
    </div>
  )

}

export default VolumeSlider;