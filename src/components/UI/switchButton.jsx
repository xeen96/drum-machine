import React, { useState } from "react";
import './switchButton.css'
const SwitchButton = () => {
  const [kit, setKit] = useState("heater");
  const [floatStyle, setFloatStyle] = useState('left')


  const handleClick = () => {
    setKit(kit =>  kit === "heater" ? "piano" : "heater");
    setFloatStyle(floatStyle => floatStyle === "left" ? "right" : "left");
    console.log(floatStyle);
  }

  return (
    <div className="control">
      <p>Bank</p>
      <div className="select">

        <div
        className="inner"
        role="button"
        onClick={handleClick}
        style={{float: floatStyle}}
        >

        </div>
      </div>
    </div>


  )
}

export default SwitchButton;