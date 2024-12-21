import React, { useState } from "react";
import './powerButton.css'

const PowerButton = () => {
  const [isEnabled, setState] = useState(false);
  const setPower = () => {
    setState(!isEnabled);
  };

  return (
    <div className="power-button-container"
    >
      <div className="power-button-line-invisible"></div>
      <div className=
      {`power-button-line-visible ${isEnabled ? 'off' : 'on'}`}>

      </div>
      <div
        className={`power-button-circle ${isEnabled ? 'off' : 'on'}`}
        onClick={setPower}
        role="button"
      >

      </div>
    </div>
  )
}

export default PowerButton;