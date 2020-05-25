import React, { useState, useEffect } from "react";

import GameCard from "./GameCard";
import styles from "./CardBox.module.css";

// Called from Gameplay.jsx, which is in turn called by GameLobby.jsx

export default function PlayedCardBox(props) {
  // do we allow picking?
  const [allowPicking, setAllowPicking] = useState(false);

  // card strings in play
  const [cardsInPlay, setCardsInPlay] = useState([]);

  const { socket, roomId, user } = props;

  // Backend signals all players have played their cards; allows cards to be picked by Czar (currently anyone)
  socket.on("allowPickCards", (res) => {
    const cardsSoFar = res;
    setCardsInPlay(cardsSoFar);
    setAllowPicking(true);
  });

  // Replies to card being picked by Czar
  socket.on("pickCardReply", (res) => {
    setAllowPicking(false);
    setCardsInPlay([]);
  });

  // Replies to card being played by someone
  socket.on("playCardReply", (res) => {
    setCardsInPlay(res);
  });

  // Game is over
  socket.on("gameOver", (res) => {
    // Do something?
    console.log("Game over");
  });

  useEffect(() => {
    // Probably should grab current cards, just in case, and figure out
    // what phase the game is currently in if someone suddenly rejoins
  }, []);

  // Send back that we picked a card
  const pickCard = (cardNum) => {
    socket.emit("pickCard", {
      roomId,
      user,
      card: cardsInPlay[cardNum],
    });
  };

  const playCardBoxContent = [];
  // If we allow picking, show the cards
  for (let cardNum = 0; cardNum < cardsInPlay.length; cardNum += 1) {
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
