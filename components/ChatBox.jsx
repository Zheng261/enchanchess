import React from "react";
import styles from "./ChatBox.module.css";

// TODO: NEED TO CHANGE THIS WHEN WE DEPLOY
// import io from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:8000"; // backend server endpoint

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      userMessages: [],
    };

    this.messagesEnd = React.createRef();

    this.sendMessage = (ev) => {
      ev.preventDefault();

      const { roomId, user, socket } = this.props;
      const { message, userMessages } = this.state;
      socket.on("RECEIVE_MESSAGE".concat(roomId), (data) => {
        console.log("DATA", data);
        this.setState({ userMessages: [...userMessages, data] });
      });

      socket.emit("sendChatMessage", {
        author: `${user}:`,
        message,
        roomId,
      });
      this.setState({ message: "" });
    };

    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  // componentDidUpdate() {
  // 	this._div.scrollTop = this._div.scrollHeight;
  // }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    // lel not working
    this.messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    // state and prop destructuring
    const { message, userMessages } = this.state;

    return (
      <div className={styles.gamechat}>
        <div className={styles.messages}>
          {userMessages.map((data) => (
            <div className={styles.notification}>
              <div
                className={
                  data.isUserUpdate
                    ? styles.playerText
                    : styles.gameNotification
                }
              >
                <strong>{data.message.author}</strong>
                {data.message.message}
              </div>
            </div>
          ))}
        </div>
        <div ref={this.messagesEnd} />
        <form onSubmit={this.sendMessage}>
          <input
            type="text"
            placeholder="Enter message"
            className={styles.gamechat}
            value={message}
            onChange={(ev) => this.setState({ message: ev.target.value })}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default ChatBox;
