import React from "react";
import "./switchButton.css";

const SwitchButton = ({...props }) => {
  const {kit, setKit, setContent} = props;

  const handleClick = () => {
    setKit((prevKit) => (prevKit === "heater" ? "piano" : "heater"));
    setContent(prev => kit.toUpperCase())
  };

  return (
    <div className="control">
      <p>Bank</p>
      <div className="select">
        <div
          className="inner"
          role="button"
          onClick={handleClick}
          style={{ float: kit === "heater" ? "left" : "right" }}
        ></div>
      </div>
    </div>
  );
};

export default SwitchButton;
