import React from "react";
import styles from "./StyledButton.module.css";

const StyledButton = (props) => (
  <button className={styles.styledBtn} onClick={props.onClick} type="button">
    {props.children}
  </button>
);

export default StyledButton;
