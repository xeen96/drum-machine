import React, { useState } from "react";
import "./display.css"

const Display = ({content}) => {

  return (
    <div id="display-box">
      <p id="display">{content}</p>
    </div>
  )
}

export default Display;