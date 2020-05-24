import cx from "classnames";
import styles from "./GameCard.module.css";

// a cards against humanity card, can be black or white
const GameCard = (props) => (
  <div
    className={cx(
      styles.card,
      { [styles.blackCard]: props.color === "black" },
      { [styles.whiteCard]: props.color === "white" }
    )}
  >
    {props.text}
  </div>
);

export default GameCard;
