import Link from "next/link";
import styles from "./GamePlay.module.css";
import GameCard from "./game-objects/GameCard";
import cx from "classnames";
import CzarView from "./CzarView";
import { Html5Entities } from "html-entities";

// Called from Gameplay.jsx, which is in turn called by GameLobby.jsx
class PlayGame_CardBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisUserCards: [],
      canPlayCards: true,
    };
    this.playCard = this.playCard.bind(this);
  }

  componentDidMount() {
    const htmlEntities = new Html5Entities();
    // After receiving new hand (or first hand), decode everything
    console.log("Looking for , ", "drawCardReply".concat(this.props.user));
    this.props.socket.on("drawCardReply".concat(this.props.user), (res) => {
      console.log("Cards received : ", res);
      for (let i = 0; i < res.length; i++)
        res[i] = htmlEntities.decode(res[i]).replace(/<br>/g, "\n");
      // pushes string to card drawn
      this.setState({ thisUserCards: res });
    });

    // Once a card has been picked, we can play cards again
    this.props.socket.on("pickCardReply", (res) => {
      // Redundancy to make sure czar can't actually play cards
      if (this.props.czar !== this.props.user) {
        this.setState({ canPlayCards: true });
      }
    });

    this.getDrawnCards();
  }

  // Basically this just updates your hand. Your cards are pre-drawn.
  getDrawnCards = function () {
    this.props.socket.emit("getDrawnCards", {
      roomId: this.props.roomId,
      user: this.props.user,
    });
  };

  playCard = function (cardNum) {
    // Only if we can play cards
    if (this.state.canPlayCards) {
      console.log("Playing card ", this.state.thisUserCards[cardNum]);
      this.props.socket.emit(
        "playCard",
        // Passes what card the user played, the room ID, and the username
        {
          roomId: this.props.roomId,
          user: this.props.user,
          card: this.state.thisUserCards[cardNum],
        }
      );
      // Get rid of card
      let newUserCards = this.state.thisUserCards;
      newUserCards.splice(cardNum, 1);
      this.setState({ thisUserCards: newUserCards });
      // Can't play cards until one is picked
      this.setState({ canPlayCards: false });
    }
  };

  render() {
    let cardBoxContent = [];
    for (
      var cardNum = 0;
      cardNum < this.state.thisUserCards.length;
      cardNum++
    ) {
      // If we need to start a new row of cards
      let tempCardNum = cardNum;

      cardBoxContent.push(
        <div key={cardNum} onClick={() => this.playCard(tempCardNum)}>
          <GameCard color={"white"} text={this.state.thisUserCards[cardNum]} />
        </div>
      );
    }
    if (this.props.czar === this.props.user) {
      return (
        <React.Fragment>
          <div
            className={cx(styles.item, styles.whiteCards, styles.cardContainer)}
          >
            {cardBoxContent}
          </div>
          <CzarView />
        </React.Fragment>
      );
    } else {
      return (
        <div
          className={cx(styles.item, styles.whiteCards, styles.cardContainer)}
        >
          {cardBoxContent}
        </div>
      );
    }
  }
}

export default PlayGame_CardBox;
