import React, { useState } from "react";
import './first_next_button/first_next_button.css'
const FirstButton = ({color, children, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed((prevIsPressed) => !prevIsPressed);
  };

  return (
    <button
    style={color}
    className="first_next_button"

      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default FirstButton;
