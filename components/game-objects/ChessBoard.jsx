import React from "react";
import cx from "classnames";
import styles from "./ChessBoard.module.css";

// a cards against humanity card, can be black or white
const ChessBoard = (props) => {
  return (
    <div>
      <div
        className={cx(
          styles.card,
          styles.blackCard,
        )}
      >
      Hello
      </div>
    </div>
  );
};

export default ChessBoard;
