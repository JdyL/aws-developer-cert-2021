import React from "react";
import styles from "./Image.module.scss";

export const Image = ({ src, alt = "" }) => {
  return <img src={src} alt={alt} className={styles.Image} />;
};

export default Image;
