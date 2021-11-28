import React from "react";
import styles from "./Button.module.scss";

const Button = ({ text, style, onClick, disabled, className }) => {
  return (
    <div
      className={`${styles.Button} ${className} ${disabled && styles.Disabled}`}
      style={style}
      onClick={!disabled ? onClick : null}
    >
      {text}
    </div>
  );
};

export default Button;
