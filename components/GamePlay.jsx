import React, { useContext, useEffect, useState } from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import ChatBox from "./ChatBox";
import HandCardBox from "./game-objects/HandCardBox";
import BlackCard from "./game-objects/BlackCard";
import PlayedCardBox from "./game-objects/PlayedCardBox";
import GameSettingsModal from "./ui-elements/GameSettingsModal";

import styles from "./GamePlay.module.css";

// CALLED FROM: rooms/[id].jsx
// screen where cards/actual game can be played lives
export default function GamePlay(props) {
  // People in the room
  const [playersToPoints, setPlayersToPoints] = useState({});
  const [players, setPlayers] = useState([]);
  const [czar, setCzar] = useState("");
  const [visible, setVisible] = useState(false);

  const { roomId, socket, user } = props;

  // only show scores for players in players list
  const playerPointList = Object.entries(playersToPoints).map(
    ([key, value]) => {
      const el = (
        <li key={key}>
          {" "}
          {value} : {key}{" "}
        </li>
      );
      return players.includes(key) ? el : null;
    }
  );

  console.log(players, playersToPoints);

  // from now on put socket.on code before socket.emit code in useEffect to avoid race conditions
  useEffect(() => {
    // Logs user in. If user already logged in, this does nothing. Adding layer of redundancy
    // In case user joins mid-game.
    console.log("Joining room with ", roomId, "and username ", user);

    socket.on("dispatchPlayers", (res) => {
      console.log("recievd players update", res);
      setPlayers(res);
      // socket.emit('getPlayersPoints', roomId)
    });

    // Get ready for player list to update
    socket.on("getCardCzarReply", (res) => {
      setCzar(res);
      console.log("Current card czar: ", czar);
    });

    socket.emit("joinRoom", { roomId, user });

    // Figure out who current czar is
    socket.emit("getCardCzar", roomId);
  }, []);

  // when the player list changes, update the scoreboard
  useEffect(() => {
    // Get ready for player list to update
    socket.on("dispatchPlayerPoints", (res) => {
      setPlayersToPoints(res);
      console.log("Players and points ", playersToPoints, res);
    });

    console.log("PLAYERS", players);
  }, [players]);

  // functions for toggling settings menu
  const openSettings = () => {
    setVisible(true);
  };

  const closeSettings = () => {
    setVisible(false);
  };

  return (
    <div className={styles.grid}>
      <div className={cx(styles.item, styles.dealerContainer)}>
        <div className={styles.header}>
          <div>
            <h2>Cards Against Humanity</h2>
            <p>
              <code>Social distancing edition</code>
            </p>
          </div>
          <div id={styles.settings} onClick={openSettings}>
            <FontAwesomeIcon icon={faCog} size="2x" />
          </div>
        </div>
        <div className={styles.dealerCardContainer}>
          <BlackCard socket={socket} roomId={roomId} />
          <PlayedCardBox
            socket={socket}
            roomId={roomId}
            user={user}
            czar={czar}
          />
        </div>
      </div>

      <div className={cx(styles.item, styles.scoreboard, styles.rightItems)}>
        <div className={styles.itemHeader}>Scoreboard</div>
        <center>
          Czar:
          {czar}
        </center>
        <ul>{playerPointList}</ul>
      </div>

      <div className={styles.overlayContainer}>
        <HandCardBox socket={socket} roomId={roomId} user={user} czar={czar} />
      </div>

      <div className={cx(styles.item, styles.rightItems, styles.chatContainer)}>
        <div className={styles.itemHeader}>Game Chat</div>
        <ChatBox roomId={roomId} user={user} socket={socket} />
      </div>

      <GameSettingsModal
        closeSettings={closeSettings}
        visible={visible}
        socket={socket}
        roomId={roomId}
      />
    </div>
  );
}
