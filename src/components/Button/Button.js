import React from "react";
import "./Button.css";

const Button = ({ text, style, onClick, disabled, className }) => {
  return (
    <div
      className={`Button ${className} ${disabled && "-disabled"}`}
      style={style}
      onClick={!disabled ? onClick : null}
    >
      {text}
    </div>
  );
};

export default Button;
