import React from "react";
import cx from "classnames";

import styles from "./Modal.module.css";

const Modal = (props) => {
  const { visible, children } = props;
  return (
    <div
      className={cx(
        styles.modalContainer,
        { [styles.show]: visible === true },
        { [styles.hide]: visible === false }
      )}
    >
      <section className={styles.modalBody}>{children}</section>
    </div>
  );
};

export default Modal;
