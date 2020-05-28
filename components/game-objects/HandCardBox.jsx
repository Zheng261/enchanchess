import React from "react";
import cx from "classnames";
import { Html5Entities } from "html-entities";
import GameCard from "./GameCard";
import CzarView from "./CzarView";

import styles from "./CardBox.module.css";

// Called from Gameplay.jsx
// component that holds white cards in user's hand
class HandCardBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisUserCards: [],
      canPlayCards: true,
      numCardsPick: 1,
      numCardsCurrPicked: 0,
    };

    this.getDrawnCards = this.getDrawnCards.bind(this);
    this.playCard = this.playCard.bind(this);
  }

  
  componentDidMount() {
    const { socket, user, czar } = this.props;
    const htmlEntities = new Html5Entities();
    // After receiving new hand (or first hand), decode everything
    console.log("Looking for , ", "drawCardReply".concat(user));
    socket.on("drawCardReply".concat(user), (res) => {
      console.log("Cards received : ", res);
      for (let i = 0; i < res.length; i += 1)
        res[i] = htmlEntities.decode(res[i]).replace(/<br>/g, "\n");
      // pushes string to card drawn
      this.setState({ thisUserCards: res });
    });

    // Once a card has been picked, we can play cards again
    socket.on("allowChooseCards", (res) => {
      // Redundancy to make sure czar can't actually play cards
      if (czar !== user) {
        this.setState({ canPlayCards: true });
        this.setState({ numCardsPick : res})
      }
    });

    this.getDrawnCards();
  }

  // Basically this just updates your hand. Your cards are pre-drawn.
  getDrawnCards() {
    const { socket, roomId, user } = this.props;
    socket.emit("getDrawnCards", {
      roomId,
      user,
    });
  }

  playCard(cardNum) {
    const { socket, roomId, user } = this.props;
    const { thisUserCards, canPlayCards, numCardsPick, numCardsCurrPicked} = this.state;
    console.log("we can pick : ",  numCardsPick)
    console.log("we've picked : ",  numCardsCurrPicked)
    // Only if we can play cards
    if (canPlayCards) {

      console.log("Playing card ", thisUserCards[cardNum]);
      socket.emit(
        "playCard",
        // Passes what card the user played, the room ID, and the username
        {
          roomId,
          user,
          card: thisUserCards[cardNum],
        }
      );
      // Get rid of card
      const newUserCards = thisUserCards;
      newUserCards.splice(cardNum, 1);
      
      if ((numCardsCurrPicked+1) >= numCardsPick) {
        // Can't play more cards until one is picked, if we picked the correct # cards
        this.setState({ canPlayCards: false });
      }

      this.setState({ numCardsCurrPicked: numCardsCurrPicked+1});
      this.setState({ thisUserCards: newUserCards });
    }
  }

  render() {
    const { user, czar } = this.props;
    const { thisUserCards } = this.state;
    const cardBoxContent = [];
    for (let cardNum = 0; cardNum < thisUserCards.length; cardNum += 1) {
      // If we need to start a new row of cards
      const tempCardNum = cardNum;

      cardBoxContent.push(
        <div key={cardNum} onClick={() => this.playCard(tempCardNum)}>
          <GameCard color="white" text={thisUserCards[cardNum]} />
        </div>
      );
    }
    if (czar === user) {
      return (
        <React.Fragment>
        <center>
          <div
            className={cx(styles.item, styles.whiteCards, styles.cardContainer)}
          >
            {cardBoxContent}
          </div>
          </center>
          <CzarView />
        </React.Fragment>
      );
    }
    return (
      <div className={cx(styles.item, styles.whiteCards, styles.cardContainer)}>
        {cardBoxContent}
      </div>
    );
  }
}

export default HandCardBox;
