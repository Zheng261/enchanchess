import React from "react";
import cx from "classnames";
import styles from "./CardBox.module.css";

// Called from Gameplay.jsx
// component that holds white cards in user's hand
class HandCardBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisUserMoves: [],
      canPlayMove: true,
    };
  }

  componentDidMount() {
    const {socket, user} = this.props;
    // Once a card has been picked, we can play cards again
    socket.on("allowPlayMove", (res) => {
      // Redundancy to make sure czar can't actually play cards
        this.setState({ canPlayMove: true });
    });
  }

  render() {
    const cardBoxContent = [];
    return (
      <div className={cx(styles.item, styles.whiteCards, styles.cardContainer)}>
        {cardBoxContent}
      </div>
    );
  }
}

export default HandCardBox;
