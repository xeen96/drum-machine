import React from "react";
import './powerButton.css'
import { usePower } from "../../context/powerContext";


const PowerButton = () => {
  const { isPoweredOn, setIsPoweredOn } = usePower();

  const handlePower = () => {
    setIsPoweredOn((isPoweredOn) => !isPoweredOn);
  }


  return (
    <div className="power-button-container"
    >
      <div className="power-button-line-invisible"></div>
      <div className=
        {`power-button-line-visible ${isPoweredOn ? 'off' : 'on'}`}>

      </div>
      <div
        className={`power-button-circle ${isPoweredOn ? 'off' : 'on'}`}
        onClick={handlePower}
        role="button"
      >

      </div>
    </div>
  )
}

export default PowerButton;