import React from "react";
import cx from "classnames";
import styles from "./GameCard.module.css";

// a cards against humanity card, can be black or white
const GameCard = (props) => {
  const { color, text, pick} = props;
  console.log(pick)
  return (
    <div>
      <div
        className={cx(
          styles.card,
          { [styles.blackCard]: color === "black" },
          { [styles.whiteCard]: color === "white" }
        )}
      >
        {text}
        {(pick > 1)? (
          // Maybe we should include an image here?
          <div><br/> <i>Pick: {pick}</i></div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default GameCard;
