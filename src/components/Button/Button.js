import React from "react";
import "./Button.css";

const Button = ({ text, style, onClick, disabled }) => {
  return (
    <div
      className={`Button ${disabled && "-disabled"}`}
      style={style}
      onClick={!disabled ? onClick : null}
    >
      {text}
    </div>
  );
};

export default Button;
