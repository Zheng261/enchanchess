import React from "react";
import styles from "./HeaderLayout.module.css";

export default function HeaderLayout({ children }) {
  return (
    <div className={styles.container}>
      <title>Enchanchess -- chess with meme builds</title>
      <link rel="icon" href="/favicon.ico" />
      <h2 className={styles.title}>Enchanchess</h2>
      <img src = '/queenpiece.png' width='100' length='50'></img>
      <p className={styles.description}>
        Chess, but better!
      </p>
      {children}
    </div>
  );
}
