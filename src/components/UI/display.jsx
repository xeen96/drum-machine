import React from "react";
import "./display.css"
import { usePower } from "../../context/powerContext";

const Display = ({ content }) => {
  const { isPoweredOn } = usePower();

  return (
    <div id="display-box">
      <p id="display">{!isPoweredOn ? content : 'Device is Off'}</p>
    </div>
  )
}

export default Display;