import React, { useState, useEffect } from "react"
import { usePower } from "../context/powerContext";
import { useVolume } from "../context/volumeContext";


const DrumPad = ({ ...props }) => {
  const { pad, keys, effects, setContent } = props;
  const { volume } = useVolume();
  const { isPoweredOn } = usePower();
  const [isActive, setIsActive] = useState(false);

  const playSound = () => {
    setIsActive(true);
    setContent(pad);

    const audioElement = document.getElementById(keys);
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.volume = volume;
      console.log(volume)
      audioElement.play().catch((err) => console.error("Error playing audio:", err));
    }

    setTimeout(() => setIsActive(false), 200);
  };

  const handleKeyDown = (event) => {
    if (event.code === `Key${keys.toUpperCase()}`) {
      playSound();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div
      className={`drum-pad ${isActive ? "active" : ""}`}
      id={pad}
      role="button"
      onClick={playSound}>

      {keys}

      <audio
        className="clip"
        id={keys}
        src={!isPoweredOn ? effects : "#"}
      >

      </audio>
    </div>
  );
};
export default DrumPad;