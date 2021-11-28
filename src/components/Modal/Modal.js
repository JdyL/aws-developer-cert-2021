import React from "react";
import styles from "./Modal.module.scss";

export const Modal = ({ children, setShowModal }) => {
  return (
    <>
      <div className={styles.Modal}>{children}</div>
      <div className={styles.ModalBg} onClick={() => setShowModal(false)}></div>
    </>
  );
};

export default Modal;
