import React, { useState } from "react";
import "./display.css"

const Display = () => {
  const [content, setContent] = useState("");


  return (
    <div id="display-box">
      <p id="display">content</p>
    </div>
  )
}

export default Display;