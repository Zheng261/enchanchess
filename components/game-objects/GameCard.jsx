import React from "react";
import cx from "classnames";
import styles from "./GameCard.module.css";

// a cards against humanity card, can be black or white
const GameCard = (props) => {
  const { color, text } = props;
  return (
    <div
      className={cx(
        styles.card,
        { [styles.blackCard]: color === "black" },
        { [styles.whiteCard]: color === "white" }
      )}
    >
      {text}
    </div>
  );
};

export default GameCard;
