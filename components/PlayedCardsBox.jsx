import cx from "classnames";
import React, { useState, useContext, useEffect } from "react";
// import PageLayout from '../components/PageLayout'
import { useRouter } from "next/router";
import CardDiv from "./ui-elements/CardDiv";
import StyledButton from "./ui-elements/StyledButton";
import GameCard from "./game-objects/GameCard";
import styles from "./GamePlay.module.css";

// Called from Gameplay.jsx, which is in turn called by GameLobby.jsx

export default function PlayedCardsBox(props) {
  const router = useRouter();

  // do we allow picking?
  const [allowPicking, setAllowPicking] = useState(false);

  // card strings in play
  const [cardsInPlay, setCardsInPlay] = useState([]);

  // Backend signals all players have played their cards; allows cards to be picked by Czar (currently anyone)
  props.socket.on("allowPickCards", (res) => {
    const cardsSoFar = res;
    setCardsInPlay(cardsSoFar);
    setAllowPicking(true);
  });

  // Replies to card being picked by Czar
  props.socket.on("pickCardReply", (res) => {
    setAllowPicking(false);
    setCardsInPlay([]);
  });

  // Replies to card being played by someone
  props.socket.on("playCardReply", (res) => {
    const cardsSoFar = res;
    setCardsInPlay(res);
  });

  // Game is over
  props.socket.on("gameOver", (res) => {
    // Do something?
    console.log("Game over");
  });

  useEffect(() => {
    // Probably should grab current cards, just in case, and figure out
    // what phase the game is currently in if someone suddenly rejoins
  }, []);

  // Send back that we picked a card
  const pickCard = function (cardNum) {
    props.socket.emit("pickCard", {
      roomId: props.roomId,
      user: props.user,
      card: cardsInPlay[cardNum],
    });
  };

  const playCardBoxContent = [];
  // If we allow picking, show the cards
  for (let cardNum = 0; cardNum < cardsInPlay.length; cardNum++) {
    // If we need to start a new row of cards
    const tempCardNum = cardNum;

    // Do we allow Czar to see/pick cards yet?
    if (allowPicking) {
      playCardBoxContent.push(
        <div onClick={() => pickCard(tempCardNum)} key={tempCardNum}>
          <GameCard color="white" text={cardsInPlay[cardNum]} />
        </div>
      );
    } else {
      // If not all players have played yet, we just show blank cards
      playCardBoxContent.push(
        <div key={tempCardNum}>
          <GameCard color="white" text="" />
        </div>
      );
    }
  }

  return <div className={styles.whiteCards}>{playCardBoxContent}</div>;
}
