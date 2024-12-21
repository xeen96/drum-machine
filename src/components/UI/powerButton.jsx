import React, { useState } from "react";
import './powerButton.css'

const PowerButton = ({...props}) => {
  const {power, setPower} = props;

    const handlePower = () => {
      setPower((prev) => !power);
    }


  return (
    <div className="power-button-container"
    >
      <div className="power-button-line-invisible"></div>
      <div className=
      {`power-button-line-visible ${power ? 'off' : 'on'}`}>

      </div>
      <div
        className={`power-button-circle ${power ? 'off' : 'on'}`}
        onClick={handlePower}
        role="button"
      >

      </div>
    </div>
  )
}

export default PowerButton;